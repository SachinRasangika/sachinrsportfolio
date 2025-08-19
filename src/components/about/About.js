import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-tag">
            <div className="tag-dot"></div>
            <span>Who am I?</span>
          </div>
          
          <h2 className="about-title">
            Meet Sam Crawford - Your Dedicated Squarespace Web Designer
          </h2>
          
          <div className="about-description">
            <p>
              Looking to create a high-converting Squarespace website without the hassle of constant 
              maintenance? Collaborate with me, Sam Crawford, your go-to{' '}
              <a href="#" className="text-link">Squarespace website designer</a>. With 
              a deep understanding of Squarespace's capabilities—from intuitive drag-and-drop interfaces to 
              advanced custom CSS—I deliver top-tier designs tailored to your needs.
            </p>
            
            <p>
              As a recognized Squarespace Circle Member, Expert, Partner, and Community Leader, I bring 
              unparalleled skill and experience to every project. With over 450 successful websites under my 
              belt, I don't just design—I create online experiences that resonate and convert.
            </p>
            
            <p>
              Ready to unlock the full potential of your online presence? Let's work together to craft a modern, 
              impactful Squarespace website for your brand. <a href="#" className="text-link">Contact me today</a>!
            </p>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Behance">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_behance)">
                  <path d="M15.75 8.25H21.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12.375H8.8125C9.65788 12.375 10.4686 12.7108 11.0664 13.3086C11.6642 13.9064 12 14.7171 12 15.5625C12 16.4079 11.6642 17.2186 11.0664 17.8164C10.4686 18.4142 9.65788 18.75 8.8125 18.75H3V6.75H8.4375C9.18342 6.75 9.89879 7.04632 10.4262 7.57376C10.9537 8.10121 11.25 8.81658 11.25 9.5625C11.25 10.3084 10.9537 11.0238 10.4262 11.5512C9.89879 12.0787 9.18342 12.375 8.4375 12.375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.75 17.25C21.2157 17.9624 20.4454 18.4614 19.5769 18.6577C18.7084 18.8541 17.7983 18.7349 17.0096 18.3217C16.2209 17.9084 15.6049 17.228 15.272 16.4021C14.9391 15.5763 14.9109 14.6589 15.1924 13.8142C15.474 12.9694 16.047 12.2524 16.8089 11.7915C17.5707 11.3306 18.4717 11.1558 19.3507 11.2984C20.2296 11.4411 21.0291 11.8918 21.6061 12.57C22.1831 13.2482 22.5 14.1096 22.5 15H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_behance">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.75)"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            
            <a href="#" className="social-link" aria-label="Dribbble">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_dribbble)">
                  <path d="M12 21.75C16.9706 21.75 21 17.7206 21 12.75C21 7.77944 16.9706 3.75 12 3.75C7.02944 3.75 3 7.77944 3 12.75C3 17.7206 7.02944 21.75 12 21.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.65625 19.9941C7.99157 17.7823 9.87573 15.9532 12.126 14.684C14.3764 13.4148 16.9164 12.7486 19.5 12.75C20.0053 12.75 20.5059 12.7753 21 12.8241" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.6244 5.72754C16.2193 7.45459 14.4467 8.84651 12.4356 9.80191C10.4246 10.7573 8.22581 11.2521 5.99937 11.2504C5.05061 11.2506 4.10391 11.1614 3.17188 10.9841" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.05469 4.6582C10.3104 5.98138 12.1807 7.87158 13.4799 10.1411C14.7791 12.4107 15.4621 14.9806 15.4609 17.5957C15.4618 18.8211 15.3128 20.042 15.0175 21.2313" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_dribbble">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.75)"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_linkedin)">
                  <path d="M20.25 3.75H3.75C3.33579 3.75 3 4.08579 3 4.5V21C3 21.4142 3.33579 21.75 3.75 21.75H20.25C20.6642 21.75 21 21.4142 21 21V4.5C21 4.08579 20.6642 3.75 20.25 3.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.25 11.25V17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.25 11.25V17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.25 13.875C11.25 13.1788 11.5266 12.5111 12.0188 12.0188C12.5111 11.5266 13.1788 11.25 13.875 11.25C14.5712 11.25 15.2389 11.5266 15.7312 12.0188C16.2234 12.5111 16.5 13.1788 16.5 13.875V17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8.25" cy="8.625" r="1.125" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_linkedin">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.75)"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            
            <a href="#" className="social-link" aria-label="YouTube">
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1875 17C29.1875 17 29 15.6875 28.4375 15.125C27.75 14.375 26.9375 14.375 26.5625 14.3125C23.9375 14.125 20 14.125 20 14.125C20 14.125 16.0625 14.125 13.4375 14.3125C13.0625 14.375 12.25 14.375 11.5625 15.125C11 15.6875 10.8125 17 10.8125 17C10.8125 17 10.625 18.5 10.625 20.0625V21.5C10.625 23 10.8125 24.5625 10.8125 24.5625C10.8125 24.5625 11 25.875 11.5625 26.4375C12.25 27.1875 13.1875 27.1875 13.625 27.25C15.125 27.375 20 27.4375 20 27.4375C20 27.4375 23.9375 27.4375 26.5625 27.25C26.9375 27.1875 27.75 27.1875 28.4375 26.4375C29 25.875 29.1875 24.5625 29.1875 24.5625C29.1875 24.5625 29.375 23.0625 29.375 21.5V20.0625C29.375 18.5 29.1875 17 29.1875 17ZM18.0625 23.1875V17.9375L23.125 20.5625L18.0625 23.1875Z" fill="white"/>
              </svg>
            </a>
            
            <a href="#" className="social-link" aria-label="Email">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_email)">
                  <path d="M3 6H21V18.75C21 18.9489 20.921 19.1397 20.7803 19.2803C20.6397 19.421 20.4489 19.5 20.25 19.5H3.75C3.55109 19.5 3.36032 19.421 3.21967 19.2803C3.07902 19.1397 3 18.9489 3 18.75V6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 6L12 14.25L3 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_email">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.75)"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="about-image-section">
          <div className="about-image-container">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/27fe207567070289cc354806f6b5899d89a76b47?width=1081" 
              alt="Sam Crawford giving speech" 
              className="about-image"
            />
          </div>
          
          <div className="stats-overlay">
            <div className="stat-item">
              <div className="stat-number">450+</div>
              <div className="stat-label">Successful Websites</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">05</div>
              <div className="stat-label">Awards Won</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
