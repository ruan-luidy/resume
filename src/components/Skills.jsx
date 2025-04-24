import React from 'react';

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3>Linguagens</h3>
            <ul>
              <li>C#</li>
              <li>C</li>
              <li>C++</li>
              <li>Lua</li>
              <li>SQL</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Frameworks e Ferramentas</h3>
            <ul>
              <li>React</li>
              <li>Vite</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Gerenciadores de Pacotes</h3>
            <ul>
              <li>npm</li>
              <li>yarn</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Outras Habilidades</h3>
            <ul>
              <li>ERP</li>
              <li>Leitura de desenhos técnicos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;