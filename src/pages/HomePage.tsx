import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ExperimentalGrid } from '../components/ExperimentalGrid';
import { GlitchText } from '../components/GlitchText';
import { ScrollDistortion } from '../components/ScrollDistortion';
import { FeaturesSection } from '../components/FeaturesSection';
import { TimelineSection } from '../components/TimelineSection';
import { ContactSection } from '../components/ContactSection';
import { useScrollEffect } from '../hooks/useScrollEffect';

export const HomePage: React.FC = () => {
  const scrollY = useScrollEffect();

  return (
    <main className="relative">
      <HeroSection scrollY={scrollY} />
      
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GlitchText 
              text="EXPERIMENTAL ZONE" 
              className="text-4xl md:text-6xl font-bold mb-4"
            />
            <p className="text-cyan-400 text-lg opacity-80">
              Hover to reveal hidden dimensions
            </p>
          </div>
          
          <ExperimentalGrid />
        </div>
      </section>
      
      <ScrollDistortion scrollY={scrollY} />
      
      <FeaturesSection scrollY={scrollY} />
      
      <TimelineSection scrollY={scrollY} />
      
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <GlitchText 
            text="BEYOND REALITY" 
            className="text-5xl md:text-7xl font-bold mb-8"
          />
          <p className="text-xl text-gray-300 leading-relaxed">
            Experience the intersection of digital art and experimental design.
            Each interaction unveils new layers of the unknown.
          </p>
        </div>
      </section>
      
      <ContactSection scrollY={scrollY} />
    </main>
  );
}; 