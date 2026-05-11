'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Twitter, ExternalLink } from 'lucide-react';

const socials = [
  {
    name: "Github",
    icon: <Github size={24} />,
    url: "https://github.com/Karan174Pareek",
    color: "#00f0ff", // Cyan
    username: "@Karan174Pareek"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={24} />,
    url: "https://www.linkedin.com/in/karanpareek",
    color: "#bc00ff", // Purple
    username: "karanpareek"
  },
  {
    name: "Codechef",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 11V7H13V11H17V13H13V17H11V13H7V11H11Z" fill="currentColor" />
      </svg>
    ),
    url: "https://www.codechef.com/users/karanpareek174",
    color: "#00f0ff",
    username: "karanpareek174"
  },
  {
    name: "Leetcode",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.396.702-1.863l4.226-4.258c.466-.467 1.125-.702 1.838-.702.713 0 1.372.235 1.838.702l2.313 2.333c.332.34.332.895 0 1.227-.34.332-.894.332-1.227 0l-2.313-2.333c-.155-.155-.33-.205-.612-.205-.282 0-.457.05-.612.205l-4.226 4.258c-.155.155-.205.33-.205.612 0 .282.05.457.205.612l4.332 4.363c.155.155.33.205.612.205.282 0 .457-.05.612-.205l2.697-2.607c.332-.34.887-.34 1.227 0 .332.34.332.895 0 1.227z" fill="currentColor" />
        <path d="M8.107 12.836c-.394 0-.713-.32-.713-.713V9.931c0-.394.32-.713.713-.713.394 0 .713.32.713.713v2.192c0 .393-.32.713-.713.713z" fill="currentColor" />
        <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8z" fill="currentColor" />
      </svg>
    ),
    url: "https://leetcode.com/u/KaranPareek/",
    color: "#bc00ff",
    username: "KaranPareek"
  },
  {
    name: "Instagram",
    icon: <Instagram size={24} />,
    url: "https://www.instagram.com/karanpareek.xd/",
    color: "#00f0ff",
    username: "@karanpareek.xd"
  },
  {
    name: "X (Twitter)",
    icon: <Twitter size={24} />,
    url: "https://x.com/KaranPareek174",
    color: "#bc00ff",
    username: "@KaranPareek174"
  }
];

export default function SocialProfiles() {
  return (
    <section id="socials" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold">Connections</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase">Digital <br /><span className="text-white/20 border-text-stroke">Footprints</span></h2>
          </div>
          <p className="text-white/40 text-sm max-w-sm mb-2 font-medium">
            Connect with me across various platforms to track my progress, view my code, or just say hi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-center p-8 glassmorphism border-white/5 hover:border-white/20 transition-all overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: social.color }}
              ></div>

              <div
                className="mb-6 p-4 rounded-full border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:border-transparent"
                style={{ color: social.color }}
              >
                {social.icon}
              </div>

              <h3 className="text-sm font-bold uppercase tracking-widest mb-1">{social.name}</h3>
              <p className="text-[10px] font-mono text-white/40 group-hover:text-white/70 transition-colors">{social.username}</p>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
                <ExternalLink size={12} />
              </div>

              {/* Animated Border Bottom */}
              <div
                className="absolute bottom-0 left-0 h-1 transition-all duration-500 w-0 group-hover:w-full"
                style={{ backgroundColor: social.color }}
              ></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
