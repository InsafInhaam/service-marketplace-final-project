import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServiceListing = () => {
  return (
    <div className="page-wraper">
      <Navbar />
      <div className="page-content">
        {/* Banner Area */}
        <div className="aon-page-benner-area2">
          <div className="aon-banner-large2-title">
            Home services at your doorstep
          </div>
        </div>
        <div className="aon-page-jobs-wrap">
          <div className="container">
            <div className="row">
              {/* Side bar start */}
              <div className="col-lg-4 col-md-12">
                <aside className="side-bar sf-rounded-sidebar">
                  {/*Find a Job*/}
                  <div className="sf-job-sidebar-blocks">
                    <h4 className="sf-title">Find a Job</h4>
                  </div>
                </aside>
              </div>
              {/* Side bar END */}
              {/* Right part start */}
              <div className="col-lg-8 col-md-12">
                {/* <div className="aon-search-result-top flex-wrap d-flex justify-content-between">
                  <div className="aon-search-result-title">  
                    <h5>
                      <span>(16)</span> Jobs &amp; Vacancies
                    </h5>
                  </div>
                  <div className="aon-search-result-option">
                    <ul className="aon-search-sortby">
                      <li className="aon-select-sort-by">
                        <select
                          className="sf-select-box form-control sf-form-control bs-select-hidden"
                          title="SORT BY"
                          name="setorderby"
                          id="setorderby"
                        >
                          <option className="bs-title-option" value>
                            SORT BY
                          </option>
                          <option value="rating">Rating</option>
                          <option value="title">Title</option>
                          <option value="distance">Distance</option>
                        </select>
                      </li>
                    </ul>
                    <ul className="aon-search-grid-option" id="viewTypes">
                      <li data-view="grid-3">
                        <button
                          type="button"
                          className="btn btn-border btn-icon"
                        >
                          <i className="fa fa-th" />
                        </button>
                      </li>
                      <li data-view="listview" className="active">
                        <button
                          type="button"
                          className="btn btn-border btn-icon"
                        >
                          <i className="fa fa-th-list" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <ul className="job_listings job_listings-two">
                  {/* COLUMNS 1 */}
                  <li className="job_listing type-job_listing job-type-hourly">
                    <a className="job-clickable-box" href="job-detail.html" />
                    <div className="job-comapny-logo">
                      <img
                        className="company_logo"
                        src="images/jobs/1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="job-comapny-info">
                      <div className="position">
                        <h3>Web Designer Required in Brooklyn</h3>
                        <div className="company">
                          <strong>Blue Hills Pvt. Ltd.</strong>
                        </div>
                      </div>
                      <ul className="meta">
                        <li className="job-type hourly">
                          <i className="fa fa-circle" />
                          Hourly
                        </li>
                        <li className="date">
                          <span>3 years ago</span>
                        </li>
                      </ul>
                      <div className="job-location">
                        <i className="fa fa-map-marker" /> Brooklyn
                      </div>
                      <div className="job-amount">
                        <i className="fa fa-money" />
                        <span>$1,200 - $1,500</span>
                      </div>
                      <div className="job-label">
                        <img src="images/label.html" alt="" />
                      </div>
                    </div>
                  </li>
                </ul>
                {/* Pagination Start*/}
                {/* <div className="site-pagination s-p-center">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1}>
                        <i className="fa fa-chevron-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fa fa-ellipsis-h" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        11
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fa fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceListing;
