import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="gc-footer">

      {/* TOP SECTION */}
      <div className="footer-top">
        <div className="footer-image"></div>

        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="contact-wrapper">
                <h4>CONNECT WITH US</h4>

                <p>
                  We'd love to collaborate with you.
                </p>

                <div className="contact-row">
                  <span className="icon">✆</span>
                  <span>info@greencarpet.org</span>
                </div>

                <div className="contact-row">
                  <span className="icon">✆</span>
                  <span>+1 234 567 8900</span>
                </div>

                <div className="contact-row">
                  <span className="icon">✆</span>
                  <span>+1 234 567 8910</span>
                </div>

                <div className="social-icons">
                  <a href="/"><FaLinkedin /></a>
                  <a href="/"><FaInstagramSquare /></a>
                  <a href="/"><FaSquareWhatsapp /></a>
                  <a href="/"><FaSquareXTwitter /></a>
                  <a href="/"><FaFacebook /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="footer-main">
        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-3 col-md-6">
              <div className="footer-brand">

                <img
                  src="/logo.png"
                  alt="logo"
                  className="footer-logo"
                />

                <p>
                  Building a sustainable world through
                  climate action, education and
                  community empowerment.
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5>Our Foundation</h5>

              <ul>
                <li>About Us</li>
                <li>Our Impact</li>
                <li>Leadership</li>
                <li>Ecosystem Network</li>
                <li>Newsroom</li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5>Our Initiatives</h5>

              <ul>
                <li>Climate Action</li>
                <li>Education</li>
                <li>Women Empowerment</li>
                <li>Community Programs</li>
                <li>Research & Innovation</li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5>Resources</h5>

              <ul>
                <li>Reports & Publications</li>
                <li>Blog</li>
                <li>Media Center</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12">
              <h5>Subscribe to our newsletter</h5>

              <div className="newsletter-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                />

                <button>➜</button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Green Carpet Foundation.
            All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}