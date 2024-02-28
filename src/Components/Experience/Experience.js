import './Experience.css';

function Experience({ data }) {
  return (
    <div className='experience'>
      <div className='experience-container'>
        <img className='experience-image' src={require(`../../Content/images/${data.image}`)} alt={data.title + " Image"} width='30%' />
        <div className='experience-info-container'>
          <div className='experience-header-container'>
            <span className='experience-date'>
              {data.startDate} - {data.present ? 'Present' : data.endDate}
            </span>
            <header className='experience-title'>{data.title} • {data.company}</header>
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