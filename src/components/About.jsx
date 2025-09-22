import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a dedicated Computer Science Engineering student with a passion for 
              problem-solving and innovation. My journey in technology started with 
              curiosity and has evolved into a commitment to creating meaningful 
              digital experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I enjoy working on challenging projects that push the boundaries of 
              what's possible with code. When I'm not coding, you can find me 
              exploring new technologies, contributing to open-source projects, 
              or mentoring fellow students.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <GraduationCap className="mr-3 text-black" size={20} />
                <span className="text-gray-700">B.Tech in Computer Science Engineering</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-black" size={20} />
                <span className="text-gray-700">Your City, Your State</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-3 text-black" size={20} />
                <span className="text-gray-700">Expected Graduation: 2025</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">CGPA</span>
                <span className="font-semibold text-black">8.5/10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Projects Completed</span>
                <span className="font-semibold text-black">15+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Languages Known</span>
                <span className="font-semibold text-black">8+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Certifications</span>
                <span className="font-semibold text-black">5+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;