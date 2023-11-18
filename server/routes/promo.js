const express = require("express");
const { AddPromo, ValidatePromo, GetPromo } = require("../controllers/promoController");

const router = express.Router();

router.post("/add-promo", AddPromo);
router.post("/validate-promo", ValidatePromo);
router.get("/get-promo", GetPromo);

module.exports = router;