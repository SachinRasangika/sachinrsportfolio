import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'custom-design',
      icon: '/api/builder.io/api/v1/image/assets/TEMP/b68b0a40abfc9a79c7309eadc7681593207fca3b',
      title: 'Custom\nWebsite Design',
      description: 'Catering to all industries, from',
      links: ['churches', 'real estate agents', 'medical companies', 'law firms'],
      extendedDescription: 'ensuring your website reflects your unique brand.',
      details: 'Specializing in custom website design and Squarespace custom website designing, I create bespoke sites that capture your brand and convert visitors into customers.',
      image: '/api/builder.io/api/v1/image/assets/TEMP/01d4c2cff303006793d6858ca11299c465c394fe',
      size: 'large'
    },
    {
      id: 'no-code',
      icon: '/api/builder.io/api/v1/image/assets/TEMP/797ad9a7a362110150aa8f13d45b8e977a92bce3',
      title: 'No-Code,\nHassle-Free Design',
      description: 'Enjoy exceptional design without the need for complex code, saving you time and money on maintenance.',
      details: 'Professional no-code website design using Squarespace\'s intuitive platform. Get stunning, hassle-free websites without technical complexity or ongoing maintenance headaches.',
      image: '/api/builder.io/api/v1/image/assets/TEMP/d87c92a9f9f84e0ed9ad7ff0694b9b42583ff291',
      size: 'medium'
    },
    {
      id: 'coding-support',
      icon: '/api/builder.io/api/v1/image/assets/TEMP/297d4555377111cd525cefb82f0595bacb4f7a7b',
      title: 'Coding\nSupport',
      description: 'Need something unique? I offer custom coding services to push the boundaries of what\'s possible on Squarespace.',
      details: 'Custom code Squarespace expertise, and tailored code support service. I create unique website functionality through advanced coding that exceeds platform limitations.',
      size: 'small'
    },
    {
      id: 'course-platforms',
      icon: '/api/builder.io/api/v1/image/assets/TEMP/ce5f58012bc4dfd86951efdc7940dd2f71c7a3e3',
      title: 'Online Course\nPlatforms',
      description: 'Want to monetize your expertise? I can help you set up a course platform to share your knowledge and generate income.',
      details: 'As a leading Squarespace web designer UK, I specialize in Squarespace online course design and custom Squarespace course website development for educational entrepreneurs.',
      size: 'small'
    },
    {
      id: 'accessibility',
      icon: '/api/builder.io/api/v1/image/assets/TEMP/11575fa14eb9272179918acb511b1b34b8109e73',
      title: 'Accessibility\nAudits',
      description: 'Make sure your site is accessible to everyone. I can conduct an accessibility audit to ensure compliance.',
      details: 'Professional website accessibility audits and compliance assessments. Ensure your Squarespace site meets WCAG standards, creating inclusive experiences for all users.',
      size: 'small'
    },
    {
      id: 'migration',
      icon: '/api/builder.io/api/v1/image/assets/TEMP/21c7f4c133d105c7b5889f00faafedc6da2be03f',
      title: 'Website\nMigration',
      description: 'Switching platforms? I\'ll ensure a smooth transition to Squarespace, making the process effortless for you.',
      details: 'Specialized website migration service for migrate WordPress to Squarespace projects. Professional migration of website content, design, and functionality without complications.',
      image: '/api/builder.io/api/v1/image/assets/TEMP/18758504e4d8f5e681e36887f91b31efd6d92091',
      size: 'medium'
    },
    {
      id: 'management',
      icon: '/api/builder.io/api/v1/image/assets/TEMP/336074993f73c7852f06d7f548918a1c163d4b6e',
      title: 'Website\nManagement',
      description: 'Even though Squarespace minimises maintenance, I\'m here to help if you need support with updates or changes.',
      details: 'Professional website management services and Squarespace website maintenance. Comprehensive website management service, including updates, changes, and ongoing technical support.',
      image: '/api/builder.io/api/v1/image/assets/TEMP/e1ad1c12327593dedce2a47412841da3e6341d05',
      size: 'large'
    },
    {
      id: 'ecommerce',
      icon: '/api/builder.io/api/v1/image/assets/TEMP/d025a524a8e1d16e059f14ca0e62c47bbcfab6e6',
      title: 'E-Commerce\nSolutions',
      description: 'Ready to sell online? I\'ll set up your Squarespace ecommerce store, so you can reach customers globally.',
      details: 'Expert Squarespace ecommerce and ecommerce web design services. Trusted ecommerce website designers creating powerful ecommerce website design solutions for global reach.',
      image: '/api/builder.io/api/v1/image/assets/TEMP/2f589be510173762459841321baf766ebbbc4fc7',
      size: 'large'
    },
    {
      id: 'seo',
      icon: '/api/builder.io/api/v1/image/assets/TEMP/742c218b2c90493ca4b34b3aa3d772078f51a98c',
      title: 'SEO\nOptimization',
      description: 'A beautiful website is useless if it\'s not found. I lay the groundwork for your site to shine on Google with effective search engine optimization.',
      details: 'Specialized SEO optimization for Squarespace and website SEO optimization solutions. Comprehensive search engine optimization Squarespace strategies for maximum online visibility.',
      image: '/api/builder.io/api/v1/image/assets/TEMP/ff1fc85c308c0774ed975d83fc7631aa5ac66191',
      size: 'medium'
    }
  ];

  const handleScheduleCall = () => {
    const phoneNumber = '+94774698175';
    const message = 'Hi! I would like to explore your services and discuss my project.';
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
            <span>Our services</span>
          </div>
          
          <div className="services-header-content">
            <h2 className="services-title">
              Want to save time and money by working with a Squarespace expert?
            </h2>
            
            <p className="services-description">
              Our services can be purchased individually or bundled together for a comprehensive solution. 
              This flexibility allows you to get exactly what you need, without paying for features you don't.
            </p>
            
            <button className="explore-services-btn" onClick={handleScheduleCall}>
              <span>Explore services</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${service.size}`}>
              <div className="service-card-background"></div>
              
              <div className="service-content">
                <div className="service-icon">
                  <img src={service.icon} alt={`${service.title} icon`} />
                </div>
                
                <h3 className="service-title">
                  {service.title.split('\n').map((line, index) => (
                    <span key={index} className="title-line">
                      {line}
                      {index < service.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                
                <div className="service-description">
                  {service.id === 'custom-design' ? (
                    <p>
                      {service.description}{' '}
                      {service.links?.map((link, index) => (
                        <span key={index}>
                          <a href="#" className="service-link">{link}</a>
                          {index < service.links.length - 1 && ', '}
                          {index === service.links.length - 2 && ' to '}
                        </span>
                      ))}
                      {service.extendedDescription && `, ${service.extendedDescription}`}
                    </p>
                  ) : (
                    <p>{service.description}</p>
                  )}
                </div>
                
                <p className="service-details">{service.details}</p>
                
                <a href="#" className="service-learn-more">Learn more</a>
              </div>
              
              {service.image && (
                <div className="service-image">
                  <img src={service.image} alt={`${service.title} example`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
