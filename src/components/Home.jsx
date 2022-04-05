import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Services from './Services';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Scale. Growth. Excellence.
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                unde accusamus vel voluptatum quasi minima? Dolore ab recusandae
                nobis esse!
              </p>
              <div className="buttons d-flex justify-content-center">
                <NavLink
                  to="/contact"
                  className="btn btn-light me-4 rounded-pill px-4 py-2"
                >
                  Get Quotes
                </NavLink>
                <NavLink
                  to="/services"
                  className="btn btn-outline-light rounded-pill px-4 py-2"
                >
                  Our services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;