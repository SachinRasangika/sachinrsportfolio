import React from 'react';
import './Footer.css';

const Footer = () => {
  const exploreLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Me', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Book a call', href: '#' }
  ];

  const resourceLinks = [
    { label: 'Blog', href: '#' },
    { label: 'Videos', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-cta">
            <h2 className="footer-title">
              Got a project in mind?
            </h2>
            
            <button className="footer-cta-btn">
              <span>Schedule a call</span>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.24927 12.0887L12.0274 4.31055" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.0265 10.6745V4.31055H5.6626" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="footer-navigation">
            <div className="footer-nav-section">
              <h3 className="nav-section-title">Explore</h3>
              <ul className="nav-links">
                {exploreLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-nav-section">
              <h3 className="nav-section-title">Resources</h3>
              <ul className="nav-links">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© bycrawford.com. All rights reserved.</p>
          </div>
          
          <div className="footer-social">
            <a href="https://www.behance.net/sanchezii" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Behance">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_behance)">
                  <path d="M15.75 7.81055H21.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 11.9355H8.8125C9.65788 11.9355 10.4686 12.2713 11.0664 12.8691C11.6642 13.4669 12 14.2776 12 15.123C12 15.9684 11.6642 16.7791 11.0664 17.3769C10.4686 17.9747 9.65788 18.3105 8.8125 18.3105H3V6.31055H8.4375C9.18342 6.31055 9.89879 6.60687 10.4262 7.13431C10.9537 7.66176 11.25 8.37713 11.25 9.12305C11.25 9.86897 10.9537 10.5843 10.4262 11.1117C9.89879 11.6392 9.18342 11.9355 8.4375 11.9355" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.75 16.8106C21.2157 17.523 20.4454 18.022 19.5769 18.2183C18.7084 18.4147 17.7983 18.2955 17.0096 17.8823C16.2209 17.469 15.6049 16.7886 15.272 15.9627C14.9391 15.1369 14.9109 14.2195 15.1924 13.3748C15.474 12.53 16.047 11.813 16.8089 11.3521C17.5707 10.8912 18.4717 10.7164 19.3507 10.859C20.2296 11.0017 21.0291 11.4524 21.6061 12.1306C22.1831 12.8088 22.5 13.6702 22.5 14.5606H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_behance">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.310547)"/>
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/sachin-rasangika-94338a191/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_linkedin)">
                  <path d="M20.25 3.31055H3.75C3.33579 3.31055 3 3.64634 3 4.06055V20.5605C3 20.9747 3.33579 21.3105 3.75 21.3105H20.25C20.6642 21.3105 21 20.9747 21 20.5605V4.06055C21 3.64634 20.6642 3.31055 20.25 3.31055Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.25 10.8105V16.8105" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.25 10.8105V16.8105" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.25 13.4355C11.25 12.7393 11.5266 12.0716 12.0188 11.5793C12.5111 11.0871 13.1788 10.8105 13.875 10.8105C14.5712 10.8105 15.2389 11.0871 15.7312 11.5793C16.2234 12.0716 16.5 12.7393 16.5 13.4355V16.8105" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8.25" cy="8.18555" r="1.125" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_linkedin">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.310547)"/>
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
                  <path d="M3 5.56055H21V18.3105C21 18.5094 20.921 18.7002 20.7803 18.8408C20.6397 18.9815 20.4489 19.0605 20.25 19.0605H3.75C3.55109 19.0605 3.36032 18.9815 3.21967 18.8408C3.07902 18.7002 3 18.5094 3 18.3105V5.56055Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 5.56055L12 13.8105L3 5.56055" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_email">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.310547)"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-logo">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/12ea76c969ed39dbe7a6c27a1d38843962e584c6?width=2720" 
            alt="by Crawford Logo" 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
