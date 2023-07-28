import React from "react";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
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
            <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-start pl-5">
              <ul className=" nav navbar-nav">
                <li className="has-child current-menu-item">
                  <a href="/">Home</a>
                </li>
                <li className="has-child">
                  <a href="/about">About us</a>
                </li>
                <li className="has-child">
                  <a href="/all-categories">Categories</a>
                </li>
                <li className="has-child">
                  <a href="/search">Find Experts</a>
                </li>
                <li className="has-child">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* Header Right Section*/}
            <div className="extra-nav header-2-nav">
              <div className="extra-cell">
                <a href="/profile" className="site-button aon-btn-signup m-l20">
                  <i className="fa fa-user" /> Profile
                </a>
                <a
                  href="#"
                  className="site-button aon-btn-signup m-l20"
                  onClick={() => {
                    localStorage.clear();
                    dispatch({ type: "LOGOUT" });
                    history("/login");
                  }}
                >
                  <i className="fa fa-sign-out" /> logout
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
