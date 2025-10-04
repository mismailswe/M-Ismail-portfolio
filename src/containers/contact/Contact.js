import React, {useState} from "react";
import "./Contact.scss";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    privacyAccepted: false
  });

  const handleInputChange = e => {
    const {name, value, type, checked} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-container">
          {/* Left Section - Contact Information */}
          <div className="contact-info-section">
            <button className="contact-us-button">Contact Us</button>
            <h1 className="contact-main-title">Let's Get In Touch.</h1>
            <p className="contact-alternative">
              Or just reach out manually to{" "}
              <a
                href={`mailto:${contactInfo.email_address}`}
                className="contact-email-link"
              >
                {contactInfo.email_address}
              </a>
            </p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Full Name Field */}
              <div className="form-field">
                <label className="field-label">Full Name</label>
                <div className="input-container">
                  <svg
                    className="input-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name..."
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="form-field">
                <label className="field-label">Email Address</label>
                <div className="input-container">
                  <svg
                    className="input-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address..."
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="form-field">
                <label className="field-label">Phone Number</label>
                <div className="phone-input-container">
                  <div className="country-code-dropdown">
                    <span className="flag">🇬🇧</span>
                    <svg
                      className="dropdown-arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6,9 12,15 18,9" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+44 (000) 000-0000"
                    className="phone-input"
                    required
                  />
                  <svg
                    className="help-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
              </div>

              {/* Message Field */}
              <div className="form-field">
                <label className="field-label">Message</label>
                <div className="textarea-container">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your main text here..."
                    className="form-textarea"
                    maxLength="300"
                    required
                  />
                  <div className="textarea-footer">
                    <span className="char-counter">
                      {formData.message.length}/300
                    </span>
                    <svg
                      className="resize-handle"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 3l-6 6" />
                      <path d="M21 3l-6 6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="privacy-section">
                <label className="privacy-checkbox-label">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleInputChange}
                    className="privacy-checkbox"
                    required
                  />
                  <span className="privacy-text">
                    I hereby agree to our{" "}
                    <a href="/privacy-policy" className="privacy-link">
                      Privacy Policy terms.
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button">
                Submit Form
                <svg
                  className="submit-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}
