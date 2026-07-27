import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Menu, X } from 'lucide-react';

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
        ? 'text-red-600'
        : 'text-gray-700 hover:text-red-600'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
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
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-red-500" />
                )}
              </button>
            ))}
            <a
              href="https://github.com/vedantkminiai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              Github
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg"
              title="Print or save this portfolio as a PDF"
            >
              Resume
              <Download className="ml-2 h-4 w-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
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
                className="inline-flex items-center font-medium text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Github
                <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.print();
                }}
                className="inline-flex w-fit items-center rounded-full bg-gray-900 px-5 py-2.5 font-medium text-white"
              >
                Resume
                <Download className="ml-2 h-4 w-4" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
