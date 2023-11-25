import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { toast } from "react-hot-toast";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [categoryImage, setCategoryImage] = useState("");
  const [showModal, setShowModal] = useState(false); // State to track the modal visibility
  const [editCategory, setEditCategory] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImage, setEditImage] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/categories/allcategories")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setCategories(result);
      });
  }, [categories]);

  // console.log(categories);

  const handleFormSubmit = () => {
    setLoading(true);
    if (editCategory) {
      // If editCategory is present, it's an update
      handleUpdateCategory();
    } else {
      // If editCategory is not present, it's a new category
      handleCreateCategory();
    }
  };

  const handleCreateCategory = () => {
    if (!title || !description || !image) {
      return toast.error("Please fill all required fields");
    }
    setLoading(true);
    handleImageUpload();

    setShowModal(false);
  };

  const handleUpdateCategory = () => {
    if (!editCategory || !editCategory._id) {
      toast.error("Invalid category for update");
      return;
    }

    if (!title || !description) {
      return toast.error("Please fill all required fields");
    }

    const body = {
      title,
      description,
      image,
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/api/categories/categories/${editCategory._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setLoading(false);
          toast.success(data.message);
          setEditCategory(null);
          setTitle("");
          setDescription("");
          setImage(null);
          setShowModal(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        toast.error("Internal server error");
      });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (categoryImage) {
      let body = {
        title,
        description,
        image: categoryImage,
      };

      // console.log(body);

      fetch(process.env.REACT_APP_API_URL + "/api/categories/categories", {
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
            // console.log(data.message);
            setTitle("");
            setDescription("");
            setImage(null);
            setShowModal(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categoryImage]);

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
          setCategoryImage(data.secure_url);
          // console.log(data.secure_url);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleEdit = (category) => {
    setEditCategory(category);
    setTitle(category.title);
    setDescription(category.description);
    setImage(category.image);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    fetch(
      process.env.REACT_APP_API_URL + `/api/categories/deleteCategory/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        toast.success(result.message);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // pagination and search
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5; // Adjust as needed

  const filteredOrders = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
                          <h4 className="card-title">Category</h4>
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
                          New Category
                        </button>
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
                              <th>Image</th>
                              <th>Title</th>
                              <th>Description</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentItems?.map((category) => (
                              <tr key={category._id}>
                                <td className="py-1">
                                  <img src={category.image} alt="image" />
                                </td>
                                <td>{category.title}</td>
                                <td>{category.description}</td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => handleEdit(category)}
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
                                    onClick={() => handleDelete(category._id)}
                                  >
                                    Delete
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
                    Add Category
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
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ur title"
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
                        placeholder="Enter ur description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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

export default Categories;
