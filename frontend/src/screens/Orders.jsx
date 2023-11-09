import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
// import OrderStatus from "../components/OrderStatus";
import OrderStatusIndicate from "../components/OrderStatusIndicate";
import toast from "react-hot-toast";
import axios from "axios";
import ReviewModal from "../components/ReviewModal";
import ComplainModal from "../components/ComplainModal";
import OrderDetails from "../components/OrderDetails";
import OrderLabour from "../components/OrderLabour";

const Orders = () => {
  const user = useSelector((state) => state.user.user);

  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showComplainModal, setShowComplainModal] = useState(false);
  const [showSelectedOrderModal, setShowSelectedOrderModal] = useState(false);
  const [showOrderLabourModal, setShowOrderLabourModal] = useState(false);

  const [selectedOrderLabour, setSelectedOrderLabour] = useState(null);


  useEffect(() => {
    // Fetch orders when the component mounts
    fetchOrders();
  }, [orders]);

  console.log(selectedOrder);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/orders/user/${user._id}`, // Assuming userId is available
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setOrders(data);
      } else {
        // Handle error
        console.error("Error fetching orders:", data.error);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleTrackOrder = (order) => {
    setSelectedOrder(order);
    setShowSelectedOrderModal(true); 
  };

  const handleCancelOrder = async () => {
    try {
      const response = await axios.put(
        process.env.REACT_APP_API_URL +
          `/api/orders/cancelOrder/${selectedOrder._id}`
      );
      const updatedOrder = response.data;

      console.log("Order cancelled:", updatedOrder);
      toast.success("Order cancelled successfully");

      // Manually remove the modal backdrop with fade and show classes
      const modalBackdrop = document.querySelector(".modal-backdrop");
      modalBackdrop.parentNode.removeChild(modalBackdrop);

      // Close the modal after canceling the order
      const orderDetailsModal = new window.bootstrap.Modal(
        document.getElementById("orderDetailsModal")
      );
      orderDetailsModal.hide();

      // Optionally, you can reset the selectedOrder state
      setSelectedOrder(null);
    } catch (error) {
      console.error("Error cancelling order:", error);
      toast.error("Error cancelling order");
    }
  };

  const handleReview = () => {
    setShowSelectedOrderModal(false);
    setShowReviewModal(true);
  };

  const handleComplain = () => {
    setShowSelectedOrderModal(false);
    setShowComplainModal(true);
  };

  const handleOrderLabour = (order) => {
    setSelectedOrderLabour(order);
    setShowOrderLabourModal(true);
  };

  const handleCloseOrderLabour = () => {
    setSelectedOrderLabour(null);
    setShowOrderLabourModal(false);
  };

  // console.log(orders[0]);
  return (
    <div className="page-wraper">
      <Navbar />
      <div className="page-content">
        <div className="aon-page-benner-area2">
          <div className="aon-banner-large2-title">View all orders</div>
        </div>
        <div className="aon-page-jobs-wrap">
          <div className="container">
            <div className="row d-flex justify-content-start align-items-center h-100">
              {orders.map((order) => (
                <div className="col-md-6 mb-4">
                  <div
                    className="card card-stepper"
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          <span
                            className="lead fw-normal"
                            style={{ fontSize: "16px" }}
                          >
                            Your order ID - {order._id}
                          </span>
                          <span className="text-muted small">
                            by DHFL on {order.createdAt}
                          </span>
                        </div>
                        <div>
                          <button
                            className="btn btn-outline-primary"
                            type="button"
                            data-toggle="modal"
                            data-target="#orderDetailsModal"
                            onClick={() => handleTrackOrder(order)}
                          >
                            Track order details
                          </button>
                          {order.labourer !== null && (
                            <>
                              <br />
                              <button
                                className="btn btn-outline-primary mt-2 w-100"
                                type="button"
                                data-toggle="modal"
                                data-target="#orderDetailsModal"
                                onClick={() => handleOrderLabour(order)}
                              >
                                Assigned Worker
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      <hr className="my-4" />

                      <OrderStatusIndicate order={order} />
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-column align-items-start">
                          <span>Order placed</span>
                        </div>
                        {order.status == "canceled" ? (
                          <div className="d-flex flex-column justify-content-center">
                            <span>Canceled</span>
                          </div>
                        ) : (
                          <>
                            <div className="d-flex flex-column justify-content-center">
                              <span>Assigned to Labour</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <span>In progress</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center ">
                              <span>Completed</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for complete order details */}
      {selectedOrder && showSelectedOrderModal && (
        <OrderDetails
          onClose={() => setSelectedOrder(null)}
          selectedOrder={selectedOrder}
          handleReview={handleReview}
          handleComplain={handleComplain}
          user={user}
          handleCancelOrder={handleCancelOrder}
        />
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <ReviewModal
          userId={user._id}
          orderId={selectedOrder._id}
          // labourerId={selectedOrder.labourer}
          labourerId={`466437hw7hwew8832`} // once labour is complete pass his id
          onClose={() => setShowReviewModal(false)}
        />
      )}

      {/* Complain Modal */}
      {showComplainModal && (
        <ComplainModal
          userId={user._id}
          orderId={selectedOrder._id}
          onClose={() => setShowComplainModal(false)}
        />
      )}

      {/* Order Labour Modal */}
      {showOrderLabourModal && (
        <OrderLabour
          selectedOrder={selectedOrderLabour}
          onClose={handleCloseOrderLabour}
        />
      )}

      <Footer />
    </div>
  );
};

export default Orders;
