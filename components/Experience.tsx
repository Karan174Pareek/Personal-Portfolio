'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    company: "Ignitia Digital",
    role: "Co-Founder",
    period: "Nov 2025 - Present",
    desc: "Leading strategy, development, and delivery of modern web and IT solutions. Focused on project planning, web development, and client communication."
  },
  {
    company: "Blue Minch",
    role: "Web Developer With SEO Intern",
    period: "April 2025 - July 2025",
    desc: "Contributed to improving website performance, UX, and search engine visibility through development and SEO strategies."
  }
];

const education = [
  {
    school: "Inspiria Knowledge Campus, Siliguri",
    degree: "BCA (Bachelors of Computer Application)",
    period: "2023 - 2027",
    desc: "Current CGPA: 7.9. Focused on programming languages and development tools."
  },
  {
    school: "ST.Xavier's School, Siliguri",
    degree: "Class XII",
    period: "2022 - 2023",
    desc: "Completed with a score of 76%."
  },
  {
    school: "ST.Xavier's School, Siliguri",
    degree: "Class X",
    period: "2020 - 2021",
    desc: "Completed with a score of 77.8%."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-secondary font-bold">Timeline</span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase mt-4">Journey & <span className="text-secondary neon-glow-purple">Background</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-sm border border-primary/20 flex items-center justify-center bg-primary/5">
                <Briefcase size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter">Professional Experience</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-px before:bg-white/5">
              {experiences.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-0 top-1.5 w-12 h-12 rounded-full border border-white/10 bg-black flex items-center justify-center z-10 group-hover:border-primary transition-colors">
                    <div className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors"></div>
                  </div>
                  <div className="glassmorphism p-6 border-white/5 hover:border-primary/20 transition-all">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{exp.period}</span>
                    <h4 className="text-xl font-bold mt-1">{exp.role}</h4>
                    <p className="text-sm font-medium text-white/40 mb-3">{exp.company}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-sm border border-secondary/20 flex items-center justify-center bg-secondary/5">
                <GraduationCap size={20} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter">Education</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-px before:bg-white/5">
              {education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-0 top-1.5 w-12 h-12 rounded-full border border-white/10 bg-black flex items-center justify-center z-10 group-hover:border-secondary transition-colors">
                    <div className="w-2 h-2 bg-secondary/40 group-hover:bg-secondary transition-colors"></div>
                  </div>
                  <div className="glassmorphism p-6 border-white/5 hover:border-secondary/20 transition-all">
                    <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">{edu.period}</span>
                    <h4 className="text-xl font-bold mt-1">{edu.degree}</h4>
                    <p className="text-sm font-medium text-white/40 mb-3">{edu.school}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{edu.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
