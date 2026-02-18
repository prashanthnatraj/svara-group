
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';

const GeminiAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the Svara Group Strategic Advisor, acting as an elite counsel for Founders and Small Business Owners. 
          Your persona is highly professional, data-driven, and focused on founder ROI.
          
          Knowledge base for Svara Group:
          1. BrandPilot.ai: An AI marketing agent for small businesses. It automates social media end-to-end. Value prop: $3,500/month agency quality for $50/month. 
          2. FreNYC (frenyc.com): Fractional executive counsel. Lead by Prashanth (15+ years in M&A, Product Strategy, Management Consulting). Focused on AI transformation for startups. Typical retainer: $2,500–$8,000/month.
          3. FOMO Bakery (fomobakery.com): Premium, health-focused, woman-led bakery based in Bangalore, India. Preservative-free, luxury baked goods.
          
          Guideline:
          - Be concise and elite. 
          - Speak founder-to-founder.
          - If someone asks about scaling, mention FreNYC's fractional advisory.
          - If someone asks about marketing costs, mention BrandPilot's 1% cost-efficiency.
          - If someone asks about quality or craft, mention FOMO Bakery.
          - Keep responses under 3 sentences.`,
        }
      });

      const aiContent = response.text || "I am analyzing your scaling strategy. How can I assist your vision further?";
      setMessages(prev => [...prev, { role: 'assistant', content: aiContent }]);
    } catch (error) {
      console.error("Advisor Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Strategic systems are currently high-load. Please reach out to our advisory team directly via the contact form." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-svara-black border border-svara-gold shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-svara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-svara-gold rounded-full animate-ping"></div>
            <div className="w-1 h-1 bg-svara-gold rounded-full animate-ping [animation-delay:200ms]"></div>
            <div className="w-1 h-1 bg-svara-gold rounded-full animate-ping [animation-delay:400ms]"></div>
          </div>
        )}
      </button>

      <div className={`absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-svara-black border border-svara-gold/30 shadow-2xl transition-all duration-500 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}>
        <div className="p-6 border-b border-svara-gold/20 flex items-center gap-4 bg-svara-gray/50">
          <div className="w-8 h-8 rounded-full border border-svara-gold flex items-center justify-center">
            <div className="w-4 h-4 bg-svara-gold rounded-full animate-pulse"></div>
          </div>
          <div>
            <h4 className="font-serif text-lg text-svara-gold">Svara AI Counsel</h4>
            <p className="text-[10px] uppercase tracking-widest text-svara-white/40">Strategic ROI Active</p>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="h-[400px] overflow-y-auto p-6 space-y-6 scroll-smooth bg-[#0a0a0a]"
        >
          {messages.length === 0 && (
            <div className="text-center py-12 space-y-4">
              <p className="font-serif italic text-svara-white/40">"Scale is achieved through the elimination of friction."</p>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setInput("How does BrandPilot save me $3,000+ a month?")}
                  className="text-[10px] uppercase tracking-widest text-svara-gold/60 border border-svara-gold/20 px-4 py-2 hover:bg-svara-gold/5 transition-colors"
                >
                  Marketing Efficiency
                </button>
                <button 
                  onClick={() => setInput("Tell me about fractional AI advisory.")}
                  className="text-[10px] uppercase tracking-widest text-svara-gold/60 border border-svara-gold/20 px-4 py-2 hover:bg-svara-gold/5 transition-colors"
                >
                  Fractional Counsel
                </button>
              </div>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 text-sm font-sans leading-relaxed ${m.role === 'user' ? 'bg-svara-gold/10 text-svara-gold border border-svara-gold/20' : 'text-svara-white/80 border-l border-svara-gold/30 pl-4'}`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex space-x-1 p-4">
                <div className="w-1 h-1 bg-svara-gold/50 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-svara-gold/50 rounded-full animate-bounce [animation-delay:200ms]"></div>
                <div className="w-1 h-1 bg-svara-gold/50 rounded-full animate-bounce [animation-delay:400ms]"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-svara-gray/30 flex gap-2 border-t border-svara-gold/10">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Inquire strategically..."
            className="flex-1 bg-transparent py-2 px-3 text-sm focus:outline-none font-sans text-svara-white"
          />
          <button 
            onClick={handleSend}
            className="text-svara-gold p-2 hover:scale-110 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiAdvisor;
