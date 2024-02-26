import { Link } from 'react-router-dom';
import './ProjectPage.css';

function ProjectPage({data}) {
  return (
    <div className='project-page'>
      <div>
        <p className='project-page-title'>{data.title}</p>
        <p className='project-page-date'>{data.date.getMonth() + 1}/{data.date.getFullYear()}</p>
      </div>
      <div className='project-page-container'>
        <div className='project-page-media'>
          {data.video ? (
            <video poster={data.poster} className='project-page-media' controls muted>
              <source src={data.media} type='video/webm'></source>
              <source src={data.mediaFallback} type='video/mp4'></source>
              Your browser does not support the video tag.
            </video>
          ) : (
            <img className='project-page-media' src={data.media} alt={data.title + " Media"} width='100%'></img>
          )}
        </div>
        <div className='project-page-info-container'>
          <p className='project-page-overview'>{data.description}</p>
          <div className='box-list-container'>
            <div className='links'>
            <a aria-label='github' href={data.github} className='link' target='_blank' rel="noreferrer"><i className="bi bi-github"></i> Github <i className="bi bi-box-arrow-up-right"></i></a>
            {(data.link != null) && <a href={data.link} className='link' target='_blank' rel="noreferrer">Visit <i className="bi bi-box-arrow-up-right"></i></a>}
            <a aria-label='star github repo' href={data.github+'/stargazers'} className='star-link' target='_blank' rel="noreferrer"><i className="star-link bi bi-star-fill"></i></a>
            </div>
            <ul className='stacks'>
              {data.stacks.map((stack, index) => (
                <li className='stack' key={index}>{stack}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='project-page-link-container'>
          <Link to='/projects/' className='projects-link'>{'<'} Return to all projects</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;