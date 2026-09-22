'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Eye, CheckCircle2, Sparkles, X, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { OTHER_PROJECTS_DATA, OtherProject } from '@/data/portfolio-data';
import { GithubIcon } from '../ui/brand-icons';

export default function OtherProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<OtherProject | null>(null);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? OTHER_PROJECTS_DATA : OTHER_PROJECTS_DATA.slice(0, 2);

  const handleOpenProject = (project: OtherProject) => {
    setSelectedProject(project);
    setActiveScreenshot(project.image || null);
  };

  return (
    <section id="other-projects" className="mb-10 scroll-mt-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">Other Projects</h3>
            <p className="text-xs text-cyan-400 font-medium">Neural network dashboards, cloud infrastructure &amp; university capstones</p>
          </div>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {showAll ? 'Show Less' : 'View All >'}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 border border-blue-500/20 rounded-[28px] bg-gradient-to-br from-[#111827] via-[#0E1628] to-[#0A101E] flex flex-col justify-between group hover:border-cyan-400/50 transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Category */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-extrabold text-cyan-300 uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              {/* Title & Desc */}
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Image Preview or Architecture Highlights Box */}
              {project.image ? (
                <div 
                  onClick={() => handleOpenProject(project)}
                  className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 border border-white/10 bg-black group-hover:border-cyan-500/30 transition-colors cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-40" />
                </div>
              ) : (
                <div 
                  onClick={() => handleOpenProject(project)}
                  className="relative w-full rounded-2xl overflow-hidden mb-4 border border-white/10 bg-gradient-to-br from-indigo-950/40 to-slate-900/60 p-4 group-hover:border-cyan-500/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-[11px] text-gray-400">
                    <span className="font-mono text-cyan-400">system/architecture/{project.id}</span>
                    <span className="text-[10px] text-indigo-300 font-bold">{project.category}</span>
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

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-xl bg-blue-950/60 border border-blue-500/20 text-[10px] font-semibold text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => handleOpenProject(project)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:scale-102"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Project</span>
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl glass-panel border border-white/20 hover:border-cyan-400 text-white font-bold text-xs flex items-center space-x-1.5"
                title="View GitHub Source"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Toggle Button */}
      {OTHER_PROJECTS_DATA.length > 2 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-2xl glass-panel border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-bold text-xs flex items-center space-x-2 transition-all hover:bg-cyan-950/40"
          >
            <span>{showAll ? 'Show Fewer Projects' : `See More Other Projects (${OTHER_PROJECTS_DATA.length - 2} More)`}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* GitHub More Projects Callout Banner */}
      <div className="mt-8 p-4 rounded-2xl glass-panel border border-white/10 bg-gradient-to-r from-indigo-950/40 via-blue-950/30 to-cyan-950/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
            <GithubIcon className="w-5 h-5 text-gray-200" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">Interested in more AI, IoT &amp; engineering experiments?</h4>
            <p className="text-[11px] text-gray-400">Check out open-source repositories, university capstones &amp; AI scripts on GitHub</p>
          </div>
        </div>

        <a
          href="https://github.com/ruvindu-dulaksha?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center space-x-2 shadow-md hover:scale-105 transition-all whitespace-nowrap"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Visit GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
        </a>
      </div>

      {/* Project Lightbox Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative glass-panel p-6 sm:p-8 border border-cyan-400/40 rounded-[28px] max-w-2xl w-full bg-[#0D1627] flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.3)] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/10 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center space-x-2 bg-indigo-950/80 border border-indigo-500/30 px-3 py-1 rounded-full w-fit mb-3">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">{selectedProject.category}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">{selectedProject.longDescription}</p>

              {/* Preview Image with Multi-Screenshot Switcher if available */}
              {(activeScreenshot || selectedProject.image) ? (
                <div className="mb-6">
                  <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-cyan-500/30 bg-black flex items-center justify-center p-2 mb-3">
                    <Image
                      src={activeScreenshot || selectedProject.image!}
                      alt={selectedProject.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Screenshot Switcher Thumbnails */}
                  {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {selectedProject.screenshots.map((shot, sIdx) => {
                        let label = `Screen ${sIdx + 1}`;
                        if (selectedProject.id === 'other-smart-parking') {
                          label = ['Parking Bays (Slots)', 'Google Maps Location', 'Slot Booking & Duration', 'Welcome Splash'][sIdx] || label;
                        }
                        const isCurrent = (activeScreenshot || selectedProject.image) === shot;
                        return (
                          <button
                            key={sIdx}
                            onClick={() => setActiveScreenshot(shot)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                              isCurrent
                                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md scale-105'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : null}

              {/* Highlights */}
              <div className="mb-6">
                <h5 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Architecture &amp; System Features</span>
                </h5>
                <div className="space-y-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs flex items-center space-x-2 shadow-lg"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
