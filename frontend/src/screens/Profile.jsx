import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { cityOptions } from "../utils/cities";
import { toast } from "react-hot-toast";
import UserDetails from "../components/UserDetails";
import UserDetailsService from "../components/UserDetailsService";
import UserDetailsReviews from "../components/UserDetailsReviews";
import TopBanner from "../components/TopBanner";

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
          <TopBanner
            bannerTitle={"Profile Information"}
            bannerDescription={
              "lorem ipsum dolor sit amet, consectetur adipiscing el"
            }
          />

          <div className="container pt-5">
            {/*About Provider*/}
            <UserDetails userDetails={userDetails} />

            <UserDetailsService userDetails={userDetails} />

            <UserDetailsReviews />
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
