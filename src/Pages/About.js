import AboutComponent from '../Components/About/AboutComponent';
import Header from '../Components/Header/Header.js';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div className='about'>
      <Fade>
        <Header text='About' />
        <AboutComponent />
      </Fade>
    </div>
  );
}

export default About;