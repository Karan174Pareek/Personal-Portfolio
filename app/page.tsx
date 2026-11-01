import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { ArrowUpRight, GitBranch, Sparkles, Activity, Bot, Server, Boxes, Code2, Layers, Database, TrendingUp } from 'lucide-react';
import { DottedSurface } from '@/components/ui/dotted-surface';
import Particles from '@/components/Particles/Particles';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MagicBento from '@/components/MagicBento/MagicBento';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Services from '@/components/Services';
import ResumeSection from '@/components/ResumeSection';
import SocialProfiles from '@/components/SocialProfiles';
import Terminal from '@/components/Terminal';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: "Karan Pareek | Full Stack MERN & AI Systems Engineer",
  description: "Portfolio of Karan Pareek. Full-stack developer specializing in scalable MERN architectures, Next.js web applications, and autonomous AI agents. Co-founder of Ignitia Digital.",
  keywords: ["Karan Pareek", "Full Stack Developer", "MERN Stack", "Next.js", "AI Agents", "Ignitia Digital", "React"],
  authors: [{ name: "Karan Pareek" }],
  openGraph: {
    title: "Karan Pareek | Full Stack MERN & AI Systems Engineer",
    description: "Full-stack developer building scalable MERN, Next.js applications, and autonomous AI agents.",
    url: "https://karanpareek.dev",
    siteName: "Karan Pareek Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function PortfolioDashboard() {
  return (
    <main className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden">
      {/* 3D Background Layers */}
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

      {/* Disable DottedSurface on mobile to prevent 3 concurrent WebGL contexts */}
      <div className="hidden md:block">
        <DottedSurface className="opacity-20" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* 1st Section: Hero */}
      <Hero />

      {/* 2nd Section: Featured Works (Projects) */}
      <section id="projects" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold block mb-4">
            Production &amp; Engineering
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
            FEATURED <span className="text-cyan-400 neon-glow-cyan">WORKS</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <MagicBento
            items={[
              {
                title: 'GitStack',
                description:
                  'Self-hosted MERN GitHub clone with a real bare Git storage engine and Smart HTTP protocol support for CLI clone/push/pull; features Issues, PRs with merge-conflict detection and auto-merge, code review, a social feed, and Docker deployment.',
                label: 'FULL STACK / MERN',
                link: 'https://github.com/Karan174Pareek/GitStack',
                tags: ['MERN', 'Bare Git Engine', 'Docker', 'REST API'],
                icon: <GitBranch size={22} className="text-cyan-400" />,
              },
              {
                title: 'ReconcileAI',
                description:
                  'AI-driven finance reconciliation tool (React, Node.js, MongoDB, Claude + Gemini fallback) built for the Razorpay AI Buildathon 2026; unpacks lumped payment-gateway settlements into order-level GST/fee breakdowns via a 3-tier matching engine with human-in-the-loop approvals and immutable audit logging.',
                label: 'AI FINANCE / MERN',
                link: 'https://reconcile-ai-server.vercel.app/',
                tags: ['Claude API', 'Gemini Fallback', 'Razorpay', 'Node.js'],
                icon: <Sparkles size={22} className="text-cyan-400" />,
              },
              {
                title: 'LiveOps',
                description:
                  'Real-time team collaboration dashboard built with MERN and Socket.io; features live cross-client task sync via authenticated WebSocket rooms, JWT auth with refresh token rotation, role-based access control, and workspace-level data isolation for multi-tenant use.',
                label: 'REAL-TIME / MERN',
                link: 'https://github.com/Karan174Pareek/LiveOps',
                tags: ['Socket.io', 'MERN', 'RBAC', 'WebSockets'],
                icon: <Activity size={22} className="text-cyan-400" />,
              },
              {
                title: 'ReviewPilot',
                description:
                  'GitHub App for automated pull-request reviews using the Claude API; posts inline review comments on PRs and includes a developer analytics dashboard for tracking review activity and code quality trends over time.',
                label: 'GITHUB APP / AI',
                link: 'https://github.com/Karan174Pareek/CodeReviewer',
                tags: ['GitHub Apps', 'Claude API', 'TypeScript', 'Webhooks'],
                icon: <Bot size={22} className="text-cyan-400" />,
              },
              {
                title: 'Mini Heroku',
                description:
                  'Push-to-deploy mini PaaS on Kubernetes (k3d). Builds apps from source with Kaniko and Buildpacks, pushes to a local registry and deploys them automatically; built phase by phase with verified infra, builder and deployer stages.',
                label: 'DEVOPS / KUBERNETES',
                link: 'https://github.com/Karan174Pareek/mini-heorku',
                tags: ['Kubernetes', 'Docker', 'Kaniko', 'Buildpacks'],
                icon: <Server size={22} className="text-cyan-400" />,
              },
              {
                title: 'Conduit',
                description:
                  'MCP Gateway on Kubernetes: a custom WooCommerce MCP server, a gateway with dashboard and an AI chat agent, deployed with Helm.',
                label: 'AI / KUBERNETES',
                link: 'https://github.com/Karan174Pareek/Conduit',
                tags: ['MCP', 'Kubernetes', 'Helm', 'WooCommerce', 'Node.js'],
                icon: <Boxes size={22} className="text-cyan-400" />,
              },
            ]}
            glowColor="0, 240, 255"
            enableTilt={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
          />
        </div>
      </section>

      {/* 3rd Section: My Tech Stack */}
      <section id="architecture" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold block mb-4">
                Skills &amp; Architecture
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
                MY TECH <span className="text-cyan-400 neon-glow-cyan">STACK</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm max-w-sm mb-2 font-medium">
              Full-stack MERN engineering with autonomous AI systems and Kubernetes DevOps infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Languages',
                badge: 'CORE SYNTAX',
                desc: 'Type-safe, high-concurrency, and scalable programming languages for distributed backends and reactive frontends.',
                icon: <Code2 size={22} className="text-primary" />,
                skills: ['JavaScript (ES6+)', 'TypeScript', 'Python (FastAPI)', 'Java', 'SQL', 'HTML5 / CSS3'],
              },
              {
                title: 'Frameworks & Libraries',
                badge: 'APP ARCHITECTURE',
                desc: 'Modern reactive frameworks and server runtimes built for sub-second rendering, real-time websockets, and clean modular UI.',
                icon: <Layers size={22} className="text-primary" />,
                skills: ['Next.js 15 (App Router)', 'React 19', 'Node.js', 'Express.js', 'Socket.io', 'Tailwind CSS'],
              },
              {
                title: 'Databases & APIs',
                badge: 'DATA & PROTOCOLS',
                desc: 'Document stores, relational databases, cache layers, and robust RESTful / WebSocket API integrations.',
                icon: <Database size={22} className="text-primary" />,
                skills: ['MongoDB', 'MySQL', 'Redis', 'RESTful APIs', 'Postman', 'GraphQL'],
              },
              {
                title: 'AI Development',
                badge: 'INTELLIGENT SYSTEMS',
                desc: 'Autonomous LLM agents, local on-device RAG pipelines, MCP servers, and multi-step tool-use workflows.',
                icon: <Bot size={22} className="text-primary" />,
                skills: ['Claude API', 'AI Agents', 'RAG Pipelines', 'MCP Protocol', 'Prompt Architecture', 'Vector Embeddings'],
              },
              {
                title: 'DevOps & Cloud',
                badge: 'CONTAINERS & INFRA',
                desc: 'Containerization, push-to-deploy PaaS workflows, cluster orchestration, and automated CI/CD deployment pipelines.',
                icon: <Server size={22} className="text-primary" />,
                skills: ['Docker', 'Kubernetes (k3d)', 'Helm', 'Kaniko', 'Buildpacks', 'GitHub Actions', 'Linux'],
              },
              {
                title: 'SEO & Performance',
                badge: 'GROWTH & VISIBILITY',
                desc: 'Technical search optimization, Core Web Vitals engineering, analytics auditing, and conversion rate optimization.',
                icon: <TrendingUp size={22} className="text-primary" />,
                skills: ['Technical SEO', 'Core Web Vitals', 'WordPress', 'Google Analytics', 'SEMrush', 'Conversion Funnels'],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glassmorphism p-8 hover:border-primary/20 transition-all group rounded-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Counter + Domain Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/20 group-hover:text-primary transition-colors">
                      0{i + 1}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary/80 px-2 py-0.5 rounded-sm border border-primary/20 bg-primary/5">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-primary/40 transition-all shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1 uppercase group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-white/40 uppercase tracking-wider">
                        Domain Capability
                      </p>
                    </div>
                  </div>

                  {/* Capability Description */}
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Individual Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-sm bg-white/[0.03] border border-white/5 text-white/60 group-hover:text-white/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4th Section: About Me */}
      <AboutMe />

      {/* 4th Section Part B: Experience And Education */}
      <Experience />

      {/* 5th Section: Achievements */}
      <Achievements />

      {/* 6th Section: Services I Provide */}
      <Services />

      {/* 7th Section: Resume Section */}
      <ResumeSection />

      {/* 8th Section: The Lab */}
      <section id="lab" className="relative z-10 px-6 md:px-10 py-32 border-t border-white/5 bg-black/40 text-center">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold block mb-4">
              R&amp;D Division
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
              THE <span className="text-cyan-400 neon-glow-cyan">LAB</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xl mx-auto font-medium leading-relaxed">
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

      {/* 9th Section: Social Profiles (Footprints) */}
      <SocialProfiles />

      {/* 10th Section: Contact */}
      <ContactSection />

      {/* Bottom Footer */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 px-6 md:px-10 py-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <div className="text-[10px] font-mono leading-tight">
            <span className="block opacity-40 uppercase mb-1">Architecture</span>
            <span className="block">26.7271° N / 88.3953° E</span>
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
          <Link
            href="#contact"
            aria-label="Contact Section"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all cursor-pointer"
          >
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </footer>

      {/* Visme Script loaded with Next.js Script strategy="lazyOnload" */}
      <Script
        src="https://static-bundles.visme.co/forms/vismeforms-embed.js"
        strategy="lazyOnload"
      />
    </main>
  );
}
