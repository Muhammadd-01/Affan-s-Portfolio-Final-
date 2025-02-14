import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-bold">DeepSeek</a>
        <div className="flex space-x-4">
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#projects" className="hover:text-red-500">Projects</a>
          <a href="#resume" className="hover:text-red-500">Resume</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
          <button onClick={toggleDarkMode} className="p-2 bg-gray-800 rounded-full">
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;