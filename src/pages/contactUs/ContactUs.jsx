import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaSyncAlt,
} from "react-icons/fa";
import "./contactUs.css";

/**
 * ContactUs
 * Replica of the "Contact Us" page: address card + "Get In Touch" form
 * Built with React + Bootstrap grid/utility classes, styling in ContactUs.css
 */
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    areaOfInterest: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Hook up to your API / form handler here
  };

  return (
    <section className="contact-us-page py-5">
      <div className="container">
        {/* Page Heading */}
        <div className="mb-4">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-subheading">
            For any enquiries or information, drop us an e-mail or contact us
          </p>
        </div>

        {/* Contact Address Card */}
        <div className="contact-address-card mb-4">
          <h2 className="address-title text-center">Contact Address</h2>

          <div className="d-flex align-items-center justify-content-center mb-3 address-line">
            <FaMapMarkerAlt className="me-2 icon-teal" />
            <span>
              No.1, Iyer Hospital Road,Singanallur Post, Coimbatore, Tamil Nadu - 641005,India.
            </span>
          </div>

          <p className="text-center fw-bold mb-2 queries-label">
            For any general queries, email us:
          </p>
          <div className="d-flex align-items-center justify-content-center mb-4 email-line">
            <FaEnvelope className="me-2 icon-teal" />
            <a href="mailto:contactus@reliancefoundation.org">
              contactus@greencarpetfoundation.org
            </a>
          </div>

          <div className="d-flex justify-content-center gap-2 social-img">
            <a href="#" aria-label="Facebook" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Get In Touch Form Card */}
        <div className="get-in-touch-card">
          <h2 className="form-title mb-4">Get In Touch</h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="contactNo" className="form-label">
                  Contact No. <span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="areaOfInterest" className="form-label">
                  Area Of Interest <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  id="areaOfInterest"
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select area of interest</option>
                  <option value="education">Education</option>
                  <option value="health">Health</option>
                  <option value="rural-transformation">
                    Rural Transformation
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <div className="row g-3 align-items-center captcha-row">
                  <div className="col-12 col-sm-5 col-md-4">
                    <label htmlFor="captcha" className="form-label">
                      Captcha
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="captcha"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleChange}
                    />
                    <small className="text-muted">
                      Enter the characters shown in the image
                    </small>
                  </div>

                  <div className="col-auto">
                    <div className="captcha-box">LN7R9</div>
                  </div>

                  <div className="col-auto">
                    <button
                      type="button"
                      className="captcha-refresh-btn"
                      aria-label="Refresh captcha"
                    >
                      <FaSyncAlt />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn-submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
