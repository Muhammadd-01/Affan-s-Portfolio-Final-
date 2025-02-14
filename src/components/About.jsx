import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg mb-6">
          I'm a Full Stack Developer with expertise in React, Node.js, and modern web technologies. I specialize in building responsive, user-friendly applications with a focus on performance and scalability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <p>React, Tailwind CSS, JavaScript, HTML5, CSS3</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <p>Node.js, Express, MongoDB, REST APIs</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">UI/UX</h3>
            <p>Figma, Adobe XD, User Research, Prototyping</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Tools</h3>
            <p>Git, VSCode, Docker, Postman</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;