import { useEffect } from 'react';
import React from 'react';
import Project from '../../Components/Project/Project.js';
import projects from '../../Content/projects.json';
import './Projects.css';

function Projects() {
  useEffect(() => {
    document.title = 'Projects | Ahmad Masud';
  }, []);

  return (
    <div className='projects'>
      <p className='projects-title'>Projects</p>
      {projects.map((project, index) => (
        <Project
          key={index}
          data={project}
        />
      ))}
    </div>
  );
}

export default Projects;
