import React, { useEffect, useState } from 'react';
import SpeedCubeAnimation from './components/SpeedCubeAnimation';
import BackgroundCubes from './components/BackgroundCubes';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

type Screen = 'home' | 'experiences' | 'projects';

const getScreenFromHash = (): Screen => {
  const screen = window.location.hash.replace('#/', '');
  return screen === 'experiences' || screen === 'projects' ? screen : 'home';
};

function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>(getScreenFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveScreen(getScreenFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (screen: Screen) => {
    const nextHash = screen === 'home' ? '#/' : `#/${screen}`;

    if (window.location.hash === nextHash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.location.hash = nextHash;
  };

  return (
    <div className="min-h-screen bg-white">
      <SpeedCubeAnimation />
      <Header activeScreen={activeScreen} onNavigate={navigate} />
      <BackgroundCubes screen={activeScreen} />
      <main className="screen-transition" key={activeScreen}>
        {activeScreen === 'home' && (
          <>
            <Hero />
            <About />
            <Education />
            <Contact />
          </>
        )}
        {activeScreen === 'experiences' && (
          <div className="min-h-screen pt-16">
            <Experience />
          </div>
        )}
        {activeScreen === 'projects' && (
          <div className="min-h-screen pt-16">
            <Projects />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
