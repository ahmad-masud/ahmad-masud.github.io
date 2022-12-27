import './Skills.css';

function Skills() {

  const codingSkills=[
    'HTML',
    'Javascript',
    'Typescript',
    'Python',
    'CSS',
    'Lua',
    'React',
    'Gamemaker GML',
    'npm',
  ];

  const miscSkills=[
    'Blender',
    'Photoshop',
    'Game Testing',
    'Organization',
    'In-store support',
    'High-energy attitude',
    'Computer Skills',
    'Communication',
    'Spanish',
    'Urdu',
    'Weightlifting',
  ]

  return (
    <div className='skills'>
      <div className='skills-container'>
        <header className='skills-title'>Some of my Skills!</header>
        <header className='skills-subtitle'>Coding</header>
        <ul className='skills-list'>
          {codingSkills.map(function (skill) {
            return <li className='skills-item'>{skill}</li>
          })}
        </ul>
        <header className='skills-subtitle'>Miscellaneous</header>
        <ul className='skills-list'>
          {miscSkills.map(function (skill) {
            return <li className='skills-item'>{skill}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default Skills;