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
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              {/* Full Name Field */}
              <div className="form-field">
                <div className="field-label-container">
                  <label className="field-label">Full Name</label>
                  <span className="required-field">*</span>
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name..."
                  className="form-input"
                  required
                  autoComplete="new-password"
                />
              </div>

              {/* Email Field */}
              <div className="form-field">
                <div className="field-label-container">
                  <label className="field-label">Email Address</label>
                  <span className="required-field">*</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address..."
                  className="form-input"
                  required
                  autoComplete="new-password"
                />
              </div>

              {/* Phone Field */}
              <div className="form-field">
                <div className="field-label-container">
                  <label className="field-label">Phone Number (Optional)</label>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number..."
                  className="form-input"
                  autoComplete="new-password"
                />
              </div>

              {/* Message Field */}
              <div className="form-field">
                <div className="field-label-container">
                  <label className="field-label">Message</label>
                  <span className="required-field">*</span>
                </div>
                <div className="textarea-container">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message here..."
                    className="form-textarea"
                    maxLength="300"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}
