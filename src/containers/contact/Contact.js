import React, {useState} from "react";
import "./Contact.scss";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    privacyAccepted: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = e => {
    const {name, value, type, checked} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage("");

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = "service_ocsnkqm"; // Replace with your EmailJS service ID
      const templateId = "template_kq39dzm"; // Replace with your EmailJS template ID
      const publicKey = "r_Rgkmdt-ibGHzPVP"; // Replace with your EmailJS public key

      const templateParams = {
        to_email: "m.ismail.swe@gmail.com",
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        privacyAccepted: false
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again or contact me directly at m.ismail.swe@gmail.com"
      );
    } finally {
      setIsLoading(false);
    }
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
                <div className="input-container">
                  <svg
                    className="input-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
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
              </div>

              {/* Email Field */}
              <div className="form-field">
                <div className="field-label-container">
                  <label className="field-label">Email Address</label>
                  <span className="required-field">*</span>
                </div>
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
                    autoComplete="new-password"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="form-field">
                <div className="field-label-container">
                  <label className="field-label">Phone Number (Optional)</label>
                </div>
                <div className="input-container">
                  <svg
                    className="input-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
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

              {/* Submit Message */}
              {submitMessage && (
                <div
                  className={`submit-message ${
                    submitMessage.includes("successfully") ? "success" : "error"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}
