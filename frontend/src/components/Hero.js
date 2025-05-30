import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const profilePic = process.env.PUBLIC_URL + "/profile1.png";

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="home" style={styles.hero}>
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={styles.particlesStyle}
        options={{
          fullScreen: { enable: false },
          background: { color: "#f7faff" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: "#007acc" },
            links: {
              color: "#007acc",
              distance: 130,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "bounce" },
            },
            number: {
              value: 50,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Content */}
      <div style={styles.content}>
        <img src={profilePic} alt="Samad Mehndi" style={styles.profileImage} />
        <h1 style={styles.title}>Samad Mehndi</h1>
        <p style={styles.subtitle}>
          Machine Learning • Embedded Systems • Web Developer
        </p>
        <a href="/Resume_SamadMehndi5.pdf" download style={styles.button}>
          Download Resume
        </a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    minHeight: "520px",
    padding: "80px 20px",
    textAlign: "center",
    overflow: "hidden",
    background: "linear-gradient(135deg, #f7faff, #e6f0ff)",
    color: "#222",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  particlesStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
  },
  content: {
    position: "relative",
    zIndex: 1,
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "top", // <-- this pushes image downward
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
  }
  ,
  title: {
    fontSize: "2.8rem",
    fontFamily: "'Orbitron', sans-serif",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.1rem",
    marginBottom: "25px",
    color: "#555",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007acc",
    color: "white",
    border: "none",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Hero;
