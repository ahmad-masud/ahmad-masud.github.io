import Hero from '../Components/Hero/Hero.js';
import Info from '../Components/Info/Info.js';
import Skills from '../Components/Skills/Skills.js';
import Project from '../Components/Project/Project.js';
import PaintGif from '../Images/Paint.gif';
import WebsiteGif from '../Images/Website.gif';
import SortGif from '../Images/SortingVisualizer.gif';
import Fade from 'react-reveal/Fade';
import Title from '../Components/Title/Title.js';
import Margin from '../Components/Margin/Margin.js';
import Paint from '../Files/Paint.jar';
import SortingAlgorithmVisualizer from '../Files/SortingAlgorithmVisualizer.jar';

function Home() {
  return (
    <div className='home'>
      <Fade>
        <Hero />
        <Info />
        <Margin height='100px' />
        <Title text='Highlighted Projects' />
      </Fade>
      <Fade left>
        <Project
          imageFirst={true}
          image={PaintGif} 
          title={'Paint'}
          overview={
            `A simple java paint application, geared towards people who like digital 
            drawing and taking quick notes. There are numerous tools for drawing with differents pens,
            opacity sliders, size sliders and more. You can also import or export an image or just create
            a new image from scratch.`
          }
          githubLink={'https://github.com/ahmad-masud/Paint'} 
          link={Paint}
          stacks={['Java', 'Java Swing', 'Java Frames']}
        />
      </Fade>
      <Fade right>
        <Project
          imageFirst={false}
          image={WebsiteGif} 
          title={'My First Website'}
          overview={
            `A simple java paint application, geared towards people who like digital 
            drawing and taking quick notes. There are numerous tools for drawing with differents pens,
            opacity sliders, size sliders and more. You can also import or export an image or just create
            a new image from scratch.`
          }
          githubLink={'https://github.com/ahmad-masud/my-first-website'}
          link={'https://ahmadmasud.com/my-first-website/'}
          stacks={['HTML', 'CSS', 'Javascript']}
        />
      </Fade>
      <Fade top>
        <Project
          imageFirst={true}
          image={SortGif} 
          title={'Sorting Algorithm Visualizer'} 
          overview={
            `An application that implements java swing to draw out a visual of the process of loop sorting. 
            There are interactive buttons to visualize different sorting algorithms and a slider to change 
            the delay in between swaps. The height of each bar corresponds to its value and its x position 
            corresponds to its index in the array.`
          }
          githubLink={'https://github.com/ahmad-masud/Sorting-Algorithm-Visualizer'} 
          link={SortingAlgorithmVisualizer}
          stacks={['Java', 'Java Swing', 'Java Frames']}
        />
      </Fade>
        <Margin height='100px' />
      <Fade>
        <Skills />
      </Fade>
    </div>
  );
}

export default Home;
