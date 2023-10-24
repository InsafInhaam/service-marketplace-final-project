import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

const ServiceItem = ({ service }) => {
  const dispatch = useDispatch();
  // const handleAddToCart = () => {
  //     dispatch(addToCart({
  //         ...service,
  //         quantity: 1
  //     }))
  //     alert("Successfully!")
  // }

  const handleAddToCart = (service) => {
    console.log(service);
    dispatch(addToCart(service));
    // history.push("/cart");
  };

  return (
    //   <li
    //   // key={service._id}
    //   className="job_listing type-job_listing job-type-hourly"
    // >
    //   <div className="job-comapny-logo">
    //     <img className="company_logo" src={service.image} alt="" />
    //   </div>
    //   <div className="job-comapny-info">
    //     <div className="position">
    //       <h3>{service.name}</h3>
    //       <div className="company">
    //         <strong>{service.subcategory.title}</strong>
    //       </div>
    //       <p>{service.description}</p> {/* Include the description here */}
    //     </div>
    //     <ul className="meta">
    //       <li className="job-type hourly">
    //         {service.hours} Hours
    //       </li>
    //       <li className="date">
    //         <span>{/* Format the date as needed */}</span>
    //       </li>
    //     </ul>
    //     <div className="job-amount">
    //       <i className="fa fa-money" />
    //       <span>{`LKR ${service.price}`}</span>
    //     </div>
    //     <div className="job-label">
    //       <img src="images/label.html" alt="" />
    //     </div>
    //     <button
    //       onClick={() => handleAddToCart(service)}
    //       className="site-button aon-btn-signup"
    //     >
    //       Add to Cart
    //     </button>
    //   </div>
    // </li>
    <div className="row justify-content-center mb-3">
      <div className="col-md-12 p-0">
        <div className="card shadow border-none rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img
                    src={service.image}
                    className="w-100"
                    alt={service.name}
                  />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>{service.name}</h5>
                <div className="d-flex flex-row">
                  <div className="text-danger mb-1 me-2">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <span>310</span>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                  <span>{service.subcategory.title}</span>
                  <span className="text-primary"> • </span>
                  <span>{service.hours} Hours</span>
                  {/* <span className="text-primary"> • </span>
                  <span>
                    Best finish
                    <br /> 
                  </span>*/}
                </div>
                {/* <div className="mb-2 text-muted small">
                  <span>Unique design</span>
                  <span className="text-primary"> • </span>
                  <span>For men</span>
                  <span className="text-primary"> • </span>
                  <span>
                    Casual
                    <br />
                  </span> 
                </div>*/}
                <p className="text-truncate mb-4 mb-md-0">
                {service.description}
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">{`LKR ${service.price}`}</h4>
                  <span className="text-danger">
                    <s>$20.99</s>
                  </span>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-primary btn-sm" type="button" onClick={() => handleAddToCart(service)}>
                    Add to Cart
                  </button>
                  {/* <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to wishlist
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
