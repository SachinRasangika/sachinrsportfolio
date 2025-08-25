import React from 'react';
import './Portfolio.css';
import { useNavigate } from 'react-router-dom';

import p1 from "../../assets/images/frame94.png";
import p2 from "../../assets/images/redesignview.png";
import p3 from "../../assets/images/wvw.png";
import saralImage from "../../assets/images/saral.png";
import project4Image from "../../assets/images/screencapture-localhost-3000-2024-12-08-03_31_59.png";
import fit4LifeImage from "../../assets/images/fit4life.png";
import taurgoImage from "../../assets/images/taurgo.png";

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    { id: 1, title: "Water Villa World", category: "Travel", image: p3 },
    { id: 2, title: "Web Design & Development", category: "Non-profit", image: p2 },
    { id: 3, title: "Saral.edu UI Design", category: "Education", image: saralImage },
    { id: 4, title: "Water World Kelaniya", category: "Homepage Recreation", image: project4Image },
    { id: 5, title: "Fit4Life Fitness Tracker", category: "Web App", image: fit4LifeImage },
    { id: 6, title: "Taurgo SaaS Platform", category: "SaaS", image: taurgoImage },
  ];

  const handleProjectClick = (project) => {
    navigate('/project-view', { state: { project } });
  };

  return (
    <section className="portfolio" id="projects">
      <div className="portfolio-background">
        <div className="portfolio-content">
          <div className="portfolio-header">
            <div className="portfolio-tag">
              <div className="tag-dot"></div>
              <span>Sachin Silva's Latest Work</span>
            </div>
            <h2 className="portfolio-title">
              Building Websites That Make an Impact
            </h2>
          </div>

          <div className="portfolio-description-container">
            <p className="portfolio-description">
              Explore my recent projects where I focus on user-friendly designs, creative interfaces, and functional web experiences. 
            </p>
          </div>
        </div>

        <div className="portfolio-carousel">
          <div className="portfolio-projects">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  {project.category && <div className="project-category">{project.category}</div>}
                  <div className="project-title">{project.title}</div>
                  <button 
                    className="project-link-btn" 
                    onClick={() => handleProjectClick(project)}
                    aria-label={`View ${project.title} project`}
                  >
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 8.18994H13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12.6899L13.5 8.18994L9 3.68994" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                <div className="project-image-container">
                  <img src={project.image} alt={`${project.title} website project`} className="project-image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
