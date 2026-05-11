'use client';

import { useEffect } from 'react';
import { DottedSurface } from "@/components/ui/dotted-surface";
import Particles from "@/components/Particles/Particles";
import { Mail, MessageSquare, ShieldCheck, Github, Linkedin, Twitter, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Link from 'next/link';

export default function ContactPage() {
  useEffect(() => {
    // Dynamically load Visme script
    const script = document.createElement('script');
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-primary/30 selection:text-primary">
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#00f2ff"]}
          particleCount={200}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <DottedSurface className="opacity-30" />

      {/* Decorative Typography */}
      <h1 className="fixed left-10 bottom-10 text-[10vw] font-black opacity-[0.03] uppercase leading-none pointer-events-none select-none">
        Connect
      </h1>

      {/* Content Layer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-primary transition-colors mb-4 group">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Return to base
            </Link>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
              GET IN <br/><span className="text-primary neon-glow-cyan">TOUCH</span>
            </h1>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold mb-1">Status</p>
            <p className="font-mono text-sm">ENCRYPTED CHANNEL</p>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glassmorphism p-8 rounded-sm border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center mb-6">
                  <Mail size={18} className="text-primary" />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-2">Direct Terminal</h3>
                <p className="text-lg font-mono tracking-tight break-all">karanpareek174@gmail.com</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glassmorphism p-8 rounded-sm border-white/5 hover:border-secondary/20 transition-all"
              >
                <div className="w-10 h-10 border border-secondary/20 flex items-center justify-center mb-6">
                  <MessageSquare size={18} className="text-secondary" />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-2">Instant Sync</h3>
                <p className="text-lg font-mono tracking-tight">+91 8101482088</p>
              </motion.div>
            </div>

            <div className="flex gap-6 pt-6 px-4">
              <Link href="https://github.com/karanpareek" target="_blank" className="text-white/40 hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
              <Link href="https://linkedin.com/in/karanpareek" target="_blank" className="text-white/40 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-white/40 hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Right Side: Visme Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 glassmorphism border-white/10 rounded-sm overflow-hidden min-h-[600px] flex flex-col"
          >
            <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Transmission Interface</span>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse delay-75"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse delay-150"></div>
              </div>
            </div>
            <div className="p-1 flex-grow relative bg-black/20">
              {/* Fallback Loader */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="text-[10px] font-mono animate-pulse uppercase tracking-[0.5em]">Establishing Connection...</div>
              </div>
              <div
                className="visme_d"
                data-title="Event Contact Form"
                data-url="q74vor1e-untitled-project?fullPage=true"
                data-domain="forms"
                data-full-page="true"
                data-min-height="100vh"
                data-form-id="178690"
              />
            </div>
          </motion.div>
        </div>

        {/* Footer Meta */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-[10px] uppercase tracking-[0.4em] text-white/30 font-mono">
          <div className="flex gap-12">
            <div>
              <span className="block mb-2">Availability</span>
              <span className="text-white">SELECTIVE_ONLY</span>
            </div>
            <div>
              <span className="block mb-2">Priority</span>
              <span className="text-white">HIGH_IMPACT</span>
            </div>
          </div>
          <div className="text-right">
             IGNITIA DIGITAL ARCHITECTURE 2026©
          </div>
        </div>
      </div>
    </main>
  );
}
