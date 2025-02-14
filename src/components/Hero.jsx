import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold mb-4 animate-title">
        <span>Hi, I'm</span> <span className="text-primary">Affan</span>
      </h1>
      <p className="text-xl mb-8 animate-fade-in">
        A Full Stack Developer & UI/UX Enthusiast passionate about building scalable and user-friendly applications.
      </p>
      <div className="flex space-x-4 animate-fade-in">
        <a href="#projects" className="bg-primary px-6 py-2 rounded-full hover:bg-red-600">View Projects</a>
        <a href="#contact" className="border border-primary px-6 py-2 rounded-full hover:bg-primary">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;