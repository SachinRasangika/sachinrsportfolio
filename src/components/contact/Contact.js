import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleScheduleCall = () => {
    const phoneNumber = '+94774698175';
    const message = 'Hi! I would like to schedule a call to discuss my project.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-section">
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
                  <span>Your dream site</span>
                </div>
                
                <h2 className="contact-title">Start your project</h2>
                
                <p className="contact-description">
                  Join the ranks of businesses that trust my expertise. Start
                  your project with a free discovery call and see how we can
                  bring your vision to life.
                </p>

                <div className="contact-features">
                  <div className="feature-item">
                    <div className="feature-icon custom-design-icon">
                      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_4_3830)">
                          <path d="M51.9399 3.98047H3.93994V51.9805H51.9399V3.98047Z" fill="#506C83" fillOpacity="0.3"/>
                          <path d="M51.6899 4.23047H4.18994V51.7305H51.6899V4.23047Z" stroke="#506C83" strokeOpacity="0.2" strokeWidth="0.5"/>
                          <mask id="mask0_4_3830" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="16" y="16" width="23" height="23">
                            <path d="M38.9399 16.9805H16.9399V38.9805H38.9399V16.9805Z" fill="white"/>
                          </mask>
                          <g mask="url(#mask0_4_3830)">
                            <path d="M18.3149 23.8555H25.8774" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M30.0024 23.8555H37.5649" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M27.9399 25.918C29.079 25.918 30.0024 24.9946 30.0024 23.8555C30.0024 22.7164 29.079 21.793 27.9399 21.793C26.8008 21.793 25.8774 22.7164 25.8774 23.8555C25.8774 24.9946 26.8008 25.918 27.9399 25.918Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.3774 34.168C21.5165 34.168 22.4399 33.2446 22.4399 32.1055C22.4399 30.9664 21.5165 30.043 20.3774 30.043C19.2383 30.043 18.3149 30.9664 18.3149 32.1055C18.3149 33.2446 19.2383 34.168 20.3774 34.168Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M35.5024 34.168C36.6415 34.168 37.5649 33.2446 37.5649 32.1055C37.5649 30.9664 36.6415 30.043 35.5024 30.043C34.3633 30.043 33.4399 30.9664 33.4399 32.1055C33.4399 33.2446 34.3633 34.168 35.5024 34.168Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M29.9836 24.1348C31.3454 24.518 32.5726 25.275 33.5261 26.32C34.4797 27.365 35.1215 28.6562 35.3788 30.0473" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.5012 30.0473C20.7585 28.6563 21.4004 27.3651 22.3539 26.3201C23.3074 25.2751 24.5346 24.5181 25.8963 24.1348" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <path d="M51.4399 0.980469V7.98047" stroke="#506C83"/>
                          <path d="M47.9399 4.48047H54.9399" stroke="#506C83"/>
                          <path d="M51.4399 47.9805V54.9805" stroke="#506C83"/>
                          <path d="M47.9399 51.4805H54.9399" stroke="#506C83"/>
                          <path d="M4.43994 0.980469V7.98047" stroke="#506C83"/>
                          <path d="M0.939941 4.48047H7.93994" stroke="#506C83"/>
                          <path d="M4.43994 47.9805V54.9805" stroke="#506C83"/>
                          <path d="M0.939941 51.4805H7.93994" stroke="#506C83"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_4_3830">
                            <rect width="54" height="54" fill="white" transform="translate(0.939941 0.980469)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="feature-text">Custom Design & Features</span>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon seo-icon">
                      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_4_3856)">
                          <path d="M51.9399 3.98047H3.93994V51.9805H51.9399V3.98047Z" fill="#506C83" fillOpacity="0.3"/>
                          <path d="M51.6899 4.23047H4.18994V51.7305H51.6899V4.23047Z" stroke="#506C83" strokeOpacity="0.2" strokeWidth="0.5"/>
                          <mask id="mask0_4_3856" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="16" y="16" width="23" height="23">
                            <path d="M38.9399 16.9805H16.9399V38.9805H38.9399V16.9805Z" fill="white"/>
                          </mask>
                          <g mask="url(#mask0_4_3856)">
                            <path d="M26.5649 33.4805C30.3619 33.4805 33.4399 30.4025 33.4399 26.6055C33.4399 22.8085 30.3619 19.7305 26.5649 19.7305C22.7679 19.7305 19.6899 22.8085 19.6899 26.6055C19.6899 30.4025 22.7679 33.4805 26.5649 33.4805Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M31.4265 31.4668L36.19 36.2303" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <path d="M51.4399 0.980469V7.98047" stroke="#506C83"/>
                          <path d="M47.9399 4.48047H54.9399" stroke="#506C83"/>
                          <path d="M51.4399 47.9805V54.9805" stroke="#506C83"/>
                          <path d="M47.9399 51.4805H54.9399" stroke="#506C83"/>
                          <path d="M4.43994 0.980469V7.98047" stroke="#506C83"/>
                          <path d="M0.939941 4.48047H7.93994" stroke="#506C83"/>
                          <path d="M4.43994 47.9805V54.9805" stroke="#506C83"/>
                          <path d="M0.939941 51.4805H7.93994" stroke="#506C83"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_4_3856">
                            <rect width="54" height="54" fill="white" transform="translate(0.939941 0.980469)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="feature-text">Effective SEO</span>
                  </div>
                </div>

                <button className="schedule-call-btn" onClick={handleScheduleCall}>
                  <span>Schedule a call</span>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.18921 12.0204L11.9673 4.24219" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9665 10.6061V4.24219H5.60254" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="contact-right">
                <form className="contact-form" onSubmit={handleSubmit}>
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
                      <option value="">Select one</option>
                      <option value="web-design">Web Design</option>
                      <option value="development">Development</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="How we can help you?"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
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
