import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { Trophy, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const Achievements: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;

  const triggerConfetti = () => {
    // Left burst
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#2563EB', '#60A5FA', '#F59E0B']
    });
    // Right burst
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#2563EB', '#60A5FA', '#F59E0B']
    });
  };

  return (
    <section id="achievements" className="py-24 bg-surface-dark/20 relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0 pointer-events-none" />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light mb-4">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Achievements</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Achievement Card */}
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={triggerConfetti}
            className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-tr from-surface-dark via-surface-dark to-blue-950/20 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 shadow-xl cursor-pointer relative group overflow-hidden select-none"
          >
            {/* Sparkling corner icons */}
            <div className="absolute top-4 right-4 text-amber-400 opacity-20 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
              <Sparkles className="h-6 w-6" />
            </div>

            {/* Glowing spot */}
            <div className="absolute -top-12 -left-12 h-32 w-32 bg-amber-500/5 blur-xl rounded-full" />

            <div className="flex flex-col items-center">
              {/* Trophy Circle */}
              <div className="h-20 w-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/5">
                <Trophy className="h-10 w-10 animate-bounce" />
              </div>

              {/* Title & Placement */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span>{ach.title}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-light group-hover:text-accent transition-colors duration-300">
                {ach.event}
              </h3>

              <p className="text-sm sm:text-base text-text-muted mt-4 leading-relaxed max-w-lg">
                {ach.description}
              </p>

              {/* Confetti Prompt */}
              <span className="mt-8 inline-flex items-center text-xs font-mono text-amber-400/60 group-hover:text-amber-400 transition-colors duration-200 border-b border-dashed border-amber-400/20 pb-0.5">
                Click Card to Celebrate! 🎉
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
