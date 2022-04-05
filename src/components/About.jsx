import React from 'react';

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/assests/aboutus.png"
                alt="about"
                className="w-75 mt-5"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h2 className="display-6 mb-2">
                Who <b>We</b> Are
              </h2>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                id nisi doloribus veritatis nobis exercitationem mollitia?
                Veritatis, ratione ea placeat provident commodi deserunt autem
                animi similique, voluptatem id unde. Quasi qui quos illo
                eligendi temporibus id corporis laboriosam, et quibusdam quidem.
                Iure quidem quas possimus? Quaerat quibusdam doloremque qui
                asperiores.
              </p>
              <button className="btn btn-primary rounded-pill   px-4 py-2">
                Get Started
              </button>
              <button className="btn btn-primary rounded-pill   px-4 py-2 ms-3">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;