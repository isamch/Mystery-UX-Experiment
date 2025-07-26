import React from 'react';
import { Menu, Home, Briefcase, User, Mail } from 'lucide-react';
import { Page } from './Router';

interface HeaderProps {
  onMenuToggle: () => void;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const pageIcons = {
  home: <Home size={20} />,
  projects: <Briefcase size={20} />,
  about: <User size={20} />,
  contact: <Mail size={20} />
};

const pageTitles = {
  home: 'Home',
  projects: 'Projects', 
  about: 'About',
  contact: 'Contact'
};

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, currentPage, onPageChange }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/20 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div 
              className="cursor-pointer group"
              onClick={() => onPageChange('home')}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-purple-600 transition-all duration-300">
                IC UX
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
              <span className="text-cyan-400">{pageIcons[currentPage]}</span>
              <span>{pageTitles[currentPage]}</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {Object.entries(pageTitles).map(([page, title]) => (
              <button
                key={page}
                onClick={() => onPageChange(page as Page)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === page
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50'
                }`}
              >
                <span>{pageIcons[page as Page]}</span>
                <span>{title}</span>
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};