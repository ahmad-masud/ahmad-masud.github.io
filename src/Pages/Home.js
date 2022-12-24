import Hero from '../Components/Hero/Hero.js';
import Info from '../Components/Info/Info.js';
import Highlights from '../Components/Highlights/Highlights.js';
import Skills from '../Components/Skills/Skills.js';

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Info />
      <Highlights />
      <Skills />
    </div>
  );
}

export default Home;
