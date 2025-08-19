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
            <a href="#" className="social-link" aria-label="Behance">
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
            
            <a href="#" className="social-link" aria-label="Dribbble">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_dribbble)">
                  <path d="M12 21.3105C16.9706 21.3105 21 17.2811 21 12.3105C21 7.33999 16.9706 3.31055 12 3.31055C7.02944 3.31055 3 7.33999 3 12.3105C3 17.2811 7.02944 21.3105 12 21.3105Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.65625 19.5546C7.99157 17.3428 9.87573 15.5137 12.126 14.2445C14.3764 12.9753 16.9164 12.3091 19.5 12.3105C20.0053 12.3105 20.5059 12.3358 21 12.3846" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.6244 5.28906C16.2193 7.01611 14.4467 8.40803 12.4356 9.36343C10.4246 10.3188 8.22581 10.8136 5.99937 10.8119C5.05061 10.8121 4.10391 10.7229 3.17188 10.5456" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.05469 4.21875C10.3104 5.54193 12.1807 7.43213 13.4799 9.70167C14.7791 11.9712 15.4621 14.5411 15.4609 17.1562C15.4618 18.3816 15.3128 19.6026 15.0175 20.7919" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_dribbble">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.310547)"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            
            <a href="#" className="social-link" aria-label="LinkedIn">
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
            
            <a href="#" className="social-link" aria-label="YouTube">
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1875 16.5605C29.1875 16.5605 29 15.248 28.4375 14.6855C27.75 13.9355 26.9375 13.9355 26.5625 13.873C23.9375 13.6855 20 13.6855 20 13.6855C20 13.6855 16.0625 13.6855 13.4375 13.873C13.0625 13.9355 12.25 13.9355 11.5625 14.6855C11 15.248 10.8125 16.5605 10.8125 16.5605C10.8125 16.5605 10.625 18.0605 10.625 19.623V21.0605C10.625 22.5605 10.8125 24.123 10.8125 24.123C10.8125 24.123 11 25.4355 11.5625 25.998C12.25 26.748 13.1875 26.748 13.625 26.8105C15.125 26.9355 20 26.998 20 26.998C20 26.998 23.9375 26.998 26.5625 26.8105C26.9375 26.748 27.75 26.748 28.4375 25.998C29 25.4355 29.1875 24.123 29.1875 24.123C29.1875 24.123 29.375 22.623 29.375 21.0605V19.623C29.375 18.0605 29.1875 16.5605 29.1875 16.5605ZM18.0625 22.748V17.498L23.125 20.123L18.0625 22.748Z" fill="white"/>
              </svg>
            </a>
            
            <a href="#" className="social-link" aria-label="Email">
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
