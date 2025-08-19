import React, { useState, useRef } from 'react';
import './Hero.css';

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
      <div className="hero-background">
        <img 
          className="hero-bg-image" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a35fbfb1763c2d6b014bef83a36664066370e8c5?width=3840" 
          alt="" 
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-left-image">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/27fe207567070289cc354806f6b5899d89a76b47?width=400" 
            alt="Profile" 
            className="profile-image"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Sam Crawford: Your Award-</span>
            <span className="title-line">
              Winning{' '}
              <span className="squarespace-highlight">
                Squarespace
              </span>
            </span>
            <span className="title-line">Website Designer</span>
          </h1>
          
          <p className="hero-description">
            Sam Crawford has helped launch over 700 Squarespace websites for clients worldwide, 
            from local startups to global brands. Every site is crafted for speed, mobile performance, 
            and search visibility. As a Squarespace Expert, and Enterprise Partner, Sam's known for 
            clear, thoughtful design and the kind of results that speak for themselves.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={toggleAudio}>
              <span>Listen to myself</span>
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
              <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
            <button className="btn-secondary">
              Get in touch
            </button>
          </div>
          
          <div className="awards-container">
            <div className="award-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/1f1b0d70c0194f565b035418dda9b15fce4a9668?width=271" alt="Award 1" />
            </div>
            <div className="award-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/e104c7365eaa459121e17ff44d0f0662d6f7e24a?width=271" alt="Award 2" />
            </div>
            <div className="award-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/37ca985ac464a87055945294f84b8f21d759ba1a?width=271" alt="Award 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
