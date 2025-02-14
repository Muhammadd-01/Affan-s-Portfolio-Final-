import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <div className="text-white min-h-screen">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;