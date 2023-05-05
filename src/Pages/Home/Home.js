import Hero from '../../Components/Hero/Hero.js';
import Info from '../../Components/Info/Info.js';
import Skills from '../../Components/Skills/Skills.js';
import Project from '../../Components/Project/Project.js';
import DrawMavenGif from '../../Images/DrawMaven.gif'
import CurrencyGif from '../../Images/CurrencyConverter.gif';
import SortGif from '../../Images/SortingVisualizer.gif';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Info />
      <p className='projects-title'>Highlighted Projects</p>
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
        image={SortGif} 
        title={'Sorting Visualizer'} 
        overview={
          `An application that implements java swing to draw out a visual of the process of loop sorting. 
          There are interactive buttons to visualize different sorting algorithms and a slider to change 
          the delay in between swaps. The height of each bar corresponds to its value and its x position 
          corresponds to its index in the array.`
        }
        githubLink={'https://github.com/ahmad-masud/Sorting-Visualizer'} 
        link={'https://github.com/ahmad-masud/Sorting-Visualizer/raw/main/SortingVisualizer/dist/SortingVisualizer.jar'}
        stacks={['Java', 'Java Swing', 'Java Frames']}
      />
      <div className='projects-link-container'>
        <Link to='/projects/' className='projects-link'>View all projects {'>'}</Link>
      </div>
      <Skills />
    </div>
  );
}

export default Home;
