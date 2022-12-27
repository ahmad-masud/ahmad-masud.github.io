import './Project.css';

function Project(props) {

  const titleStyle = {
    color: props.titleColor
  }

  const stacks = props.stacks.map((stack) =>
    <li className='stack'>{stack}</li>
  );

  return (
    <div className='projects'>
        <div className='project-container'>
            <div className='project'>
                <img className='project-gif' src={props.image}></img>
                <div className='project-info-container'>
                    <header className='project-title' style={titleStyle}>{props.title}</header>
                    <p className='project-overview'>{props.overview}</p>
                    <a href={props.link} className='github-link' target='_blank'><i className="fa-brands fa-github"></i> Github <i class="fa-solid fa-arrow-up-right-from-square icon"></i></a>
                    <ul className='stacks'>
                      {stacks}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Project;