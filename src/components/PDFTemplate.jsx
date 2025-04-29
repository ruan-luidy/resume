// src/components/PDFTemplate.jsx
import React, { forwardRef } from 'react';

// Template moderno e profissional para geração do PDF
const PDFTemplate = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="pdf-template">
      {/* ===== PÁGINA 1 ===== */}
      <div className="pdf-page">
        {/* Cabeçalho com informações pessoais */}
        <div className="pdf-header">
          <div className="pdf-header-content">
            <h1>Ruan Luidy Bueno de Melo</h1>
            <div className="pdf-header-title">
              <h2>Analista PCP Jr</h2>
              <div className="pdf-header-separator"></div>
              <h2>Desenvolvedor</h2>
            </div>
            
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
        </div>

        {/* Resumo profissional */}
        <div className="pdf-section">
          <div className="pdf-section-title">
            <span className="pdf-section-icon">👨‍💼</span>
            <h3>Perfil Profissional</h3>
          </div>
          <div className="pdf-section-content">
            <p>
              Analista PCP Jr na Centerline com experiência em planejamento e controle de produção, 
              desenvolvimento de soluções tecnológicas para otimização de processos industriais 
              e implementação de melhorias em sistemas de gestão. Conhecimentos técnicos em programação 
              e automação aplicados ao ambiente de manufatura, com foco em eficiência operacional e 
              integração de sistemas.
            </p>
          </div>
        </div>

        {/* Experiência profissional */}
        <div className="pdf-section">
          <div className="pdf-section-title">
            <span className="pdf-section-icon">💼</span>
            <h3>Experiência Profissional</h3>
          </div>
          <div className="pdf-section-content">
            <div className="pdf-experience">
              <div className="pdf-experience-header">
                <div className="pdf-experience-title">
                  <div className="pdf-company-logo">
                    <span>CL</span>
                  </div>
                  <div>
                    <h4>Analista PCP Jr</h4>
                    <h5>Centerline</h5>
                  </div>
                </div>
                <span className="pdf-date">2023 - Presente</span>
              </div>
              
              <div className="pdf-experience-description">
                <p>
                  Responsável pelo planejamento e controle da produção, atuando diretamente
                  com a otimização de processos e garantia da qualidade dos produtos.
                  Desenvolvimento de ferramentas de automação para aumentar a eficiência
                  operacional e reduzir gargalos no fluxo produtivo.
                </p>
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
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicador de página 1/3 */}
        <div className="pdf-page-indicator">1/3</div>
      </div>

      {/* ===== PÁGINA 2 ===== */}
      <div className="pdf-page pdf-page-break">
        {/* Continuação da experiência */}
        <div className="pdf-section">
          <div className="pdf-section-title">
            <span className="pdf-section-icon">💼</span>
            <h3>Experiência Profissional (continuação)</h3>
          </div>
          <div className="pdf-section-content">
            <div className="pdf-experience">
              <div className="pdf-responsibilities">
                <div className="pdf-responsibility">
                  <h5>Análise e Documentação Técnica</h5>
                  <ul>
                    <li>Interpretação de desenhos técnicos</li>
                    <li>Elaboração de roteiros de fabricação</li>
                    <li>Documentação de processos produtivos</li>
                    <li>Análise de especificações técnicas</li>
                  </ul>
                </div>
                
                <div className="pdf-responsibility">
                  <h5>Gestão de Processos</h5>
                  <ul>
                    <li>Acompanhamento dos indicadores de produção</li>
                    <li>Identificação e solução de gargalos</li>
                    <li>Implementação de melhorias contínuas</li>
                    <li>Coordenação com diferentes setores da empresa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Habilidades */}
        <div className="pdf-section">
          <div className="pdf-section-title">
            <span className="pdf-section-icon">🔧</span>
            <h3>Habilidades</h3>
          </div>
          
          <div className="pdf-section-content">
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
        </div>

        {/* Projetos - Primeira parte */}
        <div className="pdf-section">
          <div className="pdf-section-title">
            <span className="pdf-section-icon">🚀</span>
            <h3>Projetos e Realizações</h3>
          </div>
          
          <div className="pdf-section-content">
            <div className="pdf-projects">
              <div className="pdf-project">
                <div className="pdf-project-header">
                  <div className="pdf-project-icon">📦</div>
                  <h4>Sistema de Controle de Sobras</h4>
                </div>
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
                <div className="pdf-project-header">
                  <div className="pdf-project-icon">🔄</div>
                  <h4>Sequenciador de Produção</h4>
                </div>
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
            </div>
          </div>
        </div>
        
        {/* Indicador de página 2/3 */}
        <div className="pdf-page-indicator">2/3</div>
      </div>

      {/* ===== PÁGINA 3 ===== */}
      <div className="pdf-page pdf-page-break">
        {/* Projetos - Continuação */}
        <div className="pdf-section">
          <div className="pdf-section-title">
            <span className="pdf-section-icon">🚀</span>
            <h3>Projetos e Realizações (continuação)</h3>
          </div>
          
          <div className="pdf-section-content">
            <div className="pdf-projects">
              <div className="pdf-project">
                <div className="pdf-project-header">
                  <div className="pdf-project-icon">⚙️</div>
                  <h4>Automações para PCP</h4>
                </div>
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
        </div>

        {/* Formação */}
        <div className="pdf-section">
          <div className="pdf-section-title">
            <span className="pdf-section-icon">🎓</span>
            <h3>Formação Acadêmica</h3>
          </div>
          
          <div className="pdf-section-content">
            <div className="pdf-education">
              <div className="pdf-education-item">
                <div className="pdf-education-header">
                  <div>
                    <h4>Engenharia de Produção</h4>
                    <h5>Universidade Federal de Santa Catarina</h5>
                  </div>
                  <span className="pdf-date">Em andamento</span>
                </div>
                <p>
                  Foco em otimização de processos industriais, gestão da produção e 
                  implementação de tecnologias para melhoria contínua.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Idiomas */}
        <div className="pdf-section">
          <div className="pdf-section-title">
            <span className="pdf-section-icon">🌐</span>
            <h3>Idiomas</h3>
          </div>
          
          <div className="pdf-section-content">
            <div className="pdf-languages">
              <div className="pdf-language-item">
                <span className="pdf-language-name">Português</span>
                <div className="pdf-language-level">
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                </div>
                <span className="pdf-language-text">Nativo</span>
              </div>
              
              <div className="pdf-language-item">
                <span className="pdf-language-name">Inglês</span>
                <div className="pdf-language-level">
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-empty"></div>
                </div>
                <span className="pdf-language-text">Avançado</span>
              </div>
              
              <div className="pdf-language-item">
                <span className="pdf-language-name">Espanhol</span>
                <div className="pdf-language-level">
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-full"></div>
                  <div className="pdf-language-bar pdf-language-bar-empty"></div>
                  <div className="pdf-language-bar pdf-language-bar-empty"></div>
                </div>
                <span className="pdf-language-text">Intermediário</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interesses */}
        <div className="pdf-section">
          <div className="pdf-section-title">
            <span className="pdf-section-icon">⭐</span>
            <h3>Interesses</h3>
          </div>
          
          <div className="pdf-section-content">
            <div className="pdf-interests">
              <span className="pdf-interest-tag">Tecnologia</span>
              <span className="pdf-interest-tag">Automação Industrial</span>
              <span className="pdf-interest-tag">Desenvolvimento Web</span>
              <span className="pdf-interest-tag">Inteligência Artificial</span>
              <span className="pdf-interest-tag">Gestão de Projetos</span>
              <span className="pdf-interest-tag">Otimização de Processos</span>
            </div>
          </div>
        </div>

        {/* Rodapé com informações */}
        <div className="pdf-footer">
          <div className="pdf-footer-content">
            <p>Ruan Luidy Bueno de Melo • Analista PCP Jr • ruan.liidy23@gmail.com</p>
            <p>Documento atualizado em Abril/2025</p>
          </div>
        </div>
        
        {/* Indicador de página 3/3 */}
        <div className="pdf-page-indicator">3/3</div>
      </div>
    </div>
  );
});

export default PDFTemplate;