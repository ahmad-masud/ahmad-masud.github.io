import Hero from '../Components/Hero/Hero.js';
import Info from '../Components/Info/Info.js';
import Skills from '../Components/Skills/Skills.js';
import Project from '../Components/Project/Project.js';
import PaintGif from '../Images/Paint.gif';
import DrawMavenGif from '../Images/DrawMaven.gif'
import WebsiteGif from '../Images/Website.gif';
import SortGif from '../Images/SortingVisualizer.gif';
import Fade from 'react-reveal/Fade';
import Title from '../Components/Title/Title.js';
import Margin from '../Components/Margin/Margin.js';

function Home() {
  return (
    <div className='home'>
      <Fade>
        <Hero />
        <Info />
        <Margin height='100px' />
        <Title text='Highlighted Projects' />
      </Fade>
      <Fade bottom>
        <Project
          imageFirst={true}
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
      </Fade>
      <Fade bottom>
        <Project
          imageFirst={false}
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
      </Fade>
      <Fade bottom>
        <Project
          imageFirst={true}
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
      </Fade>
        <Margin height='100px' />
      <Fade>
        <Skills />
      </Fade>
    </div>
  );
}

export default Home;
