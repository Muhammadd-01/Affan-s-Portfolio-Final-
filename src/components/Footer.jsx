import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-black/70">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-red-500">LinkedIn</a>
          <a href="#" className="hover:text-red-500">GitHub</a>
          <a href="#" className="hover:text-red-500">Twitter</a>
        </div>
        <p className="text-gray-400">© 2023 DeepSeek. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;