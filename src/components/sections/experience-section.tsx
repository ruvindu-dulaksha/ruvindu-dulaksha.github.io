'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Code,
  Laptop,
  FileCheck2,
  Maximize2,
  X,
  ExternalLink,
  Quote
} from 'lucide-react';
import { WORK_EXPERIENCE_DATA, WorkExperience } from '@/data/portfolio-data';

export default function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'industry' | 'internship' | 'freelance'>('all');
  const [selectedLetter, setSelectedLetter] = useState<{
    image: string;
    title: string;
    company: string;
    signatory: string;
    signatoryRole: string;
  } | null>(null);

  const filteredExperience = WORK_EXPERIENCE_DATA.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'industry') return item.category === 'industry' || item.type.includes('Contract');
    if (activeFilter === 'internship') return item.category === 'internship' || item.type.includes('Intern') || item.type.includes('Trainee');
    if (activeFilter === 'freelance') return item.category === 'freelance';
    return true;
  });

  return (
    <section id="experience" className="mb-10 scroll-mt-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">Work &amp; Industrial Experience</h3>
            <p className="text-xs text-cyan-400 font-medium">Professional industry roles, verified internships &amp; engineering contracts</p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0F172A]/90 border border-white/10 rounded-xl overflow-x-auto">
          {[
            { id: 'all', label: 'All Roles' },
            { id: 'industry', label: 'Industrial & Contract' },
            { id: 'internship', label: 'Internships' },
            { id: 'freelance', label: 'Freelance' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Industrial Experience Stat Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="glass-panel p-3.5 border border-white/10 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-900/60">
          <div className="flex items-center space-x-2 text-cyan-400 mb-1">
            <Sparkles className="w-4 h-4" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Experience</span>
          </div>
          <p className="text-xl sm:text-2xl font-black text-white">2+ Years</p>
          <p className="text-[11px] text-gray-400">Mobile &amp; Web hands-on</p>
        </div>

        <div className="glass-panel p-3.5 border border-white/10 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900/60">
          <div className="flex items-center space-x-2 text-blue-400 mb-1">
            <Building2 className="w-4 h-4" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Companies</span>
          </div>
          <p className="text-xl sm:text-2xl font-black text-white">4 Roles</p>
          <p className="text-[11px] text-gray-400">Industry &amp; Agile teams</p>
        </div>

        <div className="glass-panel p-3.5 border border-white/10 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900/60">
          <div className="flex items-center space-x-2 text-emerald-400 mb-1">
            <Laptop className="w-4 h-4" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Delivered</span>
          </div>
          <p className="text-xl sm:text-2xl font-black text-white">10+ Apps</p>
          <p className="text-[11px] text-gray-400">Production deployed</p>
        </div>

        <div className="glass-panel p-3.5 border border-white/10 rounded-2xl bg-gradient-to-br from-purple-950/40 to-slate-900/60">
          <div className="flex items-center space-x-2 text-purple-400 mb-1">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Delivery</span>
          </div>
          <p className="text-xl sm:text-2xl font-black text-white">100%</p>
          <p className="text-[11px] text-gray-400">On-time milestone rate</p>
        </div>
      </div>

      {/* Experience Cards Grid / Timeline */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredExperience.map((exp: WorkExperience, index: number) => {
            const isContract = exp.type.includes('Contract') || exp.type.includes('Intern →');
            const isInternship = exp.type.includes('Internship') || exp.type.includes('Trainee');

            return (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="glass-panel p-5 sm:p-6 border border-blue-500/20 rounded-[22px] bg-[#0E172A]/85 hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] relative overflow-hidden group"
              >
                {/* Accent line on left */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  {/* Title & Company Info */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                        <Building2 className="w-3 h-3 text-cyan-400" />
                        <span>{exp.company}</span>
                      </span>

                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                        isContract 
                          ? 'bg-blue-950/80 border-blue-500/40 text-blue-300'
                          : isInternship
                          ? 'bg-purple-950/80 border-purple-500/40 text-purple-300'
                          : 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h4>
                  </div>

                  {/* Period & Location Pills */}
                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs text-gray-400">
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 font-semibold text-gray-200">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 text-[11px] text-gray-400">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities & Highlights */}
                <div className="mb-4 space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Official Recommendation Letter Card if available */}
                {exp.recommendationLetter && (
                  <div className="my-4 p-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-blue-950/30 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                          <FileCheck2 className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white flex items-center gap-1.5">
                            Official Internship &amp; Recommendation Letter
                            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                          </p>
                          <p className="text-[11px] text-cyan-300">
                            Signed by {exp.recommendationLetter.signatory} ({exp.recommendationLetter.signatoryRole})
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedLetter({
                          image: exp.recommendationLetter!.image,
                          title: exp.title,
                          company: exp.company,
                          signatory: exp.recommendationLetter!.signatory,
                          signatoryRole: exp.recommendationLetter!.signatoryRole
                        })}
                        className="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-bold text-xs flex items-center space-x-1.5 self-start sm:self-auto transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Signed Letter</span>
                      </button>
                    </div>

                    {exp.recommendationLetter.quote && (
                      <div className="relative pl-6 text-xs text-gray-300 italic border-l-2 border-cyan-400/40 bg-white/[0.02] p-2.5 rounded-r-xl">
                        <Quote className="w-3.5 h-3.5 text-cyan-400/60 absolute left-1.5 top-2.5" />
                        <p className="leading-relaxed">
                          &quot;{exp.recommendationLetter.quote}&quot;
                        </p>
                        <p className="mt-1 text-[11px] text-cyan-300 font-semibold not-italic">
                          — {exp.recommendationLetter.signatory}, {exp.recommendationLetter.signatoryRole}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Skills / Tech Stack Tags */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mr-1 flex items-center gap-1">
                      <Code className="w-3 h-3 text-cyan-400" />
                      Stack:
                    </span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-900/80 border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Lightbox Zoom Modal for Official Recommendation Letter */}
      <AnimatePresence>
        {selectedLetter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative glass-panel p-5 sm:p-6 border border-cyan-400/40 rounded-[28px] max-w-3xl w-full max-h-[92vh] bg-[#0D1627] flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/10 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 mb-1.5">
                <FileCheck2 className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">{selectedLetter.company}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Official Internship &amp; Recommendation Letter</h3>

              {/* Full Scanned Letter Image Preview */}
              <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[500px] rounded-2xl overflow-y-auto overflow-x-hidden border border-cyan-500/30 bg-black flex items-center justify-center">
                <div className="relative w-full h-full min-h-[500px]">
                  <Image
                    src={selectedLetter.image}
                    alt="Official Recommendation Letter"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Footer details */}
              <div className="flex flex-wrap items-center justify-between pt-3 text-xs gap-3">
                <div>
                  <p className="text-white font-semibold">{selectedLetter.signatory}</p>
                  <p className="text-gray-400 text-[11px]">{selectedLetter.signatoryRole}</p>
                </div>
                <a
                  href={selectedLetter.image}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold flex items-center space-x-1.5 transition-all shadow-md"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
