import AnimatePage from '../AnimatePage';
import AboutComponent from '../Components/About/AboutComponent';

function About() {
  return (
    <div className='about'>
      <AnimatePage>
        <AboutComponent />
      </AnimatePage>
    </div>
  );
}

export default About;