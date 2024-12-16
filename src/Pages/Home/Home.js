import { useEffect } from "react";
import Hero from "../../Components/Hero/Hero.js";
import Bio from "../../Components/Bio/Bio.js";
import Skills from "../../Components/Skills/Skills.js";
import Project from "../../Components/Project/Project.js";
import projects from "../../Content/projects.json";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "Ahmad Masud";
  }, []);

  return (
    <div className="home">
      <Hero />
      <Bio />
      <p className="projects-title">Highlighted Projects</p>
      <div className="projects">
        {projects.map(
          (project, index) =>
            project.pinned && <Project key={index} data={project} />
        )}
      </div>
      <div className="projects-link-container">
        <Link to="/projects" className="projects-link">
          View all projects {">"}
        </Link>
      </div>
      <Skills />
    </div>
  );
}

export default Home;
