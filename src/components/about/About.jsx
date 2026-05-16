import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="course-hero py-5">
      <div className="container custom-container shadow-sm">
        {/* Background Decorative Shapes */}
        <div className="bg-shape-left"></div>
        <div className="bg-shape-right"></div>

        <div className="row align-items-center g-0 position-relative" style={{ zIndex: 1 }}>
          
          {/* Left Column: Image Section */}
          <div className="col-lg-6 p-4 p-md-5">
            <div className="image-wrapper shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800" 
                alt="Students studying" 
                className="img-fluid hero-img"
              />
              <div className="speech-notch"></div>
            </div>
            
            <div className="mt-5 d-flex align-items-center text-black">
              <span className="me-3 fw-bold fs-4">← →</span>
              <small className="fw-semibold">Learn more about our educational proposal</small>
            </div>
          </div>

          {/* Right Column: Text Section */}
          <div className="col-lg-6 p-4 p-md-5">
            <div className="content-box">
              <h1 className="display-4 fw-normal mb-4">
                <span className="italic-text color-green">The Foundation </span> <br />
                <span className="italic-text color-green">for </span>Change <br />
                
              </h1>
              
              <button className="btn btn-green px-4 py-2 mb-5">
                Sign me up now
              </button>

              <div className="sub-content">
                <h5 className="fw-bold text-black">Which languages to learn</h5>
                <p className="text-muted small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

