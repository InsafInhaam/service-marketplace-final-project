const express = require("express");
const { AddPromo, ValidatePromo, GetPromo, DeletePromo } = require("../controllers/promoController");

const router = express.Router();

router.post("/add-promo", AddPromo);
router.post("/validate-promo", ValidatePromo);
router.get("/get-promo", GetPromo);
router.delete("/delete-promo/:id", DeletePromo);

module.exports = router;