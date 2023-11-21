// Inside a new file, e.g., transactionHistoryModel.js
const mongoose = require("mongoose");

const transactionHistorySchema = new mongoose.Schema(
  {
    labourer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Labourer",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TransactionHistory = mongoose.model("TransactionHistory", transactionHistorySchema);

module.exports = TransactionHistory;
