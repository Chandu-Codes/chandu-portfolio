import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { name, contact } = PORTFOLIO_DATA.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-bg-dark border-t border-gray-900 py-12 relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Brand Logo */}
        <div
          onClick={scrollToTop}
          className="flex items-center space-x-2 cursor-pointer group mb-6"
        >
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-text-light text-sm shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            BC
          </div>
          <span className="font-sans font-bold text-base text-text-light tracking-wide group-hover:text-accent transition-colors duration-300">
            CHANDU<span className="text-primary font-mono">.dev</span>
          </span>
        </div>

        {/* Roles listing */}
        <p className="text-sm font-semibold text-text-light tracking-wider uppercase mb-4 text-center">
          Full Stack Developer <span className="text-primary mx-1">|</span> AI Enthusiast <span className="text-primary mx-1">|</span> Prompt Engineer
        </p>

        {/* Quote */}
        <p className="text-xs sm:text-sm text-text-muted text-center max-w-md leading-relaxed italic mb-8 px-4">
          "Transforming ideas into intelligent software solutions through Full Stack Development and Artificial Intelligence."
        </p>

        {/* Social Icons row */}
        <div className="flex items-center space-x-4 mb-8">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-surface-dark border border-gray-800 text-text-muted hover:text-accent hover:border-blue-500/30 transition-all duration-300 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-surface-dark border border-gray-800 text-text-muted hover:text-accent hover:border-blue-500/30 transition-all duration-300 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="p-2.5 rounded-lg bg-surface-dark border border-gray-800 text-text-muted hover:text-accent hover:border-blue-500/30 transition-all duration-300 shadow-sm"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright notice */}
        <div className="text-xs text-text-muted text-center flex flex-wrap items-center justify-center gap-1.5 font-mono">
          <span>&copy; {new Date().getFullYear()} {name}. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center">
            Built with <Heart className="h-3.5 w-3.5 text-red-500 mx-1 fill-current animate-pulse" /> using React, TS & Tailwind v4
          </span>
        </div>
      </div>
    </footer>
  );
};
