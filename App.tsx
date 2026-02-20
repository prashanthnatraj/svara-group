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
    
    const handleRouting = () => {
      // 1. Check for the redirect parameter 'p' from 404.html
      const params = new URLSearchParams(window.location.search);
      const redirectPath = params.get('p');
      
      // 2. Check current actual pathname
      const currentPath = window.location.pathname;
      
      if (redirectPath && redirectPath.includes('brandpilot-ai')) {
        // Recovery from 404 redirect
        window.history.replaceState(null, '', redirectPath);
        setCurrentPage('brandpilot');
      } else if (currentPath.includes('brandpilot-ai')) {
        // Direct match
        setCurrentPage('brandpilot');
      } else {
        // Default to home
        setCurrentPage('home');
      }
    };

    handleRouting();
    
    const handlePopState = () => handleRouting();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: 'home' | 'brandpilot', section?: string) => {
    const url = page === 'home' ? '/' : '/brandpilot-ai/';
    window.history.pushState({}, '', url);
    setCurrentPage(page);
    
    if (section) {
      // Use a small timeout to ensure the DOM has rendered if we just switched back to home
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
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
