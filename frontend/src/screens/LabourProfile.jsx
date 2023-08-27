import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import UserDetailsService from "../components/UserDetailsService";
import UserDetailsReviews from "../components/UserDetailsReviews";
import TopBanner from "../components/TopBanner";

const LabourProfile = () => {
  const location = useLocation();
  const user_id = location.pathname.split("/")[2];
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/user/user/" + user_id)
      .then((res) => res.json())
      .then((result) => {
        setUserDetails(result);
      });
  }, [userDetails]);

  console.log(userDetails);

  return (
    <div>
      <div className="page-wraper">
        <Navbar />
        {/* HEADER END */}
        {/* Content */}
        <div className="page-content">
          <TopBanner
            bannerTitle={userDetails.name + " " + "Labour Profile Page"}
            bannerDescription={
              "lorem ipsum dolor sit amet, consectetur adipiscing el"
            }
          />
          {/*Nav Section Start*/}
          <div className="sf-page-scroll-wrap sf-page-scroll-wrap2">
            <div className="container">
              <div className="sf-page-scroll-nav clearfix">
                <ul className="clearfix">
                  <li>
                    <a href="#aon-provider-info">About</a>
                  </li>
                  <li>
                    <a href="#aon-provider-services">Services</a>
                  </li>
                  <li>
                    <a href="#aon-provider-Req-quote">Request a Quote</a>
                  </li>
                  <li>
                    <a href="#aon-provider-coInfo">Contact Info</a>
                  </li>
                  <li>
                    <a href="#aon-provider-video">Video</a>
                  </li>
                  <li>
                    <a href="#aon-provider-articles">Articles</a>
                  </li>
                  <li>
                    <a href="#aon-provider-review">Review</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*Nav Section End*/}
          <div className="container">
            <UserDetails userDetails={userDetails} />
            {/* <UserDetailsService userDetails={userDetails} /> */}
            <UserDetailsReviews />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LabourProfile;
