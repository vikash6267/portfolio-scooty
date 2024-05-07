const Scooty = require("../model/scooty")
const {uploadImageToCloudinary} = require("../config/imageUploader")


exports.createScooty = async(req, res) =>{
    try{
        let {
            title,
            offerName,
            cashBack,
            color,
            conditions
          } = req.body
          // Get thumbnail image from request files
          const thumbnail = req.files.thumbnailImage  

          if(  ! title ||
           ! offerName ||
           ! cashBack ||
           ! color ||
           ! conditions){
            return res.status(400).json({
                success: false,
                message: "All Fields are Mandatory",
              })
           }


             // Upload the Thumbnail to Cloudinary
    const thumbnailImage = await uploadImageToCloudinary(
        thumbnail,
        process.env.FOLDER_NAME
      )

      const newScooty = await Scooty.create({
          title,
            offerName,
            cashBack,
            color,
            conditions,
        thumbnail: thumbnailImage.secure_url,
       
      })

      res.status(200).json({
        success: true,
        data: newScooty,
        message: "Scooty Created Successfully",
      })

    }catch(error){
        console.error(error)
        res.status(500).json({
          success: false,
          message: "Failed to create Scooty",
          error: error.message,
        })
    }
}


exports.getAllScooty = async(req, res) =>{
    try{
        const allScooty = Scooty.find()
        res.status(200).json({
            success: true,
            data: allScooty,
          })
    
        }catch(error){
            console.error(error)
            res.status(500).json({
              success: false,
              message: "Failed to get Scooty",
              error: error.message,
            })
        }
}
