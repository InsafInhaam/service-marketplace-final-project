const mongoose = require('mongoose');

const promoSchema = new mongoose.Schema(
  {
    promoCode: String,
    description: String,
    startDate: String,
    expiryDate: String,
    discountPercentage: String,
    isActive: Boolean,
  },
  {
    timestamps: true,
  }
);

const Promo = mongoose.model("Promo", promoSchema);

module.exports = Promo;