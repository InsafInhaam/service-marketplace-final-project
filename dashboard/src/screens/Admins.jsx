import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Admins = () => {
  const [admins, setAdmins] = useState([]);

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [showModal, setShowModal] = useState(false); // State to track the modal visibility

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/admin/admins")
      .then((res) => res.json())
      .then((result) => {
        setAdmins(result);
      });
  }, [admins]);

  const handleFormSubmit = () => {
    if (!name ||
        !email ||
        !password ||
        !image ||
        !address ||
        !phone) {
      return toast.error("Please fill all required fields");
    }
    setLoading(true);
    handleImageUpload();

    setShowModal(false);

    // Reset the input fields and state variables once the form is submitted
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPassword("");
    setImage(null);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (profilePic) {
      let body = {
        name,
        email,
        password,
        address,
        phone,
        image: profilePic,
      };

      console.log(body);

      fetch(process.env.REACT_APP_API_URL + "/api/admin/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            setLoading(false);
            toast.success(data.message);
            console.log(data.message);
            toggleModal();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [profilePic]);


  const handleImageUpload = () => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "surge-intern-test");
      data.append("cloud_name", "dp6yyczpu");
      fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
            setProfilePic(data.secure_url);
          console.log(data.secure_url);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleDelete = (id) => {
    fetch(process.env.REACT_APP_API_URL + "/api/admin/admins/" + id, {
      method: "DELETE",
      // headers: {
      //   Authorization: "Bearer " + localStorage.getItem("jwt"),
      // },
    })
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
                      <div className="d-flex align-items-start justify-content-between">
                        <div>
                          <h4 className="card-title">Admin Table</h4>
                          <p className="card-description">
                            Lorem ipsum dolor sit amet
                          </p>
                        </div>

                        <button
                          type="button"
                          class="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          New Admin
                        </button>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>User</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Address</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {admins?.map((admin) => (
                              <tr key={admin._id}>
                                <td className="py-1">
                                  <img src={admin.image} alt="image" />
                                </td>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>{admin.phone}</td>
                                <td>{admin.city}</td>
                                <td>{admin.address}</td>
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
                                    onClick={() => handleDelete(admin._id)}
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

          <div
            className={`modal fade ${showModal ? "show" : ""}`}
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden={!showModal} // Hide the modal from screen readers when it's closed
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Admin
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form action="#" method="post">
                    <div className="form-group first">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ur name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group first">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ur email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group first">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter ur phone"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group first">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ur address"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="password">Image</label>
                      <input
                        className="form-control"
                        id="image"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleFormSubmit()}
                  >
                    {loading ? "Creating..." : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* page-body-wrapper ends */}
      </div>
    </>
  );
};

export default Admins;
