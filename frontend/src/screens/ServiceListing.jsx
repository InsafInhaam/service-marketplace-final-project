import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import ServiceItem from "../components/ServiceItem";
import Banner001 from "../assets/banner001.jpg";
import Banner002 from "../assets/banner002.jpg";
import Banner003 from "../assets/banner003.jpg";

const ServiceListing = () => {
  const location = useLocation();
  const category_id = location.pathname.split("/")[2];
  const [services, setServices] = useState([]);
  const [relatedSubcategories, setRelatedSubcategories] = useState([]);

  useEffect(() => {
    const fetchRelatedSubcategories = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/subcategories/relatedsubcategory/${category_id}`
        );
        const result = await response.json();
        setRelatedSubcategories(result.relatedSubcategories);
      } catch (error) {
        console.error("Error fetching related subcategories:", error);
      }
    };

    fetchRelatedSubcategories();
  }, [category_id, relatedSubcategories]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/services/subcategory/${category_id}`
        );
        const result = await response.json();
        setServices(result);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [category_id, services]);

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
                    <h4 className="sf-title">Related Services</h4>
                  </div>
                  <div className="row p-3">
                    {relatedSubcategories?.map((subcategory) => (
                      <div className="col-md-6" key={subcategory?._id}>
                        <div className="media-bg-animate mba-bdr-15">
                          <div className="aon-categories-area2-iconbox aon-icon-effect sub-categories">
                            <div className="aon-cate-area2-icon">
                              <span>
                                <i className="aon-icon">
                                  <img
                                    src={subcategory?.image}
                                    alt={subcategory?.title}
                                  />
                                </i>
                              </span>
                            </div>
                            <div className="aon-cate-area2-content">
                              <a href={`/service-list/${subcategory?._id}`}>
                                <p className="aon-tilte text-center">
                                  {subcategory?.title}
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>

              <div className="col-lg-8 col-md-12">
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
                        className="d-block w-100 h-50"
                        alt="Wild Landscape"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={Banner002}
                        className="d-block w-100"
                        alt="Camera"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={Banner003}
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
                {/* <ul className="job_listings job_listings-two">
                  {services.map((service) => (
                    <ServiceItem service={service} key={service.id} />
                  ))}
                </ul> */}
                <section>
                  <div className="container">
                  {services.map((service) => (
                    <ServiceItem service={service} key={service.id} />
                  ))}
                  </div>
                </section>
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
