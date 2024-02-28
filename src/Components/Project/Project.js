import './Project.css';

function Project({ data }) {
  return (
    <div className='projects'>
        <div className='project-container'>
            <div className='project'>
            <img className='project-image' src={require(`../../Content/images/${data.image}`)} alt={data.title + " Image"} width='40%' />
              <div className='project-info-container'>
                <div className='project-header-container'>
                  <span className='project-date'>{data.date}</span>
                  <header className='project-title'>{data.title}</header>
                </div>
                <p className='project-overview'>{data.description}</p>
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
            </div>
        </div>
    </div>
  );
}

export default Project;