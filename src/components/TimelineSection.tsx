import React, { useEffect, useRef } from 'react';
import { GlitchText } from './GlitchText';
import { Calendar, Clock, Target, Award } from 'lucide-react';

const timelineEvents = [
  {
    year: '2024',
    title: 'Project Genesis',
    description: 'The beginning of our experimental journey into digital art and interactive design.',
    icon: <Calendar size={24} />,
    color: 'from-cyan-400 to-blue-500'
  },
  {
    year: '2025',
    title: 'Innovation Phase',
    description: 'Pushing boundaries with advanced animations and cutting-edge technologies.',
    icon: <Target size={24} />,
    color: 'from-purple-400 to-pink-500'
  },
  {
    year: '2026',
    title: 'Future Vision',
    description: 'Envisioning the next generation of digital experiences and user interactions.',
    icon: <Clock size={24} />,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    year: '2027',
    title: 'Mastery Achieved',
    description: 'Reaching new heights in creative expression and technical excellence.',
    icon: <Award size={24} />,
    color: 'from-green-400 to-teal-500'
  }
];

export const TimelineSection: React.FC = () => {
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
            text="OUR JOURNEY" 
            className="text-4xl md:text-6xl font-bold mb-4"
          />
          <p className="text-cyan-400 text-lg opacity-80">
            Timeline of innovation and discovery
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-30" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black z-10" />
                
                {/* Content card */}
                <div
                  className={`w-5/12 p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-700 transform group ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <div className="text-cyan-400 mr-3 group-hover:text-white transition-colors duration-300">
                        {event.icon}
                      </div>
                      <span className="text-2xl font-bold text-cyan-400 group-hover:text-white transition-colors duration-300">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-10 left-10 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-30" />
    </section>
  );
}; 