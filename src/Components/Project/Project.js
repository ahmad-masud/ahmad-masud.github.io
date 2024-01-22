import './Project.css';
import Fade from 'react-reveal/Fade';

function Project({data}) {
  return (
    <Fade left>
      <div className='projects'>
          <div className='project-container'>
              <div className='project'>
                <img className='project-gif' src={data.image} alt={data.title + "Gif"}></img>
                <div className='project-info-container'>
                  <header className='project-title'>{data.title}</header>
                  <p className='project-overview'>{data.description}</p>
                  <div className='box-list-container'>
                    <div className='links'>
                      <a href={data.github} className='link' target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i> Github <i className="fa-solid fa-arrow-up-right-from-square icon"></i></a>
                      {(data.link != null) && <a href={data.link} className='link' target='_blank' rel="noreferrer">Visit <i className="fa-solid fa-arrow-up-right-from-square icon"></i></a>}
                      <a href={data.github+'/stargazers'} className='star-link' target='_blank' rel="noreferrer"><i className="fa-solid fa-star"></i></a>
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
    </Fade>
  );
}

export default Project;