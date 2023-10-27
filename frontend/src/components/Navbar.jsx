import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import profileImg from "../assets/profileImg.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.user);

  const history = useNavigate();
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

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

            <div className="extra-nav header-2-nav d-flex align-items-center justify-content-center">
              {/* <div className="extra-cell"> */}
                <Link
                  className="mx-3"
                  to="/search"
                  style={{ fontSize: "20px" }}
                >
                  <i className="fa-solid fa-search"></i>
                </Link>
                <Link
                  className="mx-3 d-flex align-items-center justify-content-center"
                  to="/cart"
                  style={{ fontSize: "20px" }}
                >
                  <i className="fa-solid fa-cart-shopping m-1"></i>
                  <span className="badge badge-light m-1">
                    {cart.cartItems && cart.cartItems.length}
                  </span>
                </Link>

                {user ? (
                  <div className="btn-group shadow-none mx-3">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split navbar-profile-img-btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={user.image ? user.image : profileImg}
                        className="rounded-circle navbar-profile-img"
                        alt={user.name}
                        loading="lazy"
                      />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/profile">
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
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
