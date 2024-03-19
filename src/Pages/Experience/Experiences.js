import { useEffect } from 'react';
import experiences from '../../Content/experiences.json';
import Experience from '../../Components/Experience/Experience.js'
import './Experiences.css'

function Experiences() {
  useEffect(() => {
    document.title = 'Experience | Ahmad Masud';
  }, []);
  
  return (
    <div className='experiences'>
      <p className='experiences-title'>Experiences</p>
      {experiences.map((experience, index) => (
        <Experience
          key={index}
          data={experience}
        />
      ))}
    </div>
  );
}

export default Experiences;