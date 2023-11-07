import React from "react";

const Sidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <a
            href="/dashboard"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3" />
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-line fa-fw me-3" />
            <span>Analytics and Reports</span>
          </a>

          <a
            href="/orders"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-bar fa-fw me-3" />
            <span>Order Management</span>
          </a>

          <a
            href="/calendar"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-calendar fa-fw me-3" />
            <span>Schedule and Calendar</span>
          </a>

          <a
            href="/calendar"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-wallet fa-fw me-3" />
            <span>Earnings</span>
          </a>

          <a
            href="/trackingorder"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-location fa-fw me-3" />
            <span>Location Tracking</span>
          </a>

          <a
            href="/calendar"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-star fa-fw me-3" />
            <span>Reviews and Ratings</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
