import React, { useEffect, useRef } from 'react';
import { GlitchText } from './GlitchText';
import { Zap, Eye, Cpu, Shield, Rocket, Globe } from 'lucide-react';


const features = [
  {
    icon: <Zap size={32} />,
    title: 'Lightning Fast',
    description: 'Optimized performance with cutting-edge technologies',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: <Eye size={32} />,
    title: 'Visual Mastery',
    description: 'Stunning animations and visual effects',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: <Cpu size={32} />,
    title: 'AI Powered',
    description: 'Intelligent interactions and adaptive design',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: <Shield size={32} />,
    title: 'Secure & Reliable',
    description: 'Built with security and stability in mind',
    color: 'from-green-400 to-teal-500'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Future Ready',
    description: 'Scalable architecture for tomorrow\'s needs',
    color: 'from-red-400 to-pink-500'
  },
  {
    icon: <Globe size={32} />,
    title: 'Global Reach',
    description: 'Accessible from anywhere in the world',
    color: 'from-indigo-400 to-purple-500'
  }
];

export const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

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

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <GlitchText 
            text="CORE FEATURES" 
            className="text-4xl md:text-6xl font-bold mb-4"
          />
          <p className="text-cyan-400 text-lg opacity-80">
            Discover what makes this experience unique
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-cyan-400/50 transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`text-cyan-400 mb-4 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-30" />
    </section>
  );
}; 