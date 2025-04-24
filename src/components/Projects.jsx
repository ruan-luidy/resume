import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2>Projetos</h2>
        <div className="project-grid">
          <div className="project-item">
            <h3>Finder</h3>
            <p>Ferramenta de busca de desenhos técnicos nas pastas de projeto.</p>
            <div className="project-links">
              <a href="#" className="btn">Ver Projeto</a>
            </div>
          </div>
          <div className="project-item">
            <h3>Fantamas</h3>
            <p>Sistema para controle de estoque.</p>
            <div className="project-links">
              <a href="#" className="btn">Ver Projeto</a>
            </div>
          </div>
          <div className="project-item">
            <h3>Sequenciador de Produção</h3>
            <p>Ferramenta para organizar ordens de produção.</p>
            <div className="project-links">
              <a href="#" className="btn">Ver Projeto</a>
            </div>
          </div>
          <div className="project-item">
            <h3>Bot de WhatsApp</h3>
            <p>Bots automatizados para comunicação e suporte.</p>
            <div className="project-links">
              <a href="#" className="btn">Ver Projeto</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;