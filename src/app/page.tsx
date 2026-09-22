'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import SmoothScrollProvider from '@/components/layout/smooth-scroll';
import Sidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import ExperienceSection from '@/components/sections/experience-section';
import EducationSection from '@/components/sections/education-section';
import CertificationsSection from '@/components/sections/certifications-section';
import MobileProjectsSection from '@/components/sections/mobile-projects-section';
import WordPressProjectsSection from '@/components/sections/wordpress-projects-section';
import OtherProjectsSection from '@/components/sections/other-projects-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'education', 'certifications', 'mobile-projects', 'wordpress-projects', 'other-projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    setActiveSection('contact');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#070B14] text-gray-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">


        {/* Dashboard Outer Container */}
        <div className="max-w-[1536px] mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Desktop */}
            <div className="hidden lg:block">
              <Sidebar 
                activeSection={activeSection} 
                setActiveSection={setActiveSection} 
              />
            </div>

            {/* Mobile Nav Drawer Overlay */}
            {mobileNavOpen && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden flex">
                <div className="w-80 max-w-full bg-[#0B1222] p-4 h-full overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-white">Menu</span>
                    <button 
                      onClick={() => setMobileNavOpen(false)}
                      className="text-gray-400 p-1.5 rounded-lg bg-white/10"
                    >
                      ✕
                    </button>
                  </div>
                  <Sidebar 
                    activeSection={activeSection} 
                    setActiveSection={(section) => {
                      setActiveSection(section);
                      setMobileNavOpen(false);
                    }} 
                  />
                </div>
                <div className="flex-1" onClick={() => setMobileNavOpen(false)} />
              </div>
            )}

            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
              {/* Header Top Bar */}
              <Header onToggleMobileNav={() => setMobileNavOpen(true)} />

              {/* Dashboard Sections */}
              <HeroSection onContactClick={scrollToContact} />
              
              <ExperienceSection />

              <EducationSection />

              <CertificationsSection />

              <MobileProjectsSection />

              <WordPressProjectsSection />

              <OtherProjectsSection />
              
              <ContactSection />

              {/* Bottom Footer */}
              <footer className="mt-16 pt-8 pb-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                <div className="flex items-center space-x-3">
                  <div className="relative w-8 h-8 rounded-xl overflow-hidden bg-white/5 border border-cyan-400/40 p-0.5 flex items-center justify-center">
                    <Image 
                      src="/rd-logo.png" 
                      alt="RD Logo" 
                      width={28} 
                      height={28} 
                      className="object-contain" 
                    />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Ruvindu Dulaksha</span>
                    <span className="text-[11px] text-gray-500">Mobile &amp; WordPress Developer</span>
                  </div>
                </div>
                
                <p className="text-[11px] text-gray-500 text-center sm:text-right">
                  © 2026 K. D. Ruvindu Dulaksha. All rights reserved.
                </p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </SmoothScrollProvider>
  );
}
