'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle, Calendar, MapPin, Sparkles, Building2 } from 'lucide-react';
import { EDUCATION_DATA, ADDITIONAL_EDUCATION } from '@/data/portfolio-data';

export default function EducationSection() {
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
          className="lg:col-span-8 glass-panel p-6 sm:p-8 border border-blue-500/30 rounded-[24px] bg-gradient-to-br from-[#111827] via-[#0D1527] to-[#080D1A] relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.1)]"
        >
          {/* First Class Honours Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-950/80 to-amber-900/60 border border-amber-400/40 px-3.5 py-1.5 rounded-full mb-3">
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
        </motion.div>

        {/* Honors & Milestones Card (Col 4) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-4 glass-panel p-6 border border-cyan-500/30 rounded-[24px] bg-[#0E172A]/90 flex flex-col justify-between"
        >
          <div>
            <h5 className="text-sm font-bold text-white mb-4 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Key Academic Milestones</span>
            </h5>

            <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-cyan-500/30">
              {EDUCATION_DATA.achievements.map((item, index) => (
                <div key={index} className="relative pl-7 text-xs text-gray-300">
                  <span className="absolute left-1.5 top-1 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 ring-4 ring-[#0E172A]" />
                  <p className="font-semibold text-white mb-0.5">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Period Pill */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{EDUCATION_DATA.period}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Colombo, Sri Lanka</span>
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
    </section>
  );
}
