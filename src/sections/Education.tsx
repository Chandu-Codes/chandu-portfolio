import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 bg-surface-dark/20 relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0 pointer-events-none" />

      {/* Glow dot */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light mb-4">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Timeline</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-800/80 ml-4 sm:ml-8 space-y-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Bullet Dot */}
              <div className="absolute -left-[13px] top-1.5 h-6 w-6 rounded-full border-4 border-bg-dark bg-primary flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                <div className="h-1.5 w-1.5 rounded-full bg-text-light" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-dark border border-gray-800 hover:border-blue-500/25 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black/20 relative overflow-hidden group glow-card">
                {/* Year Label */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/10 text-accent border border-primary/20">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    {edu.duration}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                    <Award className="mr-1 h-3.5 w-3.5" />
                    GPA: {edu.gpa}
                  </span>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-accent hidden sm:block">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-light group-hover:text-accent transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-mono text-accent mt-0.5">{edu.branch ? `${edu.branch}` : 'General Studies'}</p>
                    <p className="text-base text-text-muted mt-2 font-medium">{edu.institution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
