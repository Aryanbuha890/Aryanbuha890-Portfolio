import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X, ArrowRight, Code, Shield, Cpu, ExternalLink } from 'lucide-react'
import gsap from 'gsap'
import { NAV_ITEMS, getPathFromSectionId } from '../utils/navigation'
import { TrialButton } from '@/components/lightswind/trial-button'

// Lightweight React typewriter hook
const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 40, delayBetweenWords = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer
    const currentWord = words[currentWordIndex]

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
      }, deletingSpeed)
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1))
      }, typingSpeed)
    }

    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return currentText
}

export default function Header({ onNavClick, activeSection, setActiveSection, isNavigatingRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Terminal simulator states
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'input', text: 'help' },
    { type: 'output', text: 'Welcome to Aryan\'s Portfolio interactive shell!\nType or click a command below to explore.' }
  ])
  const [terminalInput, setTerminalInput] = useState('')
  const terminalLogsRef = useRef(null)
  const terminalEndRef = useRef(null)

  const words = [
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Hackathon Champion",
    "Problem Solver"
  ]
  const typedText = useTypewriter(words)

  // Monitor scroll for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // GSAP Hero entrance timeline
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo('.hero-badge', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 })
      .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.45')
      .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.55')
      .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.45')
      .fromTo('.hero-quote', { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.7 }, '-=0.45')
      .fromTo('.hero-btn', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, '-=0.45')
      .fromTo('.hero-terminal', { opacity: 0, x: 40, scale: 0.97 }, { opacity: 1, x: 0, scale: 1, duration: 0.9 }, '-=0.8')
  }, [])

  // Sync active section and URL route based on scroll position using Intersection Observer
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'projects', 'portfolio', 'contact']
    
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -40% 0px',
      threshold: 0.15
    }

    const observerCallback = (entries) => {
      // Avoid replacing URL while programmatically smooth-scrolling from a click
      if (isNavigatingRef && isNavigatingRef.current) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveSection(sectionId)
          const targetPath = getPathFromSectionId(sectionId)
          if (window.location.pathname !== targetPath) {
            window.history.replaceState(null, '', targetPath)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Fallback: If scrolled to top (header hero), guarantee root path '/'
    const handleTopScroll = () => {
      if (isNavigatingRef && isNavigatingRef.current) return
      if (window.scrollY < 80 && window.location.pathname !== '/') {
        setActiveSection('home')
        window.history.replaceState(null, '', '/')
      }
    }
    window.addEventListener('scroll', handleTopScroll, { passive: true })

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
      window.removeEventListener('scroll', handleTopScroll)
    }
  }, [setActiveSection, isNavigatingRef])

  // Mouse position tracking for pointer-follow glow
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Auto-scroll terminal container directly to bottom without page jumping
  useEffect(() => {
    if (terminalLogsRef.current) {
      terminalLogsRef.current.scrollTo({
        top: terminalLogsRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [terminalHistory])

  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase()
    if (!cleanCmd) return

    let response = ''
    switch (cleanCmd) {
      case 'help':
        response = `Available commands:\n  [skills]       - View technical skill catalog\n  [about]        - Learn about Aryan's profile & background\n  [why-me]       - Discover Aryan's values & features\n  [projects]     - View key engineering projects\n  [achievements] - List latest hackathon awards\n  [contact]      - Get connection credentials\n  [clear]        - Flush the terminal logs`
        break
      case 'skills':
        response = `SKILL CATALOG:\n----------------------------------------\n• Languages:   Python, JavaScript, Java, C++, C\n• Web Dev:     React 19, Next.js, Vite, Tailwind CSS v4, Framer Motion\n• Backend:     Node.js, Express, FastAPI, Flask, SQL\n• ML & AI:     LangGraph (Agents), YOLOv11 (Vision), ChromaDB (RAG), XGBoost\n• Core:        DSA, OOP, System Architectures, Logic`
        break
      case 'about':
        response = `ARYAN BUHA | AI/ML & FULL-STACK ENGINEER:\n----------------------------------------\n• Rank:      Global Rank #2 @ ECSoC'26\n• Academy:   B.E. Computer Science & Engineering\n• Institute: Maharaja Sayajirao University of Baroda\n• Passion:   LangGraph multi-agent systems, computer vision, local LLMs, and SaaS web systems.\n• Mission:   Solving critical problems via production-grade shipped products.`
        break
      case 'why-me':
        response = `WHY CHOOSE ARYAN:\n----------------------------------------\n⭐ High Quality Code  - Clean linter audited, robust structural engineering.\n⭐ Rapid Velocity     - GRANULAR targets delivered ahead of schedules.\n⭐ Proactive Sync     - 100% active alignment & transparent staging feeds.\n⭐ Scalable Systems   - Modular architectures built for intense growth.`
        break
      case 'projects':
        response = `ARYAN'S PROJECTS:\n----------------------------------------\n🚢 LogiMind AI   - Maritime Command OS (6th Rank Hackverse Mumbai & Microsoft Invite).\n🌾 AgriForge AI  - Agricultural platform (SSIP Govt Grant - Rs. 2.43L & IBM 2nd Rank).\n🏢 Urban Intel   - Smart city governance OS (1st Runner-Up Ingenious 7.0).\n🛰️ Mumbai Pulse  - Environmental GIS dashboard (NASA Space Apps Winner 2025).\n🌍 TerraForge    - Climate-Tech OS (Top 8 Finalist DotSlash 9.0).`
        break
      case 'achievements':
        response = `HACKATHONS & AWARDS:\n----------------------------------------\n🏆 Global Rank #2 - Elite Coders Summer of Code 2026 (ECSoC'26)\n🏆 Winner (Champions) - NASA Space Apps Challenge 2025\n🏆 2nd Rank (Statewide) - IBM AI Innovation Challenge 2026\n🏆 6th Rank (India-wide) - Hackverse Mumbai & Microsoft Invite\n🥈 1st Runner-Up - Ingenious Hackathon 7.0 (Ahmedabad Uni)\n🎖️ Top 8 Finalist - DotSlash 9.0 (SVNIT Surat)\n💰 ₹2.43L SSIP Gujarat Research Grant for AgriForge AI`
        break
      case 'contact':
        response = `CONTACT DETAILS:\n----------------------------------------\n📧 Email:    aryanbuha56@gmail.com\n📞 Phone:    +91 9313198911\n🌐 GitHub:   github.com/Aryanbuha890\n💼 LinkedIn: linkedin.com/in/aryan-buha-874a5434b/`
        break
      case 'clear':
        setTerminalHistory([])
        setTerminalInput('')
        return
      default:
        response = `sh: command not found: "${cleanCmd}". Type "help" for a list of available commands.`
    }

    setTerminalHistory(prev => [
      ...prev,
      { type: 'input', text: cmd },
      { type: 'output', text: response }
    ])
    setTerminalInput('')
  }

  const handleTerminalSubmit = (e) => {
    e.preventDefault()
    executeCommand(terminalInput)
  }

  const navLinks = NAV_ITEMS

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
        <nav 
          className={`pointer-events-auto w-full mx-auto rounded-full border transition-all duration-500 ${
            isScrolled 
              ? 'max-w-5xl bg-black/75 py-2.5 px-6 backdrop-blur-md navbar-glow-scrolled' 
              : 'max-w-6xl bg-black/40 py-4 px-8 backdrop-blur-md navbar-glow-unscrolled'
          }`}
        >
          <div className="w-full flex items-center justify-between">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                onNavClick('/');
              }}
              className="text-lg md:text-xl font-mono flex items-center gap-1 group relative select-none"
            >
              <span className="text-red-500 font-bold group-hover:-translate-x-1 group-hover:text-white transition-all duration-300">&lt;</span>
              <span className="font-extrabold tracking-widest bg-gradient-to-r from-white via-neutral-200 to-red-500 bg-clip-text text-transparent group-hover:from-red-500 group-hover:to-white transition-all duration-500">
                ARYAN
              </span>
              <span className="text-red-500 font-bold group-hover:translate-x-1 group-hover:text-white transition-all duration-300">/&gt;</span>
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse ml-1.5 self-center"></span>
            </a>

            <div className="hidden md:flex items-center gap-3 lg:gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id || activeSection === link.path
                return (
                  <a 
                    key={link.name} 
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.path);
                    }}
                    className={`text-xs font-mono tracking-wider relative py-1.5 px-2 lg:px-3 rounded-full whitespace-nowrap transition-colors duration-300 ${
                      isActive 
                        ? 'text-white font-semibold' 
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-red-600/10 border border-red-500/20 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                )
              })}
              <a 
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick('/contact');
                }}
                className={`px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                  activeSection === 'contact' || activeSection === '/contact'
                    ? 'bg-red-600/15 border-red-500/60 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                    : 'bg-white/5 hover:bg-red-600/10 border border-white/10 hover:border-red-500/40 text-neutral-200 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                }`}
              >
                Get In Touch
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                className="text-white focus:outline-none p-1 hover:bg-white/5 rounded-full transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[78px] left-4 right-4 z-40 bg-black/90 backdrop-blur-lg border border-white/10 rounded-2xl md:hidden py-6 px-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id || activeSection === link.path
                return (
                  <a 
                    key={link.name} 
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      onNavClick(link.path)
                    }}
                    className={`text-base font-mono tracking-wide py-2.5 border-b border-white/5 transition-colors flex items-center justify-between ${
                      isActive ? 'text-red-500 font-bold' : 'text-neutral-300 hover:text-red-500'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.span 
                        layoutId="activeMobileDot" 
                        className="h-1.5 w-1.5 rounded-full bg-red-500"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                )
              })}
              <a 
                href="/contact"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  onNavClick('/contact')
                }}
                className={`mt-2 py-2.5 rounded-full border font-bold text-center tracking-wider text-xs uppercase transition-all ${
                  activeSection === 'contact' || activeSection === '/contact'
                    ? 'bg-red-600/15 border-red-500/60 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                    : 'bg-white/5 hover:bg-red-600/10 border border-white/10 hover:border-red-500/40 text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                }`}
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero / Header Section */}
      <section 
        id="home" 
        className="relative min-h-screen pt-32 pb-24 md:py-40 flex items-center overflow-hidden code-grid-bg"
      >
        {/* Interactive mouse follow glow */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-60 md:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.07), transparent 60%)`
          }}
        />

        {/* Glow Particles */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-950/15 blur-3xl animated-glow-bg z-0 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-neutral-900/30 blur-3xl animated-glow-bg z-0 pointer-events-none"></div>

        {/* Floating monospaced binary/code particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[
            { text: 'const user = "Aryan"', x: '10%', y: '25%', duration: 18, delay: 0 },
            { text: '01101001', x: '85%', y: '15%', duration: 12, delay: 2 },
            { text: '<React.StrictMode>', x: '5%', y: '75%', duration: 15, delay: 1 },
            { text: 'model.fit(X, y)', x: '78%', y: '80%', duration: 20, delay: 3 },
            { text: 'npm run dev', x: '45%', y: '10%', duration: 14, delay: 0.5 },
            { text: 'await response.json()', x: '82%', y: '50%', duration: 16, delay: 2.5 }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.1, 0.35, 0.1]
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
              className="absolute font-mono text-[10px] md:text-xs text-red-500/30 select-none hidden sm:block"
              style={{ left: item.x, top: item.y }}
            >
              {item.text}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left panel: Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="hero-badge opacity-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-950/20 text-red-400 font-mono text-xs tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping"></span>
              $ npm run start:dev
            </div>

            <h1 className="hero-title opacity-0 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-red-600 select-text">Aryan Buha</span>
            </h1>

            <h2 className="hero-subtitle opacity-0 text-xl sm:text-2xl font-mono text-neutral-400 flex items-center h-8">
              I am a&nbsp;
              <span className="text-red-500 border-r-2 border-red-500 pr-1 cursor-blink">
                {typedText}
              </span>
            </h2>

            <p className="hero-desc opacity-0 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed select-text">
              Engineering student at MSU Baroda passionate about full-stack systems, machine learning pipelines, and smart agricultural automation. Thriving in high-stress hackathons and team-focused builds.
            </p>

            {/* Upgraded OG Glass Quote Card */}
            <div className="hero-quote opacity-0 relative overflow-hidden rounded-2xl p-4 sm:p-5 max-w-lg select-text border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.25),_inset_0_0_20px_0_rgba(255,255,255,0.02),_0_12px_32px_0_rgba(0,0,0,0.5)] border-l-[3.5px] border-l-red-500 transition-all duration-500 group/quote hover:border-white/25 hover:border-l-red-500 hover:shadow-[-4px_0_25px_rgba(239,68,68,0.35),_inset_0_1px_1px_0_rgba(255,255,255,0.35),_0_16px_40px_rgba(0,0,0,0.6)]">
              {/* Glass specular sheen light refraction */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.015] rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-red-500 via-white/30 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-red-400 font-semibold uppercase tracking-widest transition-colors group-hover/quote:text-red-300">
                    // COMPILER MESSAGE DIRECTIVE
                  </span>
                </div>
                <p className="not-italic font-sans font-medium text-neutral-100 text-sm sm:text-[15px] leading-relaxed tracking-normal select-text">
                  "I don't build prototypes. I build products that ship. 🚀"
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <TrialButton 
                href="/achievements"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick('/achievements');
                }}
                trailColor="#ef4444"
                blurColor="#ff4d6d"
                surfaceColor="rgba(25, 5, 5, 0.75)"
                className="hero-btn opacity-0 group"
              >
                View Achievements
                <ArrowRight size={14} className="mt-0.5 group-hover:translate-x-1 transition-transform duration-300" />
              </TrialButton>
              <TrialButton 
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick('/contact');
                }}
                trailColor="#ef4444"
                blurColor="#ff4d6d"
                className="hero-btn opacity-0"
              >
                Let's Connect 👋
              </TrialButton>
            </div>
          </div>

          {/* Right panel: Terminal Terminal Console */}
          <div className="hero-terminal opacity-0 lg:col-span-5 w-full">
            <div className="w-full rounded-lg overflow-hidden glass-panel red-glow-subtle flex flex-col h-[380px] shadow-2xl relative group/terminal hover:border-red-500/20 transition-all duration-500">
              {/* Sweeping Glass Reflection Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover/terminal:animate-[shimmer_1.5s_ease-out] z-20"></div>

              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none scanline opacity-[0.03] z-10"></div>

              {/* Window Header */}
              <div className="bg-black/90 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full terminal-btn-red block"></span>
                  <span className="w-3 h-3 rounded-full terminal-btn-yellow block"></span>
                  <span className="w-3 h-3 rounded-full terminal-btn-green block"></span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-emerald-400 font-semibold">[LIVE LINK]</span>
                  <span className="text-neutral-700">|</span>
                  <Terminal size={12} className="text-red-500 animate-pulse" />
                  bash - aryan@msu-box:~
                </div>
                <div className="w-10"></div>
              </div>

              {/* Console logs */}
              <div 
                ref={terminalLogsRef} 
                className="flex-1 p-4 overflow-y-auto font-mono text-xs text-neutral-300 text-left space-y-3 bg-black/60 scrollbar select-text"
              >
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    {item.type === 'input' ? (
                      <div className="flex items-center text-red-400">
                        <span className="text-neutral-500 mr-2">aryan@portfolio:~$</span>
                        <span>{item.text}</span>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap leading-relaxed text-neutral-300 pl-2 border-l border-neutral-900 bg-white/1 py-1 rounded">
                        {item.text}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Command suggestions */}
              <div className="px-4 py-2 border-t border-white/5 bg-black/95 flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] font-mono text-neutral-500 uppercase mr-1">Quick shell:</span>
                {['skills', 'about', 'why-me', 'projects', 'achievements', 'contact'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-2 py-0.5 rounded border border-white/5 hover:border-red-500/50 bg-white/[0.02] hover:bg-red-500/10 text-[10px] font-mono text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Form Input */}
              <form onSubmit={handleTerminalSubmit} className="bg-black/95 px-4 py-3 border-t border-white/5 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xs">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type command (e.g., skills, help)..."
                  className="flex-1 bg-transparent text-white font-mono text-xs border-none outline-none focus:ring-0 placeholder-neutral-700"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
