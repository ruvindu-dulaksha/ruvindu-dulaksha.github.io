'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Sparkles, Award, CheckCircle2, ArrowRight, Code2, Globe, Briefcase, Building2, Laptop } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_OWNER } from '@/data/portfolio-data';
import { GithubIcon, LinkedinIcon } from '../ui/brand-icons';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PORTFOLIO_OWNER.roles;

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);



  const handleHireMe = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3B82F6', '#06B6D4', '#60A5FA', '#38BDF8']
    });
    onContactClick();
  };

  const handleDownloadCV = () => {
    alert("Downloading K. D. Ruvindu Dulaksha - Junior Mobile & WordPress Developer Resume (PDF)...");
  };

  return (
    <section 
      id="home" 
      className="relative glass-panel rounded-[28px] p-6 sm:p-8 bg-gradient-to-br from-[#111827] via-[#0B1222] to-[#070B14] overflow-hidden mb-8"
    >

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Info & Bio */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-950/80 to-cyan-950/80 border border-cyan-400/30 px-4 py-1.5 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
              Junior Mobile Developer (Flutter, iOS) | WordPress Developer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <p className="text-sm font-medium text-gray-400">Hello, I&apos;m</p>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-white/5 border border-cyan-400/40 p-1 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] flex-shrink-0">
                <Image 
                  src="/rd-logo.png" 
                  alt="RD Logo" 
                  width={48} 
                  height={48} 
                  className="object-contain" 
                  priority
                />
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {PORTFOLIO_OWNER.name}
              </h1>
            </div>
            <div className="h-10 sm:h-12 flex items-center">
              <span className="text-xl sm:text-3xl font-extrabold text-gradient-primary">
                {displayText}
              </span>
              <span className="w-0.5 h-7 sm:h-8 bg-cyan-400 ml-1 animate-pulse" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-normal"
          >
            {PORTFOLIO_OWNER.bio}
          </motion.p>

          {/* Freelance & Company Availability Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            <div className="flex items-center space-x-1.5 bg-blue-950/70 border border-blue-500/30 px-3 py-1 rounded-xl text-xs text-blue-200 font-bold">
              <Laptop className="w-3.5 h-3.5 text-cyan-400" />
              <span>Freelance: WordPress, Flutter, iOS</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 rounded-xl text-xs text-cyan-200 font-bold">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Company: Remote, Hybrid & Onsite</span>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href="/resume/Ruvindu_Dulaksha_CV.pdf"
              download="Ruvindu_Dulaksha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={onContactClick}
              className="px-6 py-3 rounded-2xl glass-panel border border-white/20 hover:border-cyan-400 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all hover:bg-white/10"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>

            <button
              onClick={handleHireMe}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(6,182,212,0.5)] flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hire Me</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-3 pt-4 border-t border-white/10"
          >
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Socials:</span>
            <div className="flex items-center space-x-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-colors">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://g.dev" target="_blank" rel="noreferrer" className="p-2 rounded-xl glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-colors">
                <Code2 className="w-4 h-4" />
              </a>
              <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-colors">
                <Briefcase className="w-4 h-4" />
              </a>
              <a href="https://upwork.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: User's Real Photo */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl rounded-full" />

          {/* Hero Portrait Card with Anti-Download Privacy Shield */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            onContextMenu={(e) => e.preventDefault()}
            className="relative w-full max-w-md h-[380px] sm:h-[430px] rounded-[24px] overflow-hidden border border-white/10 glass-panel group protected-media select-none"
          >
            <Image
              src="/images/hero_developer_v2.png"
              alt="K. D. Ruvindu Dulaksha - Graduation Portrait"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
              priority
              draggable={false}
            />

            {/* Transparent Anti-Theft Protection Shield */}
            <div 
              className="absolute inset-0 z-10 pointer-events-auto cursor-default"
              onContextMenu={(e) => e.preventDefault()}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-75 pointer-events-none z-10" />

            {/* Floating Tech Badges */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2 z-20">
              {['Flutter', 'Swift', 'WordPress', 'Firebase', 'Dart'].map((tech, idx) => (
                <motion.span 
                  key={tech}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="px-2.5 py-1 rounded-xl bg-[#0F172A]/90 border border-cyan-400/40 text-[10px] font-bold text-cyan-300 backdrop-blur-md shadow-lg"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Bottom Info Badge */}
            <div className="absolute bottom-4 left-4 right-4 z-20 glass-panel p-3 border border-white/10 rounded-2xl bg-[#0B1222]/85 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Gold Medalist & Batch Topper</h4>
                  <p className="text-[10px] text-amber-300 font-medium">BSc (Hons) Computing — First Class</p>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        <div className="glass-panel p-4 border border-white/5 rounded-2xl bg-[#111827]/60 text-center hover:border-blue-500/30 transition-colors">
          <span className="text-2xl sm:text-3xl font-black text-gradient-primary block">
            {PORTFOLIO_OWNER.stats.yearsExperience}
          </span>
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Years Experience</span>
        </div>

        <div className="glass-panel p-4 border border-white/5 rounded-2xl bg-[#111827]/60 text-center hover:border-cyan-500/30 transition-colors">
          <span className="text-2xl sm:text-3xl font-black text-gradient-cyan block">
            {PORTFOLIO_OWNER.stats.projectsCompleted}
          </span>
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Projects Completed</span>
        </div>

        <div className="glass-panel p-4 border border-white/5 rounded-2xl bg-[#111827]/60 text-center hover:border-blue-500/30 transition-colors">
          <span className="text-2xl sm:text-3xl font-black text-gradient-primary block">
            {PORTFOLIO_OWNER.stats.happyClients}
          </span>
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Happy Clients</span>
        </div>

        <div className="glass-panel p-4 border border-white/5 rounded-2xl bg-[#111827]/60 text-center hover:border-emerald-500/30 transition-colors">
          <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">
            {PORTFOLIO_OWNER.stats.codeQuality}
          </span>
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Commitment to Quality</span>
        </div>
      </div>
    </section>
  );
}
