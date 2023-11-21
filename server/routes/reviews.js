// const express = require("express");
// const router = express.Router();
// const Review = require("../models/Review");
// const Labour = require("../models/Labour");

// // Review Order
// router.post("/reviewOrder/:userId/:orderId", async (req, res) => {
//   try {
//     const { rating, comment, labourerId } = req.body;
//     const { userId, orderId } = req.params;

//     // You might want to add validation for rating and comment

//     const review = new Review({
//       customerId: userId,
//       orderId: orderId,
//       laborerId: labourerId,
//       rating,
//       review : comment,
//     });

//     await review.save();

//     res.status(200).json(review);
//   } catch (error) {
//     console.error("Error reviewing order:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Fetch reviews for a specific order
// router.get('/reviews/:orderId', async (req, res) => {
//   const orderId = req.params.orderId;

//   try {
//     const reviews = await Review.find({ orderId });
//     res.json(reviews);
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Get ratings and reviews for a laborer
// router.get("/rating-reviews/laborers/:id", async (req, res) => {
//   try {
//     const laborer = await Labour.findById(req.params.id);
//     if (!laborer) {
//       return res.status(404).json({ message: "Labour not found" });
//     }

//     const ratingReviews = await RatingReview.find({ laborerId: req.params.id });

//     res.json(ratingReviews);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Get ratings and reviews by customer ID
// router.get("/rating-reviews/customers/:id", async (req, res) => {
//   try {
//     const ratingReviews = await RatingReview.find({
//       customerId: req.params.id,
//     });
//     res.json(ratingReviews);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Update a rating and review
// router.put("/rating-reviews/:id", async (req, res) => {
//   try {
//     const { rating, review } = req.body;

//     const ratingReview = await RatingReview.findByIdAndUpdate(
//       req.params.id,
//       { rating, review },
//       { new: true }
//     );

//     if (!ratingReview) {
//       return res.status(404).json({ message: "Rating and review not found" });
//     }

//     res.json(ratingReview);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Delete a rating and review
// router.delete("/rating-reviews/:id", async (req, res) => {
//   try {
//     const ratingReview = await RatingReview.findByIdAndRemove(req.params.id);

//     if (!ratingReview) {
//       return res.status(404).json({ message: "Rating and review not found" });
//     }

//     res.json({ message: "Rating and review deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post("/reviewOrder/:userId/:orderId", reviewController.reviewOrder);
router.get('/reviews/:orderId', reviewController.fetchReviewsForOrder);
router.get('/reviews/', reviewController.fetchAllReviews);
router.get('/reviewsByLabour/:labourId', reviewController.fetchReviewsByLabour);
router.get('/count/:laborerId', reviewController.getReviewCountByLabourId);

module.exports = router;
