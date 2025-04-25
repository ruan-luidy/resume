import React, { useState, useRef } from 'react';
import useInView from '../hooks/useInView';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

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

  // Variantes para animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={sectionRef} className={`contact ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contato
        </motion.h2>
        
        <motion.div 
          className="contact-info"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            className="contact-item" 
            onClick={handleEmailClick} 
            style={{ cursor: 'pointer' }}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "var(--accent)"
            }}
          >
            <FaEnvelope className="contact-icon" />
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
          </motion.div>
          
          <motion.a
            href="https://www.linkedin.com/in/ruan-luidy-1a177a281/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "var(--accent)"
            }}
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </motion.a>
          
          <motion.a
            href="https://github.com/ruan-luidy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "var(--accent)"
            }}
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;