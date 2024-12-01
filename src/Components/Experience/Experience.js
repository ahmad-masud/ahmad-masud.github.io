import { useState, useEffect } from 'react';
import './Experience.css';

function Experience({ data }) {
  const [imageSrc, setImageSrc] = useState('');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../../Content/images/${data.image}`);
        setImageSrc(image.default);
      } catch (error) {
        console.error('Failed to load image', error);
        setImageSrc('path/to/default/or/error/image.jpg');
      }
    };

    loadImage();
  }, [data.image]);

  return (
    <div className="experience">
      <div className="experience-container">
        <div className="experience-info-container">
          <div className="experience-header-container">
            <div className="experience-image-container">
              <img
                className={`experience-image ${isImageLoaded ? 'loaded' : 'loading'}`}
                src={imageSrc}
                alt={data.title + ' Image'}
                width="100px"
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
            <div className="experience-sub-header-container">
              <div className="experience-header">
                <span className="experience-title">{data.company}</span>
                <span className="experience-position">{data.position}</span>
              </div>
              <div className="experience-header">
                <span className="experience-date">
                  {data.startDate} - {data.present ? 'Present' : data.endDate}
                </span>
                <span className="experience-location">{data.location}</span>
              </div>
            </div>
          </div>
          <ul className="experience-list">
            {data.listItems.map((listItem, index) => (
              <li className="experience-list-item" key={index}>
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
