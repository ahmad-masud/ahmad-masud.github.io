import './Hero.css';
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-container'>
            <div className='hero-texts'>
                <header className='hero-text hero-greeting-text'>Hey There!</header>
                <header className='hero-text hero-name-text'>I'm <span>Ahmad</span></header>
                <header className='hero-text hero-job-text'>I am a{' '}      
                  <Typewriter
                    options={{
                      strings: ['Computer Science Student', 'Web Developer', 'Problem-Solver'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </header>
            </div>
            <div className='hero-buttons'>
              <a href='' className='hero-resume-button'  target="_blank">Resume <i className="fa-solid fa-file icon"></i></a>
              <a href='https://github.com/ahmad-masud' className='hero-github-button' target="_blank"><i className="fa-brands fa-github icon"></i> Github <i class="fa-solid fa-arrow-up-right-from-square icon"></i></a>
            </div>
        </div>
    </div>
  );
}

export default Hero;