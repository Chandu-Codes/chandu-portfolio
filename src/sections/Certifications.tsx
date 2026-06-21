import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { ShieldCheck, Cpu, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  // Assign icons based on certification organization/title
  const getIcon = (title: string) => {
    const lowTitle = title.toLowerCase();
    if (lowTitle.includes('cloud') || lowTitle.includes('nsic')) return Cloud;
    if (lowTitle.includes('intelligence') || lowTitle.includes('ai')) return Cpu;
    return ShieldCheck;
  };

  return (
    <section id="certifications" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />

      {/* Glow dot */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Certifications</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Verified credentials and training completed through global tech institutes and academic platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => {
            const Icon = getIcon(cert.title);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-surface-dark border border-gray-800 hover:border-blue-500/25 transition-all duration-300 flex flex-col justify-between glow-card relative overflow-hidden group"
              >
                {/* Visual card corner accent */}
                <div className="absolute top-0 right-0 h-16 w-16 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-bl-full transition-colors duration-300" />

                <div className="flex items-start space-x-5">
                  {/* Icon Block */}
                  <div className="p-3 bg-blue-500/10 text-accent rounded-xl shrink-0 mt-1">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-text-light group-hover:text-accent transition-colors duration-300 pr-4">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-text-muted mt-1">{cert.organization}</p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded text-xs font-mono bg-black/40 text-accent border border-gray-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
