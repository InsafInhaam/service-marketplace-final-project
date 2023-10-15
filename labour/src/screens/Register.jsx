import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";
import LocationSearch from "../components/LocationSearch";

const Register = () => {
  const history = useNavigate();

  const [loading, setLoading] = useState(false);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [labourCategory, setLabourCategory] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [hourlyPrice, setHourlyPrice] = useState("");

  const [categories, setCategories] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);

  // fetch all categories and list them in categories field
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/categories/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, [categories]);

  // search addresses and set the address and latitude and longitude
  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Perform address search
    if (query.trim() !== "") {
      try {
        const results = await searchAddress(query);
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching address:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const searchAddress = async (query) => {
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data.length > 0) {
        return data.map((result) => ({
          display_name: result.display_name,
          latitude: parseFloat(result.lat),
          longitude: parseFloat(result.lon),
        }));
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    }
  };

  const handleAddressSelect = (address) => {
    // Use the selected address data as needed
    console.log("Selected Address:", address);
    setAddress(address.display_name);
    setLatitude(address.latitude);
    setLongitude(address.longitude);
  };

  // register the labour form
  useEffect(() => {
    if (profilePic) {
      let body = {
        firstname,
        lastname,
        email,
        password,
        profilePic,
        address,
        phone,
        labourCategory,
        hourlyPrice,
        latitude,
        longitude,
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

    if (!firstname) {
      return toast.error("Please enter your first name");
    } else if (!lastname) {
      return toast.error("Please enter your last name");
    } else if (!email) {
      return toast.error("Please enter your email");
    } else if (!password) {
      return toast.error("Please enter your password");
    } else if (!image) {
      return toast.error("Please upload an image");
    } else if (!address) {
      return toast.error("Please enter your address");
    } else if (!phone) {
      return toast.error("Please enter your phone number");
    } else if (!labourCategory) {
      return toast.error("Please select a labour category");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return toast.error("Invalid email address");
    } else if (password.length < 8) {
      return toast.error("Password must be at least 8 characters");
    } else if (!specialChars.test(password)) {
      return toast.error("Password must have special characters");
    }

    setLoading(true);
    handleImageUpload();
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="text-uppercase">Labour Registration Form</h3>
                  </div>
                  <form action="#" method="post" className="px-5">
                    <div className="form-group first ">
                      <label htmlFor="name">FirstName</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ur firstname"
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div className="form-group first mt-3">
                      <label htmlFor="name">LastName</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ur name"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    <div className="form-group first mt-3">
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
                    <div className="form-group first mt-3">
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

                    <div className="form-group first mt-3">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for an address..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                      {searchResults.length > 0 && (
                        <ul className="search-results shadow-3 ">
                          {searchResults.map((result) => (
                            <li key={result.display_name}>
                              <a
                                href="#"
                                onClick={() => handleAddressSelect(result)}
                              >
                                {result.display_name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="form-group mt-3">
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
                    <div className="form-group last mt-3">
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
                    <div className="form-group last mt-3">
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
                    <div className="form-group last mt-3">
                      <label htmlFor="password">Image</label>
                      <input
                        className="form-control"
                        id="image"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                    <div className="d-flex my-3 align-items-center">
                      <span className="ml-auto">
                        Already have an account? &nbsp;
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
      </div>
    </section>
  );
};

export default Register;
