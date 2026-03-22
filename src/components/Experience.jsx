import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const certifications = [
    { id: 1, title: 'Introduction to Machine Learning', issuer: 'NPTEL', date: 'Dec 2025', link: 'https://drive.google.com/file/d/1LJ9lBJwjMeB3ifYWTLcrfABUBmG0PE3G/view?usp=sharing' },
    { id: 2, title: 'Fundamentals of Network Communication', issuer: 'INFOSYS', date: 'Sep 2025', link: 'https://drive.google.com/file/d/1I83Y5ru4CGFqW777D5Ycrl1BLAr9_uiq/view?usp=sharing' },
    { id: 3, title: 'Full Stack Web Development', issuer: 'UDEMY', date: 'Sep 2025', link: 'https://drive.google.com/file/d/1UTeGe6Fc3o6zFAeST0zH96g9CE6xH2Qh/view?usp=sharing' },
    { id: 4, title: 'Master Generative AI & Generative AI Tools', issuer: 'Infosys', date: 'Oct 2025', link: 'https://drive.google.com/file/d/1Q33qvOqzY1x_1zUkNHvFR4jK24ZOpvWq/view?usp=sharing' },
    { id: 5, title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM', issuer: 'Infosys', date: 'Aug 2025', link: 'https://drive.google.com/file/d/1EegjqQOllmcrP1qcFhqfGhhMKwFArav2/view?usp=sharing' }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Experience & Training</h2>
        
        <div className="timeline">
          <div className="timeline-item animate-on-scroll">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h3 className="timeline-title">Data Science Trainee</h3>
              <div className="timeline-subtitle">From Data to Decisions: A Hands-On Approach On Data Science</div>
              <div className="timeline-date">Jun' 25 – Jul' 25</div>
              
              <ul className="timeline-details">
                <li>Formulated a patient risk stratification strategy to classify individuals into low, medium, and high-risk categories using clinical data.</li>
                <li>Assembled an AI-based speech recognition component for real-time interview simulations.</li>
                <li>Orchestrated the ML workflow covering expected data preprocessing, feature engineering, training, and validation.</li>
                <li>Leveraged evaluation metrics and visual analytics to support healthcare teams in prioritizing high-risk cases.</li>
              </ul>
            </div>
          </div>
          
        </div>

        <h2 className="section-title animate-on-scroll" style={{ marginTop: '4rem', marginBottom: '2rem' }}>Certifications & Training</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card glass-panel animate-on-scroll" key={cert.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="cert-top">
                <span className="cert-date">{cert.date}</span>
                <button 
                  onClick={() => toggleLike(cert.id)}
                  className="like-btn"
                  aria-label="Like Certification"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill={liked[cert.id] ? 'var(--accent-neon-green)' : 'none'} 
                    stroke={liked[cert.id] ? 'var(--accent-neon-green)' : 'rgba(255,255,255,0.7)'} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
              <h3 className="cert-title">
                <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                  {cert.title}
                </a>
              </h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
