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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQGxaM3JN97JNg/profile-displayphoto-shrink_200_200/B4EZR9EFvzHAAY-/0/1737265012370?e=2147483647&v=beta&t=hM64RuXSQD4lcZtRN35NQsTxm9oovwH2cl1dc-Prds0"
              alt="Vedant Kansara"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-neutral-700 shadow-2xl shadow-black/60 mx-auto"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-neutral-400/10"></div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
              Vedant Kansara
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-300 mb-8 leading-relaxed">
            Software Engineer and Speed-Cube Enthusiast
          </p>
          <p className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative solutions and building impactful software that makes a difference
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://github.com/vedantkansara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <Github className="mr-2 h-5 w-5" />
            View Github
          </a>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 border border-neutral-600 text-neutral-200 font-semibold rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Learn More
            <ArrowDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-16 h-16 bg-neutral-400 rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-neutral-600 rounded-full opacity-10 animate-pulse"></div>
    </section>
  );
};

export default Hero;
