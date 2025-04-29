// src/components/PDFTemplate.jsx
import React, { forwardRef } from 'react';
import { FaTasks, FaChartLine, FaCogs } from 'react-icons/fa';

// This component won't be rendered in the UI
// It's just a template for the PDF generation
const PDFTemplate = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="pdf-template">
      <div className="pdf-header">
        <h1>Ruan Luidy Bueno de Melo</h1>
        <h2>Analista PCP Jr - Centerline</h2>
        <div className="pdf-contact-info">
          <p>Email: ruan.liidy23@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/ruan-luidy-1a177a281</p>
          <p>GitHub: github.com/ruan-luidy</p>
        </div>
      </div>

      <div className="pdf-section">
        <h2>Sobre Mim</h2>
        <p>
          Como Analista PCP Jr na Centerline, sou responsável por planejar e controlar 
          a produção, garantindo a eficiência dos processos e a qualidade dos produtos.
        </p>
        
        <div className="pdf-highlights">
          <div className="pdf-highlight-item">
            <span>Planejamento estratégico de produção</span>
          </div>
          <div className="pdf-highlight-item">
            <span>Otimização de processos industriais</span>
          </div>
          <div className="pdf-highlight-item">
            <span>Gestão de recursos e operações</span>
          </div>
        </div>
      </div>

      <div className="pdf-section">
        <h2>Experiência</h2>
        <div className="pdf-experience">
          <h3>Analista PCP Jr</h3>
          <h4>Centerline</h4>
          <p>2023 - Presente</p>
          
          <div className="pdf-achievements">
            <div className="pdf-achievement">
              <h5>Planejamento e Controle da Produção</h5>
              <ul>
                <li>Análise e planejamento da capacidade produtiva</li>
                <li>Elaboração de cronogramas de produção</li>
                <li>Monitoramento e controle dos prazos de entrega</li>
                <li>Gestão de prioridades na fabricação</li>
              </ul>
            </div>

            <div className="pdf-achievement">
              <h5>Gestão de Materiais e Estoque</h5>
              <ul>
                <li>Controle de estoque de matéria-prima e produtos</li>
                <li>Planejamento de necessidade de materiais</li>
                <li>Acompanhamento de níveis de inventário</li>
                <li>Otimização do fluxo de materiais</li>
              </ul>
            </div>

            <div className="pdf-achievement">
              <h5>Análise e Documentação Técnica</h5>
              <ul>
                <li>Interpretação de desenhos técnicos</li>
                <li>Elaboração de roteiros de fabricação</li>
                <li>Documentação de processos produtivos</li>
                <li>Análise de especificações técnicas</li>
              </ul>
            </div>

            <div className="pdf-achievement">
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

      <div className="pdf-section">
        <h2>Habilidades</h2>
        <div className="pdf-skills">
          <div className="pdf-skill-group">
            <h3>PCP & Produção</h3>
            <div className="pdf-skill-tags">
              <span className="pdf-skill">Planejamento e controle de produção</span>
              <span className="pdf-skill">Gestão de ordens de fabricação</span>
              <span className="pdf-skill">Análise de dados de produção</span>
              <span className="pdf-skill">Interação com sistemas ERP</span>
              <span className="pdf-skill">Leitura de desenhos técnicos</span>
              <span className="pdf-skill">Sequenciamento de produção</span>
              <span className="pdf-skill">Controle de estoque</span>
              <span className="pdf-skill">Gestão de processos industriais</span>
            </div>
          </div>
          
          <div className="pdf-skill-group">
            <h3>Desenvolvimento</h3>
            <div className="pdf-skill-tags">
              <span className="pdf-skill">JavaScript</span>
              <span className="pdf-skill">TypeScript</span>
              <span className="pdf-skill">React</span>
              <span className="pdf-skill">Python</span>
              <span className="pdf-skill">C#</span>
              <span className="pdf-skill">C/C++</span>
              <span className="pdf-skill">Lua</span>
              <span className="pdf-skill">SQL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pdf-section">
        <h2>Realizações</h2>
        <div className="pdf-projects">
          <div className="pdf-project">
            <h3>Otimização do Fluxo Produtivo</h3>
            <p>
              Implementação de melhorias no processo de planejamento e controle da produção, 
              resultando em maior eficiência operacional.
            </p>
            <ul>
              <li>Redução no tempo de setup das máquinas</li>
              <li>Maior agilidade na resposta a mudanças</li>
              <li>Melhor precisão no planejamento</li>
            </ul>
          </div>

          <div className="pdf-project">
            <h3>Gestão de Estoque Eficiente</h3>
            <p>
              Desenvolvimento de sistema de controle e organização do estoque, 
              garantindo disponibilidade de materiais e redução de custos.
            </p>
            <ul>
              <li>Melhor organização do almoxarifado</li>
              <li>Redução de perdas e desperdícios</li>
              <li>Controle preciso do inventário</li>
            </ul>
          </div>

          <div className="pdf-project">
            <h3>Documentação e Processos</h3>
            <p>
              Padronização e documentação de processos produtivos, 
              facilitando treinamentos e garantindo qualidade consistente.
            </p>
            <ul>
              <li>Criação de procedimentos padrão</li>
              <li>Processos mais consistentes</li>
              <li>Maior controle de qualidade</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PDFTemplate;