import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <h2 className="section-title animate-on-scroll">Get In Touch</h2>
        
        <div className="contact-content glass-panel animate-on-scroll">
          <p className="contact-desc">
            I'm currently looking for new opportunities in Software Engineering and Data Science. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              </span>
              <a href="mailto:rohitdubey0601@gmail.com" className="info-text">rohitdubey0601@gmail.com</a>
            </div>
            
            <div className="info-item">
              <span className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
              </span>
              <a href="tel:+916203435445" className="info-text">+91 6203435445</a>
            </div>

            <div className="info-item">
              <span className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
              </span>
              <span className="info-text">Punjab, India</span>
            </div>
          </div>

          <a href="mailto:rohitdubey0601@gmail.com" className="btn btn-primary contact-btn">Say Hello</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;