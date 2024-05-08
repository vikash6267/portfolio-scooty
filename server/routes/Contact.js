const express = require("express")
const router = express.Router()
const { contactUsController, distributor } = require("../controllers/ContactUs")

router.post("/contact", contactUsController)
router.post("/enquiry", distributor)

module.exports = router
