import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cityOptions } from "./../utils/cities";
import profileImg from "../assets/profileImg.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.user);

  const history = useNavigate();
  // const [searchQuery, setSearchQuery] = useState("");
  // const [city, setCity] = useState("");

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const handleCityChange = (e) => {
  //   setCity(e.target.value);
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");

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

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleAddressSelect = (address) => {
    setSearchQuery(address.display_name);
    setSelectedAddress(address.display_name);
    setSearchResults([]);
    // Save the selected address to the user's database table (you need to implement this part)
    // You can dispatch an action to update the user's address in Redux state or make an API call
    // For example: dispatch({ type: "UPDATE_USER_ADDRESS", address: address.display_name });
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
        console.error('Error fetching location from address:', data.error);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    }
  };

  const updateUserLocation = async (userId, address, latitude, longitude) => {
    try {
      const response = await fetch(`/api/user/updateLocation/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address, latitude, longitude }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('User location and address updated:', data);
      } else {
        console.error('Error updating user location and address:', data.error);
      }
    } catch (error) {
      console.error('Error updating user location and address:', error);
    }
  };
  

  return (
    <header className="site-header header-style-2 mobile-sider-drawer-menu header-full-width">
      <div className="sticky-header main-bar-wraper  navbar-expand-lg">
        <div className="main-bar">
          <div className="container clearfix">
            {/*Logo section start*/}
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/*Logo section End*/}
            {/* NAV Toggle Button */}
            <button
              id="mobile-side-drawer"
              data-target=".header-nav"
              data-toggle="collapse"
              type="button"
              className="navbar-toggler collapsed"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar icon-bar-first" />
              <span className="icon-bar icon-bar-two" />
              <span className="icon-bar icon-bar-three" />
            </button>
            {/* MAIN Vav */}
            <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search..."
                  // value={searchQuery}
                  // onChange={handleSearchChange}
                  className="form-control navbar-search-field mr-4"
                />
              </div>

              {/* City Select
              <select
                className="sf-select-box form-control sf-form-control bs-select-hidden navbar-city-field"
                data-live-search="true"
                name="city"
                id="city"
                title="City"
                data-header="Select a City"
                value={city}
                onChange={handleCityChange}
              >
                <option value="">Select a city</option>
                {cityOptions.map((cityOption) => (
                  <option key={cityOption.id} value={cityOption.name}>
                    {cityOption.name}
                  </option>
                ))}
              </select> */}

              <div className="location-searcg-div">
                <input
                  type="text"
                  placeholder="Choose your location"
                  className="sf-select-box form-control sf-form-control bs-select-hidden navbar-city-field"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {searchResults.length > 0 && (
                  <ul className="search-results shadow-3                  ">
                    {searchResults.map((result) => (
                      <li
                        key={result.display_name}
                        onClick={() => handleAddressSelect(result)}
                      >
                        {result.display_name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {/* Header Right Section*/}
            <div className="extra-nav header-2-nav">
              <div className="extra-cell">
                <Link
                  className="site-button aon-btn-signup m-l20 mr-3"
                  to="/cart"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="badge badge-light">
                    {cart.cartItems && cart.cartItems.length}
                  </span>
                </Link>

                {user ? (
                  <div className="btn-group mr-4">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split navbar-profile-img-btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={user.profile ? user.profile : profileImg}
                        className="rounded-circle navbar-profile-img"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/userdashboard">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/order">
                          Orders
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={() => {
                            localStorage.clear();
                            dispatch({ type: "LOGOUT" });
                            history("/login");
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link className="site-button aon-btn-signup" to="/login">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
