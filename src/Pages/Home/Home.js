import Hero from '../../Components/Hero/Hero.js';
import Info from '../../Components/Info/Info.js';
import Skills from '../../Components/Skills/Skills.js';
import Project from '../../Components/Project/Project.js';
import projects from '../../Content/projects.json';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Info />
      <p className='projects-title'>Highlighted Projects</p>
      {projects.map((project, index) => (
        project.pinned &&
          <Project
            key={index}
            data={project}
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
