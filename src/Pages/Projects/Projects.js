import loadProjects from '../../Content/Projects/loadProjects.js'
import Project from '../../Components/Project/Project.js';
import './Projects.css';

function Projects() {
  const projects = loadProjects()

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
