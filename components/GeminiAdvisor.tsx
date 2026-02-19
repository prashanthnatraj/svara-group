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

    // Initial AI placeholder for streaming effect
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    try {
      // Always use the required initialization pattern for GoogleGenAI
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the Svara Group Strategic Advisor. Persona: High-end growth ally, ROI-focused, brief, and strategic.
          
          Brands:
          1. BrandPilot.ai: Marketing AI agent. Reclaims founder time. Agency quality for $50/month. 
          2. FreNYC: Strategic growth partner (Prashanth). 15+ years experience in M&A, AI transformation. Retainer: $2.5k–$8k/month.
          3. FOMO Bakery: Premium, woman-led luxury craft in Bangalore.
          
          Tone: Concise, professional, supportive but direct. Keep responses under 2-3 sentences. No legal terminology. Use words like "partner", "ally", "collaboration".`,
        }
      });

      const result = await chat.sendMessageStream({ message: userMsg });
      let fullText = '';
      
      for await (const chunk of result) {
        // Access .text property directly from response chunk
        const text = chunk.text;
        fullText += text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = fullText;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Advisor Error:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].content = "Our partners are currently offline. Please use our primary partnership form for strategic inquiries.";
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {/* Prominent Chat Pill */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-4 bg-svara-black border border-svara-gold/50 pl-6 pr-4 py-3 rounded-full shadow-[0_0_30px_rgba(197,160,89,0.15)] transition-all duration-500 hover:scale-105 active:scale-95 ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-svara-gold font-bold">Ask AI Advisor</span>
        <div className="w-10 h-10 rounded-full bg-svara-gold flex items-center justify-center relative overflow-hidden">
          <svg className="w-5 h-5 text-svara-black relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
          <div className="absolute inset-0 bg-white/20 animate-ping"></div>
        </div>
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-0 right-0 w-[380px] md:w-[420px] bg-svara-black border border-svara-gold/30 shadow-2xl transition-all duration-500 origin-bottom-right rounded-lg overflow-hidden ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}>
        <div className="p-6 border-b border-svara-gold/20 flex items-center justify-between bg-svara-gray/80">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-svara-gold rounded-full animate-pulse"></div>
            <div>
              <h4 className="font-serif text-lg text-svara-gold">Growth Advisor</h4>
              <p className="text-[9px] uppercase tracking-widest text-svara-white/40 italic">Resonating Excellence</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-svara-white/30 hover:text-svara-gold transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div ref={scrollRef} className="h-[450px] overflow-y-auto p-6 space-y-6 bg-[#0a0a0a]">
          {messages.length === 0 && (
            <div className="text-center py-12 space-y-6">
              <p className="font-serif italic text-svara-white/40 text-lg">"Excellence is not a destination, but a frequency."</p>
              <div className="flex flex-col gap-3 px-8">
                <button 
                  onClick={() => { setInput("How can BrandPilot optimize my growth?"); }}
                  className="text-[9px] uppercase tracking-[0.2em] text-svara-gold/80 border border-svara-gold/10 px-4 py-3 hover:bg-svara-gold/5 transition-all text-left"
                >
                  01. Marketing Efficiency
                </button>
                <button 
                  onClick={() => { setInput("Tell me about fractional AI partnership."); }}
                  className="text-[9px] uppercase tracking-[0.2em] text-svara-gold/80 border border-svara-gold/10 px-4 py-3 hover:bg-svara-gold/5 transition-all text-left"
                >
                  02. Strategic Support
                </button>
              </div>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 text-sm font-sans leading-relaxed ${m.role === 'user' ? 'bg-svara-gold/10 text-svara-gold border border-svara-gold/20' : 'text-svara-white/80 border-l-2 border-svara-gold/40 pl-5 bg-white/5'}`}>
                {m.content || (isLoading && i === messages.length - 1 ? <span className="inline-block w-1 h-4 bg-svara-gold animate-pulse"></span> : null)}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-svara-gray/50 flex gap-3 border-t border-svara-gold/10">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="How can we help you scale?"
            className="flex-1 bg-transparent py-3 px-4 text-sm focus:outline-none font-sans text-svara-white placeholder:text-white/10"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-svara-gold/10 text-svara-gold p-3 rounded-md hover:bg-svara-gold hover:text-svara-black transition-all disabled:opacity-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiAdvisor;
