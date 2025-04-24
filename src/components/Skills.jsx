import React from 'react';

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3>PCP & Produção</h3>
            <ul>
              <li>Planejamento e controle de produção</li>
              <li>Gestão de ordens de fabricação</li>
              <li>Análise de dados de produção</li>
              <li>Interação com sistemas ERP</li>
              <li>Leitura e interpretação de desenhos técnicos</li>
              <li>Sequenciamento de produção</li>
              <li>Controle de estoque</li>
              <li>Gestão de processos industriais</li>
            </ul>
          </div>

          <div className="skills-category">
            <h3>Ferramentas & Sistemas</h3>
            <ul>
              <li>Sistemas ERP</li>
              <li>MS Office</li>
              <li>Automação de processos</li>
              <li>Ferramentas de análise de dados</li>
            </ul>
          </div>

          <div className="skills-category">
            <h3>Desenvolvimento</h3>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>C#</li>
              <li>C/C++</li>
              <li>Lua</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skills-category">
            <h3>Soft Skills</h3>
            <ul>
              <li>Resolução de problemas</li>
              <li>Comunicação interdepartamental</li>
              <li>Análise crítica</li>
              <li>Organização</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;