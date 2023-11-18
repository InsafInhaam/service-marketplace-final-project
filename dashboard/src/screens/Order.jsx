import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import OrderDetail from "../components/OrderDetail";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5; // Adjust as needed
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showSelectedOrderModal, setShowSelectedOrderModal] = useState(false);

  useEffect(() => {
    // Your initial fetch logic remains the same
    fetch(process.env.REACT_APP_API_URL + "/api/orders/orders")
      .then((res) => res.json())
      .then((result) => {
        setOrders(result);
      });
  }, []); // Only fetch once on component mount

  const filteredOrders = orders.filter((order) =>
    order.userId.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTrackOrder = (order) => {
    setSelectedOrder(order);
    setShowSelectedOrderModal(true);
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      \n.modal {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  opacity: 1 !important;\n  background: #00000073;\n}\n\n.modal .modal-dialog {\n  width: 100%;\n  margin: 0;\n}\n    ",
        }}
      />
      <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between">
                        <div>
                          <h4 className="card-title">Services Booked</h4>
                          <p className="card-description">
                            Lorem ipsum dolor sit amet
                          </p>
                        </div>
                      </div>
                      {/* Add search input */}
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="form-control w-25"
                      />

                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Order Id</th>
                              <th>Order Person</th>
                              <th>totalPrice</th>
                              <th>serviceDate</th>
                              <th>serviceTime</th>
                              <th>labourer</th>
                              <th>View</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentItems?.map((order) => (
                              <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>
                                  {order.userId.name} ({order.userId._id})
                                </td>
                                <td>{order.totalPrice}</td>
                                <td>{order.serviceDate}</td>
                                <td>{order.serviceTime}</td>
                                <td>
                                  {order.labourer ? "Assigned" : "Not Assigned"}
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => handleTrackOrder(order)}
                                  >
                                    View more
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {/* Pagination */}
                      <div className="pagination">
                        {Array.from(
                          {
                            length: Math.ceil(
                              filteredOrders.length / itemsPerPage
                            ),
                          },
                          (_, index) => (
                            <button
                              key={index + 1}
                              onClick={() => handlePageChange(index + 1)}
                              className={
                                currentPage === index + 1 ? "active" : ""
                              }
                            >
                              {index + 1}
                            </button>
                          )
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
