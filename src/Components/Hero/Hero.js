import './Hero.css';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import wave from '../../Content/images/wave.webp';

function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero'>
            <div className='hero-texts'>
                <p className='hero-greeting-text'>Hey there <img src={wave} alt='wave' className='wave'></img></p>
                <div className='hero-texts-container'>
                  <p className='hero-text'>I'm Ahmad,</p>
                  <p className='hero-text'>Nice to meet you,</p>
                  <p className='hero-text'>
                    I'm a <span className='highlight'>
                      <Typewriter 
                        words={['CS Student.', 'Developer.', 'Creator.', 'Leader.']}
                        loop={Infinity}
                        cursor
                      />
                    </span>
                  </p> 
                </div>
                <div className='hero-links'>
                  <Link to='/Contact' className='hero-link'>Connect</Link>
                  <Link to='/Projects' className='hero-link project-link'>Projects</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;