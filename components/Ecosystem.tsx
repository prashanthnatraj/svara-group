import React from 'react';
import BrandFeature from './BrandFeature';

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-32 bg-svara-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 text-center md:text-left">
          <h2 className="font-serif text-5xl md:text-6xl text-svara-white mb-6">Explore Portfolio</h2>
          <p className="font-sans text-svara-white/40 uppercase tracking-widest text-[10px]">Scalable Intelligence, Human Mastery</p>
        </div>

        <div className="space-y-32 md:space-y-64">
          <BrandFeature 
            id="brandpilot"
            title="BrandPilot.ai"
            subtitle="Agency Quality, AI Efficiency"
            description="Reclaiming the founder's time. BrandPilot is an end-to-end AI marketing agent that autonomizes social media growth from strategy to execution. We deliver agency-level quality at a fraction of the cost."
            connection="Marketing at 1% of the traditional overhead."
            ctaText="Explore BrandPilot"
            ctaLink="#"
            imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
          />

          <BrandFeature 
            id="frenyc"
            title="FreNYC.com"
            subtitle="Strategic Growth Ally"
            description="Precision navigation for the AI era. Combining 15+ years of M&A, product strategy, and management consulting with deep AI fluency. We provide the fractional leadership needed to scale with surgical precision."
            connection="Elite partnership for AI-first startups."
            ctaText="Partner with FreNYC"
            ctaLink="#"
            imageUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
            reverse
          />

          <BrandFeature 
            id="fomo"
            title="FOMO Bakery"
            subtitle="The Spirit of Premium Craft"
            description="Health-focused luxury from the heart of Bangalore. FOMO Bakery is a woman-led brand redefining the confectionery space with high-quality, preservative-free ingredients. A testament to excellence in the physical domain."
            connection="India-based. Woman-led. Uncompromising craft."
            ctaText="Experience the Craft"
            ctaLink="https://fomobakery.com/"
            imageUrl="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=1200"
          />
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
