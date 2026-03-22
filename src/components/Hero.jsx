import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import './Hero.css';
import profileImg from '../assets/profile.JPG';

const Hero = () => {
  const words = ['Data Scientist', 'Content Creator', 'Full Stack Developer', 'Machine Learning Engineer'];
  const typedText = useTypewriter(words, 80, 50, 2000);

  return (
    <section id="hero" className="hero section">
      <div className="container hero-container">
        <div className="hero-content animate-on-scroll">
          
          <div className="hero-text-content">
            <div className="hero-badge neu-pill">
              <span className="badge-dot"></span> Welcome to My Portfolio
            </div>
            
            <h1 className="hero-name">
              Hi, I'm <br className="hidden-mobile" /><span className="text-gradient-name">Rohit Dubey</span>
            </h1>
          
          <h2 className="hero-title">
            <span className="static-text">I am a </span>
            <span className="typed-text text-neon">{typedText}</span>
            <span className="cursor">|</span>
          </h2>
          
          <p className="hero-description">
            Merging Artificial Intelligence with cutting-edge Web Development. 
            I also <span className="text-highlight">share coding content on Instagram & YouTube</span>, 
            where I break down complex algorithms and topics into simpler, digestible insights.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="neu-pill btn-primary">
              Explore Projects
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
            <a href="/src/assets/resume.pdf" target="_blank" rel="noreferrer" className="neu-pill btn-outline">
              View Resume
            </a>
          </div>

          <div className="hero-socials glass-panel-sm">
            <a href="https://github.com/Rohitdubey-tech" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/rohit-dubey-bb4bba18a/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.youtube.com/@dubey.decodes" target="_blank" rel="noreferrer" className="social-icon" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 6.186a2.636 2.636 0 0 0-1.884-1.884C17.98 3.84 12 3.84 12 3.84s-5.98 0-7.698.462a2.636 2.636 0 0 0-1.884 1.884C1.956 7.904 1.956 12 1.956 12s0 4.096.462 5.814a2.636 2.636 0 0 0 1.884 1.884c1.718.462 7.698.462 7.698.462s5.98 0 7.698-.462a2.636 2.636 0 0 0 1.884-1.884c.462-1.718.462-5.814.462-5.814s0-4.096-.462-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.instagram.com/dubey.decode/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
          </div>

          <div className="hero-image-container floating-avatar">
            <img src={profileImg} alt="Rohit Dubey" className="hero-profile-img glass-panel" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
