'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Eye, X, FileDown, ShieldCheck, Briefcase, GraduationCap, Code2, Trophy, FolderGit2, ExternalLink } from 'lucide-react';

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-black/40 overflow-hidden">
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
              <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold block mb-4">Curriculum Vitae</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
                EXPERIENCE &amp; <span className="text-cyan-400 neon-glow-cyan">RESUME</span>
              </h2>
            </div>
            
            <p className="text-white/60 leading-relaxed max-w-lg">
              A comprehensive breakdown of my engineering career, production projects, system architectures, and educational background.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/resume.pdf" 
                download="Karan_Pareek_Resume.pdf"
                className="inline-flex items-center justify-center gap-3 group px-8 py-4 bg-primary text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-white transition-all rounded-md shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Download Resume</span> <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <button 
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center justify-center gap-3 group px-8 py-4 border border-white/10 hover:border-primary/40 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all rounded-md active:scale-95 cursor-pointer glassmorphism"
              >
                <span>Preview Details</span> <Eye size={14} className="opacity-60 text-primary" />
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
               <ShieldCheck size={12} className="text-primary" />
               <span>CURRICULUM VITAE // UPDATED 2026</span>
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Right: Code-Driven Live Identity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glassmorphism p-8 rounded-2xl border-white/10 relative overflow-hidden group">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
               
               <div className="relative z-10 space-y-7">
                  <div className="flex justify-between items-start">
                     <div className="space-y-1.5">
                        <div className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-semibold">
                          Engineering Credentials
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tight text-white">Karan Pareek</h3>
                        <p className="text-xs font-mono text-white/50">Full-Stack MERN &amp; AI Systems Engineer</p>
                     </div>
                     <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                     <div className="flex gap-4 items-center">
                        <div className="w-1 h-8 bg-cyan-400 rounded-full"></div>
                        <div>
                           <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Leadership Post</p>
                           <p className="text-xs font-bold uppercase text-white">Co-Founder @ Ignitia Digital</p>
                        </div>
                     </div>
                     <div className="flex gap-4 items-center">
                        <div className="w-1 h-8 bg-purple-400 rounded-full"></div>
                        <div>
                           <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Academic Degree</p>
                           <p className="text-xs font-bold uppercase text-white/70">BCA @ Inspiria Knowledge Campus (7.5 CGPA)</p>
                        </div>
                     </div>
                  </div>

                  <div className="pt-4 space-y-3">
                     <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Core Technical Capabilities</p>
                     <div className="flex flex-wrap gap-2">
                        {['Next.js 15', 'TypeScript', 'MERN Stack', 'AI Agents & RAG', 'Kubernetes', 'Docker', 'MCP'].map(tag => (
                           <span key={tag} className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/70">
                             {tag}
                           </span>
                        ))}
                     </div>
                  </div>

                  <button 
                     onClick={() => setIsPreviewOpen(true)}
                     className="w-full mt-4 py-3.5 border border-primary/30 bg-primary/10 text-primary text-[10px] font-mono font-bold uppercase tracking-[0.25em] hover:bg-primary hover:text-black transition-all rounded-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                     <Eye size={13} />
                     <span>Preview Full Resume</span>
                  </button>
               </div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-5xl h-[90vh] glassmorphism border-white/15 flex flex-col overflow-hidden rounded-2xl shadow-2xl"
            >
              {/* Modal Top Header */}
              <div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary">
                    <FileDown size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold uppercase tracking-tight text-white">Karan_Pareek_Resume.pdf</h3>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Official Curriculum Vitae // 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download="Karan_Pareek_Resume.pdf"
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all"
                  >
                    <Download size={13} />
                    <span>Download</span>
                  </a>
                  <button 
                    onClick={() => setIsPreviewOpen(false)}
                    aria-label="Close Preview"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white/70 hover:text-white cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Scrollable Resume Content */}
              <div className="flex-grow overflow-y-auto p-6 sm:p-8 md:p-12 space-y-10 bg-[#070b13]/80">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-white/10 pb-8">
                   <div className="space-y-2">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                        Karan Pareek
                      </h1>
                      <p className="text-cyan-400 font-mono tracking-widest text-xs uppercase font-bold">
                        Full-Stack MERN &amp; AI Systems Engineer
                      </p>
                      <p className="text-xs text-white/50 max-w-md">
                        Specializing in high-concurrency MERN applications, Next.js web architectures, autonomous LLM agents, and Kubernetes DevOps.
                      </p>
                   </div>
                   <div className="text-left md:text-right space-y-1.5 text-xs font-mono text-white/60">
                      <p className="text-white/90">karanpareek174@gmail.com</p>
                      <p>+91 8101482088</p>
                      <p>Siliguri, West Bengal, India</p>
                      <div className="pt-2 flex flex-wrap gap-3 md:justify-end text-cyan-400">
                        <a href="https://github.com/Karan174Pareek" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                          github.com/Karan174Pareek <ExternalLink size={10} />
                        </a>
                        <a href="https://www.linkedin.com/in/karanpareek" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                          linkedin.com/in/karanpareek <ExternalLink size={10} />
                        </a>
                      </div>
                   </div>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                   
                   {/* Left 2 Cols: Experience & Projects */}
                   <div className="lg:col-span-2 space-y-10">
                      
                      {/* Professional Experience */}
                      <section className="space-y-5">
                         <div className="flex items-center gap-2 border-b border-cyan-400/20 pb-2">
                           <Briefcase size={16} className="text-cyan-400" />
                           <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 font-mono">
                             Professional Experience
                           </h4>
                         </div>

                         <div className="space-y-6">
                            <div className="space-y-1.5">
                               <div className="flex flex-wrap justify-between items-baseline gap-2">
                                  <h5 className="font-bold text-white text-base">Co-Founder</h5>
                                  <span className="text-xs font-mono text-cyan-400/80">Nov 2025 – Present</span>
                               </div>
                               <p className="text-xs font-mono text-white/50">Ignitia Digital · Siliguri, India</p>
                               <p className="text-xs text-white/70 leading-relaxed mt-2">
                                  Delivered modern web and IT solutions across 6+ client websites, driving 3x organic traffic growth and 2x conversion rate gains through high-performance Next.js architectures, technical SEO, and animated interactive UI.
                               </p>
                            </div>

                            <div className="space-y-1.5">
                               <div className="flex flex-wrap justify-between items-baseline gap-2">
                                  <h5 className="font-bold text-white text-base">Web Developer with SEO Intern</h5>
                                  <span className="text-xs font-mono text-cyan-400/80">Apr 2025 – Jul 2025</span>
                               </div>
                               <p className="text-xs font-mono text-white/50">Blue Minch · Remote</p>
                               <p className="text-xs text-white/70 leading-relaxed mt-2">
                                  Engineered website performance improvements, UX enhancements, and search engine visibility through modern web development and SEO strategies.
                               </p>
                            </div>
                         </div>
                      </section>

                      {/* Featured Projects */}
                      <section className="space-y-5">
                         <div className="flex items-center gap-2 border-b border-cyan-400/20 pb-2">
                           <FolderGit2 size={16} className="text-cyan-400" />
                           <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 font-mono">
                             Key Production Projects
                           </h4>
                         </div>

                         <div className="space-y-5">
                            <div className="space-y-1">
                               <div className="flex justify-between items-baseline">
                                  <h5 className="font-bold text-white text-sm">GitStack</h5>
                                  <span className="text-[10px] font-mono text-white/40">FULL STACK / MERN</span>
                               </div>
                               <p className="text-xs text-white/70 leading-relaxed">
                                  Self-hosted MERN GitHub clone with a real bare Git storage engine and Smart HTTP protocol support for CLI clone/push/pull; features Issues, PRs with merge-conflict detection and auto-merge, code review, and Docker deployment.
                               </p>
                            </div>

                            <div className="space-y-1">
                               <div className="flex justify-between items-baseline">
                                  <h5 className="font-bold text-white text-sm">ReconcileAI</h5>
                                  <span className="text-[10px] font-mono text-white/40">AI FINANCE / MERN</span>
                               </div>
                               <p className="text-xs text-white/70 leading-relaxed">
                                  AI-driven finance reconciliation controller (React, Node.js, MongoDB, Claude + Gemini fallback) built for Razorpay AI Buildathon 2026; decomposes bulk payment settlements into GST/fee breakdowns via a 3-tier matching engine.
                               </p>
                            </div>

                            <div className="space-y-1">
                               <div className="flex justify-between items-baseline">
                                  <h5 className="font-bold text-white text-sm">ReviewPilot</h5>
                                  <span className="text-[10px] font-mono text-white/40">GITHUB APP / AI</span>
                               </div>
                               <p className="text-xs text-white/70 leading-relaxed">
                                  GitHub App for automated pull-request reviews using Claude API; posts inline review comments on PRs with developer analytics for code quality tracking.
                               </p>
                            </div>

                            <div className="space-y-1">
                               <div className="flex justify-between items-baseline">
                                  <h5 className="font-bold text-white text-sm">LiveOps</h5>
                                  <span className="text-[10px] font-mono text-white/40">REAL-TIME / MERN</span>
                               </div>
                               <p className="text-xs text-white/70 leading-relaxed">
                                  Real-time team collaboration dashboard with authenticated WebSocket rooms, JWT auth with refresh token rotation, role-based access control (RBAC), and multi-tenant data isolation.
                               </p>
                            </div>

                            <div className="space-y-1">
                               <div className="flex justify-between items-baseline">
                                  <h5 className="font-bold text-white text-sm">Mini Heroku</h5>
                                  <span className="text-[10px] font-mono text-white/40">DEVOPS / KUBERNETES</span>
                               </div>
                               <p className="text-xs text-white/70 leading-relaxed">
                                  Push-to-deploy mini PaaS on Kubernetes (k3d). Builds apps from source with Kaniko and Buildpacks, pushes to a local registry, and deploys them automatically with verified builder/deployer stages.
                               </p>
                            </div>

                            <div className="space-y-1">
                               <div className="flex justify-between items-baseline">
                                  <h5 className="font-bold text-white text-sm">Conduit</h5>
                                  <span className="text-[10px] font-mono text-white/40">AI / KUBERNETES</span>
                               </div>
                               <p className="text-xs text-white/70 leading-relaxed">
                                  Model Context Protocol (MCP) Gateway on Kubernetes: custom WooCommerce MCP server, API gateway dashboard, and AI chat agent deployed via Helm charts.
                               </p>
                            </div>
                         </div>
                      </section>
                   </div>

                   {/* Right Column: Skills, Education, Achievements */}
                   <div className="space-y-10">
                      
                      {/* Technical Skills */}
                      <section className="space-y-4">
                         <div className="flex items-center gap-2 border-b border-cyan-400/20 pb-2">
                           <Code2 size={16} className="text-cyan-400" />
                           <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 font-mono">
                             Technical Stack
                           </h4>
                         </div>

                         <div className="space-y-3">
                            <div>
                               <p className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider mb-1.5 font-bold">Languages</p>
                               <p className="text-xs text-white/70 font-mono">JavaScript (ES6+), TypeScript, Python (FastAPI), Java, SQL, HTML5, CSS3</p>
                            </div>
                            <div>
                               <p className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider mb-1.5 font-bold">Frameworks &amp; Web</p>
                               <p className="text-xs text-white/70 font-mono">Next.js 15, React 19, Node.js, Express.js, Socket.io, Tailwind CSS</p>
                            </div>
                            <div>
                               <p className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider mb-1.5 font-bold">AI Systems</p>
                               <p className="text-xs text-white/70 font-mono">Claude API, Autonomous AI Agents, RAG Pipelines, MCP, Vector Embeddings</p>
                            </div>
                            <div>
                               <p className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider mb-1.5 font-bold">DevOps &amp; Cloud</p>
                               <p className="text-xs text-white/70 font-mono">Docker, Kubernetes (k3d), Helm, Kaniko, Buildpacks, Git, GitHub Actions, Linux</p>
                            </div>
                            <div>
                               <p className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider mb-1.5 font-bold">Databases &amp; APIs</p>
                               <p className="text-xs text-white/70 font-mono">MongoDB, MySQL, Redis, REST APIs, Postman, GraphQL</p>
                            </div>
                         </div>
                      </section>

                      {/* Education */}
                      <section className="space-y-4">
                         <div className="flex items-center gap-2 border-b border-cyan-400/20 pb-2">
                           <GraduationCap size={16} className="text-cyan-400" />
                           <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 font-mono">
                             Education
                           </h4>
                         </div>

                         <div className="space-y-4">
                            <div className="space-y-1">
                               <h5 className="font-bold text-white text-xs">BCA (Bachelor of Computer Applications)</h5>
                               <p className="text-[11px] text-white/60">Inspiria Knowledge Campus · 2023 – 2027</p>
                               <p className="text-[10px] font-mono text-emerald-400">Current CGPA: 7.5</p>
                            </div>
                            <div className="space-y-1">
                               <h5 className="font-bold text-white text-xs">Class XII (ISC)</h5>
                               <p className="text-[11px] text-white/60">ST. Xavier&apos;s School, Siliguri · 2022 – 2023</p>
                               <p className="text-[10px] font-mono text-white/40">Score: 76%</p>
                            </div>
                            <div className="space-y-1">
                               <h5 className="font-bold text-white text-xs">Class X (ICSE)</h5>
                               <p className="text-[11px] text-white/60">ST. Xavier&apos;s School, Siliguri · 2020 – 2021</p>
                               <p className="text-[10px] font-mono text-white/40">Score: 77.8%</p>
                            </div>
                         </div>
                      </section>

                      {/* Honors & Certifications */}
                      <section className="space-y-4">
                         <div className="flex items-center gap-2 border-b border-cyan-400/20 pb-2">
                           <Trophy size={16} className="text-cyan-400" />
                           <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 font-mono">
                             Honors &amp; Certifications
                           </h4>
                         </div>

                         <div className="space-y-3 text-xs">
                            <div>
                               <p className="font-bold text-white">Steam-Shed Assistant</p>
                               <p className="text-[10px] font-mono text-white/40">GDG Siliguri "Code for Communities" Hackathon (2026)</p>
                            </div>
                            <div>
                               <p className="font-bold text-white">Razorpay AI Buildathon 2026</p>
                               <p className="text-[10px] font-mono text-white/40">ReconcileAI · AI Finance Controller Track</p>
                            </div>
                            <div>
                               <p className="font-bold text-white">HackerRank Certified Software Engineer</p>
                               <p className="text-[10px] font-mono text-white/40">Standardized Software Engineering Skills Verification</p>
                            </div>
                            <div>
                               <p className="font-bold text-white">Foundations of AI for Software Development</p>
                               <p className="text-[10px] font-mono text-white/40">LLMs, RAG Architecture, and Agent Workflows</p>
                            </div>
                         </div>
                      </section>

                   </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 md:p-6 border-t border-white/10 bg-white/[0.02] flex justify-between items-center">
                 <span className="text-[10px] font-mono text-white/40 hidden sm:inline">
                   Karan Pareek — Curriculum Vitae (2026)
                 </span>
                 <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                   <a
                     href="/resume.pdf"
                     download="Karan_Pareek_Resume.pdf"
                     className="px-6 py-2.5 bg-primary text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-white transition-all rounded-md"
                   >
                     Download PDF
                   </a>
                   <button 
                    onClick={() => setIsPreviewOpen(false)}
                    className="px-6 py-2.5 border border-white/15 text-white/80 hover:text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-white/10 transition-colors rounded-md cursor-pointer"
                   >
                    Close
                   </button>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
