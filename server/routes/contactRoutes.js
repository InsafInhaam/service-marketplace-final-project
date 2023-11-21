const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/submit", contactController.submitContactForm);
router.get("/submissions", contactController.viewContactSubmissions);

module.exports = router;
