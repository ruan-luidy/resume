// src/components/PDFButton.jsx
import React, { useRef, useState } from 'react';
import { FaFileDownload, FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import html2pdf from 'html2pdf.js';
import PDFTemplate from './PDFTemplate';
import '../styles/PDFTemplate.css'; // Importa os estilos do PDF

function PDFButton() {
  const pdfTemplateRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const generatePDF = async () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    
    try {
      // Obtém o elemento do template
      const content = pdfTemplateRef.current;
      
      // Torna o template visível para geração
      content.style.display = 'block';
      
      // Configurações para o PDF
      const options = {
        margin: 10,
        filename: 'ruan-luidy-cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false 
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait'
        }
      };
      
      // Pequeno atraso para garantir que o DOM esteja pronto
      setTimeout(async () => {
        // Gera o PDF
        const worker = html2pdf()
          .from(content)
          .set(options)
          .save();
          
        await worker;
        
        // Esconde o template novamente
        content.style.display = 'none';
        
        // Mostra o tooltip de sucesso
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
        
        setIsGenerating(false);
      }, 100);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      setIsGenerating(false);
      
      // Certifique-se de esconder o template em caso de erro
      if (pdfTemplateRef.current) {
        pdfTemplateRef.current.style.display = 'none';
      }
    }
  };

  return (
    <>
      <motion.button
        className={`pdf-download-button ${isGenerating ? 'generating' : ''}`}
        onClick={generatePDF}
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
      
      {/* Template do PDF oculto */}
      <PDFTemplate ref={pdfTemplateRef} />
    </>
  );
}

export default PDFButton;