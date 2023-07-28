import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/user/users/customers")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, [users]);

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
                      <h4 className="card-title">Users Table</h4>
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
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users?.map((user) => (
                              <tr key={user._id}>
                                <td className="py-1">
                                  <img src={user.image} alt="image" />
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.city}</td>
                                <td>{user.address}</td>
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
                                    onClick={() => handleDelete(user._id)}
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

export default Users;
