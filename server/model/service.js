const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    color :{
        type:String,
        required:true
    },
    topspeed :{
        type:String,
        required:true
    },
    range :{
        type:String,
        required:true
    },
    charging :{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("service", serviceSchema);

module.exports = userModel;