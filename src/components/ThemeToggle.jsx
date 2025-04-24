import React, { useState, useEffect } from 'react';
import '../styles/ThemeToggle.css';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-flip"
        className="theme-flip-checkbox"
        checked={theme === 'light'}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-flip" className="theme-flip-label">
        <i className="fas fa-sun"></i>
        <i className="fas fa-moon"></i>
        <div className="theme-flip-ball"></div>
      </label>
    </div>
  );
}

export default ThemeToggle;