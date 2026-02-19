import React from 'react';
import { LogoMark } from './Navbar';

interface FooterProps {
  onNavigate: (page: 'home' | 'brandpilot') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-svara-black py-24 px-6 border-t border-svara-gold/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16 mb-20">
          <div className="space-y-6">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-4 group text-left">
              <LogoMark className="w-12 h-12" />
              <h2 className="font-serif text-3xl text-svara-white tracking-[0.2em] uppercase">SVARA.</h2>
            </button>
            <p className="text-[10px] uppercase tracking-[0.3em] text-svara-white/30 max-w-xs leading-loose font-medium">
              Empowering founders through AI-first velocity and precision craft.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-widest text-svara-gold font-black">Inquiries</h4>
              <nav className="flex flex-col gap-3 text-[10px] uppercase tracking-widest text-svara-white/40 font-bold">
                <a href="#contact" className="hover:text-svara-gold transition-colors">Scale My Business</a>
                <a href="#contact" className="hover:text-svara-gold transition-colors">Invest With Us</a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-widest text-svara-gold font-black">Our Brands</h4>
              <nav className="flex flex-col gap-3 text-[10px] uppercase tracking-widest text-svara-white/40 text-left font-bold">
                <button onClick={() => onNavigate('brandpilot')} className="hover:text-svara-gold transition-colors uppercase text-left font-bold">BrandPilot.ai</button>
                <a href="https://www.frenyc.com/" target="_blank" rel="noopener noreferrer" className="hover:text-svara-gold transition-colors">FreNYC.com</a>
                <a href="https://fomobakery.com/" target="_blank" rel="noopener noreferrer" className="hover:text-svara-gold transition-colors">FOMO Bakery</a>
              </nav>
            </div>
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="text-[11px] uppercase tracking-widest text-svara-gold font-black">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-11 h-11 flex items-center justify-center border border-svara-white/10 text-svara-white/40 hover:border-svara-gold hover:text-svara-gold transition-all" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 flex items-center justify-center border border-svara-white/10 text-svara-white/40 hover:border-svara-gold hover:text-svara-gold transition-all" aria-label="X (Twitter)">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 flex items-center justify-center border border-svara-white/10 text-svara-white/40 hover:border-svara-gold hover:text-svara-gold transition-all" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-svara-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-svara-white/20 font-bold">
            © 2026 SVARA INC. Orchestrating excellence since 2019.
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-svara-white/20 font-bold">
            <a href="#" className="hover:text-svara-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-svara-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
