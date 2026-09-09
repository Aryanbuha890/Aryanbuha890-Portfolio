import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, BookOpen, Briefcase, Award, GraduationCap, ChevronRight, Terminal, ChevronDown, ChevronUp } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')
  const [expandedRoles, setExpandedRoles] = useState({ 0: true, 1: true, 2: true })
  const toggleRole = (idx) => setExpandedRoles(prev => ({ ...prev, [idx]: !prev[idx] }))

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
      company: 'Triotrack Solution',
      type: 'Freelance',
      logo: '/triotrack_solution_logo.jpg',
      role: 'Software Engineer',
      date: 'Apr 2026 - Present',
      location: 'Surat, Gujarat, India · Remote',
      employmentType: 'Freelance',
      desc: [
        'Software developer at Triotrack Solution, focused on building modern digital solutions for businesses through Web Development, Custom Software and AI Automation.',
        'Leading projects from idea to execution while collaborating with clients to create scalable, user-friendly, and innovative digital experiences.',
        'Passionate about technology, startups, and building impactful solutions with a strong focus on creativity and growth.'
      ],
      skills: ['Web Development', 'Custom Software', 'AI Automation', 'Client Solutions', 'Business Development']
    },
    {
      company: 'Code Vimarsh',
      type: 'Technical Club',
      logo: '/code_vimarsh_logo.jpg',
      role: 'Core Team Member',
      date: 'Jan 2026 - Present',
      location: 'Vadodara, Gujarat, India',
      employmentType: 'Club Lead',
      desc: [
        'Contributing to the design and development of the official Code Vimarsh club website.',
        'Working with modern web technologies to build responsive and user-friendly interfaces.',
        'Collaborating with the technical team to enhance UI/UX and overall site performance.',
        'Implementing reusable components and maintaining clean frontend architecture.'
      ],
      skills: ['JavaScript', 'React.js', 'Frontend Architecture', 'UI/UX', 'Web Design']
    },
    {
      company: 'Elite Coders',
      type: 'Open Source',
      logo: '/elite_coders_logo.jpg',
      badge: 'Global Rank #2',
      role: 'Open Source Contributor',
      date: 'Jul 2026 - Sep 2026',
      location: 'Remote',
      employmentType: 'ECSoC\'26',
      desc: [
        "Global Rank #2: Selected as an Open Source Contributor for Elite Coders Summer of Code 2026 (ECSoC'26).",
        "Collaborated with maintainers across multiple open-source repositories to build production-ready features, fix bugs, and improve user experience."
      ],
      skills: ['Git', 'GitHub', 'Open Source', 'React.js', 'Community']
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
                    loading="lazy"
                    decoding="async"
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
                    className="space-y-8 py-2"
                  >
                    {experiences.map((exp, idx) => {
                      const isExpanded = expandedRoles[idx] ?? true
                      return (
                        <div key={idx} className="relative select-text">
                          {/* Company Header Row */}
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-neutral-950 border border-white/15 p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-md">
                              <img 
                                src={exp.logo} 
                                alt={`${exp.company} Logo`} 
                                loading="lazy" 
                                decoding="async" 
                                className="w-full h-full object-contain rounded" 
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-sm sm:text-base tracking-wide">{exp.company}</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
                              {exp.type && (
                                <span className="text-xs text-neutral-400 font-normal">{exp.type}</span>
                              )}
                              {exp.badge && (
                                <span className="text-[10px] font-mono text-red-400 bg-red-950/40 border border-red-500/30 px-2 py-0.5 rounded-full font-bold ml-1">
                                  {exp.badge}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Tree Branch and Role Content */}
                          <div className="relative ml-4 pl-6 pt-2">
                            {/* Curved Branch Line */}
                            <div className="absolute left-0 top-0 w-5 h-6 border-l-2 border-b-2 border-neutral-700/80 rounded-bl-xl pointer-events-none"></div>

                            {/* Role Title Bar */}
                            <div 
                              onClick={() => toggleRole(idx)}
                              className="flex items-center justify-between cursor-pointer group/role select-none py-1"
                            >
                              <h4 className="text-sm sm:text-base font-bold text-white group-hover/role:text-red-400 transition-colors">
                                {exp.role}
                              </h4>
                              <button 
                                type="button" 
                                className="text-neutral-400 hover:text-white transition-colors p-1"
                                aria-label="Toggle role details"
                              >
                                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </button>
                            </div>

                            {/* Subtitle Line */}
                            <div className="text-xs text-neutral-400 font-sans tracking-normal -mt-0.5">
                              {exp.date} {exp.location && `· ${exp.location}`} {exp.employmentType && `· ${exp.employmentType}`}
                            </div>

                            {/* Expandable Body */}
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                                  className="overflow-hidden"
                                >
                                  {/* Bullet Points */}
                                  <ul className="space-y-2 mt-3.5 text-xs text-neutral-300 select-text leading-relaxed">
                                    {Array.isArray(exp.desc) ? (
                                      exp.desc.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-2.5">
                                          <span className="text-neutral-500 shrink-0 text-sm leading-none mt-1">•</span>
                                          <span>{bullet}</span>
                                        </li>
                                      ))
                                    ) : (
                                      <li className="flex items-start gap-2.5">
                                        <span className="text-neutral-500 shrink-0 text-sm leading-none mt-1">•</span>
                                        <span>{exp.desc}</span>
                                      </li>
                                    )}
                                  </ul>

                                  {/* Skill / Technology Pills */}
                                  {exp.skills && (
                                    <div className="flex flex-wrap gap-2 mt-4 pt-1">
                                      {exp.skills.map((skill, sIdx) => (
                                        <span
                                          key={sIdx}
                                          className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-sans hover:border-neutral-700 transition-colors"
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      )
                    })}
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
                Global Rank #2
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 overflow-hidden flex items-center justify-center p-1.5 shrink-0 shadow-lg">
                  <img src="/elite_coders_logo.jpg" alt="Elite Coders Logo" loading="lazy" decoding="async" className="w-full h-full object-contain rounded" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block font-bold">// ECSoC'26 OPEN SOURCE</span>
                  <h3 className="text-xl font-bold font-mono tracking-wide text-white">Elite Coders</h3>
                  <span className="text-xs text-neutral-400 font-medium block">Summer of Code 2026</span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed font-sans max-w-md">
                Selected as an Open Source Contributor for ECSoC&apos;26, collaborating with maintainers across multiple repositories to build production-ready features, fix critical bugs, and improve user experiences.
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
                  { img: '/2.png', label: 'Tier: Beginner' },
                  { img: '/3.png', label: 'Tier: Hustler' },
                  { img: '/4.png', label: 'Tier: Rookie' },
                  { img: '/5.png', label: 'Tier: Elite' },
                  { img: '/6.png', label: 'Tier: Master' }
                ].map((badge, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center gap-2 group/badge"
                  >
                    <div className="relative aspect-square w-full rounded-xl bg-black border border-white/10 group-hover/badge:border-red-500/50 p-2 flex items-center justify-center transition-all duration-300 group-hover/badge:scale-105 group-hover/badge:bg-red-950/10 shadow-[inner_0_0_15px_rgba(255,255,255,0.02)]">
                      <img 
                        src={badge.img} 
                        alt={badge.label} 
                        loading="lazy" 
                        decoding="async" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    
                    {/* Badge Label (Visible by default, no hover required) */}
                    <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 group-hover/badge:text-white transition-colors text-center leading-tight tracking-tight px-1">
                      {badge.label}
                    </span>
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
