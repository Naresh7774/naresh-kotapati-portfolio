/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Terminal, 
  Cloud, 
  Cpu, 
  Code2, 
  Download,
  Server,
  Database,
  Layers,
  Award,
  BookOpen,
  Container,
  Box,
  X,
  Printer
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS, CERTIFICATES, EDUCATION, TRAINING } from './constants';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-2 mb-2"
    >
      <div className="h-px w-8 bg-gradient-to-r from-accent to-accent-alt" />
      <span className="text-accent font-mono text-sm tracking-widest uppercase">{subtitle}</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold"
    >
      {title}
    </motion.h2>
  </div>
);

const SkillBadge = ({ name }: { name: string; key?: React.Key }) => (
  <motion.span 
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 210, 255, 0.1)' }}
    className="px-3 py-1 rounded-full border border-white/10 text-sm font-mono text-muted hover:text-accent hover:border-accent/30 transition-all cursor-default"
  >
    {name}
  </motion.span>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [showResume, setShowResume] = useState(false);

  // Prevent scrolling when resume is open
  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showResume]);

  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-accent">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
              <Terminal size={18} className="text-black" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">NK.</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-mono text-muted hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button 
            onClick={() => setShowResume(true)}
            className="px-4 py-2 rounded border border-accent text-accent text-sm font-mono hover:bg-gradient-to-r hover:from-accent hover:to-accent-alt hover:text-black transition-all"
          >
            Resume
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Resume Overlay */}
        <AnimatePresence>
          {showResume && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            >
              <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={() => setShowResume(false)}
              />
              
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl glass border border-white/10 flex flex-col"
              >
                {/* Background Image for Resume */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
                    alt="Resume Background" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Header Actions */}
                <div className="relative z-20 flex items-center justify-between p-6 border-b border-white/5 glass">
                  <h3 className="font-display font-bold text-xl">Resume</h3>
                  <div className="flex items-center gap-4">
                    <a 
                      href="/resume.html" 
                      download="Naresh_Kotapati_Resume.html"
                      className="p-2 rounded-full hover:bg-white/5 text-muted hover:text-accent transition-colors"
                      title="Download Resume"
                    >
                      <Download size={20} />
                    </a>
                    <button 
                      onClick={() => setShowResume(false)}
                      className="p-2 rounded-full hover:bg-white/5 text-muted hover:text-accent transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                {/* Resume Content */}
                <div className="relative z-10 flex-grow overflow-y-auto p-8 md:p-12 custom-scrollbar">
                  <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <header className="mb-12 text-center">
                      <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{PERSONAL_INFO.name}</h1>
                      <p className="text-accent font-mono mb-6 uppercase tracking-widest">{PERSONAL_INFO.role}</p>
                      <div className="flex flex-wrap justify-center gap-4 text-sm text-muted font-mono">
                        <span className="flex items-center gap-1"><Mail size={14} /> {PERSONAL_INFO.email}</span>
                        <span className="flex items-center gap-1"><Phone size={14} /> {PERSONAL_INFO.phone}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {PERSONAL_INFO.location}</span>
                      </div>
                    </header>

                    {/* Summary */}
                    <section className="mb-10">
                      <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <div className="h-px w-4 bg-accent" /> Summary
                      </h4>
                      <p className="text-muted leading-relaxed">{PERSONAL_INFO.summary}</p>
                    </section>

                    {/* Skills */}
                    <section className="mb-10">
                      <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <div className="h-px w-4 bg-accent" /> Skills
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {SKILLS.map((skill, idx) => (
                          <div key={idx}>
                            <p className="text-sm font-bold mb-2 text-white/80">{skill.category}</p>
                            <div className="flex flex-wrap gap-2">
                              {skill.items.map((item, i) => (
                                <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Projects */}
                    <section className="mb-10">
                      <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <div className="h-px w-4 bg-accent" /> Projects
                      </h4>
                      <div className="space-y-6">
                        {PROJECTS.map((project, idx) => (
                          <div key={idx} className="group">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-bold text-white/90 group-hover:text-accent transition-colors">{project.title}</h5>
                              <span className="text-xs font-mono text-muted">{project.date}</span>
                            </div>
                            <ul className="space-y-1">
                              {project.description.map((desc, i) => (
                                <li key={i} className="text-sm text-muted flex items-start gap-2">
                                  <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                                  {desc}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Education */}
                    <section className="mb-10">
                      <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <div className="h-px w-4 bg-accent" /> Education
                      </h4>
                      <div className="space-y-6">
                        {EDUCATION.map((edu, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between items-start mb-1">
                              <h5 className="font-bold text-white/90">{edu.institution}</h5>
                              <span className="text-xs font-mono text-muted">{edu.period}</span>
                            </div>
                            <p className="text-sm text-accent/80 mb-1">{edu.degree}</p>
                            <div className="flex justify-between text-xs text-muted font-mono">
                              <span>{edu.location}</span>
                              <span>{edu.score}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Training */}
                    <section className="mb-10">
                      <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <div className="h-px w-4 bg-accent" /> Training
                      </h4>
                      {TRAINING.map((t, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-bold text-white/90">{t.title}</h5>
                            <span className="text-xs font-mono text-muted">{t.period}</span>
                          </div>
                          <ul className="space-y-1">
                            {t.highlights.map((h, i) => (
                              <li key={i} className="text-sm text-muted flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </section>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section id="about" className="mb-32 relative overflow-hidden rounded-3xl p-12">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1920" 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="scanner" />
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-alt opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-alt"></span>
                </span>
                Available for Opportunities
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight">
                {PERSONAL_INFO.name.split(' ')[0]} <br />
                <span className="bg-gradient-to-r from-accent to-accent-alt bg-clip-text text-transparent text-glow">
                  {PERSONAL_INFO.name.split(' ')[1]}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted font-display mb-8 max-w-xl">
                {PERSONAL_INFO.role}
              </p>
              <p className="text-muted leading-relaxed mb-10 max-w-2xl">
                {PERSONAL_INFO.summary}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded bg-gradient-to-r from-accent to-accent-alt text-black font-bold hover:opacity-90 transition-all"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded glass font-bold hover:bg-white/10 transition-colors"
                >
                  <Github size={20} /> GitHub
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-2xl glass p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-full border border-white/5 rounded-xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Cloud size={40} className="text-accent" />
                    <div className="text-right font-mono text-xs text-muted">
                      SYSTEM_STATUS: ACTIVE<br />
                      CLOUD_SYNC: 100%
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-accent"
                      />
                    </div>
                    <div className="flex justify-between font-mono text-[10px] text-muted uppercase tracking-widest">
                      <span>AWS Expertise</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '70%' }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                        className="h-full bg-accent"
                      />
                    </div>
                    <div className="flex justify-between font-mono text-[10px] text-muted uppercase tracking-widest">
                      <span>DevOps Tools</span>
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl" />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <SectionHeader title="Technical Arsenal" subtitle="Skills & Tools" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl glass border border-white/5 hover:border-accent/30 transition-all group"
              >
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  {idx === 0 && <Code2 size={20} className="text-accent" />}
                  {idx === 1 && <Layers size={20} className="text-accent" />}
                  {idx === 2 && <Cloud size={20} className="text-accent" />}
                  {idx === 3 && <Cpu size={20} className="text-accent" />}
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <SkillBadge key={item} name={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <SectionHeader title="Featured Work" subtitle="Projects" />
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative p-8 rounded-2xl glass border border-white/5 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono text-accent">{project.date}</span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {project.description.map((desc, i) => (
                      <li key={i} className="text-muted text-sm flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    {idx === 0 ? (
                      <>
                        <SkillBadge name="HTML" />
                        <SkillBadge name="CSS" />
                        <SkillBadge name="AngularJS" />
                      </>
                    ) : (
                      <>
                        <SkillBadge name="HTML" />
                        <SkillBadge name="CSS" />
                        <SkillBadge name="JavaScript" />
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Training */}
        <section id="education" className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader title="Education" subtitle="Academic Journey" />
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <motion.div 
                    key={edu.institution}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-white/10"
                  >
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,157,0.5)]" />
                    <span className="text-xs font-mono text-accent mb-1 block">{edu.period}</span>
                    <h3 className="text-xl font-display font-bold">{edu.institution}</h3>
                    <p className="text-muted text-sm mb-2">{edu.degree}</p>
                    <div className="flex items-center gap-4 text-xs font-mono text-muted/60">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                      {edu.score && <span className="text-accent/80">{edu.score}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader title="Training & Certs" subtitle="Continuous Learning" />
              <div className="space-y-8">
                {TRAINING.map((t) => (
                  <div key={t.title} className="p-6 rounded-xl glass border border-white/5 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen size={20} className="text-accent" />
                      <h3 className="text-lg font-display font-bold">{t.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {t.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-muted flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="grid grid-cols-1 gap-4">
                  {CERTIFICATES.map((cert) => (
                    <motion.a
                      key={cert.name}
                      href={cert.link}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-accent/30 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <Award size={18} className="text-accent" />
                        <div>
                          <p className="text-sm font-medium">{cert.name}</p>
                          <p className="text-[10px] text-muted font-mono uppercase">{cert.date}</p>
                        </div>
                      </div>
                      <ExternalLink size={14} className="text-muted" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="p-12 rounded-3xl glass border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -z-10" />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's build something <span className="text-accent">cloud-native</span>.</h2>
                <p className="text-muted mb-8 text-lg">
                  I'm always open to discussing cloud architecture, DevOps automation, or potential collaborations.
                </p>
                <div className="space-y-4">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-muted hover:text-accent transition-colors group">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-accent/10">
                      <Mail size={18} />
                    </div>
                    {PERSONAL_INFO.email}
                  </a>
                  <div className="flex items-center gap-4 text-muted">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
              <div className="glass p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center space-y-8 min-h-[400px]">
                <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center relative group">
                  <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping group-hover:animate-none opacity-20" />
                  <Mail size={48} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-white">Send an Email</h3>
                  <p className="text-muted text-sm max-w-xs">
                    Choose your preferred email client to get in touch with me directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-sm">
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <Mail size={18} className="text-red-500" />
                    </div>
                    <span className="font-mono text-sm font-bold">Gmail</span>
                  </a>
                  
                  <a 
                    href={`https://outlook.office.com/mail/deeplink/compose?to=${PERSONAL_INFO.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Mail size={18} className="text-blue-500" />
                    </div>
                    <span className="font-mono text-sm font-bold">Outlook</span>
                  </a>

                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="sm:col-span-2 flex items-center justify-center gap-3 p-4 rounded-xl bg-accent text-black font-bold hover:opacity-90 transition-all"
                  >
                    <Mail size={18} />
                    <span>Default Mail App</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-muted text-xs font-mono">
          @ 2026 Naresh Kotapati
        </p>
      </footer>
    </div>
  );
}
