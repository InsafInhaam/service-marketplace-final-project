import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { toast } from "react-hot-toast";

const Services = () => {
  const [services, setServices] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [hours, setHours] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [serviceImage, setServiceImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [editService, setEditService] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/services/services")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setServices(result);
      });
  }, [services]);

  // console.log(services);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/subcategories/allsubcategories")
      .then((res) => res.json())
      .then((result) => {
        setSubcategories(result);
      });
  }, []);

  const handleFormSubmit = () => {
    if (!title || !description || !price || !hours || !category || !image) {
      return toast.error("Please fill all required fields");
    }
    setLoading(true);
    handleImageUpload();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (serviceImage) {
      let body = {
        name: title,
        description: description,
        price: price,
        hours: hours,
        subcategory: category,
        image: serviceImage,
      };

      fetch(process.env.REACT_APP_API_URL + "/api/services/service", {
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
            toggleModal();
            setTitle("");
            setDescription("");
            setPrice("");
            setHours("");
            setCategory("");
            setImage("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [serviceImage]);

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
          setServiceImage(data.secure_url);
          console.log(data.secure_url);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleDelete = (id) => {
    fetch(process.env.REACT_APP_API_URL + `/api/services/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(result.message);
      })
      .catch((error) => {
        toast.error("Error deleting service");
        console.log(error);
      });
  };

  const handleEdit = (service) => {
    setEditService(service);
    setTitle(service.name);
    setDescription(service.description);
    setPrice(service.price);
    setHours(service.hours);
    setCategory(service.subcategory._id);
    // Assuming you have an image field in the service object, update accordingly
    setImage(service.image);
    toggleModal();
  };

  const handleUpdate = () => {
    if (!title || !description || !price || !hours || !category) {
      return toast.error("Please fill all required fields");
    }
    setLoading(true);

    // Assuming you have a separate API endpoint for updating services
    fetch(
      process.env.REACT_APP_API_URL +
        `/api/services/services/${editService._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: title,
          description: description,
          price: price,
          hours: hours,
          subcategory: category,
          // Assuming you have an image field in the service object, update accordingly
          image: image,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setLoading(false);
          toast.success(data.message);
          toggleModal();
          setEditService(null);
          // Reset the input fields and state variables once the form is submitted
          setTitle("");
          setDescription("");
          setPrice("");
          setHours("");
          setCategory("");
          setImage("");
        }
      })
      .catch((err) => {
        console.log(err);
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
                          <h4 className="card-title">Service Table</h4>
                          <p className="card-description">
                            Lorem ipsum dolor sit amet
                          </p>
                        </div>

                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          New Service
                        </button>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Description</th>
                              <th>Category</th>
                              <th>Price</th>
                              <th>Hours</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {services?.map((service) => (
                              <tr key={service._id}>
                                <td className="py-1">
                                  <img src={service.image} alt="image" />
                                </td>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td>{service.subcategory?.title}</td>
                                <td>{service.price}</td>
                                <td>{service.hours}</td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-warning"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    onClick={() => handleEdit(service)}
                                  >
                                    Edit
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(service._id)}
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
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden={!showModal}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Service
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      setLoading(false);
                      toggleModal();
                    }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form action="#" method="post">
                    <div className="form-group first">
                      <label htmlFor="title">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter service name"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-group first">
                      <label htmlFor="description">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter service description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="form-group first">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter service price"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="form-group first">
                      <label htmlFor="hours">Hours</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter service hours"
                        id="hours"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                      />
                    </div>
                    <div className="form-group first">
                      <label htmlFor="category">Category</label>
                      <select
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="" disabled>
                          Select category
                        </option>
                        {subcategories.map((subcategory) => (
                          <option key={subcategory._id} value={subcategory._id}>
                            {subcategory.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="image">Image</label>
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
                    onClick={() => {
                      setLoading(false);
                      toggleModal();
                      setEditService(null);
                      // Reset the input fields and state variables once the modal is closed
                      setTitle("");
                      setDescription("");
                      setPrice("");
                      setHours("");
                      setCategory("");
                      setImage("");
                    }}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      editService ? handleUpdate() : handleFormSubmit()
                    }
                  >
                    {loading ? "Updating..." : "Save"}
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

export default Services;
