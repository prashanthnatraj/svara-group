import React, { useState, useEffect } from 'react';

export const LogoMark = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C5A059" />
        <stop offset="50%" stopColor="#F2D79E" />
        <stop offset="100%" stopColor="#A67C37" />
      </linearGradient>
    </defs>
    {/* Outer Rings */}
    <circle cx="50" cy="50" r="48" stroke="url(#goldGradient)" strokeWidth="1" />
    <circle cx="50" cy="50" r="45" stroke="url(#goldGradient)" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="42" fill="#0D0D0D" />
    
    {/* Stylized S Crest (Musical Note/Serif S) */}
    <path 
      d="M58 35 C58 28, 42 28, 42 35 C42 42, 58 45, 58 55 C58 65, 42 72, 42 72 L42 68 C42 68, 54 62, 54 55 C54 48, 42 45, 42 35 C42 25, 58 20, 58 35 Z" 
      fill="url(#goldGradient)"
    />
    <circle cx="43.5" cy="71" r="4.5" fill="url(#goldGradient)" />
  </svg>
);

interface NavbarProps {
  onNavigate: (page: 'home' | 'brandpilot', section?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-svara-black/95 backdrop-blur-md py-4 border-b border-svara-gold/20' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-4 group">
          <LogoMark />
          <span className="font-serif text-3xl tracking-[0.2em] text-svara-white group-hover:text-svara-gold transition-colors">
            SVARA.
          </span>
        </button>
        
        <div className="hidden md:flex space-x-12 items-center">
          <button 
            onClick={() => onNavigate('home', 'ecosystem')} 
            className="text-[10px] uppercase tracking-[0.3em] hover:text-svara-gold transition-colors font-sans font-light text-svara-white/60"
          >
            Our Brands
          </button>
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
