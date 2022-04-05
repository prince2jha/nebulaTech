import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center form text-white justify-content-center">
            <div className="text-center mt-0">
              <img src="/assests/welcome.gif" className="rounded w-75" alt="..." />
            </div>
            <h2 className="display-4 fw-bolder">Welcome Back</h2>
            <p className="lead text-center">Enter your credentials to login</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-50 mb-4"
            >
              Register
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h2 className="display-6 fw-bolder mb-5">Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label mb-4" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login