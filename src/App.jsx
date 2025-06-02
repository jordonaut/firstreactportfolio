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
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('loadCount') || '0', 10);
    setLoadCount(count);
    if (count >= 3) {
      setIsLoaded(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    const count = parseInt(localStorage.getItem('loadCount') || '0', 10) + 1;
    localStorage.setItem('loadCount', count.toString());
    setLoadCount(count);
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

        {/* Dynamically render sections based on load count, if visiting for the first time show the home and projects, but after that show projects first */}
        {loadCount === 0 ? (
          <>
            <Home />
            <Projects />
          </>
        ) : (
          <>
            <Projects />
            <Home />
          </>
        )}

        <About />
      </div>
    </>
  );
}

export default App;