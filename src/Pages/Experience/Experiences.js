import { useEffect } from 'react';
import experiences from '../../Content/experiences.json';
import Experience from '../../Components/Experience/Experience.js';
import './Experiences.css';

function Experiences() {
  useEffect(() => {
    document.title = 'Experience | Ahmad Masud';
  }, []);

  return (
    <div>
      <p className="experiences-title">Experiences</p>
      <div className="experiences">
        {experiences.map((experience, index) => (
          <Experience key={index} data={experience} />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
