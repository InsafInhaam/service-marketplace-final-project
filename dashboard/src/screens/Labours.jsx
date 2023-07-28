import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { toast } from "react-hot-toast";

const Labours = () => {
  const [labours, setLabours] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/user/users/labourers")
      .then((res) => res.json())
      .then((result) => {
        setLabours(result);
      });
  }, [labours]);

  const handleDelete = (id) => {
    fetch(
      process.env.REACT_APP_API_URL + "/api/user/users/" + id,
      {
        method: "DELETE",
        // headers: {
        //   Authorization: "Bearer " + localStorage.getItem("jwt"),
        // },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        toast.success(result.message);
      });
  };


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
                      <h4 className="card-title">Labour Table</h4>
                      <p className="card-description">
                        Lorem ipsum dolor sit amet.
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
                              <th>Service provided</th>
                              <th>hourly Rate</th>
                              <th>Edit</th>
                              <th>Delete</th>
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
                                <td>{labour.serviceProvided}</td>
                                <td>{labour.hourlyPrice}</td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-warning"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                  >
                                    Edit
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(labour._id)}
                                  >
                                    Delete
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
