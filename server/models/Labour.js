const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const LabourSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    // city: { type: String },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    serviceProvided: {
      type: String,
      required: true,
    },
    hourlyPrice: { type: String, required: true },
    description: { type: String },
    ApprovedStatus: { type: Boolean, default: false },
    // Add more properties as needed
  },
  { timestamps: true }
);

const Labour = mongoose.model("Labour", LabourSchema);

module.exports = Labour;
