import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Trident LLC",
      category: "",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2a8d50a03d35a9a6dfa1f855b1be7499b82a84d9?width=1312",
      link: "#"
    },
    {
      id: 2,
      title: "Cents",
      category: "SaaS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f8ce915f870c5c1b1abfd0d007a196596ae574b2?width=1312",
      link: "#"
    },
    {
      id: 3,
      title: "Prova Health",
      category: "Medical",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7e0bcc28f62e3f27962c1ede8869c23ff6f0014f?width=1312",
      link: "#"
    }
  ];

  return (
    <section className="portfolio">
      <div className="portfolio-background">
        <div className="portfolio-content">
          <div className="portfolio-header">
            <div className="portfolio-tag">
              <div className="tag-dot"></div>
              <span>Sam Crawford's Latest Work</span>
            </div>
            
            <h2 className="portfolio-title">
              Building Websites That Drive Results
            </h2>
          </div>
          
          <div className="portfolio-description-container">
            <p className="portfolio-description">
              Want a Squarespace website that converts visitors into loyal customers? Explore my portfolio to see 
              how I've turned visions into vibrant realities. From sleek e-commerce sites to engaging portfolios, my 
              designs are crafted to meet your thriving business needs and stand out in the digital landscape.
            </p>
            
            <button className="view-all-btn">
              View all work
            </button>
          </div>
        </div>
        
        <div className="portfolio-carousel">
          <div className="portfolio-projects">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  {project.category && (
                    <div className="project-category">
                      {project.category}
                    </div>
                  )}
                  <div className="project-title">
                    {project.title}
                  </div>
                  <button className="project-link-btn" aria-label={`View ${project.title} project`}>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 8.18994H13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12.6899L13.5 8.18994L9 3.68994" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={`${project.title} website project`}
                    className="project-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="portfolio-bottom-section">
        {/* Bottom white section for spacing */}
      </div>
    </section>
  );
};

export default Portfolio;
