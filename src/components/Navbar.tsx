import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  label: string;
  id: string;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'GitHub', id: 'github' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur change on scroll
      setScrolled(window.scrollY > 20);

      // Section tracking
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-dark/80 backdrop-blur-md border-b border-gray-800/50 shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-text-light shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              BC
            </div>
            <span className="font-sans font-bold text-lg text-text-light tracking-wide group-hover:text-accent transition-colors duration-300">
              CHANDU<span className="text-primary font-mono">.dev</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-accent bg-blue-500/10'
                    : 'text-text-muted hover:text-text-light hover:bg-gray-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Resume Button */}
            <a
              href="./24J45A0528_Chandu_CSE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-blue-500/30 hover:border-blue-500 rounded-lg text-sm font-semibold text-accent hover:text-text-light hover:bg-primary transition-all duration-300 shadow-sm"
            >
              Resume
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-text-muted hover:text-text-light hover:bg-gray-800/40 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 border-b border-gray-800/50 bg-bg-dark/95 backdrop-blur-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-accent bg-blue-500/10 font-semibold'
                  : 'text-text-muted hover:text-text-light hover:bg-gray-800/30'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="./24J45A0528_Chandu_CSE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center mt-4 px-4 py-3 rounded-lg bg-primary hover:bg-secondary text-text-light font-bold transition-all duration-200 flex items-center justify-center"
          >
            Download Resume
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};
