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

  const LogoMark = () => (
    <svg viewBox="0 0 100 100" className="w-8 h-8 text-svara-gold" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M30 70C30 70 40 30 70 30" strokeLinecap="round" />
      <path d="M30 30C30 30 60 70 70 70" strokeLinecap="round" className="opacity-50" />
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
    </svg>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-svara-black/95 backdrop-blur-md py-4 border-b border-svara-gold/20' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <LogoMark />
          <span className="font-serif text-2xl tracking-[0.2em] text-svara-white group-hover:text-svara-gold transition-colors">
            SVARA.
          </span>
        </a>
        
        <div className="hidden md:flex space-x-12 items-center">
          <a href="#ecosystem" className="text-[10px] uppercase tracking-[0.3em] hover:text-svara-gold transition-colors font-sans font-light text-svara-white/60">The Portfolio</a>
          <a href="#about" className="text-[10px] uppercase tracking-[0.3em] hover:text-svara-gold transition-colors font-sans font-light text-svara-white/60">Our Philosophy</a>
          <a href="#contact" className="text-[10px] uppercase tracking-[0.3em] hover:text-svara-gold transition-colors font-sans font-light text-svara-white/60">Contact</a>
          <a 
            href="#contact" 
            className="px-6 py-2 border border-svara-gold text-svara-gold text-[10px] uppercase tracking-[0.3em] hover:bg-svara-gold hover:text-svara-black transition-all duration-300"
          >
            Partner With Us
          </a>
        </div>

        <button className="md:hidden text-svara-gold p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
