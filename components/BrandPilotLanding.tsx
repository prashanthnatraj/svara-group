import React from 'react';

interface BrandPilotLandingProps {
  onBack: () => void;
}

const BrandPilotLanding: React.FC<BrandPilotLandingProps> = ({ onBack }) => {
  return (
    <div className="bg-svara-black min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <button 
          onClick={onBack}
          className="text-svara-gold text-[10px] uppercase tracking-[0.3em] mb-12 hover:opacity-60 transition-opacity flex items-center gap-2"
        >
          ← Back to Svara Group
        </button>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-8 mb-24">
          <p className="text-svara-gold text-xs uppercase tracking-[0.5em] font-bold">The Autopilot for Business Owners</p>
          <h1 className="font-serif text-6xl md:text-8xl text-svara-white leading-tight">
            Deploy Your 24/7 <br />
            <span className="italic text-svara-gold">Growth Engine.</span>
          </h1>
          <p className="font-sans font-light text-xl md:text-2xl text-svara-white/60 leading-relaxed max-w-2xl">
            BrandPilot leverages top-shelf AI to instantly automate your marketing ecosystem—from professional websites to autonomous social media management.
          </p>
          <div className="pt-8 flex flex-col md:flex-row gap-6">
            <a 
              href="#" 
              className="px-12 py-5 bg-svara-gold text-svara-black uppercase tracking-[0.3em] text-xs font-bold hover:bg-svara-white transition-all duration-500 text-center"
            >
              Download The App
            </a>
            <a 
              href="#features" 
              className="px-12 py-5 border border-svara-gold/30 text-svara-gold uppercase tracking-[0.3em] text-xs font-bold hover:border-svara-gold transition-all duration-500 text-center"
            >
              View Feature Suite
            </a>
          </div>
        </div>

        {/* Deep Feature Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1px bg-svara-white/5 border border-svara-white/10 mb-32">
          <div className="bg-svara-black p-10 space-y-4">
            <h4 className="text-svara-gold font-bold text-[10px] uppercase tracking-widest">AEO & SEO</h4>
            <h3 className="font-serif text-2xl text-svara-white leading-snug">Answer Engine Mastery</h3>
            <p className="text-xs text-svara-white/50 leading-loose">Optimizing your visibility for the next era of search: SearchGPT, Perplexity, and Claude.</p>
          </div>
          <div className="bg-svara-black p-10 space-y-4">
            <h4 className="text-svara-gold font-bold text-[10px] uppercase tracking-widest">Social Media</h4>
            <h3 className="font-serif text-2xl text-svara-white leading-snug">Autonomous Content</h3>
            <p className="text-xs text-svara-white/50 leading-loose">Automated generation and scheduling of brand-aligned posts across LinkedIn, X, and Instagram.</p>
          </div>
          <div className="bg-svara-black p-10 space-y-4">
            <h4 className="text-svara-gold font-bold text-[10px] uppercase tracking-widest">Web Engine</h4>
            <h3 className="font-serif text-2xl text-svara-white leading-snug">Instant Storefronts</h3>
            <p className="text-xs text-svara-white/50 leading-loose">Deploy high-converting landing pages and full-stack websites in under 60 seconds.</p>
          </div>
          <div className="bg-svara-black p-10 space-y-4">
            <h4 className="text-svara-gold font-bold text-[10px] uppercase tracking-widest">Analytics</h4>
            <h3 className="font-serif text-2xl text-svara-white leading-snug">Strategic Insights</h3>
            <p className="text-xs text-svara-white/50 leading-loose">AI-driven reporting that translates data into actionable growth strategies for your vision.</p>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="relative aspect-video w-full overflow-hidden border border-svara-gold/20 mb-32 bg-svara-gray/50 flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-t from-svara-black to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000" 
            alt="AI Interface" 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="relative z-20 text-center space-y-6 p-8">
            <p className="font-serif italic text-3xl md:text-5xl text-svara-white leading-tight">"The ultimate leverage for the modern entrepreneur."</p>
            <p className="text-[10px] uppercase tracking-widest text-svara-gold">— Founder, FOMO Bakery</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-24 border-t border-svara-white/5 text-center space-y-12">
          <h2 className="font-serif text-5xl text-svara-white">Scale Effortlessly.</h2>
          <div className="flex justify-center">
            <a 
              href="#" 
              className="px-24 py-6 border border-svara-gold text-svara-gold uppercase tracking-[0.4em] text-[10px] hover:bg-svara-gold hover:text-svara-black transition-all"
            >
              Request Access
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPilotLanding;
