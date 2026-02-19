import React, { useState, useEffect } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors on change
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const isFormValid = formData.firstName.trim() !== '' && 
                      formData.lastName.trim() !== '' && 
                      validateEmail(formData.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    
    // Simulate API call/GitHub storage
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulation of saving to a "leads" table in the repo context
      console.log("Stewardship: Lead captured for Svara Repository", formData);
      
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ firstName: '', lastName: '', email: '' });
      }, 2000);
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-svara-black/90 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-svara-black border border-svara-gold/30 p-8 md:p-12 shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-svara-white/40 hover:text-svara-gold transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {isSuccess ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-20 h-20 bg-svara-gold/10 rounded-full flex items-center justify-center mx-auto border border-svara-gold/30">
              <svg className="w-10 h-10 text-svara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="font-serif text-3xl text-svara-white">Welcome Aboard.</h3>
            <p className="font-sans text-svara-white/40 text-sm tracking-widest uppercase">Your access is being architected.</p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center md:text-left space-y-2">
              <h2 className="font-serif text-4xl text-svara-white">Join the Waitlist</h2>
              <p className="text-[10px] uppercase tracking-[0.4em] text-svara-gold font-bold">Priority Access Protocols</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 relative">
                  <label className="text-[9px] uppercase tracking-widest text-svara-white/40 ml-1 font-bold">First Name</label>
                  <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                    placeholder="Julian"
                    className="w-full bg-transparent border-b border-svara-gold/20 py-3 px-1 focus:outline-none focus:border-svara-gold transition-colors font-sans text-svara-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-1 relative">
                  <label className="text-[9px] uppercase tracking-widest text-svara-white/40 ml-1 font-bold">Last Name</label>
                  <input 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                    placeholder="Vane"
                    className="w-full bg-transparent border-b border-svara-gold/20 py-3 px-1 focus:outline-none focus:border-svara-gold transition-colors font-sans text-svara-white placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-1 relative">
                <label className="text-[9px] uppercase tracking-widest text-svara-white/40 ml-1 font-bold">Corporate Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="j.vane@enterprise.com"
                  className="w-full bg-transparent border-b border-svara-gold/20 py-3 px-1 focus:outline-none focus:border-svara-gold transition-colors font-sans text-svara-white placeholder:text-white/10"
                />
                {formData.email && !validateEmail(formData.email) && (
                  <span className="absolute right-0 top-1 text-[8px] uppercase tracking-tighter text-red-500 font-bold">Invalid Email String</span>
                )}
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-5 uppercase tracking-[0.4em] text-[11px] font-black transition-all duration-500 ${isFormValid && !isSubmitting ? 'bg-svara-gold text-svara-black shadow-lg shadow-svara-gold/20' : 'bg-svara-white/5 text-svara-white/20 border border-svara-white/5 cursor-not-allowed'}`}
                >
                  {isSubmitting ? 'Architecting...' : 'Secure My Spot'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface BrandPilotLandingProps {
  onBack: () => void;
}

const BrandPilotLanding: React.FC<BrandPilotLandingProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-svara-black min-h-screen pt-32 pb-24">
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="container mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <button 
          onClick={onBack}
          className="text-svara-gold text-[10px] uppercase tracking-[0.3em] mb-12 hover:opacity-60 transition-opacity flex items-center gap-2 font-bold"
        >
          ← Back to Svara Group
        </button>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-8 mb-24">
          <p className="text-svara-gold text-xs uppercase tracking-[0.5em] font-extrabold">The Autopilot for Business Owners</p>
          <h1 className="font-serif text-6xl md:text-8xl text-svara-white leading-tight">
            Deploy Your 24/7 <br />
            <span className="italic text-svara-gold">Growth Engine.</span>
          </h1>
          <p className="font-sans font-light text-xl md:text-2xl text-svara-white/60 leading-relaxed max-w-2xl">
            BrandPilot leverages top-shelf AI to instantly automate your marketing ecosystem—from professional websites to autonomous social media management.
          </p>
          <div className="pt-8 flex flex-col md:flex-row gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-14 py-5 bg-svara-gold text-svara-black uppercase tracking-[0.3em] text-[11px] font-extrabold hover:bg-svara-white transition-all duration-500 text-center shadow-xl shadow-svara-gold/20"
            >
              Join Waitlist
            </button>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="px-14 py-5 border border-svara-white/20 text-svara-white/40 uppercase tracking-[0.3em] text-[11px] font-extrabold hover:border-svara-gold/30 hover:text-svara-white/60 transition-all duration-500 text-center cursor-default"
            >
              Download (Coming soon)
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
            <p className="text-[10px] uppercase tracking-widest text-svara-gold font-bold">— Founder, FOMO Bakery</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-24 border-t border-svara-white/5 text-center space-y-12">
          <h2 className="font-serif text-5xl text-svara-white">Scale Effortlessly.</h2>
          <div className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-24 py-6 border-2 border-svara-gold text-svara-gold uppercase tracking-[0.4em] text-[11px] font-black hover:bg-svara-gold hover:text-svara-black transition-all duration-500"
            >
              Request Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPilotLanding;
