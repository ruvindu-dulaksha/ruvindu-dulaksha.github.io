'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Maximize2, ShieldCheck, ChevronDown, ChevronUp, X } from 'lucide-react';
import { CERTIFICATIONS_DATA, Certification } from '@/data/portfolio-data';

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCerts = showAll ? CERTIFICATIONS_DATA : CERTIFICATIONS_DATA.slice(0, 4);

  return (
    <section id="certifications" className="mb-10 scroll-mt-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">Industry Certifications</h3>
            <p className="text-xs text-cyan-400 font-medium">Verified professional credentials & licenses</p>
          </div>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {showAll ? 'Show Less' : 'View All >'}
        </button>
      </div>

      {/* Certification Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedCerts.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-5 border border-blue-500/20 rounded-[24px] bg-[#0F172A]/80 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group shadow-md"
          >
            <div>
              {/* Header & Issuer */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center space-x-1.5 mb-1">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider">{cert.issuer}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="p-2 rounded-xl glass-panel border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400 transition-colors flex-shrink-0"
                  title="Zoom Certificate"
                >
                  <Maximize2 className="w-4 h-4 text-cyan-400" />
                </button>
              </div>

              {/* Certificate Document Thumbnail Preview */}
              <div 
                onClick={() => setSelectedCert(cert)}
                className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 border border-white/10 cursor-pointer group-hover:border-cyan-500/40 transition-colors"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
                  <span className="px-3 py-1.5 rounded-full bg-cyan-500/90 text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Click to Zoom
                  </span>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-lg bg-blue-950/60 border border-blue-500/20 text-[10px] font-semibold text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-[11px] text-gray-400 font-mono">{cert.issueDate}</span>
              
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-xs flex items-center space-x-1.5 transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      {CERTIFICATIONS_DATA.length > 4 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-2xl glass-panel border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-bold text-xs flex items-center space-x-2 transition-all hover:bg-cyan-950/40"
          >
            <span>{showAll ? 'Show Fewer Certificates' : `See More Certificates (${CERTIFICATIONS_DATA.length - 4} More)`}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative glass-panel p-6 border border-cyan-400/40 rounded-[28px] max-w-2xl w-full bg-[#0D1627] flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/10 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">{selectedCert.issuer}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{selectedCert.title}</h3>

              {/* Full Image Preview */}
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-cyan-500/30 mb-4 bg-black">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-between pt-2 text-xs">
                <span className="text-gray-400 font-mono">Credential ID: {selectedCert.credentialId}</span>
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold flex items-center space-x-1.5"
                >
                  <span>Verify Credential</span>
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
