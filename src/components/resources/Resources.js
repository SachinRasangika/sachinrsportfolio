import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <section className="resources-section">
      <div className="resources-container">
        <div className="resources-header">
          <div className="resources-tag">
            <div className="tag-dot"></div>
            <span>Your dream site</span>
          </div>
          <h2 className="resources-title">
            The Ultimate Resource Hub for Creators and Innovators
          </h2>
          <button className="all-resources-btn">All resources</button>
        </div>

        <div className="resources-grid">
          <div className="resource-card blog-card">
            <div className="card-content">
              <span className="card-category">Our Blogs</span>
              <h3 className="card-title">
                In-Depth Articles on Digital Experiences, Strategy, and Success
              </h3>
            </div>
            <div className="card-image">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/01c2ac57d0801efafc64a98684f34b648663acbf?width=1244" alt="Sam Crawford Web Designer" />
            </div>
          </div>

          <div className="resource-card course-header-card">
            <div className="card-content">
              <span className="card-category">Find the right course</span>
            </div>
            <div className="card-image">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/3c150fa2c56b6a2bb1e258db17b2d32d3b954684?width=1340" alt="Squarespace Brand Building" />
            </div>
          </div>

          <div className="resource-card course-main-card">
            <div className="card-content">
              <h3 className="card-title">Courses for SQSP Pros</h3>
              <p className="card-description">
                Learn the exact steps to scale your business to six figures so you can live 
                the life of entrepreneurial freedom you've always dreamed of.
              </p>
              <button className="access-btn">Access now</button>
            </div>
            <div className="card-image">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/55cf5fe623827f979c635ff99aa5de3246b09b96?width=621" alt="Six Figure Design Club" />
            </div>
          </div>

          <div className="resource-card plugin-card">
            <div className="card-content">
              <span className="card-category">Plugin Store</span>
              <h3 className="card-title">
                Explore through a series of paid & free plugins to use in your design
              </h3>
              <button className="access-btn">Access now</button>
            </div>
            <div className="card-image">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/752a4e3922ac762cb2562ee9034d88a8f0b729f4?width=602" alt="CTA Icons Squarespace" />
            </div>
          </div>

          <div className="resource-card design-card">
            <div className="card-content">
              <span className="card-category">Design on Demand</span>
              <h3 className="card-title">
                From early research stages, through wireframes, designing interfaces, branding and social media assets,
              </h3>
            </div>
            <div className="card-image">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/c7cd6652f321f6e6773f8143627d931be41bd3da?width=1230" alt="Site Typography Image Squarespace" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
