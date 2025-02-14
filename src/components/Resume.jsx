import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <a href="/path-to-your-resume.pdf" download className="bg-red-500 px-6 py-2 rounded-full hover:bg-red-600">Download Resume</a>
      </div>
    </section>
  );
};

export default Resume;