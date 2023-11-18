import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Categorycard from "../components/Categorycard";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useNavigate } from "react-router-dom";
import ChangeLocation from "../components/ChangeLocation";

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
                    src="https://via.placeholder.com/150"
                    alt="Image 1"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Title 1</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Image 2"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Title 2</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Image 3"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Title 3</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Image 4"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Title 4</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Image 5"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Title 5</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Image 3"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Title 3</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Image 4"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Title 4</h4>
                </div>
                <div className="col-md-3">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Image 5"
                    className="img-fluid gallery-image w-100"
                  />
                  <h4 className="text-left py-2">Title 5</h4>
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
                          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                          className="d-block w-100"
                          alt="Wild Landscape"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                          className="d-block w-100"
                          alt="Camera"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                          className="d-block w-100"
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
