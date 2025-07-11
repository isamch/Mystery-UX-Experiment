import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { useScrollEffect } from '../hooks/useScrollEffect';

export const ContactPage: React.FC = () => {
  const scrollY = useScrollEffect();

  return (
    <div className="min-h-screen">
      <ContactSection scrollY={scrollY} />
    </div>
  );
}; 