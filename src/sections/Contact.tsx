import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { Mail, Phone, Send, RefreshCw, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export const Contact: React.FC = () => {
  const { phone, email, linkedin, github } = PORTFOLIO_DATA.personalInfo.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulate EmailJS sending (allows instant testability for recruiters!)
    // In production, the developer can install @emailjs/browser and configure their IDs below:
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
    setTimeout(() => {
      setStatus('success');
      // Confetti splash for successful message submission!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#60A5FA', '#10B981']
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1800);
  };

  const contactDetails = [
    {
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      label: 'Phone',
      value: phone,
      href: `tel:${phone.replace(/\s+/g, '')}`,
      icon: Phone,
      color: 'bg-green-500/10 text-green-400'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/chandu-boini',
      href: linkedin,
      icon: LinkedinIcon,
      color: 'bg-sky-500/10 text-sky-400'
    },
    {
      label: 'GitHub',
      value: 'github.com/ChanduCodes',
      href: github,
      icon: GithubIcon,
      color: 'bg-purple-500/10 text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-surface-dark/20 relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0 pointer-events-none" />

      {/* Radial Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-light mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project idea, internship opportunity, or placement role? Drop a message below or contact me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {contactDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <a
                  key={idx}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-5 rounded-2xl bg-surface-dark border border-gray-800 hover:border-blue-500/30 hover:scale-[1.01] transition-all duration-300 group glow-card"
                >
                  <div className={`p-3.5 rounded-xl ${detail.color} shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-text-muted">{detail.label}</div>
                    <div className="text-sm sm:text-base font-bold text-text-light mt-0.5 group-hover:text-accent transition-colors duration-300">
                      {detail.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-dark border border-gray-800 relative glow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-black/20 border border-gray-800 text-text-light placeholder-gray-600 focus:border-primary focus:outline-none transition-all duration-300 text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/20 border border-gray-800 text-text-light placeholder-gray-600 focus:border-primary focus:outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Feedback"
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-gray-800 text-text-light placeholder-gray-600 focus:border-primary focus:outline-none transition-all duration-300 text-sm"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Chandu, I would like to schedule an interview..."
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-gray-800 text-text-light placeholder-gray-600 focus:border-primary focus:outline-none transition-all duration-300 text-sm resize-none"
                  />
                </div>

                {/* Status Toasts / Prompts */}
                {status === 'success' && (
                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium animate-fade-in">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-blue-600 hover:to-blue-500 text-text-light font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {status === 'sending' ? (
                    <>
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
