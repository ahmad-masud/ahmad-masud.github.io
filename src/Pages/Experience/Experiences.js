import loadExperiencesData from '../../ExperiencesData/loadExperiencesData.js'
import Experience from '../../Components/Experience/Experience.js'
import './Experience.css'

function Experiences() {

  const expereinecesData = loadExperiencesData()

  return (
    <div className='experiences'>
      <p className='experiences-title'>Experiences</p>
      {expereinecesData.map((expereinecesData, index) => (
        <Experience
          key={index}
          data={expereinecesData}
        />
      ))}
    </div>
  );
}

export default Experiences;