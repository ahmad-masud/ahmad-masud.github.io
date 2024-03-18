import { useState, useEffect } from 'react';
import './Experience.css';

function Experience({ data }) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../../Content/images/${data.image}`);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Failed to load image", error);
        setImageSrc('path/to/default/or/error/image.jpg');
      }
    };

    loadImage();
  }, [data.image]);

  return (
    <div className='experience'>
      <div className='experience-container'>
        <img className='experience-image' src={imageSrc} alt={data.title + " Image"} width='30%' />
        <div className='experience-info-container'>
          <div className='experience-header-container'>
            <span className='experience-date'>
              {data.startDate} - {data.present ? 'Present' : data.endDate}
            </span>
            <header className='experience-title'>{data.title} • {data.company}</header>
          </div>
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