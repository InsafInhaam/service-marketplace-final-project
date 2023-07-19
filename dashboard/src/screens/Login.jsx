import React from "react";

const Login = () => {
  return (
    <>
      <div className="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <div className="avatar">
            <img src="/examples/images/avatar.png" alt="Avatar" />
          </div>
          <h2 className="text-center">Member Login</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Sign in
            </button>
          </div>
          <div className="clearfix">
            <label className="pull-left checkbox-inline">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="pull-right">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center small">
          Don't have an account? <a href="#">Sign up here!</a>
        </p>
      </div>
    </>
  );
};

export default Login;
