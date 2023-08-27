// src/components/ResetPassword.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function ResetPassword() {
  const history = useNavigate();

//   const location = useLocation();
//   const pathSegments = location.pathname.split("/");
//   const id = pathSegments[2];
//   const token = pathSegments[3];

//   console.log(id, token);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      toast.error("Please enter a valid ur password");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Please enter a valid ur password");
      return;
    }

    // fetch(
    //   process.env.REACT_APP_API_URL + `/api/user/reset-password/${id}/${token}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       password,
    //     }),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.error) {
    //       toast.error(data.error);
    //     } else {
    //       toast.success(data.message);
    //       history("/login");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{ backgroundImage: 'url("../images/bg_1.jpg")' }}
      />
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center login-page-row">
            <div className="col-md-7">
              <h3>
                Login to <strong>Service Finder</strong>
              </h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                consectetur adipisicing.
              </p>
              <form action="#" method="post">
                <div className="form-group first">
                  <label htmlFor="email">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group first">
                  <label htmlFor="email">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex mb-5 align-items-center">
                  <span className="ml-auto">
                    <a href="/login" className="forgot-pass">
                      Already have an account?
                    </a>
                  </span>
                </div>
                <input
                  type="button"
                  defaultValue="Reset Password"
                  className="btn btn-block btn-primary"
                  onClick={() => handleSubmit()}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
