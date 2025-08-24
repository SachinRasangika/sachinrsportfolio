import React, { useState, useRef } from 'react';
import './Hero.css';
import backgroundImage from '../../assets/hero.png';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-background">
        <img 
          className="hero-bg-image" 
          src= {backgroundImage}
          alt="" 
        />
      </div>

      <div className="hero-content">
        {/* Text Content */}
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Sachin Silva</span>
            <span className="title-line">UI/UX Designer & Engineer</span>
          </h1>

          <p className="hero-description">
            Creative UI/UX Designer with strong experience in user-centered design and visual storytelling. Skilled in Figma, usability testing, design systems, and front-end development using HTML, CSS, JavaScript, React. Experienced in designing intuitive, high-performing digital products from concept to prototype.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            {/* Listen to Myself */}
            <button className="btn-primary" onClick={toggleAudio}>
              <span>Listen to Myself</span>
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="4" width="4" height="16" fill="#506C83"/>
                  <rect x="14" y="4" width="4" height="16" fill="#506C83"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="5,3 19,12 5,21" fill="#506C83"/>
                </svg>
              )}
            </button>
            <audio 
              ref={audioRef} 
              onEnded={() => setIsPlaying(false)}
              preload="metadata"
            >
              <source src="/voice-intro.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/* Download CV */}
            <button className="btn-secondary">
              <a 
                href="/Sachin_Silva_CV.pdf" 
                download 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Download CV
              </a>
            </button>
          </div>

          {/* Awards
          <div className="awards-container">
            <div className="award-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/1f1b0d70c0194f565b035418dda9b15fce4a9668?width=271" alt="NASA Space App Challenge 2021" />
            </div>
            <div className="award-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/e104c7365eaa459121e17ff44d0f0662d6f7e24a?width=271" alt="Designathon 2021 SLIIT" />
            </div>
            <div className="award-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/37ca985ac464a87055945294f84b8f21d759ba1a?width=271" alt="Designathon 2020 SLIIT" />
            </div>
          </div> */}
        </div>

        {/* Profile Image */}
        {/* <div className="hero-left-image">
          <img 
            src="https://media.licdn.com/dms/image/v2/D5603AQHVUP6mZ6Jy9A/profile-displayphoto-shrink_800_800/B56ZWaLrnwGQAc-/0/1742048508821?e=1758758400&v=beta&t=YOS5ZBJ7IfFsFN9DQlU8wt-xaJqAkHLnMRh0Sxqsqtc" 
            alt="Sachin Silva" 
            className="profile-image"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
