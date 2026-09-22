'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  GraduationCap, 
  Award, 
  Smartphone, 
  Globe, 
  Briefcase, 
  Calendar as CalendarIcon, 
  Mail, 
  Code2, 
  Laptop,
  Building2,
  X,
  CreditCard
} from 'lucide-react';
import Image from 'next/image';
import { PORTFOLIO_OWNER } from '@/data/portfolio-data';
import BusinessCard3D from '../3d/business-card';
import { GithubIcon, LinkedinIcon } from '../ui/brand-icons';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'experience', label: 'Work Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'mobile-projects', label: 'Mobile Projects', icon: Smartphone },
  { id: 'wordpress-projects', label: 'WordPress Projects', icon: Globe },
  { id: 'other-projects', label: 'Other Projects', icon: Laptop },
  { id: 'contact', label: 'Contact Me', icon: Mail },
];

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col justify-between glass-panel p-4 border border-blue-500/20 bg-[#0B1222]/85 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20 h-auto lg:h-[calc(100vh-2rem)] lg:sticky lg:top-4 overflow-y-auto relative rounded-3xl rounded-bl-[28px]">
        {/* Top Brand Header */}
        <div>
          <div className="flex items-center space-x-3 mb-5 pb-4 border-b border-white/10">
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden bg-white/5 border border-cyan-400/40 p-1 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] flex-shrink-0">
              <Image 
                src="/rd-logo.png" 
                alt="Ruvindu Dulaksha Logo" 
                width={44} 
                height={44} 
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h2 className="text-sm font-black text-white tracking-wide">{PORTFOLIO_OWNER.name}</h2>
              <p className="text-[10px] text-cyan-400 font-bold tracking-wider uppercase">Flutter, iOS &amp; WP Dev</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white border border-cyan-400/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-300" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Middle Work Availability Status */}
        <div className="my-4 space-y-2.5">
          <div className="glass-panel p-3 border border-emerald-500/30 bg-emerald-950/20 rounded-2xl flex items-center space-x-3">
            <div className="relative flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" />
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
            </div>
            <div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">Freelance &amp; Company</span>
              <span className="text-[11px] text-emerald-200 font-bold">Remote • Hybrid • Onsite</span>
            </div>
          </div>

          {/* Actions: Download CV & 3D Business Card */}
          <div className="pt-2 border-t border-white/10 space-y-2">
            <a 
              href="/resume/Ruvindu_Dulaksha_CV.pdf"
              download="Ruvindu_Dulaksha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-md transition-all hover:scale-102"
            >
              <Briefcase className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>

            <button 
              onClick={() => setIsCardModalOpen(true)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-bold text-xs shadow-md transition-all hover:scale-102 hover:bg-cyan-900/80"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Interactive 3D Card</span>
            </button>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-4 border-t border-white/10 space-y-3 relative z-10">
          <div className="flex items-center justify-around text-gray-400">
            <a href="https://github.com/ruvindu-dulaksha" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors p-1.5 hover:bg-white/5 rounded-lg" title="GitHub">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/ruvindu-dulaksha-28527028b/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors p-1.5 hover:bg-white/5 rounded-lg" title="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="https://g.dev" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors p-1.5 hover:bg-white/5 rounded-lg">
              <Code2 className="w-4 h-4" />
            </a>
            <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors p-1.5 hover:bg-white/5 rounded-lg">
              <Briefcase className="w-4 h-4" />
            </a>
            <a href="https://upwork.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors p-1.5 hover:bg-white/5 rounded-lg">
              <Globe className="w-4 h-4" />
            </a>
          </div>

          <p className="text-[10px] text-gray-500 text-center font-medium">
            © 2026 K. D. Ruvindu Dulaksha. <br />All rights reserved.
          </p>
        </div>

        {/* Cyberpunk Glowing Chamfered Corner Accent (as in reference image) */}
        <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none overflow-hidden z-20">
          <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
            <path 
              d="M0,24 L0,28 L20,48 L48,48" 
              stroke="#06B6D4" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_rgba(6,182,212,0.9)]"
            />
            <path 
              d="M0,24 L0,28 L20,48 L48,48" 
              stroke="#3B82F6" 
              strokeWidth="1" 
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>
        </div>
      </aside>

      {/* 3D Business Card Lightbox Modal */}
      <AnimatePresence>
        {isCardModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full max-w-2xl flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setIsCardModalOpen(false)}
                className="absolute -top-12 right-0 md:-right-12 text-gray-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-rose-500/50 transition-colors z-[110]"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full flex items-center justify-center">
                <BusinessCard3D />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
