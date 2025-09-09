import React from 'react';
import { Code, Database, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern web technologies'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Creating robust server-side applications and database management systems'
    },
    {
      icon: Globe,
      title: 'Full-Stack Solutions',
      description: 'Developing complete web applications from concept to deployment'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Analyzing complex problems and crafting efficient, scalable solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated software engineering student with a passion for creating meaningful digital experiences. 
            My journey in programming started with curiosity and has evolved into a commitment to building software 
            that solves real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl mb-6 mx-auto">
                <skill.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              My Vision
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              I believe technology should be accessible, intuitive, and impactful. My goal is to contribute to 
              innovative projects that push the boundaries of what's possible while maintaining a focus on user 
              experience and code quality. Every line of code is an opportunity to make something better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;