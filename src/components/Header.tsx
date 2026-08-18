import React, { useState, useEffect } from 'react';
import { ExternalLink, FileText, Menu, X } from 'lucide-react';

type Screen = 'home' | 'experiences' | 'projects';

type HeaderProps = {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
};

const Header = ({ activeScreen, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (screen: Screen) => {
    onNavigate(screen);
    setIsMenuOpen(false);
  };

  const navigation = [
    { label: 'Home', screen: 'home' as const },
    { label: 'Experiences', screen: 'experiences' as const },
    { label: 'Projects', screen: 'projects' as const },
  ];

  const navButtonClass = (screen: Screen, mobile = false) =>
    `${mobile ? 'text-left ' : ''}relative font-medium transition-colors duration-200 ${
      activeScreen === screen
        ? 'text-white'
        : 'text-neutral-400 hover:text-white'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-neutral-950/40 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
          <div className="text-2xl font-bold tracking-tight text-white">
            VK
          </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <button
                key={item.screen}
                onClick={() => navigate(item.screen)}
                className={navButtonClass(item.screen)}
                aria-current={activeScreen === item.screen ? 'page' : undefined}
              >
                {item.label}
                {activeScreen === item.screen && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-white" />
                )}
              </button>
            ))}
            <a
              href="https://github.com/vedantkminiai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Github
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </a>
            <a
              href="/Vedant_Kansara_Resume.pdf#view=FitH&toolbar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-300 hover:shadow-lg"
              title="View Vedant Kansara's resume"
            >
              Resume
              <FileText className="ml-2 h-4 w-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.screen}
                  onClick={() => navigate(item.screen)}
                  className={navButtonClass(item.screen, true)}
                  aria-current={activeScreen === item.screen ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://github.com/vedantkminiai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-neutral-400 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Github
                <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </a>
              <a
                href="/Vedant_Kansara_Resume.pdf#view=FitH&toolbar=1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 font-medium text-black"
              >
                Resume
                <FileText className="ml-2 h-4 w-4" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
