import React, { useEffect, useState } from 'react';
import { GlitchText } from './GlitchText';
import { ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const parallaxOffset = scrollY * 0.5;
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      {/* Interactive Background Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10 px-4 relative">
        <div className="mb-8">
          <GlitchText 
            text="ENTER THE VOID" 
            className="text-6xl md:text-8xl font-bold mb-4 animate-float"
          />
          <p className="text-xl md:text-2xl text-cyan-400 opacity-80 animate-pulse">
            Where reality bends and pixels dance
          </p>
        </div>
        
        {/* Interactive Controls */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-4 rounded-full bg-gray-900/50 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-110 group"
          >
            {isPlaying ? (
              <Pause size={24} className="text-cyan-400 group-hover:text-white transition-colors duration-300" />
            ) : (
              <Play size={24} className="text-cyan-400 group-hover:text-white transition-colors duration-300" />
            )}
          </button>
          
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-4 rounded-full bg-gray-900/50 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 group"
          >
            {isMuted ? (
              <VolumeX size={24} className="text-purple-400 group-hover:text-white transition-colors duration-300" />
            ) : (
              <Volume2 size={24} className="text-purple-400 group-hover:text-white transition-colors duration-300" />
            )}
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="hidden-reveal group cursor-pointer">
          <div className="w-32 h-32 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            <div className="absolute inset-2 bg-black rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ChevronDown 
                size={32} 
                className="text-white group-hover:text-cyan-400 transition-colors duration-300 animate-bounce"
              />
            </div>
          </div>
          <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll to explore
          </p>
        </div>
        
        {/* Status Indicators */}
        <div className="absolute bottom-8 left-8 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">System Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">Neural Network Active</span>
          </div>
        </div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 text-xs font-mono animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};