import './ProjectsComponent.css';
import PaintGif from './Paint.gif'
import WebsiteGif from './Website.gif'
import ImagePlaceholder from './placeholder.webp'

function ProjectsComponent() {
  return (
    <div className='projects-component'>
      <header className='projects-component-header'>Projects <span>#</span></header>
        <div className='projects-component-container'>
            <div className='project-component'>
                <img className='project-component-gif' src={PaintGif}></img>
                <div className='project-component-info-container'>
                    <header className='project-component-title project-component-title-1'>Paint</header>
                    <p className='project-component-overview'>
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
            <div className='project-component'>
                <img className='project-component-gif' src={WebsiteGif}></img>
                <div className='project-component-info-container'>
                    <header className='project-component-title project-component-title-2'>My First Website</header>
                    <p className='project-component-overview'
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
            </div>
            <div className='project-component'>
                <img className='project-component-gif' src={ImagePlaceholder}></img>
                <div className='project-component-info-container'>
                    <header className='project-component-title project-component-title-3'>Lorem</header>
                    <p className='project-component-overview'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a className='github-link'><i className="fa-brands fa-github" target='_blank'></i> Github <i class="fa-solid fa-arrow-up-right-from-square icon"></i></a>
                    <ul className='stacks'>
                        <li className='stack'>Lorem</li>
                        <li className='stack'>Ipsum</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProjectsComponent;