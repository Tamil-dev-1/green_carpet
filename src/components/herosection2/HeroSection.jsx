import React from "react";

import heroImage from "../../assets/images/hero/img2.png";

const HeroSection = () => {
  return (
    <section className="py-5">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-5 col-md-6 mb-5 mb-md-0">

            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: "1.1",
              }}
            >
              Clean Energy,
              <br />
              Sustainable
              <br />
              Future
            </h1>

            <p
              className="text-secondary mb-4"
              style={{
                maxWidth: "400px",
              }}
            >
              We install advanced wind turbines to generate reliable,
              efficient, and eco-friendly energy for a greener tomorrow.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <button className="btn btn-dark rounded-pill px-4">
                Contact Us
              </button>

              <button className="btn btn-outline-secondary rounded-pill px-4">
                About AeroVolt
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div className="col-lg-7 col-md-6 text-center">

            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid hero-image"
            />

          </div>
        </div>

        {/* Bottom Section */}

        <div className="row mt-5 pt-4 border-top">

          <div className="col-md-4 mb-3">
            <div className="d-flex align-items-center gap-3">

              <div
                className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              >
                🚀
              </div>

              <div>
                <small className="text-muted d-block">
                  Discover our
                </small>
                <strong>Recent Project</strong>
              </div>

            </div>
          </div>

          <div className="col-md-2 col-4">
            <small className="text-muted d-block">
              Live From
            </small>
            <strong>Wind Farm</strong>
          </div>

          <div className="col-md-2 col-4">
            <small className="text-muted d-block">
              Projects
            </small>
            <strong>240+</strong>
          </div>

          <div className="col-md-2 col-4">
            <small className="text-muted d-block">
              CO₂ Saved
            </small>
            <strong>18K Tons</strong>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;


