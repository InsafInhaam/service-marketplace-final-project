import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      
      <footer className="site-footer footer-light">
        {/* FOOTER NEWSLETTER START */}
        {/* <div className="footer-top-newsletter">
          <div className="container">
            <div className="sf-news-letter">
              <span>Subscribe Our Newsletter</span>
              <form>
                <div className="form-group sf-news-l-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                  <button type="submit" className="sf-sb-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
        {/* FOOTER BLOCKES START */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* Footer col 1*/}
              <div className="col-lg-3 col-md-6 col-sm-6  m-b30">
                <div className="sf-site-link sf-widget-link">
                  <h4 className="sf-f-title">Site Links</h4>
                  <ul>
                    <li>
                      <a href="blog-grid.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="job-grid.html">Jobs</a>
                    </li>
                    <li>
                      <a href="all-categories.html">Categories</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer col 2*/}
              <div className="col-lg-3 col-md-6 col-sm-6  m-b30">
                <div className="sf-site-link sf-widget-cities">
                  <h4 className="sf-f-title">Popular Cities</h4>
                  <ul>
                    <li>
                      <a href="all-categories.html">Ballston Lake</a>
                    </li>
                    <li>
                      <a href="all-categories.html">Batumi</a>
                    </li>
                    <li>
                      <a href="all-categories.html">Brooklyn</a>
                    </li>
                    <li>
                      <a href="all-categories.html">Cambridge</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer col 1*/}
              <div className="col-lg-3 col-md-6 col-sm-6  m-b30">
                <div className="sf-site-link sf-widget-categories">
                  <h4 className="sf-f-title">Categories</h4>
                  <ul>
                    <li>
                      <a href="categories-detail.html">Car Service</a>
                    </li>
                    <li>
                      <a href="categories-detail.html">House Cleaning</a>
                    </li>
                    <li>
                      <a href="categories-detail.html">Transport</a>
                    </li>
                    <li>
                      <a href="categories-detail.html">Yoga Classes</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer col 1*/}
              <div className="col-lg-3 col-md-6 col-sm-6  m-b30">
                <div className="sf-site-link sf-widget-contact">
                  <h4 className="sf-f-title">Contact Info</h4>
                  <ul>
                    <li>45A, Green Lane, Colombo-13, Srilanka</li>
                    <li>9477 55 39978</li>
                    <li>9477 30 77744</li>
                    <li>contactus@servicewise.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER COPYRIGHT */}
        <div className="footer-bottom">
          <div className="container">
            <div className="sf-footer-bottom-section">
              <div className="sf-f-logo">
                <a href="#">
                  <img src={logo} alt="" style={{width: "150px"}}/>
                </a>
              </div>
              <div className="sf-f-copyright">
                <span>Copyright 2022 | Service Wise. All Rights Reserved</span>
              </div>
              <div className="sf-f-social">
                <ul className="socila-box">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER END */}
      {/* BUTTON TOP START */}
      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate" />
      </button>
    </div>
  );
};

export default Footer;
