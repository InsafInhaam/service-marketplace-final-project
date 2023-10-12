import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const Orders = () => {
  const user = useSelector((state) => state.user.user);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders when the component mounts
    fetchOrders();
  }, []);

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

  return (
    <div className="page-wraper">
      <Navbar />
      <div className="page-content">
        <div className="aon-page-benner-area2">
          <div className="aon-banner-large2-title">View all orders</div>
        </div>
        <div className="aon-page-jobs-wrap">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
              {orders.map((order) => (
                <div className="col">
                  <div
                    className="card card-stepper"
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          <span className="lead fw-normal">
                            Your order has been delivered
                          </span>
                          <span className="text-muted small">
                            by DHFL on 21 Jan, 2020
                          </span>
                        </div>
                        <div>
                          <button
                            className="btn btn-outline-primary"
                            type="button"
                          >
                            Track order details
                          </button>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                        <span className="dot" />
                        <hr className="flex-fill track-line" />
                        <span className="dot" />
                        <hr className="flex-fill track-line" />
                        <span className="dot" />
                        <hr className="flex-fill track-line" />
                        <span className="dot" />
                        <hr className="flex-fill track-line" />
                        <span className="d-flex justify-content-center align-items-center big-dot dot">
                          <i className="fa fa-check text-white" />
                        </span>
                      </div>
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-column align-items-start">
                          <span>15 Mar</span>
                          <span>Order placed</span>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <span>15 Mar</span>
                          <span>Order placed</span>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <span>15 Mar</span>
                          <span>Order Dispatched</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <span>15 Mar</span>
                          <span>Out for delivery</span>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <span>15 Mar</span>
                          <span>Delivered</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
