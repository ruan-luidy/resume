import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { FaTasks, FaChartLine, FaCogs } from 'react-icons/fa';

function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  // Variantes de animação
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={sectionRef} className={`about ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sobre Mim
        </motion.h2>
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="about-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <p>
              Como Analista PCP Jr na Centerline, sou responsável por planejar e controlar 
              a produção, garantindo a eficiência dos processos e a qualidade dos produtos.
            </p>
          </motion.div>
          
          <div className="about-highlights">
            <motion.div 
              className="highlight-item" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "var(--accent)"
              }}
            >
              <FaTasks size={20} className="highlight-icon" />
              <span>Planejamento estratégico de produção</span>
            </motion.div>
            
            <motion.div 
              className="highlight-item" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "var(--accent)"
              }}
            >
              <FaChartLine size={20} className="highlight-icon" />
              <span>Otimização de processos industriais</span>
            </motion.div>
            
            <motion.div 
              className="highlight-item" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "var(--accent)"
              }}
            >
              <FaCogs size={20} className="highlight-icon" />
              <span>Gestão de recursos e operações</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;