import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/reviews/reviews")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setReviews(result);
      });
  }, [reviews]);

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
                        <h4 className="card-title">Reviews</h4>
                        <p className="card-description">
                          Lorem ipsum dolor sit amet
                        </p>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Review Id</th>
                            <th>Name</th>
                            <th>Labourer</th>
                            <th>Order Id</th>
                            <th>Rating</th>
                            <th>Review</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reviews?.map((review) => (
                            <tr key={review._id}>
                              <td>{review._id}</td>
                              <td>
                                {review.customerId.name} (
                                {review.customerId._id})
                              </td>
                              <td>{review.laborerId}</td>
                              <td>{review.orderId}</td>
                              <td>{review.rating}</td>
                              <td>{review.review}</td>
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

export default Reviews;
