import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import OrderDetail from "../components/OrderDetail";
import toast from "react-hot-toast";
import Chat from "../components/Chat";

const Order = () => {
  const user = useSelector((state) => state.user.user);

  const [newOrders, setNewOrders] = useState([]);
  const [assignedOrders, setAssignedOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showSelectedOrderModal, setShowSelectedOrderModal] = useState(false);
  const [showLabourMessageModal, setShowLabourMessageModal] = useState(false);
  const [selectedLabourMessage, setSelectedLabourMessage] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Fetch New Orders
        const newOrdersResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/orders/eligible-orders/${user._id}`
        );
        const newOrdersData = await newOrdersResponse.json();
        setNewOrders(newOrdersData.eligibleOrders);

        // Fetch Assigned Orders
        const assignedOrdersResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/orders/in-progress/${user._id}`
        );
        const assignedOrdersData = await assignedOrdersResponse.json();
        setAssignedOrders(assignedOrdersData.orders);

        // Fetch Completed Orders
        const completedOrdersResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/orders/completed/${user._id}`
        );
        const completedOrdersData = await completedOrdersResponse.json();
        setCompletedOrders(completedOrdersData.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [user._id, newOrders, assignedOrders, completedOrders]);

  const ordersToRender = Array.isArray(newOrders) ? newOrders : [];

  const handleTrackOrder = (order) => {
    setSelectedOrder(order);
    setShowSelectedOrderModal(true);
  };

  const handleAcceptOrder = async (orderId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/orders/accept/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("refreshToken"),
          },
        }
      );

      if (response.ok) {
        const updatedOrder = await response.json();
        // Show a success toast
        toast.success("Order accepted successfully!");
      } else {
        console.error("Failed to accept the order");
        // Handle error or show a notification to the user
      }
    } catch (error) {
      console.error("Error accepting order:", error);
      // Handle error or show a notification to the user
    }
  };

  const handleLabourMessage = (order) => {
    setSelectedLabourMessage(order);
    setShowLabourMessageModal(true);
    console.log(order);
  };

  const handleCloseLabourMessage = () => {
    setSelectedLabourMessage(null);
    setShowLabourMessageModal(false);
  };

  const handleCompleteOrder = async (order) => {
    try {
      const orderId = order._id;

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/orders/completeOrder/${orderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("refreshToken"),
          },
        }
      );

      if (response.ok) {
        const updatedOrder = await response.json();
        // Show a success toast
        toast.success("Order completed successfully!");
        // You can update the UI or perform additional actions as needed
      } else {
        console.error("Failed to complete the order");
        // Handle error or show a notification to the user
      }
    } catch (error) {
      console.error("Error completing order:", error);
      // Handle error or show a notification to the user
    }
  };

  return (
    <>
      <div>
        <header>
          {/* Sidebar */}
          <Sidebar />
          {/* Navbar */}
          <Navbar />
        </header>
        <main className="main-content">
          <div className="container pt-4">
            <div className="mb-5">
              <div className="card">
                <div className="card-header">New Orders</div>
                <div className="card-body">
                  <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                      <tr>
                        <th>Order ID</th>
                        <th>Service Date & Time</th>
                        <th>Status</th>
                        <th>Total Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ordersToRender?.map((newOrder) => (
                        <tr key={newOrder._id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="">
                                <p className="fw-bold mb-1">{newOrder._id}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                            {new Date(newOrder.serviceDate).toLocaleString()}
                            </p>
                            <p className="text-muted mb-0">
                              {newOrder.serviceTime}
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-info rounded-pill d-inline">
                              {newOrder.status}
                            </span>
                          </td>
                          <td>{newOrder.totalPrice}</td>
                          <td>
                            <button
                              type="button"
                              className="mx-2 btn-custom text-warning"
                              onClick={() => handleTrackOrder(newOrder)}
                            >
                              <i className="bx bxs-chevron-down-square"></i>
                            </button>
                            <button
                              type="button"
                              className="mx-2 btn-custom text-success"
                              onClick={() => handleAcceptOrder(newOrder._id)}
                            >
                              <i className="bx bx-check-circle"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="card">
                <div className="card-header">Accept Orders</div>
                <div className="card-body">
                  <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                      <tr>
                        <th>Order ID</th>
                        <th>Service Date & Time</th>
                        <th>Status</th>
                        <th>Total Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assignedOrders?.map((assignedOrder) => (
                        <tr key={assignedOrder._id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="">
                                <p className="fw-bold mb-1">
                                  {assignedOrder._id}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                            {new Date(assignedOrder.serviceDate).toLocaleString()}
                            </p>
                            <p className="text-muted mb-0">
                              {assignedOrder.serviceTime}
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-warning rounded-pill d-inline">
                              {assignedOrder.status}
                            </span>
                          </td>
                          <td>{assignedOrder.totalPrice}</td>
                          <td>
                            <button
                              type="button"
                              className="mx-2 btn-custom text-warning"
                              onClick={() => handleTrackOrder(assignedOrder)}
                            >
                              <i className="bx bxs-chevron-down-square"></i>
                            </button>
                            <button
                              type="button"
                              className="mx-2  btn-custom text-primary"
                              onClick={() => handleLabourMessage(assignedOrder)}
                            >
                              <i className="bx bx-chat"></i>
                            </button>

                            <button
                              type="button"
                              className="mx-2 btn-custom text-warning"
                              onClick={() =>
                                handleCompleteOrder(assignedOrder)
                              }
                            >
                              <i class="bx bx-check-double"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="card">
                <div className="card-header">Complete Orders</div>
                <div className="card-body">
                  <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                      <tr>
                        <th>Order ID</th>
                        <th>Service Date & Time</th>
                        <th>Status</th>
                        <th>Total Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {completedOrders?.map((completedOrder) => (
                        <tr key={completedOrder._id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="">
                                <p className="fw-bold mb-1">
                                  {completedOrder._id}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                            {new Date(completedOrder.serviceDate).toLocaleString()}

                            </p>
                            <p className="text-muted mb-0">
                              {completedOrder.serviceTime}
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-success rounded-pill d-inline">
                              {completedOrder.status}
                            </span>
                          </td>
                          <td>{completedOrder.totalPrice}</td>
                          <td>
                            <button
                              type="button"
                              className="mx-2 btn-custom text-warning"
                              onClick={() => handleTrackOrder(completedOrder)}
                            >
                              <i className="bx bxs-chevron-down-square"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {selectedOrder && showSelectedOrderModal && (
        <OrderDetail
          onClose={() => setSelectedOrder(null)}
          selectedOrder={selectedOrder}
        />
      )}

      {showLabourMessageModal && (
        <>
          <div className="chat-overlay"></div>
          <Chat
            user={user}
            recipient={selectedLabourMessage}
            orderId={selectedLabourMessage._id}
            onClose={handleCloseLabourMessage}
          />
        </>
      )}
    </>
  );
};

export default Order;
