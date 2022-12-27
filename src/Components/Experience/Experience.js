import './Experience.css';

function Experience(props) {

  const titleStyle = {
    color: props.titleColor
  }

  const itemsList = props.listItems.map((item) =>
    <li className='experience-list-item'>{item}</li>
  );

  return (
    <div className='experience'>
      <div className='experience-container'>
        <img className='experience-image' src={props.image}></img>
        <div className='experience-info-container'>
          <a className='experience-date'>{props.date}</a>
          <header className='experience-title' style={titleStyle}>{props.title}</header>
          <p className='experience-paragraph'>{props.paragraph}</p>
          <ul className='experience-list'>
            {itemsList}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
