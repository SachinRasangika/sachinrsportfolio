import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const closeAnnouncement = () => {
    setIsAnnouncementVisible(false);
  };

  return (
    <header className="header">
      {isAnnouncementVisible && (
        <div className="announcement-bar">
          <div className="announcement-content">
            <div className="announcement-indicator"></div>
            <span className="announcement-text">Looking for a new Squarespace website?</span>
            <div className="announcement-cta">
              <span className="cta-text">Get in touch now</span>
            </div>
          </div>
          <button className="close-announcement" onClick={closeAnnouncement}>
            ×
          </button>
          <div className="announcement-divider"></div>
        </div>
      )}
      
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7e30e0bc9c4466f8e0fae9877d487f43c1d53067?width=223" 
              alt="by Crawford" 
            />
          </div>
          
          <div className="nav-menu">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">About</a>
            
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="nav-dropdown-trigger">
                <span>Services</span>
                <svg width="10" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.0435 3.47497C9.02201 3.42305 8.9856 3.37868 8.9389 3.34745C8.89219 3.31623 8.83726 3.29955 8.78108 3.29955H3.09926C3.04303 3.2995 2.98807 3.31614 2.9413 3.34735C2.89455 3.37856 2.8581 3.42295 2.83658 3.47489C2.81506 3.52683 2.80943 3.58398 2.82041 3.63912C2.8314 3.69425 2.85849 3.7449 2.89826 3.78463L5.73917 6.62554C5.76556 6.65195 5.79689 6.67291 5.83138 6.68721C5.86586 6.7015 5.90283 6.70886 5.94017 6.70886C5.9775 6.70886 6.01447 6.7015 6.04896 6.68721C6.08344 6.67291 6.11478 6.65195 6.14116 6.62554L8.98207 3.78463C9.02179 3.74488 9.04882 3.69424 9.05976 3.63912C9.0707 3.584 9.06503 3.52687 9.0435 3.47497Z" fill="white"/>
                </svg>
              </button>
              {isServicesOpen && (
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-link">Web Design</a>
                  <a href="#" className="dropdown-link">Development</a>
                  <a href="#" className="dropdown-link">Consulting</a>
                </div>
              )}
            </div>
            
            <a href="#" className="nav-link">Portfolio</a>
            
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="nav-dropdown-trigger">
                <span>Resources</span>
                <svg width="10" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.80376 3.47497C8.78227 3.42305 8.74586 3.37868 8.69915 3.34745C8.65244 3.31623 8.59751 3.29955 8.54133 3.29955H2.85951C2.80329 3.2995 2.74832 3.31614 2.70156 3.34735C2.6548 3.37856 2.61835 3.42295 2.59683 3.47489C2.57531 3.52683 2.56969 3.58398 2.58067 3.63912C2.59165 3.69425 2.61874 3.7449 2.65851 3.78463L5.49942 6.62554C5.52581 6.65195 5.55714 6.67291 5.59163 6.68721C5.62611 6.7015 5.66309 6.70886 5.70042 6.70886C5.73775 6.70886 5.77472 6.7015 5.80921 6.68721C5.84369 6.67291 5.87503 6.65195 5.90141 6.62554L8.74232 3.78463C8.78204 3.74488 8.80908 3.69424 8.82001 3.63912C8.83095 3.584 8.82529 3.52687 8.80376 3.47497Z" fill="white"/>
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-link">Blog</a>
                  <a href="#" className="dropdown-link">Templates</a>
                  <a href="#" className="dropdown-link">Guides</a>
                </div>
              )}
            </div>
            
            <a href="#" className="nav-link">Contact</a>
          </div>
          
          <div className="nav-actions">
            <button className="schedule-call-btn">
              <span>Schedule a call</span>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.10938 12.6087L11.8875 4.83051" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.8869 11.1946V4.83066H5.52295" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
