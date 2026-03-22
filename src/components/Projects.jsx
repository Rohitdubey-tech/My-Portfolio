import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Pneumonia Detection System',
      date: "Jan '26 - Feb '26",
      role: 'Deep Learning Engineer',
      description: "Designed a deep learning-based Pneumonia detection system using ResNet-18 via PyTorch. Capable of robustly classifying chest X-ray imagery into NORMAL and PNEUMONIA classes. Delivered an end-to-end inference pipeline optimized with a Flask-based real-time prediction server.",
      tech: ['PyTorch', 'ResNet-18', 'Flask', 'Computer Vision'],
      github: '#'
    },
    {
      title: 'Distracted Driver Analysis',
      date: "Oct '25 - Nov '25",
      role: 'Machine Learning Developer',
      description: "Developed a convolutional neural network architecture using TensorFlow. Achieved a solid 92% validation accuracy on classifying unsafe driver behaviors. Built out automated workflows for data augmentation, robust preprocessing, and hyperparameters tuning.",
      tech: ['TensorFlow', 'CNN', 'Data Augmentation', 'Validation'],
      github: '#'
    },
    {
      title: 'Digital Platform for Alumni Management and Engagement',
      date: "Aug '25 - Sep '25",
      role: 'Full Stack Developer',
      description: "Developed a comprehensive digital platform to streamline alumni networking and event management, featuring robust user authentication, interactive member directories, and dynamic community forums.",
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Rohitdubey-tech/Digital-Platform-for-Alumini-Management-and-Engagement'
    },
    {
      title: 'Bank Loan Analysis using Power BI',
      date: "Nov '25 - Dec '25",
      role: 'Data Analyst',
      description: "Designed a comprehensive interactive Power BI dashboard to analyze bank loan data, providing actionable insights into default rates, borrower demographics, and financial risk trends using advanced DAX measures.",
      tech: ['Power BI', 'DAX', 'Data Visualization', 'SQL'],
      github: 'https://github.com/Rohitdubey-tech/Bank-Loan-Analysis-using-power-bi'
    },
    {
      title: 'Iphone Sales Analysis',
      date: "Mar '25 - May '25",
      role: 'Data Analyst',
      description: "Conducted in-depth exploratory data analysis on real-world iPhone sales datasets to uncover regional purchasing trends, revenue generation metrics, and product performance using advanced visualization techniques.",
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/Rohitdubey-tech/Iphone-Sales-Analysis'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Featured Projects</h2>
          <p className="section-subtitle animate-on-scroll">Selected works focusing on Machine Learning and Computer Vision.</p>
        </div>
        
        <div className="modern-projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card glass-panel animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-content">
                <div className="project-top">
                  <span className="project-role">{project.role}</span>
                  <span className="project-date">{project.date}</span>
                </div>
                
                <h3 className="project-title text-gradient-color">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <a href={project.github} className="project-link" aria-label="GitHub Repository">
                  <span>View Source Code</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;