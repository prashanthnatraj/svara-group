
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-svara-black/90 backdrop-blur-md py-4 border-b border-svara-gold/20' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-3xl tracking-widest text-svara-gold">
          SVARA.
        </a>
        
        <div className="hidden md:flex space-x-12 items-center">
          <a href="#ecosystem" className="text-sm uppercase tracking-widest hover:text-svara-gold transition-colors font-sans font-light">Ecosystem</a>
          <a href="#about" className="text-sm uppercase tracking-widest hover:text-svara-gold transition-colors font-sans font-light">About</a>
          <a href="#contact" className="text-sm uppercase tracking-widest hover:text-svara-gold transition-colors font-sans font-light">Contact</a>
          <a 
            href="#contact" 
            className="px-6 py-2 border border-svara-gold text-svara-gold text-xs uppercase tracking-[0.2em] hover:bg-svara-gold hover:text-svara-black transition-all duration-300"
          >
            Advisory
          </a>
        </div>

        <button className="md:hidden text-svara-gold">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
