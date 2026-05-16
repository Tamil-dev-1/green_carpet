import React from "react";
import "./CTA2.css";

const CTA2 = () => {
  return (
    <section className="cta-wrapper d-flex align-items-center">
      <div className="container position-relative">
        <div className="cta-box">

          {/* Animated Overlay Circle */}
          <div className="cta-overlay"></div>

          <div className="row align-items-center h-100 position-relative z-2">
            
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-7">
              <div className="cta-content">
                <h1 className="cta-title">
                  Get the ball <br />
                  rolling.
                </h1>

                <button className="cta-btn">
                  Schedule a Call
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA2;