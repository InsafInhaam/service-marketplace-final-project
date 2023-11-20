import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import UserDetailsReviews from "./../components/UserDetailsReviews";

const Review = () => {
  const user = useSelector((state) => state.user.user);

  const [complains, setComplains] = useState([]);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_URL +
        "/api/complain/complaints/byLabour/" +
        user._id
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setComplains(result);
      });
  }, [complains]);

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
                        <th>Complain Id</th>
                        <th>Order Id</th>
                        <th>Order Person</th>
                        <th>Complain Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complains?.map((complain) => (
                        <tr key={complain._id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="">
                                <p className="fw-bold mb-1">{complain._id}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{complain.orderId}</p>
                          </td>
                          <td>
                            <p className="text-muted mb-0">
                              {complain.userId.name}
                            </p>
                          </td>
                          <td>{complain.reason}</td>
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
