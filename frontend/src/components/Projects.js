import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "AI Resource Allocation",
    description: "An ML model to optimize GPU usage",
    image: "", // Placeholder for image URL if needed
    github: "https://github.com/samad-mehndi/gpu_resource_allocation",
    tech: ["Machine Learning", "Python", "TensorFlow"],
  },
  {
    title: "Mental Health Chatbot",
    description: "An NLP-powered conversational chatbot",
    image: "",
    github: "https://github.com/samad-mehndi/NLP-mental-health-chatbot",
    tech: ["NLP", "React", "FastAPI"],
  },
  {
    title: "Real Estate Web App",
    description: "A full-stack web application for real estate listings",
    image: "",
    github: "https://github.com/samad-mehndi/real-estate-app",
    tech: ["Node", "React", "MongoDB"],
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio website to showcase my work",
    image: "/portfolio.png",
    github: "https://github.com/samad-mehndi/Portfolio-Website",
    tech: ["Node", "React", "MongoDB"],
  },
];

const styles = {
  hr: {
    width: "100px",
    border: "2px solid #007acc",
    margin: "auto",
    marginBottom: "40px",
  },
};

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });
  return (
    <section id="projects" className="projects-section" ref={ref}>
      <h2 id="heading">Projects</h2>
      <hr style={styles.hr} />

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div
            className={`project-card ${inView ? "project-card-visible" : ""}`}
            key={index}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-description">{proj.description}</p>
            <div className="project-tech">
              {proj.tech.map((techItem, idx) => (
                <span key={idx}>{techItem}</span>
              ))}
            </div>
            <a
              className="github-link"
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
