import React from 'react';
import { User, BookOpen, Cpu, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {

  const stats = [
    { label: 'B.Tech CGPA', value: '8.95', sub: '/10', icon: GraduationCap },
    { label: 'Diploma CGPA', value: '9.75', sub: '/10', icon: BookOpen },
    { label: 'SSC GPA', value: '10', sub: '/10', icon: User },
    { label: 'Projects Built', value: '6+', sub: 'Works', icon: Cpu },
  ];

  return (
    <section id="about" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative group p-8 rounded-2xl bg-surface-dark/40 border border-gray-800/80 backdrop-blur-md glow-card">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-xl" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-accent rounded-br-xl" />

              <div className="flex flex-col items-center text-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-text-light text-3xl shadow-lg shadow-primary/20 mb-6">
                  BC
                </div>
                <h3 className="text-2xl font-bold text-text-light mb-1">Boini Chandu</h3>
                <p className="text-sm text-accent font-mono mb-4">CS Student & Engineer</p>

                <div className="space-y-3 w-full text-left bg-black/30 p-4 rounded-xl border border-gray-800/40 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Domain:</span>
                    <span className="text-text-light font-medium">Full Stack & AI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Education:</span>
                    <span className="text-text-light font-medium">B.Tech CSE (MREC)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Location:</span>
                    <span className="text-text-light font-medium">Hyderabad, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Status:</span>
                    <span className="text-accent font-medium animate-pulse">Open to Internships</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between h-full"
          >
            <div className="space-y-6 text-base sm:text-lg text-text-muted leading-relaxed mb-10">
              <p>
                I am a Computer Science Engineering student currently pursuing my B.Tech at{' '}
                <strong className="text-text-light">Malla Reddy Engineering College</strong>. My interests span{' '}
                <span className="text-accent font-semibold">Full Stack Development</span>,{' '}
                <span className="text-accent font-semibold">Artificial Intelligence</span>,{' '}
                <span className="text-accent font-semibold">Prompt Engineering</span>,{' '}
                <span className="text-accent font-semibold">Cloud Computing</span>, and{' '}
                <span className="text-accent font-semibold">Software Architecture</span>.
              </p>
              <p>
                I enjoy building modern web applications, AI-driven systems, and scalable software solutions that solve practical
                problems. I continuously improve my skills through projects, certifications, internships, and hands-on
                development experience.
              </p>
              <p className="text-sm border-l-2 border-primary pl-4 py-1 italic bg-primary/5">
                "Transforming ideas into intelligent software solutions through Full Stack Development and Artificial Intelligence."
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-surface-dark border border-gray-800/80 text-center hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <Icon className="h-5 w-5 mx-auto text-accent mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-text-light">
                      {stat.value}
                      <span className="text-sm font-medium text-text-muted">{stat.sub}</span>
                    </div>
                    <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
