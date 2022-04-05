import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-3">
                <h4 className="mb-0 letter-space1">NEBULA</h4>
                <p className="mt-0 letter-space2">TECHNOLOGIES</p>
                <address>
                  <ul className="list-unstyled link-add-txt">
                    <li>
                      <a href="mailto:abc@example.com">
                        <i className="fa fa-envelope"></i>
                        <span className="ml-2">
                          <b>Email:</b>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+918888888888">
                        <i className="fa fa-phone"></i>
                        <span className="ml-2">
                          <b>Phone:</b>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://abc.com">
                        <i className="fa fa-globe"></i>
                        <span className="ml-2">
                          <b>Website:</b>
                        </span>
                      </a>
                    </li>
                  </ul>
                </address>
              </div>
              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 text-white" to="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 text-white" to="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 text-white" to="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 text-white" to="#">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 text-white" to="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <form action="">
                  <h5>Subscribe to our newsletters</h5>
                  <p>Monthly digest of whats new and exiting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="newsletter1"
                      placeholder="email address"
                    />
                    <button
                      className="btn btn-primary rounded-pill px-4"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p>&#169; 2022 Company, INC. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a to="#" className="link-light">
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a to="#" className="link-light">
                    <i className="fa fa-twitter fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a to="#" className="link-light">
                    <i className="fa fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a to="#" className="link-light">
                    <i className="fa fa-linkedin fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
}

export default Footer