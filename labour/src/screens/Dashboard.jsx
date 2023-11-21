import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useSelector } from "react-redux";
import LoadingScreen from "../components/LoadingScreen";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const labourer = useSelector((state) => state.user.user);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newOrders, setNewOrders] = useState([]);

  const [reviewCount, setReviewCount] = useState(0);
  const [complaintCount, setComplaintCount] = useState(0);
  const [completedOrderCount, setCompletedOrderCount] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Fetch New Orders
        const newOrdersResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/orders/eligible-orders/${labourer._id}`
        );
        const newOrdersData = await newOrdersResponse.json();
        setNewOrders(newOrdersData.eligibleOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [labourer._id, newOrders]);

  useEffect(() => {
    // Fetch orders for the logged-in labourer
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/orders/getByLabourId/${labourer._id}`
        );
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [orders]);

  useEffect(() => {
    const fetchLabourStats = async () => {
      try {
        const reviewResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/reviews/count/${labourer._id}`
        );
        const reviewData = await reviewResponse.json();
        setReviewCount(reviewData.reviewCount);

        const complaintResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/complain/count/${labourer._id}`
        );
        const complaintData = await complaintResponse.json();
        setComplaintCount(complaintData.complaintCount);

        const completedOrderResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/orders/completed/count/${labourer._id}`
        );
        const completedOrderData = await completedOrderResponse.json();
        setCompletedOrderCount(completedOrderData.completedOrderCount);
      } catch (error) {
        console.error("Error fetching labour stats:", error);
      }
    };

    fetchLabourStats();
  }, [labourer._id]);

  // If still loading, you can return a loading indicator
  if (loading) {
    return <LoadingScreen />;
  }

  // Assuming that orders is an array
  const orderDates = Array.isArray(orders.orders)
    ? orders.orders.map((order) =>
        new Date(order.createdAt).toLocaleDateString()
      )
    : [];

  const orderTotalPrices = Array.isArray(orders.orders)
    ? orders.orders.map((order) => order.totalPrice)
    : [];

  const data = {
    labels: orderDates,
    datasets: [
      {
        label: "Order Total Prices",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: orderTotalPrices,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // This should be "category" for the x-axis
        labels: orderDates,
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  // console.log(newOrders[1].cartItems[0].itemId.name);

  return (
    <div>
      <header>
        {/* Sidebar */}
        <Sidebar />
        {/* Navbar */}
        <Navbar />
      </header>
      {/*Main layout*/}
      <main className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card-counter primary">
                <i className="fa fa-code-fork"></i>
                <span className="count-numbers">{reviewCount}</span>
                <span className="count-name">Review</span>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-counter danger">
                <i className="fa fa-ticket"></i>
                <span className="count-numbers">{complaintCount}</span>
                <span className="count-name">Complaint</span>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-counter success">
                <i className="fa fa-database"></i>
                <span className="count-numbers">{completedOrderCount}</span>
                <span className="count-name">Completed Order</span>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-counter info">
                <i className="fa fa-users"></i>
                <span className="count-numbers">35</span>
                <span className="count-name">Users</span>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-8 shadow-lg bg-white p-3 rounded">
              <h2>Orders</h2>
              <Line data={data} options={options} />
            </div>
            <div className="col-md-4">
              <div className="card shadow-lg bg-white p-3 rounded">
                <div className="card-header">
                  <strong>Incoming Orders</strong>
                </div>
                <div className="card-body p-0">
                  <table className="table align-middle mb-0 bg-white">
                    <tbody>
                      {newOrders?.map((newOrder) => (
                        <tr key={newOrder._id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="">
                                {newOrder?.cartItems?.map((cartItem) => (
                                  <p key={cartItem._id} className=" mb-1">
                                    {cartItem.itemId.name}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </td>

                          <td>
                            <a
                              className="btn-custom text-warning mx-2"
                              href="/orders"
                            >
                              <i className="bx bxs-chevron-down-square"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
