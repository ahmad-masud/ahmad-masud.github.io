import Project from '../Components/Project/Project.js';
import PaintGif from '../Images/Paint.gif'
import WebsiteGif from '../Images/Website.gif'
import SortGif from '../Images/SortingVisualizer.gif'
import CalculatorGif from '../Images/Calculator.gif'
import Header from '../Components/Header/Header.js'
import Fade from 'react-reveal/Fade';
import Paint from '../Files/Paint.jar'
import SortingAlgorithmVisualizer from '../Files/SortingAlgorithmVisualizer.jar'
import Calculator from '../Files/Calculator.jar'

function Projects() {
  return (
    <div className='projects'>
      <Fade>
        <Header text='Projects' />
      </Fade>
      <Fade left>
        <Project
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
      <Fade left>
        <Project
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
      <Fade right>
        <Project
          image={CalculatorGif} 
          title={'Calculator'}
          overview={
            `A straightforward calculator application that implements java swing. 
            There are many buttons for different mathematical operations such as adding, 
            subtracting, multiplication, division, and percentages.`
          }
          githubLink={'https://github.com/ahmad-masud/Calculator'} 
          link={Calculator}
          stacks={['Java', 'Java Swing', 'Java Frames']}
        />
      </Fade>
    </div>
  );
}

export default Projects;