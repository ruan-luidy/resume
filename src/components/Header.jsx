import React, { useRef } from "react";
import useInView from '../hooks/useInView';

function Header() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef);

  return (
    <header ref={headerRef} className={`header ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <h1>Ruan Luidy Bueno de Melo</h1>
        <h2>Analista PCP Jr - Centerline</h2>
      </div>
    </header>
  );
}

export default Header;