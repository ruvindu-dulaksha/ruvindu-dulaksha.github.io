'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  RotateCcw, 
  QrCode, 
  ShieldCheck, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_OWNER } from '@/data/portfolio-data';
import { GithubIcon, LinkedinIcon } from '../ui/brand-icons';
import { sanitizeInput, isValidEmail } from '@/utils/security';

export default function ContactSection() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleCopy = (text: string, key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const rotateX = isFlipped ? 0 : mousePos.y * -20;
  const rotateY = isFlipped ? 180 : mousePos.x * 20;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = sanitizeInput(formData.email);
    const cleanMessage = sanitizeInput(formData.message);
    const cleanName = sanitizeInput(formData.name);
    const cleanSubject = sanitizeInput(formData.subject);

    if (!cleanEmail || !cleanMessage || !isValidEmail(cleanEmail)) return;

    setIsSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#3B82F6', '#06B6D4', '#60A5FA']
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="mb-12 scroll-mt-6">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">Contact Me</h3>
            <p className="text-xs text-cyan-400 font-medium">+94 76 393 0373 • ruvindufdo@gmail.com • LinkedIn • GitHub</p>
          </div>
        </div>

        <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Available for Projects &amp; Roles</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive 3D Holographic Business Card (Col 6) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div 
            className="perspective-1000 w-full max-w-[480px] h-[310px] sm:h-[320px] cursor-pointer group select-none relative"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="w-full h-full relative preserve-3d transition-transform duration-700 ease-out"
              animate={{
                rotateY: isFlipped ? 180 : rotateY,
                rotateX: isFlipped ? 0 : rotateX,
              }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              {/* ===== FRONT SIDE ===== */}
              <div className="absolute inset-0 backface-hidden glass-panel p-6 flex flex-col justify-between border-2 border-cyan-500/40 rounded-[28px] bg-gradient-to-br from-[#111827] via-[#0E172A] to-[#0A101E] shadow-[0_0_45px_rgba(6,182,212,0.25)] overflow-hidden">
                {/* Holographic light sheen reflection */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-40 bg-gradient-to-tr from-transparent via-cyan-400/25 to-blue-600/35"
                  style={{
                    transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`
                  }}
                />

                {/* Top Badge & Status */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white/5 border border-cyan-400/50 p-1 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.5)] flex-shrink-0">
                      <Image 
                        src="/rd-logo.png" 
                        alt="RD Logo" 
                        width={48} 
                        height={48} 
                        className="object-contain" 
                        priority
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-white tracking-wide">{PORTFOLIO_OWNER.name}</h4>
                      <p className="text-[11px] text-cyan-300 font-bold uppercase tracking-wider">Mobile &amp; WordPress Developer</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 bg-cyan-950/80 border border-cyan-400/30 px-2.5 py-1 rounded-full shadow-inner">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[10px] text-cyan-200 font-extrabold uppercase tracking-wider">Verified</span>
                  </div>
                </div>

                {/* Center Degree & Role Badge */}
                <div className="z-10 my-2 space-y-2">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-950/80 via-cyan-950/80 to-transparent border border-cyan-500/40 px-3.5 py-1.5 rounded-xl">
                    <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
                    <span className="text-xs text-white font-bold tracking-wide">{PORTFOLIO_OWNER.degree}</span>
                  </div>

                  {/* Skills Mini-Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-300">
                      Flutter &amp; Dart
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-300">
                      iOS Native &amp; Swift
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-300">
                      Custom WordPress
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-300">
                      AI &amp; Gemini API
                    </span>
                  </div>
                </div>

                {/* Bottom Bar: Quick Flip Hint */}
                <div className="flex items-center justify-between z-10 pt-3 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-[11px] text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{PORTFOLIO_OWNER.contact.location}</span>
                  </div>

                  <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold shadow-md group-hover:scale-105 transition-transform">
                    <RotateCcw className="w-3.5 h-3.5 animate-spin-slow" />
                    <span>Click to Flip Card</span>
                  </div>
                </div>
              </div>

              {/* ===== BACK SIDE ===== */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 glass-panel p-6 flex flex-col justify-between border-2 border-cyan-400/60 rounded-[28px] bg-gradient-to-br from-[#0B132B] via-[#0E1A38] to-[#10192E] shadow-[0_0_45px_rgba(59,130,246,0.35)] overflow-hidden">
                {/* Holographic light reflection */}
                <div className="absolute inset-0 pointer-events-none opacity-30 bg-gradient-to-bl from-cyan-400/20 via-blue-500/20 to-transparent" />

                {/* Back Header */}
                <div className="flex items-center justify-between z-10 pb-2 border-b border-white/10">
                  <div className="flex items-center space-x-2.5">
                    <div className="relative w-8 h-8 rounded-xl overflow-hidden bg-white/5 border border-cyan-400/40 p-0.5 flex items-center justify-center">
                      <Image 
                        src="/rd-logo.png" 
                        alt="RD Logo" 
                        width={30} 
                        height={30} 
                        className="object-contain" 
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-cyan-400 font-extrabold uppercase tracking-widest block">Direct Contact Card</span>
                      <h5 className="text-sm font-black text-white">{PORTFOLIO_OWNER.name}</h5>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-400/40 text-cyan-300">
                    <QrCode className="w-4 h-4" />
                  </div>
                </div>

                {/* Direct Contact Channels with Copy Actions */}
                <div className="space-y-2 z-10 my-1">
                  {/* Phone */}
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors">
                    <a 
                      href={`tel:${PORTFOLIO_OWNER.contact.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2.5 text-xs text-gray-200 hover:text-cyan-300 font-medium truncate"
                    >
                      <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="font-bold">{PORTFOLIO_OWNER.contact.phone}</span>
                    </a>
                    <button
                      onClick={(e) => handleCopy(PORTFOLIO_OWNER.contact.phone, 'phone', e)}
                      className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="Copy phone"
                    >
                      {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors">
                    <a 
                      href={`mailto:${PORTFOLIO_OWNER.contact.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2.5 text-xs text-gray-200 hover:text-cyan-300 font-medium truncate"
                    >
                      <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="font-bold truncate max-w-[190px] sm:max-w-[240px]">{PORTFOLIO_OWNER.contact.email}</span>
                    </a>
                    <button
                      onClick={(e) => handleCopy(PORTFOLIO_OWNER.contact.email, 'email', e)}
                      className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="Copy email"
                    >
                      {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* LinkedIn & GitHub Direct Quick Launch */}
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <a
                      href="https://www.linkedin.com/in/ruvindu-dulaksha-28527028b/"
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center space-x-2 p-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-bold transition-all hover:scale-102"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>

                    <a
                      href="https://github.com/ruvindu-dulaksha"
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center space-x-2 p-2 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 border border-white/20 text-gray-200 text-xs font-bold transition-all hover:scale-102"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>

                {/* Back Footer */}
                <div className="flex items-center justify-between z-10 pt-2 border-t border-white/10 text-xs">
                  <span className="text-gray-400 text-[11px] font-semibold">Ja-Ela, Sri Lanka</span>
                  <div className="flex items-center space-x-1 text-cyan-300 font-bold text-[11px]">
                    <RotateCcw className="w-3 h-3" />
                    <span>Click to flip back</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center gap-2 mt-3 text-xs text-cyan-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Interactive 3D Business Card • Move cursor to tilt &amp; click to flip</span>
          </div>
        </div>

        {/* Right: Direct Project Inquiry Message Box (Col 6) */}
        <div className="lg:col-span-6 glass-panel p-6 sm:p-8 border border-cyan-500/30 rounded-[28px] bg-gradient-to-br from-[#111827] via-[#0E1628] to-[#0A101E] shadow-xl">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white">Message Transmitted!</h4>
              <p className="text-xs text-gray-300 max-w-sm mx-auto">
                Thank you for reaching out! Ruvindu will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-base font-bold text-white flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h4>
                <span className="text-[10px] text-gray-400 uppercase font-mono">Fast Response</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs text-gray-300 font-semibold block">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/15 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-300 font-semibold block">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/15 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-300 font-semibold block">Subject</label>
                <input
                  type="text"
                  placeholder="Mobile App Project (Flutter / iOS) or WordPress Development"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/15 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-300 font-semibold block">Message / Requirements</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project, timeline, budget, or contract opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/15 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center space-x-2 transition-all hover:scale-102"
              >
                <span>Send Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
