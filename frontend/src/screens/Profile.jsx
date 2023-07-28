import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { cityOptions } from "../utils/cities";
import { toast } from "react-hot-toast";

const Profile = () => {
  const user = useSelector((state) => state.user);

  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [labourCategory, setLabourCategory] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [hourlyPrice, setHourlyPrice] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/user/user/" + user._id)
      .then((res) => res.json())
      .then((result) => {
        setUserDetails(result);
      });
  }, [userDetails]);

  console.log(userDetails);

  const handleFormSubmit = () => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (
      !name ||
      !email ||
      !password ||
      !role ||
      !image ||
      !address ||
      !city ||
      !phone
    ) {
      return toast.error("Please fill all required fields");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return toast.error("Invalid email address");
    } else if (password.length < 8) {
      return toast.error("Password must be at least 8 characters");
    } else if (!specialChars.test(password)) {
      return toast.error("Password must have special characters");
    }

    if (role === "labour") {
      if (!labourCategory) {
        return toast.error("Please enter labour category");
      }
    }
    setLoading(true);
  };

  return (
    <>
      <div className="page-wraper">
        {/* HEADER START */}
        <Navbar />
        <div className="page-content">
          {/*Top Banner Section Start*/}
          <div className="sf-profile-banner-full">
            <div className="container sf-proBnrfull-container">
              <div className="sf-proBnrfull-row">
                {/*Top Banner Left*/}
                <div className=" sf-proBnrfull-left"></div>
                {/*Top Banner Right*/}
                <div className=" sf-proBnrfull-right">
                  <h2 className=" sf-proBnrfull-heading">
                    Profile Information
                  </h2>
                  <div className=" sf-proBnrfull-tagline">
                    lorem ipsum dolor sit amet, consectetur adipiscing el
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-5">
            {/*About Provider*/}
            <div className="sf-provi-bio-box cleafix margin-b-50 sf-provi-fullBox">
              {/*Left*/}
              <div className="sf-provi-bio-left">
                <div className="sf-provi-bio-info">
                  <div className="sf-provi-pic">
                    <img src={userDetails.image} alt={userDetails.name} />
                  </div>
                  {userDetails.role === "labour" && (
                    <div className="sf-ow-pro-rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star text-gray" />
                    </div>
                  )}
                </div>
              </div>
              {/*Right*/}
              <div className="sf-provi-bio-right">
                <h3 className="sf-provi-title">{userDetails.name}</h3>
                {userDetails.role === "labour" && (
                  <div className="sf-provi-cat">
                    <strong>Categories:</strong> {userDetails.serviceProvided}
                  </div>
                )}

                <div className="sf-provi-bio-text">
                  <p>{userDetails.description}</p>
                  <p>
                    <strong>Address</strong> {userDetails.address}
                  </p>
                  <p>
                    <strong>City</strong> {userDetails.city}
                  </p>
                  <p>
                    <strong>Phone</strong> {userDetails.phone}
                  </p>

                  <div className="sf-provi-btn">
                    <button
                      type="button"
                      className="site-button"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i className="fa fa-pencil" />
                      Edit Profile Details
                    </button>
                  </div>
                </div>
                <div className="sf-provi-social-row d-flex flex-wrap justify-content-between">
                  <div className="social-share-icon social-share-icon2">
                    <div className="social-share-cell">
                      <strong>Explore Us On Social Media</strong>
                    </div>
                    <div className="social-share-cell">
                      <ul className="share-buttons">
                        <li>
                          <a
                            className="fb-share"
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="nofollow"
                          >
                            <i className="fab fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="twitter-share"
                            href="https://twitter.com/"
                            target="_blank"
                            rel="nofollow"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="linkedin-share"
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="nofollow"
                          >
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="pinterest-share"
                            href="https://in.pinterest.com/"
                            target="_blank"
                            rel="nofollow"
                          >
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {userDetails.role === "labour" && (
              <div
                id="aon-provider-services"
                className="sf-provi-service-box m-b50 sf-provi-fullBox"
              >
                <h3 className="sf-provi-title">Service</h3>
                <div className="sf-divider-line" />
                <ul className="sf-provi-service-list">
                  <li className="sf-provi-service-box">
                    <div className="sf-provi-service-top">
                      <div className="sf-provi-service-left">
                        <h4 className="sf-provi-service-ttle">
                          <span className="sf-provi-toggle-btn">+</span> 3
                          bedroom or a house <span>Offer</span>
                        </h4>
                        <div className="sf-provi-service-price">$124.00</div>
                        <div className="sf-provi-service-hour">
                          <i className="fa fa-clock-o" />
                          Hour
                        </div>
                      </div>
                      <div className="sf-provi-service-right">
                        <button className="site-button btn-schedules">
                          Schedule
                        </button>
                      </div>
                    </div>
                    <div className="sf-provi-service-bottom">
                      <div className="sf-provi-descriptio">
                        Many serives have a wide spectrum of expertise in web
                        solutions within these industries, giving us the
                        necessary skills and knowledge.
                      </div>
                    </div>
                  </li>
                  <li className="sf-provi-service-box">
                    <div className="sf-provi-service-top">
                      <div className="sf-provi-service-left">
                        <h4 className="sf-provi-service-ttle">
                          <span className="sf-provi-toggle-btn">+</span> 3
                          bedroom or a house <span>Offer</span>
                        </h4>
                        <div className="sf-provi-service-price">$124.00</div>
                        <div className="sf-provi-service-hour">
                          <i className="fa fa-clock-o" />
                          Hour
                        </div>
                      </div>
                      <div className="sf-provi-service-right">
                        <button className="site-button btn-schedules">
                          Schedule
                        </button>
                      </div>
                    </div>
                    <div className="sf-provi-service-bottom">
                      <div className="sf-provi-descriptio">
                        Many serives have a wide spectrum of expertise in web
                        solutions within these industries, giving us the
                        necessary skills and knowledge.
                      </div>
                    </div>
                  </li>
                  <li className="sf-provi-service-box">
                    <div className="sf-provi-service-top">
                      <div className="sf-provi-service-left">
                        <h4 className="sf-provi-service-ttle">
                          <span className="sf-provi-toggle-btn">+</span> 3
                          bedroom or a house <span>Offer</span>
                        </h4>
                        <div className="sf-provi-service-price">
                          $ 12.00/Hour
                        </div>
                      </div>
                      <div className="sf-provi-service-right">
                        <div className="sf-provi-service-count">
                          <input
                            id="demo1"
                            type="text"
                            defaultValue={55}
                            name="demo1"
                          />
                        </div>
                        <button className="site-button btn-schedules">
                          Schedule
                        </button>
                      </div>
                    </div>
                    <div className="sf-provi-service-bottom">
                      <div className="sf-provi-descriptio">
                        Many serives have a wide spectrum of expertise in web
                        solutions within these industries, giving us the
                        necessary skills and knowledge.
                      </div>
                    </div>
                  </li>
                  <li className="sf-provi-service-box">
                    <div className="sf-provi-service-top">
                      <div className="sf-provi-service-left">
                        <h4 className="sf-provi-service-ttle">
                          <span className="sf-provi-toggle-btn">+</span> 3
                          bedroom or a house <span>Offer</span>
                        </h4>
                        <div className="sf-provi-service-price">
                          $ 10.00/Hour
                        </div>
                      </div>
                      <div className="sf-provi-service-right">
                        <div className="sf-provi-service-count">
                          <input
                            id="demo2"
                            type="text"
                            defaultValue={55}
                            name="demo1"
                          />
                        </div>
                        <button className="site-button btn-schedules">
                          Schedule
                        </button>
                      </div>
                    </div>
                    <div className="sf-provi-service-bottom">
                      <div className="sf-provi-descriptio">
                        Many serives have a wide spectrum of expertise in web
                        solutions within these industries, giving us the
                        necessary skills and knowledge.
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="servi-leRi-btn d-flex flex-wrap justify-content-between">
                  <div className="servi-le-btn">
                    <button className="btn btn-custom">
                      <i className="feather-chevron-up" />
                    </button>
                    <button className="btn btn-custom">
                      <i className="feather-chevron-down" />
                    </button>
                  </div>
                  <div className="servi-Ri-btn">
                    <button className="btn btn-custom aon-sm-btn-dark">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}
           
          </div>
        </div>
        <Footer />
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#" method="post">
                <div className="form-group first">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ur name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group first">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ur email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group first">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter ur phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group first">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ur address"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group first">
                  <label htmlFor="city">City</label>
                  <select
                    className="form-control"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">Select a city</option>
                    {cityOptions.map((cityOption) => (
                      <option key={cityOption.id} value={cityOption.name}>
                        {cityOption.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group first">
                  <label htmlFor="email">Account Type</label>
                  <br />
                  <span>Customer</span>
                  &nbsp;&nbsp;
                  <input
                    type="radio"
                    placeholder="Enter ur email"
                    id="role"
                    name="role"
                    value="customer"
                    checked={role === "customer"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  &nbsp;&nbsp;
                  <span>Labour</span>
                  &nbsp;&nbsp;
                  <input
                    type="radio"
                    placeholder="Enter ur email"
                    id="role"
                    name="role"
                    value="labour"
                    checked={role === "labour"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
                {role === "labour" && ( // Render the select field only if role is 'labour'
                  <>
                    <div className="form-group">
                      <label htmlFor="selectField">
                        Select Field for Labour
                      </label>
                      <select
                        className="form-control"
                        id="labourCategory"
                        value={labourCategory}
                        onChange={(e) => setLabourCategory(e.target.value)}
                      >
                        <option value="">Select a Service u provide</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category.title}>
                            {category.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="hourlyPrice">Hourly Price</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Your Hourly Price"
                        id="hourlyPrice"
                        value={hourlyPrice}
                        onChange={(e) => setHourlyPrice(e.target.value)}
                      />
                    </div>
                  </>
                )}
                <div className="form-group last mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                className="btn btn-warning"
                defaultValue={loading ? "Registering..." : "Register"}
                onClick={() => handleFormSubmit()}
              >
                Update profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
