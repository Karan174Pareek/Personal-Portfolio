'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import GooeyNav from '@/components/GooeyNav/GooeyNav';
import { ChevronRight, Mail, Menu, X } from 'lucide-react';

const baseNavItems = [
  { label: "Works", href: "#projects" },
  { label: "Stack", href: "#architecture" },
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Lab", href: "#lab" },
  { label: "Footprints", href: "#socials" },
  { label: "Contact", href: "#contact" },
];

const baseMobileNavItems = [
  { label: "Works", href: "#projects", num: "01" },
  { label: "Stack", href: "#architecture", num: "02" },
  { label: "About", href: "#about", num: "03" },
  { label: "Achievements", href: "#achievements", num: "04" },
  { label: "Services", href: "#services", num: "05" },
  { label: "Resume", href: "#resume", num: "06" },
  { label: "Lab", href: "#lab", num: "07" },
  { label: "Footprints", href: "#socials", num: "08" },
  { label: "Contact", href: "#contact", num: "09" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const navItems = baseNavItems.map(item => ({
    ...item,
    href: isHome ? item.href : `/${item.href}`
  }));

  const mobileNavItems = baseMobileNavItems.map(item => ({
    ...item,
    href: isHome ? item.href : `/${item.href}`
  }));

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 glassmorphism bg-black/60 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 md:py-6">
        <div className="flex items-center gap-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 group">
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-primary rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary animate-pulse"></div>
            </div>
            <span className="text-sm md:text-xl font-bold tracking-tighter uppercase">
              Karan <span className="text-primary">Pareek</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <GooeyNav items={navItems} />
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-primary/40 bg-primary/10 hover:bg-primary/20 text-primary transition-all active:scale-95 cursor-pointer"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold">
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
            {isMobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 65px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden w-full bg-black/95 backdrop-blur-2xl border-t border-white/10 overflow-y-auto px-6 py-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono">
                <span className="text-white/40 uppercase tracking-widest">// NAVIGATION MATRIX</span>
                <span className="text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  SYS.ONLINE
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {mobileNavItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between p-3.5 rounded border border-white/5 bg-white/[0.02] hover:bg-primary/[0.08] hover:border-primary/40 transition-all active:bg-primary/15"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-primary/70 group-hover:text-primary transition-colors">
                          {item.num}
                        </span>
                        <span className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight size={14} className="text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
              <Link
                href={isHome ? "#contact" : "/#contact"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded border border-primary bg-primary/10 hover:bg-primary text-primary hover:text-black font-bold text-xs uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <Mail size={14} /> Send Message
              </Link>

              <div className="flex items-center justify-between text-[10px] font-mono text-white/40 pt-1">
                <span>LOC: SILIGURI, INDIA</span>
                <div className="flex gap-4">
                  <a href="https://github.com/Karan174Pareek" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GH</a>
                  <a href="https://www.linkedin.com/in/karanpareek" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LI</a>
                  <a href="https://www.hackerrank.com/profile/karanpareek174" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">HR</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
