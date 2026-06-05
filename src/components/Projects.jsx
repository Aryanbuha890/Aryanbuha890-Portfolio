import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Terminal, Code, Sprout, Building2, Lock, Activity, Globe } from 'lucide-react'

// Inline custom LinkedIn Icon (matching Contact.jsx style)
const LinkedInIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
    <path
      d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
      fill="currentColor"
    />
  </svg>
)

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projectsData = [
    {
      id: 'agriforge',
      title: 'AGRIFORGE AI',
      category: 'AI & ML',
      shortDesc: 'Comprehensive agricultural empowerment platform with localized farmer news, dynamic market yard pricing grids, and an admin panel.',
      tag: 'Agricultural Support Platform',
      icon: Sprout,
      img: '/images/agriforge.jpg',
      linkType: 'private',
      linkUrl: '#contact',
      stack: ['REACT.JS', 'NODE.JS', 'AI/ML', 'MONGODB'],
      themeColor: 'yellow',
      // Dynamic styles mapped strictly to HSL tailwind values for premium look
      borderHover: 'hover:border-yellow-500/60 hover:shadow-[0_0_30px_rgba(234,179,8,0.25),_inset_0_0_20px_rgba(234,179,8,0.08)]',
      borderActive: 'border-yellow-500/40 shadow-[0_0_50px_rgba(234,179,8,0.25)]',
      textTheme: 'text-yellow-400',
      textDarkTheme: 'text-yellow-500',
      bgTag: 'bg-yellow-950/20 border-yellow-500/30',
      glowBg: 'rgba(234, 179, 8, 0.18)',
      btnTheme: 'bg-yellow-600 hover:bg-yellow-700',
      summary: 'COMPREHENSIVE AGRICULTURAL EMPOWERMENT PLATFORM WITH LOCALIZED FARMER NEWS, DYNAMIC MARKET YARD PRICING GRIDS, AND AN ADMIN PANEL. WINNER OF 🏆 RS. 2.43 LAKH SSIP GOVERNMENT FUNDING.',
      highlights: [
        'Winner of prestigious Rs. 2.43 Lakh SSIP Government Funding.',
        'Integrated localized farmer news and distribution network channels.',
        'Dynamic market yard pricing grids providing real-time crop trading metrics.',
        'Administrative dashboard control panels for secure agricultural database oversight.'
      ]
    },
    {
      id: 'urban-intel',
      title: 'URBAN INTEL AI',
      category: 'Full Stack',
      shortDesc: 'Intelligent civic governance module containing user authorization controls, active incident reports, and databases monitoring municipal resource rates.',
      tag: 'Smart City Infrastructure',
      icon: Building2,
      img: '/images/urban-intel.jpg',
      linkType: 'linkedin',
      linkUrl: 'https://www.linkedin.com/in/aryan-buha-874a5434b/',
      stack: ['REACT.JS', 'SUPABASE', 'REST APIS'],
      themeColor: 'cyan',
      borderHover: 'hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.25),_inset_0_0_20px_rgba(6,182,212,0.08)]',
      borderActive: 'border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)]',
      textTheme: 'text-cyan-400',
      textDarkTheme: 'text-cyan-500',
      bgTag: 'bg-cyan-950/20 border-cyan-500/30',
      glowBg: 'rgba(6, 182, 212, 0.18)',
      btnTheme: 'bg-cyan-600 hover:bg-cyan-700',
      summary: 'INTELLIGENT CIVIC GOVERNANCE MODULE CONTAINING USER AUTHORIZATION CONTROLS, ACTIVE INCIDENT REPORTS, AND DATABASES MONITORING MUNICIPAL RESOURCE RATES.',
      highlights: [
        'Implemented secure user authorization levels and access controls.',
        'Real-time incident dashboard reporting active civic anomalies instantly.',
        'Aggregated analytical databases monitoring municipal resource and water rates.',
        'Responsive layout designed specifically for centralized monitoring setups.'
      ]
    },
    {
      id: 'terraforge',
      title: 'TERRAFORGE PLATFORM',
      category: 'Full Stack Platforms',
      shortDesc: 'Innovative smart land and environmental solutions platform using React.js, Node.js, Express.js, MongoDB, and AI integrations.',
      tag: 'Full Stack Platforms',
      icon: Globe,
      img: '/images/terraforge.png',
      linkType: 'linkedin',
      linkUrl: 'https://www.linkedin.com/in/aryan-buha-874a5434b/',
      stack: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'MONGODB', 'AI INTEGRATIONS'],
      themeColor: 'emerald',
      borderHover: 'hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.25),_inset_0_0_20px_rgba(16,185,129,0.08)]',
      borderActive: 'border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.25)]',
      textTheme: 'text-emerald-400',
      textDarkTheme: 'text-emerald-500',
      bgTag: 'bg-emerald-950/20 border-emerald-500/30',
      glowBg: 'rgba(16, 185, 129, 0.18)',
      btnTheme: 'bg-emerald-600 hover:bg-emerald-700',
      summary: 'DEVELOPED AN INNOVATIVE SMART LAND AND ENVIRONMENTAL SOLUTIONS PLATFORM USING REACT.JS, NODE.JS, EXPRESS.JS, MONGODB, AND AI INTEGRATIONS WITH SCALABLE ARCHITECTURE AND MODERN UI.',
      highlights: [
        'Modular Express.js backend system interfacing directly with remote sensor links.',
        'High-velocity data aggregation pipelines predicting regional environmental metrics.',
        'Responsive, modern user interface featuring dynamic geo-mapping and data visualizer graphs.',
        'Built with scalable microservice nodes allowing rapid additions of sensor tracking.'
      ]
    },
    {
      id: 'cityforge',
      title: 'CITYFORGE - MONITORING',
      category: 'Frontend & UI UX',
      shortDesc: 'Contributed to frontend development using React.js, Tailwind CSS, and JavaScript, designing responsive interfaces.',
      tag: 'Frontend & UI UX',
      icon: Activity,
      img: '/images/cityforge.jpg',
      linkType: 'linkedin',
      linkUrl: 'https://www.linkedin.com/in/aryan-buha-874a5434b/',
      stack: ['REACT.JS', 'TAILWIND CSS', 'JAVASCRIPT'],
      themeColor: 'fuchsia',
      borderHover: 'hover:border-fuchsia-500/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.25),_inset_0_0_20px_rgba(217,70,239,0.08)]',
      borderActive: 'border-fuchsia-500/40 shadow-[0_0_50px_rgba(217,70,239,0.25)]',
      textTheme: 'text-fuchsia-400',
      textDarkTheme: 'text-fuchsia-500',
      bgTag: 'bg-fuchsia-950/20 border-fuchsia-500/30',
      glowBg: 'rgba(217, 70, 239, 0.18)',
      btnTheme: 'bg-fuchsia-600 hover:bg-fuchsia-700',
      summary: 'CONTRIBUTED TO FRONTEND DEVELOPMENT USING REACT.JS, TAILWIND CSS, AND JAVASCRIPT, DESIGNING RESPONSIVE INTERFACES AND IMPLEMENTING INTERACTIVE USER-FACING FEATURES FOR SMART URBAN ENVIRONMENT MONITORING.',
      highlights: [
        'Designed high-fidelity responsive user interfaces for smart urban monitoring.',
        'Created interactive layouts and charts mapping crowd density, noise, and AQI indices.',
        'Optimized frontend assets and states ensuring fast, sub-1s initial page loads.',
        'Clean component layout built strictly with Tailwind CSS styling and modular JavaScript.'
      ]
    }
  ]

  // Smooth scroll helper to navigate directly to Contact Section
  const handleContactNavigation = (e) => {
    e.preventDefault();
    setSelectedProject(null);
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black select-none border-t border-white/5">
      {/* Decorative ambient glow nodes */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-red-950/10 blur-3xl animated-glow-bg pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neutral-900/30 blur-3xl animated-glow-bg pointer-events-none" style={{ animationDelay: '-3s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-2">
          <div className="text-red-500 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
            portfolio.projects()
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Projects</h2>
          <div className="h-1 w-12 bg-red-600 rounded"></div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          <AnimatePresence mode="popLayout">
            {projectsData.map((proj) => {
              const Icon = proj.icon
              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(proj)}
                  className={`relative w-full max-w-[360px] h-[480px] rounded-2xl bg-neutral-950/70 border border-red-500/20 overflow-hidden flex flex-col justify-between transition-all duration-500 ${proj.borderHover} group cursor-pointer`}
                >
                  {/* Image Background overlay */}
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-all duration-700">
                    <img 
                      src={proj.img} 
                      alt={proj.title} 
                      className="w-full h-full object-cover opacity-35 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent"></div>
                  </div>

                  {/* Cyber Scanner and Corner elements */}
                  <div className="cyber-scanner-overlay opacity-20"></div>
                  <div className="cyber-corner cyber-corner-tl"></div>
                  <div className="cyber-corner cyber-corner-tr"></div>
                  <div className="cyber-corner cyber-corner-bl"></div>
                  <div className="cyber-corner cyber-corner-br"></div>

                  {/* Card Content */}
                  <div className="relative z-10 p-6 flex flex-col justify-between h-full w-full">
                    <div className="flex flex-col text-left items-start">
                      <span className={`font-mono text-[9px] tracking-widest ${proj.textTheme} border rounded-full px-2.5 py-0.5 ${proj.bgTag} uppercase font-semibold`}>
                        {proj.tag}
                      </span>
                      
                      <div className={`p-3 rounded-xl bg-neutral-900/40 border border-white/5 ${proj.textTheme} mt-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-neutral-800/60`}>
                        <Icon size={22} />
                      </div>

                      <h3 className={`text-xl font-bold tracking-tight text-white font-mono mt-4 group-hover:${proj.textTheme} transition-colors duration-300`}>
                        {proj.title}
                      </h3>
                    </div>

                    <div className="flex flex-col text-left w-full">
                      <hr className="border-t border-neutral-900 my-4" />
                      
                      <p className="text-xs text-neutral-400 leading-relaxed min-h-[48px] line-clamp-3">
                        {proj.shortDesc}
                      </p>
                      
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {proj.stack.map((st) => (
                          <span key={st} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 font-mono text-[9px] text-neutral-400">
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Details Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 select-text"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
              className={`w-full max-w-5xl rounded-lg overflow-hidden glass-panel border ${selectedProject.borderActive} relative flex flex-col max-h-[90vh] bg-neutral-950/95`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Soft dynamic header glow */}
              <div 
                className="absolute top-[-10%] left-20% w-[60%] h-[30%] pointer-events-none filter blur-[20px]" 
                style={{ background: `radial-gradient(ellipse at center, ${selectedProject.glowBg}, transparent 70%)` }}
              />

              {/* Window Header */}
              <div className="bg-black px-4 py-3 border-b border-white/5 flex items-center justify-between relative z-10">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-600 block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500 block"></span>
                </div>
                <div className="text-[10px] font-mono text-neutral-500 truncate px-4">
                  cat projects/{selectedProject.id}_profile.md
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-neutral-500 hover:text-white p-1 hover:bg-white/5 rounded transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto scrollbar text-left space-y-8 bg-black/40 relative z-10">
                
                {/* Title Section */}
                <div className="space-y-2 border-b border-white/5 pb-6">
                  <span className={`px-2.5 py-0.5 rounded border font-mono text-[9px] ${selectedProject.textTheme} ${selectedProject.bgTag} uppercase tracking-widest font-semibold`}>
                    {selectedProject.tag}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white select-text">
                    {selectedProject.title}
                  </h2>
                  <p className={`text-xs font-mono ${selectedProject.textDarkTheme} font-bold uppercase tracking-wider`}>// {selectedProject.category}</p>
                </div>

                {/* Main Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start select-text">
                  
                  {/* Left Column: Image Asset & Tech Stack */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-black/80 shadow-2xl p-3 flex items-center justify-center aspect-[4/3] max-w-full">
                      <div className="w-full h-full border border-white/5 rounded-lg p-1.5 bg-black/40 flex items-center justify-center relative z-10">
                        <img 
                          src={selectedProject.img} 
                          alt={selectedProject.title}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      
                      <div className="cyber-scanner-overlay opacity-30"></div>
                      <div className="cyber-corner cyber-corner-tl"></div>
                      <div className="cyber-corner cyber-corner-tr"></div>
                      <div className="cyber-corner cyber-corner-bl"></div>
                      <div className="cyber-corner cyber-corner-br"></div>
                    </div>

                    {/* Tech stack box */}
                    <div className="glass-panel p-5 rounded-xl space-y-3 font-mono bg-black/60 select-text">
                      <h4 className={`text-[10px] font-bold ${selectedProject.textTheme} uppercase tracking-wider flex items-center gap-1.5`}>
                        <Code size={12} /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {selectedProject.stack.map((st) => (
                          <span key={st} className={`px-2.5 py-1 rounded border font-mono text-[10px] text-neutral-300 ${selectedProject.bgTag}`}>
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Text Details */}
                  <div className="lg:col-span-7 space-y-6 select-text">
                    
                    {/* Project Overview */}
                    <div className="space-y-2 select-text">
                      <h3 className={`font-mono text-xs font-bold ${selectedProject.textTheme} uppercase tracking-wider flex items-center gap-1`}>
                        <span>&gt;_</span> Project Summary
                      </h3>
                      <p className="text-xs text-neutral-300 leading-relaxed font-sans mt-2 select-text text-justify text-justify-inter-character">
                        {selectedProject.summary}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                      <div className="space-y-3 select-text">
                        <h3 className={`font-mono text-xs font-bold ${selectedProject.textTheme} uppercase tracking-wider flex items-center gap-1`}>
                          <span>&gt;_</span> Key Features & Highlights
                        </h3>
                        <ul className="space-y-2 select-text">
                          {selectedProject.highlights.map((feat, idx) => (
                            <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2.5 leading-relaxed select-text">
                              <span className={`font-bold font-mono mt-0.5 flex-shrink-0 ${selectedProject.textTheme}`}>•</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer action bar */}
                <div className="border-t border-white/5 pt-6 flex flex-wrap items-center justify-between gap-4 select-text">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-2.5 rounded-full bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105"
                    >
                      Close Profile
                    </button>
                    {selectedProject.linkType === 'private' ? (
                      <button 
                        onClick={handleContactNavigation}
                        className={`px-6 py-2.5 rounded-full text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 flex items-center gap-2 ${selectedProject.btnTheme} shadow-[0_0_20px_rgba(234,179,8,0.2)]`}
                      >
                        <Lock size={13} /> Private - Contact Me
                      </button>
                    ) : (
                      <a 
                        href={selectedProject.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-2.5 rounded-full text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 flex items-center gap-2 ${selectedProject.btnTheme}`}
                      >
                        <LinkedInIcon size={14} /> View on LinkedIn
                      </a>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 select-text">PROJ_LOG_VERIFIED</span>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
