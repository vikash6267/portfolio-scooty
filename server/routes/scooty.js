const express = require("express");

const router = express.Router();
const { auth } = require("../middleware/auth")

const {
    createScooty, getAllScooty, addSerive,deleteScooty,getAllServices,deleteService
} = require("../controllers/scooty")

router.post("/createScooty", createScooty)

router.get("/getScooty", getAllScooty)

router.post("/addSerive", addSerive)

router.delete("/deleteScooty", deleteScooty)

router.get("/getAllServices", getAllServices)
router.delete("/deleteService", deleteService)





module.exports = router;

