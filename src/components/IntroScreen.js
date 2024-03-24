import React, { useState, useEffect } from 'react';
function IntroScreen() {

  useEffect(() => {
          window.inittypings();
          });

    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Ashish Chaurasiya</h1>
          <p>Experties in <span className="typed" data-typed-items="Criminal, Domestic, Legal Advice, Others Legal Work"></span></p>
          <div className="social-links">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </section>
    );
  }
  
  export default IntroScreen;