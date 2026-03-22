import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Rohit Kumar Dubey. Built with React & Vanilla CSS.
          </p>
          <div className="footer-links">
            <a href="https://github.com/Rohitdubey-tech" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rohit-dubey-bb4bba18a/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
