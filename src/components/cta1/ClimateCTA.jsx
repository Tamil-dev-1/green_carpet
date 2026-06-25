import React from "react";
import "./ClimateCTA.css";

export default function CTASection() {
  return (
    <section className="cta-section py-5">
      <div className="container">

        <div className="cta-banner">

          <div className="cta-overlay"></div>

          <div className="row align-items-center h-100">

            <div className="col-lg-5 col-md-6">
              <div className="cta-content">
                <h2>Be Part of the Change</h2>

                <p>
                  Join organizations and changemakers building a sustainable,
                  equitable and resilient world.
                </p>

                <button className="btn cta-btn">
                  Join Our Programs
                  <span className="ms-2">➜</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}