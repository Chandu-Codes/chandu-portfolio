import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Blog: React.FC = () => {
  const { blogPosts } = PORTFOLIO_DATA;

  return (
    <section id="blog" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />

      {/* Radial Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Blog</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Articles and insights on web development, artificial intelligence, and prompt engineering.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-surface-dark border border-gray-800 hover:border-blue-500/25 transition-all duration-300 shadow-md group relative glow-card"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-4 border-b border-gray-800/40 pb-3">
                  <span className="flex items-center">
                    <Calendar className="mr-1.5 h-3.5 w-3.5 text-accent" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1.5 h-3.5 w-3.5 text-accent" />
                    {post.readTime}
                  </span>
                </div>

                {/* Topic category tag */}
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-primary/10 text-accent border border-primary/20">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-text-light group-hover:text-accent transition-colors duration-300 mt-3 mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Snippet */}
                <p className="text-sm text-text-muted leading-relaxed mb-6">{post.snippet}</p>
              </div>

              {/* Read Action Link */}
              <div className="pt-4 border-t border-gray-800/40 mt-auto">
                <span className="inline-flex items-center text-xs font-mono font-semibold text-accent group-hover:text-text-light group-hover:translate-x-1.5 transition-all duration-350 cursor-pointer">
                  Read Article
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
