import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Categorycard from "../components/Categorycard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/categories/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  // console.log(categories);

  return (
    <div className="page-wraper">
      
      {/* HEADER START */}
      <Navbar />
      {/* HEADER END */}
      {/* Content */}
      <div className="page-content">
        {/* Banner Area */}
        <div className="aon-page-benner-area2">
          <div className="aon-banner-large2-title">
            Still not finding what you're looking for? View all Provider
            categories
          </div>
        </div>
        {/* Banner Area End */}
        {/* All categories Block Section */}
        <div className="aon-all-categories-wrap2">
          <div className="container">
            <div className="aon-all-categories-block2">
              <div className="row justify-content-center">
                {categories?.map((category) => (
                  <Categorycard category={category} key={category._id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* All categories Block Section  END */}
      </div>
      {/* Content END*/}
      {/* FOOTER START */}
      <Footer />
    </div>
  );
};

export default Categories;
