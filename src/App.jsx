'use client';

import React, { useState } from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';

const theme = {
  primary: '#1E3A8A', // Dark sky blue
  secondary: '#111827', // Very dark (mostly black) blue
  text: '#E5E7EB', // Light gray
  accent: '#60A5FA', // Light blue
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`} style={{ backgroundColor: theme.secondary, color: theme.text }}>
      <SpaceBackground />
      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} theme={theme} />
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Experience theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </div>
      <WhatsAppIcon phoneNumber="03128538773" theme={theme} />
    </div>
  );
}

export default App;
