const express = require('express');
const router = express.Router();
const RatingReview = require('../models/RatingReview');
const Labour = require('../models/Labour');

// Create a rating and review
router.post('/rating-reviews', async (req, res) => {
  try {
    const { customerId, laborerId, rating, review } = req.body;

    // Check if the laborer exists
    const laborer = await Labour.findById(laborerId);
    if (!laborer) {
      return res.status(404).json({ message: 'Labour not found' });
    }

    // Create a new rating and review
    const ratingReview = new RatingReview({ customerId, laborerId, rating, review });
    await ratingReview.save();

    res.status(201).json({ message: 'Rating and review created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get ratings and reviews for a laborer
router.get('/rating-reviews/laborers/:id', async (req, res) => {
  try {
    const laborer = await Labour.findById(req.params.id);
    if (!laborer) {
      return res.status(404).json({ message: 'Labour not found' });
    }

    const ratingReviews = await RatingReview.find({ laborerId: req.params.id });

    res.json(ratingReviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get ratings and reviews by customer ID
router.get('/rating-reviews/customers/:id', async (req, res) => {
  try {
    const ratingReviews = await RatingReview.find({ customerId: req.params.id });
    res.json(ratingReviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a rating and review
router.put('/rating-reviews/:id', async (req, res) => {
  try {
    const { rating, review } = req.body;

    const ratingReview = await RatingReview.findByIdAndUpdate(
      req.params.id,
      { rating, review },
      { new: true }
    );

    if (!ratingReview) {
      return res.status(404).json({ message: 'Rating and review not found' });
    }

    res.json(ratingReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a rating and review
router.delete('/rating-reviews/:id', async (req, res) => {
  try {
    const ratingReview = await RatingReview.findByIdAndRemove(req.params.id);

    if (!ratingReview) {
      return res.status(404).json({ message: 'Rating and review not found' });
    }

    res.json({ message: 'Rating and review deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;