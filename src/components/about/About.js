import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-tag">
            <div className="tag-dot"></div>
            <span>Who am I?</span>
          </div>
          
                <h2 className="about-title">
            Meet Sachin Silva - UI/UX Designer & Web Developer
          </h2>
          
          <div className="about-description">
            <p>
              I am a creative UI/UX designer with a strong foundation in user-centered design and visual storytelling. 
              Experienced in designing intuitive, high-performing digital products from concept to prototype, I bridge 
              the gap between design and implementation with my full-stack development knowledge.
            </p>
            
            <p>
              Skilled in <strong>User Research, Personas, Wireframing & Prototyping (Figma), Usability Testing, Analysis, 
              Design Systems, and UI Kits</strong>, I also ensure accessibility and responsive design across all projects. 
              My development toolkit includes <strong>HTML, CSS, JavaScript, React, Bootstrap, TailwindCSS, MySQL, and MongoDB</strong>.
            </p>
            
            <p>
              I have contributed to projects like AI Integration Platforms, SaaS Platform Improvements, and luxury 
              Water Villa booking engines, enhancing usability and creating engaging, user-friendly experiences. 
              <a href="#" className="text-link">Contact me</a> to collaborate on your next digital product!
            </p>
          </div>
          
          <div className="social-links">
            <a href="https://www.behance.net/sanchezii" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Behance">
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

            <a href="https://www.linkedin.com/in/sachin-rasangika-94338a191/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
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

            <a href="https://github.com/SachinRasangika" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.25C5.925 1.25 1 6.175 1 12.25C1 17.1 4.175 21.175 8.538 22.688C9.037 22.775 9.225 22.463 9.225 22.188V20.325C6.162 20.95 5.537 18.775 5.537 18.775C5.088 17.538 4.387 17.225 4.387 17.225C3.412 16.575 4.462 16.588 4.462 16.588C5.537 16.663 6.112 17.663 6.112 17.663C7.062 19.25 8.625 18.775 9.262 18.513C9.35 17.825 9.637 17.35 9.95 17.1C7.613 16.85 5.15 15.95 5.15 11.663C5.15 10.513 5.538 9.575 6.125 8.85C6.025 8.6 5.65 7.538 6.225 6.088C6.225 6.088 7.125 5.813 9.225 7.163C10.088 6.938 11.05 6.825 12 6.825C12.95 6.825 13.912 6.938 14.775 7.163C16.875 5.8 17.775 6.088 17.775 6.088C18.35 7.525 17.975 8.6 17.875 8.85C18.463 9.575 18.85 10.513 18.85 11.663C18.85 15.963 16.375 16.85 14.025 17.1C14.425 17.438 14.775 18.1 14.775 19.125V22.188C14.775 22.463 14.963 22.788 15.475 22.688C19.825 21.163 23 17.1 23 12.25C23 6.175 18.075 1.25 12 1.25Z" fill="white"/>
              </svg>
            </a>

            <a href="https://www.facebook.com/share/1AY2um7oZo/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.5C24 6.20101 18.627 1.07397 12 1.07397C5.373 1.07397 0 6.20101 0 12.5C0 18.126 4.388 22.674 10.125 23.676V15.984H7.078V12.5H10.125V9.85699C10.125 6.87201 11.917 5.20801 14.658 5.20801C15.97 5.20801 17.344 5.45001 17.344 5.45001V8.42999H15.83C14.34 8.42999 13.875 9.35098 13.875 10.297V12.5H17.203L16.671 15.984H13.875V23.676C19.612 22.674 24 18.126 24 12.5Z" fill="white"/>
              </svg>
            </a>

            <a href="https://www.instagram.com/sanchez.98__?igsh=Nms3ODhhd3doc2cz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8.66699C10.159 8.66699 8.667 10.159 8.667 12C8.667 13.841 10.159 15.333 12 15.333C13.841 15.333 15.333 13.841 15.333 12C15.333 10.159 13.841 8.66699 12 8.66699ZM21.75 12C21.75 10.6755 21.762 9.36299 21.687 8.04149C21.612 6.52649 21.279 5.19599 20.205 4.12199C19.128 3.04499 17.8005 2.71499 16.2855 2.63999C14.961 2.56499 13.6485 2.57699 12.327 2.57699C10.9995 2.57699 9.687 2.56499 8.36549 2.63999C6.85049 2.71499 5.51999 3.04799 4.44599 4.12199C3.36899 5.19899 3.03899 6.52649 2.96399 8.04149C2.88899 9.36599 2.90099 10.6785 2.90099 12C2.90099 13.3215 2.88899 14.637 2.96399 15.9585C3.03899 17.4735 3.37199 18.804 4.44599 19.878C5.52299 20.955 6.85049 21.285 8.36549 21.36C9.68999 21.435 11.0025 21.423 12.324 21.423C13.6515 21.423 14.964 21.435 16.2855 21.36C17.8005 21.285 19.131 20.952 20.205 19.878C21.282 18.801 21.612 17.4735 21.687 15.9585C21.765 14.637 21.75 13.3245 21.75 12ZM12 16.833C9.33149 16.833 7.16699 14.6685 7.16699 12C7.16699 9.33149 9.33149 7.16699 12 7.16699C14.6685 7.16699 16.833 9.33149 16.833 12C16.833 14.6685 14.6685 16.833 12 16.833ZM17.004 8.02499C16.3515 8.02499 15.825 7.49849 15.825 6.84599C15.825 6.19349 16.3515 5.66699 17.004 5.66699C17.6565 5.66699 18.183 6.19349 18.183 6.84599C18.1832 7.00069 18.1531 7.15395 18.0943 7.29698C18.0355 7.44001 17.9491 7.56995 17.8395 7.67959C17.7299 7.78923 17.5999 7.87564 17.4569 7.93445C17.3139 7.99326 17.1606 8.02334 17.006 8.02349L17.004 8.02499Z" fill="white"/>
              </svg>
            </a>

            <a href="mailto:sachinrasangika@gmail.com" className="social-link" aria-label="Email">
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
              src="https://media.licdn.com/dms/image/v2/D5603AQHVUP6mZ6Jy9A/profile-displayphoto-shrink_800_800/B56ZWaLrnwGQAc-/0/1742048508821?e=1758758400&v=beta&t=YOS5ZBJ7IfFsFN9DQlU8wt-xaJqAkHLnMRh0Sxqsqtc" 
              alt="Sam Crawford giving speech" 
              className="about-image"
            />
          </div>
          
          <div className="stats-overlay">
            <div className="stat-item">
              <div className="stat-number">15+</div>
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
