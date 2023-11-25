import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { toast } from "react-hot-toast";

const Promo = () => {
  const [promos, setPromos] = useState([]);

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [promoCode, setpromoCode] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/promo/get-promo")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPromos(result);
      });
  }, [promos]);

  // console.log(promos);
  const handleFormSubmit = () => {
    if (
      !promoCode ||
      !description ||
      !startDate ||
      !expiryDate ||
      !discountPercentage
    ) {
      return toast.error("Please fill all required fields");
    }
    setLoading(true);
    let body = {
      promoCode,
      description,
      startDate,
      expiryDate,
      discountPercentage,
      isActive: true,
    };

    // console.log(body);

    fetch(process.env.REACT_APP_API_URL + "/api/promo/add-promo", {
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
    setShowModal(false);

    setDescription("");
    setpromoCode("");
    setStartDate("");
    setExpiryDate("");
    setDiscountPercentage("");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDelete = (id) => {
    fetch(process.env.REACT_APP_API_URL + `/api/promo/delete-promo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(result.message);
      });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5; // Adjust as needed

  const filteredOrders = promos.filter((promo) =>
    promo.promoCode.toLowerCase().includes(searchTerm.toLowerCase())
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
                          <h4 className="card-title">PromoCode</h4>
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
                          New Promo
                        </button>
                      </div>
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
                              <th>PromoCode Id</th>
                              <th>Promo Code</th>
                              <th>Description</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Discount Percentage</th>
                              <th>Status</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {promos?.map((promo) => (
                              <tr key={promo._id}>
                                <td>{promo._id}</td>
                                <td>{promo.promoCode}</td>
                                <td>{promo.description}</td>
                                <td>{promo.startDate}</td>
                                <td>{promo.expiryDate}</td>
                                <td>{promo.discountPercentage}</td>
                                <td>
                                  {promo.isActive ? "Active" : "Not Active"}
                                </td>
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
                                    onClick={() => handleDelete(promo._id)}
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
            aria-hidden={!showModal}
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
                      <label htmlFor="promoCode">Promo Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ur Promo Code"
                        id="promoCode"
                        value={promoCode}
                        onChange={(e) => setpromoCode(e.target.value)}
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
                    <div className="form-group first">
                      <label htmlFor="startdate">Start Date</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Enter ur Start Date"
                        id="startdate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>

                    <div className="form-group first">
                      <label htmlFor="expiryDate">Expiry Date</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Enter ur Expiry Date"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                      />
                    </div>
                    <div className="form-group first">
                      <label htmlFor="discountPercentage">
                        Discount Percentage
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter ur Discount Percentage"
                        id="discountPercentage"
                        value={discountPercentage}
                        onChange={(e) => setDiscountPercentage(e.target.value)}
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

export default Promo;
