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
    wallet: {
      type: Number,
      default: 0, // Initial wallet balance is 0
    },
    // location: {
    //   type: {
    //     type: String, 
    //     enum: ["Point"],
    //     required: true,
    //   },
    //   coordinates: {
    //     type: [Number],
    //     required: true,
    //   },
    // },
  },
  { timestamps: true }
);

// Index the location field for geospatial queries
LabourSchema.index({ location: "2dsphere" });

const Labour = mongoose.model("Labour", LabourSchema);

module.exports = Labour;
