import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const OrderDetails = ({
  onClose,
  selectedOrder,
  handleReview,
  handleComplain,
  user,
  handleCancelOrder,
}) => {
  const [reviews, setReviews] = useState([]);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    if (selectedOrder) {
      // Fetch reviews for the selected order
      fetchReviews(selectedOrder._id);

      // Fetch complaints for the selected order
      fetchComplaints(selectedOrder._id);
    }
  }, [selectedOrder]);

  const fetchReviews = async (orderId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/reviews/reviews/${orderId}`
      );
      const data = await response.json();

      if (response.ok) {
        setReviews(data);
      } else {
        console.error("Error fetching reviews:", data.error);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const fetchComplaints = async (orderId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/complain/complaints/${orderId}`
      );
      const data = await response.json();

      if (response.ok) {
        setComplaints(data);
      } else {
        console.error("Error fetching complaints:", data.error);
      }
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Order Details
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
            <div>
              <p>
                <strong>Status:</strong> {selectedOrder.status}
              </p>
              <p>
                <strong>Order Date:</strong> {selectedOrder.createdAt}
              </p>
              <p>
                <strong>Delivery Address:</strong> {user.address}
              </p>
              <p>
                <strong>Total Price:</strong> ${selectedOrder.totalPrice}
              </p>
            </div>
            <div>
              <h4>Items:</h4>
              <ul className="px-0">
                {selectedOrder?.cartItems.map((item) => (
                  <li
                    key={item?.itemId}
                    className="d-flex align-itens-center justify-content-between"
                  >
                    <div className="d-flex align-items-center w-50">
                      <img
                        src={item?.itemId?.image}
                        alt={item?.itemId?.name}
                        style={{
                          width: "45px",
                          height: "45px",
                          objectFit: "cover",
                        }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item?.itemId?.name}</p>
                        <p className="text-muted mb-0">
                          {item?.itemId?.description}
                        </p>
                      </div>
                    </div>
                    {/* <div>{item?.itemId?.name}</div> */}
                    <div>
                      - <strong> Qty: </strong>
                      {item?.quantity}
                    </div>
                    <div>
                      <strong> LKR </strong>
                      {item?.itemId?.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {/* Render reviews */}
              {reviews.length > 0 && (
                <div>
                  <h4>Reviews</h4>
                  {reviews.map((review) => (
                    <div key={review._id}>
                      <p>Rating: {review.rating}</p>
                      <p>Comment: {review.review}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Render complaints */}
              {complaints.length > 0 && (
                <div>
                  <h4>Complaints</h4>
                  {complaints.map((complaint) => (
                    <div key={complaint._id}>
                      <p>Reason: {complaint.reason}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="modal-footer">
            {selectedOrder.status === "order_placed" && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleCancelOrder}
              >
                Cancel Order
              </button>
            )}
            {selectedOrder.status === "completed" && (
              <>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={handleReview}
                >
                  Review
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleComplain}
                >
                  Complain
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
