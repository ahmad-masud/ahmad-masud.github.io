import AnimatePage from '../AnimatePage';
import ProjectsComponent from '../Components/Projects/ProjectsComponent';

function Projects() {
  return (
    <div className='projects'>
      <AnimatePage>
        <ProjectsComponent />
      </AnimatePage>
    </div>
  );
}

export default Projects;