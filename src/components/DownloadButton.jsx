import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './DownloadButton.css';

function DownloadButton() {
  // Caminho para o arquivo PDF (você precisa colocar o arquivo na pasta public)
  const pdfPath = '/ruan-luidy-cv.pdf';
  
  return (
    <motion.a
      href={pdfPath}
      download="ruan-luidy-cv.pdf"
      className="download-button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFileDownload className="button-icon" />
      <span>Download CV</span>
    </motion.a>
  );
}

export default DownloadButton;