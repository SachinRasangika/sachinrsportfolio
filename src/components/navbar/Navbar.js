import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeAnnouncement = () => {
    setIsAnnouncementVisible(false);
  };

  const handleScheduleCall = () => {
    const phoneNumber = '+94774698175';
    const message = 'Hi! I would like to schedule a call to discuss my project.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNavigation = (sectionId) => {
    setIsMobileMenuOpen(false);

    // If we're on the project view page, navigate back to main page first
    if (location.pathname === '/project-view') {
      navigate('/');
      // Wait for the page to load before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // If we're already on the main page, just scroll to the section
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if navbar is over hero section
      const heroSection = document.querySelector('.hero');
      let shouldBeDark = true; // Default to dark mode

      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const navHeight = 120; // Approximate navbar height
        // Only show glass effect when over hero section
        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          shouldBeDark = false; // Glass effect on hero
        }
      }

      setIsDarkMode(shouldBeDark);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isDarkMode ? 'header-dark' : ''}`}>
      {isAnnouncementVisible && (
        <div className="announcement-bar">
          <div className="announcement-content">
            <div className="announcement-indicator"></div>
            <span className="announcement-text">Looking for new opportunity</span>
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
              src={logo}
              alt="Sachinrs Logo" 
            />
          </div>
          
          <div className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
            <button className="nav-link" onClick={() => handleNavigation('home')}>Home</button>
            <button className="nav-link" onClick={() => handleNavigation('about')}>About</button>
            <button className="nav-link" onClick={() => handleNavigation('projects')}>Projects</button>
            <button className="nav-link" onClick={() => handleNavigation('contact')}>Contact</button>
          </div>

          <div className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </div>
          
          <div className="nav-actions">
            <button className="schedule-call-btn" onClick={handleScheduleCall}>
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
