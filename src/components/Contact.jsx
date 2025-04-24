import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contato</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span> ruan.liidy23@gmail.com</span>
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