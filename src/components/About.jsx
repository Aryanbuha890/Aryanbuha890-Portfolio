import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, BookOpen, Briefcase, Award, GraduationCap, ChevronRight, Terminal } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

  const profileImage = '/images/Aryan Resume Photo.png'

  const skillCategories = [
    {
      title: 'Programming & Web',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'C', 'HTML5', 'CSS3']
    },
    {
      title: 'Frameworks & Systems',
      skills: ['React 19', 'Next.js', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Node.js', 'Express.js', 'FastAPI', 'Flask']
    },
    {
      title: 'Databases & Tools',
      skills: ['Supabase', 'PostgreSQL', 'MongoDB', 'SQLite', 'Git', 'GitHub', 'Docker', 'Vercel', 'VS Code']
    },
    {
      title: 'AI/ML & Core Skills',
      skills: ['LangGraph (Agents)', 'YOLOv11 (Vision)', 'ChromaDB (RAG)', 'Generative AI', 'Local LLMs', 'XGBoost', 'Scikit-learn', 'TensorFlow', 'DSA', 'OOP']
    }
  ]

  const experiences = [
    {
      role: 'Open Source Contributor',
      company: 'Elite Coders · Self-employed',
      logo: '/elite_coders_logo.jpg',
      date: 'Jul 2026 - Present',
      desc: "Selected as an Open Source Contributor for Elite Coders Summer of Code 2026 (ECSoC'26), collaborating with maintainers across multiple open-source repositories to build production-ready features, fix bugs, and improve user experience."
    },
    {
      role: 'Core Team Member',
      company: 'Code Vimarsh',
      logo: '/code_vimarsh_logo.jpg',
      date: 'Jan 2026 - Present',
      desc: [
        'Contributing to the design and development of the official Code Vimarsh club website',
        'Working with modern web technologies to build responsive and user-friendly interfaces',
        'Collaborating with the technical team to enhance UI/UX and overall site performance',
        'Implementing reusable components and maintaining clean frontend architecture'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.) in CSE',
      institution: 'The Maharaja Sayajirao University of Baroda (MSU)',
      period: '2024 - 2028',
      desc: 'Pursuing core computer science courses: Data Structures, Algorithms, Discrete Math, Database Systems.'
    },
    {
      degree: 'Higher Secondary Education (12th Science)',
      institution: 'Ashadeep IIT',
      period: '2024',
      desc: 'Focused study on Mathematics, Physics, Chemistry, and fundamentals of logical thinking.'
    },
    {
      degree: 'Secondary Education (10th Grade)',
      institution: 'Akshardham High School',
      period: '2022',
      desc: 'Excelled in academic fundamentals with strong results in Mathematics and Science.'
    }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      {/* Background glow node */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-red-950/10 blur-3xl animated-glow-bg pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-2">
          <div className="text-red-500 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
            profile.info()
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
          <div className="h-1 w-12 bg-red-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Photo Frame */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col items-center gap-6"
          >
            <div className="relative group max-w-[320px] w-full">
              {/* Outer coder frame box */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-600 to-black opacity-30 group-hover:opacity-100 blur-lg transition duration-500"></div>
              
              {/* Image box */}
              <div className="relative rounded-xl overflow-hidden bg-black border border-white/10 p-2 flex flex-col items-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-white/5">
                  <img 
                    src={profileImage} 
                    alt="Aryan Buha" 
                    className="w-full h-full object-cover object-center transition-all duration-500 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Visual signature / footer card */}
                <div className="mt-4 w-full px-2 py-2 flex items-center justify-between border-t border-white/5 font-mono text-[10px] text-neutral-500">
                  <span>Aryan_Buha.bin</span>
                  <span>SIZE: 7.2KB</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Side: Tabbed info */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8 space-y-6 text-left"
          >
            {/* Short Introduction Paragraph */}
            <p className="text-neutral-300 leading-relaxed text-base select-text">
              I am Aryan Buha, a computer science enthusiast. I focus on building intelligent, scalable digital architectures, AI-powered automation systems, and high-performance full-stack applications. I thrive in high-stress, high-energy hackathons and client builds, transforming complex ideas into functional, premium software.
            </p>

            {/* Glass Tab Headers */}
            <div className="flex p-1 rounded bg-neutral-950 border border-white/5 max-w-md">
              {[
                { id: 'skills', name: 'Skills', icon: Code },
                { id: 'experience', name: 'Experience', icon: Briefcase },
                { id: 'education', name: 'Education', icon: GraduationCap }
              ].map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2.5 rounded text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 transition-all relative ${
                      isActive 
                        ? 'text-white' 
                        : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabGlow"
                        className="absolute inset-0 bg-red-600/10 border border-red-500/20 rounded"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>}
                    <Icon size={14} className={isActive ? 'text-red-500' : ''} />
                    {tab.name}
                  </button>
                )
              })}
            </div>

            {/* Tab Contents */}
            <div className="glass-panel p-6 rounded-lg w-full min-h-[300px] flex flex-col relative select-text">
              <AnimatePresence mode="wait">
                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {skillCategories.map((cat, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider flex items-center gap-2">
                          <span className="text-red-600 font-bold">&gt;</span> {cat.title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="px-3 py-1 rounded bg-white/2 hover:bg-red-600/10 border border-white/5 hover:border-red-500/20 text-xs text-neutral-300 hover:text-white transition-all font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'experience' && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {experiences.map((exp, idx) => (
                      <div key={idx} className="flex gap-4 items-start relative group">
                        {/* Logo / Bullet connection */}
                        <div className="flex flex-col items-center shrink-0">
                          {exp.logo ? (
                            <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 bg-neutral-950/80 p-1 flex items-center justify-center relative z-10 group-hover:border-red-500/40 transition-all duration-300">
                              <img src={exp.logo} alt={`${exp.company} Logo`} className="w-full h-full object-contain rounded" />
                            </div>
                          ) : (
                            <span className="h-2 w-2 rounded-full bg-red-600 group-hover:scale-125 transition-transform mt-2 relative z-10"></span>
                          )}
                          {idx !== experiences.length - 1 && (
                            <span className="w-0.5 h-20 bg-neutral-900 border-l border-white/5 mt-2"></span>
                          )}
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h4 className="text-sm font-bold text-white font-mono">{exp.role}</h4>
                            <span className="text-[10px] font-mono text-neutral-500 px-2 py-0.5 rounded border border-white/5 bg-neutral-950">
                              {exp.date}
                            </span>
                          </div>
                          <p className="text-xs text-red-400 font-mono">{exp.company}</p>
                          {Array.isArray(exp.desc) ? (
                            <ul className="text-xs text-neutral-400 mt-1 max-w-xl list-disc list-inside space-y-1 select-text">
                              {exp.desc.map((bullet, bIdx) => (
                                <li key={bIdx} className="leading-relaxed">{bullet}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-xs text-neutral-400 mt-1 max-w-xl leading-relaxed">{exp.desc}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative pl-6 space-y-8 border-l border-white/5"
                  >
                    {education.map((edu, idx) => (
                      <div key={idx} className="relative group">
                        {/* Year Node Hub */}
                        <div className="absolute -left-[30px] top-1 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-black border-2 border-red-600 group-hover:bg-red-600 transition-colors"></div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h4 className="text-sm font-bold text-white font-mono">{edu.degree}</h4>
                            <span className="text-[10px] font-mono text-neutral-500 px-2 py-0.5 rounded border border-white/5 bg-neutral-950">
                              {edu.period}
                            </span>
                          </div>
                          <p className="text-xs text-red-500 font-mono">{edu.institution}</p>
                          <p className="text-xs text-neutral-400 mt-1 max-w-xl leading-relaxed">{edu.desc}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </motion.div>

        </div>

        {/* Open Source Badges Showcase Section */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 pt-12 border-t border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.05)] transition-all duration-500 relative overflow-hidden">
            {/* Ambient subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-red-950/10 blur-3xl animated-glow-bg pointer-events-none"></div>

            {/* Left Side Info */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30 text-red-400 font-mono text-[10px] tracking-wider uppercase font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping"></span>
                Global Rank #3
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 overflow-hidden flex items-center justify-center p-1.5 shrink-0 shadow-lg">
                  <img src="/elite_coders_logo.jpg" alt="Elite Coders Logo" className="w-full h-full object-contain rounded" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block font-bold">// ECSoC'26 OPEN SOURCE</span>
                  <h3 className="text-xl font-bold font-mono tracking-wide text-white">Elite Coders</h3>
                  <span className="text-xs text-neutral-400 font-medium block">Summer of Code 2026</span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed font-sans max-w-md">
                Selected as an Open Source Contributor for ECSoC\'26, collaborating with maintainers across multiple repositories to build production-ready features, fix critical bugs, and improve user experiences.
              </p>
            </div>

            {/* Right Side Badges Grid */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">// Earned Contributor Badges:</span>
                <span className="text-[9px] font-mono text-red-400 uppercase tracking-wider font-semibold">ALL TIERS UNLOCKED</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {[
                  { img: '/1.png', label: 'Mission Register' },
                  { img: '/2.png', label: 'Tier: Rescuer' },
                  { img: '/3.png', label: 'Tier: Hustler' },
                  { img: '/4.png', label: 'Tier: Rookie' },
                  { img: '/5.png', label: 'Tier: Elite' },
                  { img: '/6.png', label: 'Tier: Master' }
                ].map((badge, idx) => (
                  <div 
                    key={idx} 
                    className="relative aspect-square rounded-xl bg-black border border-white/5 hover:border-red-500/40 p-2 flex flex-col items-center justify-center group/badge transition-all duration-300 hover:scale-105 hover:bg-red-950/10 shadow-[inner_0_0_15px_rgba(255,255,255,0.02)]"
                    title={badge.label}
                  >
                    <img src={badge.img} alt={badge.label} className="w-full h-full object-contain" />
                    
                    {/* Tooltip or mini badge text on hover */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-neutral-950 border border-white/10 py-1 px-2 rounded text-[8px] font-mono text-neutral-300 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-25 shadow-xl">
                      {badge.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
