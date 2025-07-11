import React, { useState, useEffect } from 'react';
import { Eye, Zap, Cpu, Gamepad2, Wifi, Radio, ExternalLink, Github } from 'lucide-react';

interface GridItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  hiddenText: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    title: 'Neural Network',
    description: 'AI consciousness awakening',
    icon: <Cpu size={24} />,
    color: 'from-cyan-400 to-blue-500',
    hiddenText: 'The machine learns to dream',
    technologies: ['TensorFlow', 'Python', 'React'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Quantum Vision',
    description: 'See beyond dimensions',
    icon: <Eye size={24} />,
    color: 'from-purple-400 to-pink-500',
    hiddenText: 'Reality is just a simulation',
    technologies: ['WebGL', 'Three.js', 'GLSL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Energy Core',
    description: 'Infinite power source',
    icon: <Zap size={24} />,
    color: 'from-yellow-400 to-orange-500',
    hiddenText: 'Harness the void energy',
    technologies: ['Node.js', 'WebSocket', 'Canvas'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Control Matrix',
    description: 'Master the digital realm',
    icon: <Gamepad2 size={24} />,
    color: 'from-green-400 to-teal-500',
    hiddenText: 'You are the architect',
    technologies: ['React', 'TypeScript', 'GSAP'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Signal Void',
    description: 'Transmit across realities',
    icon: <Wifi size={24} />,
    color: 'from-red-400 to-pink-500',
    hiddenText: 'Messages from the future',
    technologies: ['WebRTC', 'P2P', 'WebRTC'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Echo Chamber',
    description: 'Resonance frequencies',
    icon: <Radio size={24} />,
    color: 'from-indigo-400 to-purple-500',
    hiddenText: 'Listen to the cosmic whispers',
    technologies: ['Web Audio API', 'Oscillator', 'FFT'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const ExperimentalGrid: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const gridElement = document.querySelector('.experimental-grid');
    if (gridElement) {
      observer.observe(gridElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="experimental-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gridItems.map((item, index) => (
        <div
          key={item.id}
          className={`relative group cursor-pointer h-64 overflow-hidden rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-700 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          } hover:scale-105`}
          style={{
            transitionDelay: `${index * 100}ms`
          }}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
          
          {/* Interactive background effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.3) 0%, transparent 50%)`
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div>
              <div className="text-cyan-400 mb-4 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                {item.description}
              </p>
            </div>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ transitionDelay: `${techIndex * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Hidden text that appears on hover */}
            <div className={`transform transition-all duration-500 ${
              hoveredItem === item.id 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-4 opacity-0'
            }`}>
              <p className="text-sm text-cyan-400 font-mono border-t border-cyan-400/30 pt-4 mb-4">
                {item.hiddenText}
              </p>
              
              {/* Action buttons */}
              <div className="flex space-x-2">
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    className="p-2 bg-cyan-400/20 border border-cyan-400/30 rounded hover:bg-cyan-400/30 transition-all duration-300 transform hover:scale-110"
                  >
                    <ExternalLink size={16} className="text-cyan-400" />
                  </a>
                )}
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    className="p-2 bg-purple-400/20 border border-purple-400/30 rounded hover:bg-purple-400/30 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={16} className="text-purple-400" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
          
          {/* Animated border */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-pulse" 
                 style={{ 
                   background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.5), transparent)',
                   animation: 'slide 2s linear infinite'
                 }} />
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(5)].map((_, i) => (
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
        </div>
      ))}
    </div>
  );
};