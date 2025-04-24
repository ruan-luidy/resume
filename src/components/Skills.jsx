import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  const skillGroups = [
    {
      title: "PCP & Produção",
      skills: [
        "Planejamento e controle de produção",
        "Gestão de ordens de fabricação",
        "Análise de dados de produção",
        "Interação com sistemas ERP",
        "Leitura e interpretação de desenhos técnicos",
        "Sequenciamento de produção",
        "Controle de estoque",
        "Gestão de processos industriais"
      ]
    },
    {
      title: "Ferramentas & Sistemas",
      skills: [
        "Sistemas ERP",
        "MS Office",
        "Automação de processos",
        "Ferramentas de análise de dados"
      ]
    },
    {
      title: "Desenvolvimento",
      skills: [
        "JavaScript",
        "React",
        "C#",
        "C/C++",
        "Lua",
        "SQL"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Rápida Aprendizagem",
        "Resolução de problemas",
        "Comunicação interdepartamental",
        "Análise crítica",
        "Organização"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className={`skills ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <h2>Habilidades</h2>
        
        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={index}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;