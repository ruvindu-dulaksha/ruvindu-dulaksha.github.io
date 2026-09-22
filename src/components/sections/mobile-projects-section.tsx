'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, ExternalLink, Star, CheckCircle, Sparkles, X, Eye, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { MOBILE_PROJECTS_DATA, MobileProject } from '@/data/portfolio-data';
import { GithubIcon } from '../ui/brand-icons';

export default function MobileProjectsSection() {
  const [activeTab, setActiveTab] = useState<'All' | 'Flutter' | 'Swift' | 'Kotlin / KMP'>('All');
  const [selectedProject, setSelectedProject] = useState<MobileProject | null>(null);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = MOBILE_PROJECTS_DATA.filter((project) => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  const handleOpenProject = (project: MobileProject) => {
    setSelectedProject(project);
    if (project.id === 'mobile-classifier') {
      setActiveScreenshot(project.screenshots?.[2] || project.image);
    } else {
      setActiveScreenshot(project.screenshots?.[1] || project.image);
    }
  };

  return (
    <section id="mobile-projects" className="mb-10 scroll-mt-6">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">Mobile Projects</h3>
            <p className="text-xs text-cyan-400 font-medium">Cross-platform Flutter, Native iOS Swift &amp; Kotlin Multiplatform (KMP)</p>
          </div>
        </div>

        {/* View All & Filter Tabs */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
          >
            <span>{showAll ? 'Show Less' : 'View All >'}</span>
          </button>

          <div className="flex items-center space-x-1.5 glass-panel p-1 border border-white/10 rounded-2xl bg-[#0D1527]">
            {(['All', 'Flutter', 'Swift', 'Kotlin / KMP'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
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
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-extrabold text-cyan-300 uppercase tracking-widest">
                  {project.platform}
                </span>

                <div className="flex items-center space-x-1 text-xs text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{project.stars}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Phone Mockup Screen Image */}
              <div 
                onClick={() => handleOpenProject(project)}
                className="relative w-full h-56 rounded-2xl overflow-hidden mb-4 border border-white/10 bg-black/60 group-hover:border-cyan-500/40 transition-colors cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 border border-white/10 text-[11px] font-semibold text-cyan-300 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick View</span>
                </div>
              </div>

              {/* Tech Stack Badges */}
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

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <button
                onClick={() => handleOpenProject(project)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:scale-102"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Details</span>
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2.5 rounded-xl glass-panel border border-white/20 hover:border-cyan-400 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4 text-gray-300" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Toggle Button */}
      {filteredProjects.length > 4 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-2xl glass-panel border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-bold text-xs flex items-center space-x-2 transition-all hover:bg-cyan-950/40"
          >
            <span>{showAll ? 'Show Fewer Projects' : `See More Mobile Projects (${filteredProjects.length - 4} More)`}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* GitHub More Projects Callout Banner */}
      <div className="mt-8 p-4 rounded-2xl glass-panel border border-white/10 bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-purple-950/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
            <GithubIcon className="w-5 h-5 text-gray-200" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">Want to explore more mobile apps &amp; experiments?</h4>
            <p className="text-[11px] text-gray-400">Browse more open-source Flutter, iOS Swift &amp; KMP repositories on GitHub</p>
          </div>
        </div>

        <a
          href="https://github.com/ruvindu-dulaksha?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs flex items-center space-x-2 shadow-md hover:scale-105 transition-all whitespace-nowrap"
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
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative glass-panel p-6 sm:p-8 border border-cyan-400/40 rounded-[28px] max-w-2xl w-full bg-[#0D1627] flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.3)] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/10 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center space-x-2 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-full w-fit mb-3">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">{selectedProject.platform}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">{selectedProject.longDescription}</p>

              {/* Mockup Preview Image with Screenshot switcher if available */}
              <div className="mb-6">
                <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-cyan-500/30 bg-black flex items-center justify-center p-2 mb-3">
                  <Image
                    src={activeScreenshot || selectedProject.image}
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
                      if (selectedProject.id === 'mobile-freshshop') {
                        label = ['Intro Screen', 'Catalog Home', 'Shopping Cart'][sIdx] || label;
                      } else if (selectedProject.id === 'mobile-lankaride') {
                        label = ['App Showcase', 'Zone Scanner Map', 'AI Risk Assessment'][sIdx] || label;
                      } else if (selectedProject.id === 'mobile-classifier') {
                        label = ['Splash Screen', 'Selection Screen', 'AI Result & Confidence'][sIdx] || label;
                      } else if (selectedProject.id === 'mobile-vistabids') {
                        label = ['Auction Details & Win', 'Property Listings', 'Interactive MapKit View'][sIdx] || label;
                      } else if (selectedProject.id === 'mobile-kmp-chatbot') {
                        label = ['AI Assistant Dashboard', 'Gemini Chat Stream', 'Splash Screen'][sIdx] || label;
                      } else if (selectedProject.id === 'mobile-savoease') {
                        label = ['Menu Catalog', 'Checkout Cart Drawer', 'Login & Auth', 'Splash Screen'][sIdx] || label;
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

              {/* Key Features List */}
              <div className="mb-6">
                <h5 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Features &amp; Architecture</span>
                </h5>
                <div className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-200">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.01]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Project on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
