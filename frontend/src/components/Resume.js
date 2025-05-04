import React, { useState, useEffect } from 'react';

function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  // Escape key and scroll lock
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', handleEsc);

    // Scroll lock
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const buttonStyle = {
    padding: '12px 20px',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const previewButton = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white',
  };

  const downloadButton = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: 'white',
    textDecoration: 'none',
  };

  const modalStyle = {
    visibility: isOpen ? 'visible' : 'hidden',
    opacity: isOpen ? 1 : 0,
    transition: 'opacity 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
    backdropFilter: 'blur(4px)'

  };

  const iframeStyle = {
    width: '80%',
    maxWidth: '900px',
    height: '90%',
    border: '2px solid white',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
  };

  const closeBtnStyle = {
    position: 'absolute',
    top: '25px',
    right: '35px',
    fontSize: '40px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div id='resume'  style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', fontFamily: 'Orbitron, sans-serif' }}>Resume</h2>
      <hr style={{ width: '100px', border: '2px solid #007acc', margin: 'auto', marginBottom: '40px' }} />
      <div>
        <button style={previewButton} onClick={() => setIsOpen(true)}>
          Preview Resume
        </button>

        <a href="/samad_mehndi_resume_.pdf" download style={downloadButton}>
          Download PDF
        </a>
      </div>

      {/* Modal with animated fade-in and scroll lock */}
      <div style={modalStyle}>
        <span onClick={() => setIsOpen(false)} style={closeBtnStyle}>&times;</span>
        <iframe
          src="/samad_mehndi_resume_.pdf"
          title="Samad Mehndi Resume"
          style={iframeStyle}
        />
      </div>
    </div>
  );
}

export default Resume;
