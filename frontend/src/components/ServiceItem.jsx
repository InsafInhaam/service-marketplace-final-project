import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

const ServiceItem = ({ service }) => {
  const dispatch = useDispatch()
  // const handleAddToCart = () => {
  //     dispatch(addToCart({
  //         ...service,
  //         quantity: 1
  //     }))
  //     alert("Successfully!")
  // }

  const handleAddToCart = (service) => {
    dispatch(addToCart(service));
    // history.push("/cart");
  };

  return (
    <li
      key={service._id}
      className="job_listing type-job_listing job-type-hourly"
    >
      <div className="job-comapny-logo">
        <img className="company_logo" src={service.image} alt="" />
      </div>
      <div className="job-comapny-info">
        <div className="position">
          <h3>{service.name}</h3>
          <div className="company">
            <strong>{service.subcategory.title}</strong>
          </div>
        </div>
        <ul className="meta">
          <li className="job-type hourly">
            <i className="fa fa-circle" />
            {service.hourly ? "Hourly" : "Fixed Price"}
          </li>
          <li className="date">
            <span>{/* Format the date as needed */}</span>
          </li>
        </ul>
        <div className="job-amount">
          <i className="fa fa-money" />
          <span>{`LKR ${service.price}`}</span>
        </div>
        <div className="job-label">
          <img src="images/label.html" alt="" />
        </div>
        <button
          onClick={() => handleAddToCart(service)}
          className="site-button aon-btn-signup"
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ServiceItem;
