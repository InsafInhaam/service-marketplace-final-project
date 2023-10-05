import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Categorycard from "../components/Categorycard";
import { cityOptions } from "../utils/cities";

const CityPage = () => {
  const location = useLocation();
  const cityname = location.pathname.split("/")[2];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/categories/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  return (
    <div className="page-wraper">
      <Navbar />
      <div className="page-content">
        {/* Banner Area */}
        <div className="aon-page-benner-area2">
          <div className="aon-banner-large2-title">
          Home services at your doorstep
          </div>

          {/* <div className="search-option">
            <div className="aon-bnr2-search-bar d-flex align-items-center justify-content-between">
              <div>
                <div className="sf-search-title">
                  <label>Where do you need a service?</label>
                </div>
                <div className="sf-search-feild">
                  <select
                    className="sf-select-box form-control sf-form-control bs-select-hidden"
                    data-live-search="true"
                    name="city"
                    id="city"
                    title="City"
                    data-header="Select a City"
                    value={cityname}
                  >
                    <option value="">Select a city</option>
                    {cityOptions.map((cityOption) => (
                      <option key={cityOption.id} value={cityOption.name}>
                        {cityOption.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <div className="sf-search-title">
                  <label>Where do you need a service?</label>
                </div>
                <div className="sf-search-feild">
                  <select
                    className="sf-select-box form-control sf-form-control bs-select-hidden"
                    data-live-search="true"
                    name="city"
                    id="city"
                    title="City"
                    data-header="Select a City"
                    value={cityname}
                  >
                    <option value="">Select a city</option>
                    {cityOptions.map((cityOption) => (
                      <option key={cityOption.id} value={cityOption.name}>
                        {cityOption.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="aon-all-categories-wrap2">
          <div className="container">
            <div className="aon-all-categories-block2">
              <div className="row justify-content-center">
                {categories?.map((category) => (
                  <Categorycard category={category} key={category._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CityPage;
