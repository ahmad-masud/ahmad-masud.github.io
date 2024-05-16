import { useEffect } from 'react';
import './Education.css';
import education from '../../Content/education.json';

function Education() {
  useEffect(() => {
    document.title = 'Education | Ahmad Masud';
  }, []);

  return (
    <div className='education'>
      <p className='education-title'>Education</p>
      <div className='transcript'>
        <div className='transcript-container'>
          <div className='transcript-headers'>
            <div className='transcript-header'>
              <p className='transcript-school'>{education.school}</p>
              <p className='transcript-study'>{education.study}</p>
            </div>
            <div className='transcript-header'>
              <p className='transcript-date'>Expected Graduation: {education.graduationDate}</p>
              <p className='transcript-location'>{education.location}</p>
            </div>
          </div>
          <div className='transcript-sections'>
            {education.courses.map((section) => (
              <div key={section.category} className='transcript-section'>
                <p className='transcript-section-title'>{section.category}</p>
                <ul className='course-list'>
                  {section.courses.map((course, index) => (
                    <li key={index} className='course'>{course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;