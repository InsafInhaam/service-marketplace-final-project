const Promo = require("../models/Promo.js");

exports.AddPromo = async (req, res) => {
  try {
    const {
      promoCode,
      description,
      startDate,
      expiryDate,
      discountPercentage,
      isActive,
    } = req.body;

    const newPromoCode = new Promo({
      promoCode,
      description,
      startDate,
      expiryDate,
      discountPercentage,
      isActive,
    });

    const savedPromo = await newPromoCode.save();
    // console.log(savedPromo);
    return res.status(201).json({ message: "Promocode added successfully", savedPromo });
  } catch (err) {
    res.status(400).json({ error: "Failed to create promo code" });
  }
};

exports.ValidatePromo = async (req, res) => {
  try {
    const { promoCode } = req.body;
    const promo = await Promo.findOne({ promoCode });
    const date = new Date();
    const currentTime = date.toISOString().substring(0, 10);

    if (!promo) {
      return res.status(404).json({ message: "Invalid promo code." });
    }
    if (promo.expiryDate < currentTime) {
      return res.status(400).json({ message: "Promo code is expired." });
    }

    if (!promo.isActive) {
      return res.status(403).json({ message: "Promo code is not active" });
    }

    return res
      .status(200)
      .json({ promo, message: "Success, promo code is valid." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


exports.GetPromo = async (req, res) => {
  try {
    const promos = await Promo.find();
    res.status(200).json(promos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.DeletePromo = async (req, res) => {
  try {
    const promo = await Promo.findByIdAndDelete(req.params.id);

    if (!promo) {
      return res.status(404).json({ error: "Promo code not found" });
    }

    res.json({ message: "Promo code deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
