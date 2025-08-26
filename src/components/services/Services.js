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
      image: 'https://media.licdn.com/dms/image/v2/D562DAQHzYGqiCwa1Lw/profile-treasury-image-shrink_800_800/B56ZbgeuX.HgAc-/0/1747522881571?e=1756774800&v=beta&t=rO_kTiIVW4l_F03rluAsEoOCi7Qf0PSJdXiLDEsKG_4',
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
      id: 'education-sliit-diploma',
      icon: <FiBook />,
      title: 'SLIIT City Uni',
      description: 'Computing and Information Technology Higher Diploma',
      details: 'Completed',
      image: 'https://sliitcityuni.lk/wp-content/uploads/2025/07/sliit-city-uni.png',
      size: 'medium'
    },
    {
      id: 'achievement-nasa',
      icon: <FiAward />,
      title: 'NASA Space Apps',
      description: 'Global Connection Award 2021',
      image: 'https://media.licdn.com/dms/image/v2/D562DAQEIdV6Sj8RqYg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720363597855?e=1756778400&v=beta&t=EdDpiA6kbZ2salpkiDKpBLrD44yPa_dvwCcCl6r7nls',
      size: 'small'
    },
    {
      id: 'achievement-designthon-2021',
      icon: <FiAward />,
      title: 'Designthon 2021',
      description: 'Top 10 Finalist - Merit Award',
      image: 'https://media.licdn.com/dms/image/v2/D562DAQEy1f0Sy-AuyQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1720387511103?e=1756778400&v=beta&t=CNJr_dGHubId6tqCTFp3c5pW70UUgC7hiwordRTQI_8',
      size: 'small'
    },
    {
      id: 'achievement-designthon-2020',
      icon: <FiAward />,
      title: 'Designthon 2020 - Merit Award',
      description: 'Top 10 Finalist',
      image: 'https://media.licdn.com/dms/image/v2/D562DAQFY5vIgXH4eXA/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1720387767379?e=1756778400&v=beta&t=Q_rmensoXw6FC-nX3y68XLINyrBxfPsTMlLM3Q8mVAU',
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

                {service.image && (
                  <div className="service-hover-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
