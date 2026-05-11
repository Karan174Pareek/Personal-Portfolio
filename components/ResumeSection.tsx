'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Eye, FileText, X, ChevronRight, FileDown, Terminal, ShieldCheck } from 'lucide-react';

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Info & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold">Documentation</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">TECHNICAL <br/><span className="text-white/20 border-text-stroke">MANIFEST</span></h2>
            </div>
            
            <p className="text-white/60 leading-relaxed max-w-lg">
              My professional background, technical expertise, and academic history distilled into a high-performance digital format. No images, just pure data and engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center justify-center gap-4 group px-8 py-4 bg-primary text-black text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm"
              >
                Download PDF <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <button 
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center justify-center gap-4 group px-8 py-4 border border-white/10 hover:border-primary/40 text-white text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm"
              >
                Expand Details <Eye size={14} className="opacity-40" />
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4 text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
               <ShieldCheck size={12} className="text-primary" />
               <span>SYSTEM_DATA_VERIFIED_2026</span>
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Right: Code-Driven Live Identity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glassmorphism p-8 rounded-sm border-white/10 bg-zinc-900/40 relative overflow-hidden group">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
               
               <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-start">
                     <div className="space-y-2">
                        <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">Resident_Programmer</div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter">Karan Pareek</h3>
                     </div>
                     <Terminal size={20} className="text-white/20" />
                  </div>

                  <div className="space-y-6 pt-4 border-t border-white/5">
                     <div className="flex gap-4">
                        <div className="w-px h-12 bg-primary/40"></div>
                        <div>
                           <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-1">Current_Post</p>
                           <p className="text-xs font-bold uppercase">Co-Founder @ Ignitia Digital</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-px h-12 bg-secondary/40"></div>
                        <div>
                           <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-1">Academic_Base</p>
                           <p className="text-xs font-bold uppercase text-white/70">BCA @ Inspiria Knowledge Campus</p>
                        </div>
                     </div>
                  </div>

                  <div className="pt-6 space-y-4">
                     <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Active_Skillsets</p>
                     <div className="flex flex-wrap gap-2">
                        {["MERN", "Java", "SQL", "SEO"].map(tag => (
                           <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-mono uppercase text-white/50">{tag}</span>
                        ))}
                        <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-[9px] font-mono uppercase text-primary">+8 Others</span>
                     </div>
                  </div>

                  <button 
                     onClick={() => setIsPreviewOpen(true)}
                     className="w-full mt-4 py-4 border border-white/5 bg-white/5 text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-primary hover:text-black transition-all"
                  >
                     Open Full Terminal View
                  </button>
               </div>

               {/* Decorative corner accent */}
               <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/20"></div>
               <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-secondary/20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full glassmorphism border-white/10 flex flex-col overflow-hidden"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-primary/20 flex items-center justify-center">
                    <FileDown size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight">Karan_Pareek_CV.pdf</h3>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Digital_Ver_2026</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsPreviewOpen(false)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 md:p-12 space-y-12 bg-black/40">
                <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-white/5 pb-8">
                   <div className="space-y-2">
                      <h1 className="text-4xl font-black uppercase tracking-tighter">Karan Pareek</h1>
                      <p className="text-primary font-mono tracking-[0.3em] text-xs uppercase">Programmer</p>
                   </div>
                   <div className="text-right space-y-1 text-xs font-mono text-white/40">
                      <p>karanpareek174@gmail.com</p>
                      <p>+91 8101482088</p>
                      <p>www.ignitia.digital</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   <div className="md:col-span-2 space-y-8">
                      <section className="space-y-4">
                         <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary border-b border-primary/20 pb-2">Experience</h4>
                         <div className="space-y-6">
                            <div className="space-y-1">
                               <div className="flex justify-between items-baseline">
                                  <h5 className="font-bold">Co-Founder</h5>
                                  <span className="text-[10px] font-mono text-white/40">Nov 2025 - Present</span>
                               </div>
                               <p className="text-xs text-white/60">Ignitia Digital</p>
                               <p className="text-[11px] text-white/40 leading-relaxed mt-2">
                                  Leading strategy, development, and delivery of modern web and IT solutions.
                               </p>
                            </div>
                            <div className="space-y-1">
                               <div className="flex justify-between items-baseline">
                                  <h5 className="font-bold">Web Developer With SEO Intern</h5>
                                  <span className="text-[10px] font-mono text-white/40">April 2025 - July 2025</span>
                               </div>
                               <p className="text-xs text-white/60">Blue Minch</p>
                               <p className="text-[11px] text-white/40 leading-relaxed mt-2">
                                  Improved website performance and search engine visibility through SEO strategies.
                               </p>
                            </div>
                         </div>
                      </section>

                      <section className="space-y-4 pt-4">
                         <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary border-b border-primary/20 pb-2">Education</h4>
                         <div className="space-y-6">
                            <div className="space-y-1">
                               <div className="flex justify-between items-baseline">
                                  <h5 className="font-bold">BCA (Computer Application)</h5>
                                  <span className="text-[10px] font-mono text-white/40">2023 - 2027</span>
                               </div>
                               <p className="text-xs text-white/60">Inspiria Knowledge Campus</p>
                               <p className="text-[10px] text-white/40">CGPA: 7.9</p>
                            </div>
                         </div>
                      </section>
                   </div>
                   <div className="space-y-8">
                      <section className="space-y-4">
                         <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary border-b border-secondary/20 pb-2">Core Skills</h4>
                         <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "JavaScript", "Java", "C", "SQL", "React", "Node.js", "Express", "MongoDB", "Wordpress", "SEO"].map(skill => (
                               <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] font-mono uppercase text-white/60">{skill}</span>
                            ))}
                         </div>
                      </section>
                   </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end">
                 <button 
                  onClick={() => setIsPreviewOpen(false)}
                  className="px-8 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
                 >
                  Close Terminal
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
