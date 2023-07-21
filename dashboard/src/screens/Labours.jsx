import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Labours = () => {
  const [labours, setLabours] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/user/users/labourers")
      .then((res) => res.json())
      .then((result) => {
        setLabours(result);
      });
  }, []);

  return (
    <>
      <div className="container-scroller">
        {/* partial:../../partials/_navbar.html */}
        <Navbar />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Users Table</h4>
                      <p className="card-description">
                        Lorem ipsum dolor sit amet.{" "}
                      </p>
                      <div className="table-responsive">
                      <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>User</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>City</th>
                              <th>Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            {labours?.map((labour) => (
                              <tr key={labour._id}>
                                <td className="py-1">
                                  <img src={labour.image} alt="image" />
                                </td>
                                <td>{labour.name}</td>
                                <td>{labour.email}</td>
                                <td>{labour.phone}</td>
                                <td>{labour.city}</td>
                                <td>{labour.address}</td>
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
            {/* content-wrapper ends */}
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
    </>
  );
};

export default Labours;
