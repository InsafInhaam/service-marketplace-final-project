import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import OrderDetail from "../components/OrderDetail";
import toast from "react-hot-toast";

const Order = () => {
  const user = useSelector((state) => state.user.user);

  const [newOrders, setNewOrders] = useState([]);
  const [assignedOrders, setAssignedOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showSelectedOrderModal, setShowSelectedOrderModal] = useState(false);

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

  // useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_API_URL}/api/orders/eligible-orders/${user._id}`
  //       );
  //       const result = await response.json();
  //       setNewOrders(result.eligibleOrders);
  //     } catch (error) {
  //       console.error("Error fetching services:", error);
  //     }
  //   };

  //   fetchServices();
  // }, [newOrders, user._id]);

  // console.log(newOrders);

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

  return (
    <>
      <div>
        <header>
          {/* Sidebar */}
          <Sidebar />
          {/* Navbar */}
          <Navbar />
        </header>
        <main>
          <div className="container pt-4">
            <div class="mb-5">
              <div class="card">
                <div class="card-header">New Orders</div>
                <div class="card-body">
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
                              {newOrder.serviceDate}
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
                              className="btn btn-link btn-sm btn-rounded mx-2"
                              onClick={() => handleTrackOrder(newOrder)}
                            >
                              View More
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-rounded btn-success mx-2"
                              onClick={() => handleAcceptOrder(newOrder._id)}
                            >
                              Accept
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <div class="card">
                <div class="card-header">Accept Orders</div>
                <div class="card-body">
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
                              {assignedOrder.serviceDate}
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
                              className="btn btn-link btn-sm btn-rounded mx-2"
                              onClick={() => handleTrackOrder(assignedOrder)}
                            >
                              View More
                            </button>
                            {/* ... (additional buttons or actions for assigned orders) */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <div class="card">
                <div class="card-header">Complete Orders</div>
                <div class="card-body">
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
                              {completedOrder.serviceDate}
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
                              className="btn btn-link btn-sm btn-rounded mx-2"
                              onClick={() => handleTrackOrder(completedOrder)}
                            >
                              View More
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
    </>
  );
};

export default Order;
