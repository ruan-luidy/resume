import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Carregar tema do localStorage, se existir
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Aplicar tema atual
    document.documentElement.setAttribute('data-theme', theme);
    // Salvar no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="theme-toggle">
      <button 
        onClick={toggleTheme} 
        className={`theme-toggle-button ${theme}`}
        aria-label={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      >
        {theme === 'dark' ? (
          <FiSun className="theme-icon" />
        ) : (
          <FiMoon className="theme-icon" />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;