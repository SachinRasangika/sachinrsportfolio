import React from 'react';
import './Resources.css';
import grid1 from '../../assets/images/Home/1.png';
import grid2 from '../../assets/images/Home/2.png';
import grid3 from '../../assets/images/Home/3.png';
import grid4 from '../../assets/images/Home/4.png';

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
              <span className="card-category">Your Challenge, My Solution</span>
              <h3 className="card-title">
                Your challenge, my craft. I turn ideas and problems into smooth, functional, and beautiful digital experiences.
              </h3>
            </div>
            <div className="card-image">
              <img src={grid1}/>
            </div>
          </div>

          <div className="resource-card course-header-card">
            <div className="card-content">
            </div>
            <div className="card-image">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/3c150fa2c56b6a2bb1e258db17b2d32d3b954684?width=1340" alt="Squarespace Brand Building" />
            </div>
          </div>

          <div className="resource-card course-main-card">
            <div className="card-content">
              <h3 className="card-title">UX Design & Prototyping</h3>
              <p className="card-description">
                Learn the exact steps to conduct user research, create wireframes and prototypes in Figma, and test for usability to craft intuitive, high-performing interfaces.
              </p>
              <button className="access-btn">Access now</button>
            </div>
            <div className="card-image">
             <img src={grid2}/>
            </div>
          </div>

          <div className="resource-card plugin-card">
            <div className="card-content">
              <span className="card-category">AI Tools & Plugins</span>
              <h3 className="card-title">
Explore the AI tools and plugins I use to enhance design, improve UX, and create better digital products.              </h3>
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
             <img src={grid4}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
