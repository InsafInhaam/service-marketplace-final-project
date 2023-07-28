import React from "react";

const LabourCard = ({ labour }) => {
  const {
    _id,
    name,
    email,
    password,
    role,
    address,
    city,
    phone,
    profilePic,
    image,
  } = labour;
  return (
    <div className="col-md-6">
      <div className="sf-vender-list-wrap">
        <div className="sf-vender-list-box d-flex">
          <div
            className="sf-vender-list-pic"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <a className="sf-vender-pic-link" href={`/labour-profile/${_id}`} />
          </div>
          <div className="sf-vender-list-info">
            <h4 className="sf-venders-title">
              <a href={`/labour-profile/${_id}`}>{name} </a>
            </h4>
            <span className="sf-venders-address">
              <i className="fa fa-map-marker" />
              {address}
            </span>
            <div className="sf-ow-pro-rating">
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star text-gray" />
            </div>
            <p>
              Through our expertise, technological knowledge, global presence
              and bespoke.
            </p>

            <div className="dropdown action-dropdown dropdown-left">
              <button
                className="action-button gray dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <i className="fa fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <i className="feather-sliders" /> Display Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="feather-save" /> 0 Review Comments
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="feather-trash" /> Request A Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabourCard;
