import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Two Lights One Escape',
      description: 'Award-winning puzzle adventure game. Designed lighting-based puzzles, player movement, interaction systems, and environment interactions.',
      image: '/images/project-1.jpg',
      tags: ['Unity', 'C#', 'Blender', 'Puzzle'],
      category: 'Puzzle Adventure',
      links: [
        { text: 'GitHub', url: '#' },
        { text: 'Download Build', url: 'https://drive.google.com/drive/folders/1tGs_mQ2v3MJdgFS7uaM0Sps44OWj2HSN?usp=sharing' },
        { text: 'Video', url: '#' }
      ]
    },
    {
      id: 2,
      title: '2D Platformer Game',
      description: 'Classic platformer with smooth player movement, enemy AI, multiple levels, collectibles, scoring, and health systems.',
      image: '/images/project-2.jpg',
      tags: ['Unity', 'C#', 'Platformer'],
      category: 'Platformer',
      links: [
        { text: 'GitHub', url: '#' },
        { text: 'Download', url: '#' }
      ]
    },
    {
      id: 3,
      title: 'Endless Runner Game',
      description: 'Unreal Engine endless runner with procedural level generation, character controls, obstacle spawning, and Blueprint logic.',
      image: '/images/project-3.jpg',
      tags: ['Unreal Engine', 'Blueprints', 'Arcade'],
      category: 'Endless Runner',
      links: [
        { text: 'Download Build', url: 'https://drive.google.com/file/d/1yEXNupXKDh08Huw9jIgdxLU0oeCxnlWm/view?usp=sharing' },
        { text: 'Video', url: '#' }
      ]
    },
    {
      id: 4,
      title: 'VR Panoramic Tour',
      description: 'Interactive VR tour with mouse-look camera, hotspots navigation, and real-time clock integration.',
      image: '/images/project-4.jpg',
      tags: ['Unity', 'C#', 'VR'],
      category: 'VR',
      links: [
        { text: 'Download', url: '#' }
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div className="project-placeholder">
                    <span className="project-category">{project.category}</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.links && project.links.map((link, i) => (
                      <a key={i} href={link.url} className="project-link-btn">{link.text}</a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
