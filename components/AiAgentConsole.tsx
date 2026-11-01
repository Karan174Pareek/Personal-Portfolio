'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Play, Square, Cpu, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

// Lazy-load CrystalizedBall with ssr: false for performance
const CrystalizedBall = dynamic(
  () => import('@/components/CrystalizedBall/CrystalizedBall'),
  { ssr: false }
);

interface AiAgentConsoleProps {
  className?: string;
  avatarSrc?: string;
}

const INTRO_SCRIPT = 
  "Hi, I'm Karan's AI agent. Karan builds full-stack and AI products and is moving into DevOps. Explore his projects, or click the chat bubble to ask me anything.";

export default function AiAgentConsole({
  className,
  avatarSrc = '/profile.jpg',
}: AiAgentConsoleProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [telemetryText, setTelemetryText] = useState('');
  const [speechSupported, setSpeechSupported] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const targetCharIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);
  const syncTimerRef = useRef<NodeJS.Timeout | null>(null);
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = useCallback(() => {
    if (syncTimerRef.current) clearInterval(syncTimerRef.current);
    if (fallbackTimerRef.current) clearInterval(fallbackTimerRef.current);
  }, []);

  // Screen size & reduced motion listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionListener);

    return () => {
      window.removeEventListener('resize', checkMobile);
      motionQuery.removeEventListener('change', motionListener);
    };
  }, []);

  // Initialize Speech Synthesis & Voice Selection (Prefer localService voices to ensure onboundary fires)
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSpeechSupported(false);
      return;
    }

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      const englishVoices = voices.filter((v) => v.lang.startsWith('en'));
      
      // Filter out Google network voices which do not emit onboundary events reliably
      const localVoices = englishVoices.filter(
        (v) => v.localService && !v.name.toLowerCase().includes('google')
      );

      const preferred =
        localVoices.find(
          (v) =>
            v.name.includes('Natural') ||
            v.name.includes('Samantha') ||
            v.name.includes('Jenny') ||
            v.name.includes('David') ||
            v.name.includes('Daniel')
        ) ||
        localVoices[0] ||
        englishVoices.find((v) => !v.name.toLowerCase().includes('google')) ||
        englishVoices[0] ||
        voices[0];

      setSelectedVoice(preferred || null);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    // Unmount cleanup: cancel speech, clear timers, remove listener
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.onvoiceschanged = null;
      }
      clearTimers();
    };
  }, [clearTimers]);

  const stopAudio = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    clearTimers();
    setIsSpeaking(false);
  }, [clearTimers]);

  const playIntro = useCallback(() => {
    if (!speechSupported) {
      return;
    }

    if (isSpeaking) {
      stopAudio();
      return;
    }

    window.speechSynthesis.cancel();
    clearTimers();

    setTelemetryText('');
    targetCharIndexRef.current = 0;
    currentCharIndexRef.current = 0;

    const utterance = new SpeechSynthesisUtterance(INTRO_SCRIPT);
    utterance.pitch = 0.95;
    utterance.rate = 1.0;
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    if (reducedMotion) {
      // Show full text immediately without typewriter delay if user prefers reduced motion
      setTelemetryText(INTRO_SCRIPT);
    } else {
      // Smooth typewriter catch-up loop
      syncTimerRef.current = setInterval(() => {
        if (currentCharIndexRef.current < targetCharIndexRef.current) {
          currentCharIndexRef.current = Math.min(
            targetCharIndexRef.current,
            currentCharIndexRef.current + 2
          );
          setTelemetryText(INTRO_SCRIPT.slice(0, currentCharIndexRef.current));
        }
      }, 28);
    }

    let hasBoundaryFired = false;

    // Precise speech boundary event: fires when each word is spoken
    utterance.onboundary = (event) => {
      hasBoundaryFired = true;
      if (event.name === 'word' || typeof event.charIndex === 'number') {
        const nextSpace = INTRO_SCRIPT.indexOf(' ', event.charIndex);
        const wordEnd = nextSpace === -1 ? INTRO_SCRIPT.length : nextSpace + 1;
        targetCharIndexRef.current = Math.min(INTRO_SCRIPT.length, wordEnd);
      }
    };

    utterance.onstart = () => {
      setIsSpeaking(true);

      if (!reducedMotion) {
        // Fallback for synthesizers that do not emit boundary events
        fallbackTimerRef.current = setInterval(() => {
          if (!hasBoundaryFired) {
            targetCharIndexRef.current = Math.min(
              INTRO_SCRIPT.length,
              targetCharIndexRef.current + 1
            );
          }
        }, 78);
      }
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      clearTimers();
      currentCharIndexRef.current = INTRO_SCRIPT.length;
      targetCharIndexRef.current = INTRO_SCRIPT.length;
      setTelemetryText(INTRO_SCRIPT);
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      setIsSpeaking(false);
      clearTimers();
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [clearTimers, isSpeaking, reducedMotion, selectedVoice, speechSupported, stopAudio]);

  return (
    <div
      className={cn(
        'relative w-full max-w-md mx-auto group',
        'rounded-2xl border border-cyan-500/30 bg-[#0a0e17]/90 backdrop-blur-xl',
        'shadow-[0_0_50px_rgba(0,240,255,0.12)] p-5 md:p-6',
        'transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_60px_rgba(0,240,255,0.2)]',
        className
      )}
    >
      {/* Sci-fi Corner Brackets */}
      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400 -translate-x-[1px] -translate-y-[1px] rounded-tl-sm pointer-events-none" />
      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400 translate-x-[1px] -translate-y-[1px] rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400 -translate-x-[1px] translate-y-[1px] rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400 translate-x-[1px] translate-y-[1px] rounded-br-sm pointer-events-none" />

      {/* Cyber Grid Overlay */}
      <div 
        className="absolute inset-0 rounded-xl pointer-events-none opacity-[0.035] bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:16px_16px]"
      />

      {/* Top Header Bar */}
      <div className="flex items-center gap-2.5 pb-3.5 border-b border-white/10 text-xs font-mono tracking-wider">
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'absolute inline-flex h-full w-full rounded-full opacity-75',
              !reducedMotion && 'animate-ping',
              isSpeaking ? 'bg-cyan-400' : 'bg-emerald-400'
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              isSpeaking ? 'bg-cyan-400 shadow-[0_0_8px_#00f0ff]' : 'bg-emerald-400 shadow-[0_0_8px_#10b981]'
            )}
          />
        </span>
        <span className="font-bold text-white tracking-wide">
          Karan Pareek&apos;s AI Agent
        </span>
      </div>

      {/* Center Avatar with Subtle HUD Crystalized Ball Frame */}
      <div className="relative my-4 sm:my-5 flex flex-col items-center justify-center">
        <div className="relative w-56 h-56 sm:w-60 sm:h-60 flex items-center justify-center">
          
          {/* React Bits: CrystalizedBall WebGL subtle HUD energetic frame */}
          <div className="absolute inset-0 z-0 pointer-events-auto">
            <CrystalizedBall
              preset="plasma"
              color="#00F0FF"
              size={0.88}
              crackle={isSpeaking ? 0.65 : 0.45}
              flares={isSpeaking ? 0.45 : 0.3}
              glow={isSpeaking ? 0.8 : 0.6}
              sparks={isSpeaking ? 0.55 : 0.3}
              fill={0.4}
              haze={0.3}
              particleCount={isMobile ? 2500 : 6000}
              motion="orbit"
              particleShape="round"
              speed={isSpeaking ? 1.2 : 0.8}
              interactive={true}
              hoverStrength={0.65}
            />
          </div>

          {/* Quadrant Targeting Marks */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-cyan-400/50 z-10 pointer-events-none" />
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-cyan-400/50 z-10 pointer-events-none" />
          <div className="absolute left-1 top-1/2 -translate-y-1/2 w-0.5 h-2 bg-cyan-400/50 z-10 pointer-events-none" />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 w-0.5 h-2 bg-cyan-400/50 z-10 pointer-events-none" />

          {/* Portrait Photo - Prominent and zoomed in naturally */}
          <div 
            className={cn(
              'relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden z-10',
              'border border-cyan-400/60 bg-black shadow-inner transition-all duration-300',
              isSpeaking
                ? 'shadow-[0_0_22px_rgba(0,240,255,0.45)] border-cyan-300'
                : 'shadow-[0_0_12px_rgba(0,240,255,0.2)]'
            )}
          >
            <Image
              src={avatarSrc}
              alt="Karan Pareek"
              fill
              sizes="(max-width: 640px) 144px, 160px"
              className={cn(
                'object-cover scale-[1.3] object-[center_28%] transition-transform duration-700 ease-out',
                isSpeaking ? 'scale-[1.35] filter brightness-110' : 'group-hover:scale-[1.35]'
              )}
              priority
            />

            {/* Subtle Gradient Tint */}
            <div
              className={cn(
                'absolute inset-0 pointer-events-none transition-opacity duration-300',
                isSpeaking
                  ? 'bg-gradient-to-t from-cyan-500/20 via-transparent to-cyan-500/10'
                  : 'bg-gradient-to-t from-black/25 via-transparent to-transparent'
              )}
            />
          </div>
        </div>
      </div>

      {/* Subtitle / Terminal Telemetry Output Box */}
      <div 
        className="mt-2 rounded-lg bg-black/30 backdrop-blur-sm p-3 relative overflow-hidden z-10 border border-white/[0.04]"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="flex items-center justify-between text-[9px] font-mono text-white/40 mb-1.5">
          <span className="text-cyan-400/90 flex items-center gap-1 font-semibold">
            <Cpu size={10} /> TELEMETRY_STREAM.log
          </span>
          <span className="text-[8px] uppercase tracking-widest text-white/30">CH: AUDIO_OUT</span>
        </div>

        <div className="min-h-[48px] text-[11px] font-mono leading-relaxed text-white/80">
          <span className="text-cyan-400 font-bold mr-1.5">&gt;</span>
          {isSpeaking ? (
            <span>
              {telemetryText}
              {!reducedMotion && (
                <span className="inline-block w-1.5 h-3 bg-cyan-400 ml-1 translate-y-[2px] animate-pulse" />
              )}
            </span>
          ) : telemetryText ? (
            <span className="text-white/70">{telemetryText}</span>
          ) : (
            <span className="text-white/40 italic">
              STANDBY // Awaiting audio transmission. Press [PLAY INTRO] to initiate voice readout.
            </span>
          )}
        </div>
      </div>

      {/* Bottom Identity & Control Dock */}
      <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 z-10">
        <div className="flex items-center gap-2.5 text-left w-full sm:w-auto">
          <div className="w-7 h-7 rounded border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-cyan-300">
            <ShieldCheck size={14} />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white flex items-center gap-1">
              @Karan174Pareek
              <span className="text-[9px] px-1 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-normal">DEV</span>
            </div>
            <div className="text-[9px] font-mono text-white/40">MERN + AI ARCHITECT</div>
          </div>
        </div>

        {/* Play/Stop Trigger Button */}
        <button
          type="button"
          disabled={!speechSupported}
          onClick={isSpeaking ? stopAudio : playIntro}
          aria-label={
            !speechSupported
              ? 'Voice not supported'
              : isSpeaking
                ? 'Stop voice introduction'
                : 'Play voice introduction'
          }
          className={cn(
            'w-full sm:w-auto px-4 py-2.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider',
            'transition-all duration-200 flex items-center justify-center gap-2 shadow-lg active:scale-95',
            !speechSupported
              ? 'opacity-50 cursor-not-allowed bg-white/5 border border-white/10 text-white/40'
              : isSpeaking
                ? 'cursor-pointer bg-rose-500/20 text-rose-300 border border-rose-500/60 hover:bg-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.3)] animate-pulse'
                : 'cursor-pointer bg-primary text-black border border-primary hover:bg-white hover:text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]'
          )}
        >
          {!speechSupported ? (
            <span>VOICE NOT SUPPORTED</span>
          ) : isSpeaking ? (
            <>
              <Square size={13} className="fill-rose-300 text-rose-300" />
              <span>STOP READOUT</span>
            </>
          ) : (
            <>
              <Play size={13} className="fill-black text-black" />
              <span>PLAY INTRO</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
