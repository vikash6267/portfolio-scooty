const userModel = require("../model/user");



const bcrypt = require("bcrypt")
const User = require("../model/admin")
const jwt = require("jsonwebtoken")
require("dotenv").config()




const login = async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      })
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      )

      user.token = token
      user.password = undefined
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    })
  }
}

const createInfo = async (req, res) => {
   const{email,contact,firstname,message} = req.body;
    try {
        const infoSave = await userModel.create({
            email,
            contact,
            firstname,
            message
        });
        res.status(200).json({
            success: true,
            data: infoSave,
          })
    } catch (error) {
        res.status(500).send({ message: "Somethig went wrong", success: false });
        console.log(error)
    }
}

const getAllInfo = async (req, res) => {
    try {
        const allInfo = await userModel.find();
        res.status(200).json({
            success: true,
            data: allInfo,
          })
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" })
    }
}
module.exports = { createInfo, getAllInfo,login };