import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';   // NEW Import
import Certifications from './components/Certifications'; // NEW Import
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  

  return (
    <div className="bg-gray-900 min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />     
      <Certifications />   
      <Contact />
      <Footer />
      <ScrollToTopButton /> 
    </div>
  );
}

export default App;