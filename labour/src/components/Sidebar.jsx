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
            <span>Main dashboard</span>
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-line fa-fw me-3" />
            <span>Analytics</span>
          </a>

          <a
            href="/orders"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-bar fa-fw me-3" />
            <span>Orders</span>
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-calendar fa-fw me-3" />
            <span>Calendar</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;





