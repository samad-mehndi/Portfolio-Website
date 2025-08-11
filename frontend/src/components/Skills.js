import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  const skills = [
    { name: "Machine Learning", level: 95 },
    { name: "React.js", level: 95 },
    { name: "C++", level: 95 },
    { name: "Python", level: 95 },
    { name: "Node.js", level: 95 },
    { name: "SQL", level: 95 },
    { name: "NoSQL", level: 95 },
    { name: "Data Engineering (ETL, Apache Spark, Airflow)", level: 94 },
    { name: "Data Science (Pandas, NumPy, Matplotlib)", level: 93 },
    { name: "Cloud Platforms (AWS/GCP/Azure)", level: 95 },
    { name: "API Development", level: 95 },
    { name: "Embedded Systems", level: 95 },
  ];

  const getBarColor = (level) => {
    if (level <= 20) return "#e74c3c"; // red
    if (level <= 50) return "#f39c12"; // orange
    if (level <= 65) return "#f1c40f"; // yellow-green
    return "#2ecc71"; // green
  };

  const [hoverStates, setHoverStates] = useState(
    Array(skills.length).fill(false)
  );

  return (
    <section id="skills" style={styles.section} ref={ref}>
      <h2 style={styles.heading}>Skills</h2>
      <hr style={styles.hr} />
      <div style={styles.grid}>
        {skills.map((skill, index) => {
          const hover = hoverStates[index];

          return (
            <div
              key={index}
              onMouseEnter={() =>
                setHoverStates((prev) =>
                  prev.map((state, i) => (i === index ? true : state))
                )
              }
              onMouseLeave={() =>
                setHoverStates((prev) =>
                  prev.map((state, i) => (i === index ? false : state))
                )
              }
              style={{
                ...styles.skillBox,
                ...(inView ? styles.skillBoxVisible : {}),
                ...(hover ? styles.skillBoxHover : {}),
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <h3 style={styles.skillName}>{skill.name}</h3>
              <div style={styles.progressContainer}>
                <div
                  style={{
                    ...styles.progressBar,
                    width: `${skill.level}%`,
                    backgroundColor: getBarColor(skill.level),
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#f8fbff",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontFamily: "'Orbitron', sans-serif",
    marginBottom: "10px",
  },
  hr: {
    width: "100px",
    border: "2px solid #007acc",
    margin: "auto",
    marginBottom: "40px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  },
  skillBox: {
    width: "260px",
    height: "50px",
    opacity: 0,
    transform: "translateY(40px) scale(0.95)",
    transition: "all 0.2s ease-out",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "left",
    position: "relative",
  },
  skillBoxVisible: {
    opacity: 1,
    transform: "translateY(0) scale(1)",
  },
  skillBoxHover: {
    transform: "scale(1.25)",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    zIndex: 2,
  },
  skillName: {
    fontSize: "1.2rem",
    marginTop: "0",
    marginBottom: "10px",
    fontFamily: "'Courier New', monospace",
    fontWeight: "bold",
    color: "#007acc",
  },
  progressContainer: {
    width: "100%",
    height: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: "5px",
    transition: "width 0.1s ease-out",
  },
};

export default Skills;
