import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import OrderStatus from "../components/OrderStatus";
import OrderStatusIndicate from "../components/OrderStatusIndicate";

const Orders = () => {
  const user = useSelector((state) => state.user.user);

  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Fetch orders when the component mounts
    fetchOrders();
  }, [orders]);

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
    // Open the modal when the "Track Order Details" button is clicked
    // You can use a modal library or create your own modal logic here
    // For simplicity, I'll just log the order details for now
    console.log("Track Order Details:", order);
  };

  const handleCancelOrder = () => {
    // Handle cancel order logic here
    console.log("Cancel Order:", selectedOrder);
  };

  const handleComplain = () => {
    // Handle complain logic here
    console.log("Complain:", selectedOrder);
  };

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
      {selectedOrder && (
        <div
          className="modal fade"
          id="orderDetailsModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Order Details
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setSelectedOrder(null)}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
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
                <h4>Items:</h4>
                <ul className="px-0">
                  {selectedOrder?.cartItems.map((item) => (
                    <li
                      key={item?.itemId}
                      className="d-flex align-itens-center justify-content-between"
                    >
                      <div>{item?.itemId?.name}</div>
                      <div>
                        - <strong> Quantity: </strong>
                        {item?.quantity}
                      </div>
                      <div>
                        - <strong> Price: </strong>
                        LKR {item?.itemId?.price}
                      </div>
                    </li>
                  ))}
                </ul>
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
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handleComplain}
                  >
                    Complain
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => setSelectedOrder(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Orders;
