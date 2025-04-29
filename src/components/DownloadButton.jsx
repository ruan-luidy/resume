import React, { useState } from 'react';
import { FaFileDownload, FaSpinner, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/DownloadButton.css';

function DownloadButton() {
  // Estado para rastrear o status do download
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Caminho para o arquivo PDF (você precisa colocar o arquivo na pasta public)
  const pdfPath = '/ruan-luidy-cv.pdf';
  
  const handleDownload = (e) => {
    // Se já estiver gerando, não faz nada
    if (isGenerating) {
      e.preventDefault();
      return;
    }
    
    // Simular a geração do PDF
    setIsGenerating(true);
    
    // Simular um delay de download (pode ser removido em produção)
    setTimeout(() => {
      setIsGenerating(false);
      setShowTooltip(true);
      
      // Esconder o tooltip após 3 segundos
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }, 2000);
  };
  
  return (
    <motion.a
      href={pdfPath}
      download="ruan-luidy-cv.pdf"
      className={`pdf-download-button ${isGenerating ? 'generating' : ''}`}
      whileHover={{ scale: isGenerating ? 1 : 1.05 }}
      whileTap={{ scale: isGenerating ? 1 : 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleDownload}
    >
      {showTooltip && (
        <div className="pdf-tooltip">
          Download iniciado!
        </div>
      )}
      
      {isGenerating ? (
        <FaSpinner className="button-icon spinning" />
      ) : (
        <FaFileDownload className="button-icon" />
      )}
      
      <span>{isGenerating ? 'Gerando...' : 'Download CV'}</span>
    </motion.a>
  );
}

export default DownloadButton;