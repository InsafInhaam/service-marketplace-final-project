import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/categories/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  console.log(categories);

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
                      <h4 className="card-title">Category Table</h4>
                      <p className="card-description">
                        Lorem ipsum dolor sit amet
                      </p>
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
                            {categories?.map((category) => (
                              <tr key={category._id}>
                                <td className="py-1">
                                  <img src={category.image} alt="image" />
                                </td>
                                <td>{category.title}</td>
                                <td>{category.description}</td>
                                <td>
                                  <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
                                    Edit
                                  </button>
                                </td>
                                <td>
                                  <a href="#" className="btn btn-danger">
                                    Delete
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
            </div>
            {/* content-wrapper ends */}
          </div>
          {/* main-panel ends */}

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
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
