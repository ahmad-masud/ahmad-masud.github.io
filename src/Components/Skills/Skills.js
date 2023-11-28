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
    'C',
    'C++',
    'OPP',
    'GatsbyJS',
    'GraphQL',
    'Java',
    'RISC-V',
    'MATLAB',
  ];

  const miscSkills=[
    'Blender',
    'Photoshop',
    'Game Testing',
    'Organization',
    'Customer Serivce',
    'Communication',
    'Spanish',
    'Urdu',
    'Weightlifting',
    'Leadership',
    'Tutoring',
    'Teamwork',
  ]

  codingSkills.sort();
  miscSkills.sort();

  return (
    <div className='skills'>
      <div className='skills-container'>
        <header className='skills-title'>Some of my Skills</header>
        <header className='skills-subtitle'>Technical</header>
        <ul className='skills-list'>
          {codingSkills.map((skill, index) => (
            <li className='skills-item' key={index}>{skill}</li>
          ))}
        </ul>
        <header className='skills-subtitle'>Miscellaneous</header>
        <ul className='skills-list'>
          {miscSkills.map((skill, index) => (
            <li className='skills-item' key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;