import React, { useEffect, useState } from 'react';
import SpeedCubeAnimation from './components/SpeedCubeAnimation';
import BackgroundCubes from './components/BackgroundCubes';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HomeHighlights from './components/HomeHighlights';
import Experience from './components/Experience';
import Projects from './components/Projects';

type Screen = 'home' | 'experiences' | 'projects';
type WorkScreen = Exclude<Screen, 'home'>;
type SelectedWork = { screen: WorkScreen; index: number };

const getScreenFromHash = (): Screen => {
  const screen = window.location.hash.replace('#/', '');
  return screen === 'experiences' || screen === 'projects' ? screen : 'home';
};

function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>(getScreenFromHash);
  const [selectedWork, setSelectedWork] = useState<SelectedWork | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveScreen(getScreenFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changeScreen = (screen: Screen) => {
    const nextHash = screen === 'home' ? '#/' : `#/${screen}`;

    if (window.location.hash === nextHash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.location.hash = nextHash;
  };

  const navigate = (screen: Screen) => {
    setSelectedWork(null);
    changeScreen(screen);
  };

  const navigateToWork = (screen: WorkScreen, index: number) => {
    setSelectedWork({ screen, index });
    changeScreen(screen);
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <CustomCursor />
      <SpeedCubeAnimation />
      <Header activeScreen={activeScreen} onNavigate={navigate} />
      <BackgroundCubes screen={activeScreen} />
      <main className="screen-transition" key={activeScreen}>
        {activeScreen === 'home' && (
          <>
            <Hero />
            <HomeHighlights onNavigate={navigate} onSelect={navigateToWork} />
            <About />
          </>
        )}
        {activeScreen === 'experiences' && (
          <div className="min-h-screen pt-16">
            <Experience
              initialIndex={
                selectedWork?.screen === 'experiences' ? selectedWork.index : undefined
              }
            />
          </div>
        )}
        {activeScreen === 'projects' && (
          <div className="min-h-screen pt-16">
            <Projects
              initialIndex={
                selectedWork?.screen === 'projects' ? selectedWork.index : undefined
              }
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
