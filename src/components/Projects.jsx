import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { BiCodeAlt, BiPackage } from 'react-icons/bi';
import { MdOutlineInventory2, MdOutlineAutoGraph, MdDocumentScanner } from 'react-icons/md';
import { BsGear, BsArrowRepeat, BsFileCode } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';

function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

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

  const projects = [
    {
      id: 1,
      title: "Sistema de Controle de Sobras",
      icon: <MdOutlineInventory2 size={28} />,
      description: "Desenvolvimento de aplicativo para controle de sobras de materiais de projetos, otimizando a reutilização e reduzindo desperdícios.",
      highlights: [
        { icon: <BiPackage />, text: "Catalogação automática de sobras por projeto" },
        { icon: <MdOutlineAutoGraph />, text: "Análise de utilização e economia gerada" },
        { icon: <BsGear />, text: "Integração com sistema de estoque principal" }
      ]
    },
    {
      id: 2,
      title: "Sequenciador de Produção",
      icon: <BsArrowRepeat size={26} />,
      description: "Aplicativo para sequenciamento inteligente de máquinas, otimizando a utilização dos recursos e melhorando o fluxo produtivo.",
      highlights: [
        { icon: <BsGear />, text: "Algoritmo de ordenação por prioridade e setup" },
        { icon: <MdOutlineAutoGraph />, text: "Redução de 30% no tempo de parada" },
        { icon: <BiCodeAlt />, text: "Interface simplificada para operadores" }
      ]
    },
    {
      id: 3,
      title: "Automações para PCP",
      icon: <BsFileCode size={26} />,
      description: "Desenvolvimento de ferramentas e scripts para automatizar tarefas repetitivas do PCP, aumentando a eficiência da equipe.",
      highlights: [
        { icon: <HiOutlineDocumentText />, text: "Geração automática de relatórios" },
        { icon: <MdDocumentScanner />, text: "Extração de dados de desenhos técnicos" },
        { icon: <BsGear />, text: "Integração entre sistemas legados" }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className={`projects ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Realizações
        </motion.h2>
        
        <motion.div 
          className="projects-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="project-header">
                <div className="project-icon-container">
                  {project.icon}
                </div>
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-features">
                {project.highlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    className="feature-item"
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="feature-icon">{highlight.icon}</span>
                    <span className="feature-text">{highlight.text}</span>
                    <div className="feature-hover-overlay" />
                  </motion.div>
                ))}
              </div>
              <div className="project-hover-overlay" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;