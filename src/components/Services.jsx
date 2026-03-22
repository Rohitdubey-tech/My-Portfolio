import React from 'react';
import './Services.css';
import { FaLaptopCode, FaRobot, FaHandshake, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Building robust, scalable web applications from interactive reactive frontends using React to secure backend APIs with Node.js and MongoDB.',
      icon: <FaLaptopCode />,
      tags: ['React', 'Node.js', 'MERN Stack']
    },
    {
      id: 2,
      title: 'Machine Learning & AI Solutions',
      description: 'Designing intelligent data-driven systems, advanced predictive models, computer vision pipelines, and integrating custom generative AI workflows.',
      icon: <FaRobot />,
      tags: ['Python', 'TensorFlow', 'PyTorch']
    },
    {
      id: 3,
      title: 'Website & UI/UX Design',
      description: 'Creating visually stunning, futuristic, and highly responsive user interfaces that deliver premium, seamless user experiences across all devices.',
      icon: <FaPaintBrush />,
      tags: ['Figma', 'CSS Design', 'Web Dev']
    },
    {
      id: 4,
      title: 'Brand Collaborations & Outreach',
      description: 'Partnering with technology brands to create highly-engaging educational content that organically reaches my 15k+ community of dedicated developers.',
      icon: <FaHandshake />,
      tags: ['Sponsorships', 'Tech Writing', 'Video Content']
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">What I Do</h2>
          <p className="section-subtitle animate-on-scroll">Expertise and professional services I can bring to your next project.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card glass-panel animate-on-scroll" 
              key={service.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span className="bento-tag primary" key={i} style={{fontSize: '0.75rem', padding: '0.3rem 0.6rem'}}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
