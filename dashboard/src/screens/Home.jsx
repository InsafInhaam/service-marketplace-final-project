import React, { useEffect, useState } from "react";
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

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [services, setServices] = useState([]);
  const [labours, setLabours] = useState([]);
  const [users, setUsers] = useState([]);
  const [adminWalletPoints, setAdminWalletPoints] = useState(null);

  useEffect(() => {
    // Your initial fetch logic remains the same
    fetch(process.env.REACT_APP_API_URL + "/api/orders/orders")
      .then((res) => res.json())
      .then((result) => {
        setOrders(result);
      });
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/services/services")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setServices(result);
      });
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/user/users/labourers")
      .then((res) => res.json())
      .then((result) => {
        setLabours(result);
      });
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/user/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  useEffect(() => {
    const fetchAdminWalletPoints = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_URL + "/api/admin/adminWallet"
        );
        const data = await response.json();
        setAdminWalletPoints(data.adminWalletPoints);
      } catch (error) {
        console.error("Error fetching admin wallet points:", error);
      }
    };

    fetchAdminWalletPoints();
  }, []);

  // console.log(process.env.REACT_APP_API_URL + "/api/admin/adminWallet")

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

  return (
    <>
      <div className="container-scroller">
        <Navbar />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="card-box bg-blue">
                      <div className="inner">
                        <h3> {services.length} </h3>
                        <p> Services </p>
                      </div>
                      <div className="icon">
                        <i
                          className="fa fa-graduation-cap"
                          aria-hidden="true"
                        />
                      </div>
                      <a href="/services" className="card-box-footer">
                        View More <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="card-box bg-green">
                      <div className="inner">
                        <h3> {orders.length} </h3>
                        <p> Orders </p>
                      </div>
                      <div className="icon">
                        <i className="fa fa-money" aria-hidden="true" />
                      </div>
                      <a href="/orders" className="card-box-footer">
                        View More <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="card-box bg-orange">
                      <div className="inner">
                        <h3> {labours.length} </h3>
                        <p> Labours </p>
                      </div>
                      <div className="icon">
                        <i className="fa fa-user-plus" aria-hidden="true" />
                      </div>
                      <a href="/labours" className="card-box-footer">
                        View More <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="card-box bg-red">
                      <div className="inner">
                        <h3> {users.length} </h3>
                        <p> users </p>
                      </div>
                      <div className="icon">
                        <i className="fa fa-users" />
                      </div>
                      <a href="/users" className="card-box-footer">
                        View More <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Page content */}
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="home-tab">
                    <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                      {/* <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#audiences" role="tab" aria-selected="false">Audiences</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#demographics" role="tab" aria-selected="false">Demographics</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#more" role="tab" aria-selected="false">More</a>
                        </li>
                      </ul>
                      <div>
                        <div className="btn-wrapper">
                          <a href="#" className="btn btn-otline-dark align-items-center"><i className="icon-share" /> Share</a>
                          <a href="#" className="btn btn-otline-dark"><i className="icon-printer" /> Print</a>
                          <a href="#" className="btn btn-primary text-white me-0"><i className="icon-download" /> Export</a>
                        </div>
                      </div> */}
                    </div>
                    <div className="tab-content tab-content-basic">
                      <div
                        className="tab-pane fade show active"
                        id="overview"
                        role="tabpanel"
                        aria-labelledby="overview"
                      >
                        <div className="row">
                          <h2>Orders</h2>
                        </div>
                        <div className="row">
                          <div className="col-md-8">
                            <Line data={data} options={options} />
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="card-body">
                                <h2 className="card-title">Your Earnings</h2>
                                <br />
                                {adminWalletPoints !== null ? (
                                  <h5 className="card-text">
                                    Wallet Points: LKR {adminWalletPoints}
                                  </h5>
                                ) : (
                                  <p className="card-text">Loading...</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
    </>
  );
};

export default Home;
