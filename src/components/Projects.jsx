import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className={`projects ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <h2>Realizações</h2>
        <div className="project-grid">
          <div className="project-item">
            <h3>Otimização do Fluxo Produtivo</h3>
            <div className="project-content">
              <p className="project-description">
                Implementação de melhorias no processo de planejamento e controle da produção, resultando em maior eficiência operacional.
              </p>
              <div className="project-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">📈</span>
                  <span>Redução no tempo de setup das máquinas</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">⚡</span>
                  <span>Maior agilidade na resposta a mudanças</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🎯</span>
                  <span>Melhor precisão no planejamento</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-item">
            <h3>Gestão de Estoque Eficiente</h3>
            <div className="project-content">
              <p className="project-description">
                Desenvolvimento de sistema de controle e organização do estoque, garantindo disponibilidade de materiais e redução de custos.
              </p>
              <div className="project-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">📦</span>
                  <span>Melhor organização do almoxarifado</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💡</span>
                  <span>Redução de perdas e desperdícios</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">📊</span>
                  <span>Controle preciso do inventário</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-item">
            <h3>Documentação e Processos</h3>
            <div className="project-content">
              <p className="project-description">
                Padronização e documentação de processos produtivos, facilitando treinamentos e garantindo qualidade consistente.
              </p>
              <div className="project-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">📝</span>
                  <span>Criação de procedimentos padrão</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🔄</span>
                  <span>Processos mais consistentes</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✅</span>
                  <span>Maior controle de qualidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;