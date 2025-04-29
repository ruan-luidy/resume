import React from 'react';
import '../styles/CV.css';

// Componente que representa o CV para impressão
const CV = React.forwardRef((props, ref) => {
  return (
    <div className="cv-container" ref={ref}>
      {/* Cabeçalho */}
      <header className="cv-header">
        <h1>Ruan Luidy Bueno de Melo</h1>
        <div className="cv-subtitle">
          <span>ANALISTA PCP JR</span>
          <span className="cv-dot"></span>
          <span>DESENVOLVEDOR</span>
        </div>
        
        <div className="cv-contact">
          <div className="cv-contact-item">
            <span>📧 ruan.liidy23@gmail.com</span>
          </div>
          <div className="cv-contact-item">
            <span>🔗 linkedin.com/in/ruan-luidy-1a177a281</span>
          </div>
          <div className="cv-contact-item">
            <span>🔗 github.com/ruan-luidy</span>
          </div>
        </div>
      </header>

      <div className="cv-divider"></div>

      {/* Perfil Profissional */}
      <section className="cv-section">
        <h2>
          <span className="cv-icon">👨‍💼</span>
          PERFIL PROFISSIONAL
        </h2>
        <p>
          Analista PCP Jr na Centerline com experiência em planejamento e controle de produção, 
          desenvolvimento de soluções tecnológicas para otimização de processos industriais 
          e implementação de melhorias em sistemas de gestão. Conhecimentos técnicos em programação 
          e automação aplicados ao ambiente de manufatura, com foco em eficiência operacional e 
          integração de sistemas.
        </p>
      </section>

      {/* Experiência Profissional */}
      <section className="cv-section">
        <h2>
          <span className="cv-icon">💼</span>
          EXPERIÊNCIA PROFISSIONAL
        </h2>
        
        <div className="cv-job">
          <div className="cv-job-header">
            <div className="cv-job-title">
              <div className="cv-company-logo">CL</div>
              <div>
                <h3>Analista PCP Jr</h3>
                <h4>Centerline</h4>
              </div>
            </div>
            <div className="cv-job-period">2023 - Presente</div>
          </div>
          
          <p className="cv-job-description">
            Responsável pelo planejamento e controle da produção, atuando diretamente com a 
            otimização de processos e garantia da qualidade dos produtos. Desenvolvimento de 
            ferramentas de automação para aumentar a eficiência operacional e reduzir gargalos 
            no fluxo produtivo.
          </p>
          
          <div className="cv-responsibilities">
            <div className="cv-responsibility">
              <h4>Planejamento e Controle da Produção</h4>
              <ul>
                <li>Análise e planejamento da capacidade produtiva</li>
                <li>Elaboração de cronogramas de produção</li>
                <li>Monitoramento e controle dos prazos de entrega</li>
                <li>Gestão de prioridades na fabricação</li>
              </ul>
            </div>
            
            <div className="cv-responsibility">
              <h4>Gestão de Materiais e Estoque</h4>
              <ul>
                <li>Controle de estoque de matéria-prima e produtos</li>
                <li>Planejamento de necessidade de materiais</li>
                <li>Acompanhamento de níveis de inventário</li>
                <li>Otimização do fluxo de materiais</li>
              </ul>
            </div>
          </div>
          
          <div className="page-break"></div>
          
          <div className="cv-responsibilities">
            <div className="cv-responsibility">
              <h4>Análise e Documentação Técnica</h4>
              <ul>
                <li>Interpretação de desenhos técnicos</li>
                <li>Elaboração de roteiros de fabricação</li>
                <li>Documentação de processos produtivos</li>
                <li>Análise de especificações técnicas</li>
              </ul>
            </div>
            
            <div className="cv-responsibility">
              <h4>Gestão de Processos</h4>
              <ul>
                <li>Acompanhamento dos indicadores de produção</li>
                <li>Identificação e solução de gargalos</li>
                <li>Implementação de melhorias contínuas</li>
                <li>Coordenação com diferentes setores da empresa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="cv-section">
        <h2>
          <span className="cv-icon">🔧</span>
          HABILIDADES
        </h2>
        
        <div className="cv-skills">
          <div className="cv-skill-group">
            <h3>PCP & Produção</h3>
            <div className="cv-skill-tags">
              <span className="cv-skill-tag">Planejamento e controle de produção</span>
              <span className="cv-skill-tag">Gestão de ordens de fabricação</span>
              <span className="cv-skill-tag">Análise de dados de produção</span>
              <span className="cv-skill-tag">Interação com sistemas ERP</span>
              <span className="cv-skill-tag">Leitura de desenhos técnicos</span>
              <span className="cv-skill-tag">Sequenciamento de produção</span>
              <span className="cv-skill-tag">Controle de estoque</span>
              <span className="cv-skill-tag">Gestão de processos industriais</span>
            </div>
          </div>
          
          <div className="cv-skill-group">
            <h3>Desenvolvimento</h3>
            <div className="cv-skill-tags">
              <span className="cv-skill-tag">JavaScript</span>
              <span className="cv-skill-tag">TypeScript</span>
              <span className="cv-skill-tag">React</span>
              <span className="cv-skill-tag">Python</span>
              <span className="cv-skill-tag">C#</span>
              <span className="cv-skill-tag">C/C++</span>
              <span className="cv-skill-tag">Lua</span>
              <span className="cv-skill-tag">SQL</span>
            </div>
          </div>
        </div>
      </section>

      <div className="page-break"></div>

      {/* Projetos */}
      <section className="cv-section">
        <h2>
          <span className="cv-icon">🚀</span>
          PROJETOS E REALIZAÇÕES
        </h2>
        
        <div className="cv-projects">
          <div className="cv-project">
            <div className="cv-project-header">
              <span className="cv-project-icon">📦</span>
              <h3>Sistema de Controle de Sobras</h3>
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
          
          <div className="cv-project">
            <div className="cv-project-header">
              <span className="cv-project-icon">🔄</span>
              <h3>Sequenciador de Produção</h3>
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
          
          <div className="cv-project">
            <div className="cv-project-header">
              <span className="cv-project-icon">⚙️</span>
              <h3>Automações para PCP</h3>
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
      </section>
      
      {/* Idiomas */}
      <section className="cv-section">
        <h2>
          <span className="cv-icon">🌐</span>
          IDIOMAS
        </h2>
        
        <div className="cv-languages">
          <div className="cv-language">
            <span className="cv-language-name">Português</span>
            <div className="cv-language-level">
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar full"></div>
            </div>
            <span className="cv-language-text">Nativo</span>
          </div>
          
          <div className="cv-language">
            <span className="cv-language-name">Inglês</span>
            <div className="cv-language-level">
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar empty"></div>
            </div>
            <span className="cv-language-text">Avançado</span>
          </div>
          
          <div className="cv-language">
            <span className="cv-language-name">Espanhol</span>
            <div className="cv-language-level">
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar full"></div>
              <div className="cv-language-bar empty"></div>
              <div className="cv-language-bar empty"></div>
            </div>
            <span className="cv-language-text">Intermediário</span>
          </div>
        </div>
      </section>
      
      {/* Interesses */}
      <section className="cv-section">
        <h2>
          <span className="cv-icon">⭐</span>
          INTERESSES
        </h2>
        
        <div className="cv-interests">
          <span className="cv-interest-tag">Tecnologia</span>
          <span className="cv-interest-tag">Automação Industrial</span>
          <span className="cv-interest-tag">Desenvolvimento Web</span>
          <span className="cv-interest-tag">Inteligência Artificial</span>
          <span className="cv-interest-tag">Gestão de Projetos</span>
          <span className="cv-interest-tag">Otimização de Processos</span>
        </div>
      </section>
      
      {/* Rodapé */}
      <footer className="cv-footer">
        <p>Ruan Luidy Bueno de Melo • Analista PCP Jr • ruan.liidy23@gmail.com</p>
        <p>Documento atualizado em Abril/2025</p>
      </footer>
    </div>
  );
});

export default CV;