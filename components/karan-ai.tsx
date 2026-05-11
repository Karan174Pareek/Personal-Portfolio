'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2, Terminal, Sparkles, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const SYSTEM_PROMPT = `
You are the AI Assistant for Karan Pareek. Persona: Professional, visionary, slightly witty.
Karan's Projects: Ignitia (Startup), Woven Wonders, International Immigration.
Specialties: MERN Stack, SEO, High-performance engineering.
Keep responses short, cinematic, and technical.
`;

const QUICK_SUGGESTIONS = [
  "What is Karan's tech stack?",
  "Tell me about Ignitia.",
  "How can I contact Karan?",
  "What services does he provide?"
];

export function KaranAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text?: string) => {
    const userMessage = text || input.trim();
    if (!userMessage || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'ai', content: "ERROR: API Key missing. Please check your .env.local file." }]);
      setIsLoading(false);
      return;
    }

    try {
      // Using the exact model alias and endpoint from your working cURL
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${SYSTEM_PROMPT}\n\nUser Question: ${userMessage}`
                }
              ]
            }
          ]
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Transmission interrupted.");
      }

      const data = await response.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Neural link stable, but no data received.";
      setMessages(prev => [...prev, { role: 'ai', content: aiText }]);
    } catch (error: any) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', content: `[ERROR] ${error.message || "Connection lost in the void."}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[calc(100vw-32px)] sm:w-[380px] md:w-[420px] glassmorphism border border-primary/20 shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-primary/10 px-4 py-4 flex items-center justify-between border-b border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-black/40 border border-primary/30 flex items-center justify-center">
                   <Cpu size={14} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">System Assistant</span>
                  <span className="text-[8px] uppercase tracking-[0.1em] text-primary">Status: Operational</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-primary transition-colors p-2">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-6 scroll-smooth min-h-[300px]">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-10">
                   <Sparkles className="text-primary/20" size={32} />
                   <p className="text-white/20 text-[9px] font-mono uppercase tracking-[0.2em]">_ initialize link _</p>
                   <div className="flex flex-wrap justify-center gap-2 pt-4 px-4">
                      {QUICK_SUGGESTIONS.map((s, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleSend(s)}
                          className="px-3 py-2 rounded-lg border border-white/5 text-[9px] text-white/40 hover:border-primary/40 hover:text-primary transition-all bg-white/5 active:scale-95"
                        >
                          {s}
                        </button>
                      ))}
                   </div>
                </div>
              )}
              
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={cn("flex flex-col max-w-[90%]", msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start")}
                >
                  <div className={cn(
                    "px-4 py-3 rounded-2xl text-xs font-mono leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-primary/20 text-white border border-primary/20 rounded-tr-none" 
                      : "bg-white/5 text-white/80 border border-white/5 rounded-tl-none"
                  )}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex items-center gap-2 text-primary p-2">
                  <Loader2 size={12} className="animate-spin" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Processing...</span>
                </div>
              )}
            </div>

            {/* Input Footer */}
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-4 bg-black/40 border-t border-white/5">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="COMMAND..."
                  className="flex-grow bg-black/50 border border-white/10 px-4 py-3 text-[10px] font-mono uppercase tracking-widest outline-none focus:border-primary/50 transition-all"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-primary text-black p-3 rounded-none hover:bg-white transition-colors disabled:opacity-20"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-xl hover:border-primary hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all group relative"
      >
        <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-black">
           <span className="text-[10px] font-bold text-black">!</span>
        </div>
      </button>
    </div>
  );
}
