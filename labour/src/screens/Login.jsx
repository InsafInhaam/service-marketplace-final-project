import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.png";

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

    fetch(process.env.REACT_APP_API_URL + "/api/labour/login", {
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
              user: data.labour,
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
              expirationTime: data.expirationTime,
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
    <section className="h-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {/* <div className="col"> */}
          <div className="card card-registration w-50">
            <div className="row">
              <div className="col-xl-12 p-0">
                <div className="card-body text-black">
                  <div className="brand-logo" style={{ textAlign: "center" }}>
                    <img src={logo} alt="logo" style={{ width: "200px" }} />
                  </div>
                  <form action="#" method="post" className="pt-4">
                    <div className="form-group first mt-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ur email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-group last mt-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="d-flex my-3 align-items-center">
                      <span className="ml-auto">
                        Don't have an account? &nbsp;
                        <a href="/register" className="forgot-pass">
                          Register
                        </a>
                      </span>
                    </div>
                    <input
                      type="button"
                      defaultValue={"Login"}
                      className="btn btn-primary text-white"
                      onClick={() => handleSubmit()}
                    />
                  </form>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
