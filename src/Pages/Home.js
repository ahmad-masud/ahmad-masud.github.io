import Hero from '../Components/Hero/Hero.js';
import Info from '../Components/Info/Info.js';
import Skills from '../Components/Skills/Skills.js';
import Projects from './Projects.js';

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Info />
      <Projects />
      <Skills />
    </div>
  );
}

export default Home;
