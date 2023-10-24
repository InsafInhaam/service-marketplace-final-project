import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ReviewModal = ({ userId, orderId, labourerId, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleReview = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/reviews/reviewOrder/${userId}/${orderId}`,
        { rating, comment, labourerId }
      );

      const updatedOrder = response.data;

      console.log("Order reviewed:", updatedOrder);
      toast.success("Order reviewed successfully");
      onClose();
    } catch (error) {
      console.error("Error reviewing order:", error);
      toast.error("Error reviewing order");
    }
  };

  return (
    <div className="modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Review Order
            </h5>
            <button
              type="button"
              className="close btn btn-danger btn-sm"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="form-control"
                min={1}
                max={5}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleReview}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
