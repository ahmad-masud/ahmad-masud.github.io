import Project from '../Components/Project/Project.js';
import PaintGif from '../Images/Paint.gif'
import WebsiteGif from '../Images/Website.gif'
import SortGif from '../Images/SortingVisualizer.gif'
import Header from '../Components/Header/Header.js'
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <div className='projects'>
      <Fade>
        <Header text='Projects' />
        <Project
          image={PaintGif} 
          title={'Paint'}
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
          overview={
            `An application that implements java swing to draw out a visual of the process of loop sorting. 
            There are interactive buttons to visualize different sorting algorithms and a slider to change 
            the delay in between swaps. The height of each bar corresponds to its value and its x position 
            corresponds to its index in the array.`
          }
          link={'https://github.com/ahmad-masud/Sorting-Algorithm-Visualizer'} 
          stacks={['Java', 'Java Swing']}
        />
      </Fade>
    </div>
  );
}

export default Projects;