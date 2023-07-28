import React from "react";
import Navbar from "../components/Navbar";

const CategoriesDetail = () => {
  return (
    <div className="page-wraper">
      {/* HEADER START */}
      <Navbar />
      {/* HEADER END */}
      {/* Content */}
      <div className="page-content">
        <div className="section-content sf-allCaty-info-wrap">
          <div className="container">
            {/*Category Detail Section Start*/}
            <div className="row">
              {/*Category Detail Left*/}
              <div className="col-md-6">
                <div className="sf-caty-pic">
                  <div className="sf-caty-btn">View Providers</div>
                  <div className="sf-caty-cirle">
                    <i className="fa fa-arrow-circle-down" />
                  </div>
                </div>
              </div>
              {/*Category Detail Right*/}
              <div className="col-md-6">
                <div className="sf-caty-info">
                  <div className="m-b10">
                    <strong>Project categories</strong> / House cleaning
                    services
                  </div>
                  <h3>House Cleaning Services</h3>
                  <div className="sf-caty-text">
                    <p>
                      Pro house cleaners work with you to assess your home
                      cleaning needs. Whether you need weekly, bi-weekly, or
                      monthly services, house cleaning professionals can
                      schedule cleanings, so that your home has routine care
                      They can also deep clean the house in between cleaning,
                      before special occasions, or for move-in and move-out
                      cleaning.
                    </p>
                    <p>
                      On average, house cleaners on Zaarly cost $30 - $50 per
                      hour per house cleaner. The price will depend on factors
                      like size of the home, supplies needed, and special
                      cleaning circumstances. A 2000 square foot home will
                      typically cost $250. One-time deep cleanings will cost
                      more and signing up for regular cleaning usually will be
                      more cost-effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Category Detail Section End*/}
          </div>
        </div>
        <div className="section-content sf-allCaty-grid-wrap sf-owl-arrow">
          <div className="container">
            {/*Title Section Start*/}
            <div className="section-head">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="sf-title text-white">All Categories</h2>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
            {/*Title Section End*/}
            <div className="section-content">
              <div className="owl-carousel owl-caty-carousel sf-owl-arrow">
                {/* COLUMNS 1 */}
                <div className="item sf-caty-item-col">
                  <div className="sf-catyitem-box">
                    <div
                      className="sf-catyitem-pic"
                      style={{
                        backgroundImage: "url(images/categories/pic1.jpg)",
                      }}
                    >
                      <span className="sf-caty-num" />
                      <a href="#" className="sf-caty-link" />
                    </div>
                    <h5 className="sf-catyitem-title">
                      <a href="categories-detail.html">Car Mechanics</a>
                    </h5>
                  </div>
                  <div className="sf-catyitem-box">
                    <div
                      className="sf-catyitem-pic"
                      style={{
                        backgroundImage: "url(images/categories/pic2.jpg)",
                      }}
                    >
                      <span className="sf-caty-num" />
                      <a href="#" className="sf-caty-link" />
                    </div>
                    <h5 className="sf-catyitem-title">
                      <a href="categories-detail.html">House Cleaning</a>
                    </h5>
                  </div>
                </div>
                {/* COLUMNS 2 */}
                <div className="item sf-caty-item-col">
                  <div className="sf-catyitem-box">
                    <div
                      className="sf-catyitem-pic"
                      style={{
                        backgroundImage: "url(images/categories/pic3.jpg)",
                      }}
                    >
                      <span className="sf-caty-num" />
                      <a href="#" className="sf-caty-link" />
                    </div>
                    <h5 className="sf-catyitem-title">
                      <a href="categories-detail.html">Kitchen Cleaning</a>
                    </h5>
                  </div>
                  <div className="sf-catyitem-box">
                    <div
                      className="sf-catyitem-pic"
                      style={{
                        backgroundImage: "url(images/categories/pic4.jpg)",
                      }}
                    >
                      <span className="sf-caty-num" />
                      <a href="#" className="sf-caty-link" />
                    </div>
                    <h5 className="sf-catyitem-title">
                      <a href="categories-detail.html">Cafe</a>
                    </h5>
                  </div>
                </div>
                {/* COLUMNS 3 */}
                <div className="item sf-caty-item-col">
                  <div className="sf-catyitem-box">
                    <div
                      className="sf-catyitem-pic"
                      style={{
                        backgroundImage: "url(images/categories/pic5.jpg)",
                      }}
                    >
                      <span className="sf-caty-num" />
                      <a href="#" className="sf-caty-link" />
                    </div>
                    <h5 className="sf-catyitem-title">
                      <a href="categories-detail.html">Plumber</a>
                    </h5>
                  </div>
                  <div className="sf-catyitem-box">
                    <div
                      className="sf-catyitem-pic"
                      style={{
                        backgroundImage: "url(images/categories/pic6.jpg)",
                      }}
                    >
                      <span className="sf-caty-num" />
                      <a href="#" className="sf-caty-link" />
                    </div>
                    <h5 className="sf-catyitem-title">
                      <a href="categories-detail.html">Fitness</a>
                    </h5>
                  </div>
                </div>
                {/* COLUMNS 4 */}
                <div className="item sf-caty-item-col">
                  <div className="sf-catyitem-box">
                    <div
                      className="sf-catyitem-pic"
                      style={{
                        backgroundImage: "url(images/categories/pic7.jpg)",
                      }}
                    >
                      <span className="sf-caty-num" />
                      <a href="#" className="sf-caty-link" />
                    </div>
                    <h5 className="sf-catyitem-title">
                      <a href="categories-detail.html">Hair Salon</a>
                    </h5>
                  </div>
                  <div className="sf-catyitem-box">
                    <div
                      className="sf-catyitem-pic"
                      style={{
                        backgroundImage: "url(images/categories/pic8.jpg)",
                      }}
                    >
                      <span className="sf-caty-num" />
                      <a href="#" className="sf-caty-link" />
                    </div>
                    <h5 className="sf-catyitem-title">
                      <a href="categories-detail.html">Gym</a>
                    </h5>
                  </div>
                </div>
                {/* COLUMNS 5 */}
                <div className="item sf-caty-item-col">
                  <div className="sf-catyitem-box">
                    <div
                      className="sf-catyitem-pic"
                      style={{
                        backgroundImage: "url(images/categories/pic9.jpg)",
                      }}
                    >
                      <span className="sf-caty-num" />
                      <a href="#" className="sf-caty-link" />
                    </div>
                    <h5 className="sf-catyitem-title">
                      <a href="categories-detail.html">Gardening</a>
                    </h5>
                  </div>
                  <div className="sf-catyitem-box">
                    <div
                      className="sf-catyitem-pic"
                      style={{
                        backgroundImage: "url(images/categories/pic10.jpg)",
                      }}
                    >
                      <span className="sf-caty-num" />
                      <a href="#" className="sf-caty-link" />
                    </div>
                    <h5 className="sf-catyitem-title">
                      <a href="categories-detail.html">Electrician</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content sf-caty-listResult-wrap">
          <div className="container">
            <div className="section-content">
              {/*Showing results topbar Start*/}
              <div className="sf-search-result-top flex-wrap d-flex justify-content-between">
                <div className="sf-search-result-title">
                  
                  <h5>Showing 1 – 10 of 16 results</h5>
                </div>
                <div className="sf-search-result-option">
                  <ul className="sf-search-sortby">
                    <li className="sf-select-sort-by">
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
                    <li>
                      <select
                        className="sf-select-box form-control sf-form-control bs-select-hidden"
                        title="DESC"
                        name="setorder"
                        id="setorder"
                      >
                        <option className="bs-title-option" value>
                          DESC
                        </option>
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                      </select>
                    </li>
                    <li>
                      <select
                        className="sf-select-box form-control sf-form-control bs-select-hidden"
                        title={9}
                        name="numberofpages"
                        id="numberofpages"
                      >
                        <option className="bs-title-option" value>
                          9
                        </option>
                        <option value={9}>9</option>
                        <option value={12}>12</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                        <option value={30}>30</option>
                      </select>
                    </li>
                  </ul>
                  <ul className="sf-search-grid-option" id="viewTypes">
                    <li data-view="grid-3">
                      <button type="button" className="btn btn-border btn-icon">
                        <i className="fa fa-th" />
                      </button>
                    </li>
                    <li data-view="listview" className="active">
                      <button type="button" className="btn btn-border btn-icon">
                        <i className="fa fa-th-list" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Showing results topbar End*/}
              <div className="row">
                {/*BLock 1*/}
                <div className="col-md-6">
                  <div className="sf-vender-list-wrap">
                    <div className="sf-vender-list-box d-flex">
                      <div
                        className="sf-vender-list-pic"
                        style={{
                          backgroundImage: "url(images/categories/pic1.jpg)",
                        }}
                      >
                        <a
                          className="sf-vender-pic-link"
                          href="profile-full.html"
                        />
                      </div>
                      <div className="sf-vender-list-info">
                        <h4 className="sf-venders-title">
                          <a href="profile-full.html">Colin Farrell</a>
                        </h4>
                        <span className="sf-venders-address">
                          <i className="fa fa-map-marker" />
                          Queens, United States
                        </span>
                        <div className="sf-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="sf-pro-check">
                          <span>
                            <i className="fa fa-check" />
                          </span>
                        </div>
                        <div className="sf-pro-favorite">
                          <a href="#">
                            <i className="fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="dropdown action-dropdown dropdown-left">
                          <button
                            className="action-button gray dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="feather-sliders" /> Display
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-save" /> 0 Review Comments
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-trash" /> Request A Quote
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*BLock 2*/}
                <div className="col-md-6">
                  <div className="sf-vender-list-wrap">
                    <div className="sf-vender-list-box d-flex">
                      <div
                        className="sf-vender-list-pic"
                        style={{
                          backgroundImage: "url(images/categories/pic2.jpg)",
                        }}
                      >
                        <a
                          className="sf-vender-pic-link"
                          href="profile-full.html"
                        />
                      </div>
                      <div className="sf-vender-list-info">
                        <h4 className="sf-venders-title">
                          <a href="profile-full.html">Edward Luise</a>
                        </h4>
                        <span className="sf-venders-address">
                          <i className="fa fa-map-marker" />
                          Queens, United States
                        </span>
                        <div className="sf-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="sf-pro-check">
                          <span>
                            <i className="fa fa-check" />
                          </span>
                        </div>
                        <div className="sf-pro-favorite">
                          <a href="#">
                            <i className="fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="dropdown action-dropdown dropdown-left">
                          <button
                            className="action-button gray dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="feather-sliders" /> Display
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-save" /> 0 Review Comments
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-trash" /> Request A Quote
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*BLock 3*/}
                <div className="col-md-6">
                  <div className="sf-vender-list-wrap">
                    <div className="sf-vender-list-box d-flex">
                      <div
                        className="sf-vender-list-pic"
                        style={{
                          backgroundImage: "url(images/categories/pic3.jpg)",
                        }}
                      >
                        <a
                          className="sf-vender-pic-link"
                          href="profile-full.html"
                        />
                      </div>
                      <div className="sf-vender-list-info">
                        <h4 className="sf-venders-title">
                          <a href="profile-full.html">Colin Farrell</a>
                        </h4>
                        <span className="sf-venders-address">
                          <i className="fa fa-map-marker" />
                          Queens, United States
                        </span>
                        <div className="sf-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="sf-pro-check">
                          <span>
                            <i className="fa fa-check" />
                          </span>
                        </div>
                        <div className="sf-pro-favorite">
                          <a href="#">
                            <i className="fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="dropdown action-dropdown dropdown-left">
                          <button
                            className="action-button gray dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="feather-sliders" /> Display
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-save" /> 0 Review Comments
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-trash" /> Request A Quote
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*BLock 4*/}
                <div className="col-md-6">
                  <div className="sf-vender-list-wrap">
                    <div className="sf-vender-list-box d-flex">
                      <div
                        className="sf-vender-list-pic"
                        style={{
                          backgroundImage: "url(images/categories/pic4.jpg)",
                        }}
                      >
                        <a
                          className="sf-vender-pic-link"
                          href="profile-full.html"
                        />
                      </div>
                      <div className="sf-vender-list-info">
                        <h4 className="sf-venders-title">
                          <a href="profile-full.html">Jackie Chan</a>
                        </h4>
                        <span className="sf-venders-address">
                          <i className="fa fa-map-marker" />
                          Queens, United States
                        </span>
                        <div className="sf-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="sf-pro-check">
                          <span>
                            <i className="fa fa-check" />
                          </span>
                        </div>
                        <div className="sf-pro-favorite">
                          <a href="#">
                            <i className="fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="dropdown action-dropdown dropdown-left">
                          <button
                            className="action-button gray dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="feather-sliders" /> Display
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-save" /> 0 Review Comments
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-trash" /> Request A Quote
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*BLock 5*/}
                <div className="col-md-6">
                  <div className="sf-vender-list-wrap">
                    <div className="sf-vender-list-box d-flex">
                      <div
                        className="sf-vender-list-pic"
                        style={{
                          backgroundImage: "url(images/categories/pic5.jpg)",
                        }}
                      >
                        <a
                          className="sf-vender-pic-link"
                          href="profile-full.html"
                        />
                      </div>
                      <div className="sf-vender-list-info">
                        <h4 className="sf-venders-title">
                          <a href="profile-full.html">James McAvoy</a>
                        </h4>
                        <span className="sf-venders-address">
                          <i className="fa fa-map-marker" />
                          Queens, United States
                        </span>
                        <div className="sf-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="sf-pro-check">
                          <span>
                            <i className="fa fa-check" />
                          </span>
                        </div>
                        <div className="sf-pro-favorite">
                          <a href="#">
                            <i className="fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="dropdown action-dropdown dropdown-left">
                          <button
                            className="action-button gray dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="feather-sliders" /> Display
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-save" /> 0 Review Comments
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-trash" /> Request A Quote
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*BLock 6*/}
                <div className="col-md-6">
                  <div className="sf-vender-list-wrap">
                    <div className="sf-vender-list-box d-flex">
                      <div
                        className="sf-vender-list-pic"
                        style={{
                          backgroundImage: "url(images/categories/pic6.jpg)",
                        }}
                      >
                        <a
                          className="sf-vender-pic-link"
                          href="profile-full.html"
                        />
                      </div>
                      <div className="sf-vender-list-info">
                        <h4 className="sf-venders-title">
                          <a href="profile-full.html">Edward Luise</a>
                        </h4>
                        <span className="sf-venders-address">
                          <i className="fa fa-map-marker" />
                          Queens, United States
                        </span>
                        <div className="sf-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="sf-pro-check">
                          <span>
                            <i className="fa fa-check" />
                          </span>
                        </div>
                        <div className="sf-pro-favorite">
                          <a href="#">
                            <i className="fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="dropdown action-dropdown dropdown-left">
                          <button
                            className="action-button gray dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="feather-sliders" /> Display
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-save" /> 0 Review Comments
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-trash" /> Request A Quote
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*BLock 7*/}
                <div className="col-md-6">
                  <div className="sf-vender-list-wrap">
                    <div className="sf-vender-list-box d-flex">
                      <div
                        className="sf-vender-list-pic"
                        style={{
                          backgroundImage: "url(images/categories/pic7.jpg)",
                        }}
                      >
                        <a
                          className="sf-vender-pic-link"
                          href="profile-full.html"
                        />
                      </div>
                      <div className="sf-vender-list-info">
                        <h4 className="sf-venders-title">
                          <a href="profile-full.html">Mila Kunis</a>
                        </h4>
                        <span className="sf-venders-address">
                          <i className="fa fa-map-marker" />
                          Queens, United States
                        </span>
                        <div className="sf-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="sf-pro-check">
                          <span>
                            <i className="fa fa-check" />
                          </span>
                        </div>
                        <div className="sf-pro-favorite">
                          <a href="#">
                            <i className="fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="dropdown action-dropdown dropdown-left">
                          <button
                            className="action-button gray dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="feather-sliders" /> Display
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-save" /> 0 Review Comments
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-trash" /> Request A Quote
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*BLock 8*/}
                <div className="col-md-6">
                  <div className="sf-vender-list-wrap">
                    <div className="sf-vender-list-box d-flex">
                      <div
                        className="sf-vender-list-pic"
                        style={{
                          backgroundImage: "url(images/categories/pic8.jpg)",
                        }}
                      >
                        <a
                          className="sf-vender-pic-link"
                          href="profile-full.html"
                        />
                      </div>
                      <div className="sf-vender-list-info">
                        <h4 className="sf-venders-title">
                          <a href="profile-full.html">Javier Bardem</a>
                        </h4>
                        <span className="sf-venders-address">
                          <i className="fa fa-map-marker" />
                          Queens, United States
                        </span>
                        <div className="sf-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="sf-pro-check">
                          <span>
                            <i className="fa fa-check" />
                          </span>
                        </div>
                        <div className="sf-pro-favorite">
                          <a href="#">
                            <i className="fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="dropdown action-dropdown dropdown-left">
                          <button
                            className="action-button gray dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="feather-sliders" /> Display
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-save" /> 0 Review Comments
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-trash" /> Request A Quote
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Pagination Start*/}
                <div className="site-pagination s-p-center">
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
                </div>
                {/*Pagination End*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content END*/}
      {/* FOOTER START */}
      <footer className="site-footer footer-light">
        {/* FOOTER NEWSLETTER START */}
        <div className="footer-top-newsletter">
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
        </div>
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
                    <li>India</li>
                    <li>+41 232 525 5257</li>
                    <li>+41 856 525 5369</li>
                    <li>hello@Servicefinder.com</li>
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
                  <img src="images/logo-dark.png" alt="" />
                </a>
              </div>
              <div className="sf-f-copyright">
                <span>Copyright 2022 | Insaf Inhaam. All Rights Reserved</span>
              </div>
              <div className="sf-f-social">
                <ul className="socila-box">
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
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

export default CategoriesDetail;