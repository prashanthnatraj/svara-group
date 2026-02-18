import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-svara-gray/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="font-serif text-5xl md:text-6xl text-svara-white leading-tight">
              The Power of <span className="text-svara-gold italic">Less</span>.
            </h2>
            <div className="h-[1px] w-24 bg-svara-gold"></div>
            <div className="space-y-6 text-lg font-sans font-light text-svara-white/60 leading-relaxed">
              <p>
                Svara Group is not a traditional holding company. We are a boutique ensemble of ventures built on a singular premise: that the future of enterprise belongs to those who can harmonize artificial intelligence with human mastery.
              </p>
              <p>
                Our portfolio is intentionally curated. We don't chase volume; we chase excellence. From the digital-first efficiency of BrandPilot to the high-touch nuance of FreNYC, we provide the capital, infrastructure, and operational wisdom required to turn high-potential brands into category leaders.
              </p>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] overflow-hidden border border-svara-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Minimalist Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-svara-gold/10 backdrop-blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
