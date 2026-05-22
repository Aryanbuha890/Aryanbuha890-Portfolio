import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, ChevronDown, ChevronUp, Calendar, MapPin, Users, Award, ShieldAlert, Cpu, Database } from 'lucide-react'

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false)
  const [selectedAch, setSelectedAch] = useState(null)

  const achievements = [
    {
      id: 'ingenious',
      title: '🏆 1st Runner Up – Ingenious 7.0',
      org: 'Ahmedabad University',
      desc: 'Urban Intel AI: Smart City Governance Platform with Hybrid AI & Local LLM',
      badge: 'Generative AI',
      img: '/images/AU Certificate.jpeg',
      date: 'February 2025',
      location: 'Ahmedabad University Campus',
      project: 'Urban Intel AI',
      summary: 'Secured a 1st Runner Up (2nd Place) finish among 180+ teams at Ahmedabad University\'s Ingenious Hackathon 7.0. Developed a next-gen Smart City Governance Platform designed to solve complex urban challenges.',
      features: [
        'Hybrid AI architecture combining predictive risk forecasting with local generative models',
        '6 specialized Random Forest models for accurate risk predictions across urban sectors',
        'Private Local LLM (TinyLlama) integrated for secure offline policy directives',
        'Interactive real-time spatial dashboard mapping risk indices',
        'Complete end-to-end policy recommendation reporting interface'
      ],
      skills: ['Generative AI', 'TinyLlama Local LLM', 'Random Forest Classifier', 'Python ML', 'React.js', 'Next.js'],
      impact: [
        '2nd place finish out of 180+ competitive national teams',
        '100% secure, offline AI inference for data privacy',
        'Strategic governance metric mapping with precise outputs'
      ],
      team: [
        { name: 'Aryan Buha', role: 'Full-Stack Developer & ML Lead' },
        { name: 'Neel Prajapati', role: 'AI Pipeline Engineer' },
        { name: 'Sumit Patel', role: 'Backend Data Lead' },
        { name: 'Om Khatri', role: 'Presentation Architect' }
      ]
    },
    {
      id: 'eunoia',
      title: '🌐 Eunoia Homoeopathy',
      org: 'Live Client Project',
      desc: 'End-to-end full-stack website development, custom domain setup, and cloud hosting',
      badge: 'Web Development',
      img: '/images/Eunoia image.png',
      date: 'December 2024',
      location: 'Live Service Deployment',
      project: 'Eunoia Homoeopathy Portal',
      summary: 'Led the end-to-end design, development, and hosting workflows for a real-world clinic portal. Assembled client requirements and translated them into an elegant, responsive medical service presence.',
      features: [
        'Intuitive UI/UX design with custom medical scheduling details',
        'Robust search and routing pipelines built for optimal page load speed',
        'Custom cloud hosting, secure deployment, and hot-swapping backups',
        'DNS domain configuration and optimization for indexing'
      ],
      skills: ['React.js', 'Next.js', 'UI/UX Design', 'Cloud Hosting', 'Domain Mapping', 'HTML5 & CSS3'],
      impact: [
        'Delivered highly performant live production platform',
        'Established full-stack search readiness and domain security parameters',
        '100% client satisfaction on delivery and deployment'
      ],
      team: [
        { name: 'Aryan Buha', role: 'Lead Full-Stack Developer' },
        { name: 'Neel Prajapati', role: 'UI/UX Designer' },
        { name: 'Sumit Patel', role: 'Deployment Architect' },
        { name: 'Om Khatri', role: 'Client Relations' }
      ]
    },
    {
      id: 'lj',
      title: '🏆 Finalist – Hackovate 2025',
      org: 'LJ University',
      desc: 'Top 40 out of 240+ teams with Smart Cattle Health & Milk Prediction System',
      badge: 'AI/ML Project',
      img: '/images/LJ Certificate.jpg',
      date: 'January 2025',
      location: 'Ahmedabad, Gujarat',
      project: 'Smart Cattle Health & Milk Prediction System',
      summary: 'Secured a Top 40 Finalist position among 240+ teams at LJ University\'s Hackovate 2025. Built an AI-powered dairy management platform that transforms cattle health monitoring and milk production forecasting.',
      features: [
        'Real-time cattle health monitoring & diagnostic scoring',
        'AI models for milk yield prediction (Linear Regression) and disease detection (15+ classes)',
        'Multilingual support (English, Hindi, Gujarati, Marathi) for regional farmers',
        'Automated farm production and health reports (PDF export)',
        'Mobile-first responsive dashboard and batch processing for large herds'
      ],
      skills: ['Next.js 14', 'React 18', 'FastAPI', 'Python ML', 'Supabase PostgreSQL', 'Tailwind CSS', 'Shadcn/UI'],
      impact: [
        '90% prediction accuracy in milk yield forecasts',
        '85% detection accuracy in cattle disease scoring',
        'Streamlined herd telemetry tracking for dairy farm managers'
      ],
      team: [
        { name: 'Aryan Buha', role: 'Project Lead & Architect' },
        { name: 'Neel Prajapati', role: 'AI/ML Engineer' },
        { name: 'Patel Vrund', role: 'Frontend Developer' },
        { name: 'Sumit Patel', role: 'Backend Developer' }
      ]
    },
    {
      id: 'daiict',
      title: '💻 HackOut 2025',
      org: 'DAIICT',
      desc: 'Coastal Threat Alert System using AI, IoT, and satellite telemetry',
      badge: 'Climate Tech',
      img: '/images/DA-IICT Certificate.jpg',
      date: 'February 2025',
      location: 'DAIICT Campus, Gandhinagar',
      project: 'Coastal Threat Alert System',
      summary: 'Developed a high-fidelity Coastal Threat Alert system that integrates satellite imaging feeds and IoT sensor streams to predict and warn coastal communities of incoming climate hazards.',
      features: [
        'Geospatial satellite feed processing and anomaly highlighting',
        'Real-time sensor integrations (tide level, wind velocity, humidity)',
        'FastAPI microservice handling alerts and high-frequency data ingestion',
        'Interactive map display mapping risk level indices',
        'Automated SMS warning dispatcher for coastal security agencies'
      ],
      skills: ['React.js', 'FastAPI', 'Python ML', 'Geospatial APIs', 'Supabase', 'Tailwind CSS', 'Twilio API'],
      impact: [
        'Sub-second alert propagation to emergency nodes',
        'Accurate wave threat modeling using physical formulas',
        'Responsive administrative dashboard mapping mock live threats'
      ],
      team: [
        { name: 'Aryan Buha', role: 'Full-Stack Developer & API Lead' },
        { name: 'Neel Prajapati', role: 'Spatial Data Engineer' },
        { name: 'Vrund Patel', role: 'Mapping Designer' },
        { name: 'Sumit Patel', role: 'IoT Firmware Integrator' }
      ]
    },
    {
      id: 'nasa',
      title: '🚀 NASA Space Apps Challenge',
      org: 'NASA & Hack2skill',
      desc: 'Global hackathon focused on space exploration and Earth science solutions',
      badge: 'Space Tech',
      img: '/images/NASA Certificate.jpg',
      date: 'October 2024',
      location: 'Regional Center, India',
      project: 'Orbital Telemetry and Earth Science Modeling',
      summary: 'Participated in the world\'s largest global space-tech hackathon. Worked on modeling orbital parameters and integrating Earth Observation datasets to solve complex environmental issues.',
      features: [
        'Telemetry array ingestion and parsing scripts',
        'Dynamic map rendering mapping global heat indices and temperature anomalies',
        'Custom database mapping orbital assets and telemetry tracking logs'
      ],
      skills: ['React.js', 'Python Data Processing', 'GIS Mapping', 'JSON Stream Parser', 'CSS Glassmorphism'],
      impact: [
        'Successfully ingested and mapped NASA Earth data packets',
        'Interactive UI showing visual atmospheric changes'
      ],
      team: [
        { name: 'Aryan Buha', role: 'Project Coordinator & Frontend Architect' },
        { name: 'Neel Prajapati', role: 'Data Parser & ML Engineer' }
      ]
    },
    {
      id: 'isro',
      title: '🛰️ Bharatiya Antariksh Hackathon',
      org: 'ISRO',
      desc: 'National space technology hackathon by Indian Space Research Organisation',
      badge: 'Space Innovation',
      img: '/images/ISRO Certificate.png',
      date: 'August 2024',
      location: 'National Virtual Platform',
      project: 'Geospatial Image Analytics Suite',
      summary: 'Engaged in solving core national-level challenges proposed by ISRO engineers, focusing on parsing and extracting insights from raw Bhuvan spatial imagery feeds.',
      features: [
        'Geospatial coordinate mapping and feature overlays',
        'Fast raw image stream pipeline and edge filtering utilities',
        'Interactive React analytics layout mapping land cover categories'
      ],
      skills: ['Python OpenCV', 'GIS Mapping Tools', 'React.js', 'Flask Backend', 'Matplotlib API'],
      impact: [
        'Created optimized analytical pipelines processing crop indexing filters',
        'Robust dashboard modeling satellite pixel classifications'
      ],
      team: [
        { name: 'Aryan Buha', role: 'Full-Stack & System Design' },
        { name: 'Neel Prajapati', role: 'CV Pipeline Architect' }
      ]
    },
    {
      id: 'itm',
      title: '🎮 ITM Game Jam',
      org: 'ITM University',
      desc: 'High-speed game design competition showcasing creative gameplay mechanics',
      badge: 'Game Dev',
      img: '/images/ITM-Gamejam Certificate.jpg',
      date: 'September 2024',
      location: 'ITM University Campus',
      project: 'Cyber-Logic Puzzle Simulator',
      summary: 'Created a highly-interactive logical game environment within a restricted 48-hour schedule, combining physics mechanics with intuitive user interfaces.',
      features: [
        'Custom physics puzzle engine using core C# script modules',
        'Dynamic level loading and responsive sound feedback boards',
        'Sleek coder-themed UI layouts and custom sprite rendering components'
      ],
      skills: ['Unity Engine', 'C# Scripting', 'Physics Engines', 'UI Design Layouts', 'Audio Synthesizers'],
      impact: [
        'Completed polished, playable multi-level platformer within 48 hours',
        'High ratings for UI aesthetics and mechanic originality'
      ],
      team: [
        { name: 'Aryan Buha', role: 'Lead Mechanic Programmer' },
        { name: 'Neel Prajapati', role: 'Level Designer' }
      ]
    }
  ]

  const visibleAchievements = showAll ? achievements : achievements.slice(0, 3)

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-black select-none">
      {/* Glow Nodes */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-red-950/10 blur-3xl animated-glow-bg pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-neutral-900/30 blur-3xl animated-glow-bg pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-2">
          <div className="text-red-500 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
            portfolio.achievements()
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Latest Achievements</h2>
          <div className="h-1 w-12 bg-red-600 rounded"></div>
        </div>

        {/* Staggered Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleAchievements.map((ach) => (
              <motion.div
                key={ach.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedAch(ach)}
                className="group cursor-pointer rounded-lg overflow-hidden glass-panel glass-panel-hover flex flex-col h-full hover:-translate-y-2 relative"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-video overflow-hidden bg-neutral-950 border-b border-white/5 flex items-center justify-center">
                  <img 
                    src={ach.img} 
                    alt={ach.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500 ease-out"
                  />
                  {/* Overlay hover effect */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-xs">
                    <div className="px-4 py-2 rounded bg-red-600 text-white font-mono text-xs flex items-center gap-1.5 tracking-wider uppercase shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                      View details <ExternalLink size={12} />
                    </div>
                  </div>
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/85 backdrop-blur-md border border-white/10 font-mono text-[9px] text-red-400 uppercase tracking-widest">
                    {ach.badge}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-white group-hover:text-red-500 transition-colors line-clamp-1">
                      {ach.title}
                    </h3>
                    <p className="text-[11px] font-mono text-red-500 font-medium">
                      {ach.org}
                    </p>
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                      {ach.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                    <span>{ach.date}</span>
                    <span className="text-red-500/80 group-hover:text-red-500 transition-colors">Details &gt;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              setShowAll(!showAll)
              if (showAll) {
                document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-6 py-3 rounded border border-neutral-800 hover:border-red-500 bg-neutral-950 hover:bg-red-600/5 text-neutral-400 hover:text-white font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_15px_rgba(239,68,68,0.03)]"
          >
            {showAll ? (
              <>
                <ChevronUp size={14} /> View Less Achievements
              </>
            ) : (
              <>
                <ChevronDown size={14} /> View More Achievements
              </>
            )}
          </button>
        </div>
      </div>

      {/* Achievement Details Overlay Modal */}
      <AnimatePresence>
        {selectedAch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 select-text"
            onClick={() => setSelectedAch(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl rounded-lg overflow-hidden glass-panel border-red-500/20 shadow-2xl relative flex flex-col max-h-[90vh] bg-neutral-950/95"
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
                  cat achievements/{selectedAch.id}_record.md
                </div>
                <button 
                  onClick={() => setSelectedAch(null)}
                  className="text-neutral-500 hover:text-white p-1 hover:bg-white/5 rounded transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto scrollbar text-left space-y-8 bg-black/40">
                
                {/* Title Section */}
                <div className="space-y-2 border-b border-white/5 pb-6">
                  <span className="px-2 py-0.5 rounded bg-red-950/30 border border-red-500/20 font-mono text-[9px] text-red-400 uppercase tracking-widest">
                    {selectedAch.badge}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white select-text">
                    {selectedAch.title}
                  </h2>
                  <p className="text-sm font-mono text-red-500 font-bold">{selectedAch.org}</p>
                </div>

                {/* Main Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start select-text">
                  
                  {/* Left Column: Image Asset */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="relative group rounded-lg overflow-hidden border border-white/5 bg-black shadow-lg">
                      <img 
                        src={selectedAch.img} 
                        alt={selectedAch.title}
                        className="w-full h-auto object-contain max-h-[300px] block mx-auto hover:scale-102 transition-transform duration-300"
                      />
                    </div>

                    {/* Metadata boxes */}
                    <div className="glass-panel p-4 rounded-lg space-y-3 font-mono text-xs text-neutral-400 bg-black/60 select-text">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-red-500" />
                        <span>Date: {selectedAch.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-red-500" />
                        <span>Venue: {selectedAch.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Text Details */}
                  <div className="lg:col-span-7 space-y-6 select-text">
                    
                    {/* Project overview */}
                    <div className="space-y-2 select-text">
                      <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">&gt;_ Project Summary</h3>
                      <h4 className="text-sm font-bold text-white font-mono">{selectedAch.project}</h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-sans mt-2 select-text">
                        {selectedAch.summary}
                      </p>
                    </div>

                    {/* Key Technical Features */}
                    <div className="space-y-3 select-text">
                      <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">&gt;_ Technical Features</h3>
                      <ul className="space-y-2 select-text">
                        {selectedAch.features.map((feat, idx) => (
                          <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2.5 leading-relaxed select-text">
                            <span className="text-red-500 font-bold font-mono mt-0.5 flex-shrink-0">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack tags */}
                    <div className="space-y-3 select-text">
                      <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">&gt;_ Stack & Integration</h3>
                      <div className="flex flex-wrap gap-1.5 select-text">
                        {selectedAch.skills.map((stack, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 rounded bg-neutral-900 border border-white/5 text-[10px] font-mono text-neutral-300 select-text"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact metrics */}
                    <div className="space-y-3 select-text">
                      <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">&gt;_ Impact & Metrics</h3>
                      <div className="p-4 rounded-lg bg-neutral-900/60 border border-white/5 space-y-2 select-text">
                        {selectedAch.impact.map((metric, idx) => (
                          <div key={idx} className="text-xs text-neutral-300 flex items-center gap-2 select-text">
                            <Award size={14} className="text-red-500 flex-shrink-0" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Team info */}
                    <div className="space-y-3 select-text">
                      <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">&gt;_ Team Roster</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 select-text">
                        {selectedAch.team.map((member, idx) => (
                          <div 
                            key={idx} 
                            className="px-3 py-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono select-text"
                          >
                            <span className="text-white flex items-center gap-2 select-text">
                              <Users size={12} className="text-red-500" />
                              {member.name}
                            </span>
                            <span className="text-neutral-500 text-[10px] uppercase select-text">{member.role}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer action bar */}
                <div className="border-t border-white/5 pt-6 flex flex-wrap items-center justify-between gap-4 select-text">
                  <div className="flex gap-3">
                    <a 
                      href="https://github.com/Aryanbuha89" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-red-600 hover:text-white transition-all flex items-center gap-1.5 shadow-md"
                    >
                      View Project <ExternalLink size={12} />
                    </a>
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedAch(null)}
                      className="px-4 py-2 rounded border border-neutral-800 hover:border-red-500 bg-neutral-950 text-neutral-300 hover:text-white text-xs font-mono tracking-wider uppercase transition-all"
                    >
                      Connect
                    </a>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 select-text">ARYAN_BOX_V1_VERIFIED</span>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
