import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            John Doe
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Computer Science Engineering Student
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. 
            Currently pursuing my degree in CSE with a focus on full-stack development 
            and emerging technologies.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 rounded-full"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 rounded-full"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:john.doe@example.com"
            className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 rounded-full"
          >
            <Mail size={24} />
          </a>
        </div>

        <button 
          onClick={scrollToAbout}
          className="animate-bounce p-2 text-black hover:text-gray-600 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;