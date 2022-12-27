import Hero from '../Components/Hero/Hero.js';
import Info from '../Components/Info/Info.js';
import Skills from '../Components/Skills/Skills.js';
import Project from '../Components/Project/Project.js';
import PaintGif from '../Images/Paint.gif'
import WebsiteGif from '../Images/Website.gif'
import SortGif from '../Images/SortingVisualizer.gif'
import Fade from 'react-reveal/Fade';

function Home() {

  const headerStyle = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2em',
    textAlign: 'center'
  }

  return (
    <div className='home'>
      <Fade>
        <Hero />
        <Info />
        <header style={headerStyle}>Highlighted Projects</header>
        <Project
          image={PaintGif} 
          title={'Paint'}
          titleColor={'rgb(0,150,255)'}
          overview={
            `A simple java paint application, geared towards people who like digital 
            drawing and taking quick notes. There are numerous tools for drawing with differents pens,
            opacity sliders, size sliders and more. You can also import or export an image or just create
            a new image from scratch.`
          }
          link={'https://github.com/ahmad-masud/Paint'} 
          stacks={['Java', 'Java Swing']}
        />
        <Project
          image={WebsiteGif} 
          title={'My First Website'}
          titleColor={'rgb(16,185,129)'}
          overview={
            `A simple java paint application, geared towards people who like digital 
            drawing and taking quick notes. There are numerous tools for drawing with differents pens,
            opacity sliders, size sliders and more. You can also import or export an image or just create
            a new image from scratch.`
          }
          link={'https://github.com/ahmad-masud/my-first-website'}
          stacks={['HTML', 'CSS', 'Javascript']}
        />
        <Project
          image={SortGif} 
          title={'Sorting Algorithm Visualizer'} 
          titleColor={'rgb(255,50,50)'}
          overview={
            `An application that implements java swing to draw out a visual of the process of loop sorting. 
            There are interactive buttons to visualize different sorting algorithms and a slider to change 
            the delay in between swaps. The height of each bar corresponds to its value and its x position 
            corresponds to its index in the array.`
          }
          link={'https://github.com/ahmad-masud/Sorting-Algorithm-Visualizer'} 
          stacks={['Java', 'Java Swing']}
        />
        <Skills />
      </Fade>
    </div>
  );
}

export default Home;
