import React, { useEffect } from "react";
import { cityOptions } from "../utils/cities";
import { useState } from "react";
import Navbar from "../components/Navbar";
import LabourCard from "../components/LabourCard";
import { useSelector } from "react-redux";
import ServiceItem from "../components/ServiceItem";

// const ITEMS_PER_PAGE = 10; // Number of labor cards per page

const Search = () => {
  const [categories, setCategories] = useState([]);
  const [filteredLabours, setFilteredLabours] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [labours, setLabours] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false); // New state to track if filters are applied

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

  const handleFilter = () => {
    // Filter labours based on the selected filters
    const filtered = labours.filter((labour) => {
      const keywordMatch =
        !keyword || labour.name.toLowerCase().includes(keyword.toLowerCase());
      const categoryMatch = !category || labour.serviceProvided === category;
      const cityMatch = !city || labour.city === city;
      const priceMatch =
        (!priceMin || labour.hourlyPrice >= parseInt(priceMin)) &&
        (!priceMax || labour.hourlyPrice <= parseInt(priceMax));

      // Combine the filter conditions using the AND (&&) operator
      return keywordMatch && categoryMatch && cityMatch && priceMatch;
    });

    setFilteredLabours(filtered); // Update the filtered labours in the state
    setIsFiltered(true); // Set isFiltered to true after applying filters
  };

  console.log(filteredLabours);

  return (
    <>
      <div className="page-wraper">
        <Navbar />
        <div className="page-content">
          <div className="sf-seach-vertical sf-search-bar-panel">
            <div className="search-form ">
              <form className="clearfix search-providers">
                <div className="sf-searchbar-box">
                  <ul className="sf-searchbar-area">
                    <li>
                      <div className="sf-search-title">
                        <label>Keyword</label>
                      </div>
                      <div className="sf-search-feild">
                        <input
                          type="text"
                          defaultValue
                          placeholder="Keyword"
                          id="keyword"
                          name="keyword"
                          className="form-control sf-form-control"
                          value={keyword}
                          onChange={(e) => setKeyword(e.target.value)}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="sf-search-title">
                        <label>Category</label>
                        
                      </div>
                      <div className="sf-search-feild">
                        <select
                          id="category"
                          name="category"
                          className="form-control sf-form-control aon-categories-select"
                          title="Category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Select a Category</option>
                          {categories.map((category) => (
                            <option key={category._id} value={category.title}>
                              {category.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </li>

                    {/* <li>
                      <div className="sf-search-title">
                        <label>City</label>
                       
                      </div>
                      <div className="sf-search-feild">
                        <select
                          className="sf-select-box form-control sf-form-control bs-select-hidden"
                          data-live-search="true"
                          name="city"
                          id="city"
                          title="City"
                          data-header="Select a City"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        >
                          <option value="">Select a city</option>
                          {cityOptions.map((cityOption) => (
                            <option key={cityOption.id} value={cityOption.name}>
                              {cityOption.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </li> */}
                    
                    <li>
                      <div className="sf-search-title">
                        <label>Filter by price interval:</label>
                       
                      </div>
                      <div className="sf-search-feild">
                        <input
                          id="priceMin"
                          type="number"
                          className="form-control"
                          name="priceMin"
                          value={priceMin}
                          onChange={(e) => setPriceMin(e.target.value)}
                          placeholder="Minimum price"
                        />
                        <br />

                        <input
                          id="priceMax"
                          type="number"
                          className="form-control"
                          name="priceMax"
                          value={priceMax}
                          onChange={(e) => setPriceMax(e.target.value)}
                          placeholder="maximize price"
                        />
                      </div>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="site-button sf-search-btn"
                    onClick={() => handleFilter()}
                  >
                    <i className="fa fa-search" /> 
                    Search Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="aon-search-result-area">
            <div className="aon-vender-list-wrap-outer">
              {/* <div className="row">
                {isFiltered && filteredLabours.length === 0 ? (
                  <div className="col-12">No Results Found</div>
                ) : (
                  (isFiltered ? filteredLabours : labours).map((labour) => (
                    <ServiceItem service={labour} key={labour.id} />
                  ))
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
