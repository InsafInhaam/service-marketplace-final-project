import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LabourProfile = () => {
  return (
    <div>
      <div className="page-wraper">
        <Navbar/>
        {/* HEADER END */}
        {/* Content */}
        <div className="page-content">
          {/*Top Banner Section Start*/}
          <div className="sf-profile-banner-full">
            <div className="container sf-proBnrfull-container">
              <div className="sf-proBnrfull-row">
                {/*Top Banner Left*/}
                <div className=" sf-proBnrfull-left"></div>
                {/*Top Banner Right*/}
                <div className=" sf-proBnrfull-right">
                  <h2 className=" sf-proBnrfull-heading">
                    Home Made Clianing Service
                  </h2>
                  <div className=" sf-proBnrfull-tagline">
                    We Provide best Cleaning services
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Top Banner Section End*/}
          {/*Nav Section Start*/}
          <div className="sf-page-scroll-wrap sf-page-scroll-wrap2">
            <div className="container">
              <div className="sf-page-scroll-nav clearfix">
                <ul className="clearfix">
                  <li>
                    <a href="#aon-provider-info">About</a>
                  </li>
                  <li>
                    <a href="#aon-provider-services">Services</a>
                  </li>
                  <li>
                    <a href="#aon-provider-Req-quote">Request a Quote</a>
                  </li>
                  <li>
                    <a href="#aon-provider-coInfo">Contact Info</a>
                  </li>
                  <li>
                    <a href="#aon-provider-video">Video</a>
                  </li>
                  <li>
                    <a href="#aon-provider-articles">Articles</a>
                  </li>
                  <li>
                    <a href="#aon-provider-review">Review</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*Nav Section End*/}
          <div className="container">
            {/*About Provider*/}
            <div className="sf-provi-bio-box cleafix margin-b-50 sf-provi-fullBox">
              {/*Left*/}
              <div className="sf-provi-bio-left">
                <div className="sf-provi-bio-info">
                  <div className="sf-provi-pic">
                    <img src="../images/pro-pic.jpg" alt="" />
                  </div>
                  <div className="sf-provi-gallery">
                    <a className="elem pic-long" href="images/profile/pic1.jpg">
                      12 Photos
                    </a>
                    <a
                      className="elem pic-long"
                      href="images/profile/pic2.jpg"
                    />
                    <a
                      className="elem pic-long"
                      href="images/profile/pic3.jpg"
                    />
                    <a
                      className="elem pic-long"
                      href="images/profile/pic4.jpg"
                    />
                    <a
                      className="elem pic-long"
                      href="images/profile/pic5.jpg"
                    />
                    <a
                      className="elem pic-long"
                      href="images/profile/pic6.jpg"
                    />
                  </div>
                  <div className="sf-ow-pro-rating">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star text-gray" />
                  </div>
                </div>
              </div>
              {/*Right*/}
              <div className="sf-provi-bio-right">
                <h3 className="sf-provi-title">About Provider</h3>
                <div className="sf-provi-cat">
                  <strong>Categories:</strong> Packers and Movers
                </div>
                <div className="sf-provi-bio-text">
                  <p>
                    We have a wide spectrum of expertise in web solutions within
                    these industries, giving us the necessary skills and
                    knowledge to help you increase your presence on the
                    web.Through our expertise, technological knowledge, global
                    presence and betspoke web solutions, we can help knowledge
                    to help you increase your presence you transform your
                    business, maximize performance and surpass the competition.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempus tortor nec tellus sollicitudin lacinia id per conubia
                    nostra per inceptos.
                  </p>
                  <div className="sf-provi-btn">
                    <a
                      href="javascript:void(0);"
                      className="site-button"
                      data-redirect="yes"
                      data-action="login"
                      data-toggle="modal"
                      data-target="#login-Modal"
                    >
                      <i className="fa fa-briefcase" />
                      Invite for Job
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="site-button"
                      data-redirect="yes"
                      data-action="login"
                      data-toggle="modal"
                      data-target="#login-Modal"
                    >
                      <i className="fa fa-heart" />
                      Add To Fav
                    </a>
                  </div>
                </div>
                {/* <div className="sf-provi-social-row d-flex flex-wrap justify-content-between">
                  <div className="sf-provi-social">
                    <ul className="share-social-bx">
                      <li className="fb">
                        <a href="javascript:;">
                          
                          <i className="fa fa-facebook" /> Share
                        </a>
                      </li>
                      <li className="tw">
                        <a href="javascript:;">
                          
                          <i className="fa fa-twitter" /> Share
                        </a>
                      </li>
                      <li className="lin">
                        <a href="javascript:;">
                          
                          <i className="fa fa-linkedin" /> Share
                        </a>
                      </li>
                      <li className="pin">
                        <a href="javascript:;">
                          
                          <i className="fa fa-pinterest" /> Share
                        </a>
                      </li>
                      <li className="gp">
                        <a href="javascript:;">
                          
                          <i className="fa fa-google-plus" /> Share
                        </a>
                      </li>
                      <li className="dig">
                        <a href="javascript:;">
                          
                          <i className="fa fa-digg" /> Share
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="social-share-icon social-share-icon2">
                    <div className="social-share-cell">
                      <strong>Explore Us On Social Media</strong>
                    </div>
                    <div className="social-share-cell">
                      <ul className="share-buttons">
                        <li>
                          <a
                            className="fb-share"
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="nofollow"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="twitter-share"
                            href="https://twitter.com/"
                            target="_blank"
                            rel="nofollow"
                          >
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="linkedin-share"
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="nofollow"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="pinterest-share"
                            href="https://in.pinterest.com/"
                            target="_blank"
                            rel="nofollow"
                          >
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/*About Provider End*/}
            {/*Service List Start*/}
            <div
              id="aon-provider-services"
              className="sf-provi-service-box m-b50 sf-provi-fullBox"
            >
              <h3 className="sf-provi-title">Service</h3>
              <div className="sf-divider-line" />
              <ul className="sf-provi-service-list">
                <li className="sf-provi-service-box">
                  <div className="sf-provi-service-top">
                    <div className="sf-provi-service-left">
                      <h4 className="sf-provi-service-ttle">
                        <span className="sf-provi-toggle-btn">+</span> 3 bedroom
                        or a house <span>Offer</span>
                      </h4>
                      <div className="sf-provi-service-price">$124.00</div>
                      <div className="sf-provi-service-hour">
                        <i className="fa fa-clock-o" />
                        Hour
                      </div>
                    </div>
                    <div className="sf-provi-service-right">
                      <button className="site-button btn-schedules">
                        Schedule
                      </button>
                    </div>
                  </div>
                  <div className="sf-provi-service-bottom">
                    <div className="sf-provi-descriptio">
                      Many serives have a wide spectrum of expertise in web
                      solutions within these industries, giving us the necessary
                      skills and knowledge.
                    </div>
                  </div>
                </li>
                <li className="sf-provi-service-box">
                  <div className="sf-provi-service-top">
                    <div className="sf-provi-service-left">
                      <h4 className="sf-provi-service-ttle">
                        <span className="sf-provi-toggle-btn">+</span> 3 bedroom
                        or a house <span>Offer</span>
                      </h4>
                      <div className="sf-provi-service-price">$124.00</div>
                      <div className="sf-provi-service-hour">
                        <i className="fa fa-clock-o" />
                        Hour
                      </div>
                    </div>
                    <div className="sf-provi-service-right">
                      <button className="site-button btn-schedules">
                        Schedule
                      </button>
                    </div>
                  </div>
                  <div className="sf-provi-service-bottom">
                    <div className="sf-provi-descriptio">
                      Many serives have a wide spectrum of expertise in web
                      solutions within these industries, giving us the necessary
                      skills and knowledge.
                    </div>
                  </div>
                </li>
                <li className="sf-provi-service-box">
                  <div className="sf-provi-service-top">
                    <div className="sf-provi-service-left">
                      <h4 className="sf-provi-service-ttle">
                        <span className="sf-provi-toggle-btn">+</span> 3 bedroom
                        or a house <span>Offer</span>
                      </h4>
                      <div className="sf-provi-service-price">$ 12.00/Hour</div>
                    </div>
                    <div className="sf-provi-service-right">
                      <div className="sf-provi-service-count">
                        <input
                          id="demo1"
                          type="text"
                          defaultValue={55}
                          name="demo1"
                        />
                      </div>
                      <button className="site-button btn-schedules">
                        Schedule
                      </button>
                    </div>
                  </div>
                  <div className="sf-provi-service-bottom">
                    <div className="sf-provi-descriptio">
                      Many serives have a wide spectrum of expertise in web
                      solutions within these industries, giving us the necessary
                      skills and knowledge.
                    </div>
                  </div>
                </li>
                <li className="sf-provi-service-box">
                  <div className="sf-provi-service-top">
                    <div className="sf-provi-service-left">
                      <h4 className="sf-provi-service-ttle">
                        <span className="sf-provi-toggle-btn">+</span> 3 bedroom
                        or a house <span>Offer</span>
                      </h4>
                      <div className="sf-provi-service-price">$ 10.00/Hour</div>
                    </div>
                    <div className="sf-provi-service-right">
                      <div className="sf-provi-service-count">
                        <input
                          id="demo2"
                          type="text"
                          defaultValue={55}
                          name="demo1"
                        />
                      </div>
                      <button className="site-button btn-schedules">
                        Schedule
                      </button>
                    </div>
                  </div>
                  <div className="sf-provi-service-bottom">
                    <div className="sf-provi-descriptio">
                      Many serives have a wide spectrum of expertise in web
                      solutions within these industries, giving us the necessary
                      skills and knowledge.
                    </div>
                  </div>
                </li>
              </ul>
              <div className="servi-leRi-btn d-flex flex-wrap justify-content-between">
                <div className="servi-le-btn">
                  <button className="btn btn-custom">
                    <i className="feather-chevron-up" />
                  </button>
                  <button className="btn btn-custom">
                    <i className="feather-chevron-down" />
                  </button>
                </div>
                <div className="servi-Ri-btn">
                  <button className="btn btn-custom aon-sm-btn-dark">
                    Continue
                  </button>
                </div>
              </div>
            </div>
            {/*Service List End*/}
            {/*Request a Quote*/}
            <div
              id="aon-provider-Req-quote"
              className="sf-provi-qoute-box cleafix m-b50 sf-provi-fullBox"
            >
              <h3 className="sf-provi-title">Request a Quote</h3>
              <div className="sf-divider-line" />
              <div className="sf-provi-qform">
                <form
                  action="https://aonetheme.com/sf-html-demo/profile-full.html?"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          name="email"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          name="phone"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          name="message"
                          rows={8}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-center qout-submit-btn">
                        <input
                          type="submit"
                          defaultValue="Send information"
                          className="site-button"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          
            {/*Local Customer Reviews*/}
            <div
              id="aon-provider-review"
              className="sf-provi-articles-box margin-b-50 sf-provi-fullBox"
            >
              <h3 className="sf-provi-title">Local Customer Reviews</h3>
              <div className="sf-divider-line" />
              <div className="sf-rating-outer sf-rating-outer-border clearfix">
                <div className="sf-rating-averages-wraps sf-rating-averages-new">
                  <div className="sf-rating-averages-table">
                    <div className="sf-rating-averages-cell">
                      <div className="sf-rating-holder">
                        
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                    <div className="sf-rating-averages-cell">
                      <div className="sf-reviews-row">
                        <div className="sf-reviews-star">
                          
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="sf-reviews-star-no">0</div>
                      </div>
                    </div>
                  </div>
                  <div className="sf-rating-averages-table">
                    <div className="sf-rating-averages-cell">
                      <div className="sf-average-rating&review">
                        <span>4.8 stars</span> - <span>921 reviews</span>
                      </div>
                    </div>
                    <div className="sf-rating-averages-cell">
                      <div className="sf-reviews-row">
                        <div className="sf-reviews-star">
                          
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="sf-reviews-star-no">0</div>
                      </div>
                    </div>
                  </div>
                  <div className="sf-rating-averages-table">
                    <div className="sf-rating-averages-cell">
                      <div className="sf-completion-rate">
                        
                        <span className="sf-rate-persent">
                          92% Completion Rate
                        </span>
                        <span
                          className="sf-average-question"
                          id="example"
                          data-toggle="tooltip"
                          data-placement="top"
                          title
                          data-original-title="625 North Washington St, Suite 400, Alexandria, Virginia, United States"
                        >
                          
                          <i className="fa fa-question-circle" />
                        </span>
                      </div>
                    </div>
                    <div className="sf-rating-averages-cell">
                      <div className="sf-reviews-row">
                        <div className="sf-reviews-star">
                          
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="sf-reviews-star-no">0</div>
                      </div>
                    </div>
                  </div>
                  <div className="sf-rating-averages-table">
                    <div className="sf-rating-averages-cell">
                      
                      <span className="sf-completed-tasks">
                        1081 completed tasks
                      </span>
                    </div>
                    <div className="sf-rating-averages-cell">
                      <div className="sf-reviews-row">
                        <div className="sf-reviews-star">
                          
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="sf-reviews-star-no">0</div>
                      </div>
                    </div>
                  </div>
                  <div className="sf-rating-averages-table">
                    <div className="sf-rating-averages-cell" />
                    <div className="sf-rating-averages-cell">
                      <div className="sf-reviews-row">
                        <div className="sf-reviews-star">
                          
                          <i className="fa fa-star" />
                        </div>
                        <div className="sf-reviews-star-no">0</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sf-rating-categories-wraps sf-rating-categories-new">
                  <div className="sf-rating-categories-table">
                    <div className="sf-rating-categories-cell">Quality</div>
                    <div className="sf-rating-categories-cell">
                      <div className="sf-reviews-row">
                        <div className="sf-reviews-star">
                          
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="sf-reviews-star-no">4.7</div>
                      </div>
                    </div>
                  </div>
                  <div className="sf-rating-categories-table">
                    <div className="sf-rating-categories-cell">Cost</div>
                    <div className="sf-rating-categories-cell">
                      <div className="sf-reviews-row">
                        <div className="sf-reviews-star">
                          
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="sf-reviews-star-no">3.8</div>
                      </div>
                    </div>
                  </div>
                  <div className="sf-rating-categories-table">
                    <div className="sf-rating-categories-cell">
                      Response Time
                    </div>
                    <div className="sf-rating-categories-cell">
                      <div className="sf-reviews-row">
                        <div className="sf-reviews-star">
                          
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="sf-reviews-star-no">2.6</div>
                      </div>
                    </div>
                  </div>
                  <div className="sf-rating-categories-table">
                    <div className="sf-rating-categories-cell">Timeline</div>
                    <div className="sf-rating-categories-cell">
                      <div className="sf-reviews-row">
                        <div className="sf-reviews-star">
                          
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="sf-reviews-star-no">1.6</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex flex-wrap a-b-none">
                <div className="col-lg-4 col-md-6">
                  <div className="sf-review-box sf-shadow-box">
                    <div className="sf-review-head clearfix">
                      <div className="sf-review-pic">
                        <img src="../images/pro-pic/pic1.jpg" alt="" />
                      </div>
                      <div className="sf-review-info">
                        <h5 className="sf-review-name">Zohn Odriscoll</h5>
                        <div className="sf-review-feedback">Good service</div>
                      </div>
                      <div className="sf-review-date">
                        March 12, 2022 at 5:40 am
                      </div>
                    </div>
                    <div className="sf-review-body">
                      <ul className="sf-review-rating d-flex flex-wrap">
                        <li>
                          <div className="sf-customer-rating-names">
                            Quality
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">Cost</div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Response Time
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Timeline
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="sf-review-footer sf-shadow-box">
                      <span className="sf-review-write">
                        Good service ipsum dolor sit amet, consectetur
                        adipiscing elit vitae is vitae sapien.
                      </span>
                      <span className="sf-review-red-less">Read More</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="sf-review-box sf-shadow-box">
                    <div className="sf-review-head clearfix">
                      <div className="sf-review-pic">
                        <img src="../images/pro-pic/pic2.jpg" alt="" />
                      </div>
                      <div className="sf-review-info">
                        <h5 className="sf-review-name">Javier Bardem</h5>
                        <div className="sf-review-feedback">Good service</div>
                      </div>
                      <div className="sf-review-date">
                        March 12, 2022 at 5:40 am
                      </div>
                    </div>
                    <div className="sf-review-body">
                      <ul className="sf-review-rating d-flex flex-wrap">
                        <li>
                          <div className="sf-customer-rating-names">
                            Quality
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">Cost</div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Response Time
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Timeline
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="sf-review-footer sf-shadow-box">
                      <span className="sf-review-write">
                        Good service ipsum dolor sit amet, consectetur
                        adipiscing elit vitae is vitae sapien.
                      </span>
                      <span className="sf-review-red-less">Read More</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="sf-review-box sf-shadow-box">
                    <div className="sf-review-head clearfix">
                      <div className="sf-review-pic">
                        <img src="../images/pro-pic/pic3.jpg" alt="" />
                      </div>
                      <div className="sf-review-info">
                        <h5 className="sf-review-name">Mila Kunis</h5>
                        <div className="sf-review-feedback">Good service</div>
                      </div>
                      <div className="sf-review-date">
                        March 12, 2022 at 5:40 am
                      </div>
                    </div>
                    <div className="sf-review-body">
                      <ul className="sf-review-rating d-flex flex-wrap">
                        <li>
                          <div className="sf-customer-rating-names">
                            Quality
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">Cost</div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Response Time
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Timeline
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="sf-review-footer sf-shadow-box">
                      <span className="sf-review-write">
                        Good service ipsum dolor sit amet, consectetur
                        adipiscing elit vitae is vitae sapien.
                      </span>
                      <span className="sf-review-red-less">Read More</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="sf-review-box sf-shadow-box">
                    <div className="sf-review-head clearfix">
                      <div className="sf-review-pic">
                        <img src="../images/pro-pic/pic4.jpg" alt="" />
                      </div>
                      <div className="sf-review-info">
                        <h5 className="sf-review-name">Edward Luise</h5>
                        <div className="sf-review-feedback">Good service</div>
                      </div>
                      <div className="sf-review-date">
                        March 12, 2022 at 5:40 am
                      </div>
                    </div>
                    <div className="sf-review-body">
                      <ul className="sf-review-rating d-flex flex-wrap">
                        <li>
                          <div className="sf-customer-rating-names">
                            Quality
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">Cost</div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Response Time
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Timeline
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="sf-review-footer sf-shadow-box">
                      <span className="sf-review-write">
                        Good service ipsum dolor sit amet, consectetur
                        adipiscing elit vitae is vitae sapien.
                      </span>
                      <span className="sf-review-red-less">Read More</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="sf-review-box sf-shadow-box">
                    <div className="sf-review-head clearfix">
                      <div className="sf-review-pic">
                        <img src="../images/pro-pic/pic5.jpg" alt="" />
                      </div>
                      <div className="sf-review-info">
                        <h5 className="sf-review-name">James McAvoy</h5>
                        <div className="sf-review-feedback">Good service</div>
                      </div>
                      <div className="sf-review-date">
                        March 12, 2022 at 5:40 am
                      </div>
                    </div>
                    <div className="sf-review-body">
                      <ul className="sf-review-rating d-flex flex-wrap">
                        <li>
                          <div className="sf-customer-rating-names">
                            Quality
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">Cost</div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Response Time
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Timeline
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="sf-review-footer sf-shadow-box">
                      <span className="sf-review-write">
                        Good service ipsum dolor sit amet, consectetur
                        adipiscing elit vitae is vitae sapien.
                      </span>
                      <span className="sf-review-red-less">Read More</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="sf-review-box sf-shadow-box">
                    <div className="sf-review-head clearfix">
                      <div className="sf-review-pic">
                        <img src="../images/pro-pic/pic6.jpg" alt="" />
                      </div>
                      <div className="sf-review-info">
                        <h5 className="sf-review-name">Jackie Chan</h5>
                        <div className="sf-review-feedback">Good service</div>
                      </div>
                      <div className="sf-review-date">
                        March 12, 2022 at 5:40 am
                      </div>
                    </div>
                    <div className="sf-review-body">
                      <ul className="sf-review-rating d-flex flex-wrap">
                        <li>
                          <div className="sf-customer-rating-names">
                            Quality
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">Cost</div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Response Time
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="sf-customer-rating-names">
                            Timeline
                          </div>
                          <div className="sf-customer-rating-star">
                            <div className="sf-ow-pro-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star text-gray" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="sf-review-footer sf-shadow-box">
                      <span className="sf-review-write">
                        Good service ipsum dolor sit amet, consectetur
                        adipiscing elit vitae is vitae sapien.
                      </span>
                      <span className="sf-review-red-less">Read More</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <button className="site-button">Load More</button>
                </div>
              </div>
            </div>
            {/*Related Provider*/}
            <div className="sf-provi-articles-box margin-b-50 sf-provi-fullBox">
              <h3 className="sf-provi-title">Related Provider</h3>
              <div className="sf-divider-line" />
              <div className="owl-carousel aon-ow-provi-related aon-owl-arrow">
                {/* COLUMNS 1 */}
                <div className="item">
                  <div className="aon-ow-provider-wrap">
                    <div className="aon-ow-provider">
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
                          <h4 className="aon-title">Edward Luise</h4>
                          <span>Queens, United States</span>
                        </div>
                      </div>
                      <div className="aon-ow-mid">
                        <div className="aon-ow-media">
                          <img src="../images/providers/1.jpg" alt="" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="aon-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                      </div>
                    </div>
                    <div className="aon-ow-bottom">
                      <a href="#">Request A Quote</a>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 2 */}
                <div className="item">
                  <div className="aon-ow-provider-wrap">
                    <div className="aon-ow-provider">
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
                          <h4 className="aon-title">Edward Luise</h4>
                          <span>Queens, United States</span>
                        </div>
                      </div>
                      <div className="aon-ow-mid">
                        <div className="aon-ow-media">
                          <img src="../images/providers/2.jpg" alt="" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="aon-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                      </div>
                    </div>
                    <div className="aon-ow-bottom">
                      <a href="#">Request A Quote</a>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 3 */}
                <div className="item">
                  <div className="aon-ow-provider-wrap">
                    <div className="aon-ow-provider">
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
                          <h4 className="aon-title">Edward Luise</h4>
                          <span>Queens, United States</span>
                        </div>
                      </div>
                      <div className="aon-ow-mid">
                        <div className="aon-ow-media">
                          <img src="../images/providers/3.jpg" alt="" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="aon-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                      </div>
                    </div>
                    <div className="aon-ow-bottom">
                      <a href="#">Request A Quote</a>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 4 */}
                <div className="item">
                  <div className="aon-ow-provider-wrap">
                    <div className="aon-ow-provider">
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
                          <h4 className="aon-title">Edward Luise</h4>
                          <span>Queens, United States</span>
                        </div>
                      </div>
                      <div className="aon-ow-mid">
                        <div className="aon-ow-media">
                          <img src="../images/providers/4.jpg" alt="" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="aon-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                      </div>
                    </div>
                    <div className="aon-ow-bottom">
                      <a href="#">Request A Quote</a>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 5 */}
                <div className="item">
                  <div className="aon-ow-provider-wrap">
                    <div className="aon-ow-provider">
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
                          <h4 className="aon-title">Edward Luise</h4>
                          <span>Queens, United States</span>
                        </div>
                      </div>
                      <div className="aon-ow-mid">
                        <div className="aon-ow-media">
                          <img src="../images/providers/5.jpg" alt="" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="aon-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                      </div>
                    </div>
                    <div className="aon-ow-bottom">
                      <a href="#">Request A Quote</a>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 6 */}
                <div className="item">
                  <div className="aon-ow-provider-wrap">
                    <div className="aon-ow-provider">
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
                          <h4 className="aon-title">Edward Luise</h4>
                          <span>Queens, United States</span>
                        </div>
                      </div>
                      <div className="aon-ow-mid">
                        <div className="aon-ow-media">
                          <img src="../images/providers/6.jpg" alt="" />
                        </div>
                        <p>
                          Through our expertise, technological knowledge, global
                          presence and bespoke.
                        </p>
                        <div className="aon-ow-pro-rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star text-gray" />
                        </div>
                      </div>
                    </div>
                    <div className="aon-ow-bottom">
                      <a href="#">Request A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content END*/} {/* FOOTER START */}
        <Footer/>
        {/* Booking Summery box */}
        <div className="sf-summery-box">
          <button className="sf-suumery-close">
            <i className="fa fa-close" />
          </button>
          <div className="sf-summery-total">
            <span className="sf-sum-cel-one">Total Amount</span>
            <span className="sf-sum-cel-four">$185.25</span>
          </div>
          <div className="sf-summery-inr">
            <ul>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabourProfile;
