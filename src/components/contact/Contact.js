import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // ✅ Your EmailJS details
    const serviceId = "service_g1c8b29";
    const templateId = "template_mxl0pga";
    const publicKey = "wYhC8Z4NKrrRPs_yQ";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: "sachinrasangika@gmail.com"
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("✅ Email sent successfully:", response);
        setIsSubmitted(true);
        setIsLoading(false);

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("❌ Email sending failed:", error);
        setIsLoading(false);
        alert("Failed to send. Please try again later.");
      });
  };

  const handleScheduleCall = () => {
    const phoneNumber = "+94774698175";
    const message =
      "Hi Sachin! I came across your portfolio and would like to discuss a potential opportunity/collaboration with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-border">
          <div className="contact-background">
            <div className="contact-mask">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0eee4fe56531f916335ae1f4c0730696d0ea3ae1?width=2720"
                alt="Background pattern"
                className="contact-bg-image"
              />
            </div>

            <div className="contact-content">
              <div className="contact-left">
                <div className="contact-badge">
                  <div className="badge-dot"></div>
                  <span>Associate UI/UX Engineer</span>
                </div>

                <h2 className="contact-title">Let's Work Together</h2>

                <p className="contact-description">
                  I'm open to new opportunities and collaborations. Whether
                  you're a startup, agency, or established company looking for a
                  passionate UI/UX Engineer, I'd love to hear about your project
                  and discuss how I can contribute to your team's success.
                </p>

                <div className="contact-features">
                  <div className="feature-item">
                    <div className="feature-icon custom-design-icon">
                      {/* SVG here */}
                    </div>
                    <span className="feature-text">
                      User-Centered Design & Development
                    </span>
                  </div>
                </div>

                <button
                  className="schedule-call-btn"
                  onClick={handleScheduleCall}
                >
                  <span>Get in touch via WhatsApp</span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.18921 12.0204L11.9673 4.24219"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9665 10.6061V4.24219H5.60254"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="contact-right">
                <form
                  ref={form}
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject <span className="required">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="job-opportunity">Job Opportunity</option>
                      <option value="freelance-project">
                        Freelance Project
                      </option>
                      <option value="collaboration">Collaboration</option>
                      <option value="portfolio-inquiry">
                        Portfolio Inquiry
                      </option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  {isSubmitted ? (
                    <div className="success-message">
                      <span>
                        Thank you! Your message has been sent successfully.
                      </span>
                      <p
                        style={{
                          fontSize: "14px",
                          margin: "8px 0 0 0",
                          opacity: 0.8
                        }}
                      >
                        I'll get back to you as soon as possible at{" "}
                        <strong>{formData.email}</strong>
                      </p>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px"
                          }}
                        >
                          <span className="loading-spinner"></span>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
