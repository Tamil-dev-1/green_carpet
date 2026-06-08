import React from "react";
import "./ClimateCTA.css";

const CTASection = () => {
  return (
    <section className="gcc-cta-section">
      <div className="container">
        <div className="row align-items-center ">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 mb-5 mb-lg-0">

            <div className="gcc-badge">
              <span className="gcc-dot"></span>
              Get Started
            </div>

            <h1 className="gcc-title">
              Partner with us for a
              sustainable future
              <span> together!</span>
            </h1>

            <p className="gcc-text">
              Join Green Carpet Concepts in building a greener world.
              Collaborate with us on impactful sustainability programs
              that create real change.
            </p>

            <p className="gcc-text gcc-text-second">
              Let’s work together for a cleaner, greener tomorrow.
            </p>

            <div className="gcc-buttons">

              <button className="gcc-join-btn">
                Join Our Programs
                <span className="gcc-arrow">→</span>
              </button>

              <a href="/" className="gcc-partner-link">
                Partnership Opportunities →
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="gcc-image-wrapper">

              {/* LEFT IMAGE */}
              <div className="gcc-card gcc-card-main">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                />

                <div className="gcc-profile">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt=""
                    className="gcc-avatar"
                  />

                  <div>
                    <h5>Zoeylang</h5>
                    <p>Sustainability Advocate</p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="gcc-card gcc-card-side">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                />

                <div className="gcc-tag">
                  #SustainableFuture
                </div>
              </div>

              {/* LINK */}
              {/* <div className="gcc-floating-link">
                🔗 https://greencarpet.com/join-us
              </div> */}

              {/* FLOATING AVATARS */}
              <div className="gcc-circle gcc-c1"></div>
              <div className="gcc-circle gcc-c2"></div>
              <div className="gcc-circle gcc-c3"></div>
              <div className="gcc-circle gcc-c4"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;

