import React from 'react';
import { ExternalLink, Github, BookOpen, Palette } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Library Management System',
      icon: BookOpen,
      image: 'https://apuedge.com/wp-content/uploads/2020/08/online-library-databases.jpg,
      description: 'A comprehensive library management application built in Java, designed to streamline book circulation, member handling, and resource tracking while showcasing object-oriented programming principles.',
      features: [
        'Intuitive console-based interface for efficient librarian workflows',
        'Implements object-oriented design with classes for books, members, and transactions',
        'Automated due-date tracking with fine calculation for late returns',
        'Robust search and filtering for quick book or member lookup',
        'Member registration, authentication, and profile management',
        'Extensible architecture, enabling future enhancements like reporting and analytics'
      ],
      techStack: ['Java', 'SQL'],
      gradient: 'from-red-500 to-rose-500'
    },
    {
      title: 'ColourMash',
      icon: Palette,
      image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'An innovative color palette generator and design tool that helps designers and developers create harmonious color schemes with intelligent suggestions.',
      features: [
        'AI-powered color palette generation',
        'Real-time color harmony analysis',
        'Export palettes in multiple formats (HEX, RGB, HSL)',
        'Color accessibility compliance checking',
        'Save and organize favorite palettes',
        'Integration with popular design tools'
      ],
      techStack: ['React', 'TypeScript', 'CSS3', 'Color Theory API'],
      gradient: 'from-red-600 to-rose-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my key projects that showcase my skills in full-stack development, 
            problem-solving, and creating user-centered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-4 bg-gradient-to-r ${project.gradient}`}></div>
              
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}></div>
              </div>
              
              <div className="p-8 sm:p-10">
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl mr-4`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/vedantkansara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </a>
                  <a
                    href="https://github.com/vedantkansara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-red-500 hover:text-red-600 transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/vedantkansara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;