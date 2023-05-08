import './Experience.css';

function Experience({data}) {
  return (
    <div className='experience'>
      <div className='experience-container'>
        <img className='experience-image' src={data.image} alt={data.title + "Image"}></img>
        <div className='experience-info-container'>
          <div className='experience-header-container'>
            <a className='experience-date'>{data.date}</a>
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
  );
}

export default Experience;
