import { useEffect } from 'react';
import Project from '../../Components/Project/Project.js';
import projects from '../../Content/projects.json';
import './Projects.css';

function Projects() {
  useEffect(() => {
    document.title = 'Projects | Ahmad Masud';
  }, []);

  return (
    <div>
      <p className='projects-title'>Projects</p>
      <div className='projects'>
        {projects.map((project, index) => (
          <Project
            key={index}
            data={project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
