import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Promotion = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/promo/get-promo")
      .then((res) => res.json())
      .then((result) => {
        setPromos(result);
      });
  }, []);

  const copyToClipboard = (text) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Coupon code copied to clipboard!");
  };

  return (
    <div className="page-wraper" style={{ position: "relative" }}>
      <Navbar />
      <div className="page-content">
        <div className="aon-page-benner-area2">
          <div className="aon-banner-large2-title">Promotion Coupons</div>
        </div>
        <div className="aon-page-jobs-wrap">
          <div className="container">
            {/* Promo Cards */}
            <div className="row">
              {promos.map((promo, index) => (
                <div key={index} className="col-md-6">
                  <div
                    className={`card promo-card p-3 mb-3 ${
                      promo.isActive ? "active" : "inactive"
                    }`}
                  >
                    <h5 className="card-title">{promo.title}</h5>
                    <p className="card-text">{promo.description}</p>
                    <div className="promo-code">
                      <code className="h2 border rounded py-0 px-5 text-center text-danger">
                        {promo.promoCode}
                      </code>
                      <button
                        type="button"
                        className={`btn ${
                          promo.isActive ? "btn-success" : "btn-secondary"
                        } promo-code-btn p-2s`}
                        onClick={() => copyToClipboard(promo.code)}
                        style={{ marginLeft: "8px" }}
                      >
                        {promo.isActive ? "ACTIVE" : "INACTIVE"}{" "}
                        <i className="far fa-copy ml-2" />
                      </button>
                    </div>
                    <br />
                    <p>
                      <strong>Start Date:</strong> {promo.startDate}
                    </p>
                    <p>
                      <strong>Expiry Date:</strong> {promo.expiryDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* End Promo Cards */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Promotion;