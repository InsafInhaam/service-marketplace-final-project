import React from "react";
import { useSelector } from "react-redux";

const UserDetails = ({ userDetails }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      {" "}
      <div className="sf-provi-bio-box cleafix margin-b-50 sf-provi-fullBox">
        {/*Left*/}
        <div className="sf-provi-bio-left">
          <div className="sf-provi-bio-info">
            <div className="sf-provi-pic">
              <img src={userDetails.image} alt={userDetails.name} />
            </div>
            {userDetails.role === "labour" && (
              <div className="sf-ow-pro-rating">
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star text-gray" />
              </div>
            )}
          </div>
        </div>
        {/*Right*/}
        <div className="sf-provi-bio-right">
          <h3 className="sf-provi-title">{userDetails.name}</h3>
          {userDetails.role === "labour" && (
            <div className="sf-provi-cat">
              <strong>Categories:</strong> {userDetails.serviceProvided}
            </div>
          )}

          <div className="sf-provi-bio-text">
            <p>{userDetails.description}</p>
            <p>
              <strong>Address</strong> {userDetails.address}
            </p>
            <p>
              <strong>City</strong> {userDetails.city}
            </p>
            <p>
              <strong>Phone</strong> {userDetails.phone}
            </p>
            <p>
              <strong>Horuly Rate</strong> {userDetails.hourlyPrice}
            </p>
            <p>
              <strong>Latitude</strong> {userDetails.latitude}
            </p>
            <p>
              <strong>Longitude</strong> {userDetails.longitude}
            </p>
            {userDetails._id === user._id && (
              <div className="sf-provi-btn">
                <button
                  type="button"
                  className="site-button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i className="fa fa-pencil" />
                  Edit Profile Details
                </button>
              </div>
            )}
          </div>
          <div className="sf-provi-social-row d-flex flex-wrap justify-content-between">
            <div className="social-share-icon social-share-icon2">
              <div className="social-share-cell">
                <strong>Explore Us On Social Media</strong>
              </div>
              <div className="social-share-cell">
                <ul className="share-buttons">
                  <li>
                    <a
                      className="fb-share"
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="nofollow"
                    >
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter-share"
                      href="https://twitter.com/"
                      target="_blank"
                      rel="nofollow"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedin-share"
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="nofollow"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="pinterest-share"
                      href="https://in.pinterest.com/"
                      target="_blank"
                      rel="nofollow"
                    >
                      <i className="fab fa-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;