import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contato</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>seu-email@exemplo.com</span>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;