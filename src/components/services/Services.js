import React from 'react';
import { FiUser, FiBook, FiAward, FiBriefcase } from 'react-icons/fi'; // Import needed icons
import './Services.css';

const Services = () => {
  const services = [
    // ================= BENTO GRID CARDS =================
    // Large Card (Main Feature)
    {
      id: 'experience-hashbaze',
      icon: <FiBriefcase />,
      title: 'Current Role: UI/UX Engineer Intern',
      description: 'HashBaze • Mar 2025 – Present',
      details: 'Designing intuitive interfaces, collaborating with product teams to improve user flows, and implementing design solutions that enhance platform usability and user satisfaction.',
      size: 'large'
    },

    // Medium Cards
    {
      id: 'experience-taurgo',
      icon: <FiBriefcase />,
      title: 'Previous Experience',
      description: 'Taurgo • UI/UX Designer Intern',
      details: 'Aug 2024 – Feb 2025: Led responsive web component design, streamlined UX for multiple projects, and contributed to design system improvements.',
      size: 'medium'
    },
    {
      id: 'education-overview',
      icon: <FiBook />,
      title: 'Education Journey',
      description: 'Academic Background & Learning Path',
      details: 'Currently pursuing B.Sc. (Hons) in Computer Science at SLIIT, with strong foundation in design and technology.',
      size: 'medium'
    },

    // Small Cards
    {
      id: 'education-sliit',
      icon: <FiBook />,
      title: 'SLIIT City Campus',
      description: 'B.Sc. Computer Science & Software Engineering',
      details: '2024 – Expected',
      size: 'small'
    },
    {
      id: 'achievement-nasa',
      icon: <FiAward />,
      title: 'NASA Space Apps',
      description: 'Global Connection Award 2021',
      size: 'small'
    },
    {
      id: 'achievement-designthon-2021',
      icon: <FiAward />,
      title: 'Designthon 2021',
      description: 'Top 10 Finalist',
      size: 'small'
    },
    {
      id: 'achievement-designthon-2020',
      icon: <FiAward />,
      title: 'Designthon 2020',
      description: 'Top 10 Finalist',
      size: 'small'
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
