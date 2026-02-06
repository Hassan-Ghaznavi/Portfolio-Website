import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Hassan Ghaznavi</h1>
          <h2 className="hero-title">
            <span className="title-main">Game Development</span>
            <span> </span>
            <span className="title-sub">Unity & Unreal Developer</span>
          </h2>
          <p className="hero-description">
            Computer Science student specializing in Gaming & Animation, winner of NED GameCon, 
            and developer of multiple Unity and Unreal Engine games with highest CGPA in class.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://github.com/Hassan-Ghaznavi" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
            <a href="/Hassan_CV.pdf" download="Hassan_Ghaznavi_CV.pdf" className="btn btn-outline">Download Resume</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="controller-icon">
            <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="15" width="80" height="35" rx="10" stroke="url(#grad1)" strokeWidth="3"/>
              <circle cx="30" cy="32" r="8" stroke="url(#grad1)" strokeWidth="2"/>
              <circle cx="70" cy="32" r="3" fill="#00d9ff"/>
              <circle cx="78" cy="24" r="3" fill="#6c63ff"/>
              <circle cx="78" cy="40" r="3" fill="#ff6b6b"/>
              <circle cx="62" cy="32" r="3" fill="#ffa500"/>
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6c63ff"/>
                  <stop offset="100%" stopColor="#00d9ff"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
