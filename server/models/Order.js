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
        ref: 'Service', // Reference to the Product model
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
    enum: [
      'order_placed',        // Initial state when the user places an order
      'assigned_to_labourer', // When the order is assigned to a service provider (labourer)
      'in_progress',          // The service is currently being provided
      'completed',            // The service has been completed
      'canceled',             // The service or order is canceled (if applicable)
    ],    
    default: 'order_placed',
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