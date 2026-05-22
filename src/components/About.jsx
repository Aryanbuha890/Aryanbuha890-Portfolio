import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, BookOpen, Briefcase, Award, GraduationCap, ChevronRight, Terminal } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

  const profileImage = '/images/Aryan Resume Photo.png'

  const skillCategories = [
    {
      title: 'Programming & Web',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Frameworks & Systems',
      skills: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'FastAPI', 'Flask']
    },
    {
      title: 'Databases & Tools',
      skills: ['Supabase', 'PostgreSQL', 'MongoDB', 'SQLite', 'Git', 'GitHub', 'REST APIs']
    },
    {
      title: 'AI/ML & Core Skills',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Model Training', 'DSA', 'OOP', 'Problem-Solving']
    }
  ]

  const experiences = [
    {
      role: 'Founder & Tech Lead',
      company: 'Triotrack Solution',
      date: '2025 - Present',
      desc: 'Founded and direct a technology company building modern digital solutions, custom software, AI automation architectures, SaaS systems, and high-performance web platforms. (triotracksolution.online)'
    },
    {
      role: 'Project Lead / Architect',
      company: 'Hackovate 2025 (LJ University)',
      date: 'Jan 2025',
      desc: 'Led a team of 4 to build an AI-powered dairy platform incorporating IoT health monitoring and Scikit-learn milk yield forecasts, reaching the Top 40 finalists out of 240+ teams.'
    },
    {
      role: 'Full-Stack Developer',
      company: 'HackOut 2025 (DAIICT)',
      date: 'Feb 2025',
      desc: 'Built a Coastal Threat Alert System leveraging satellite data feed processing, IoT nodes, and FastAPI endpoints for a climate tech alert application.'
    },
    {
      role: 'Team Collaborator',
      company: 'Bharatiya Antariksh Hackathon (ISRO)',
      date: '2024',
      desc: 'Developed space tech data models and geospatial analysis solutions utilizing telemetry arrays.'
    },
    {
      role: 'Academic & Hackathon Developer',
      company: 'Various Innovative Engagements',
      date: '2024 - Present',
      desc: 'Built real-time dashboard systems, competitive programming utilities, and interactive web projects.'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.) in CSE',
      institution: 'The Maharaja Sayajirao University of Baroda (MSU)',
      period: '2025 - Present',
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

            {/* Triotrack Solution Premium Glass Banner Card */}
            <div className="w-full max-w-[320px] bg-neutral-950/80 backdrop-blur-xl p-5 rounded-xl border border-red-500/30 hover:border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:shadow-[0_0_40px_rgba(239,68,68,0.25)] transition-all duration-500 relative group/tcard overflow-hidden hover:-translate-y-1">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover/tcard:animate-[shimmer_1.5s_ease-out] z-10"></div>
              
              {/* Pulsing indicator tag */}
              <div className="absolute top-3 right-3 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 absolute"></span>
                <span className="text-[7px] font-mono text-red-500/90 font-bold uppercase tracking-wider ml-1">LIVE</span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-xl bg-black border border-red-500/30 overflow-hidden flex items-center justify-center p-1.5 shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.15)] group-hover/tcard:border-red-500/60 transition-colors duration-300">
                  <img src="/logo triotrack.png" alt="Triotrack Solution Logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-red-500 uppercase tracking-widest block font-bold">// Founder & Director</span>
                  <h4 className="text-base font-bold font-mono leading-tight tracking-wide bg-gradient-to-r from-white via-neutral-200 to-red-400 bg-clip-text text-transparent group-hover/tcard:from-red-400 group-hover/tcard:to-white transition-all duration-500">
                    Triotrack Solution
                  </h4>
                  <span className="text-[9px] font-mono text-neutral-400 font-semibold tracking-wider block mt-0.5">// AUTOMATE. INNOVATE. SCALE.</span>
                </div>
              </div>
              
              <p className="text-[11px] text-neutral-300 mt-3 text-left leading-relaxed font-mono">
                Directing smart enterprise AI automation pipelines, SaaS frameworks, and premium high-performance web systems.
              </p>
              
              <div className="mt-4 flex">
                <a 
                  href="https://triotracksolution.online/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-xs font-mono font-bold text-white text-center transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:scale-[1.03]"
                >
                  Visit triotracksolution.online
                  <span className="text-white group-hover/tcard:translate-x-1 transition-transform">→</span>
                </a>
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
              I am Aryan Buha, a computer science enthusiast and the **Founder of Triotrack Solution**. I focus on building intelligent, scalable digital architectures, AI-powered automation systems, and high-performance full-stack applications. I thrive in high-stress, high-energy hackathons and client builds, transforming complex ideas into functional, premium software.
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
                        {/* Bullet connection */}
                        <div className="flex flex-col items-center">
                          <span className="h-2 w-2 rounded-full bg-red-600 group-hover:scale-125 transition-transform mt-2"></span>
                          {idx !== experiences.length - 1 && (
                            <span className="w-0.5 h-16 bg-neutral-900 border-l border-white/5 mt-1"></span>
                          )}
                        </div>
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h4 className="text-sm font-bold text-white font-mono">{exp.role}</h4>
                            <span className="text-[10px] font-mono text-neutral-500 px-2 py-0.5 rounded border border-white/5 bg-neutral-950">
                              {exp.date}
                            </span>
                          </div>
                          <p className="text-xs text-red-400 font-mono">{exp.company}</p>
                          <p className="text-xs text-neutral-400 mt-1 max-w-xl">{exp.desc}</p>
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
      </div>
    </section>
  )
}
