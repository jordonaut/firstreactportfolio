import { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const loadCount = parseInt(localStorage.getItem('loadCount') || '0', 10);
    if (loadCount >= 3) {
      setIsLoaded(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    const loadCount = parseInt(localStorage.getItem('loadCount') || '0', 10) + 1;
    localStorage.setItem('loadCount', loadCount.toString());
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-[var(--color-bg)] text-[var(--color-text)]`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Projects />
        <About />
      </div>
    </>
  );
}

export default App;
