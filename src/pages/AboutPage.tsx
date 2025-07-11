import React, { useEffect, useRef } from 'react';
import { GlitchText } from '../components/GlitchText';
import { User, Code, Target, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const skills = [
    { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', level: 90, color: 'from-purple-400 to-pink-500' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-teal-500' },
    { name: 'Python', level: 80, color: 'from-yellow-400 to-orange-500' },
    { name: 'Three.js', level: 75, color: 'from-red-400 to-pink-500' },
    { name: 'AI/ML', level: 70, color: 'from-indigo-400 to-purple-500' }
  ];

  const experiences = [
    {
      year: '2020-2022',
      title: 'Frontend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Built responsive web applications using React and modern JavaScript frameworks.'
    },
    {
      year: '2022-2023',
      title: 'Creative Developer',
      company: 'Digital Arts Studio',
      description: 'Created interactive digital experiences and experimental web applications.'
    },
    {
      year: '2023-Present',
      title: 'Full Stack Engineer',
      company: 'Future Systems Lab',
      description: 'Developing cutting-edge applications with AI integration and advanced visual effects.'
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <GlitchText 
            text="ABOUT ME" 
            className="text-4xl md:text-6xl font-bold mb-4"
          />
          <p className="text-cyan-400 text-lg opacity-80">
            Digital explorer and creative technologist
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Section */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <User size={32} className="text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-cyan-400">Who I Am</h2>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate developer and digital artist who believes in pushing the boundaries 
                of what's possible on the web. My journey began with simple HTML pages and has evolved 
                into creating immersive, interactive experiences that blur the line between art and technology.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I specialize in creating experimental user interfaces, interactive animations, and 
                cutting-edge web applications that challenge conventional design paradigms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, experimenting with 
                AI and machine learning, or creating digital art that pushes creative boundaries.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Code size={32} className="text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-cyan-400">Skills & Expertise</h2>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div
          className={`transform transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
            <div className="flex items-center mb-8">
              <Target size={32} className="text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold text-cyan-400">Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-24 text-cyan-400 font-mono text-sm">
                    {exp.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div
          className={`mt-16 text-center transform transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <Award size={32} className="text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold text-cyan-400">My Philosophy</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              "I believe that technology should not just solve problems, but also inspire wonder and 
              creativity. Every line of code is an opportunity to create something beautiful, 
              something that makes people pause and think, 'How did they do that?'"
            </p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-30" />
    </div>
  );
}; 