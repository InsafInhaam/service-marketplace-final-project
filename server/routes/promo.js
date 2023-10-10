const express = require("express");
const { AddPromo, ValidatePromo } = require("../controllers/PromoControllers");

// const { Authenticate } = require("../middleware/Auth.js");
// const { AddPromo, ValidatePromo } = require("../controllers/PromoControllers.js");
const router = express.Router();

// router.use(Authenticate);
router.post("/add-promo", AddPromo);
router.post("/validate-promo", ValidatePromo);

module.exports = router;