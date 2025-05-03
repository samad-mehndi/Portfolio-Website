import React, { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((proj, index) => (
          <div className={styles.card} key={index}>
            {/* Optional image placeholder */}
            <div className={styles.image}></div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link || "#"} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
