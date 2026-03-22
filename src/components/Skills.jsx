import React from 'react';
import './Skills.css';
import { FaPython, FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaChartBar, FaFileExcel } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiPytorch, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas, SiMongodb, SiJupyter } from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { TbBrain } from 'react-icons/tb';
import { VscGraphLine, VscVscode } from 'react-icons/vsc';

const getSkillIcon = (skillName) => {
  switch (skillName) {
    case 'Python': return <FaPython className="skill-logo" />;
    case 'C++': return <SiCplusplus className="skill-logo" />;
    case 'JavaScript': return <SiJavascript className="skill-logo" />;
    case 'SQL': return <DiDatabase className="skill-logo" />;
    case 'PyTorch': return <SiPytorch className="skill-logo" />;
    case 'TensorFlow': return <SiTensorflow className="skill-logo" />;
    case 'Scikit-learn': return <SiScikitlearn className="skill-logo" />;
    case 'Deep Learning': return <TbBrain className="skill-logo" />;
    case 'Numpy': return <SiNumpy className="skill-logo" />;
    case 'Pandas': return <SiPandas className="skill-logo" />;
    case 'Matplotlib': return <VscGraphLine className="skill-logo" />;
    case 'Seaborn': return <VscGraphLine className="skill-logo" />;
    case 'PowerBi': return <FaChartBar className="skill-logo" />;
    case 'MS Excel': return <FaFileExcel className="skill-logo" />;
    case 'React': return <FaReact className="skill-logo" />;
    case 'Node.js': return <FaNodeJs className="skill-logo" />;
    case 'HTML/CSS': return <div className="skill-logo-group"><FaHtml5/><FaCss3Alt/></div>;
    case 'MongoDB': return <SiMongodb className="skill-logo" />;
    case 'Data Structures & Algorithms': return <TbBrain className="skill-logo" />;
    case 'Exploratory Data Analysis': return <VscGraphLine className="skill-logo" />;
    case 'Git/GitHub': return <FaGithub className="skill-logo" />;
    case 'Jupyter': return <SiJupyter className="skill-logo" />;
    case 'VS Code': return <VscVscode className="skill-logo" />;
    default: return null;
  }
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C++', 'JavaScript', 'SQL'],
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      title: 'Machine Learning & AI',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Deep Learning'],
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      title: 'Data Science',
      skills: ['Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'PowerBi', 'MS Excel'],
      icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
    },
    {
      title: 'Web Dev',
      skills: ['React', 'Node.js', 'HTML/CSS', 'MongoDB'],
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical Arsenal</h2>
        
        <div className="bento-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bento-card glass-panel animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bento-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
                </svg>
              </div>
              <h3 className="bento-title">{category.title}</h3>
              <div className="bento-tags">
                {category.skills.map((skill, imgIndex) => (
                  <span key={imgIndex} className="bento-tag">
                    {getSkillIcon(skill)}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bento-card glass-panel bento-wide animate-on-scroll" style={{ animationDelay: '0.4s' }}>
             <h3 className="bento-title">Core Competencies & Tools</h3>
             <div className="bento-tags large-tags">
                <span className="bento-tag primary">{getSkillIcon('Data Structures & Algorithms')} Data Structures & Algorithms</span>
                <span className="bento-tag primary">{getSkillIcon('Exploratory Data Analysis')} Exploratory Data Analysis</span>
                <span className="bento-tag outline">{getSkillIcon('Git/GitHub')} Git/GitHub</span>
                <span className="bento-tag outline">{getSkillIcon('Jupyter')} Jupyter</span>
                <span className="bento-tag outline">{getSkillIcon('VS Code')} VS Code</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
