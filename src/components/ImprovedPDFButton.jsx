// src/components/ImprovedPDFButton.jsx
import React, { useRef } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import html2pdf from 'html2pdf.js';
import PDFTemplate from './PDFTemplate';
import '../styles/PDFTemplate.css'; // Import the PDF template styles

function ImprovedPDFButton() {
  const pdfTemplateRef = useRef(null);

  const generatePDF = () => {
    // Configure PDF options
    const options = {
      margin: [15, 15, 15, 15],
      filename: 'ruan-luidy-cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // Get the PDF template element
    const content = pdfTemplateRef.current;
    
    // Make the template visible for generation
    content.style.display = 'block';
    
    // Generate PDF
    html2pdf().from(content).set(options).save().then(() => {
      // Hide the template again after generation
      content.style.display = 'none';
    });
  };

  return (
    <>
      <motion.button
        className="pdf-download-button"
        onClick={generatePDF}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Download CV"
      >
        <FaFileDownload className="button-icon" />
        <span>Download CV</span>
      </motion.button>
      
      {/* Hidden PDF template */}
      <PDFTemplate ref={pdfTemplateRef} />
    </>
  );
}

export default ImprovedPDFButton;