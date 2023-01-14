import './Hero.css';
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TEXTS = [
  "Computer Science Major",
  "Web Developer",
  "Web Designer",
  "Problem-Solver"
];

function Hero() {

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
        <div className='hero-container'>
            <div className='hero-texts'>
                <header className='hero-name-text'>I'm Ahmad.</header>
                <TextTransition className='hero-job-text' springConfig={presets.default}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
            </div>
        </div>
    </div>
  );
}

export default Hero;