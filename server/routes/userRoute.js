const express = require("express");
const { createInfo, getAllInfo, login } = require("../controllers/userCtrl");
const{ exportToExcel } = require("../controllers/data")

const router = express.Router();

router.post("/", createInfo);
router.get("/", getAllInfo);
router.post("/admin",login)
router.get("/download",exportToExcel)




module.exports = router;

