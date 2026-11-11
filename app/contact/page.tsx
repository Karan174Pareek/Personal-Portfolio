'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { DottedSurface } from "@/components/ui/dotted-surface";
import Particles from "@/components/Particles/Particles";
import Navbar from "@/components/Navbar";
import { Mail, MessageSquare, MapPin, Github, Linkedin, Instagram, ArrowLeft, ArrowUpRight, Send } from "lucide-react";

export default function ContactPage() {
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
      <div className="hidden md:block">
        <DottedSurface className="opacity-20" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-24">
        
        {/* Breadcrumb / Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio</span>
          </Link>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold block mb-4">Communication</span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              GET IN <br />
              <span className="text-cyan-400 neon-glow-cyan">TOUCH</span>
            </h1>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-mono font-bold mb-1">Status</p>
            <p className="font-mono text-sm text-emerald-400 flex items-center gap-1.5 md:justify-end font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              OPEN FOR WORK
            </p>
          </div>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <motion.a 
                href="mailto:karanpareek174@gmail.com"
                whileHover={{ scale: 1.01 }}
                className="glassmorphism p-6 md:p-8 rounded-2xl border-white/10 hover:border-cyan-400/40 transition-all block group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg border border-primary/20 bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <ArrowUpRight size={14} className="text-white/30 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-1">Direct Email</h3>
                <p className="text-base sm:text-lg font-mono tracking-tight break-all text-white/90 group-hover:text-cyan-400 transition-colors">
                  karanpareek174@gmail.com
                </p>
              </motion.a>

              <motion.a 
                href="https://wa.me/918101482088"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                className="glassmorphism p-6 md:p-8 rounded-2xl border-white/10 hover:border-cyan-400/40 transition-all block group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageSquare size={18} className="text-cyan-400" />
                  </div>
                  <ArrowUpRight size={14} className="text-white/30 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-1">Phone / WhatsApp</h3>
                <p className="text-base sm:text-lg font-mono tracking-tight text-white/90 group-hover:text-cyan-400 transition-colors">
                  +91 8101482088
                </p>
              </motion.a>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="glassmorphism p-6 md:p-8 rounded-2xl border-white/10 hover:border-cyan-400/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center mb-4">
                  <MapPin size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-1">Location</h3>
                <p className="text-base sm:text-lg font-mono tracking-tight text-white/90">
                  Siliguri, West Bengal, India
                </p>
              </motion.div>
            </div>

            {/* Social Footprints */}
            <div className="glassmorphism p-5 rounded-2xl border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Connect</span>
              <div className="flex gap-4">
                <Link 
                  href="https://github.com/Karan174Pareek" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/karanpareek" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </Link>
                <Link 
                  href="https://www.instagram.com/karanpareek.xd/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Responsive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 glassmorphism border-white/10 rounded-2xl overflow-hidden min-h-[620px] flex flex-col shadow-2xl"
          >
            {/* Header bar of the card */}
            <div className="bg-white/[0.03] px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-bold text-white/80">
                  Direct Contact Form
                </span>
              </div>
              <a 
                href="mailto:karanpareek174@gmail.com"
                className="hidden sm:inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-cyan-400 hover:text-white transition-colors"
              >
                <span>Or mail directly</span>
                <Send size={11} />
              </a>
            </div>

            {/* Seamless Embed Container */}
            <div className="flex-grow w-full h-full min-h-[580px] relative bg-black/40">
              <iframe
                src="https://forms.visme.co/formsPlayer/_embed/q74vor1e-untitled-project?embedIframeId=1"
                title="Event Contact Form"
                className="w-full h-full min-h-[580px] border-0"
                loading="lazy"
                allow="camera; microphone; autoplay; encrypted-media"
              />
            </div>
          </motion.div>
        </div>

        {/* Footer info */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
          <p>Karan Pareek · Full-Stack &amp; AI Systems Engineer</p>
          <p>Siliguri, West Bengal, India</p>
        </div>

      </div>
    </main>
  );
}
