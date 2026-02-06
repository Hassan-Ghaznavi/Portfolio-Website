import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Unity', level: 90, icon: '🎮' },
    { name: 'Unreal Engine', level: 85, icon: '🎯' },
    { name: 'C#', level: 90, icon: '💻' },
    { name: 'C++', level: 80, icon: '⚡' },
    { name: 'Blueprints', level: 85, icon: '📐' },
  ];

  const tools = [
    'Blender',
    'Visual Studio',
    'GitHub',
    'Unity',
    'Unreal Engine'
  ];

  const concepts = [
    'OOP', 'Data Structures', 'Debugging', 'Optimization'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-content">
          <div className="skills-bars">
            <h3>Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="tools-section">
            <h3>Tools & Software</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div className="tool-item" key={index}>
                  {tool}
                </div>
              ))}
            </div>

            <div className="experience-box">
              <h4>Game Development & Concepts</h4>
              <ul>
                <li>🎮 Gameplay Systems</li>
                <li>🕹️ Player Controllers</li>
                <li>🎥 Camera Systems</li>
                <li>🖥️ UI Implementation</li>
                <li>⚛️ Physics</li>
                <li>🤖 AI Basics</li>
                {concepts.map((concept, index) => (
                  <li key={`concept-${index}`}>⚙️ {concept}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
