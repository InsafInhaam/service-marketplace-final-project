const Review = require("../models/Review");
const Labour = require("../models/Labour");

const reviewOrder = async (req, res) => {
  try {
    const { rating, comment, labourerId } = req.body;
    const { userId, orderId } = req.params;

    const review = new Review({
      customerId: userId,
      orderId,
      laborerId: labourerId,
      rating,
      review: comment,
    });

    await review.save();

    res.status(200).json(review);
  } catch (error) {
    // console.error("Error reviewing order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchReviewsForOrder = async (req, res) => {
  try {
    const reviews = await Review.find({ orderId: req.params.orderId });
    res.json(reviews);
  } catch (error) {
    // console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const fetchAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate({
      path: "customerId",
    });
    res.json(reviews);
  } catch (error) {
    // console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  reviewOrder,
  fetchReviewsForOrder,
  fetchAllReviews
};
