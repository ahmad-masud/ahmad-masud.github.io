import "./Skills.css";
import skills from "../../Content/skills.json";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-container">
        <header className="skills-title">Some of my Skills</header>
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <header className="skills-subtitle">
              {skillCategory.category}
            </header>
            <ul className="skills-list">
              {skillCategory.skills.map((skill, index) => (
                <li className="skills-item" key={index}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
