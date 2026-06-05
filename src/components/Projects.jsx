import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Terminal, Code, Cpu, Database, Folder, Play, Layers } from 'lucide-react'

// Inline custom GitHub Icon (consistent with Contact.jsx)
const GitHubIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 1024 1024" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      transform="scale(64)"
      fill="currentColor"
    />
  </svg>
)

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All', 'AI & ML', 'Web Dev', 'Systems']

  const projectsData = [
    {
      id: 'terraforge',
      title: 'TerraForge: Environmental OS',
      category: 'AI & ML',
      shortDesc: 'Offline environmental intelligence platform powered by local AI and live weather feeds.',
      tag: 'AI_INTEL',
      icon: Cpu,
      img: '/software dev img.jpg', // Using existing assets safely
      github: 'https://github.com/Aryanbuha890',
      live: '#home',
      stack: ['Python', 'TinyLlama', 'FastAPI', 'Pandas', 'NumPy'],
      summary: 'TerraForge is a local-first Environmental Intelligence OS designed to predict environmental hazards and support rural agricultural decisions. The system runs localized AI models (TinyLlama fine-tuned profiles) completely offline to ensure complete privacy, lower infrastructure dependencies, and absolute data sovereignty in remote regions.',
      highlights: [
        'Integrated live weather feeds and satellite telemetry forecasting scripts',
        'Built full multilingual voice assistance using offline STT/TTS modules',
        'Achieved 0ms external API dependency with 100% data sovereignty',
        'Top 8 SVNIT DotSlash 9.0 Hackathon Finalist project'
      ]
    },
    {
      id: 'urban-intel',
      title: 'Urban Intel AI Governance',
      category: 'AI & ML',
      shortDesc: 'Predictive Smart City Governance Platform with specialized foresting classifiers.',
      tag: 'CITY_INFRA',
      icon: Layers,
      img: '/AI & ML img.jpg',
      github: 'https://github.com/Aryanbuha890',
      live: '#home',
      stack: ['Scikit-learn', 'FastAPI', 'React.js', 'Tailwind CSS', 'PostgreSQL'],
      summary: 'Urban Intel AI is a next-generation predictive governance platform that monitors and foresees municipal infrastructure crises before they impact citizens. It utilizes a hybrid AI architecture that combines private offline LLM systems and tabular prediction pipelines.',
      highlights: [
        'Deploys 6 customized Random Forest forecasting models for city utilities',
        'Offline LLM integration allows safe localized data query pipelines without cloud leaks',
        'Real-time administrative dashboards indicating water, transit, and weather hazard risks',
        '1st Runner Up finish among 180+ teams at Ahmedabad University Ingenious 7.0'
      ]
    },
    {
      id: 'coastal-threat',
      title: 'Coastal Threat Alert System',
      category: 'Web Dev',
      shortDesc: 'AI + IoT coastal alert system for marine conservation and fisherfolk protection.',
      tag: 'CLIMATE_TECH',
      icon: Database,
      img: '/Full Stack dev img.jpg',
      github: 'https://github.com/Aryanbuha890',
      live: '#home',
      stack: ['React.js', 'Node.js', 'Express', 'Leaflet Map API', 'IoT Sensors'],
      summary: 'Coastal Threat Alert System provides role-based command modules to help monitor coastal erosion, toxic waste dump alert tracking, and sea-level rise anomalies. Designed to interface directly with low-latency IoT oceanic telemetry nodes.',
      highlights: [
        'Built 5 specialized dashboards tailored to civic defense, NGOs, scientists, and local fisherfolk',
        'Simulated dynamic tracking mapping of harmful algal blooms and coastal runoff vectors',
        'Shortlisted for the Grand Offline Round of HackOut 2025 at DAIICT'
      ]
    },
    {
      id: 'eunoia',
      title: 'Eunoia Homoeopathy Portal',
      category: 'Web Dev',
      shortDesc: 'Production clinic website with full consultation booker and secure patient routing.',
      tag: 'PRODUCTION_LIVE',
      icon: Folder,
      img: '/software dev img.jpg',
      github: 'https://github.com/Aryanbuha890',
      live: 'https://eunoiahomoeopathy.com', // placeholder URL structure
      stack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'Vite'],
      summary: 'Eunoia Homoeopathy is a full-production clinic portal providing automated consultant scheduling, service information, custom patient feedback portals, and SEO performance metrics.',
      highlights: [
        'Fully responsive UX with customized scheduling handlers',
        'Optimized build configurations resulting in a sub-1.2s page load speed index',
        'Currently deployed and operating for local clinical healthcare practices'
      ]
    },
    {
      id: 'cattle-health',
      title: 'Smart Cattle Prediction API',
      category: 'Systems',
      shortDesc: 'Intelligent dairy metrics predictor and classification backend logic.',
      tag: 'SYSTEMS_CORE',
      icon: Terminal,
      img: '/AI & ML img.jpg',
      github: 'https://github.com/Aryanbuha890',
      live: '#home',
      stack: ['Python', 'Scikit-learn', 'NumPy', 'Flask API', 'PDFKit'],
      summary: 'An advanced health classifier and predictive system that maps cattle vital indicators (body temp, rumination index) to forecast daily milk yield outputs and alert vet clinics of emerging sickness metrics.',
      highlights: [
        'Regression models reaching up to 90% validation accuracy metrics',
        'Automated telemetry logging that converts daily data into encrypted health report PDFs',
        'Integrated translation pipeline supporting Hindi, Gujarati, Marathi, and English layouts'
      ]
    }
  ]

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === activeCategory)

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black select-none border-t border-white/5">
      {/* Decorative ambient nodes */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-red-950/10 blur-3xl animated-glow-bg pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neutral-900/30 blur-3xl animated-glow-bg pointer-events-none" style={{ animationDelay: '-3s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left space-y-2">
            <div className="text-red-500 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
              portfolio.projects()
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Projects</h2>
            <div className="h-1 w-12 bg-red-600 rounded"></div>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 bg-neutral-950/60 p-1 rounded-xl border border-white/5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg font-mono text-xs tracking-wider transition-all duration-300 uppercase ${
                  activeCategory === cat
                    ? 'bg-red-600/15 border border-red-500/30 text-white font-bold shadow-[0_0_15px_rgba(239,68,68,0.15)]'
                    : 'border border-transparent text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
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
                  className="relative w-full max-w-[360px] h-[480px] rounded-2xl bg-neutral-950/70 border border-red-500/30 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-red-500/60 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(239,68,68,0.25),_inset_0_0_20px_rgba(239,68,68,0.08)] group cursor-pointer"
                >
                  {/* Image Background overlay */}
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-all duration-700">
                    <img 
                      src={proj.img} 
                      alt={proj.title} 
                      className="w-full h-full object-cover opacity-35 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 sharp-certificate"
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
                      <span className="font-mono text-[9px] tracking-widest text-red-400 border border-red-500/30 rounded-full px-2.5 py-0.5 bg-red-950/20 uppercase font-semibold">
                        {proj.tag}
                      </span>
                      
                      <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 mt-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600/20 group-hover:border-red-500/50">
                        <Icon size={22} />
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-white font-mono mt-4 group-hover:text-red-400 transition-colors duration-300">
                        {proj.title}
                      </h3>
                    </div>

                    <div className="flex flex-col text-left w-full">
                      <hr className="border-t border-neutral-900 my-4" />
                      
                      <p className="text-xs text-neutral-400 leading-relaxed min-h-[48px] line-clamp-3">
                        {proj.shortDesc}
                      </p>
                      
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {proj.stack.slice(0, 3).map((st) => (
                          <span key={st} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 font-mono text-[9px] text-neutral-400">
                            {st}
                          </span>
                        ))}
                        {proj.stack.length > 3 && (
                          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 font-mono text-[9px] text-red-500">
                            +{proj.stack.length - 3} More
                          </span>
                        )}
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
              className="w-full max-w-5xl rounded-lg overflow-hidden glass-panel border border-red-500/40 shadow-[0_0_50px_rgba(239,68,68,0.25)] relative flex flex-col max-h-[90vh] bg-neutral-950/95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Window Header */}
              <div className="bg-black px-4 py-3 border-b border-white/5 flex items-center justify-between">
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
              <div className="flex-1 p-6 md:p-8 overflow-y-auto scrollbar text-left space-y-8 bg-black/40">
                
                {/* Title Section */}
                <div className="space-y-2 border-b border-white/5 pb-6">
                  <span className="px-2.5 py-0.5 rounded bg-red-950/30 border border-red-500/20 font-mono text-[9px] text-red-400 uppercase tracking-widest font-semibold">
                    {selectedProject.tag}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white select-text">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xs font-mono text-red-500/80 font-bold uppercase tracking-wider">// {selectedProject.category}</p>
                </div>

                {/* Main Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start select-text">
                  
                  {/* Left Column: Image Asset & Tech Stack */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="relative group rounded-xl overflow-hidden border border-red-500/30 bg-black/80 shadow-2xl p-3 flex items-center justify-center aspect-[4/3] max-w-full">
                      <div className="w-full h-full border border-red-500/20 rounded-lg p-1.5 bg-black/40 flex items-center justify-center relative z-10">
                        <img 
                          src={selectedProject.img} 
                          alt={selectedProject.title}
                          className="w-full h-full object-cover rounded-lg sharp-certificate"
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
                      <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Code size={12} /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {selectedProject.stack.map((st) => (
                          <span key={st} className="px-2.5 py-1 rounded bg-red-950/20 border border-red-500/20 font-mono text-[10px] text-neutral-300">
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
                      <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                        <span>&gt;_</span> Project Summary
                      </h3>
                      <p className="text-xs text-neutral-300 leading-relaxed font-sans mt-2 select-text text-justify text-justify-inter-character">
                        {selectedProject.summary}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                      <div className="space-y-3 select-text">
                        <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                          <span>&gt;_</span> Key Features & Highlights
                        </h3>
                        <ul className="space-y-2 select-text">
                          {selectedProject.highlights.map((feat, idx) => (
                            <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2.5 leading-relaxed select-text">
                              <span className="text-red-500 font-bold font-mono mt-0.5 flex-shrink-0">•</span>
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
                      className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:scale-105"
                    >
                      Close Profile
                    </button>
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full border border-white/10 hover:border-red-500/30 bg-white/[0.02] hover:bg-white/[0.06] text-neutral-300 hover:text-white text-xs font-mono tracking-wider uppercase transition-all duration-300 hover:scale-105 flex items-center gap-2"
                      >
                        <GitHubIcon size={14} /> Repository
                      </a>
                    )}
                    {selectedProject.live && selectedProject.live !== '#home' && (
                      <a 
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full border border-red-500/20 hover:border-red-500/40 bg-red-600/10 hover:bg-red-600/20 text-red-400 hover:text-white text-xs font-mono tracking-wider uppercase transition-all duration-300 hover:scale-105 flex items-center gap-2"
                      >
                        <ExternalLink size={14} /> Live Demo
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
