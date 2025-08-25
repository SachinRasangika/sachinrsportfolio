import React from 'react';
import { FiUser, FiBook, FiAward, FiBriefcase } from 'react-icons/fi'; // Import needed icons
import './Services.css';

const Services = () => {
  const services = [
    // ================= BENTO GRID CARDS =================
    // Large Card
    {
      id: 'experience-hashbaze',
      icon: <FiBriefcase />,
      title: 'HashBaze · UI/UX Engineer Intern',
      description: 'Mar 2025 – Present',
      details: 'Designed intuitive interfaces, collaborated with product teams to improve user flows, and implemented design solutions that enhanced platform usability.',
      size: 'large'
    },

    // Medium Cards
    {
      id: 'experience-taurgo',
      icon: <FiBriefcase />,
      title: 'Taurgo · UI/UX Designer Intern',
      description: 'Aug 2024 – Feb 2025',
      details: 'Led the design of responsive web components, streamlined the user experience for multiple projects, and contributed to design system improvements for consistency across products.',
      size: 'medium'
    },
    {
      id: 'achievement-designthon-2021',
      icon: <FiAward />,
      title: 'Designthon Challenge',
      description: 'Top 10 (2021)',
      size: 'medium'
    },

    // Small Cards
    {
      id: 'education-sliit',
      icon: <FiBook />,
      title: 'SLIIT City Campus',
      description: 'B.Sc. (Hons) in Computer Science and Software Engineering – University of Bedfordshire',
      details: '2024 – Expected',
      size: 'small'
    },
    {
      id: 'education-dharmasoka',
      icon: <FiBook />,
      title: 'G/Dharmasoka College',
      description: 'G.C.E. Advanced Level – Commerce Stream',
      details: '2017',
      size: 'small'
    },
    {
      id: 'achievement-nasa',
      icon: <FiAward />,
      title: 'NASA Space Apps Challenge',
      description: 'Global Connection Award (2021)',
      size: 'small'
    },
    {
      id: 'achievement-designthon-2020',
      icon: <FiAward />,
      title: 'Designthon Challenge',
      description: 'Top 10 (2020)',
      size: 'small'
    },

    // Common Card
    {
      id: 'common-portfolio',
      icon: <FiUser />,
      title: 'Portfolio Overview',
      description: 'A complete snapshot of my journey, skills, and recognitions, all in one place.',
      size: 'medium'
    }
  ];

  const handleScheduleCall = () => {
    const phoneNumber = '+94774698175';
    const message = 'Hi! I would like to explore your portfolio and discuss your experience.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
          <div className="services-tag">
            <div className="tag-dot"></div>
            <span>Portfolio Highlights</span>
          </div>

          <div className="services-header-content">
            <h2 className="services-title">
              My Education, Experience & Achievements
            </h2>

            <p className="services-description">
              A snapshot of my academic journey, professional experience, and recognitions—organized in a balanced bento-style layout.
            </p>

            <button className="explore-services-btn" onClick={handleScheduleCall}>
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Bento-style Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${service.size}`}>
              <div className="service-card-background"></div>

              <div className="service-content">
                <div className="service-icon">
                  {service.icon}
                </div>

                <h3 className="service-title">{service.title}</h3>

                <div className="service-description">
                  <p>{service.description}</p>
                </div>

                {service.details && <p className="service-details">{service.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
