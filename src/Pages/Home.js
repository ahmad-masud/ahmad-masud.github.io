import Hero from '../Components/Hero/Hero.js';
import Info from '../Components/Info/Info.js';
import Highlights from '../Components/Highlights/Highlights.js';
import AnimatePage from '../AnimatePage';

function Home() {
  return (
    <div className='home'>
      <AnimatePage>
        <Hero />
        <Info />
        <Highlights />
      </AnimatePage>
    </div>
  );
}

export default Home;
