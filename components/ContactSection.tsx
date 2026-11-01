'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold block mb-4">Transmission</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
              GET IN <span className="text-cyan-400 neon-glow-cyan">TOUCH</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-mono font-bold mb-1">Status</p>
            <p className="font-mono text-sm text-emerald-400 flex items-center gap-1.5 md:justify-end font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              OPEN FOR WORK
            </p>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glassmorphism p-8 border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center mb-6">
                  <Mail size={18} className="text-primary" />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-2">Direct Email</h3>
                <p className="text-lg font-mono tracking-tight break-all">karanpareek174@gmail.com</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glassmorphism p-8 border-white/5 hover:border-cyan-400/20 transition-all"
              >
                <div className="w-10 h-10 border border-cyan-400/20 flex items-center justify-center mb-6">
                  <MessageSquare size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-2">Phone / WhatsApp</h3>
                <p className="text-lg font-mono tracking-tight">+91 8101482088</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glassmorphism p-8 border-white/5 hover:border-cyan-400/20 transition-all"
              >
                <div className="w-10 h-10 border border-cyan-400/20 flex items-center justify-center mb-6">
                  <MapPin size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-2">Location</h3>
                <p className="text-lg font-mono tracking-tight">Siliguri, West Bengal, India</p>
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
  );
}

