import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className={`experience ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <h2>Experiência</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <h3>Analista PCP Jr</h3>
            <h4>Centerline</h4>
            <p className="period">2023 - Presente</p>
            
            <div className="experience-content">
              <div className="achievements-list">
                <div className="achievement-item">
                  <h5>Planejamento e Controle da Produção</h5>
                  <ul>
                    <li>Análise e planejamento da capacidade produtiva</li>
                    <li>Elaboração de cronogramas de produção</li>
                    <li>Monitoramento e controle dos prazos de entrega</li>
                    <li>Gestão de prioridades na fabricação</li>
                  </ul>
                </div>

                <div className="achievement-item">
                  <h5>Gestão de Materiais e Estoque</h5>
                  <ul>
                    <li>Controle de estoque de matéria-prima e produtos</li>
                    <li>Planejamento de necessidade de materiais</li>
                    <li>Acompanhamento de níveis de inventário</li>
                    <li>Otimização do fluxo de materiais</li>
                  </ul>
                </div>

                <div className="achievement-item">
                  <h5>Análise e Documentação Técnica</h5>
                  <ul>
                    <li>Interpretação de desenhos técnicos</li>
                    <li>Elaboração de roteiros de fabricação</li>
                    <li>Documentação de processos produtivos</li>
                    <li>Análise de especificações técnicas</li>
                  </ul>
                </div>

                <div className="achievement-item">
                  <h5>Gestão de Processos Produtivos</h5>
                  <ul>
                    <li>Acompanhamento dos indicadores de produção</li>
                    <li>Identificação e solução de gargalos</li>
                    <li>Implementação de melhorias no processo</li>
                    <li>Coordenação com diferentes setores</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;