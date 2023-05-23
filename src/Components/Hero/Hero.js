import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero'>
            <div className='hero-texts'>
                <p className='hero-greeting-text'>Hey there -</p>
                <div className='hero-texts-container'>
                  <p className='hero-text'>I'm Ahmad. I'm a <span className='highlight'>Student</span>,</p>
                  <p className='hero-text'><span className='highlight'>Developer</span>, and</p>
                  <p className='hero-text'><span className='highlight'>soon-to-be Software Engineer</span>.</p>
                </div>
                <div className='hero-links'>
                  <Link to='/Contact' className='hero-link'>Connect</Link>
                  <Link to='/Projects' className='hero-link project-link'>Projects</Link>
                </div>
            </div>
            <img src='Profile.jpg' alt='Profile' className='profile-image'/>
        </div>
    </div>
  );
}

export default Hero;