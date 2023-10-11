// models/Order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  cartItems: [
    {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  subTotal: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  serviceDate: {
    type: Date,
    required: true,
  },
  serviceTime: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'assigned', 'complete'],
    default: 'pending',
  },
  labourer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Labourer',
    default: null,
  },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
