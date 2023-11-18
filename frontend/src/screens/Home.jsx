import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Categorycard from "../components/Categorycard";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useNavigate } from "react-router-dom";
import ChangeLocation from "../components/ChangeLocation";
import Service001 from "../assets/service001.jpg";
import Service002 from "../assets/service002.jpg";
import Service003 from "../assets/service003.jpg";
import Service004 from "../assets/service004.jpg";
import Service005 from "../assets/service005.jpg";
import Service006 from "../assets/service006.jpg";
import Service007 from "../assets/service007.jpg";
import Service008 from "../assets/service008.jpg";
import Banner001 from "../assets/banner001.jpg";
import Banner002 from "../assets/banner002.jpg";
import Banner003 from "../assets/banner003.jpg";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [labours, setLabours] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/categories/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/user/users/labourers")
      .then((res) => res.json())
      .then((result) => {
        setLabours(result);
      });
  }, []);

  // console.log(categories);

  const responsiveOptions = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  };

  return (
    <div>
      {/* <Loader /> */}
      <div className="page-wraper">
        <Navbar />
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
                        <div>
                          <div className="sf-search-title">
                            <label>Where do you need a service?</label>
                          </div>
                          <div className="sf-search-feild">
                            <ChangeLocation />
                          </div>
                        </div>
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
                </div>
              </div>
              {/*Title Section End*/}
              <div className="section-content">
                <div className="aon-categories-area2-section">
                  <div className="row justify-content-center">
                    {categories?.map((category) => (
                      <Categorycard category={category} key={category._id} />
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

          <section>
            <div className="container mt-5">
              {/*Title Section Start*/}
              <div className="section-head">
                <div className="row">
                  {/* COLUMNS LEFT */}
                  <div className="col-lg-6 col-md-12">
                    <span className="aon-sub-title">services</span>
                    <h2 className="sf-title">New and Popular Services</h2>
                  </div>
                  {/* COLUMNS RIGHT */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <img
                    src={Service001}
                    alt="Image 1"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Cleaners</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src={Service002}
                    alt="Image 2"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Painters</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src={Service003}
                    alt="Image 3"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Carpenters</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src={Service004}
                    alt="Image 4"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Electrician</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src={Service005}
                    alt="Image 5"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Plumber</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src={Service006}
                    alt="Image 3"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Housekeepers</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src={Service007}
                    alt="Image 4"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Cab Driver</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src={Service008}
                    alt="Image 5"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">House Movers</h4>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className="faq_area section_padding_130" id="faq">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-8 col-lg-6">
                    {/* Section Heading*/}
                    <div
                      className="section_heading text-center wow fadeInUp"
                      data-wow-delay="0.2s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.2s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <h3>
                        <span>Frequently </span> Asked Questions
                      </h3>
                      <p>
                        Appland is completely creative, lightweight, clean &amp;
                        super responsive app landing page.
                      </p>
                      <div className="line" />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  {/* FAQ Area*/}
                  <div className="col-12 col-sm-10 col-lg-8">
                    <div className="accordion faq-accordian" id="faqAccordion">
                      <div
                        className="card border-0 wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="card-header" id="headingOne">
                          <h6
                            className="mb-0 collapsed"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            How can I install this app?
                            <span className="lni-chevron-up" />
                          </h6>
                        </div>
                        <div
                          className="collapse"
                          id="collapseOne"
                          aria-labelledby="headingOne"
                          data-parent="#faqAccordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Architecto quidem facere deserunt sint animi
                              sapiente vitae suscipit.
                            </p>
                            <p>
                              Appland is completely creative, lightweight, clean
                              &amp; super responsive app landing page.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card border-0 wow fadeInUp"
                        data-wow-delay="0.3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="card-header" id="headingTwo">
                          <h6
                            className="mb-0 collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            The apps isn't installing?
                            <span className="lni-chevron-up" />
                          </h6>
                        </div>
                        <div
                          className="collapse"
                          id="collapseTwo"
                          aria-labelledby="headingTwo"
                          data-parent="#faqAccordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Architecto quidem facere deserunt sint animi
                              sapiente vitae suscipit.
                            </p>
                            <p>
                              Appland is completely creative, lightweight, clean
                              &amp; super responsive app landing page.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card border-0 wow fadeInUp"
                        data-wow-delay="0.4s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.4s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="card-header" id="headingThree">
                          <h6
                            className="mb-0 collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            Contact form isn't working?
                            <span className="lni-chevron-up" />
                          </h6>
                        </div>
                        <div
                          className="collapse"
                          id="collapseThree"
                          aria-labelledby="headingThree"
                          data-parent="#faqAccordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Architecto quidem facere deserunt sint animi
                              sapiente vitae suscipit.
                            </p>
                            <p>
                              Appland is completely creative, lightweight, clean
                              &amp; super responsive app landing page.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Support Button*/}
                    <div
                      className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
                      data-wow-delay="0.5s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <i className="lni-emoji-sad" />
                      <p className="mb-0 px-2">Can't find your answers?</p>
                      <a href="#"> Contact us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mt-5">
              {/*Title Section Start*/}
              <div className="section-head">
                <div className="row">
                  {/* COLUMNS LEFT */}
                  <div className="col-lg-6 col-md-12">
                    <span className="aon-sub-title">services</span>
                    <h2 className="sf-title">New and Popular Services</h2>
                  </div>
                  {/* COLUMNS RIGHT */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide mb-5"
                    data-mdb-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      />
                      <button
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide-to={1}
                        aria-label="Slide 2"
                      />
                      <button
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide-to={2}
                        aria-label="Slide 3"
                      />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={Banner001}
                          className="d-block w-100 banner-img"
                          alt="Wild Landscape"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Banner002}
                          className="d-block w-100 banner-img"
                          alt="Camera"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Banner003}
                          className="d-block w-100 banner-img"
                          alt="Exotic Fruits"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-mdb-target="#carouselExampleIndicators"
                      data-mdb-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-mdb-target="#carouselExampleIndicators"
                      data-mdb-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
