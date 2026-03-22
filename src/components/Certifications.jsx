import React, { useState } from 'react';
import './Projects.css'; // Reusing projects styling for consistency

export default function Certifications() {
  const certifications = [
    { id: 1, title: 'Machine Learning Specialization', issuer: 'Stanford / Coursera', date: '2025' },
    { id: 2, title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', date: '2025' },
    { id: 3, title: 'Advanced React Fullstack', issuer: 'Meta', date: '2024' },
    { id: 4, title: 'Data Science Bootcamp', issuer: 'Udemy', date: '2024' }
  ];

  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Certifications</h2>
          <p className="section-subtitle animate-on-scroll">Professional credentials and achievements.</p>
        </div>
        <div className="modern-projects-grid">
          {certifications.map((cert, index) => (
            <div className="project-card glass-panel animate-on-scroll" key={cert.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-content">
                <div className="project-top" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span className="project-date">{cert.date}</span>
                  <button 
                    onClick={() => toggleLike(cert.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
                    aria-label="Like Certification"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill={liked[cert.id] ? 'var(--accent-neon-green, #00ffca)' : 'none'} 
                      stroke={liked[cert.id] ? 'var(--accent-neon-green, #00ffca)' : 'rgba(255,255,255,0.7)'} 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      style={{ width: '24px', height: '24px', transition: 'all 0.3s ease' }}
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <h3 className="project-title text-gradient-color" style={{ marginTop: '1rem' }}>{cert.title}</h3>
                <p className="project-description">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}