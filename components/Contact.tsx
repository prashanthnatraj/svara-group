
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-svara-black border-t border-svara-gold/10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-8 mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-svara-white">Fractional Advisory & Support</h2>
          <p className="font-sans font-light text-xl text-svara-white/50">
            Whether you need the high-scale automation of BrandPilot or the high-touch fractional counsel of FreNYC, we are ready to assist. We currently have capacity for selective founder partnerships.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="space-y-8 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-svara-gold/60 ml-1">Your Name</label>
              <input 
                type="text" 
                placeholder="Ex. Julian Vane"
                className="w-full bg-transparent border-b border-svara-gold/20 py-4 px-1 focus:outline-none focus:border-svara-gold transition-colors font-sans text-svara-white placeholder:text-svara-white/20"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-svara-gold/60 ml-1">Business Stage</label>
              <select className="w-full bg-transparent border-b border-svara-gold/20 py-4 px-1 focus:outline-none focus:border-svara-gold transition-colors font-sans text-svara-white">
                <option className="bg-svara-black" value="early">Early Stage / Seed</option>
                <option className="bg-svara-black" value="growth">Growth Stage</option>
                <option className="bg-svara-black" value="scale">Scaling / Series A+</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-svara-gold/60 ml-1">Mission Inquiry</label>
              <textarea 
                rows={4}
                placeholder="How can we help you scale?"
                className="w-full bg-transparent border-b border-svara-gold/20 py-4 px-1 focus:outline-none focus:border-svara-gold transition-colors font-sans text-svara-white placeholder:text-svara-white/20 resize-none"
              ></textarea>
            </div>
            <div className="pt-8 flex justify-center">
              <button 
                type="submit" 
                className="w-full md:w-auto px-24 py-5 bg-svara-gold text-svara-black uppercase tracking-[0.3em] text-xs font-bold hover:bg-svara-white transition-all duration-500 shadow-xl shadow-svara-gold/5"
              >
                Connect with Counsel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
