import React, { useState } from "react";

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#222",
        color: "#eee",
    },
    logoContainer: {
        fontSize: "1.8rem",
        fontWeight: "700",
        fontFamily: "'Courier New', Courier, monospace", // Updated font style
    },
    links: {
        display: "flex",
        gap: "20px",
    },
    link: {
        color: "#eee",
        textDecoration: "none",
        fontSize: "1.4rem",
        fontFamily: "'Roboto', sans-serif", // Updated font style
        fontWeight: "400", // Adjusted font weight
        letterSpacing: "1.5px", // Adjusted letter spacing
        lineHeight: "1.8", // Adjusted line height
        transition: "color 0.3s, transform 0.2s", // Added transform transition
    },
    linkHover: {
        color: "#ff5722",
        transform: "scale(1.1)", // Added hover effect
    },
};

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav style={styles.nav}>
      {/* Logo on Left */}
      <div style={styles.logoContainer}>
        <a href="#home" style={{ textDecoration: "none" }}>
          <div className="rect-logo">
            <span className="typewriter">Samad Mehndi</span>
          </div>
        </a>
      </div>

      {/* Links on Right */}
      <div style={styles.links}>
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              ...styles.link,
              ...(hoveredIndex === index ? styles.linkHover : {}),
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
