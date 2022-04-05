import React from 'react'
import { NavLink } from 'react-router-dom';
const Register = () => {
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center form text-white justify-content-center order-2">
            <div className="text-center">
              <img src="/assests/hello.gif" className="rounded" alt="..." />
            </div>
            <h2 className="display-4 fw-bolder">Hello Guest,</h2>
            <p className="lead text-center">
              Please enter your details to register
            </p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50 mb-4"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            {/* <h2 className="display-6 fw-bolder mb-5">Register</h2> */}
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Username
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
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
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree{" "}
                  <span className="modal-dialog modal-fullscreen-sm-down">
                    <NavLink
                      to="/terms"
                      className="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Terms And Conditions
                    </NavLink>
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary w-100 rounded-pill mt-4"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register