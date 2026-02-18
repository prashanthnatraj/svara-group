
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-svara-black py-20 px-6 border-t border-svara-gold/5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl text-svara-gold tracking-widest mb-4">SVARA.</h2>
          <p className="text-xs uppercase tracking-widest text-svara-white/30">© 2024 Svara Group Holdings. All Rights Reserved.</p>
        </div>

        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-svara-white/40">
          <a href="#" className="hover:text-svara-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-svara-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-svara-gold transition-colors">Investor Relations</a>
        </div>

        <div className="flex gap-6">
          <a href="#" className="w-10 h-10 flex items-center justify-center border border-svara-white/10 text-svara-white/40 hover:border-svara-gold hover:text-svara-gold transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
      
      <div className="mt-20 text-center opacity-10">
        <p className="font-serif italic text-sm tracking-widest">Built at the intersection of Silicon Valley and New York.</p>
      </div>
    </footer>
  );
};

export default Footer;
