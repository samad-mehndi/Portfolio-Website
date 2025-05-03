import React from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // triggers when 20% of section is visible
  });

  return (
    <section id="about" style={styles.section} ref={ref}>
      <div style={styles.container}>
        <img
          src="/profile1.png"
          alt="My Profile"
          style={{
            ...styles.image,
            ...(inView ? styles.imageAnimated : {}),
          }}
        />
        <div style={{ ...styles.text, ...(inView ? styles.textAnimated : {}) }}>
          <h2 style={styles.heading}>About Me</h2>
          <hr style={styles.hr} />
          <p style={styles.paragraph}>
            I’m a passionate developer pursuing my MS in Computer Engineering at
            UTD. I enjoy working on machine learning, web development, and
            embedded systems. I also have hands-on experience in backend
            systems, embedded devices, and cloud-integrated applications.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#ffffff",
  },
  container: {
    display: "flex",
    alignItems: "flex-start",
    gap: "60px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    width: "340px",
    height: "auto",
    borderRadius: "80px",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    opacity: 0,
    transform: "translateY(30px) scale(0.95)", // ⬇️ + 🔍 initial state
    transition: "all 0.8s ease-out",
  },
  imageAnimated: {
    opacity: 1,
    transform: "translateY(0) scale(1)", // back to normal
  },
  text: {
    maxWidth: "700px",
    textAlign: "left",
    opacity: 0,
    transform: "translateX(30px) scale(0.95)", // ➡️ + 🔍
    transition: "all 1s ease",
    fontStyle: "sans-serif",
  },
  textAnimated: {
    opacity: 1,
    transform: "translateX(0) scale(1)",
  },
  heading: {
    fontSize: "2.8rem",
    fontFamily: "'Orbitron', sans-serif",
    marginBottom: "10px",
  },
  hr: {
    width: "120px",
    border: "1.5px solid #007acc",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.45rem",
    lineHeight: "1.7",
    color: "#444",
  },
};

export default About;
