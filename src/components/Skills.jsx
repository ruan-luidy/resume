import React, { useRef } from 'react';
import useInView from '../hooks/useInView';
import { FaCode, FaReact, FaPython, FaDatabase } from 'react-icons/fa';
import { SiDotnet, SiTypescript, SiJavascript, SiCplusplus } from 'react-icons/si';
import { BiCodeCurly } from 'react-icons/bi';
import { BsDiagram3, BsGear, BsGraphUp } from 'react-icons/bs';
import { MdOutlineInventory2, MdOutlineSchedule, MdOutlineDocumentScanner } from 'react-icons/md';
import { motion } from 'framer-motion';

function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  const skillGroups = [
    {
      title: "PCP & Produção",
      icon: <BsDiagram3 size={20} />,
      skills: [
        { name: "Planejamento e controle de produção", icon: <MdOutlineSchedule /> },
        { name: "Gestão de ordens de fabricação", icon: <BsGear /> },
        { name: "Análise de dados de produção", icon: <BsGraphUp /> },
        { name: "Interação com sistemas ERP", icon: <FaDatabase /> },
        { name: "Leitura de desenhos técnicos", icon: <MdOutlineDocumentScanner /> },
        { name: "Sequenciamento de produção", icon: <MdOutlineSchedule /> },
        { name: "Controle de estoque", icon: <MdOutlineInventory2 /> },
        { name: "Gestão de processos industriais", icon: <BsGear /> }
      ]
    },
    {
      title: "Desenvolvimento",
      icon: <FaCode size={20} />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C#", icon: <SiDotnet /> },
        { name: "C/C++", icon: <SiCplusplus /> },
        { name: "Lua", icon: <BiCodeCurly /> },
        { name: "SQL", icon: <FaDatabase /> }
      ]
    }
  ];

  // Variantes para animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={sectionRef} className={`skills ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Habilidades
        </motion.h2>
        
        <motion.div 
          className="skills-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillGroups.map((group, index) => (
            <motion.div 
              className="skill-group" 
              key={index}
              variants={groupVariants}
            >
              <h3>
                <span className="group-icon">{group.icon}</span>
                {group.title}
              </h3>
              
              <div className="skill-tags">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span 
                    className="skill-tag" 
                    key={skillIndex}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "var(--accent)",
                      color: "white"
                    }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;