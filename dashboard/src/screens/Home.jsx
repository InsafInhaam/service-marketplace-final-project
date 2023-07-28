import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="container-scroller">
        <Navbar />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="main-content">
              <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-blue">
              <div className="inner">
                <h3> 13436 </h3>
                <p> Student Strength </p>
              </div>
              <div className="icon">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
              </div>
              <a href="#" className="card-box-footer">View More <i className="fa fa-arrow-circle-right" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-green">
              <div className="inner">
                <h3> ₹185358 </h3>
                <p> Today’s Collection </p>
              </div>
              <div className="icon">
                <i className="fa fa-money" aria-hidden="true" />
              </div>
              <a href="#" className="card-box-footer">View More <i className="fa fa-arrow-circle-right" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-orange">
              <div className="inner">
                <h3> 5464 </h3>
                <p> New Admissions </p>
              </div>
              <div className="icon">
                <i className="fa fa-user-plus" aria-hidden="true" />
              </div>
              <a href="#" className="card-box-footer">View More <i className="fa fa-arrow-circle-right" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-red">
              <div className="inner">
                <h3> 723 </h3>
                <p> Faculty Strength </p>
              </div>
              <div className="icon">
                <i className="fa fa-users" />
              </div>
              <a href="#" className="card-box-footer">View More <i className="fa fa-arrow-circle-right" /></a>
            </div>
          </div>
        </div>
                {/* Page content */}
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="home-tab">
                    <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                      {/* <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#audiences" role="tab" aria-selected="false">Audiences</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#demographics" role="tab" aria-selected="false">Demographics</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#more" role="tab" aria-selected="false">More</a>
                        </li>
                      </ul>
                      <div>
                        <div className="btn-wrapper">
                          <a href="#" className="btn btn-otline-dark align-items-center"><i className="icon-share" /> Share</a>
                          <a href="#" className="btn btn-otline-dark"><i className="icon-printer" /> Print</a>
                          <a href="#" className="btn btn-primary text-white me-0"><i className="icon-download" /> Export</a>
                        </div>
                      </div> */}
                    </div>
                    <div className="tab-content tab-content-basic">
                      <div
                        className="tab-pane fade show active"
                        id="overview"
                        role="tabpanel"
                        aria-labelledby="overview"
                      >
                        <div className="row"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
    </>
  );
};

export default Home;
