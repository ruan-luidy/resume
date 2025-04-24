import React, { useState, useRef } from 'react';
import useInView from '../hooks/useInView';

function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  
  const handleEmailClick = async () => {
    const email = 'ruan.liidy23@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('Email copiado!');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch {
      setCopyStatus('Erro ao copiar');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  return (
    <section ref={sectionRef} className={`contact ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <h2>Contato</h2>
        <div className="contact-info">
          <div className="contact-item" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
            <i className="fas fa-envelope"></i>
            <span>ruan.liidy23@gmail.com</span>
            {copyStatus && (
              <span style={{ 
                marginLeft: '10px',
                color: copyStatus.includes('Erro') ? '#ff4444' : '#44ff44',
                fontSize: '0.9rem'
              }}>
                {copyStatus}
              </span>
            )}
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/ruan-luidy-1a177a281/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="https://github.com/ruan-luidy" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;