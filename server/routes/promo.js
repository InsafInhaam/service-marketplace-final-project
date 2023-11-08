const express = require("express");
const { AddPromo, ValidatePromo } = require("../controllers/promoController");

const router = express.Router();

router.post("/add-promo", AddPromo);
router.post("/validate-promo", ValidatePromo);

module.exports = router;