import React from 'react';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vedantkansara',
      description: 'Check out my code repositories and contributions'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:vedantkansara@example.com',
      description: 'Reach out for collaboration opportunities'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vedantkansara',
      description: 'Connect with me professionally'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities, collaborations, and meaningful conversations 
            about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl mb-6 mx-auto group-hover:shadow-lg">
                <link.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                {link.label}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed mb-4">
                {link.description}
              </p>
              <div className="flex items-center justify-center text-purple-400 group-hover:text-purple-300">
                <ExternalLink className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Connect</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Open to Opportunities
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              I'm currently seeking internship opportunities and entry-level positions where I can 
              contribute to meaningful projects while continuing to learn and grow as a software engineer. 
              If you have an exciting opportunity or just want to chat about technology, I'd love to hear from you.
            </p>
            <a
              href="https://github.com/vedantkansara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              Explore My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;