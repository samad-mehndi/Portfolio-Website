import React, { useState, useEffect } from "react";

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#222",
    color: "#eee",
    position: "relative",
    zIndex: 1000,
  },
  logoContainer: {
    fontSize: "1.8rem",
    fontWeight: "700",
    fontFamily: "'Courier New', Courier, monospace",
  },
  links: {
    display: "flex",
    gap: "35px",
  },
  link: {
    color: "#eee",
    textDecoration: "none",
    fontSize: "1.4rem",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "300",
    letterSpacing: "1.5px",
    lineHeight: "1.8",
    transition: "color 0.3s, transform 0.2s",
  },
  linkHover: {
    color: "#ff5722",
    transform: "scale(1.1)",
  },
  hamburger: {
    fontSize: "1.8rem",
    cursor: "pointer",
    display: "none",
  },
  mobileMenu: {
    display: "none",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "20px",
    backgroundColor: "#222",
    padding: "10px",
    borderRadius: "8px",
    zIndex: 999,
  },
  mobileLink: {
    padding: "10px 0",
    textAlign: "right",
  },
};

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 888);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <a href="#home" style={{ textDecoration: "none" }}>
          <div className="rect-logo">
            <span className="typewriter">Samad Mehndi</span>
          </div>
        </a>
      </div>

      {/* Desktop Links */}
      {!isMobileView && (
        <div className="nav-links" style={styles.links}>
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
      )}

      {/* Hamburger Icon */}
      <div
        style={{ ...styles.hamburger, display: isMobileView ? "block" : "none" }}
        onClick={toggleMobileMenu}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && isMobileView && (
        <div style={{ ...styles.mobileMenu, display: 'flex' }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ ...styles.link, ...styles.mobileLink }}
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
