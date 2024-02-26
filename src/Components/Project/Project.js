import { Link } from 'react-router-dom';
import './Project.css';

function Project({data}) {
  return (
    <div className='projects'>
        <div className='project-container'>
            <div className='project'>
              {data.video ? (
                <video poster={data.poster} className='project-media' playsInline muted autoPlay loop>
                  <source src={data.media} type='video/webm'></source>
                  <source src={data.mediaFallback} type='video/mp4'></source>
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img className='project-media' src={data.media} alt={data.title + " Media"} width='40%'></img>
              )}
              <div className='project-info-container'>
                <div className='project-header-container'>
                  <span className='project-date'>{data.date.getMonth() + 1}/{data.date.getFullYear()}</span>
                  <header className='project-title'>{data.title}</header>
                </div>
                <p className='project-overview'>{data.description}</p>
                <div className='box-list-container'>
                  <div className='links'>
                    <Link to={'/projects/'+data.title.replace(/\s+/g, '-')} className='link'>View</Link>
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
            </div>
        </div>
    </div>
  );
}

export default Project;