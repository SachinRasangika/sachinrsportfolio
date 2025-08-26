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

        {/* Only Image */}
        {project.image && (
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
        )}
      </div>
    </div>
  );
};

export default ProjectView;
