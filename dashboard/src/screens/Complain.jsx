import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Complain = () => {
  const [complains, setComplains] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/complain/complaints")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setComplains(result);
      });
  }, [complains]);

  return (
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
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Complain Id</th>
                            <th>Order Id</th>
                            <th>Name</th>
                            <th>Reason</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {complains?.map((complain) => (
                            <tr key={complain._id}>
                              <td>{complain._id}</td>
                              <td>{complain.orderId}</td>
                              <td>
                                {complain.userId.name} ({complain.userId._id})
                              </td>
                              <td>{complain.reason}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  Reply
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complain;
