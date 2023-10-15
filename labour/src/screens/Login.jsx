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
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className=" text-uppercase">
                      Student registration form
                    </h3>
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
                      className="btn btn-block btn-primary"
                      onClick={() => handleSubmit()}
                    />
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
