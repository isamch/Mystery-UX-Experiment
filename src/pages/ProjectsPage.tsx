import React, { useEffect, useRef, useState } from 'react';
import { GlitchText } from '../components/GlitchText';
import { ExternalLink, Github, Eye, Code, Palette, Zap, Cpu, Radio, Wifi, Gamepad2 } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Neural Interface',
    description: 'Advanced AI-powered user interface with real-time learning capabilities.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'TypeScript', 'AI/ML', 'WebGL'],
    category: 'AI/ML',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-cyan-400 to-blue-500',
    icon: <Cpu />
  },
  {
    id: 2,
    title: 'Quantum Dashboard',
    description: 'Futuristic dashboard with quantum-inspired visualizations and real-time data.',
    image: '/api/placeholder/400/300',
    technologies: ['Vue.js', 'D3.js', 'WebSocket', 'Three.js'],
    category: 'Data Viz',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-purple-400 to-pink-500',
    icon: <Eye />
  },
  {
    id: 3,
    title: 'Cyberpunk Portfolio',
    description: 'Interactive portfolio with glitch effects and cyberpunk aesthetics.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'GSAP', 'CSS3', 'Canvas'],
    category: 'Creative',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-yellow-400 to-orange-500',
    icon: <Palette />
  },
  {
    id: 4,
    title: 'Virtual Reality Hub',
    description: 'Immersive VR experience with WebXR and spatial audio.',
    image: '/api/placeholder/400/300',
    technologies: ['WebXR', 'Three.js', 'Web Audio API', 'WebGL'],
    category: 'VR/AR',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-green-400 to-teal-500',
    icon: <Zap />
  },
  {
    id: 5,
    title: 'Blockchain Explorer',
    description: 'Real-time blockchain data visualization with interactive charts.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Ethereum', 'D3.js', 'Web3'],
    category: 'Blockchain',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-red-400 to-pink-500',
    icon: <Code />
  },
  {
    id: 6,
    title: 'AI Art Generator',
    description: 'Creative AI tool that generates unique digital artwork.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'TensorFlow', 'React', 'Canvas'],
    category: 'AI/ML',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-indigo-400 to-purple-500',
    icon: <Cpu />
  },
  {
    id: 7,
    title: 'Signal Void',
    description: 'Peer-to-peer communication platform with futuristic UI.',
    image: '/api/placeholder/400/300',
    technologies: ['WebRTC', 'React', 'Node.js'],
    category: 'Blockchain',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-pink-400 to-red-500',
    icon: <Wifi />
  },
  {
    id: 8,
    title: 'Echo Chamber',
    description: 'Audio visualization and manipulation tool.',
    image: '/api/placeholder/400/300',
    technologies: ['Web Audio API', 'React', 'D3.js'],
    category: 'Creative',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-indigo-400 to-blue-500',
    icon: <Radio />
  },
  {
    id: 9,
    title: 'Control Matrix',
    description: 'Digital realm control panel with advanced animations.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'TypeScript', 'GSAP'],
    category: 'VR/AR',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-green-400 to-cyan-500',
    icon: <Gamepad2 />
  },
  {
    id: 10,
    title: 'Quantum Vision',
    description: 'See beyond dimensions with quantum-inspired effects.',
    image: '/api/placeholder/400/300',
    technologies: ['WebGL', 'Three.js', 'GLSL'],
    category: 'Data Viz',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-purple-400 to-cyan-500',
    icon: <Eye />
  }
];

const categories = ['All', 'AI/ML', 'Data Viz', 'Creative', 'VR/AR', 'Blockchain'];

export const ProjectsPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Filter projects by selected category
  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div ref={sectionRef} className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <GlitchText 
            text="PROJECTS" 
            className="text-4xl md:text-6xl font-bold mb-4"
          />
          <p className="text-cyan-400 text-lg opacity-80">
            Exploring the boundaries of digital innovation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 ${
                selectedCategory === category ? 'bg-cyan-400/10 text-cyan-400 border-cyan-400/50' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-600 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-cyan-400 font-mono">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-30" />
    </div>
  );
}; 