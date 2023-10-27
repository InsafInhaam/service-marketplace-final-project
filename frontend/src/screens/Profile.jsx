import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { cityOptions } from "../utils/cities";
import { toast } from "react-hot-toast";
import UserDetails from "../components/UserDetails";
import Wallet from "../components/Wallet";
import ReferralCode from "../components/ReferralCode";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [image, setImage] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = () => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!name || !email || !address || !city || !phone) {
      return toast.error("Please fill all required fields");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return toast.error("Invalid email address");
    }

    if (password) {
      if (password.length < 8) {
        return toast.error("Password must be at least 8 characters");
      } else if (!specialChars.test(password)) {
        return toast.error("Password must have special characters");
      }
    }

    setLoading(true);
    handleImageUpload();
  };

  const handleImageUpload = () => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "surge-intern-test");
      data.append("cloud_name", "dp6yyczpu");
      fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setProfilePic(data.secure_url);
        })
        .catch((error) => console.log(error));
    }
  };

  // update the user profile page
  useEffect(() => {
    if (profilePic) {
      let body = {
        name,
        email,
        address,
        city,
        phone,
      };

      fetch(process.env.REACT_APP_API_URL + "/api/labour/register", {
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
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [profilePic]);

  return (
    <>
      <div className="page-wraper">
        {/* HEADER START */}
        <Navbar />
        <div className="page-content">
          <div className="aon-page-benner-area2">
            <div className="aon-banner-large2-title">Profile Information</div>
          </div>

          <div className="container pt-5">
            {/*About Provider*/}
            <UserDetails
              userDetails={user}
              onShowModal={() => setShowModal(true)}
            />

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
                  onClick={() => setShowModal(false)}
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
