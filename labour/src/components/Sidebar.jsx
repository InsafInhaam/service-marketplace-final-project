import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import profileImg from "../assets/profileImg.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const user = useSelector((state) => state.user.user);

  return (
    // <nav
    //   id="sidebarMenu"
    //   className="collapse d-lg-block sidebar collapse bg-white"
    // >
    //   <div className="position-sticky">
    //     <div className="list-group list-group-flush mx-3 mt-4">
    //       <a
    //         href="/dashboard"
    //         className="list-group-item list-group-item-action py-2 ripple"
    //         aria-current="true"
    //       >
    //         <i className="fas fa-tachometer-alt fa-fw me-3" />
    //         <span>Dashboard</span>
    //       </a>

    //       <a
    //         href="#"
    //         className="list-group-item list-group-item-action py-2 ripple"
    //       >
    //         <i className="fas fa-chart-line fa-fw me-3" />
    //         <span>Analytics and Reports</span>
    //       </a>

    //       <a
    //         href="/orders"
    //         className="list-group-item list-group-item-action py-2 ripple"
    //       >
    //         <i className="fas fa-chart-bar fa-fw me-3" />
    //         <span>Order Management</span>
    //       </a>

    //       <a
    //         href="/calendar"
    //         className="list-group-item list-group-item-action py-2 ripple"
    //       >
    //         <i className="fas fa-calendar fa-fw me-3" />
    //         <span>Schedule and Calendar</span>
    //       </a>

    //       <a
    //         href="/calendar"
    //         className="list-group-item list-group-item-action py-2 ripple"
    //       >
    //         <i className="fas fa-wallet fa-fw me-3" />
    //         <span>Earnings</span>
    //       </a>

    //       <a
    //         href="/trackingorder"
    //         className="list-group-item list-group-item-action py-2 ripple"
    //       >
    //         <i className="fas fa-location fa-fw me-3" />
    //         <span>Location Tracking</span>
    //       </a>

    //       <a
    //         href="/calendar"
    //         className="list-group-item list-group-item-action py-2 ripple"
    //       >
    //         <i className="fas fa-star fa-fw me-3" />
    //         <span>Reviews and Ratings</span>
    //       </a>
    //     </div>
    //   </div>
    // </nav>
    <div>
      <nav className="sidebar locked">
        <div className="logo_items flex">
          <span className="nav_image_logo">
            <img src={logo} alt="logo_img" />
          </span>
          {/* <span className="logo_name">Service Wise</span> */}
          {/* <i className="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar" /> */}
        </div>
        <div className="menu_container">
          <div className="menu_items">
            <ul className="menu_item">
              <div className="menu_title flex">
                <span className="title">Dashboard</span>
                <span className="line" />
              </div>
              <li className="item">
                <a href="/" className="link flex">
                  <i className="bx bx-home-alt" />
                  <span>Analytics and Reports</span>
                </a>
              </li>
              <li className="item">
                <a href="/orders" className="link flex">
                  <i className="bx bx-grid-alt" />
                  <span>Order Management</span>
                </a>
              </li>
            </ul>
            <ul className="menu_item">
              <div className="menu_title flex">
                <span className="title">Editor</span>
                <span className="line" />
              </div>
              <li className="item">
                <a href="/calendar" className="link flex">
                  <i className="bx bxs-magic-wand" />
                  <span>Schedule and Calendar</span>
                </a>
              </li>
              <li className="item">
                <a href="/calendar" className="link flex">
                  <i className="bx bx-folder" />
                  <span>Earnings</span>
                </a>
              </li>
              <li className="item">
                <a href="/trackingorder" className="link flex">
                  <i className="bx bx-cloud-upload" />
                  <span>Location Tracking</span>
                </a>
              </li>
            </ul>
            <ul className="menu_item">
              <div className="menu_title flex">
                <span className="title">Setting</span>
                <span className="line" />
              </div>
              <li className="item">
                <a href="/review" className="link flex">
                  <i className="bx bx-flag" />
                  <span>Reviews and Ratings</span>
                </a>
              </li>
              <li className="item">
                <a href="/complain" className="link flex">
                  <i className="bx bx-award" />
                  <span>Complain</span>
                </a>
              </li>
              <li className="item">
                <a href="#" className="link flex">
                  <i className="bx bx-cog" />
                  <span>Setting</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar_profile flex">
            <span className="nav_image">
              <img
                src={user.image ? user.image : profileImg}
                alt={user.firstname}
              />
            </span>
            <div className="data_text">
              <span className="name">
                {user.firstname + " " + user.lastname}
              </span>
              <br />
              <span className="email">{user.email}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
