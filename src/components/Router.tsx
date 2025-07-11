import React from 'react';
import { HomePage } from '../pages/HomePage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';

export type Page = 'home' | 'projects' | 'about' | 'contact';

interface RouterProps {
  currentPage: Page;
}

export const Router: React.FC<RouterProps> = ({ currentPage }) => {
  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'projects':
      return <ProjectsPage />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}; 