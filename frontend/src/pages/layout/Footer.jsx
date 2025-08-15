import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Company Name */}
        <div className="text-lg font-semibold">TechTri</div>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#home" className="hover:text-cyan-400">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#services" className="hover:text-cyan-400">
            Services
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          © {new Date().getFullYear()} TechTri. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
