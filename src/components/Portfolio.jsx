import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, ChevronDown, ChevronUp, Calendar, MapPin, Award } from 'lucide-react'

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false)
  const [selectedAch, setSelectedAch] = useState(null)

  const achievements = [
    {
      id: 'ibm-ai-challenge',
      title: '🏆 2nd Rank Across Gujarat – IBM AI Challenge 2026',
      org: 'IBM, CSRBOX & iHUB',
      desc: 'AI agricultural platform strengthening India\'s farming ecosystem with practical tech solutions',
      badge: 'AI Innovation',
      img: '/images/IBM Certificate.jpeg',
      date: 'March 2026',
      location: 'iHUB, Ahmedabad',
      summary: 'Secured the prestigious 2nd Position across the entire state of Gujarat at the IBM AI Innovation Challenge 2026, organized in collaboration with CSRBOX® and showcased at iHUB, Ahmedabad. Competing among shortlisted teams from across the state, we presented an AI-driven solution focused on strengthening India’s agricultural ecosystem — aiming to make technology more accessible, practical, and impactful for the farming community. Reflects months of teamwork, resilience, and problem-solving under pressure. Grateful for the mentorship, guidance, and unwavering support from Jatindra Suthar, Zeel Patel, and Nikunj Sidpara.',
      highlights: [
        'Ranked 2nd in the entire state of Gujarat out of numerous competitive teams',
        'Pitched AI agricultural solution live to IBM executives and iHUB mentors',
        'Focused on making high-end AI intelligence accessible and practical for rural farmers',
        'Reflected months of rigorous system development and pressure-testing'
      ]
    },
    {
      id: 'dotslash-9',
      title: '🚀 Top 8 Finalists – DotSlash 9.0 Hackathon',
      org: 'SVNIT Surat, ACM & ASHINE',
      desc: 'TerraForge: Environmental Intelligence OS using local AI models and live telemetry',
      badge: 'Hackathon Finalist',
      img: '/images/Dotslash Certificate.png',
      date: 'January 2026',
      location: 'SVNIT Surat',
      summary: 'Selected among the Top 8 Finalists at the prestigious 30-hour DotSlash 9.0: Root To Ideas Hackathon, competing against 550+ teams from across the country! Representing The Maharaja Sayajirao University of Baroda (MSUB), Vadodara, we designed and built TerraForge - Environmental Intelligence OS. TerraForge is an AI-powered platform that helps governments and farmers make proactive decisions using real-time environmental data and local AI models.',
      highlights: [
        'Selected for the Grand Finale Top 8 out of 550+ registered teams nationwide',
        'Runs AI models locally to ensure zero dependency, lower costs, and complete offline privacy',
        'Predicts regional environmental risks and agricultural impact using live weather feeds',
        'Provides multilingual voice assistance to empower rural users with crucial safety data'
      ]
    },
    {
      id: 'ingenious-7',
      title: '🥈 1st Runner Up – Ingenious Hackathon 7.0',
      org: 'Ahmedabad University',
      desc: 'Urban Intel AI: Smart City Governance Platform with 6 forecasting models and offline private LLM',
      badge: 'Hackathon Winner',
      img: '/images/AU Certificate.jpeg',
      date: 'February 2025',
      location: 'Ahmedabad University',
      summary: 'Secured the 1st Runner Up position among 180+ participating teams at the Ingenious Hackathon 7.0 hosted by Ahmedabad University! Built Urban Intel AI, a next-gen Smart City Governance Platform designed to solve real-world urban crises before they happen. Engineered a Hybrid AI Architecture that runs entirely offline for complete data privacy and reliability.',
      highlights: [
        '1st Runner Up finish out of 180+ highly competitive national student teams',
        '6 Specialized Random Forest Models: High-precision forecasting across water, traffic, and health hazards',
        'Private Local LLM: Integrates TinyLlama locally to generate immediate governance directives',
        '100% Data Sovereignty: Entire AI stack runs offline without external API dependencies'
      ]
    },
    {
      id: 'hackovate-finals',
      title: '🏆 Finalist – LJ Hackovate 2025',
      org: 'LJ University',
      desc: 'Top 40 out of 240+ teams with Smart Cattle Health & Milk Predictions System',
      badge: 'AI/ML Project',
      img: '/images/LJ Certificate.jpg',
      date: 'January 2025',
      location: 'LJ University, Ahmedabad',
      summary: 'Secured a spot in the TOP 40 FINALISTS out of 240+ teams at LJ University’s Hackovate 2025! Developed the Smart Cattle Health & Milk Predictions System, an AI-powered platform transforming dairy farming with predictive insights & intelligent data analysis. Presenting at Hackovate challenged us to think bigger, refine better, and validate our idea’s real-world potential to revolutionize agriculture.',
      highlights: [
        'Milk Yield Prediction: Regression models for highly accurate forecasting',
        'Disease Detection: Classification models identifying over 15+ complex veterinary conditions',
        'Farm Telemetry: Real-time health monitoring dashboards with automated PDF reports',
        'User Centric: Supports multi-language setups (EN/Hindi/Gujarati/Marathi) with mobile-first UI'
      ]
    },
    {
      id: 'hackout-2025',
      title: '🌊 HackOut 2025 – DAIICT',
      org: 'DAIICT, Gandhinagar',
      desc: 'Coastal Threat Alert System built to protect marine ecosystems and local fisherfolk',
      badge: 'Climate Tech',
      img: '/images/DA-IICT Certificate.jpg',
      date: 'February 2025',
      location: 'DAIICT Gandhinagar',
      summary: 'Shortlisted for the offline round of HackOut 2025 at DAIICT (Gandhinagar) with only 250–300 teams out of 4000+ registrations! Developed the Coastal Threat Alert System: an AI + IoT + satellite-data powered platform designed to protect coastal ecosystems and vulnerable communities.',
      highlights: [
        'Shortlisted offline round out of 4000+ national registrations',
        'Role-Based Command: 5 distinct dashboards for governments, disaster teams, NGOs, fisherfolk, and civil defence',
        'Real-time Detection: Monitors sea-level rise, cyclone tracking, harmful algal blooms, and illegal waste dumping',
        'Blue Carbon Advocacy: Actively protects crucial mangroves, wetlands, and seagrass ecosystems'
      ]
    },
    {
      id: 'isro-hackathon',
      title: '🌍 Bharatiya Antariksh Hackathon 2025',
      org: 'ISRO & Hack2skill',
      desc: 'Certificate of Acknowledgement for submitting a space technology proposal',
      badge: 'Space Tech',
      img: '/images/ISRO Certificate.png',
      date: 'January 2025',
      location: 'Virtual National Event',
      summary: 'Proud to share that I have received a Certificate of Acknowledgement for submitting my idea to the Bharatiya Antariksh Hackathon 2025. This milestone reflects a commitment to innovation, exploration, and continuous learning in the domain of space and technology. Grateful to Hack2skill and ISRO - Indian Space Research Organization for providing this valuable platform to contribute to India’s space innovation journey.',
      highlights: [
        'Recognized directly by ISRO & Hack2skill with official Certificate of Acknowledgement',
        'Developed novel concepts focused on space exploration and satellite data mapping',
        'Demonstrates deep dedication to advanced national technology research and development'
      ]
    },
    {
      id: 'mumbai-pulse',
      title: '🚀 CITYFORGE – MUMBAI PULSE',
      org: 'NASA Space Apps Challenge 2025',
      desc: 'Real-time urban platform tracking heat islands, air quality, and water resources',
      badge: 'Climate Tech',
      img: '/images/NASA Certificate.jpg',
      date: 'October 2025',
      location: 'Space Apps Event',
      summary: 'Launched CITYFORGE – MUMBAI PULSE for the NASA Space Apps Challenge 2025. Mumbai Pulse is a real-time, data-driven platform that empowers urban planners and citizens to better understand and act on environmental health challenges across heat, air quality, and water resources by integrating NASA Earth Observation (EO) and weather datasets.',
      highlights: [
        'Urban Heat Islands – Identifies heat-stressed zones and suggests cooling interventions',
        'Water Resources – Tracks lakes, rainfall patterns, and evaluates local water quality',
        'Air Quality – Integrates real-time AQI, pollution analytics, and health advisories',
        'Urban Development – Visualizes growth trends and infrastructure overlays dynamically'
      ]
    },
    {
      id: 'nasa-champions',
      title: '🏆 Champions – NASA Space Apps 2025',
      org: 'NASA Space Apps Vallabh Vidyanagar',
      desc: 'Champions and 1st place winners at NASA Space Apps Challenge local event',
      badge: 'Hackathon Champion',
      img: '/images/NASA WINNER.jpg',
      date: 'October 2025',
      location: 'Vallabh Vidyanagar Event',
      summary: 'Emerged as the Champions of the NASA Space Apps Challenge 2025, Vallabh Vidyanagar Local Event! This is a huge milestone as our very first victory. We worked day and night, pushed boundaries, solved real-world challenges, and learned more than we ever imagined. Winning at a NASA-supported hackathon has truly boosted our confidence and motivation.',
      highlights: [
        'Secured 1st Place Champions title at local NASA-supported event',
        'Pushed technical limits in a high-speed hackathon environment',
        'Gained profound confidence and experience in building robust scalable platforms'
      ]
    },
    {
      id: 'eunoia-live',
      title: '🚀 Eunoia Homoeopathy Website Live',
      org: 'Live Client Deployment',
      desc: 'Full-stack medical portal deployed and optimized for professional healthcare',
      badge: 'Web Development',
      img: '/images/Eunoia image.png',
      date: 'December 2024',
      location: 'Live Service Deployment',
      summary: 'The official website for Eunoia Homoeopathy is now live! This real-world project gave the opportunity to work end-to-end — from gathering requirements to deploying a fully functional website. Gained hands-on experience in understanding client expectations, making informed UI/UX decisions, deployment, hosting workflows, domain setup, and launch readiness.',
      highlights: [
        'Successfully built and launched clinical healthcare website to production',
        'Managed end-to-end client engagement and requirement mapping',
        'Configured custom secure domain, SEO tagging, and highly responsive page layouts'
      ]
    },
    {
      id: 'itm-gamejam-baroda',
      title: '🏆 Scream-to-Survive Game Jam',
      org: 'ITM SLS Baroda University',
      desc: 'Innovative scream-controlled game prototype developed for ITM Game Jam',
      badge: 'Game Dev',
      img: '/images/ITM-Gamejam Certificate.jpg',
      date: 'September 2024',
      location: 'ITM SLS Baroda Campus',
      summary: 'Participated in the game jam event at ITM University Baroda. Built a highly creative "scream-to-survive" game that maps direct audio pitch and volume inputs to drive character movements and actions. It was an incredible sprint testing real-time interaction designs and loop mechanics.',
      highlights: [
        'Developed scream-activated gameplay tracking microphones in real-time',
        'Engineered responsive game loop physics during high-pressure game jam sprint',
        'Grateful to ITM SLS faculty and Student Affairs Dean for organizing the event'
      ]
    },
    {
      id: 'genai-outskill',
      title: '📜 Generative AI Mastermind Certification',
      org: 'Outskill',
      desc: 'Professional certification in prompt engineering, AI productivity and automation workflows',
      badge: 'AI Certification',
      img: '/images/Gen AI Certificate.jpeg',
      date: 'May 2026',
      location: 'Outskill Program',
      summary: 'Successfully completed the Generative AI Mastermind program by Outskill. Mastered advanced Prompt Engineering, AI tools & applications, AI workflow optimization, automation workflows, and practical implementation of AI solutions in real-world environments to skyrocket development productivity.',
      highlights: [
        'Prompt Engineering: Highly optimized prompt crafting and control structures',
        'Automation Pipelines: Designed workflows integrating modern AI productivity hacks',
        'Real-world Use Cases: Practical experience building and optimizing smart AI systems'
      ]
    },
    {
      id: 'fullstack-guvi',
      title: '📜 Full Stack Development Masterclass',
      org: 'GUVI Geek Network',
      desc: 'Workshop on building modern scalable web architectures projected for 2026',
      badge: 'Web Certification',
      img: '/images/Certificate of Full Stack Development.png',
      date: 'May 2026',
      location: 'GUVI Workshop',
      summary: 'Successfully completed GUVI’s workshop on "The Future of Full Stack Development: Key Skills Needed in 2026". Explored advanced microservices, edge rendering pipelines, serverless databases, and key architectural trends required to build modern scalable solutions.',
      highlights: [
        'Acquired deep knowledge of advanced development trends and tools for the year 2026',
        'Studied full stack scaling models, deployment configurations, and fast routing architectures',
        'Committed to staying current and adapting to modern software engineering patterns'
      ]
    },
    {
      id: 'datascience-guvi',
      title: '📜 Data Science & Machine Learning Masterclass',
      org: 'GUVI & HCL',
      desc: 'Professional certification in training and evaluating complex neural and intelligence models',
      badge: 'Data Science',
      img: '/images/Certificate of Data Science & Machine Learning.png',
      date: 'May 2026',
      location: 'GUVI & HCL Event',
      summary: 'Successfully completed the intensive Data Science & Machine Learning Masterclass conducted by GUVI & HCL. Acquired a strong understanding of how modern intelligent systems and AI models work behind the scenes, training complex predictive algorithms.',
      highlights: [
        'Gained hands-on knowledge in preparing big datasets and structuring prediction paths',
        'Studied mathematical architectures behind neural networks and model metrics evaluation',
        'Equipped with capabilities to deploy and optimize intelligent ML systems'
      ]
    }
  ]

  const visibleAchievements = showAll ? achievements : achievements.slice(0, 6)

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
            {visibleAchievements.map((ach, index) => (
              <motion.div
                key={ach.id}
                id={index === 6 ? "seventh-certificate-card" : undefined}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedAch(ach)}
                className="relative bg-neutral-950/80 border border-red-500/30 rounded-2xl overflow-hidden transition-all duration-400 hover:border-red-500/60 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(239,68,68,0.25),_inset_0_0_20px_rgba(239,68,68,0.08)] flex flex-col h-full cursor-pointer group"
              >
                {/* Content Section */}
                <div className="relative z-10 flex flex-col h-full w-full">
                  
                  {/* Image Section - Framed, Crisp and Protected */}
                  <div className="relative w-full aspect-[4/3] bg-neutral-950/95 border-b border-red-500/20 flex items-center justify-center p-4 overflow-hidden rounded-t-2xl">
                    <div className="w-full h-full border border-red-500/20 rounded-xl p-1.5 bg-black/40 flex items-center justify-center relative z-10 group-hover:border-red-500/40 transition-all duration-300">
                      <img 
                        src={ach.img} 
                        alt={ach.title} 
                        className="w-full h-full object-contain transition duration-500 ease-out sharp-certificate"
                      />
                    </div>
                    
                    {/* Cyber Grid & Scanline retrieval interface overlays */}
                    <div className="cyber-scanner-overlay opacity-30"></div>
                    <div className="cyber-corner cyber-corner-tl"></div>
                    <div className="cyber-corner cyber-corner-tr"></div>
                    <div className="cyber-corner cyber-corner-bl"></div>
                    <div className="cyber-corner cyber-corner-br"></div>

                    {/* Overlay hover effect */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-xs">
                      <div className="px-4 py-2 rounded-lg border border-red-500/30 bg-red-950/40 text-red-400 font-mono text-[10px] flex items-center gap-2 tracking-wider uppercase shadow-[0_0_15px_rgba(239,68,68,0.25)]">
                        <Award size={13} className="text-red-500" /> SECURE_CREDENTIAL_RETR <ExternalLink size={11} />
                      </div>
                    </div>
                    {/* Badge */}
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/85 backdrop-blur-md border border-white/10 font-mono text-[9px] text-red-400 uppercase tracking-widest font-semibold z-10">
                      {ach.badge}
                    </span>
                  </div>

                  {/* Content Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                    <div className="space-y-2.5">
                      <h3 className="text-xs font-bold font-mono text-white group-hover:text-red-400 transition-colors line-clamp-1 flex items-center gap-1.5">
                        <span className="text-red-500 select-none">&gt;</span> {ach.title}
                      </h3>
                      <p className="text-[10px] font-mono text-red-500/80 font-bold uppercase tracking-wider">
                        // {ach.org}
                      </p>
                      <p className="text-[11px] text-neutral-400 leading-relaxed font-sans line-clamp-2">
                        {ach.desc}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={10} className="text-red-500/70" /> {ach.date}
                      </span>
                      <span className="text-red-500/85 group-hover:text-red-400 font-bold uppercase tracking-widest flex items-center gap-1 transition-all duration-300">
                        VERIFY_RECORD <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-mono">&gt;&gt;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={(e) => {
              // Blur immediately to prevent browser automatic scroll-to-focus at the bottom
              e.currentTarget.blur()
              
              if (!showAll) {
                setShowAll(true)
                setTimeout(() => {
                  const seventhCard = document.getElementById('seventh-certificate-card')
                  if (seventhCard) {
                    // Calculate absolute static position relative to document top, ignoring active Framer Motion transforms
                    let top = 0
                    let el = seventhCard
                    while (el) {
                      top += el.offsetTop
                      el = el.offsetParent
                    }
                    // Scroll smoothly to exact position minus the 110px floating glass navbar offset
                    window.scrollTo({
                      top: top - 110,
                      behavior: 'smooth'
                    })
                  }
                }, 100)
              } else {
                setShowAll(false)
                document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-6 py-3 rounded-full border border-white/10 hover:border-red-500/40 bg-white/[0.02] hover:bg-red-600/15 text-neutral-400 hover:text-white font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
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
                    <div className="relative group rounded-xl overflow-hidden border border-red-500/30 bg-black/80 shadow-2xl p-3 flex items-center justify-center aspect-[4/3] max-w-full">
                      <div className="w-full h-full border border-red-500/20 rounded-lg p-1.5 bg-black/40 flex items-center justify-center relative z-10">
                        <img 
                          src={selectedAch.img} 
                          alt={selectedAch.title}
                          className="w-full h-full object-contain block mx-auto hover:scale-[1.01] transition-transform duration-300 sharp-certificate"
                        />
                      </div>
                      
                      <div className="cyber-scanner-overlay opacity-30"></div>
                      <div className="cyber-corner cyber-corner-tl"></div>
                      <div className="cyber-corner cyber-corner-tr"></div>
                      <div className="cyber-corner cyber-corner-bl"></div>
                      <div className="cyber-corner cyber-corner-br"></div>
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
                      <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">&gt;_ Achievement Summary</h3>
                      <p className="text-xs text-neutral-300 leading-relaxed font-sans mt-2 select-text text-justify text-justify-inter-character">
                        {selectedAch.summary}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    {selectedAch.highlights && selectedAch.highlights.length > 0 && (
                      <div className="space-y-3 select-text">
                        <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">&gt;_ Key Highlights</h3>
                        <ul className="space-y-2 select-text">
                          {selectedAch.highlights.map((feat, idx) => (
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
                      onClick={() => setSelectedAch(null)}
                      className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:scale-105"
                    >
                      Close Record
                    </button>
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedAch(null)}
                      className="px-6 py-2.5 rounded-full border border-white/10 hover:border-red-500/30 bg-white/[0.02] hover:bg-white/[0.06] text-neutral-300 hover:text-white text-xs font-mono tracking-wider uppercase transition-all duration-300 hover:scale-105"
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
