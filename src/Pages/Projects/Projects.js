import loadProjectsData from '../../ProjectsData/loadProjectsData.js'
import Project from '../../Components/Project/Project.js';
import './Projects.css';

function Projects() {

  const projectsData = loadProjectsData()

  return (
    <div className='projects'>
      <p className='projects-title'>Projects</p>
      {projectsData.map((projectData, index) => (
        <Project
          key={index}
          data={projectData}
        />
      ))}
    </div>
  );
}

export default Projects;
