import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAdvisor from './components/GeminiAdvisor';
import BrandPilotLanding from './components/BrandPilotLanding';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'brandpilot'>('home');

  useEffect(() => {
    setIsLoaded(true);
    const path = window.location.pathname;
    if (path.includes('brandpilot-ai')) {
      setCurrentPage('brandpilot');
    }
    
    const handlePopState = () => {
      if (window.location.pathname.includes('brandpilot-ai')) {
        setCurrentPage('brandpilot');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: 'home' | 'brandpilot') => {
    const url = page === 'home' ? '/' : '/brandpilot-ai/';
    window.history.pushState({}, '', url);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Ecosystem onNavigate={navigateTo} />
            <About />
            <Contact />
          </>
        ) : (
          <BrandPilotLanding onBack={() => navigateTo('home')} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
      <GeminiAdvisor />
    </div>
  );
};

export default App;
