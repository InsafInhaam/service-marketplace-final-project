const mongoose = require('mongoose');

const ratingReviewSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  laborerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const RatingReview = mongoose.model('RatingReview', ratingReviewSchema);

module.exports = RatingReview;