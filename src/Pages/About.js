import AboutComponent from '../Components/About/AboutComponent';
import Header from '../Components/Header/Header.js'

function About() {
  return (
    <div className='about'>
      <Header text='About' />
      <AboutComponent />
    </div>
  );
}

export default About;