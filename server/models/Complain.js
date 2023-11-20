const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const ComplainSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    reason: { type: String, required: true },
    laborerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Labour",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Complain = mongoose.model("Complain", ComplainSchema);

module.exports = Complain;
