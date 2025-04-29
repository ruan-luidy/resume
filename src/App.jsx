import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PDFButton from './components/DownloadButton'; // Novo componente PDFButton

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <PDFButton /> {/* Substituímos o ImprovedPDFButton pelo novo PDFButton */}
    </div>
  );
}

export default App;