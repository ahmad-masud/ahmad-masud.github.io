import Project from '../../Components/Project/Project.js';
import DrawMavenGif from '../../Images/DrawMaven.gif'
import WebsiteGif from '../../Images/Website.gif';
import SortGif from '../../Images/SortingVisualizer.gif';
import CurrencyGif from '../../Images/CurrencyConverter.gif';
import CalculatorGif from '../../Images/Calculator.gif';


function Projects() {
  return (
    <div className='projects'>
      <Project
        image={DrawMavenGif} 
        title={'DrawMaven'}
        overview={
          `DrawMaven is a simple drawing program designed for ease of use and versatility. With DrawMaven, you can create 
          beautiful drawings with a variety of tools such as pencils, brushes, shapes, and text. You can also adjust the size, 
          color, and opacity of your tools to create the perfect design. DrawMaven has an intuitive user interface that allows 
          for easy navigation and use of its features.`
        }
        githubLink={'https://github.com/ahmad-masud/DrawMaven'} 
        link={'https://github.com/ahmad-masud/DrawMaven/raw/main/DrawMaven/dist/DrawMaven.jar'}
        stacks={['Java', 'Java Swing', 'Java Frames']}
      />
      <Project
        image={WebsiteGif} 
        title={'My First Website'}
        overview={
          `I created an intuitive and visually appealing website using HTML, CSS, and Javascript. This project started as a 
          fun project during my high school years and it turned out to be great. The website showcases my personal 
          information and accomplishments, making it the perfect platform for people to get to know me.`
        }
        githubLink={'https://github.com/ahmad-masud/my-first-website'}
        link={'https://ahmadmasud.xyz/my-first-website/'}
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
        githubLink={'https://github.com/ahmad-masud/Sorting-Algorithm-Visualizer'} 
        link={'https://github.com/ahmad-masud/Sorting-Visualizer/raw/main/SortingVisualizer/dist/SortingVisualizer.jar'}
        stacks={['Java', 'Java Swing', 'Java Frames']}
      />
      <Project
        image={CurrencyGif} 
        title={'Currency Converter'} 
        overview={
          `An application using React that leverages Java and JSX to facilitate currency conversion across different countries. 
          This project allowed me to enhance my React proficiency and gain hands-on experience in making API calls with external 
          websites and servers. Not only did this project provide me with an opportunity to improve my skills, but it also serves 
          a practical purpose and can benefit a broad range of users.`
        }
        githubLink={'https://github.com/ahmad-masud/currency-converter'} 
        link={'https://ahmadmasud.xyz/currency-converter/'}
        stacks={['Javascript', 'React', 'JSX', 'CSS']}
      />
      <Project
        image={CalculatorGif} 
        title={'Calculator'}
        overview={
          `A straightforward calculator application that implements java swing. 
          There are many buttons for different mathematical operations such as adding, 
          subtracting, multiplication, division, and percentages.`
        }
        githubLink={'https://github.com/ahmad-masud/Calculator'} 
        stacks={['Java', 'Java Swing', 'Java Frames']}
      />
    </div>
  );
}

export default Projects;
