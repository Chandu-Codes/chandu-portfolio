import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'AI & Python' | 'Systems'>('All');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const categories: ('All' | 'Full Stack' | 'AI & Python' | 'Systems')[] = [
    'All',
    'Full Stack',
    'AI & Python',
    'Systems',
  ];

  return (
    <section id="projects" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />

      {/* Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Explore a curated selection of full-stack platforms, machine learning pipelines, computer vision systems, and tools built using advanced prompt engineering.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary text-text-light shadow-lg shadow-primary/25'
                  : 'bg-surface-dark border border-gray-800 text-text-muted hover:text-text-light hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-between rounded-2xl bg-surface-dark border border-gray-800 hover:border-blue-500/25 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black/20 overflow-hidden group relative glow-card"
              >
                {/* Tech category tag top right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-black/40 text-accent border border-gray-800">
                    {project.category}
                  </span>
                </div>

                {/* Content area */}
                <div className="p-6 sm:p-8">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-text-light group-hover:text-accent transition-colors duration-300 mb-2 mt-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-text-muted mb-4">{project.duration}</p>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed mb-6">{project.description}</p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-text-light uppercase tracking-wider mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center text-xs text-text-muted">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                          {feat}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-accent italic pl-3">
                          + {project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-950/20 text-accent border border-blue-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlight box */}
                  {project.highlight && (
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 flex items-start space-x-2">
                      <Sparkles className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-[11px] text-accent leading-relaxed font-medium">{project.highlight}</p>
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-black/20 border-t border-gray-800/40 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono text-text-muted hover:text-text-light transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5 h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    GitHub Repo
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-mono font-bold text-accent hover:text-text-light transition-colors duration-200"
                    >
                      Live Demo
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-gray-600">Local Only</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
