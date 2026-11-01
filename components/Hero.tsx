'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight, Terminal as TerminalIcon, Download } from 'lucide-react';
import AiAgentConsole from '@/components/AiAgentConsole';

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 pt-24 md:pt-32 pb-20 md:pb-28">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8 md:space-y-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {/* Minimal Status Chip - Only pulsing dot without text symbol */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="font-semibold tracking-wide">Open to Opportunities</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
              KARAN <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-200 to-cyan-500">
                PAREEK
              </span>
            </h1>

            {/* Tagline / Subhead */}
            <p className="text-white/60 text-sm md:text-base max-w-xl font-normal leading-relaxed mx-auto lg:mx-0">
              Full-stack engineer specializing in scalable <span className="text-white font-medium">MERN</span> architectures, high-performance <span className="text-white font-medium">Next.js</span> applications, and intelligent <span className="text-cyan-400 font-medium">autonomous AI agents</span>. Co-founder of Ignitia Digital.
            </p>
          </motion.div>

          {/* Modern Glassmorphism CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3.5 pt-3">
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-primary text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all rounded shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] w-full sm:w-auto active:scale-95 cursor-pointer"
            >
              <span>Initialize Contact</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-white/15 bg-white/[0.03] backdrop-blur-md hover:border-cyan-400/50 hover:bg-cyan-500/10 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all rounded shadow-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] w-full sm:w-auto active:scale-95 cursor-pointer"
            >
              <TerminalIcon size={14} className="text-cyan-400 opacity-80 group-hover:rotate-12 transition-transform" />
              <span>View Work</span>
            </Link>
            <a
              href="/resume.pdf"
              download="Karan_Pareek_Resume.pdf"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-white/15 bg-white/[0.03] backdrop-blur-md hover:border-emerald-400/50 hover:bg-emerald-500/10 text-white/90 hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-all rounded shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] w-full sm:w-auto active:scale-95 cursor-pointer"
            >
              <Download size={14} className="text-emerald-400 opacity-80 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: AI Agent Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-4 lg:mt-0"
        >
          <AiAgentConsole />
        </motion.div>
      </div>
    </section>
  );
}

