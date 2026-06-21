import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { Calendar, MapPin, Sparkles, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 bg-surface-dark/20 relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0 pointer-events-none" />

      {/* Glow dot */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experience</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-gray-800/80 ml-4 sm:ml-8 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-85px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Bullet Dot */}
              <div className="absolute -left-[13px] top-1.5 h-6 w-6 rounded-full border-4 border-bg-dark bg-blue-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                <div className="h-1.5 w-1.5 rounded-full bg-text-light" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-dark border border-gray-800 hover:border-blue-500/25 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black/20 relative overflow-hidden group glow-card">
                {/* Top Info row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-light group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-semibold mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end text-xs font-mono text-text-muted space-y-1">
                    <span className="flex items-center">
                      <Calendar className="mr-1.5 h-3.5 w-3.5 text-accent" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="mr-1.5 h-3.5 w-3.5 text-accent" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights Bullet List */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start text-sm sm:text-base text-text-muted leading-relaxed">
                      <Sparkles className="mr-2.5 h-4.5 w-4.5 text-primary shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* FUTURE EXPERIENCE PLACEHOLDER (Recruiter Friendly) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-85px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative pl-8 sm:pl-12 group"
          >
            {/* Bullet Dot */}
            <div className="absolute -left-[13px] top-1.5 h-6 w-6 rounded-full border-4 border-bg-dark bg-green-500 flex items-center justify-center shadow-md shadow-green-500/20 group-hover:scale-110 transition-all duration-300">
              <div className="h-1.5 w-1.5 rounded-full bg-text-light animate-ping" />
            </div>

            {/* Glowing Recruiter Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-surface-dark to-blue-950/20 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 h-24 w-24 bg-green-500/5 blur-2xl rounded-full pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-400 flex items-center">
                    <Rocket className="mr-2 h-6 w-6 animate-pulse" />
                    Open to New Opportunities
                  </h3>
                  <p className="text-text-light font-semibold mt-1">Software Engineer | Full Stack | AI Intern</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                  Active Seeking
                </span>
              </div>

              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-4">
                I am actively seeking Software Engineering, Full Stack (MERN), and AI/Machine Learning internship and placement opportunities. Ready to contribute high-quality code, technical problem-solving, and professional prompt engineering techniques to your engineering team.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-950/40 text-accent border border-blue-500/20">React & MERN</span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-950/40 text-accent border border-blue-500/20">Python & Machine Learning</span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-950/40 text-accent border border-blue-500/20">Prompt & Context Engineering</span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-950/40 text-accent border border-blue-500/20">AWS Cloud</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
