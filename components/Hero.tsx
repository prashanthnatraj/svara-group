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
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-svara-gold mb-10 opacity-90 font-bold">
          AI-First Velocity. Human-Led Craft.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-left max-w-4xl mx-auto mb-16">
          <div className="space-y-4 border-l border-svara-gold/20 pl-8">
             <h3 className="font-serif text-2xl text-svara-white">Strategic Capital</h3>
             <p className="text-xs text-svara-white/40 leading-relaxed">
               We provide more than funding; we provide the operational resonance required to scale with precision.
             </p>
          </div>
          <div className="space-y-4 border-l border-svara-gold/20 pl-8">
             <h3 className="font-serif text-2xl text-svara-white">Operational Excellence</h3>
             <p className="text-xs text-svara-white/40 leading-relaxed">
               Leveraging proprietary AI workflows to eliminate friction and maximize founder output.
             </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <a href="#ecosystem" className="text-svara-gold text-[10px] uppercase tracking-[0.5em] border-b border-svara-gold/30 pb-2 hover:border-svara-gold transition-all">
            Explore Ecosystem
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
