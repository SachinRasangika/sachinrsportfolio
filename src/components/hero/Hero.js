import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          className="hero-bg-image" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a35fbfb1763c2d6b014bef83a36664066370e8c5?width=3840" 
          alt="" 
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Sam Crawford: Your Award-</span>
            <span className="title-line">
              Winning{' '}
              <span className="squarespace-highlight">
                Squarespace
              </span>
            </span>
            <span className="title-line">Website Designer</span>
          </h1>
          
          <p className="hero-description">
            Sam Crawford has helped launch over 700 Squarespace websites for clients worldwide, 
            from local startups to global brands. Every site is crafted for speed, mobile performance, 
            and search visibility. As a Squarespace Expert, and Enterprise Partner, Sam's known for 
            clear, thoughtful design and the kind of results that speak for themselves.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              <span>Schedule a call</span>
              <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.25122 12.3687L12.0294 4.59045" stroke="#506C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.0285 10.9546V4.59064H5.66455" stroke="#506C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              Get in touch
            </button>
          </div>
          
          <div className="awards-container">
            <div className="award-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/1f1b0d70c0194f565b035418dda9b15fce4a9668?width=271" alt="Award 1" />
            </div>
            <div className="award-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/e104c7365eaa459121e17ff44d0f0662d6f7e24a?width=271" alt="Award 2" />
            </div>
            <div className="award-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/37ca985ac464a87055945294f84b8f21d759ba1a?width=271" alt="Award 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
