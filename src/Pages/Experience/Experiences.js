import loadExperiences from '../../Content/Experiences/loadExperiences.js'
import Experience from '../../Components/Experience/Experience.js'
import './Experience.css'

function Experiences() {
  const experiences = loadExperiences()

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