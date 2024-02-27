import Hero from '../../Components/Hero/Hero.js';
import Info from '../../Components/Info/Info.js';
import Skills from '../../Components/Skills/Skills.js';
import Project from '../../Components/Project/Project.js';
import loadProjectsData from '../../ProjectsData/loadProjectsData.js'
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {

  const projectsData = loadProjectsData()

  return (
    <div className='home'>
      <Hero />
      <Info />
      <p className='projects-title'>Highlighted Projects</p>
      {projectsData.map((projectData, index) => (
        projectData.pinned &&
          <Project
            key={index}
            data={projectData}
          />
      ))}
      <div className='projects-link-container'>
        <Link to='/projects' className='projects-link'>View all projects {'>'}</Link>
      </div>
      <Skills />
    </div>
  );
}

export default Home;
