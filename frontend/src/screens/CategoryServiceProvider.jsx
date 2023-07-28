import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useLocation } from "react-router-dom";
import LabourCard from "../components/LabourCard";

const CategoryServiceProvider = () => {
  const location = useLocation();
  const category_id = location.pathname.split("/")[2];
  const [category, setCategory] = useState([]);
  const [categoryLabours, setCategoryLabours] = useState([]);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_URL +
        "/api/categories/categories/" +
        category_id
    )
      .then((res) => res.json())
      .then((result) => {
        setCategory(result);
      });
  }, [category]);

  console.log(category.title);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_URL +
        "/api/user/users/service/" +
        category.title,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setCategoryLabours(result);
      });
  }, [categoryLabours]);

  // console.log(categoryLabours);

  return (
    <div>
      <Loader />
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
                <div className="sf-caty-pic" style={{ backgroundImage: `url(${category.image})` }}>
                    <div className="sf-caty-btn">View Providers</div>
                    {/* <div className="sf-caty-cirle">
                      <i className="fa fa-arrow-circle-down" />
                    </div> */}
                  </div>
                </div>
                {/*Category Detail Right*/}
                <div className="col-md-6">
                  <div className="sf-caty-info">
                    {/* <div className="m-b10">
                      <strong>Project categories</strong> / House cleaning
                      services
                    </div> */}
                    <h3>{category.title}</h3>
                    <div className="sf-caty-text">
                      <p>{category.description}</p>
                    </div>

                    <div className="sf-caty-text">
                      <p>
                        <strong>{category.totalServiceProviders}</strong>
                        Listing labours in this category
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Category Detail Section End*/}
            </div>
          </div>

          <div className="section-content sf-caty-listResult-wrap mt-5">
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
                </div>
                {/*Showing results topbar End*/}
                <div className="row">
                  {categoryLabours?.map((labour) => (
                    <LabourCard key={labour._id} labour={labour} />
                  ))}

                  {/*Pagination Start*/}
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
                  {/*Pagination End*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content END*/}
        {/* FOOTER START */}
        <Footer />
      </div>
    </div>
  );
};

export default CategoryServiceProvider;
