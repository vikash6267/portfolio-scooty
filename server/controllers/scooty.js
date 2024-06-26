const Scooty = require("../model/scooty");
const Service = require("../model/service");
const { uploadImageToCloudinary } = require("../config/imageUploader");

exports.createScooty = async (req, res) => {
  try {
    let { title, offerName, cashBack, color, conditions } = req.body;

    console.log(req.files);
    const thumbnail = req.files.image;

    if (!title || !offerName || !cashBack || !color || !conditions) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    // Upload the Thumbnail to Cloudinary
    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );

    const newScooty = await Scooty.create({
      title,
      offerName,
      cashBack,
      color,
      conditions,
      image: thumbnailImage.secure_url,
    });

    res.status(200).json({
      success: true,
      data: newScooty,
      message: "Scooty Created Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create Scooty",
      error: error.message,
    });
  }
};

exports.getAllScooty = async (req, res) => {
  try {
    const allScooty = await  Scooty.find({});
    res.status(200).json({
      success: true,
      data: allScooty,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to get Scooty",
      error: error.message,
    });
  }
};

exports.addSerive = async (req, res) => {
  try {
    let { title, description, price, color, charging, topspeed, range } =
      req.body;

    console.log(req.files);
    const thumbnail = req.files.image;

    if (
      !title ||
      !description ||
      !price ||
      !color ||
      !charging ||
      !topspeed ||
      !range
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    // Upload the Thumbnail to Cloudinary
    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );

    const newScooty = await Service.create({
      title,
      description,
      price,
      color,
      charging,
      topspeed,
      range,
      image: thumbnailImage.secure_url,
    });

    res.status(200).json({
      success: true,
      data: newScooty,
      message: "Scooty Created Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create Scooty",
      error: error.message,
    });
  }
};

exports.deleteScooty = async (req, res) => {
  try {
    const {scootyId} = req.body; // Assuming Scooty ID is passed in the URL params
    const deletedScooty = await Scooty.findByIdAndDelete(scootyId);
    if (!deletedScooty) {
      return res.status(404).json({
        success: false,
        message: "Scooty not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Scooty deleted successfully",
      data: deletedScooty,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete Scooty",
      error: error.message,
    });
  }
};


exports.getAllServices = async (req, res) => {
  try {
    const allScooty = await  Service.find({});
    res.status(200).json({
      success: true,
      data: allScooty,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to get Service",
      error: error.message,
    });
  }
};


exports.deleteService = async (req, res) => {
  try {
    const {scootyId} = req.body; // Assuming Scooty ID is passed in the URL params
    const deletedScooty = await Service.findByIdAndDelete(scootyId);
    if (!deletedScooty) {
      return res.status(404).json({
        success: false,
        message: "Scooty not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Scooty deleted successfully",
      data: deletedScooty,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete Scooty",
      error: error.message,
    });
  }
};
