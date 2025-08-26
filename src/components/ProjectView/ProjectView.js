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
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Portfolio</button>

      {/* Header Section */}
      <div className="project-content">
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <div className="saas-badge">
            <div className="badge-dot"></div>
            <span className="badge-text">{project.category}</span>
          </div>
          <div className="project-description">
            <p>{project.description}</p>
          </div>
        </div>

        <div className="horizontal-divider"></div>

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
