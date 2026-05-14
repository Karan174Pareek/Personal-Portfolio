'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Target, Cpu } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-black overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-[-5%] text-[15vw] font-black text-white/[0.02] select-none pointer-events-none uppercase leading-none italic">
        IDENTIFICATION
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Immersive Profile Image with "Scanning" Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden border border-white/10 rounded-sm bg-zinc-900/50">
              {/* Scanning Line Animation */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-primary/50 shadow-[0_0_15px_#00f0ff] z-20 pointer-events-none"
              ></motion.div>

              <img 
                src="/profile.jpg" 
                alt="Karan Pareek" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100 scale-105 group-hover:scale-100"
              />

              {/* Technical Overlays */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                 <div className="px-3 py-1 bg-primary/10 border border-primary/20 backdrop-blur-md rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-primary">Biometric_Verified</span>
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                 <div className="flex justify-between items-end">
                    <div>
                       <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mb-1">Entry ID</p>
                       <h4 className="text-xl font-bold tracking-tighter uppercase">KP_PRG_001</h4>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mb-1">Status</p>
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest animate-pulse">Active_Node</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-primary"></span>
                <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold">The Profile</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter">
                ENGINEERING <br/><span className="text-white/20 border-text-stroke">EXCELLENCE</span>
              </h2>
            </div>

            <div className="space-y-6 text-white/60 leading-relaxed font-medium text-sm md:text-base">
              <p>
                I am <span className="text-primary">Karan Pareek</span>, a motivated Programmer and Co-Founder. 
                My approach to development is rooted in precision, scalability, and high-performance execution.
              </p>
              <p>
                Specializing in the <span className="text-white font-bold">MERN Stack</span>, I bridge the gap 
                between complex backend logic and user-centric frontend experiences. I believe that every 
                line of code should serve a purpose—building digital ecosystems that are both impactful 
                and efficient.
              </p>
            </div>

            {/* Core Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { icon: <Cpu size={16} />, label: "Core Foundation", val: "MERN / JAVA / C" },
                 { icon: <Zap size={16} />, label: "Optimization", val: "SEO / PERFORMANCE" },
                 { icon: <Shield size={16} />, label: "Security", val: "RBAC / ENCRYPTION" },
                 { icon: <Target size={16} />, label: "Objective", val: "SCALABLE SYSTEMS" }
               ].map((stat, i) => (
                 <div key={i} className="glassmorphism p-5 flex items-center gap-5 group hover:border-primary/40 transition-all border-white/5">
                    <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white/30 group-hover:text-primary transition-colors">
                       {stat.icon}
                    </div>
                    <div>
                       <p className="text-[8px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">{stat.label}</p>
                       <p className="text-[10px] font-mono text-white/70 group-hover:text-white transition-colors">{stat.val}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-8">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tighter uppercase">20+</span>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-bold">Projects Built</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tighter uppercase">99.9%</span>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-bold">Uptime Delivery</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tighter uppercase">∞</span>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-bold">Learning Loop</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
