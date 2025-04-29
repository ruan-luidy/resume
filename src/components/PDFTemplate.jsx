// src/components/PDFTemplate.jsx
import React, { forwardRef } from 'react';

// Este componente não será renderizado na UI
// É apenas um template para a geração do PDF
const PDFTemplate = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="pdf-template">
      {/* Cabeçalho com informações pessoais */}
      <div className="pdf-header">
        <h1>Ruan Luidy Bueno de Melo</h1>
        <h2>Analista PCP Jr | Desenvolvedor</h2>
        
        <div className="pdf-contact">
          <div className="pdf-contact-item">
            <span className="pdf-contact-icon">✉️</span>
            <span>ruan.liidy23@gmail.com</span>
          </div>
          <div className="pdf-contact-item">
            <span className="pdf-contact-icon">🔗</span>
            <span>linkedin.com/in/ruan-luidy-1a177a281</span>
          </div>
          <div className="pdf-contact-item">
            <span className="pdf-contact-icon">🔗</span>
            <span>github.com/ruan-luidy</span>
          </div>
        </div>
      </div>

      {/* Resumo profissional */}
      <div className="pdf-section">
        <h3>Resumo Profissional</h3>
        <p>
          Analista PCP Jr na Centerline com experiência em planejamento e controle de produção, 
          desenvolvimento de soluções tecnológicas para otimização de processos industriais 
          e implementação de melhorias em sistemas de gestão. Conhecimentos técnicos em programação 
          e automação aplicados ao ambiente de manufatura.
        </p>
      </div>

      {/* Experiência profissional */}
      <div className="pdf-section">
        <h3>Experiência Profissional</h3>
        <div className="pdf-experience">
          <div className="pdf-experience-header">
            <div>
              <h4>Analista PCP Jr</h4>
              <h5>Centerline</h5>
            </div>
            <span className="pdf-date">2023 - Presente</span>
          </div>
          
          <div className="pdf-responsibilities">
            <div className="pdf-responsibility">
              <h5>Planejamento e Controle da Produção</h5>
              <ul>
                <li>Análise e planejamento da capacidade produtiva</li>
                <li>Elaboração de cronogramas de produção</li>
                <li>Monitoramento e controle dos prazos de entrega</li>
                <li>Gestão de prioridades na fabricação</li>
              </ul>
            </div>

            <div className="pdf-responsibility">
              <h5>Gestão de Materiais e Estoque</h5>
              <ul>
                <li>Controle de estoque de matéria-prima e produtos</li>
                <li>Planejamento de necessidade de materiais</li>
                <li>Acompanhamento de níveis de inventário</li>
                <li>Otimização do fluxo de materiais</li>
              </ul>
            </div>
            
            <div className="pdf-responsibility">
              <h5>Análise e Documentação Técnica</h5>
              <ul>
                <li>Interpretação de desenhos técnicos</li>
                <li>Elaboração de roteiros de fabricação</li>
                <li>Documentação de processos produtivos</li>
                <li>Análise de especificações técnicas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Projetos e realizações */}
      <div className="pdf-section">
        <h3>Projetos e Realizações</h3>
        
        <div className="pdf-projects">
          <div className="pdf-project">
            <h4>Sistema de Controle de Sobras</h4>
            <p>
              Desenvolvimento de aplicativo para controle e rastreamento de sobras de materiais 
              de projetos, permitindo melhor reaproveitamento e redução de custos.
            </p>
            <ul>
              <li>Catalogação automática de sobras por projeto</li>
              <li>Análise de utilização e economia gerada</li>
              <li>Integração com sistema de estoque principal</li>
            </ul>
          </div>

          <div className="pdf-project">
            <h4>Sequenciador de Produção</h4>
            <p>
              Aplicativo para sequenciamento inteligente de máquinas, otimizando 
              a utilização dos recursos e melhorando o fluxo produtivo.
            </p>
            <ul>
              <li>Algoritmo de ordenação por prioridade e setup</li>
              <li>Redução de 30% no tempo de parada</li>
              <li>Interface simplificada para operadores</li>
            </ul>
          </div>

          <div className="pdf-project">
            <h4>Automações para PCP</h4>
            <p>
              Desenvolvimento de ferramentas e scripts para automatizar tarefas 
              repetitivas do PCP, aumentando a eficiência da equipe.
            </p>
            <ul>
              <li>Geração automática de relatórios</li>
              <li>Extração de dados de desenhos técnicos</li>
              <li>Integração entre sistemas legados</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Habilidades */}
      <div className="pdf-section">
        <h3>Habilidades</h3>
        
        <div className="pdf-skills-container">
          <div className="pdf-skill-group">
            <h4>PCP & Produção</h4>
            <div className="pdf-skill-tags">
              <span className="pdf-skill-tag">Planejamento e controle de produção</span>
              <span className="pdf-skill-tag">Gestão de ordens de fabricação</span>
              <span className="pdf-skill-tag">Análise de dados de produção</span>
              <span className="pdf-skill-tag">Interação com sistemas ERP</span>
              <span className="pdf-skill-tag">Leitura de desenhos técnicos</span>
              <span className="pdf-skill-tag">Sequenciamento de produção</span>
              <span className="pdf-skill-tag">Controle de estoque</span>
              <span className="pdf-skill-tag">Gestão de processos industriais</span>
            </div>
          </div>
          
          <div className="pdf-skill-group">
            <h4>Desenvolvimento</h4>
            <div className="pdf-skill-tags">
              <span className="pdf-skill-tag">JavaScript</span>
              <span className="pdf-skill-tag">TypeScript</span>
              <span className="pdf-skill-tag">React</span>
              <span className="pdf-skill-tag">Python</span>
              <span className="pdf-skill-tag">C#</span>
              <span className="pdf-skill-tag">C/C++</span>
              <span className="pdf-skill-tag">Lua</span>
              <span className="pdf-skill-tag">SQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé com informações */}
      <div className="pdf-footer">
        <p>Ruan Luidy Bueno de Melo • Analista PCP Jr • ruan.liidy23@gmail.com</p>
      </div>
    </div>
  );
});

export default PDFTemplate;