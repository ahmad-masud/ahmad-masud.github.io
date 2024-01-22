import './Experience.css';
import Fade from 'react-reveal/Fade';

function Experience({data}) {
  return (
    <Fade right>
      <div className='experience'>
        <div className='experience-container'>
          <img className='experience-image' src={data.image} alt={data.title + "Image"}></img>
          <div className='experience-info-container'>
            <div className='experience-header-container'>
              <span className='experience-date'>{data.date}</span>
              <header className='experience-title'>{data.title}</header>
            </div>
            <p className='experience-paragraph'>{data.description}</p>
            <ul className='experience-list'>
                {data.listItems.map((listItem, index) => (
                  <li className='experience-list-item' key={index}>{listItem}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Experience;
