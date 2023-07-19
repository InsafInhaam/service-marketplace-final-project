const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Labour = require('../models/Labour');

// Book a service
router.post('/bookings', async (req, res) => {
  try {
    const { laborerId, customerId, date } = req.body;

    // Check laborer availability
    const laborer = await Labour.findById(laborerId);
    if (!laborer) {
      return res.status(404).json({ message: 'Labour not found' });
    }
    if (!laborer.isAvailableOn(date)) {
      return res.status(400).json({ message: 'Labour is not available on the specified date' });
    }

    // Create a new booking
    const booking = new Booking({ laborer: laborerId, customer: customerId, date });
    await booking.save();

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get bookings by customer ID
router.get('/bookings/customers/:id', async (req, res) => {
  try {
    const bookings = await Booking.find({ customer: req.params.id });
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get bookings by laborer ID
router.get('/bookings/laborers/:id', async (req, res) => {
  try {
    const bookings = await Booking.find({ laborer: req.params.id });
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update booking status (accept or reject)
router.put('/bookings/:id', async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.status = status;
    await booking.save();

    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;