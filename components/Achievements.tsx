'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Train, Sparkles, FileCode2, Award } from 'lucide-react';

interface AchievementItem {
  id: string;
  title: string;
  category: string;
  issuer: string;
  date: string;
  summary: string;
  badgeText: string;
  icon: React.ReactNode;
  tags: string[];
}

const achievements: AchievementItem[] = [
  {
    id: 'steam-shed',
    title: 'Steam-Shed Assistant',
    category: 'Hackathon Finalist / Community Award',
    issuer: 'GDG Siliguri (Code for Communities, DHR Edition)',
    date: '2026',
    summary:
      'Engineered and demoed a 100% offline, on-device local RAG assistant for Darjeeling Himalayan Railway (DHR) locomotive and rolling-stock maintenance documentation, built solo under strict latency & resource constraints.',
    badgeText: 'HACKATHON BUILD',
    icon: <Train className="text-primary" size={22} />,
    tags: ['Offline RAG', 'On-Device AI', 'GDG Siliguri', 'DHR UNESCO Heritage'],
  },
  {
    id: 'razorpay-buildathon',
    title: 'ReconcileAI',
    category: 'AI Finance Controller Track',
    issuer: 'Razorpay AI Buildathon 2026',
    date: '2026',
    summary:
      'Architected an AI-driven finance controller and reconciliation engine that decomposes bulk payment settlements into GST/fee breakdowns with a 3-tier matching engine, human-in-the-loop approvals, and audit trails.',
    badgeText: 'FINANCE CONTROLLER',
    icon: <Sparkles className="text-secondary" size={22} />,
    tags: ['Razorpay AI', 'Claude + Gemini', 'Reconciliation', 'MERN Stack'],
  },
  {
    id: 'hackerrank-swe',
    title: 'Software Engineer Certificate',
    category: 'Skill Verification',
    issuer: 'HackerRank',
    date: 'Certified',
    summary:
      'Standardized skill assessment verifying core competencies in data structures, algorithms, problem solving, SQL databases, and full-stack software development workflows.',
    badgeText: 'VERIFIED CREDENTIAL',
    icon: <FileCode2 className="text-primary" size={22} />,
    tags: ['Data Structures', 'Algorithms', 'SQL', 'Software Architecture'],
  },
  {
    id: 'ai-software-foundations',
    title: 'Foundations of AI for Software Development',
    category: 'Professional Certification',
    issuer: 'Industry Verified Certificate',
    date: 'Certified',
    summary:
      'Rigorous certification covering prompt engineering, LLM integration architectures, agent workflows, function calling, vector embeddings, and building production-grade AI-assisted applications.',
    badgeText: 'AI SPEC VALIDATION',
    icon: <Award className="text-secondary" size={22} />,
    tags: ['LLMs & RAG', 'Prompt Architecture', 'Agent Loops', 'Production AI'],
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-black/40"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold block mb-4">
              Honors &amp; Certifications
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
              KEY <span className="text-cyan-400 neon-glow-cyan">ACHIEVEMENTS</span>
            </h2>
          </div>
          <div className="h-px flex-grow mx-12 bg-gradient-to-r from-transparent via-white/5 to-transparent hidden lg:block"></div>
          <p className="text-white/40 text-sm max-w-sm mb-2 font-medium">
            Recognitions, hackathon podium builds, and verified technical credentials in full-stack and AI systems.
          </p>
        </div>

        {/* 2x2 Achievement Grid matching site's glassmorphism style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glassmorphism p-8 hover:border-primary/20 transition-all group rounded-sm flex flex-col justify-between"
            >
              <div>
                {/* Header Meta: Counter + Badge + Date */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/20 group-hover:text-primary transition-colors">
                    0{i + 1}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary/80 px-2 py-0.5 rounded-sm border border-primary/20 bg-primary/5">
                      {item.badgeText}
                    </span>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-primary/40 transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1 uppercase group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-white/40 uppercase tracking-wider">
                      {item.issuer}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              {/* Tags Footer */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-sm bg-white/[0.03] border border-white/5 text-white/50 group-hover:text-white/70 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
