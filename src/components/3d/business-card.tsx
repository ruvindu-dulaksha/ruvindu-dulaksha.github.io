'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { QrCode, Mail, Phone, MapPin, Sparkles, ShieldCheck, ExternalLink, RotateCcw } from 'lucide-react';
import { PORTFOLIO_OWNER } from '@/data/portfolio-data';

export default function BusinessCard3D() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const rotateX = isFlipped ? 0 : mousePos.y * -22;
  const rotateY = isFlipped ? 180 : mousePos.x * 22;

  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <div 
        className="perspective-1000 w-full max-w-[460px] sm:max-w-[500px] h-[280px] sm:h-[300px] cursor-pointer group select-none relative"
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
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* FRONT SIDE */}
          <div className="absolute inset-0 backface-hidden glass-panel p-6 flex flex-col justify-between border-2 border-blue-500/40 rounded-[24px] bg-gradient-to-br from-[#111827] via-[#0E172A] to-[#080F1E] shadow-[0_0_35px_rgba(59,130,246,0.25)] overflow-hidden">
            {/* Holographic Sheen Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40 bg-gradient-to-tr from-transparent via-cyan-400/25 to-blue-600/35"
              style={{
                transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px)`
              }}
            />

            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center space-x-3">
                <div className="relative w-11 h-11 rounded-2xl overflow-hidden bg-white/5 border border-cyan-400/40 p-1 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] flex-shrink-0">
                  <Image 
                    src="/rd-logo.png" 
                    alt="RD Logo" 
                    width={44} 
                    height={44} 
                    className="object-contain" 
                  />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white tracking-wide">{PORTFOLIO_OWNER.name}</h4>
                  <p className="text-xs text-cyan-400 font-bold tracking-wider uppercase">Flutter, iOS &amp; WP Dev</p>
                </div>
              </div>
              <div className="flex items-center space-x-1.5 bg-blue-500/15 px-2.5 py-1 rounded-full border border-blue-400/30">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-blue-200 font-bold">Verified</span>
              </div>
            </div>

            {/* Middle Badge */}
            <div className="z-10 my-1">
              <div className="inline-flex items-center space-x-2 bg-cyan-950/80 border border-cyan-400/40 px-3 py-1.5 rounded-xl shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                <span className="text-xs text-cyan-100 font-bold">{PORTFOLIO_OWNER.degree}</span>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-end justify-between z-10 pt-3 border-t border-white/10">
              <div>
                <span className="text-[10px] text-gray-400 block uppercase tracking-widest font-bold">Specialization</span>
                <span className="text-xs text-white font-semibold">Flutter • iOS • WordPress</span>
              </div>
              <div className="flex items-center text-xs text-cyan-400 font-bold space-x-1.5 group-hover:text-cyan-300 transition-colors">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Click to flip</span>
              </div>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 glass-panel p-6 flex flex-col justify-between border-2 border-cyan-500/40 rounded-[24px] bg-gradient-to-br from-[#0B132B] via-[#0F1B38] to-[#111827] shadow-[0_0_35px_rgba(6,182,212,0.3)] overflow-hidden">
            {/* Holographic Sheen Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-gradient-to-bl from-cyan-400/25 via-blue-500/15 to-transparent" />

            {/* Back Header */}
            <div className="flex items-center justify-between z-10 border-b border-white/10 pb-2.5">
              <div>
                <span className="text-[11px] text-cyan-400 font-bold uppercase tracking-widest block">Connect With Me</span>
                <h5 className="text-sm font-extrabold text-white">{PORTFOLIO_OWNER.name}</h5>
              </div>
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-400/40">
                <QrCode className="w-4 h-4 text-cyan-300" />
              </div>
            </div>

            {/* Middle Content with QR */}
            <div className="flex items-center justify-between space-x-3 z-10 my-1">
              <div className="space-y-2 text-xs text-gray-200">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-xs truncate max-w-[190px] font-semibold">{PORTFOLIO_OWNER.contact.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-xs font-semibold">{PORTFOLIO_OWNER.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-xs font-semibold">{PORTFOLIO_OWNER.contact.location}</span>
                </div>
              </div>

              {/* High Contrast Larger QR Code SVG */}
              <div className="p-2 bg-white rounded-xl shadow-xl border border-cyan-400/40 flex-shrink-0">
                <svg className="w-14 h-14 text-gray-950" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm11-2h7v7h-7V2zm2 2v3h3V4h-3zM2 15h7v7H2v-7zm2 2v3h3v-3H4zm13-2h3v3h-3v-3zm0 4h3v3h-3v-3zm-4-4h3v3h-3v-3zm0 4h3v3h-3v-3zm-4-4h3v3h-3v-3z" />
                </svg>
              </div>
            </div>

            {/* Back Footer */}
            <div className="flex items-center justify-between z-10 pt-2 border-t border-white/10 text-xs">
              <span className="text-gray-400 font-semibold">Scan QR for vCard</span>
                <span className="text-cyan-300 flex items-center gap-1 font-bold">
                <span>ruvindu-dulaksha.github.io</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="text-xs text-cyan-300 font-bold mt-2 flex items-center gap-1.5">
        <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
        <span>Click 3D card to rotate &amp; flip in place</span>
      </p>

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
    </div>
  );
}
