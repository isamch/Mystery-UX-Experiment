import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  vx: number;
  vy: number;
}

interface ParticleCursorProps {
  position: { x: number; y: number };
}

export const ParticleCursor: React.FC<ParticleCursorProps> = ({ position }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = () => {
      const particle: Particle = {
        id: Date.now() + Math.random(),
        x: position.x,
        y: position.y,
        opacity: 1,
        size: Math.random() * 4 + 2,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      };
      return particle;
    };

    const interval = setInterval(() => {
      if (position.x !== 0 || position.y !== 0) {
        setParticles(prev => [...prev, createParticle()]);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [position]);

  useEffect(() => {
    const updateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            opacity: particle.opacity - 0.02,
            size: particle.size * 0.98,
          }))
          .filter(particle => particle.opacity > 0)
      );
    };

    const animationFrame = requestAnimationFrame(function animate() {
      updateParticles();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <div
        className="absolute w-4 h-4 bg-cyan-400 rounded-full mix-blend-difference transition-transform duration-100"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transform: 'scale(1)',
        }}
      />
      
      {/* Cursor ring */}
      <div
        className="absolute w-8 h-8 border border-cyan-400/50 rounded-full mix-blend-difference transition-all duration-200"
        style={{
          left: position.x - 16,
          top: position.y - 16,
        }}
      />
      
      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mix-blend-screen"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};