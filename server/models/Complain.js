const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const ComplainSchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, ref: 'User', required: true },
    orderId: { type: ObjectId, ref: 'Order', required: true },
    reason: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Complain = mongoose.model('Complain', ComplainSchema);

module.exports = Complain;
