import React, { useState, useEffect } from 'react';
import './Hero.css';
import backgroundImage from '../../assets/hero.png';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentBgColor, setCurrentBgColor] = useState('#000000');
  const [videoKey, setVideoKey] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Array of colors that match video aesthetics
  const videoColors = [
    '#000000', // Pure black
    '#1a1a1a', // Dark grey
    '#2d2d2d', // Medium dark grey
    '#0d1117', // GitHub dark
    '#161b22', // Darker blue-grey
    '#21262d', // Medium blue-grey
    '#101010', // Very dark grey
    '#1c1c1c', // Dark grey variant
    '#0a0a0a', // Almost black
    '#252525', // Light dark grey
  ];

  useEffect(() => {
    let colorInterval;

    if (showVideo) {
      colorInterval = setInterval(() => {
        const randomColor = videoColors[Math.floor(Math.random() * videoColors.length)];
        setCurrentBgColor(randomColor);
      }, 1000); // Change every second
    } else {
      setCurrentBgColor('#000000'); // Reset to black when not in video mode
    }

    return () => {
      if (colorInterval) {
        clearInterval(colorInterval);
      }
    };
  }, [showVideo]);

  const enableAudio = () => {
    setAudioEnabled(true);
    setVideoKey(prev => prev + 1);
  };

  const toggleVideoMode = () => {
    if (!showVideo) {
      // Force iframe reload with new key to ensure fresh permissions
      setVideoKey(prev => prev + 1);
      // Auto-enable audio on user interaction (when starting video)
      setAudioEnabled(true);
    } else {
      // Reset audio state when closing video
      setAudioEnabled(false);
    }
    setShowVideo(!showVideo);
  };

  return (
    <section className={`hero ${showVideo ? 'hero-video-mode' : ''}`} id="home">
      {!showVideo ? (
        // Original Hero Layout
        <>
          {/* Background */}
          <div className="hero-background">
            <img
              className="hero-bg-image"
              src={backgroundImage}
              alt=""
            />

            {/* Long Exposure Effect Layers */}
            <img
              className="hero-bg-layer-1"
              src={backgroundImage}
              alt=""
            />
            <img
              className="hero-bg-layer-2"
              src={backgroundImage}
              alt=""
            />
            <img
              className="hero-bg-layer-3"
              src={backgroundImage}
              alt=""
            />

            {/* Light Streak Overlay for Long Exposure */}
            <div className="light-streaks">
              <div className="streak streak-1"></div>
              <div className="streak streak-2"></div>
              <div className="streak streak-3"></div>
              <div className="streak streak-4"></div>
            </div>

            {/* Cinematic Blur Effects */}
            <div className="blur-effects">
              <div className="blur-orb blur-orb-1"></div>
              <div className="blur-orb blur-orb-2"></div>
              <div className="blur-orb blur-orb-3"></div>
              <div className="blur-orb blur-orb-4"></div>
              <div className="blur-orb blur-orb-5"></div>
              <div className="blur-orb blur-orb-6"></div>
              <div className="blur-orb blur-orb-7"></div>
            </div>
          </div>

          <div className="hero-content">
            {/* Text Content */}
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line">Sachin RS</span>
                <span className="title-line">UI/UX Designer & Engineer</span>
              </h1>

              <p className="hero-description">
                Creative UI/UX Designer with strong experience in user-centered design and visual storytelling. Skilled in Figma, usability testing, design systems, and front-end development using HTML, CSS, JavaScript, React. Experienced in designing intuitive, high-performing digital products from concept to prototype.
              </p>

              {/* Buttons */}
              <div className="hero-buttons">
                {/* Listen to Myself */}
                <button className="btn-primary" onClick={toggleVideoMode}>
                  <span>Listen to my motivation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="5,3 19,12 5,21" fill="#506C83"/>
                  </svg>
                </button>

                {/* Download CV */}
                <button className="btn-secondary">
                  <a
                    href="/Sachin_Silva_UIUX.pdf"
                    download
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Video Mode Layout
        <>
          {/* Video Background with Gradient */}
          <div className="hero-video-background" style={{ backgroundColor: currentBgColor }}>
            <div className="video-gradient-overlay"></div>
          </div>

          <div className="hero-video-content">
            {/* Text Content */}
            <div className="hero-video-text">
              <h1 className="hero-title">
                <span className="title-line">Sachin RS</span>
                <span className="title-line">UI/UX Designer & Engineer</span>
              </h1>

              <p className="hero-description">
                Watch my introduction and learn about my journey in UI/UX design and development.
              </p>

              {/* Buttons */}
              <div className="hero-buttons">
                {/* Stop Video */}
                <button className="btn-primary" onClick={toggleVideoMode}>
                  <span>Back to Portfolio</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="4" width="4" height="16" fill="#506C83"/>
                    <rect x="14" y="4" width="4" height="16" fill="#506C83"/>
                  </svg>
                </button>

                {/* Download CV */}
                <button className="btn-secondary">
                  <a
                    href="/Sachin_Silva_UIUX.pdf"
                    download
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>

            {/* Video Section */}
            <div className="hero-video-section">
              <div className="video-container">
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '0px',
                  paddingBottom: '177.778%'
                }}>
                  <iframe
                    key={videoKey}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    height="100%"
                    src={`https://streamable.com/e/c9u0u5?autoplay=1&nocontrols=0&muted=${audioEnabled ? '0' : '1'}&t=${videoKey}`}
                    width="100%"
                    style={{
                      border: 'none',
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      left: '0px',
                      top: '0px',
                      overflow: 'hidden'
                    }}
                    title="Sachin RS Motivation Video"
                    sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  />

                  {/* Audio enabler for mobile browsers - appears briefly */}
                  {!audioEnabled && (
                    <button
                      onClick={enableAudio}
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'rgba(0, 0, 0, 0.7)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1001,
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(80, 108, 131, 0.8)';
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'rgba(0, 0, 0, 0.7)';
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      🔊
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
