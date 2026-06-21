import React from 'react';
import { Code, Layout, Server, Database, Cloud, Brain, BookOpen, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {

  // Map categories to icons
  const categoryMeta = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'C', level: 75 }
      ],
      icon: Code,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 88 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'HTML5', level: 95 }
      ],
      icon: Layout,
      color: 'from-sky-400 to-blue-500'
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 }
      ],
      icon: Server,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Oracle SQL', level: 75 }
      ],
      icon: Database,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Cloud & Tools',
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'Git', level: 85 },
        { name: 'AWS', level: 75 },
        { name: 'VS Code', level: 95 }
      ],
      icon: Cloud,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Artificial Intelligence',
      skills: [
        { name: 'Prompt Engineering', level: 95 },
        { name: 'Machine Learning', level: 80 },
        { name: 'Computer Vision', level: 75 },
        { name: 'TensorFlow', level: 70 }
      ],
      icon: Brain,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Core Concepts',
      skills: [
        { name: 'Data Structures', level: 85 },
        { name: 'Full Stack Dev', level: 85 },
        { name: 'DBMS', level: 80 },
        { name: 'Software Dev', level: 80 }
      ],
      icon: BookOpen,
      color: 'from-teal-500 to-emerald-600'
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Continuous Learning', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 85 }
      ],
      icon: UserCheck,
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />

      {/* Radial Glow */}
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light mb-4">
            Technical & Soft <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skills</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryMeta.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-surface-dark border border-gray-800/80 hover:border-blue-500/25 transition-all duration-300 flex flex-col justify-between glow-card"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${cat.color} text-text-light shadow-md`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-text-light">{cat.title}</h3>
                  </div>

                  {/* Skills Progress list */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between text-xs font-mono mb-1.5">
                          <span className="text-text-muted font-medium">{skill.name}</span>
                          <span className="text-accent">{skill.level}%</span>
                        </div>
                        {/* Bar Container */}
                        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                          {/* Animated Progress Bar */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: sIdx * 0.1 }}
                            className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
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
