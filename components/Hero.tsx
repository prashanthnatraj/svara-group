import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-svara-black/60 via-svara-black/80 to-svara-black z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
          alt="Founder Excellence" 
          className="w-full h-full object-cover grayscale brightness-50 scale-105"
        />
      </div>

      <div className="relative z-20 max-w-5xl fade-in">
        <h1 className="font-serif text-6xl md:text-9xl mb-6 tracking-tight text-svara-white">
          Empowering Founders.
        </h1>
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-svara-gold mb-12 opacity-90 font-extrabold">
          AI-First Velocity. Human-Led Craft.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-left max-w-4xl mx-auto mb-16">
          <div className="space-y-4 border-l border-svara-gold/20 pl-8">
             <h3 className="font-serif text-2xl text-svara-white italic">For the Visionary</h3>
             <p className="font-sans font-light text-sm text-svara-white/60 leading-relaxed">
               We provide the framework for success: From early stage growth to Product-Market Fit to backoffice support (finance, marketing) to fundraising. Your growth, architected.
             </p>
          </div>
          <div className="space-y-4 border-l border-svara-gold/20 pl-8">
             <h3 className="font-serif text-2xl text-svara-white italic">For the Investor</h3>
             <p className="font-sans font-light text-sm text-svara-white/60 leading-relaxed">
               We are actively deploying capital into the next generation of AI-first startups. Join us in investing for growth where high-scale automation meets high-potential founders.
             </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
          <a 
            href="#contact" 
            className="px-10 py-5 bg-svara-gold text-svara-black uppercase tracking-[0.3em] text-[11px] font-extrabold hover:bg-svara-white transition-all duration-500 shadow-2xl shadow-svara-gold/10"
          >
            Scale My Business
          </a>
          <a 
            href="#contact" 
            className="px-10 py-5 border border-svara-white/30 text-svara-white uppercase tracking-[0.3em] text-[11px] font-extrabold hover:text-svara-gold hover:border-svara-gold transition-all duration-300"
          >
            Invest With Us
          </a>
        </div>
      </div>

      <a href="#ecosystem" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-80 group cursor-pointer hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.6em] text-svara-gold mb-4 font-bold">Scroll</span>
        <div className="w-[1px] h-20 bg-svara-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-svara-gold animate-scroll-line"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
