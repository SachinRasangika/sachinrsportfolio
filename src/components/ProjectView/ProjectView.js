import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProjectView.css';

const ProjectView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-container">
        <h2>No project selected</h2>
        <button className="back-btn" onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="project-container">
      {/* New Cinematic Header Section */}
      <div className="project-content">
        <div className="project-hero-header">
          {/* Background Effects */}
          <div className="project-header-background">
            <div className="header-blur-orbs">
              <div className="header-orb header-orb-1"></div>
              <div className="header-orb header-orb-2"></div>
              <div className="header-orb header-orb-3"></div>
            </div>
            <div className="header-gradient-overlay"></div>
          </div>

          {/* Header Content */}
          <div className="project-header-content">
            {/* Centered Back Button */}
            <div className="back-button-container">
              <button className="back-btn" onClick={() => navigate('/')}>← Back to Portfolio</button>
            </div>
            <div className="project-category-badge">
              <div className="category-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              </div>
              <span className="category-text">{project.category}</span>
            </div>

            <h1 className="project-hero-title">
              <span className="title-highlight">{project.title}</span>
            </h1>

            <div className="project-hero-description">
              <p>{project.description}</p>
            </div>
          </div>
        </div>

        {/* Before/After Comparison or Single Image */}
        {project.hasBeforeAfter ? (
          <div className="before-after-section">
            <div className="before-after-header">
              <h3 className="comparison-title">Before & After</h3>
              <p className="comparison-subtitle">Transform Wellness Website Redesign</p>
            </div>

            <div className="before-after-container">
              <div className="before-image-section">
                <div className="image-label before-label">
                  <span>Before</span>
                </div>
                <div className="image-wrapper">
                  <img
                    className="comparison-image before-image"
                    src={project.beforeImage}
                    alt={`${project.title} - Before`}
                  />
                </div>
              </div>

              <div className="after-image-section">
                <div className="image-label after-label">
                  <span>After</span>
                </div>
                <div className="image-wrapper">
                  <img
                    className="comparison-image after-image"
                    src={project.afterImage}
                    alt={`${project.title} - After`}
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="project-details-section">
              <div className="details-grid">
                <div className="detail-item">
                  <h4>Client</h4>
                  <p>{project.client}</p>
                </div>
                <div className="detail-item">
                  <h4>Date</h4>
                  <p>{project.date}</p>
                </div>
                <div className="detail-item">
                  <h4>Technologies</h4>
                  <p>{project.technologies}</p>
                </div>
                <div className="detail-item">
                  <h4>Category</h4>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          project.image && (
            <div className="showcase-image-container">
              <div className="image-mask">
                <img
                  className="showcase-image"
                  src={project.image}
                  alt={project.title}
                />
                {project.overlayImage && (
                  <div className="image-overlay">
                    <img
                      className="overlay-image"
                      src={project.overlayImage}
                      alt="Overlay"
                    />
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectView;
