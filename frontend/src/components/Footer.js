import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111', color: '#ccc', padding: '20px 0' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {/* Left: Rights Text */}
        <p style={{ margin: 0, fontSize: '14px' }}>© 2025 Samad Mehndi. All rights reserved.</p>

        {/* Right: Name and Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <a href="https://github.com/samad-mehndi" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc' }}>
            <FaGithub size={25} />
          </a>
          <a href="https://www.linkedin.com/in/samad-mehndi/" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc' }}>
            <FaLinkedin size={25} />
          </a>
          <a href="https://instagram.com/zaidisamad_" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc' }}>
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
