import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import ServiceItem from "../components/ServiceItem";

// const ITEMS_PER_PAGE = 10; // Number of labor cards per page

const Search = () => {
  const [categories, setCategories] = useState([]);
  const [filteredLabours, setFilteredLabours] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [category, setCategory] = useState("");
  const [services, setServices] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false); // New state to track if filters are applied

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/subcategories/allsubcategories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, [categories]);

  useEffect(() => {
    // Fetch services from the backend API and store them in the state
    fetch(process.env.REACT_APP_API_URL + "/api/services/services")
      .then((res) => res.json())
      .then((result) => {
        setServices(result);
      });
  }, [services]);

  const handleFilter = () => {
    // Filter services based on the selected filters
    const filtered = services.filter((service) => {
      const keywordMatch =
        !keyword || service.name.toLowerCase().includes(keyword.toLowerCase());
      const categoryMatch = !category || service.subcategory.title === category;
      const priceMatch =
        (!priceMin || service.price >= parseInt(priceMin)) &&
        (!priceMax || service.price <= parseInt(priceMax));

      // Combine the filter conditions using the AND (&&) operator
      return keywordMatch && categoryMatch  && priceMatch;
    });

    setFilteredLabours(filtered); // Update the filtered services in the state
    setIsFiltered(true); // Set isFiltered to true after applying filters
  };

  console.log(filteredLabours);

  return (
    <>
      <div className="page-wraper">
        <Navbar />
        <div className="page-content">
          <div className="sf-seach-vertical sf-search-bar-panel">
            <div className="search-form">
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
                {isFiltered && filteredLabours.length === 0 ? (
                  <div className="col-12">No Results Found</div>
                ) : (
                  (isFiltered ? filteredLabours : services).map((service) => (
                    <ServiceItem service={service} key={service.id} />
                  ))
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;