import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const Review = () => {
  const user = useSelector((state) => state.user.user);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_URL +
        "/api/reviews/reviewsByLabour/" +
        user._id
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setReviews(result);
      });
  }, [reviews]);

  return (
    <>
      <div>
        <header>
          {/* Sidebar */}
          <Sidebar />
          {/* Navbar */}
          <Navbar />
        </header>
        <main className="main-content">
          <div className="container pt-4">
            <div className="mb-5">
              <div className="card">
                <div className="card-header">Reviews</div>
                <div className="card-body">
                  <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                      <tr>
                        {/* <th>Review Id</th> */}
                        <th>Order Id</th>
                        <th>Order Person</th>
                        <th>Rating Points</th>
                        <th>Review</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviews?.map((review) => (
                        <tr key={review._id}>
                          {/* <td>
                            <div className="d-flex align-items-center">
                              <div className="">
                                <p className="fw-bold mb-1">{review.customerId._id}</p>
                              </div>
                            </div>
                          </td> */}
                          <td>
                            <p className="fw-normal mb-1">{review.orderId}</p>
                          </td>
                          <td>
                            <p className="text-muted mb-0">
                              {review.customerId.name}
                            </p>
                          </td>
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
        </main>
      </div>
    </>
  );
};

export default Review;
