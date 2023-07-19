import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/categories/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  console.log(categories);

  return (
    <div>
      {/* LOADING AREA START ===== */}
      <Loader />
      {/* LOADING AREA  END ====== */}
      <div className="page-wraper">
        {" "}
        {/* HEADER START */}
        <Navbar />
        {/* HEADER END */}
        {/* CONTENT START */}
        <div className="page-content">
          {/* BANNER SECTION START */}
          <section className="aon-banner-area2">
            {/*banner 2*/}
            <div className="container">
              <div className="aone-banner-area2-inner">
                <div className="row d-flex align-items-center">
                  {/*Banner Left*/}
                  <div className="col-lg-5 col-md-12">
                    <div className="aon-bnr2-content-wrap">
                      {/*Banner Text*/}
                      <div className="aon-bnr-write">
                        <h2 className="text-top-line">
                          Hire
                          <span className="text-secondry">Experts</span> &amp;
                        </h2>
                        <h2 className="text-bot-line">Get Your Job Done</h2>
                      </div>
                      {/*Banner Text End*/}
                      {/*Seach Bar*/}
                      <div className="aon-bnr2-search-bar">
                        <form>
                          <div className="aon-bnr2-search-box">
                            {/* COLUMNS 1 */}
                            <div className="aon-search-input keywords-input">
                              <input
                                type="text"
                                placeholder="Search Keywords"
                                className="form-control"
                              />
                            </div>
                            {/* COLUMNS 2 */}
                            <div className="aon-search-input category-select">
                              <select
                                id="categorysrh"
                                name="catid"
                                className="form-control sf-form-control aon-categories-select sf-select-box"
                                title="Category"
                              >
                                <option className="bs-title-option" value>
                                  Select a Category
                                </option>
                                <option
                                  value={17}
                                  data-content="<img class='childcat-img' width='50' height='auto' src=images/cat-thum/cat-1.jpg>
                                                    <span class='childcat'>Cab Service</span>"
                                >
                                  Cab Service
                                </option>
                                <option
                                  value={30}
                                  data-content="<img class='childcat-img' width='50' height='auto' src=images/cat-thum/cat-2.jpg>
                                                    <span class='childcat'>Car Dealers</span>"
                                >
                                  Car Dealers
                                </option>
                                <option
                                  value={19}
                                  data-content="<img class='childcat-img' width='50' height='auto' src=images/cat-thum/cat-3.jpg>
                                                    <span class='childcat'>Food & Drink</span>"
                                >
                                  Food &amp; Drink
                                </option>
                                <option
                                  value={19}
                                  data-content="<img class='childcat-img' width='50' height='auto' src=images/cat-thum/cat-4.jpg>
                                                    <span class='childcat'>Plumber</span>"
                                >
                                  Plumber
                                </option>
                                <option
                                  value={19}
                                  data-content="<img class='childcat-img' width='50' height='auto' src=images/cat-thum/cat-5.jpg>
                                                    <span class='childcat'>Electrician</span>"
                                >
                                  Electrician
                                </option>
                              </select>
                            </div>
                            {/* COLUMNS 3 */}
                            <div className="aon-search-btn-wrap">
                              <button className="aon-search-btn" type="submit">
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/*Seach Bar End*/}
                    </div>
                  </div>
                  {/*Banner Right*/}
                  <div className="col-lg-7 col-md-12">
                    <div className="aon-bnr2-media-wrap">
                      {/* COLUMNS 1 */}
                      <div className="aon-bnr2-media">
                        <img src="images/banner2/1.png" alt="" />
                      </div>
                      {/* COLUMNS 2 */}
                      <div className="aon-bnr2-lines-left">
                        <div className="aon-bnr2-line-left-content">
                          <img src="images/banner2/line-left.png" alt="" />
                          <span className="circle-l-1 slide-fwd-center" />
                          <span className="circle-l-2 slide-fwd-center2" />
                          <span className="circle-l-3 slide-fwd-center3" />
                        </div>
                      </div>
                      {/* COLUMNS 3 */}
                      <div className="aon-bnr2-lines-right">
                        <img src="images/banner2/line-right.png" alt="" />
                        <span className="circle-r-1 slide-fwd-center3" />
                        <span className="circle-r-2 slide-fwd-center2" />
                        <span className="circle-r-3 slide-fwd-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*banner 2*/}
          </section>
          {/* BANNER SECTION END */}
          {/* Services Finder categories */}
          <section className="bg-white aon-categories-area2">
            <div className="container">
              {/*Title Section Start*/}
              <div className="section-head">
                <div className="row">
                  {/* COLUMNS LEFT */}
                  <div className="col-lg-6 col-md-12">
                    <span className="aon-sub-title">categories</span>
                    <h2 className="sf-title">Popular Categories</h2>
                  </div>
                  {/* COLUMNS RIGHT */}
                  <div className="col-lg-6 col-md-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do usmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              {/*Title Section End*/}
              <div className="section-content">
                <div className="aon-categories-area2-section">
                  <div className="row justify-content-center">
                    {categories?.map((category) => (
                      <div className="col-lg-4 col-md-6">
                        <div className="media-bg-animate mba-bdr-15">
                          <div className="aon-categories-area2-iconbox aon-icon-effect">
                            <div className="aon-cate-area2-icon">
                              <span>
                                <i className="aon-icon">
                                  <img
                                    src={category.image}
                                    alt={category.title}
                                  />
                                </i>
                              </span>
                            </div>
                            <div className="aon-cate-area2-content">
                              <h4 className="aon-tilte">
                                <a href={`/service-provider/${category._id}`}>{category.title}</a>
                              </h4>
                              <p>124 Listing</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="aon-btn-pos-center">
                    <a className="site-button" href="/all-categories">
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Services Finder categories END */}
          {/* How It Work */}
          <section className="aon-howit-area2">
            <div className="container">
              <div className="aon-howit-area2-section">
                <div className="aon-howit-area2-bg">
                  {/*Title Section Start*/}
                  <div className="section-head aon-title-center white">
                    <span className="aon-sub-title">Stpes</span>
                    <h2 className="sf-title">How It Work</h2>
                  </div>
                  {/*Title Section Start End*/}
                  <div className="section-content">
                    <div className="aon-categories-area2-section">
                      <div className="row justify-content-center">
                        {/* Block 1*/}
                        <div className="col-lg-4 col-md-6">
                          <div className="aon-howit-area2-iconbox aon-icon-effect">
                            <div className="aone-howit-number">01</div>
                            <div className="aon-howit-area2-icon">
                              <span>
                                <i className="aon-icon">
                                  <img src="images/step-icon/1.png" alt="" />
                                </i>
                              </span>
                            </div>
                            <div className="aon-howit-area2-content">
                              <h4 className="aon-tilte">Describe Your Task</h4>
                              <p>
                                This helps us determine which Taskers We are
                                abest jobs.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Block 2*/}
                        <div className="col-lg-4 col-md-6">
                          <div className="aon-howit-area2-iconbox aon-howit-arrow aon-icon-effect">
                            <div className="aone-howit-number">02</div>
                            <div className="aon-howit-area2-icon">
                              <span>
                                <i className="aon-icon">
                                  <img src="images/step-icon/2.png" alt="" />
                                </i>
                              </span>
                            </div>
                            <div className="aon-howit-area2-content">
                              <h4 className="aon-tilte">Choose a Tasker</h4>
                              <p>
                                This helps us determine which Taskers We are
                                abest jobs.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Block 3*/}
                        <div className="col-lg-4 col-md-6">
                          <div className="aon-howit-area2-iconbox aon-icon-effect">
                            <div className="aone-howit-number">03</div>
                            <div className="aon-howit-area2-icon">
                              <span>
                                <i className="aon-icon">
                                  <img src="images/step-icon/3.png" alt="" />
                                </i>
                              </span>
                            </div>
                            <div className="aon-howit-area2-content">
                              <h4 className="aon-tilte">Live Smarter</h4>
                              <p>
                                This helps us determine which Taskers We are
                                abest jobs.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* How It Work END */}
          {/* Featued Vender */}
          <section className="section-full aon-feature-vender-area2">
            <div className="container">
              {/*Title Section Start*/}
              <div className="section-head">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <span className="aon-sub-title">Vendor</span>
                    <h2 className="sf-title">Featured Providers</h2>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do usmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              {/*Title Section Start*/}
              <div className="section-content">
                <div className="owl-carousel aon-vendor-provider-two-carousel aon-owl-arrow">
                  {/* COLUMNS 1 */}
                  <div className="item">
                    <div className="aon-ow-provider-wrap2">
                      <div className="aon-ow-provider2 shine-hover">
                        <div className="aon-ow-top">
                          <div className="aon-pro-check">
                            <span>
                              <i className="fa fa-check" />
                            </span>
                          </div>
                          <div className="aon-pro-favorite">
                            <a href="#">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div className="aon-ow-info">
                            <h4 className="sf-title">
                              <a href="profile-full.html">Javier Bardem</a>
                            </h4>
                            <span>Queens, United States</span>
                          </div>
                        </div>
                        <div className="aon-ow-mid">
                          <div className="aon-ow-media media-bg-animate">
                            <a className="shine-box" href="profile-full.html">
                              <img src="images/providers/1.jpg" alt="" />
                            </a>
                          </div>
                          <p>
                            Through our expertise, technological knowledge,
                            global presence and bespoke.
                          </p>
                          <div className="aon-ow-pro-rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star text-gray" />
                          </div>
                          <div className="aon-ow-bottom">
                            <a href="profile-full.html" className="site-button">
                              Request A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 2 */}
                  <div className="item">
                    <div className="aon-ow-provider-wrap2">
                      <div className="aon-ow-provider2 shine-hover">
                        <div className="aon-ow-top">
                          <div className="aon-pro-check">
                            <span>
                              <i className="fa fa-check" />
                            </span>
                          </div>
                          <div className="aon-pro-favorite">
                            <a href="#">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div className="aon-ow-info">
                            <h4 className="sf-title">
                              <a href="profile-full.html">Mila Kunis</a>
                            </h4>
                            <span>Queens, United States</span>
                          </div>
                        </div>
                        <div className="aon-ow-mid">
                          <div className="aon-ow-media media-bg-animate">
                            <a className="shine-box" href="profile-full.html">
                              <img src="images/providers/2.jpg" alt="" />
                            </a>
                          </div>
                          <p>
                            Through our expertise, technological knowledge,
                            global presence and bespoke.
                          </p>
                          <div className="aon-ow-pro-rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star text-gray" />
                          </div>
                          <div className="aon-ow-bottom">
                            <a href="profile-full.html" className="site-button">
                              Request A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 3 */}
                  <div className="item">
                    <div className="aon-ow-provider-wrap2">
                      <div className="aon-ow-provider2 shine-hover">
                        <div className="aon-ow-top">
                          <div className="aon-pro-check">
                            <span>
                              <i className="fa fa-check" />
                            </span>
                          </div>
                          <div className="aon-pro-favorite">
                            <a href="#">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div className="aon-ow-info">
                            <h4 className="sf-title">
                              <a href="profile-full.html">Edward Luise</a>
                            </h4>
                            <span>Queens, United States</span>
                          </div>
                        </div>
                        <div className="aon-ow-mid">
                          <div className="aon-ow-media media-bg-animate">
                            <a className="shine-box" href="profile-full.html">
                              <img src="images/providers/3.jpg" alt="" />
                            </a>
                          </div>
                          <p>
                            Through our expertise, technological knowledge,
                            global presence and bespoke.
                          </p>
                          <div className="aon-ow-pro-rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star text-gray" />
                          </div>
                          <div className="aon-ow-bottom">
                            <a href="profile-full.html" className="site-button">
                              Request A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 4 */}
                  <div className="item">
                    <div className="aon-ow-provider-wrap2">
                      <div className="aon-ow-provider2 shine-hover">
                        <div className="aon-ow-top">
                          <div className="aon-pro-check">
                            <span>
                              <i className="fa fa-check" />
                            </span>
                          </div>
                          <div className="aon-pro-favorite">
                            <a href="#">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div className="aon-ow-info">
                            <h4 className="sf-title">
                              <a href="profile-full.html">James McAvoy</a>
                            </h4>
                            <span>Queens, United States</span>
                          </div>
                        </div>
                        <div className="aon-ow-mid">
                          <div className="aon-ow-media media-bg-animate">
                            <a className="shine-box" href="profile-full.html">
                              <img src="images/providers/1.jpg" alt="" />
                            </a>
                          </div>
                          <p>
                            Through our expertise, technological knowledge,
                            global presence and bespoke.
                          </p>
                          <div className="aon-ow-pro-rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star text-gray" />
                          </div>
                          <div className="aon-ow-bottom">
                            <a href="profile-full.html" className="site-button">
                              Request A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 5 */}
                  <div className="item">
                    <div className="aon-ow-provider-wrap2">
                      <div className="aon-ow-provider2 shine-hover">
                        <div className="aon-ow-top">
                          <div className="aon-pro-check">
                            <span>
                              <i className="fa fa-check" />
                            </span>
                          </div>
                          <div className="aon-pro-favorite">
                            <a href="#">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div className="aon-ow-info">
                            <h4 className="sf-title">
                              <a href="profile-full.html">Jackie Chan</a>
                            </h4>
                            <span>Queens, United States</span>
                          </div>
                        </div>
                        <div className="aon-ow-mid">
                          <div className="aon-ow-media media-bg-animate">
                            <a className="shine-box" href="profile-full.html">
                              <img src="images/providers/2.jpg" alt="" />
                            </a>
                          </div>
                          <p>
                            Through our expertise, technological knowledge,
                            global presence and bespoke.
                          </p>
                          <div className="aon-ow-pro-rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star text-gray" />
                          </div>
                          <div className="aon-ow-bottom">
                            <a href="profile-full.html" className="site-button">
                              Request A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 6 */}
                  <div className="item">
                    <div className="aon-ow-provider-wrap2">
                      <div className="aon-ow-provider2 shine-hover">
                        <div className="aon-ow-top">
                          <div className="aon-pro-check">
                            <span>
                              <i className="fa fa-check" />
                            </span>
                          </div>
                          <div className="aon-pro-favorite">
                            <a href="#">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div className="aon-ow-info">
                            <h4 className="sf-title">
                              <a href="profile-full.html">Colin Farrell</a>
                            </h4>
                            <span>Queens, United States</span>
                          </div>
                        </div>
                        <div className="aon-ow-mid">
                          <div className="aon-ow-media media-bg-animate">
                            <a className="shine-box" href="profile-full.html">
                              <img src="images/providers/3.jpg" alt="" />
                            </a>
                          </div>
                          <p>
                            Through our expertise, technological knowledge,
                            global presence and bespoke.
                          </p>
                          <div className="aon-ow-pro-rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star text-gray" />
                          </div>
                          <div className="aon-ow-bottom">
                            <a href="profile-full.html" className="site-button">
                              Request A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Featued Vender End */}
          {/* Recently Posted Jobs */}
          <div className="section-full aon-postjobs-area2">
            <div className="container">
              {/*Title Section Start*/}
              <div className="section-head">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <span className="aon-sub-title">Jobs</span>
                    <h2 className="sf-title">Recently Posted Jobs</h2>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do usmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="section-content">
                <div className="aon-postjobs-area2-section">
                  <div className="row">
                    {/* COLUMNS 1 */}
                    <div className="col-lg-6 col-md-6">
                      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
                        <div className="aon-post-jobs2 aon-icon-effect">
                          <div className="job-comapny-logo">
                            <img
                              className="company_logo aon-icon"
                              src="images/jobs/1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="job-comapny-info">
                            <div className="position">
                              <h3>
                                <a href="job-detail.html">
                                  UI &amp; UX Designer
                                </a>
                              </h3>
                              <div className="company">
                                <strong>Digital Asset</strong>
                              </div>
                            </div>
                            <ul className="meta">
                              <li className="job-type hourly">
                                <i className="fa fa-circle" />
                                Full Time
                              </li>
                            </ul>
                            <div className="job-date">
                              <span>
                                <i className="fa fa-calendar-o" /> 3 years ago
                              </span>
                            </div>
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
                        </div>
                      </div>
                    </div>
                    {/* COLUMNS 2 */}
                    <div className="col-lg-6 col-md-6">
                      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
                        <div className="aon-post-jobs2 aon-icon-effect">
                          <div className="job-comapny-logo">
                            <img
                              className="company_logo aon-icon"
                              src="images/jobs/2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="job-comapny-info">
                            <div className="position">
                              <h3>
                                <a href="job-detail.html">
                                  Web &amp; App developer
                                </a>
                              </h3>
                              <div className="company">
                                <strong>Digital Asset</strong>
                              </div>
                            </div>
                            <ul className="meta">
                              <li className="job-type hourly">
                                <i className="fa fa-circle" />
                                Hourly
                              </li>
                            </ul>
                            <div className="job-date">
                              <span>
                                <i className="fa fa-calendar-o" /> 3 years ago
                              </span>
                            </div>
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
                        </div>
                      </div>
                    </div>
                    {/* COLUMNS 3 */}
                    <div className="col-lg-6 col-md-6">
                      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
                        <div className="aon-post-jobs2 aon-icon-effect">
                          <div className="job-comapny-logo">
                            <img
                              className="company_logo aon-icon"
                              src="images/jobs/3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="job-comapny-info">
                            <div className="position">
                              <h3>
                                <a href="job-detail.html">
                                  Hotel Interior Designer
                                </a>
                              </h3>
                              <div className="company">
                                <strong>Digital Asset</strong>
                              </div>
                            </div>
                            <ul className="meta">
                              <li className="job-type hourly">
                                <i className="fa fa-circle" />
                                Hourly
                              </li>
                            </ul>
                            <div className="job-date">
                              <span>
                                <i className="fa fa-calendar-o" /> 3 years ago
                              </span>
                            </div>
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
                        </div>
                      </div>
                    </div>
                    {/* COLUMNS 4 */}
                    <div className="col-lg-6 col-md-6">
                      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
                        <div className="aon-post-jobs2 aon-icon-effect">
                          <div className="job-comapny-logo">
                            <img
                              className="company_logo aon-icon"
                              src="images/jobs/4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="job-comapny-info">
                            <div className="position">
                              <h3>
                                <a href="job-detail.html">
                                  Digital Marketing Agency
                                </a>
                              </h3>
                              <div className="company">
                                <strong>Digital Asset</strong>
                              </div>
                            </div>
                            <ul className="meta">
                              <li className="job-type hourly">
                                <i className="fa fa-circle" />
                                Hourly
                              </li>
                            </ul>
                            <div className="job-date">
                              <span>
                                <i className="fa fa-calendar-o" /> 3 years ago
                              </span>
                            </div>
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
                        </div>
                      </div>
                    </div>
                    {/* COLUMNS 5 */}
                    <div className="col-lg-6 col-md-6">
                      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
                        <div className="aon-post-jobs2 aon-icon-effect">
                          <div className="job-comapny-logo">
                            <img
                              className="company_logo ao-icon"
                              src="images/jobs/5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="job-comapny-info">
                            <div className="position">
                              <h3>
                                <a href="job-detail.html">
                                  Fish &amp; Game Warden
                                </a>
                              </h3>
                              <div className="company">
                                <strong>Digital Asset</strong>
                              </div>
                            </div>
                            <ul className="meta">
                              <li className="job-type hourly">
                                <i className="fa fa-circle" />
                                Hourly
                              </li>
                            </ul>
                            <div className="job-date">
                              <span>
                                <i className="fa fa-calendar-o" /> 3 years ago
                              </span>
                            </div>
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
                        </div>
                      </div>
                    </div>
                    {/* COLUMNS 6 */}
                    <div className="col-lg-6 col-md-6">
                      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
                        <div className="aon-post-jobs2 aon-icon-effect">
                          <div className="job-comapny-logo">
                            <img
                              className="company_logo aon-icon"
                              src="images/jobs/6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="job-comapny-info">
                            <div className="position">
                              <h3>
                                <a href="job-detail.html">
                                  Certified Nursing Assistant
                                </a>
                              </h3>
                              <div className="company">
                                <strong>Digital Asset</strong>
                              </div>
                            </div>
                            <ul className="meta">
                              <li className="job-type hourly">
                                <i className="fa fa-circle" />
                                Hourly
                              </li>
                            </ul>
                            <div className="job-date">
                              <span>
                                <i className="fa fa-calendar-o" /> 3 years ago
                              </span>
                            </div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recently Posted Jobs Section END */}

          {/* Services Finder categories END */}
        </div>
        {/* CONTENT END */}
        {/* FOOTER START */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
