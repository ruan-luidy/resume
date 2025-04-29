import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { MdOutlineSchedule, MdOutlineInventory2, MdOutlineDocumentScanner } from 'react-icons/md';
import { BsGear, BsGraphUp } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';

function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  // Variantes para animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const achievementIcons = {
    "planning": <MdOutlineSchedule size={24} />,
    "materials": <MdOutlineInventory2 size={24} />,
    "technical": <MdOutlineDocumentScanner size={24} />,
    "process": <BsGraphUp size={24} />
  };

  return (
    <section ref={sectionRef} className={`experience ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experiência
        </motion.h2>
        
        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="timeline-connector" />
          
          <motion.div 
            className="experience-card"
            variants={itemVariants}
          >
            <div className="experience-card-header">
              <motion.div 
                className="company-logo"
                whileHover={{ scale: 1.1 }}
              >
                <FaRegBuilding size={28} />
              </motion.div>
              <div className="experience-title-container">
                <motion.h3
                  whileHover={{ color: "var(--accent-hover)" }}
                >
                  Analista PCP Jr
                </motion.h3>
                <h4>Centerline</h4>
                <p className="period">2023 - Presente</p>
              </div>
            </div>
            
            <motion.div 
              className="experience-description"
              variants={containerVariants}
            >
              <p>
                Responsável pelo planejamento e controle da produção, atuando diretamente
                com a otimização de processos e garantia da qualidade dos produtos.
              </p>
            </motion.div>
            
            <motion.div 
              className="achievements-grid"
              variants={containerVariants}
            >
              <motion.div 
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="achievement-icon-container">
                  {achievementIcons.planning}
                </div>
                <h5>Planejamento e Controle</h5>
                <ul>
                  <li>Análise e planejamento da capacidade produtiva</li>
                  <li>Elaboração de cronogramas de produção</li>
                  <li>Monitoramento de prazos de entrega</li>
                  <li>Gestão de prioridades na fabricação</li>
                </ul>
                <div className="achievement-hover-overlay" />
              </motion.div>

              <motion.div 
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="achievement-icon-container">
                  {achievementIcons.materials}
                </div>
                <h5>Gestão de Materiais</h5>
                <ul>
                  <li>Controle de estoque de matéria-prima</li>
                  <li>Planejamento de necessidade de materiais</li>
                  <li>Acompanhamento de níveis de inventário</li>
                  <li>Otimização do fluxo de materiais</li>
                </ul>
                <div className="achievement-hover-overlay" />
              </motion.div>

              <motion.div 
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="achievement-icon-container">
                  {achievementIcons.technical}
                </div>
                <h5>Documentação Técnica</h5>
                <ul>
                  <li>Interpretação de desenhos técnicos</li>
                  <li>Elaboração de roteiros de fabricação</li>
                  <li>Documentação de processos produtivos</li>
                  <li>Análise de especificações técnicas</li>
                </ul>
                <div className="achievement-hover-overlay" />
              </motion.div>

              <motion.div 
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="achievement-icon-container">
                  {achievementIcons.process}
                </div>
                <h5>Gestão de Processos</h5>
                <ul>
                  <li>Acompanhamento dos indicadores</li>
                  <li>Identificação e solução de gargalos</li>
                  <li>Implementação de melhorias</li>
                  <li>Coordenação com diferentes setores</li>
                </ul>
                <div className="achievement-hover-overlay" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;