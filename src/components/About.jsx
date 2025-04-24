import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className={`about ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <h2>Sobre Mim</h2>
        <div className="about-content">
          <div className="about-card">
            <p>
              Como Analista PCP Jr na Centerline, sou responsável por planejar e controlar 
              a produção, garantindo a eficiência dos processos e a qualidade dos produtos.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <i className="fas fa-tasks"></i>
              <span>Planejamento estratégico de produção</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-chart-line"></i>
              <span>Otimização de processos industriais</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-cogs"></i>
              <span>Gestão de recursos e operações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;