import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Solutions Inc.",
      duration: "June 2024 - August 2024",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive UI components and optimized application performance",
        "Participated in code reviews and agile development processes"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Digital Agency XYZ",
      duration: "December 2023 - February 2024",
      description: [
        "Created responsive web interfaces using HTML, CSS, and JavaScript",
        "Worked with design teams to implement pixel-perfect UI designs",
        "Optimized website performance and improved user experience",
        "Gained experience with version control systems and deployment processes"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "University Computer Science Department",
      duration: "August 2023 - May 2024",
      description: [
        "Assisted professors in teaching programming fundamentals to first-year students",
        "Conducted lab sessions and helped students with coding assignments",
        "Developed supplementary learning materials and tutorials",
        "Mentored students and provided academic guidance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Experience</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={20} />
                  </div>
                  {index !== experiences.length - 1 && (
                    <div className="w-0.5 bg-gray-300 h-32 ml-6 mt-4"></div>
                  )}
                </div>
                
                <div className="flex-grow bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-black mb-2">{exp.title}</h3>
                  <h4 className="text-lg text-gray-700 mb-2">{exp.company}</h4>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;