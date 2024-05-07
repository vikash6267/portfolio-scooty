const express = require("express");

const router = express.Router();
const { auth } = require("../middleware/auth")

const {
    createScooty, getAllScooty, addSerive,deleteScooty
} = require("../controllers/scooty")

router.post("/createScooty", createScooty)

router.get("/getScooty", getAllScooty)

router.post("/addSerive", addSerive)

router.delete("/deleteScooty", deleteScooty)




module.exports = router;

