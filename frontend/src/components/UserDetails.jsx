import React from "react";
import { useSelector } from "react-redux";

const UserDetails = ({ userDetails, onShowModal }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src={userDetails.image}
              alt={userDetails.name}
              className="rounded-circle img-fluid"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h5 className="my-3">{userDetails.name}</h5>
            <p className="text-muted mb-1">{userDetails.description}</p>
            <p className="text-muted mb-4">{userDetails.city}</p>
            <div className="d-flex justify-content-center mb-2">
              {userDetails._id === user._id && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onShowModal}
                >
                  Edit Profile
                </button>
              )}
              {/* <button type="button" className="btn btn-outline-primary ms-1">
                  Message
                </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails.name}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails.phone}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Password</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">***************</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
