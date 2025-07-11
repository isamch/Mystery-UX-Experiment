import React from 'react';
import { GlitchText } from './GlitchText';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="relative py-12 px-4 border-t border-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <GlitchText 
              text="MYSTERY UX" 
              className="text-2xl font-bold mb-4"
            />
            <p className="text-gray-400 text-sm">
              Exploring the boundaries of digital art and experimental design.
              Where creativity meets technology in perfect harmony.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-cyan-400 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-cyan-400 font-bold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-cyan-400/50 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
            <span>© {currentYear} Mystery UX. Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>and lots of</span>
            <span className="text-cyan-400 font-mono">code</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Exploring the digital unknown, one pixel at a time.
          </p>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-30" />
    </footer>
  );
}; 