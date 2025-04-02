
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-heading">
              Megha Syam<span className="text-accent">.</span>
            </h2>
            <p className="mt-2 text-white/70 max-w-md">
              Building innovative solutions and creating impactful applications.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-white/70 text-sm flex items-center">
              © {year} Megha Syam. Made with <Heart className="h-3 w-3 mx-1 text-red-400" /> and React.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
