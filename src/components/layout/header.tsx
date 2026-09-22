'use client';

import React, { useState } from 'react';
import { Heart, Star, Code, FolderCheck, MapPin, Menu, X, ArrowLeft } from 'lucide-react';
import { PORTFOLIO_OWNER } from '@/data/portfolio-data';
import MusicPlayer from '../ui/music-player';

interface HeaderProps {
  onToggleMobileNav?: () => void;
}

export default function Header({ onToggleMobileNav }: HeaderProps) {
  const [likes, setLikes] = useState(PORTFOLIO_OWNER.stats.likes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  return (
    <header className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6 z-10 relative">
      {/* Top Bar Left: Back & Stats Pill */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Mobile Nav Toggle */}
        <button 
          onClick={onToggleMobileNav}
          className="lg:hidden p-2.5 rounded-xl glass-panel border border-blue-500/30 text-white hover:bg-white/10"
        >
          <Menu className="w-5 h-5 text-cyan-400" />
        </button>

        {/* Live Counters */}
        <div className="flex items-center space-x-2 glass-panel px-3 py-2 border border-white/10 rounded-2xl bg-[#0D1527]/80 text-xs">
          <button 
            onClick={handleLike}
            className={`flex items-center space-x-1 transition-colors ${hasLiked ? 'text-rose-500' : 'text-gray-400 hover:text-rose-400'}`}
          >
            <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-rose-500' : ''}`} />
            <span className="font-bold text-white">{likes}</span>
          </button>

          <span className="text-gray-600">|</span>

          <div className="flex items-center space-x-1 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="font-bold text-white">{PORTFOLIO_OWNER.stats.stars}</span>
          </div>

          <span className="text-gray-600">|</span>

          <div className="flex items-center space-x-1 text-cyan-400">
            <Code className="w-3.5 h-3.5" />
            <span className="font-bold text-white">{PORTFOLIO_OWNER.stats.commitsThisYear}</span>
          </div>

          <span className="text-gray-600">|</span>

          <div className="flex items-center space-x-1 text-blue-400">
            <FolderCheck className="w-3.5 h-3.5" />
            <span className="font-bold text-white">{PORTFOLIO_OWNER.stats.projectsCompleted}</span>
          </div>
        </div>

        {/* Location Badge */}
        <div className="hidden sm:flex items-center space-x-1.5 glass-panel px-3 py-2 border border-white/10 rounded-2xl text-xs text-gray-300">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>{PORTFOLIO_OWNER.contact.location}</span>
        </div>
      </div>

      {/* Top Bar Right: Royalty-Free Music Player */}
      <div className="w-full md:w-auto md:min-w-[340px]">
        <MusicPlayer />
      </div>
    </header>
  );
}
