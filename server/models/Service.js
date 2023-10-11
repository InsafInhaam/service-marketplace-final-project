const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  image: { type: String },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
    required: true,
  },
}, {
  timestamps: true,
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;