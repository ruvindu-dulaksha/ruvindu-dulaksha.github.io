'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle, Calendar, MapPin, Sparkles, Building2, Maximize2, X, ShieldCheck } from 'lucide-react';
import { EDUCATION_DATA, ADDITIONAL_EDUCATION } from '@/data/portfolio-data';

export default function EducationSection() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <section id="education" className="mb-10 scroll-mt-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">Education & Qualifications</h3>
            <p className="text-xs text-cyan-400 font-medium">Academic degree, higher national diploma & professional credentials</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Degree Card (Col 8) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 glass-panel p-6 sm:p-8 border border-blue-500/30 rounded-[24px] bg-gradient-to-br from-[#111827] via-[#0D1527] to-[#080D1A] relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col justify-between"
        >
          <div>
            {/* First Class Honours Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-950/80 to-amber-900/60 border border-amber-400/40 px-3.5 py-1.5 rounded-full mb-3 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-black text-amber-300 uppercase tracking-widest">
                    {EDUCATION_DATA.honours}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">{EDUCATION_DATA.degree}</h4>
                <p className="text-xs text-gray-400 mt-1">{EDUCATION_DATA.institution}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {EDUCATION_DATA.description}
            </p>

            {/* Key Coursework Modules */}
            <div>
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Modules & Specializations</span>
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {EDUCATION_DATA.courses.map((course, idx) => (
                  <div 
                    key={idx}
                    className="glass-panel p-3 border border-white/5 rounded-xl bg-white/[0.02] flex items-center space-x-2 hover:border-cyan-400/30 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-200">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{EDUCATION_DATA.period}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Coventry University, UK / NIBM Colombo</span>
            </div>
          </div>
        </motion.div>

        {/* Convocation Gold Medal & Dean's List Photo Card (Col 4) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-4 glass-panel p-5 border-2 border-amber-500/40 rounded-[24px] bg-gradient-to-br from-[#13192B] via-[#0F172A] to-[#0A101E] flex flex-col justify-between shadow-[0_0_35px_rgba(245,158,11,0.15)] relative group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center space-x-1.5 bg-amber-950/80 border border-amber-400/40 px-2.5 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span className="text-[10px] font-black text-amber-200 uppercase tracking-wider">Dean&apos;s List • Gold Medal</span>
              </div>

              <button
                onClick={() => setIsPhotoModalOpen(true)}
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all flex items-center gap-1 text-[11px] font-bold"
                title="Zoom photo"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Zoom</span>
              </button>
            </div>

            {/* Convocation Photo Thumbnail with Zoom Trigger */}
            <div 
              onClick={() => setIsPhotoModalOpen(true)}
              className="relative w-full h-56 rounded-2xl overflow-hidden mb-3.5 border border-amber-400/30 cursor-pointer group-hover:border-amber-400/70 transition-all shadow-md bg-black"
            >
              <Image
                src="/images/convocation_gold_medal.jpg"
                alt="Ruvindu Dulaksha - Convocation Dean's List Gold Medal Award Ceremony"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
                <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold shadow-xl flex items-center gap-1.5 scale-95 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to View Full Photo</span>
                </span>
              </div>
            </div>

            <h5 className="text-sm font-bold text-white mb-1">Convocation Award Ceremony</h5>
            <p className="text-[11px] text-gray-300 leading-relaxed mb-3">
              K. D. Ruvindu Dulaksha receiving the Dean&apos;s List Academic Excellence Award &amp; Gold Medal for BSc (Hons) Computing.
            </p>

            {/* Academic Milestones */}
            <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs">
              {EDUCATION_DATA.achievements.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-[11px] text-amber-200/90 font-medium">
                  <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Diplomas & Foundation Higher Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ADDITIONAL_EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            className="glass-panel p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F172A] to-[#0A101E] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span>{edu.period}</span>
                </span>
              </div>

              <h5 className="text-sm font-bold text-white mb-1.5 leading-snug">
                {edu.degree}
              </h5>
              <p className="text-xs text-gray-400 flex items-start gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{edu.institution}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Convocation Photo Zoom Lightbox Modal */}
      <AnimatePresence>
        {isPhotoModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative glass-panel p-4 sm:p-6 border-2 border-amber-400/50 rounded-[28px] max-w-2xl w-full bg-[#0D1627] flex flex-col shadow-[0_0_60px_rgba(245,158,11,0.3)] max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-rose-500/50 transition-colors z-20"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-black text-amber-300 uppercase tracking-widest">
                  Coventry University &amp; NIBM Convocation • September 2026
                </span>
              </div>

              <h3 className="text-xl font-black text-white mb-3">
                Dean&apos;s List &amp; Gold Medal Award Ceremony
              </h3>

              {/* High-Resolution Convocation Image */}
              <div className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-amber-400/40 mb-4 bg-black shadow-inner flex items-center justify-center">
                <Image
                  src="/images/convocation_gold_medal.jpg"
                  alt="Convocation Dean's List Award Ceremony - Ruvindu Dulaksha"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs text-gray-300">
                <span className="font-semibold text-white">
                  K. D. Ruvindu Dulaksha — BSc (Hons) Computing First Class Honours
                </span>
                <span className="text-amber-300 font-bold">
                  Batch Topper &amp; Gold Medalist
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

