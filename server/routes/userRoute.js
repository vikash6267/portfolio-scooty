const express = require("express");
const { login } = require("../controllers/userCtrl");
const{ exportToExcel } = require("../controllers/data")
const{ auth } = require("../middleware/auth")
const router = express.Router();


router.post("/admin",login)
router.get("/download", exportToExcel)




module.exports = router;

