import React from "react";

const TopBanner = ({bannerTitle, bannerDescription}) => {
  return (
    <>
      <div className="sf-profile-banner-full">
        <div className="container sf-proBnrfull-container">
          <div className="sf-proBnrfull-row">
            {/*Top Banner Left*/}
            <div className=" sf-proBnrfull-left"></div>
            {/*Top Banner Right*/}
            <div className=" sf-proBnrfull-right">
              <h2 className=" sf-proBnrfull-heading">
                {bannerTitle}
              </h2>
              <div className=" sf-proBnrfull-tagline">
                {bannerDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
