import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Categorycard from "../components/Categorycard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import LabourCard from "../components/LabourCard";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [labours, setLabours] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/categories/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  useEffect(() => {
    // Fetch labours from the backend API and store them in the state
    fetch(process.env.REACT_APP_API_URL + "/api/user/users/labourers")
      .then((res) => res.json())
      .then((result) => {
        setLabours(result);
      });
  }, []);

  console.log(categories);

  const responsiveOptions = {
    0: {
      items: 1, // On small screens, show only 1 item in one view
    },
    768: {
      items: 2, // On screens larger than 768px, show 2 items in one view
    },
  };

  return (
    <div>
      {/* LOADING AREA START ===== */}
      <Loader />
      {/* LOADING AREA  END ====== */}
      <div className="page-wraper">
        
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
                        <a href="/search" className="btn btn-warning">
                          <i className="fas fa-search"></i> &nbsp; FIND YOUR
                          LABOUR
                        </a>
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
              <div className="section-content labour-home-section">
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={10}
                  nav
                  items={2}
                  responsive={responsiveOptions}
                >
                  {/* COLUMNS 1 */}
                  {labours?.map((labour) => (
                    <div className="item" key={labour._id}>
                      <LabourCard key={labour._id} labour={labour} />
                    </div>
                  ))}
                </OwlCarousel>
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
