import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [modalImage, setModalImage] = useState(null);

  const isVideo = (url) => {
    return url && url.match(/\.(mp4|webm|ogg)$/i);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const nextImage = (e, projectId, total) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % total
    }));
  };

  const prevImage = (e, projectId, total) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + total) % total
    }));
  };

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
    },
    {
      id: 5,
      title: 'Blender 3D Artworks',
      description: 'A showcase of 3D modeling, texturing, and lighting projects created in Blender.',
      images: [
        '/images/h1.jpeg',
        '/images/h2.jpeg',
        '/images/h3.jpeg',
        '/images/h4.jpeg',
        '/images/h5.jpeg',
        '/videos/v1.mp4',
        '/videos/v2.mp4',
        '/videos/v3.mp4',
        '/videos/v4.mp4'
      ],
      tags: ['Blender', '3D Modeling', 'Cycles/Eevee'],
      category: '3D Art',
      links: []
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => {
            const hasMultipleImages = project.images && project.images.length > 0;
            const currentImage = hasMultipleImages 
              ? project.images[currentImageIndices[project.id] || 0] 
              : project.image;

            return (
              <div className="project-card" key={project.id}>
                <div className="project-image" onClick={() => openModal(currentImage)} style={{ cursor: 'pointer' }}>
                  {currentImage ? (
                    isVideo(currentImage) ? (
                      <video 
                        src={currentImage} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        muted 
                        loop 
                        autoPlay 
                        playsInline
                      />
                    ) : (
                      <img src={currentImage} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )
                  ) : (
                    <div className="project-placeholder">
                      <span className="project-category">{project.category}</span>
                    </div>
                  )}
                  
                  {hasMultipleImages && (
                    <>
                      <button 
                        className="carousel-btn prev"
                        onClick={(e) => prevImage(e, project.id, project.images.length)}
                      >
                        &#10094;
                      </button>
                      <button 
                        className="carousel-btn next"
                        onClick={(e) => nextImage(e, project.id, project.images.length)}
                      >
                        &#10095;
                      </button>
                      <div className="image-counter">
                        {(currentImageIndices[project.id] || 0) + 1} / {project.images.length}
                      </div>
                    </>
                  )}

                  {project.links && project.links.length > 0 && (
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.links.map((link, i) => (
                          <a 
                            key={i} 
                            href={link.url} 
                            className="project-link-btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
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
            );
          })}
        </div>
      </div>

      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            {isVideo(modalImage) ? (
              <video 
                src={modalImage} 
                controls 
                autoPlay 
                style={{ width: '100%', maxHeight: '90vh', boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }} 
              />
            ) : (
              <img src={modalImage} alt="Project Preview" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
