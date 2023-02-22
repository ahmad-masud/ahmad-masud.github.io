import './Hero.css';
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../Images/logo.png';

function Hero() {

  const TEXTS = [
    "Computer Science Major",
    "Web Developer",
    "Web Designer",
    "Problem-Solver"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className='hero'>
        <img src={Icon} className='hero-image'></img>
        <div className='hero-container'>
            <div className='hero-texts'>
                <header className='hero-name-text'>I'm Ahmad</header>
                <span className='hero-job-text'>
                  A <TextTransition inline children={TEXTS[index % TEXTS.length]} />
                </span>
            </div>
            <div className='hero-links'>
              <Link to='/Contact' className='hero-link'>Connect</Link>
              <a href='https://github.com/ahmad-masud' className='hero-link' target='_blank'>Github <i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>
    </div>
  );
}

export default Hero;