import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Behind the <span className="text-neon">Code</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text glass-panel animate-on-scroll">
            <p>
              I'm Rohit Kumar Dubey, a software engineering student at Lovely Professional University.
              My mission is to fuse <span className="text-highlight">Machine Learning paradigms</span> with modern web architectures.
            </p>
            <p>
              Beyond the traditional classroom, I am a passionate <span className="text-highlight">Content Creator</span> on YouTube and Instagram. 
              I specialize in breaking down complex algorithms, AI concepts, and full-stack development patterns into 
              bite-sized, simple explanations for my audience. Knowledge grows when shared.
            </p>
            <p>
              When I'm not recording tutorials or designing neural networks, you can find me 
              grinding out algorithmic challenges to stay sharp. My competitive programming journey 
              keeps my problem-solving skills at the global top tier.
            </p>
          </div>

          <div className="about-stats animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="stat-card glass-panel">
              <h3 className="stat-number text-neon">15k+</h3>
              <p className="stat-label">Linkedin Community</p>
            </div>
            <div className="stat-card glass-panel">
              <h3 className="stat-number text-neon">500+</h3>
              <p className="stat-label">DSA Solved</p>
            </div>
            <div className="stat-card glass-panel">
              <h3 className="stat-number text-neon">1630</h3>
              <p className="stat-label">LeetCode Rating</p>
            </div>
            <div className="stat-card glass-panel">
              <h3 className="stat-number text-neon">30+</h3>
              <p className="stat-label">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;