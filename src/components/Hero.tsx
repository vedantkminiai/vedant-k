import React from 'react';
import { Github, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Vedant Kansara
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8 leading-relaxed">
            Aspiring Software Engineer
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative solutions and building impactful software that makes a difference
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://github.com/vedantkansara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <Github className="mr-2 h-5 w-5" />
            View My Work
          </a>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Learn More
            <ArrowDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-blue-300 rounded-full opacity-25 animate-pulse"></div>
    </section>
  );
};

export default Hero;