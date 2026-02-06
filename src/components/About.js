import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <img src="/images/profile.jpg" alt="Hassan Ghaznavi" className="profile-img" />
              <div className="frame-decoration"></div>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Summary</h3>
            <p>
              Computer Science undergraduate specializing in Gaming & Animation with experience in Unity and Unreal Engine. 
              Developer of multiple complete games including an award-winning puzzle adventure. 
              Highest CGPA holder in class (3.828/4.00). Passionate about gameplay programming, mechanics design, 
              and interactive systems.
            </p>
            
            <div className="about-sections">
              <div className="about-section">
                <h3>🎓 Education</h3>
                <div className="education-item">
                  <h4>Bachelor of Computer Science (Gaming & Animation)</h4>
                  <p>NED University of Engineering and Technology — 2023–Present</p>
                  <p className="highlight">CGPA: 3.828 / 4.00 (Highest in Class)</p>
                </div>
              </div>

              <div className="about-section">
                <h3>🏆 Achievements</h3>
                <ul className="achievements-list">
                  <li>Winner – NED GameCon</li>
                  <li>Winner – Semester Project Competition</li>
                  <li>Highest CGPA in Class (3.828/4.00)</li>
                </ul>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">Let's Work Together</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
