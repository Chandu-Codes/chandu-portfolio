import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { Code2, AlertCircle, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface GitHubProfile {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  html_url: string;
}

export const GitHubStats: React.FC = () => {
  const { githubUsername, github } = PORTFOLIO_DATA.personalInfo.contact;
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchGitHubData = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`https://api.github.com/users/${githubUsername}`);
      if (!res.ok) throw new Error('API limit reached or user not found');
      const data = await res.json();
      setProfile({
        avatar_url: data.avatar_url,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        bio: data.bio || 'Full Stack Developer & AI Enthusiast',
        html_url: data.html_url,
      });
    } catch (err) {
      console.warn('Using fallback data due to rate limits:', err);
      // Premium Fallback data so the site is never broken
      setProfile({
        avatar_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150', // placeholder premium abstract avatar
        public_repos: 15,
        followers: 12,
        following: 18,
        bio: 'Dedicated B.Tech CSE Student, Full Stack Developer, and AI Enthusiast.',
        html_url: github,
      });
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-24 bg-surface-dark/20 relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light mb-4">
            GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Activity</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Live integration with GitHub API displaying repository counts, follower stats, and coding metrics.
          </p>
        </div>

        {/* Profile Stats Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: API profile summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-surface-dark border border-gray-800 flex flex-col justify-between relative glow-card"
          >
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <RefreshCw className="h-8 w-8 text-accent animate-spin" />
                <span className="text-sm font-mono text-text-muted">Loading profile...</span>
              </div>
            ) : (
              <>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={profile?.avatar_url}
                    alt={githubUsername}
                    className="h-16 w-16 rounded-xl border border-gray-700 bg-gray-900 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-text-light">{githubUsername}</h3>
                    <a
                      href={profile?.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-accent hover:underline flex items-center mt-1"
                    >
                      @{githubUsername}
                    </a>
                  </div>
                </div>

                <p className="text-sm text-text-muted leading-relaxed mb-6 italic">
                  "{profile?.bio}"
                </p>

                {error && (
                  <div className="flex items-center space-x-2 text-amber-400 bg-amber-400/5 border border-amber-500/10 p-3 rounded-lg text-xs mb-6 font-medium">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>Rate limit hit. Showing cached/fallback profile stats.</span>
                  </div>
                )}

                {/* API count badges */}
                <div className="grid grid-cols-3 gap-2 bg-black/20 p-4 rounded-xl border border-gray-800/40 text-center">
                  <div>
                    <div className="text-xl font-bold text-text-light">{profile?.public_repos}</div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mt-0.5">Repos</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-text-light">{profile?.followers}</div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mt-0.5">Followers</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-text-light">{profile?.following}</div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mt-0.5">Following</div>
                  </div>
                </div>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-750 text-text-light font-bold text-sm border border-gray-700/60 hover:border-gray-600 transition-all duration-300 shadow-sm"
                >
                  Visit GitHub Profile
                </a>
              </>
            )}
          </motion.div>

          {/* Right Column: Readme Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-8 flex flex-col justify-between gap-6"
          >
            {/* Visual Stats Cards Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* GitHub Stats Card */}
              <div className="p-6 rounded-2xl bg-surface-dark border border-gray-800 flex flex-col justify-between items-center relative glow-card min-h-[220px]">
                <h4 className="text-sm font-bold text-text-light w-full border-b border-gray-800 pb-3 mb-4 font-mono">
                  Coding Profile Overview
                </h4>
                <div className="w-full flex items-center justify-center flex-1">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&bg_color=111827&title_color=60a5fa&icon_color=3b82f6&text_color=94a3b8&border_color=1f2937&hide_rank=false`}
                    alt="GitHub Stats"
                    className="max-w-full max-h-[170px] rounded-lg"
                    onError={(e) => {
                      // fallback content in case vercel api fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Backup local styling if api fails */}
                  <div className="text-center p-4 font-mono text-xs text-text-muted hidden" id="local-fallback-chart-1">
                    <Code2 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <span>Dynamic chart not loading due to API offline.</span>
                  </div>
                </div>
              </div>

              {/* Language Breakdown */}
              <div className="p-6 rounded-2xl bg-surface-dark border border-gray-800 flex flex-col justify-between items-center relative glow-card min-h-[220px]">
                <h4 className="text-sm font-bold text-text-light w-full border-b border-gray-800 pb-3 mb-4 font-mono">
                  Most Used Languages
                </h4>
                <div className="w-full flex items-center justify-center flex-1">
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=tokyonight&bg_color=111827&title_color=60a5fa&icon_color=3b82f6&text_color=94a3b8&border_color=1f2937`}
                    alt="Top Languages"
                    className="max-w-full max-h-[170px] rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Contribution Activity Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-2xl bg-surface-dark border border-gray-800 glow-card"
        >
          <h4 className="text-sm font-bold text-text-light mb-4 font-mono pb-3 border-b border-gray-800 flex items-center justify-between">
            <span>Commit Contributions Graph</span>
            <span className="text-xs font-normal text-text-muted">Last 12 Months</span>
          </h4>
          <div className="flex items-center justify-center overflow-x-auto py-2">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=tokyonight&background=111827&ring=3b82f6&fire=2563eb&border=1f2937&currStreakNum=60a5fa&sideLabels=94a3b8&stroke=1f2937`}
              alt="GitHub Streak"
              className="max-w-full min-h-[150px] rounded-lg"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
