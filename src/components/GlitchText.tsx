import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: number;
  frequency?: number;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = '',
  intensity = 0.1,
  frequency = 2000
}) => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [glitchText, setGlitchText] = useState(text);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789';
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < intensity) {
        setGlitchActive(true);
        
        // Create glitch effect
        const glitched = text.split('').map(char => 
          Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('');
        
        setGlitchText(glitched);
        
        // Random offset for glitch effect
        setGlitchOffset({
          x: (Math.random() - 0.5) * 4,
          y: (Math.random() - 0.5) * 2
        });
        
        setTimeout(() => {
          setGlitchActive(false);
          setGlitchText(text);
          setGlitchOffset({ x: 0, y: 0 });
        }, 100 + Math.random() * 200);
      }
    }, frequency);
    
    return () => clearInterval(interval);
  }, [text, intensity, frequency]);
  
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span 
        className={`relative z-10 transition-all duration-100 ${
          glitchActive 
            ? 'text-red-500 animate-pulse' 
            : 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'
        }`}
        style={{
          transform: glitchActive ? `translate(${glitchOffset.x}px, ${glitchOffset.y}px)` : 'translate(0, 0)',
          filter: glitchActive ? 'blur(0.5px)' : 'blur(0px)'
        }}
      >
        {glitchText}
      </span>
      
      {/* Glitch layers */}
      {glitchActive && (
        <>
          {/* Cyan layer */}
          <span 
            className="absolute top-0 left-0 text-cyan-400 opacity-80 animate-pulse"
            style={{ 
              transform: `translate(${glitchOffset.x + 2}px, ${glitchOffset.y - 1}px)`,
              filter: 'blur(0.5px)'
            }}
          >
            {glitchText}
          </span>
          
          {/* Purple layer */}
          <span 
            className="absolute top-0 left-0 text-purple-500 opacity-60 animate-pulse"
            style={{ 
              transform: `translate(${glitchOffset.x - 1}px, ${glitchOffset.y + 1}px)`,
              filter: 'blur(0.3px)'
            }}
          >
            {glitchText}
          </span>
          
          {/* Red layer */}
          <span 
            className="absolute top-0 left-0 text-red-500 opacity-40 animate-pulse"
            style={{ 
              transform: `translate(${glitchOffset.x + 1}px, ${glitchOffset.y + 2}px)`,
              filter: 'blur(0.7px)'
            }}
          >
            {glitchText}
          </span>
        </>
      )}
      
      {/* Hover effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-sm" />
      </div>
      
      {/* Scanning line effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          animation: 'slide 2s linear infinite',
          background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent)'
        }}
      />
    </div>
  );
};