import React from "react";
import './about.css'
import focus from '../../assets/images/about/focus.png'
// import global from '../../assets/images/about/global.png'
import { RiGlobalLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";


export default function AboutSection() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-7">
            <span className="text-success fw-bold text-uppercase small">
              About Us
            </span>

            <h2 className="display-6 fw-bold mt-2 mb-3">
              The Foundation for Change
            </h2>

            <p className="text-secondary mb-5">
              Green Carpet Foundation is a global platform driving climate
              resilience, carbon action, and inclusive sustainable development
              through partnerships, research, and community impact.
            </p>

            <div className="row text-center g-4">

              <div className="col-6 col-md-3">
                <div className="icon-box">
                  <div className="icon-circle">
                    <RiPlantFill size={45} />
                  </div>
                  <p className="mt-3 fw-semibold mb-0">
                    Purpose Driven
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="icon-box">
                  <div className="icon-circle">
                   <FaHandshake size={45} />

                  </div>
                  <p className="mt-3 fw-semibold mb-0">
                    Inclusive Approach
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="icon-box">
                  <div className="icon-circle">
                    <img src={focus}  />
                  </div>
                  <p className="mt-3 fw-semibold mb-0">
                    Impact Focused
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="icon-box">
                  <div className="icon-circle">
                    {/* <img src={global} /> */}
                    <RiGlobalLine size={45} />
                  </div>
                  <p className="mt-3 fw-semibold mb-0">
                    Global Network
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 text-center">
            <div className="image-wrapper mx-auto">
              <img
                src="https://images.pexels.com/photos/16850736/pexels-photo-16850736.jpeg"
                alt="Foundation"
                className="img-fluid foundation-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


