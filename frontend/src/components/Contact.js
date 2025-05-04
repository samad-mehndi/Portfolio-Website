import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fgk5uxg',       // EmailJS service ID
      'template_3efxhq9',      // Template ID
      form.current,
      '45tAFf9zZKQpXigN_'      // Public key
    )
    .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
    }, () => {
        alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section id='contact' style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '60px 30px',
      gap: '90px',
      fontFamily: 'Orbitron, sans-serif'
    }}>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} style={{
        flex: '1 1 300px',
        maxWidth: '590px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%'
      }}>
        <h2 style={{ fontSize: '30px', fontWeight: '700', color: 'rgb(15, 37, 20)', letterSpacing: '1px' }}>Contact Me</h2>
        <input type="text" name="name" placeholder="Your Name" required
          style={{ padding: '14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }} />
        <input type="email" name="email" placeholder="Your Email" required
          style={{ padding: '14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }} />
        <textarea name="message" placeholder="Your Message" rows="5" required
          style={{ padding: '14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}></textarea>
        <button type="submit"
          style={{
            padding: '14px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'rgb(15, 37, 20)',
            color: 'white',
            fontWeight: '600',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgb(15, 37, 20)'}
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div style={{
        flex: '1 1 250px',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
      }}>
        <h2 style={{ fontSize: '30px', fontWeight: '700', letterSpacing: '1px', color: 'rgb(15, 37, 20)' }}>Get in Touch</h2>
        <p style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'cursive' }}><FaEnvelope /> mehndi.samad@gmail.com</p>
        <p style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'cursive' }}><FaPhone /> +1 (469) 579-8267</p>
        <p style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'cursive' }}><FaMapMarkerAlt /> Dallas, TX</p>
      </div>
    </section>
  );
};

export default Contact;
