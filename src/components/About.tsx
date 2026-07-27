import React from 'react';
import { Code, Database, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TypeScript, Vue.js'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Python, Java, C++, Pandas'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'HTML5, CSS3, JavaScript ES6+'
    },
    {
      icon: Lightbulb,
      title: 'Modern Tools',
      description: 'Git, VSCode, AWS, Stackblitz'
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-px bg-neutral-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
           Hey, I'm Vedant, a Computer Science student at the University of Toronto’s St. George Campus. Passionate about mathematics, problem-solving and programming. Co-founder of MiniAI, Education Startup. Software and Machine Learning Engineer. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 border border-neutral-700 bg-neutral-800 rounded-2xl hover:border-neutral-500 hover:shadow-xl hover:shadow-black/30 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-neutral-700 rounded-2xl mb-6 mx-auto">
                <skill.icon className="h-8 w-8 text-neutral-100" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {skill.title}
              </h3>
              <p className="text-neutral-400 text-center leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="border border-neutral-700 bg-neutral-950 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              My Vision
            </h3>
            <p className="text-lg text-neutral-400 max-w-4xl mx-auto leading-relaxed">
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
