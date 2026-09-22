'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ExternalLink, CheckCircle2, Sparkles, X, Monitor, ChevronDown, ChevronUp } from 'lucide-react';
import { WORDPRESS_PROJECTS_DATA, WPProject } from '@/data/portfolio-data';
import { GithubIcon } from '../ui/brand-icons';

export default function WordPressProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<WPProject | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? WORDPRESS_PROJECTS_DATA : WORDPRESS_PROJECTS_DATA.slice(0, 2);

  return (
    <section id="wordpress-projects" className="mb-10 scroll-mt-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">WordPress Projects</h3>
            <p className="text-xs text-cyan-400 font-medium">Bespoke PHP themes, Headless WP & WooCommerce platforms</p>
          </div>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {showAll ? 'Show Less' : 'View All >'}
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 border border-cyan-500/20 rounded-[28px] bg-gradient-to-br from-[#0F172A] via-[#0E1628] to-[#0A101E] flex flex-col justify-between group hover:border-cyan-400/50 transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Category Pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-[10px] font-extrabold text-blue-300 uppercase tracking-widest">
                  {project.category} Website
                </span>
                <span className="text-[10px] text-cyan-400 font-semibold">Sub-0.8s Load Speed</span>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Desktop Web Browser Frame Mockup or Code/Architecture Preview */}
              {project.image ? (
                <div className="relative w-full rounded-2xl overflow-hidden mb-4 border border-white/15 bg-slate-900 shadow-lg group-hover:border-cyan-500/40 transition-colors">
                  {/* Browser Window Header Bar */}
                  <div className="h-6 bg-slate-800/90 px-3 flex items-center space-x-1.5 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block" />
                    <span className="text-[9px] text-gray-400 ml-2 font-mono truncate">{project.liveUrl}</span>
                  </div>

                  <div className="relative w-full h-52">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-40" />
                  </div>
                </div>
              ) : (
                <div className="relative w-full rounded-2xl overflow-hidden mb-4 border border-white/10 bg-gradient-to-br from-blue-950/40 to-slate-900/60 p-4 group-hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-[11px] text-gray-400">
                    <span className="font-mono text-cyan-400">wp-content/themes/{project.id}</span>
                    <span className="text-[10px] text-emerald-400 font-bold">Production Setup</span>
                  </div>
                  <div className="space-y-1.5">
                    {project.highlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center space-x-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights & Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-[10px] font-semibold text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-102"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedProject(project)}
                className="px-3.5 py-2.5 rounded-xl glass-panel border border-white/20 hover:border-cyan-400 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors"
                title="View Gallery & Details"
              >
                <Monitor className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">Preview</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Toggle Button */}
      {WORDPRESS_PROJECTS_DATA.length > 2 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-2xl glass-panel border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-bold text-xs flex items-center space-x-2 transition-all hover:bg-cyan-950/40"
          >
            <span>{showAll ? 'Show Fewer Sites' : `See More WordPress Projects (${WORDPRESS_PROJECTS_DATA.length - 2} More)`}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* GitHub More Projects Callout Banner */}
      <div className="mt-8 p-4 rounded-2xl glass-panel border border-white/10 bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-indigo-950/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
            <GithubIcon className="w-5 h-5 text-gray-200" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">Looking for custom WordPress themes, plugins or source code?</h4>
            <p className="text-[11px] text-gray-400">Explore open repositories, child themes, and web setups on GitHub</p>
          </div>
        </div>

        <a
          href="https://github.com/ruvindu-dulaksha?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs flex items-center space-x-2 shadow-md hover:scale-105 transition-all whitespace-nowrap"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Visit GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
        </a>
      </div>

      {/* WordPress Project Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative glass-panel p-6 sm:p-8 border border-cyan-400/40 rounded-[28px] max-w-3xl w-full bg-[#0D1627] flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.3)] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/10 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 px-3 py-1 rounded-full w-fit mb-3">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">{selectedProject.category} Theme</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">{selectedProject.longDescription}</p>

              {/* Full Desktop Web Screenshot or Architecture Summary */}
              {selectedProject.image ? (
                <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-cyan-500/30 mb-6 bg-black">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="p-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-blue-950/50 to-slate-900/60 mb-6 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs font-mono text-gray-300">Live WordPress Environment: {selectedProject.liveUrl}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-bold text-cyan-300">
                    Active Architecture
                  </span>
                </div>
              )}

              {/* Highlights */}
              <div className="mb-6">
                <h5 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Architecture & Features</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-panel border border-white/20 hover:border-cyan-400 text-white font-bold text-xs flex items-center space-x-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>

                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs flex items-center space-x-2 shadow-lg"
                >
                  <span>Launch Live Site</span>
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
