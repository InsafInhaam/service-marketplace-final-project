import React from "react";

const Categorycard = ({category}) => {
  return (
    <div className="col-lg-4 col-md-6">
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
              <a href={`/service-provider/${category._id}`}>{category.title}</a>
            </h4>
            <p>{category.totalServiceProviders} Listing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorycard;
