import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { cityOptions } from "../utils/cities";
import { toast } from "react-hot-toast";
import UserDetails from "../components/UserDetails";
import UserDetailsService from "../unused/UserDetailsService";
import UserDetailsReviews from "../unused/UserDetailsReviews";
import TopBanner from "../components/TopBanner";
import Wallet from "../components/Wallet";
import ReferralCode from "../components/ReferralCode";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

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

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/user/user/" + user._id)
      .then((res) => res.json())
      .then((result) => {
        setUserDetails(result);
      });
  }, [userDetails]);

  // console.log(userDetails);

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
          {/* <TopBanner
            bannerTitle={"Profile Information"}
            bannerDescription={
              "lorem ipsum dolor sit amet, consectetur adipiscing el"
            }
          /> */}
          <div className="aon-page-benner-area2">
            <div className="aon-banner-large2-title">Profile Information</div>
          </div>

          <div className="container pt-5">
            {/*About Provider*/}
            <UserDetails
              userDetails={userDetails}
              onShowModal={() => setShowModal(true)}
            />
            {/*  */}
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card mb-4">
                      <div className="card-body text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                          alt="avatar"
                          className="rounded-circle img-fluid"
                          style={{ width: "150px" }}
                        />
                        <h5 className="my-3">John Smith</h5>
                        <p className="text-muted mb-1">Full Stack Developer</p>
                        <p className="text-muted mb-4">
                          Bay Area, San Francisco, CA
                        </p>
                        <div className="d-flex justify-content-center mb-2">
                          <button type="button" className="btn btn-primary">
                            Follow
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary ms-1"
                          >
                            Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">Johnatan Smith</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              example@example.com
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Phone</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">(097) 234-5678</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Mobile</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">(098) 765-4321</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Address</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              Bay Area, San Francisco, CA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*  */}
            <Wallet />
            <ReferralCode />
          </div>
        </div>
        <Footer />
      </div>

      {showModal && (
        <div className="modal fade">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close btn btn-danger btn-sm"
                  onClick={() => setShowModal(true)}
                >
                  X
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
                  {/* <div className="form-group first">
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
                  </div> */}
                  {/* <div className="form-group first">
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
                  </div> */}
                  {/* {role === "labour" && ( 
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
                  )} */}
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
      )}
    </>
  );
};

export default Profile;
