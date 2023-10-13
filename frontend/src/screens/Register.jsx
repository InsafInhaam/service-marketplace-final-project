import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { cityOptions } from "./../utils/cities";

const Register = () => {
  const history = useNavigate();

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
    fetch(process.env.REACT_APP_API_URL + "/api/categories/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, [categories]);

  useEffect(() => {
    if (profilePic) {
      let body = {
        name,
        email,
        role,
        password,
        address,
        city,
        phone,
        profilePic,
      };

      if (labourCategory) {
        body.labourCategory = labourCategory;
      }

      if (hourlyPrice) {
        body.hourlyPrice = hourlyPrice;
      }


      // console.log(body);

      fetch(process.env.REACT_APP_API_URL + "/api/user/register", {
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
            // console.log(data.message);
            history("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [profilePic]);

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
          // console.log(data.secure_url);
        })
        .catch((error) => console.log(error));
    }
  };

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
    handleImageUpload();
  };

  // const handleSubmit = () => {
  //   const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  //   if (!name || !email || !password || !role || !image || !address || !city || !phone) {
  //     return toast.error("Please fill all required fields");
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
  //     return toast.error("Invalid email address");
  //   } else if (password.length < 8) {
  //     return toast.error("Password must be at least 8 characters");
  //   } else if (!specialChars.test(password)) {
  //     return toast.error("Password must have special characters");
  //   }

  //   if(role === "labour"){
  //     if(!labourCategory){
  //       return toast.error("Please Enter labour category");
  //     }
  //   }

  //   if (image) {
  //     const data = new FormData();
  //     data.append("file", image);
  //     data.append("upload_preset", "surge-intern-test");
  //     data.append("cloud_name", "dp6yyczpu");
  //     fetch(process.env.REACT_APP_CLOUDINARY_URL, {
  //       method: "POST",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProfilePic(data.secure_url);
  //         console.log(data.secure_url);
  //       })
  //       .catch((error) => console.log(error));
  //   }

  //   let body = {
  //     name,
  //     email,
  //     role,
  //     password,
  //     address,
  //     city,
  //     phone,
  //     profilePic,
  //   };

  //   if (labourCategory) {
  //     body.labourCategory = labourCategory;
  //   }

  //   console.log(body);

  //   fetch(process.env.REACT_APP_API_URL + "/api/user/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.error) {
  //         toast.error(data.error);
  //       } else {
  //         toast.success(data.message);
  //         console.log(data.message);
  //         history("/login");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="d-lg-flex half register-section">
      <div
        className="bg order-1 order-md-2"
        style={{ backgroundImage: 'url("../images/workers-1.png")' }}
      />
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 register-col">
              <h3>
                Register to <strong>Service Finder</strong>
              </h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                consectetur adipisicing.
              </p>
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
                <div className="d-flex mb-5 align-items-center">
                  <span className="ml-auto">
                    <a href="/login" className="forgot-pass">
                      Login
                    </a>
                  </span>
                </div>
                <input
                  type="button"
                  defaultValue={loading ? "Registering..." : "Register"}
                  className="btn btn-block btn-primary"
                  onClick={() => handleFormSubmit()}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
