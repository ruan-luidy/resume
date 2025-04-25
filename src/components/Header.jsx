import React, { useRef } from "react";
import { motion } from "framer-motion";
import useInView from '../hooks/useInView';

function Header() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef);

  return (
    <header ref={headerRef} className={`header ${isInView ? 'visible' : ''}`}>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ruan Luidy Bueno de Melo
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Analista PCP Jr - Centerline
        </motion.h2>
      </div>
    </header>
  );
}

export default Header;