import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SubCategory from "./SubCategory";

const Categorycard = ({ category }) => {
  const [showModal, setShowModal] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [catgeoryName, setCatgeoryName] = useState("");

  const handleClick = (categoryId, catgeoryName) => {
    setShowModal(true);
    setCategoryId(categoryId);
    setCatgeoryName(catgeoryName);
  };

  return (
    <>
      <div
        className="col-lg-4 col-md-6"
        data-toggle="modal"
        data-target="#subcategories"
        onClick={() => handleClick(category._id, category.title)}
      >
        <div className="media-bg-animate mba-bdr-15">
          <div className="aon-categories-area2-iconbox aon-icon-effect">
            <div className="aon-cate-area2-icon">
              <span>
                <i className="aon-icon">
                  <img src={category.image} alt={category.title} />
                </i>
              </span>
            </div>
            <div className="aon-cate-area2-content">
              <h4 className="aon-tilte">
                {/* <a href={`/service-provider/${category._id}`}> */}
                {category.title}
                {/* </a> */}
              </h4>
              <p>{category.totalServiceProviders} Listing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <SubCategory
          category={category}
          setShowModal={setShowModal}
          categoryId={categoryId}
          catgeoryName={catgeoryName}
        />
      )}
    </>
  );
};

export default Categorycard;
