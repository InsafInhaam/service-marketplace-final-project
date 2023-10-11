const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Add route
router.post("/add-order", async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      subTotal,
      discountPercentage,
      totalPrice,
      serviceDate,
      serviceTime,
    } = req.body;

    // Create a new order
    const order = new Order({
      userId,
      cartItems,
      subTotal,
      discountPercentage,
      totalPrice,
      serviceDate,
      serviceTime,
    });

    // Save the order to the database
    const savedOrder = await order.save();

    res.status(201).json({ success: true, order: savedOrder });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error getting orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get order by ID
router.get('/orders/:orderId', async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error('Error getting order by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get orders by user ID
router.get('/orders/user/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error getting orders by user ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;