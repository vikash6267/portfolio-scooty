const express = require("express");

const router = express.Router();
const { auth } = require("../middleware/auth")

const {
    createScooty, getAllScooty
} = require("../controllers/scooty")

router.post("/createScooty", createScooty)

router.get("/getScooty", getAllScooty)

router.post("/addSerive", addSerive)



module.exports = router;

