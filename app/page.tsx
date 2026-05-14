'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { DottedSurface } from '@/components/ui/dotted-surface';
import Particles from '@/components/Particles/Particles';
import GooeyNav from '@/components/GooeyNav/GooeyNav';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import MagicBento from '@/components/MagicBento/MagicBento';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import SocialProfiles from '@/components/SocialProfiles';
import Services from '@/components/Services';
import ResumeSection from '@/components/ResumeSection';
import Terminal from '@/components/Terminal';
import { Terminal as TerminalIcon, Command, Zap, Search, Globe, Shield, ChevronRight, Mail, MessageSquare, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { KaranAI } from '@/components/karan-ai';

export default function PortfolioDashboard() {
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
    <main className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#00f2ff"]}
          particleCount={250}
          particleSpread={11}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <DottedSurface className="opacity-20" />
      


      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-4 md:py-6 border-b border-white/10 glassmorphism bg-black/50 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-primary rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary animate-pulse"></div>
            </div>
            <span className="text-sm md:text-xl font-bold tracking-tighter uppercase">
              Karan <span className="text-primary">Pareek</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-only">
          <GooeyNav
            items={[
              { label: "About", href: "#about" },
              { label: "Stack", href: "#architecture" },
              { label: "Works", href: "#projects" },
              { label: "Services", href: "#services" },
              { label: "Resume", href: "#resume" },
              { label: "Lab", href: "#lab" },
              { label: "Contact", href: "#contact" },
            ]}
          />
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="mobile-only">
          <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-primary">
            <Link href="#projects">Works</Link>
            <Link href="#services">Services</Link>
            <Link href="#resume">Resume</Link>
            <Link href="#contact">Connect</Link>
          </div>
        </div>
      </nav>

      {/* 1st Section: Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8 md:space-y-12 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <span className="text-[10px] uppercase tracking-[0.8em] text-primary font-bold block mb-2">Authenticated User</span>
              <h1 className="text-4xl sm:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-6">
                KARAN <br/>
                <span className="text-primary neon-glow-cyan">PAREEK</span>
              </h1>
              <p className="text-white/40 text-xs md:text-sm max-w-md font-medium leading-relaxed mx-auto lg:mx-0">
                MERN Stack Programmer specializing in building scalable digital ecosystems, high-performance web applications, and SEO-optimized interfaces.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-4">
              <div className="space-y-1">
                <span className="text-[8px] uppercase tracking-widest text-white/30">Primary Stack</span>
                <p className="text-[10px] font-mono text-secondary">MERN STACK / NEXT.JS</p>
              </div>
              <div className="space-y-1">
                <span className="text-[8px] uppercase tracking-widest text-white/30">Current Status</span>
                <p className="text-[10px] font-mono text-green-400 font-bold">✓ READY_FOR_DEPLOYMENT</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-4 group px-8 py-4 bg-primary text-black text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm w-full sm:w-auto"
              >
                Initialize Contact <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#projects" 
                className="inline-flex items-center justify-center gap-4 group px-8 py-4 border border-white/10 hover:border-primary/40 text-white text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm w-full sm:w-auto"
              >
                View Manifest <TerminalIcon size={14} className="opacity-40" />
              </Link>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="scale-75 sm:scale-90 lg:scale-100">
              <ProfileCard
                name="Karan Pareek"
                title="Programmer"
                handle="Karan174Pareek"
                status="Online"
                contactText="Send Message"
                avatarUrl="/profile.jpg"
                iconUrl="/pattern.png"
                showUserInfo={true}
                enableTilt={true}
                behindGlowEnabled={true}
                innerGradient="linear-gradient(145deg, rgba(0, 240, 255, 0.2) 0%, rgba(188, 0, 255, 0.2) 100%)"
                behindGlowColor="rgba(0, 240, 255, 0.6)"
                onContactClick={() => window.open('https://wa.me/918101482088', '_blank')}
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20"
        >
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold rotate-90 mb-8">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* 2nd Section: About Me */}
      <AboutMe />

      {/* 3rd Section: My Tech Stack */}
      <section id="architecture" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold">Skills & Tools</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">MY TECH <br/> <span className="text-white/20 border-text-stroke">STACK</span></h2>
            </div>
            <p className="text-white/40 text-sm max-w-sm mb-2 font-medium">
              A comprehensive toolkit for building high-performance, scalable, and visually stunning digital products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Languages", desc: "HTML, CSS, JavaScript, Java, C, SQL, React, Node.js, Express, MongoDB." },
              { title: "Web Development", desc: "MERN Stack, Frontend & Backend Development, Responsive Design." },
              { title: "SEO & Tools", desc: "Onpage & Offpage SEO, Wordpress, Postman, Semrush, Google Analytics." },
              { title: "AI Tools", desc: "AI Studio, Gemini, Claude, Antigravity, Cursor, Chatgpt, GitHub Copilot." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism p-8 hover:border-primary/20 transition-all group"
              >
                <div className="w-8 h-8 border border-white/10 flex items-center justify-center mb-6 text-[10px] font-bold text-white/20 group-hover:text-primary transition-colors">0{i+1}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4th Section: Featured Works */}
      <section id="projects" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-secondary font-bold block mb-4">Portfolio</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">FEATURED <span className="text-secondary neon-glow-purple">WORKS</span></h2>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <MagicBento 
            items={[
              {
                title: 'Fittronics Global',
                description: 'High-performance e-commerce architecture with real-time inventory sync and modular checkout systems.',
                label: 'E-Commerce / Scalability'
              },
              {
                title: 'International Immigration',
                description: 'Professional landing page for immigration services with focus on conversion and UX.',
                label: 'Landing Page / UX'
              },
              {
                title: 'Ignitia Digital',
                description: 'Modern landing page for digital agency showcasing services and portfolio.',
                label: 'Agency / UI'
              },
              {
                title: 'Woven Wonders',
                description: 'E-commerce platform for handcrafted products with integrated payment solutions.',
                label: 'E-Commerce / Art'
              },
              {
                title: 'Weather App',
                description: 'Real-time weather tracking application with location-based forecasts.',
                label: 'Tool / API'
              },
              {
                title: 'Chat App',
                description: 'Real-time messaging application with persistent data and user authentication.',
                label: 'Communication / Socket'
              }
            ]}
            glowColor="0, 240, 255"
            enableTilt={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
          />
        </div>
      </section>

      {/* 5th Section: Experience And Education */}
      <Experience />

      {/* 6th Section: Social Profiles */}
      <SocialProfiles />

      {/* 7th Section: Services I Provide */}
      <Services />

      {/* 8th Section: Resume Section */}
      <ResumeSection />

      {/* Terminal Functional Section (Replacing Lab for now or as a separate highlight) */}
      <section id="lab" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-secondary/5 text-center">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold block">R&D Division</span>
            <h2 className="text-5xl md:text-7xl font-bold italic">THE <br/><span className="text-primary">LAB</span></h2>
            <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
              Access the core system terminal to interact with the underlying architecture. Execute commands, explore hidden files, and identify system metrics.
            </p>
          </div>
          
          <Terminal />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-12">
             <div className="aspect-square glassmorphism border-primary/20 flex flex-col items-center justify-center font-mono text-[10px] text-primary gap-4 group hover:border-primary transition-all">
                <span className="opacity-40 uppercase">Memory</span>
                <span className="text-lg font-bold">16GB</span>
             </div>
             <div className="aspect-square glassmorphism flex flex-col items-center justify-center font-mono text-[10px] opacity-20 gap-4">
                <span className="uppercase">Uptime</span>
                <span className="text-lg font-bold">99.9%</span>
             </div>
             <div className="aspect-square glassmorphism flex flex-col items-center justify-center font-mono text-[10px] opacity-20 gap-4">
                <span className="uppercase">Network</span>
                <span className="text-lg font-bold">1GBPS</span>
             </div>
             <div className="aspect-square glassmorphism border-secondary/20 flex flex-col items-center justify-center font-mono text-[10px] text-secondary gap-4 group hover:border-secondary transition-all">
                <span className="opacity-40 uppercase">Latency</span>
                <span className="text-lg font-bold">14MS</span>
             </div>
          </div>
        </div>
      </section>

      {/* 9th Section: Contact Section */}
      <section id="contact" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold">Phase 03</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85]">
                GET IN <br/><span className="text-primary neon-glow-cyan">TOUCH</span>
              </h2>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold mb-1">Status</p>
              <p className="font-mono text-sm">ENCRYPTED CHANNEL</p>
            </div>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-12">
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
                <Link href="https://github.com/Karan174Pareek" target="_blank" className="text-white/40 hover:text-primary transition-colors">
                  <Github size={20} />
                </Link>
                <Link href="https://www.linkedin.com/in/karanpareek" target="_blank" className="text-white/40 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link href="https://www.instagram.com/karanpareek.xd/" target="_blank" className="text-white/40 hover:text-primary transition-colors">
                  <Instagram size={20} />
                </Link>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
        </div>
      </section>

      {/* Bottom Footer Meta */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 px-6 md:px-10 py-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <div className="text-[10px] font-mono leading-tight">
            <span className="block opacity-40 uppercase mb-1">Architecture</span>
            <span className="block">40.7128° N / 74.0060° W</span>
          </div>
          <div className="text-[10px] font-mono leading-tight hidden sm:block">
            <span className="block opacity-40 uppercase mb-1">Status</span>
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              KARAN ONLINE
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-6 order-last md:order-none">
           <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/10"></div>
           <span className="text-[10px] uppercase tracking-[0.5em] opacity-30 whitespace-nowrap">Karan Pareek © 2026</span>
        </div>

        <div className="flex gap-4">
           <Link href="https://github.com/Karan174Pareek" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer">
             <Command size={14} />
           </Link>
           <Link href="/contact" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all cursor-pointer">
             <Zap size={14} />
           </Link>
        </div>
      </footer>

      {/* AI Assistant Toggle */}
      <KaranAI />
    </main>
  );
}
