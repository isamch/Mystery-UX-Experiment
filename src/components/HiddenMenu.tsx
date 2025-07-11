import React from 'react';
import { X, Home, User, Briefcase, Mail, Settings } from 'lucide-react';
import { Page } from './Router';

interface HiddenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onPageChange: (page: Page) => void;
  currentPage: Page;
}

const menuItems = [
  { icon: <Home size={20} />, label: 'Home', page: 'home' as Page },
  { icon: <User size={20} />, label: 'About', page: 'about' as Page },
  { icon: <Briefcase size={20} />, label: 'Projects', page: 'projects' as Page },
  { icon: <Mail size={20} />, label: 'Contact', page: 'contact' as Page },
  { icon: <Settings size={20} />, label: 'Config', page: 'home' as Page },
];

export const HiddenMenu: React.FC<HiddenMenuProps> = ({ isOpen, onClose, onPageChange, currentPage }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-400/20 transition-transform duration-500 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              NAVIGATION
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Menu Items */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      onPageChange(item.page);
                      onClose();
                    }}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-400/10 transition-all duration-300 group ${
                      currentPage === item.page ? 'text-cyan-400 bg-cyan-400/10' : ''
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <span className={`group-hover:text-white transition-colors duration-300 ${
                      currentPage === item.page ? 'text-cyan-400' : 'text-cyan-400'
                    }`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    <div className="ml-auto w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Version 2.0.1</p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};