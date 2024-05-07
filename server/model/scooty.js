const mongoose = require("mongoose");

const scootySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    offerName:{
        type: String,
        required: true
    },
    cashBack: {
        type: String,
        required: true
    },
    color :{
        type:String,
        required:true
    },
    conditions :{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("scooty", scootySchema);

module.exports = userModel;