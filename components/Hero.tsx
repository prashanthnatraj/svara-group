
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Visual - A more personal but high-end architectural shot */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-svara-black/40 via-svara-black/60 to-svara-black z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
          alt="High-end Workspace" 
          className="w-full h-full object-cover scale-110 animate-[pulse_25s_infinite]"
        />
      </div>

      <div className="relative z-20 max-w-4xl fade-in">
        <h1 className="font-serif text-7xl md:text-9xl mb-4 tracking-tight text-svara-white">
          Svara.
        </h1>
        <p className="font-sans text-xs md:text-sm uppercase tracking-[0.5em] text-svara-gold mb-8 opacity-80">
          Empowering the Founder's Journey
        </p>
        <div className="h-[1px] w-24 bg-svara-gold mx-auto mb-8"></div>
        <p className="font-sans font-light text-lg md:text-xl text-svara-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
          We bridge the gap between high-scale automation and high-touch human expertise. Built for the modern entrepreneur who demands excellence at every layer.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            className="px-10 py-4 border border-svara-gold text-svara-gold uppercase tracking-[0.2em] text-xs hover:bg-svara-gold hover:text-svara-black transition-all duration-500"
          >
            Inquire for Advisory
          </a>
          <a 
            href="#ecosystem" 
            className="px-10 py-4 text-svara-white/60 uppercase tracking-[0.2em] text-xs hover:text-svara-gold transition-all duration-300"
          >
            Explore Ecosystem
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-svara-gold/50"></div>
      </div>
    </section>
  );
};

export default Hero;
