import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { GitHubStats } from './sections/GitHubStats';
import { Certifications } from './sections/Certifications';
import { Achievements } from './sections/Achievements';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { ArrowUp, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Entrance loader duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    // Scroll top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    // Visitor counter simulation
    let count = parseInt(localStorage.getItem('portfolio_visitors') || '148', 10);
    if (!sessionStorage.getItem('portfolio_session_visited')) {
      count += 1;
      localStorage.setItem('portfolio_visitors', count.toString());
      sessionStorage.setItem('portfolio_session_visited', 'true');
    }
    setVisitors(count);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-bg-dark text-text-light font-sans selection:bg-primary selection:text-text-light antialiased min-h-screen">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-bg-dark flex flex-col items-center justify-center"
          >
            {/* Pulsing visual core */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-primary to-accent opacity-30 blur-lg animate-pulse" />
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-text-light text-2xl shadow-xl shadow-primary/20 relative">
                BC
              </div>
            </div>
            {/* Spinning Loader Ring */}
            <div className="h-10 w-10 border-2 border-gray-800 border-t-accent rounded-full animate-spin mt-8 mb-4" />
            <span className="text-xs font-mono text-text-muted uppercase tracking-widest animate-pulse">
              Compiling Portfolio...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Sticky Navigation */}
          <Navbar />

          {/* Main Sections */}
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <GitHubStats />
            <Certifications />
            <Achievements />
            <Blog />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating UI Elements */}

          {/* Visitor Counter */}
          <div className="fixed bottom-6 left-6 z-40 p-2.5 rounded-xl bg-surface-dark/60 border border-gray-800/80 backdrop-blur-md text-[11px] font-mono text-text-muted flex items-center space-x-1.5 shadow-lg select-none hover:border-blue-500/20 transition-all duration-300">
            <Eye className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span>Visitor Count:</span>
            <span className="font-bold text-accent">{visitors}</span>
          </div>

          {/* Back To Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-primary hover:bg-secondary text-text-light shadow-lg shadow-primary/20 border border-blue-400/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default App;
