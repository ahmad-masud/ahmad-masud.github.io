import './Highlights.css';
import PaintGif from '../../Images/Paint.gif'
import WebsiteGif from '../../Images/Website.gif'
import SortGif from '../../Images/SortingVisualizer.gif'

function Highlights() {
  return (
    <div className='highlights'>
        <div className='highlights-container'>
            <header className='highlights-title'>Projects</header>
            <div className='projects-container'>
                <div className='project'>
                    <img className='project-gif' src={PaintGif}></img>
                    <div className='project-info-container'>
                        <header className='project-title project-title-1'>Paint</header>
                        <p className='project-overview'>
                            A simple java paint application, geared towards people who like digital 
                            drawing and taking quick notes. There are numerous tools for drawing with differents pens,
                            opacity sliders, size sliders and more. You can also import or export an image or just create
                            a new image from scratch.
                        </p>
                        <a href='https://github.com/ahmad-masud/Paint' className='github-link' target='_blank'><i className="fa-brands fa-github"></i> Github <i class="fa-solid fa-arrow-up-right-from-square icon"></i></a>
                        <ul className='stacks'>
                            <li className='stack'>Java</li>
                            <li className='stack'>Java Swing</li>
                        </ul>
                    </div>
                </div>
                <div className='project'>
                    <div className='project-info-container'>
                        <header className='project-title project-title-2'>My First Website</header>
                        <p className='project-overview'
                            >My very first website which I created in grade 12 written in plain html, css and
                            javascript. It is very responsive and you can learn a little about me scrolling through 
                            it.
                        </p>
                        <a href='https://github.com/ahmad-masud/my-first-website' className='github-link' target='_blank'><i className="fa-brands fa-github"></i> Github <i class="fa-solid fa-arrow-up-right-from-square icon"></i></a>
                        <ul className='stacks'>
                            <li className='stack'>Html</li>
                            <li className='stack'>Css</li>
                            <li className='stack'>Javascript</li>
                        </ul>
                    </div>
                    <img className='project-gif' src={WebsiteGif}></img>
                </div>
                <div className='project'>
                    <img className='project-gif' src={SortGif}></img>
                    <div className='project-info-container'>
                        <header className='project-title project-title-3'>Sorting Algorithm Visualizer</header>
                        <p className='project-overview'>
                            An application that implements java swing to draw out a visual of the process of loop sorting. 
                            There are interactive buttons to visualize different sorting algorithms and a slider to change 
                            the delay in between swaps. The height of each bar corresponds to its value and its x position 
                            corresponds to it's index in the array.
                        </p>
                        <a href='https://github.com/ahmad-masud/Sorting-Algorithm-Visualizer' className='github-link'><i className="fa-brands fa-github" target='_blank'></i> Github <i class="fa-solid fa-arrow-up-right-from-square icon"></i></a>
                        <ul className='stacks'>
                            <li className='stack'>Java</li>
                            <li className='stack'>Java Swing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Highlights;