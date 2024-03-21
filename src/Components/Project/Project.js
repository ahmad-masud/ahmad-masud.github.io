import { useState, useEffect } from 'react';
import './Project.css';

function Project({ data }) {
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
    <div className='projects'>
      <div className='project-container'>
        <div className='project'>
          <img className='project-image' src={imageSrc} alt={data.title + " Image"} width='40%' />
          <div className='project-info-container'>
            <div className='project-header-container'>
              <span className='project-title'>{data.title}</span>
              <span className='project-date'>{data.date}</span>
            </div>
            <p className='project-overview'>{data.description}</p>
            <div className='box-list-container'>
              <div className='links'>
                <a aria-label='github' href={data.github} className='link' target='_blank' rel="noreferrer"><i className="bi bi-github"></i> Github <i className="bi bi-box-arrow-up-right"></i></a>
                {(data.link != null) && <a href={data.link} className='link' target='_blank' rel="noreferrer">Visit <i className="bi bi-box-arrow-up-right"></i></a>}
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
