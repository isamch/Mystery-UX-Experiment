import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ParticleCursor } from './components/ParticleCursor';
import { HiddenMenu } from './components/HiddenMenu';
import { useCursorEffect } from './hooks/useCursorEffect';
import { Router, Page } from './components/Router';
import { Footer } from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const cursorPosition = useCursorEffect();

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'default';
    };
  }, []);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <ParticleCursor position={cursorPosition} />
      <HiddenMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      
      <div className="relative z-10">
        <Header 
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        
        <Router currentPage={currentPage} />
        
        <Footer />
      </div>
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-cyan-900/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>
    </div>
  );
}

export default App;