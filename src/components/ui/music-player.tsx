'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { MUSIC_TRACKS } from '@/data/portfolio-data';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const currentTrack = MUSIC_TRACKS[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => handleNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex]);

  // Waveform canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const barCount = 32;
      const barWidth = width / barCount - 2;

      for (let i = 0; i < barCount; i++) {
        let barHeight = 4;
        if (isPlaying) {
          barHeight = Math.abs(Math.sin((step + i * 0.4)) * (height * 0.75)) + 4;
        } else {
          barHeight = Math.abs(Math.sin(i * 0.5) * 6) + 3;
        }

        const x = i * (barWidth + 2);
        const y = (height - barHeight) / 2;

        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, '#38BDF8');
        gradient.addColorStop(1, '#3B82F6');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 2);
        ctx.fill();
      }

      step += isPlaying ? 0.08 : 0.02;
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % MUSIC_TRACKS.length);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + MUSIC_TRACKS.length) % MUSIC_TRACKS.length);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="glass-panel p-3.5 sm:p-4 border border-blue-500/20 rounded-[24px] bg-gradient-to-r from-[#0E172A]/90 via-[#0B132B]/90 to-[#111827]/90 shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col justify-between max-w-full overflow-hidden">
      <audio ref={audioRef} src={currentTrack.url} preload="none" />

      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
            <Disc className={`w-5 h-5 text-white ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Now Playing</span>
              {isPlaying && (
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
              )}
            </div>
            <h5 className="text-xs font-bold text-white truncate">{currentTrack.title}</h5>
            <p className="text-[10px] text-gray-400 truncate">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Waveform Canvas */}
        <div className="hidden sm:block w-32 h-8 bg-gray-900/60 rounded-lg p-1 border border-white/5 flex-shrink-0">
          <canvas ref={canvasRef} width={120} height={24} className="w-full h-full" />
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5 text-gray-300">
        <span className="text-[10px] text-gray-400 font-mono w-9">{formatTime(currentTime)}</span>

        <div className="flex items-center space-x-2">
          <button 
            onClick={handlePrev}
            className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title="Previous Track"
          >
            <SkipBack className="w-3.5 h-3.5" />
          </button>
          
          <button 
            onClick={togglePlay}
            className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md hover:scale-105 active:scale-95 transition-transform"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
          </button>

          <button 
            onClick={handleNext}
            className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title="Next Track"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleMute}
            className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
          </button>
          <span className="text-[10px] text-gray-400 font-mono w-9 text-right">{currentTrack.duration}</span>
        </div>
      </div>
    </div>
  );
}
