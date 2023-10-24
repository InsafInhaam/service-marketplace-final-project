import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!password) {
      toast.error("Please enter a password");
      return;
    }

    fetch(process.env.REACT_APP_API_URL + "/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
        } else {
          dispatch({
            type: "LOGIN",
            payload: {
              user: data.user,
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
              expirationTime: data.expirationTime
            },
          });
          toast.success(data.message); //success message
          history("/"); // redirection to home page
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{ backgroundImage: 'url("../images/workers-1.png")' }}
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex mb-5 align-items-center">
                  <span className="text-center">
                    <a href="/register" className="forgot-pass">
                      Register
                    </a>
                  </span>
                  <span className="ml-auto">
                    <a href="/forgot-password" className="forgot-pass">
                      Forgot Password
                    </a>
                  </span>
                </div>
                <input
                  type="button"
                  defaultValue="Log In"
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
};

export default Login;
