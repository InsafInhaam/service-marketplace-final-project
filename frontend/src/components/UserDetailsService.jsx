import React from "react";

const UserDetailsService = ({ userDetails }) => {
  return (
    <div>
      {userDetails.role === "labour" && (
        <div
          id="aon-provider-services"
          className="sf-provi-service-box m-b50 sf-provi-fullBox"
        >
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="sf-provi-title">Service</h3>
            <button
              type="button"
              className="site-button mb-2"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fa fa-plus" />
              Service
            </button>
          </div>

          <div className="sf-divider-line" />
          <ul className="sf-provi-service-list">
            <li className="sf-provi-service-box">
              <div className="sf-provi-service-top">
                <div className="sf-provi-service-left">
                  <h4 className="sf-provi-service-ttle">
                    <span className="sf-provi-toggle-btn">+</span> 3 bedroom or
                    a house <span>Offer</span>
                  </h4>
                  <div className="sf-provi-service-price">$124.00</div>
                  <div className="sf-provi-service-hour">
                    <i className="fa fa-clock-o" />
                    Hour
                  </div>
                </div>
                <div className="sf-provi-service-right">
                  <button className="site-button btn-schedules">
                    Schedule
                  </button>
                </div>
              </div>
              <div className="sf-provi-service-bottom">
                <div className="sf-provi-descriptio">
                  Many serives have a wide spectrum of expertise in web
                  solutions within these industries, giving us the necessary
                  skills and knowledge.
                </div>
              </div>
            </li>
            <li className="sf-provi-service-box">
              <div className="sf-provi-service-top">
                <div className="sf-provi-service-left">
                  <h4 className="sf-provi-service-ttle">
                    <span className="sf-provi-toggle-btn">+</span> 3 bedroom or
                    a house <span>Offer</span>
                  </h4>
                  <div className="sf-provi-service-price">$124.00</div>
                  <div className="sf-provi-service-hour">
                    <i className="fa fa-clock-o" />
                    Hour
                  </div>
                </div>
                <div className="sf-provi-service-right">
                  <button className="site-button btn-schedules">
                    Schedule
                  </button>
                </div>
              </div>
              <div className="sf-provi-service-bottom">
                <div className="sf-provi-descriptio">
                  Many serives have a wide spectrum of expertise in web
                  solutions within these industries, giving us the necessary
                  skills and knowledge.
                </div>
              </div>
            </li>
            <li className="sf-provi-service-box">
              <div className="sf-provi-service-top">
                <div className="sf-provi-service-left">
                  <h4 className="sf-provi-service-ttle">
                    <span className="sf-provi-toggle-btn">+</span> 3 bedroom or
                    a house <span>Offer</span>
                  </h4>
                  <div className="sf-provi-service-price">$ 12.00/Hour</div>
                </div>
                <div className="sf-provi-service-right">
                  <div className="sf-provi-service-count">
                    <input
                      id="demo1"
                      type="text"
                      defaultValue={55}
                      name="demo1"
                    />
                  </div>
                  <button className="site-button btn-schedules">
                    Schedule
                  </button>
                </div>
              </div>
              <div className="sf-provi-service-bottom">
                <div className="sf-provi-descriptio">
                  Many serives have a wide spectrum of expertise in web
                  solutions within these industries, giving us the necessary
                  skills and knowledge.
                </div>
              </div>
            </li>
            <li className="sf-provi-service-box">
              <div className="sf-provi-service-top">
                <div className="sf-provi-service-left">
                  <h4 className="sf-provi-service-ttle">
                    <span className="sf-provi-toggle-btn">+</span> 3 bedroom or
                    a house <span>Offer</span>
                  </h4>
                  <div className="sf-provi-service-price">$ 10.00/Hour</div>
                </div>
                <div className="sf-provi-service-right">
                  <div className="sf-provi-service-count">
                    <input
                      id="demo2"
                      type="text"
                      defaultValue={55}
                      name="demo1"
                    />
                  </div>
                  <button className="site-button btn-schedules">
                    Schedule
                  </button>
                </div>
              </div>
              <div className="sf-provi-service-bottom">
                <div className="sf-provi-descriptio">
                  Many serives have a wide spectrum of expertise in web
                  solutions within these industries, giving us the necessary
                  skills and knowledge.
                </div>
              </div>
            </li>
          </ul>
          <div className="servi-leRi-btn d-flex flex-wrap justify-content-between">
            <div className="servi-le-btn">
              <button className="btn btn-custom">
                <i className="feather-chevron-up" />
              </button>
              <button className="btn btn-custom">
                <i className="feather-chevron-down" />
              </button>
            </div>
            <div className="servi-Ri-btn">
              <button className="btn btn-custom aon-sm-btn-dark">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsService;
