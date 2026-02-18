
import React from 'react';
import { BrandFeatureProps } from '../types';

const BrandFeature: React.FC<BrandFeatureProps> = ({ 
  title, 
  subtitle, 
  description, 
  connection, 
  ctaText, 
  ctaLink, 
  imageUrl, 
  reverse 
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
      {/* Image Container */}
      <div className="flex-1 w-full group overflow-hidden relative border border-svara-gold/10">
        <div className="absolute inset-0 bg-svara-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-svara-gold">{subtitle}</p>
          <h3 className="font-serif text-5xl md:text-7xl text-svara-white">{title}</h3>
        </div>
        
        <p className="font-sans font-light text-lg text-svara-white/60 leading-relaxed max-w-xl">
          {description}
        </p>

        {connection && (
          <div className="flex items-center gap-4 text-svara-gold/80 italic font-serif text-xl border-l border-svara-gold/30 pl-6">
            {connection}
          </div>
        )}

        <div className="pt-6">
          <a 
            href={ctaLink} 
            className="inline-block py-4 pr-12 border-b border-svara-gold/30 text-svara-gold uppercase tracking-widest text-xs hover:border-svara-gold transition-all duration-300 group"
          >
            {ctaText} 
            <span className="inline-block ml-4 transition-transform group-hover:translate-x-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandFeature;
