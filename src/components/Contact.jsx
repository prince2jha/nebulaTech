import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h2 className="display-6 text-center mb-4">
                Have some <b>Question ?</b>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="/assests/contactus.png"
                alt="contact"
                className="w-100 mt-5"
              />
            </div>
            <div className="col-md-6">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                  <button type="submit" className='btn btn-outline-primary mt-4 rounded-pill px-4'>Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact