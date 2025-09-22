import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-gray-400">Computer Science Engineering Student</p>
          </div>
          
          <div className="flex items-center text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="mx-2 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;