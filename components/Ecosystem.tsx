import React from 'react';
import BrandFeature from './BrandFeature';

interface EcosystemProps {
  onNavigate: (page: 'home' | 'brandpilot') => void;
}

const Ecosystem: React.FC<EcosystemProps> = ({ onNavigate }) => {
  return (
    <section id="ecosystem" className="py-32 bg-svara-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 text-center md:text-left">
          <h2 className="font-serif text-5xl md:text-6xl text-svara-white mb-6">Our Brands</h2>
          <p className="font-sans text-svara-white/40 uppercase tracking-widest text-[10px]">Scalable Intelligence, Human Mastery.</p>
        </div>

        <div className="space-y-32 md:space-y-64">
          <BrandFeature 
            id="brandpilot"
            title="BrandPilot.ai"
            subtitle="Autonomous Marketing Suite"
            description="The gateway to streamlined growth. Instantly automate your marketing needs—from high-performance website generation and SEO/AEO optimization to autonomous social media management and top-shelf content production. Scale without the overhead."
            connection="One-click marketing infrastructure for the AI era."
            ctaText="Deploy AI Marketing"
            ctaLink="#"
            onCtaClick={() => onNavigate('brandpilot')}
            imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
          />

          <BrandFeature 
            id="frenyc"
            title="FreNYC.com"
            subtitle="Strategic Advisory"
            description="Battle-tested fractional leadership for the discerning founder. We provide the strategic fuel to supercharge your vision, from fundraising support and M&A advisory to operational backoffice mastery."
            connection="Elite strategic partnership for business owners."
            ctaText="Accelerate Your Vision"
            ctaLink="https://www.frenyc.com/"
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
