import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cityOptions } from "./../utils/cities";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const history = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <header className="site-header header-style-2 mobile-sider-drawer-menu header-full-width">
      <div className="sticky-header main-bar-wraper  navbar-expand-lg">
        <div className="main-bar">
          <div className="container clearfix">
            {/*Logo section start*/}
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one">
                <a href="/">
                  <img src={logo} alt="" />
                </a>
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
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="form-control navbar-search-field mr-4"
                />
              </div>

              {/* City Select */}
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
              </select>
            </div>
            {/* Header Right Section*/}
            <div className="extra-nav header-2-nav">
              <div className="extra-cell">
                <a className="site-button aon-btn-signup m-l20" href="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="badge badge-light">
                    {cart.cartItems && cart.cartItems.length}
                  </span>
                </a>

                <a href="/profile" className="m-l20">
                  <i className="fa fa-user" /> Profile
                </a>
                <a
                  href="#"
                  className=" m-l20"
                  onClick={() => {
                    localStorage.clear();
                    dispatch({ type: "LOGOUT" });
                    history("/login");
                  }}
                >
                  <i className="fa fa-sign-out" /> Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
