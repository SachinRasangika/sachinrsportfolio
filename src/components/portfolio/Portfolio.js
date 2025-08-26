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
    {
      id: 1,
      title: "Water Villa World",
      category: "Travel",
      image: p3,
      description: "A comprehensive travel booking platform designed for luxury water villa accommodations. This project focuses on creating an immersive user experience that showcases premium destinations with stunning visuals and intuitive booking functionality. The design emphasizes the serene and luxurious nature of water villas while maintaining excellent usability across all devices.",
      client: "Water Villa Resorts",
      date: "December 2024",
      technologies: "React, Node.js, MongoDB, Stripe API"
    },
    {
      id: 2,
      title: "Web Design & Development",
      category: "Non-profit",
      image: p2,
      description: "A complete website redesign for a non-profit organization focused on community outreach and social impact. The project involved creating a modern, accessible design that effectively communicates the organization's mission while making it easy for visitors to get involved and donate. Special attention was given to mobile responsiveness and loading performance.",
      client: "Community Care Foundation",
      date: "November 2024",
      technologies: "React, CSS3, Firebase, Payment Gateway"
    },
    {
      id: 3,
      title: "Saral.edu UI Design",
      category: "Education",
      image: saralImage,
      description: "An innovative educational platform interface designed to simplify online learning. Saral.edu features a clean, student-friendly design with intuitive navigation, progress tracking, and interactive learning modules. The design prioritizes accessibility and ease of use to help students of all backgrounds engage with educational content effectively.",
      client: "Saral Education Ltd.",
      date: "October 2024",
      technologies: "React, Material-UI, Chart.js, REST API"
    },
    {
      id: 4,
      title: "Water World Kelaniya",
      category: "Homepage Recreation",
      image: project4Image,
      description: "A vibrant and engaging homepage redesign for Water World Kelaniya, a popular recreational water park. The project captures the fun and excitement of the water park experience through dynamic layouts, bright colors, and interactive elements. The design successfully increased visitor engagement and improved conversion rates for ticket bookings.",
      client: "Water World Entertainment",
      date: "September 2024",
      technologies: "HTML5, CSS3, JavaScript, WordPress"
    },
    {
      id: 5,
      title: "Fit4Life Fitness Tracker",
      category: "Web App",
      image: fit4LifeImage,
      description: "A comprehensive fitness tracking web application that helps users monitor their health goals, track workouts, and maintain nutrition records. The app features real-time progress visualization, social sharing capabilities, and personalized workout recommendations. The interface is designed to motivate users and make fitness tracking an enjoyable daily habit.",
      client: "Personal Project",
      date: "August 2024",
      technologies: "React, Express.js, PostgreSQL, Chart.js"
    },
    {
      id: 6,
      title: "Taurgo SaaS Platform",
      category: "SaaS",
      image: taurgoImage,
      description: "A sophisticated SaaS platform designed for business process automation and workflow management. Taurgo provides companies with tools to streamline operations, manage teams, and track productivity metrics. The platform features a modern dashboard design, advanced analytics, and seamless integration capabilities with popular business tools.",
      client: "Taurgo Technologies",
      date: "July 2024",
      technologies: "React, Node.js, PostgreSQL, Docker, AWS"
    },
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
