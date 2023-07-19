const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  laborer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;