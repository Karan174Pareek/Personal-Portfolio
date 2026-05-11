'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, ChevronRight } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: 'IGNITIA_OS v2.4.0 (AUTHORIZED ACCESS ONLY)' },
    { type: 'output', content: 'Type "help" for a list of available commands.' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newHistory: TerminalLine[] = [...history, { type: 'input', content: cmd }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({ type: 'output', content: 'Available commands:' });
        newHistory.push({ type: 'output', content: '  - about: Display identification data' });
        newHistory.push({ type: 'output', content: '  - projects: List featured works' });
        newHistory.push({ type: 'output', content: '  - skills: Show technical stack' });
        newHistory.push({ type: 'output', content: '  - contact: Display communication channels' });
        newHistory.push({ type: 'output', content: '  - clear: Purge terminal buffer' });
        newHistory.push({ type: 'output', content: '  - exit: Terminate session' });
        break;
      case 'about':
        newHistory.push({ type: 'output', content: 'NAME: Karan Pareek' });
        newHistory.push({ type: 'output', content: 'ROLE: Programmer' });
        newHistory.push({ type: 'output', content: 'MISSION: Developing scalable and efficient digital solutions.' });
        newHistory.push({ type: 'output', content: 'LOCATION: Siliguri, WB' });
        break;
      case 'projects':
        newHistory.push({ type: 'output', content: 'ACTIVE PROJECTS:' });
        newHistory.push({ type: 'output', content: '  1. Fittronics Global - E-Commerce' });
        newHistory.push({ type: 'output', content: '  2. International Immigration - Landing Page' });
        newHistory.push({ type: 'output', content: '  3. Ignitia Digital - Agency Website' });
        newHistory.push({ type: 'output', content: '  4. Woven Wonders - Handcrafted E-Commerce' });
        break;
      case 'skills':
        newHistory.push({ type: 'output', content: 'TECH STACK:' });
        newHistory.push({ type: 'output', content: '  LANGUAGES: HTML, CSS, JS, Java, C, SQL' });
        newHistory.push({ type: 'output', content: '  STACK: MERN (MongoDB, Express, React, Node.js)' });
        newHistory.push({ type: 'output', content: '  TOOLS: Wordpress, Postman, Semrush, SEO' });
        break;
      case 'contact':
        newHistory.push({ type: 'output', content: 'EMAIL: karanpareek174@gmail.com' });
        newHistory.push({ type: 'output', content: 'PHONE: +91 8101482088' });
        newHistory.push({ type: 'output', content: 'WEB: www.ignitia.digital' });
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        setIsOpen(false);
        return;
      case '':
        break;
      default:
        newHistory.push({ type: 'error', content: `Command not found: ${cmd}` });
        newHistory.push({ type: 'output', content: 'Type "help" for a list of commands.' });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <>
      {/* Access Trigger (Can be placed anywhere) */}
      <div className="flex justify-center">
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative px-8 py-4 bg-white/5 border border-white/10 hover:border-primary/40 transition-all flex items-center gap-4"
        >
          <div className="w-2 h-2 bg-primary animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Initialize Functional Terminal</span>
          <TerminalIcon size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`fixed z-[150] bg-black/90 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
              isMaximized 
              ? 'inset-4 rounded-sm' 
              : 'bottom-10 right-10 w-[90vw] md:w-[600px] h-[70vh] rounded-sm'
            }`}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5 select-none">
              <div className="flex items-center gap-3">
                <TerminalIcon size={14} className="text-primary" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50">IGNITIA_OS_TERMINAL -- 80x24</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="w-6 h-6 flex items-center justify-center hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                >
                  {isMaximized ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 flex items-center justify-center hover:bg-red-500/20 text-white/40 hover:text-red-500 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Terminal Content */}
            <div 
              ref={scrollRef}
              className="flex-grow p-6 font-mono text-[11px] md:text-xs overflow-y-auto custom-scrollbar"
            >
              <div className="space-y-1.5 mb-4">
                {history.map((line, i) => (
                  <div key={i} className={`break-words leading-relaxed ${
                    line.type === 'input' ? 'text-primary' : 
                    line.type === 'error' ? 'text-red-500' : 'text-white/70'
                  }`}>
                    {line.type === 'input' ? (
                      <span className="flex gap-2">
                        <span className="text-secondary">guest@ignitia:~$</span>
                        <span>{line.content}</span>
                      </span>
                    ) : (
                      <span>{line.content}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                <span className="text-secondary shrink-0">guest@ignitia:~$</span>
                <input
                  autoFocus
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow bg-transparent outline-none border-none p-0 text-primary caret-primary"
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>

            {/* Terminal Footer */}
            <div className="px-4 py-1.5 border-t border-white/5 bg-white/5 flex justify-between items-center text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">
               <span>System: ONLINE</span>
               <span className="animate-pulse">_</span>
               <span>CPU: 0.04%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
