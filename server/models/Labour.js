const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const LabourSchema = new mongoose.Schema(
  {
    fullname: {
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
    },
    serviceProvided: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    // Add more properties as needed
  },
  { timestamps: true }
);

const Labour = mongoose.model("Labour", LabourSchema);

module.exports = Labour;
