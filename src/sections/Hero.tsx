import React from 'react';
import { ParticleCanvas } from '../components/ParticleCanvas';
import { RoleSwitcher } from '../components/RoleSwitcher';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { ArrowDown, FileText, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { name, tagline, roles } = PORTFOLIO_DATA.personalInfo;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark pt-16"
    >
      {/* Particle Canvas Backdrop */}
      <ParticleCanvas />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 z-0 pointer-events-none" />

      {/* Radial glow around center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none animate-pulse-slow z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Entrance Tech Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-xs sm:text-sm font-medium text-accent tracking-wider uppercase mb-6 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Available for Internships & Placement Roles</span>
        </motion.div>

        {/* Developer Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-text-light">{name.split(' ')[0]}</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            {name.split(' ')[1]}
          </span>
        </motion.h1>

        {/* Role Switcher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-3xl font-medium tracking-wide mb-6 h-10 flex items-center justify-center"
        >
          <RoleSwitcher roles={roles} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-xl text-text-muted font-normal max-w-2xl leading-relaxed mb-10"
        >
          {tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none px-4"
        >
          <a
            href="./24J45A0528_Chandu_CSE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-blue-600 hover:to-blue-500 text-text-light font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-300"
          >
            <FileText className="mr-2 h-5 w-5" />
            Resume
          </a>

          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-xl bg-surface-dark border border-gray-800 hover:border-blue-500/40 text-text-light font-bold hover:bg-gray-800/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Briefcase className="mr-2 h-5 w-5 text-accent" />
            Projects
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-xl bg-surface-dark border border-gray-800 hover:border-blue-500/40 text-text-light font-bold hover:bg-gray-800/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5 text-accent" />
            Contact
          </button>
        </motion.div>
      </div>

      {/* Floating Animated Technology Icons */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
        {/* Floating elements inside a relative wrapper */}
        <div className="relative w-full h-full">
          <div className="absolute top-1/4 left-12 animate-bounce duration-1000 opacity-20 text-blue-500 text-4xl">React</div>
          <div className="absolute top-1/3 right-16 animate-pulse opacity-15 text-blue-300 text-3xl">Python</div>
          <div className="absolute bottom-1/4 left-24 animate-pulse opacity-20 text-sky-400 text-2xl">AWS</div>
          <div className="absolute bottom-1/3 right-28 animate-bounce opacity-15 text-blue-600 text-4xl">Node.js</div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-text-muted hover:text-accent transition-colors duration-300 flex flex-col items-center space-y-1"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll Down</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
};
