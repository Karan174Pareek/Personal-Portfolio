'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Layout, Briefcase, Search, ShoppingCart, BarChart3, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Portfolio Websites",
    desc: "Cinematic, high-performance portfolios designed to showcase your work with interactive 3D elements and smooth animations.",
    icon: <Layout size={24} className="text-primary" />,
    features: ["3D Interactions", "Custom Animations", "Responsive Design"]
  },
  {
    title: "Business Websites",
    desc: "Scalable enterprise solutions that focus on brand identity, user conversion, and robust architecture.",
    icon: <Briefcase size={24} className="text-secondary" />,
    features: ["Brand Integration", "Lead Generation", "CMS Implementation"]
  },
  {
    title: "SEO Optimization",
    desc: "Technical SEO audits and implementations to ensure your digital assets rank high and load fast.",
    icon: <Search size={24} className="text-primary" />,
    features: ["Core Web Vitals", "Semantic HTML", "Schema Markup"]
  },
  {
    title: "E-Commerce Solutions",
    desc: "End-to-end shopping experiences with real-time inventory, secure payments, and modular checkout systems.",
    icon: <ShoppingCart size={24} className="text-secondary" />,
    features: ["Payment Gateways", "Inventory Sync", "User Accounts"]
  },
  {
    title: "Dashboard Development",
    desc: "Complex data visualization and management systems built with security and performance in mind.",
    icon: <BarChart3 size={24} className="text-primary" />,
    features: ["Real-time Analytics", "RBAC Security", "Data Export"]
  }
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-secondary font-bold">Solutions</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase">Services I <br/><span className="text-secondary neon-glow-purple">Provide</span></h2>
          </div>
          <div className="h-px flex-grow mx-12 bg-gradient-to-r from-transparent via-white/5 to-transparent hidden lg:block"></div>
          <p className="text-white/40 text-sm max-w-sm mb-2 font-medium">
            Tailored engineering solutions for modern digital problems. From concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism p-8 hover:border-primary/20 transition-all group flex flex-col h-full"
            >
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">{service.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/30">
                    <ChevronRight size={10} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  const message = encodeURIComponent(`Hi Karan, I'm interested in your ${service.title} service. Let's discuss a project!`);
                  window.open(`https://wa.me/918101482088?text=${message}`, '_blank');
                }}
                className="w-full py-4 border border-white/5 text-[10px] font-bold uppercase tracking-[0.3em] group-hover:bg-primary group-hover:text-black transition-all"
              >
                Initialize Project
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
