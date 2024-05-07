const { contactUsEmail } = require("../template/contactFormRes")
const{ distibutorEmail } = require("../template/distibutorForm")
const mailSender = require("../utils/mailSender")
const User = require("../model/user")


exports.contactUsController = async (req, res) => {
  const { email, firstname, message,contact } = req.body
  // console.log(req.body)
  try {
    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, contact, firstname, message)
    )

  const newU =   await User.create({
      email, firstname, message,contact
    })
console.log(newU)



    console.log("Email Res ", emailRes)
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}



exports.distributor = async (req, res) => {
  const { name, location, contact } = req.body
  console.log(req.body)
  try {
    const emailRes = await mailSender(
      "vikasmaheshwari6267@gmail.com",
      "Recived new distributor mail ",
      distibutorEmail(name, location, contact)
    )


   
    // console.log("Email Res ", emailRes)
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    // console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}
