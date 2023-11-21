import React from "react";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="mdi mdi-grid-large menu-icon" />
              <span className="menu-title">Dashboard</span>
            </a>
          </li>

          {/* <li className="nav-item nav-category">UI Elements</li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i className="menu-icon mdi mdi-floor-plan" />
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  
                  <a
                    className="nav-link"
                    href="pages/ui-features/dropdowns.html"
                  >
                    Dropdowns
                  </a>
                </li>
                <li className="nav-item">
                  
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li> */}
          <li className="nav-item nav-category">Admin Data manage</li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#form-elements"
              aria-expanded="false"
              aria-controls="form-elements"
            >
              <i className="mdi mdi-account-group menu-icon" />
              <span className="menu-title">Users & Labours</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="form-elements">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="/users">
                    Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/labours">
                    Labours
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/category">
              <i className="mdi mdi-view-list menu-icon" />
              <span className="menu-title">Categories</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/subcategory">
              <i className="mdi mdi-view-list menu-icon" />
              <span className="menu-title">Sub Categories</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">
              <i className="mdi mdi-cogs menu-icon" />
              <span className="menu-title">Services</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/orders">
              <i className="mdi mdi-package-variant-closed menu-icon" />
              <span className="menu-title">Orders</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/promo">
              <i className="mdi mdi-gift menu-icon" />
              <span className="menu-title">Promo</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/complain">
              <i className="mdi mdi-alert menu-icon" />
              <span className="menu-title">Complains</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/reviews">
              <i className="mdi mdi-star menu-icon" />
              <span className="menu-title">Reviews</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin">
              <i className="mdi mdi-account-circle menu-icon" />
              <span className="menu-title">Admins</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              <i className="mdi mdi-account-circle menu-icon" />
              <span className="menu-title">Contact <br /> Submission</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
