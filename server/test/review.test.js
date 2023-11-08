const mongoose = require('mongoose');
const {
  reviewOrder,
  fetchReviewsForOrder,
} = require("../controllers/reviewController");
const Review = require("../models/Review");

// Mock the Review model
jest.mock('../models/Review', () => {
    const mockReview = {
      save: jest.fn(),
    };
    // Mock the static methods of Review
    mockReview.find = jest.fn();
    // The constructor mock
    return jest.fn(() => mockReview);
  });
  

// Mock static methods of Review
Review.find = jest.fn();

describe("Review Controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("reviewOrder", () => {
    it("should create a review successfully", async () => {
      const mockReview = new Review();
      mockReview.save.mockResolvedValue({
        _id: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        laborerId: new mongoose.Types.ObjectId(),
        orderId: new mongoose.Types.ObjectId(),
        rating: 5,
        review: "Great job",
      });

      const mockReq = {
        body: {
          rating: 5,
          comment: "Great job",
          labourerId: new mongoose.Types.ObjectId(),
        },
        params: {
          userId: new mongoose.Types.ObjectId(),
          orderId: new mongoose.Types.ObjectId(),
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await reviewOrder(mockReq, mockRes);

      expect(mockReview.save).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(expect.any(Object));
    });

    it("should handle errors during review creation", async () => {
      const mockReview = new Review();
      mockReview.save.mockRejectedValue(new Error("Internal Server Error"));

      const mockReq = {
        body: {
          rating: 5,
          comment: "Great job",
          labourerId: new mongoose.Types.ObjectId(),
        },
        params: {
          userId: new mongoose.Types.ObjectId(),
          orderId: new mongoose.Types.ObjectId(),
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await reviewOrder(mockReq, mockRes);

      expect(mockReview.save).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        error: "Internal Server Error",
      });
    });
  });

  describe("fetchReviewsForOrder", () => {
    it("should fetch reviews for an order successfully", async () => {
      const reviews = [
        { review: "Review 1", rating: 4 },
        { review: "Review 2", rating: 5 },
      ];
      Review.find.mockResolvedValue(reviews);

      const mockReq = {
        params: { orderId: "order1" },
      };
      const mockRes = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      await fetchReviewsForOrder(mockReq, mockRes);

      expect(Review.find).toHaveBeenCalledWith({ orderId: "order1" });
      expect(mockRes.json).toHaveBeenCalledWith(reviews);
    });

    it("should handle errors when fetching reviews", async () => {
      Review.find.mockRejectedValue(new Error("Internal Server Error"));

      const mockReq = {
        params: { orderId: "order1" },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await fetchReviewsForOrder(mockReq, mockRes);

      expect(Review.find).toHaveBeenCalledWith({ orderId: "order1" });
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        error: "Internal Server Error",
      });
    });
  });
});
