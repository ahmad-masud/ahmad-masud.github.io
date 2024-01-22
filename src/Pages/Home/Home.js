import Hero from '../../Components/Hero/Hero.js';
import Info from '../../Components/Info/Info.js';
import Skills from '../../Components/Skills/Skills.js';
import Project from '../../Components/Project/Project.js';
import loadProjectsData from '../../ProjectsData/loadProjectsData.js'
import { Link } from 'react-router-dom';
import './Home.css';
import Fade from 'react-reveal/Fade';

function Home() {

  const projectsData = loadProjectsData()

  return (
    <div className='home'>
      <Fade>
        <Hero />
      </Fade>
      <Fade>
        <Info />
      </Fade>
      <Fade>
        <p className='projects-title'>Highlighted Projects</p>
      </Fade>
        {projectsData.map((projectData, index) => (
          projectData.frontpage &&
            <Project
              key={index}
              data={projectData}
            />
        ))}
      <Fade>
        <div className='projects-link-container'>
          <Link to='/projects/' className='projects-link'>View all projects {'>'}</Link>
        </div>
        <Skills />
      </Fade>
    </div>
  );
}

export default Home;
