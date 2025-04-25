import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Realizações' },
    { id: 'contact', label: 'Contato' }
  ];

  // Detectar scroll para alterar a aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Encontrar a seção ativa com base no scroll
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id) || document.querySelector(`.${section.id}`)
      })).filter(section => section.element);
      
      for (const section of sectionElements.reverse()) {
        const rect = section.element.getBoundingClientRect();
        if (rect.top <= 100) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id) || document.querySelector(`.${id}`);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({top: 0, behavior: 'smooth'});
        }}>
          <span className="logo-text">RL</span>
        </a>

        <div className="nav-right">
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={activeSection === section.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                >
                  <span className="nav-link-number">{`0${index + 1}.`}</span>
                  <span className="nav-link-text">{section.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="theme-toggle-container">
            <ThemeToggle />
          </div>

          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;