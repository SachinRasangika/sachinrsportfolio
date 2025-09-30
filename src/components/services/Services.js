import { useState, useEffect } from 'react';
import { FiBook, FiAward, FiBriefcase } from 'react-icons/fi'; // Import needed icons
import './Services.css';
import imgHashbaze from '../../assets/Hashbaze.JPG';
import imgTaurgo from '../../assets/taurgo.png';
import imgGlobal from '../../assets/GlobalConnectionAward.jpeg';
import imgCF2021 from '../../assets/CODEFEST2021.jpeg';
import imgCF2020 from '../../assets/CODEFEST2020.jpeg';

const Services = () => {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox({ open: false, src: '', alt: '' }); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: '', alt: '' });

  const services = [
    // ================= BENTO GRID CARDS =================
    // Large Card (Main Feature)
    {
      id: 'experience-hashbaze',
      icon: <FiBriefcase />,
      title: 'Current Role: UI/UX Engineer Intern',
      description: 'HashBaze • Mar 2025 – Present',
      details: 'Designing intuitive interfaces, collaborating with product teams to improve user flows, and implementing design solutions that enhance platform usability and user satisfaction.',
      image: imgHashbaze,
      size: 'large'
    },

    // Medium Cards
    {
      id: 'experience-taurgo',
      icon: <FiBriefcase />,
      title: 'Previous Experience',
      description: 'Taurgo • UI/UX Designer Intern',
      details: 'Aug 2024 – Feb 2025: Led responsive web component design, streamlined UX for multiple projects, and contributed to design system improvements.',
      image: imgTaurgo,
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
      image: imgGlobal,
      size: 'small'
    },
    {
      id: 'achievement-designthon-2021',
      icon: <FiAward />,
      title: 'Designthon 2021',
      description: 'Top 10 Finalist - Merit Award',
      image: imgCF2021,
      size: 'small'
    },
    {
      id: 'achievement-designthon-2020',
      icon: <FiAward />,
      title: 'Designthon 2020 - Merit Award',
      description: 'Top 10 Finalist',
      image: imgCF2020,
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
                  <div className="service-hover-image" onClick={() => openLightbox(service.image, service.title)} role="button" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') openLightbox(service.image, service.title); }}>
                    <img src={service.image} alt={service.title} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox.open && (
        <div className="services-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="services-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="services-lightbox-close" onClick={closeLightbox} aria-label="Close image">×</button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <div className="services-lightbox-caption">{lightbox.alt}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
