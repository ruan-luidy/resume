import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaFileDownload, FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CV from './CV';

function PDFButton() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const componentRef = useRef();

  // Configurar o manipulador de impressão usando react-to-print
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'ruan-luidy-cv',
    onBeforeGetContent: () => {
      setIsGenerating(true);
      return new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
    },
    onAfterPrint: () => {
      setIsGenerating(false);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    },
  });

  return (
    <>
      {/* Botão para gerar PDF */}
      <motion.button
        className={`pdf-download-button ${isGenerating ? 'generating' : ''}`}
        onClick={handlePrint}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isGenerating}
        aria-label="Download CV"
      >
        {isGenerating ? (
          <>
            <FaSpinner className="button-icon spinning" />
            <span>Gerando PDF...</span>
          </>
        ) : (
          <>
            <FaFileDownload className="button-icon" />
            <span>Download CV</span>
          </>
        )}
        
        {showTooltip && (
          <motion.div 
            className="pdf-tooltip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            PDF gerado com sucesso!
          </motion.div>
        )}
      </motion.button>
      
      {/* CV para impressão (oculto na UI, apenas para gerar o PDF) */}
      <div style={{ display: 'none' }}>
        <CV ref={componentRef} />
      </div>
    </>
  );
}

export default PDFButton;