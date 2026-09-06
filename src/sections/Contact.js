import React, {useEffect, useState} from "react";
import emailjs from "@emailjs/browser";
import {
  FiCheckCircle,
  FiMail,
  FiSend,
  FiX,
  FiAlertCircle
} from "react-icons/fi";
import {contactInfo, greeting, researchSection} from "../portfolio";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import "./Contact.css";

// EmailJS identifiers are public by design; env vars allow overriding per deploy.
const SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_ocsnkqm";
const TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_kq39dzm";
const PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "r_Rgkmdt-ibGHzPVP";

const EMPTY_FORM = {fullName: "", email: "", phone: "", message: ""};

const FIELDS = [
  {name: "fullName", label: "Full name", type: "text", required: true},
  {name: "email", label: "Email address", type: "email", required: true},
  {
    name: "phone",
    label: "Phone number (optional)",
    type: "tel",
    required: false
  }
];

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState(null); // {type: "success" | "error", text}
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!status) return undefined;
    const timer = setTimeout(() => setStatus(null), 9000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = event => {
    const {name, value} = event.target;
    setForm(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: "Research Portfolio Inquiry",
          email: contactInfo.email_address,
          name: form.fullName,
          from_email: form.email,
          time: new Date().toLocaleString(),
          phone: form.phone || "Not provided",
          message: form.message,
          reply_to: form.email,
          to_name: greeting.name,
          subject: `New Contact Form Message from ${form.fullName}`
        },
        PUBLIC_KEY
      );

      setStatus({
        type: "success",
        text: "Message sent. I'll get back to you shortly."
      });
      setForm(EMPTY_FORM);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        text: `Something went wrong. Please email me directly at ${contactInfo.email_address}.`
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="shell">
        <SectionHeading
          id="contact-heading"
          index="06"
          title="Let’s exchange ideas"
          subtitle={contactInfo.subtitle}
        />

        <div className="contact__grid">
          <Reveal className="contact__aside">
            <div className="contact__channels">
              <a
                className="channel"
                href={`mailto:${contactInfo.email_address}`}
              >
                <span className="channel__icon">
                  <FiMail />
                </span>
                <span className="channel__body">
                  <em>Email</em>
                  <strong>{contactInfo.email_address}</strong>
                </span>
              </a>
            </div>

            <div className="contact__social">
              <p className="contact__social-label">Find me elsewhere</p>
              <div className="contact__profile-links">
                {researchSection.profileLinks.map(link => (
                  <a
                    className="text-link"
                    href={link.url}
                    key={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <p className="contact__note">
              Based in {greeting.location}. I welcome conversations about LLM
              memory, reproducible experiments, and secure intelligent systems.
            </p>
          </Reveal>

          <Reveal className="contact__form-wrap glass" delay={0.1}>
            <form className="cform" onSubmit={handleSubmit}>
              {FIELDS.map(field => (
                <div className="cfield" key={field.name}>
                  <input
                    id={`contact-${field.name}`}
                    className="cfield__input"
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder=" "
                    required={field.required}
                    autoComplete={
                      field.name === "fullName" ? "name" : field.type
                    }
                  />
                  <label
                    className="cfield__label"
                    htmlFor={`contact-${field.name}`}
                  >
                    {field.label}
                  </label>
                  <span className="cfield__rule" />
                </div>
              ))}

              <div className="cfield">
                <textarea
                  id="contact-message"
                  className="cfield__input cfield__input--area"
                  name="message"
                  rows="5"
                  maxLength="600"
                  value={form.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label className="cfield__label" htmlFor="contact-message">
                  Your message or research question
                </label>
                <span className="cfield__rule" />
                <span className="cfield__count">{form.message.length}/600</span>
              </div>

              {status && (
                <div
                  role="status"
                  className={`cstatus cstatus--${status.type}`}
                >
                  {status.type === "success" ? (
                    <FiCheckCircle />
                  ) : (
                    <FiAlertCircle />
                  )}
                  <span>{status.text}</span>
                  <button
                    type="button"
                    onClick={() => setStatus(null)}
                    aria-label="Dismiss message"
                  >
                    <FiX />
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="btn btn--primary cform__submit"
                disabled={sending}
              >
                {sending ? "Sending…" : "Send message"}
                <FiSend />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
