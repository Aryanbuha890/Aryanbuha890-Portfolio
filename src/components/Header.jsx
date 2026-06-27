import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X, ArrowRight, Code, Shield, Cpu, ExternalLink } from 'lucide-react'

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

export default function Header({ onNavClick, activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Terminal simulator states
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'input', text: 'help' },
    { type: 'output', text: 'Welcome to Aryan\'s Portfolio interactive shell!\nType or click a command below to explore.' }
  ])
  const [terminalInput, setTerminalInput] = useState('')
  const terminalEndRef = useRef(null)
  const terminalLogsRef = useRef(null)

  const words = [
    "Computer Science Student",
    "Web Developer",
    "Problem Solver",
    "AI / Machine Learning Enthusiast"
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

  // Sync active section based on scroll position using Intersection Observer
  useEffect(() => {
    const sectionIds = ['#home', '#about', '#services', '#projects', '#portfolio', '#contact']
    
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -40% 0px',
      threshold: 0.1
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.querySelector(id)
      if (el) observer.observe(el)
    })

    return () => {
      sectionIds.forEach((id) => {
        const el = document.querySelector(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [setActiveSection])

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
        response = `SKILL CATALOG:\n----------------------------------------\n• Languages:   C, C++, Java, Python, JavaScript\n• Web Dev:     HTML5, CSS3, React.js, Tailwind CSS\n• Backend:     Node.js, Express, FastAPI, Flask, SQL\n• ML & AI:     Scikit-learn, Pandas, NumPy, Model Prep\n• Core:        DSA, OOP, System Debugging, Logic`
        break
      case 'about':
        response = `ARYAN BUHA | FOUNDER & CS ENGINEER:\n----------------------------------------\n• Founder:   Triotrack Solution (triotracksolution.online)\n• Academy:   B.E. Computer Science & Engineering\n• Institute: Maharaja Sayajirao University of Baroda\n• Passion:   Developing smart AI systems, high-speed full-stack webs, and agriculture tech IoT systems.\n• Mission:   Solving critical problems via clean architectures.`
        break
      case 'why-me':
        response = `WHY CHOOSE ARYAN:\n----------------------------------------\n⭐ High Quality Code  - Clean linter audited, robust structural engineering.\n⭐ Rapid Velocity     - GRANULAR targets delivered ahead of schedules.\n⭐ Proactive Sync     - 100% active alignment & transparent staging feeds.\n⭐ Scalable Systems   - Modular architectures built for intense growth.`
        break
      case 'projects':
        response = `ARYAN'S PROJECTS:\n----------------------------------------\n🌾 AgriForge AI  - Agricultural support platform (SSIP Govt Funded - Rs. 2.43L).\n🏢 Urban Intel   - Smart city infrastructure civic governance module.\n🌍 TerraForge    - Smart land & environmental platform with AI integrations.\n📊 CityForge     - Smart environment monitoring frontend & UI/UX.`
        break
      case 'achievements':
        response = `HACKATHONS & AWARDS:\n----------------------------------------\n🏆 Finalist (Top 40 / 240+) - Hackovate 2025 (LJ University)\n💻 Climate Tech Award - HackOut 2025 (DAIICT)\n🚀 Global Challenger - NASA Space Apps\n🛰️ Space Tech Hack - ISRO Bharatiya Antariksh\n🎮 Creative Design - ITM Game Jam`
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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Floating Translucent Header */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`pointer-events-auto w-full mx-auto rounded-full border transition-all duration-500 ${
            isScrolled 
              ? 'max-w-5xl bg-black/75 py-2.5 px-6 backdrop-blur-md navbar-glow-scrolled' 
              : 'max-w-6xl bg-black/40 py-4 px-8 backdrop-blur-md navbar-glow-unscrolled'
          }`}
        >
          <div className="w-full flex items-center justify-between">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                onNavClick('#home');
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

            {/* Desktop Nav links */}
            <div className="hidden md:flex items-center gap-3 lg:gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.href);
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
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick('#contact');
                }}
                className={`px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                  activeSection === '#contact'
                    ? 'bg-red-600/15 border-red-500/60 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                    : 'bg-white/5 hover:bg-red-600/10 border border-white/10 hover:border-red-500/40 text-neutral-200 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                }`}
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none p-1 hover:bg-white/5 rounded-full transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[78px] z-40 bg-black/90 backdrop-blur-lg border border-white/10 rounded-2xl md:hidden py-6 px-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      onNavClick(link.href)
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
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  onNavClick('#contact')
                }}
                className={`mt-2 py-2.5 rounded-full border font-bold text-center tracking-wider text-xs uppercase transition-all ${
                  activeSection === '#contact'
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
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-950/20 text-red-400 font-mono text-xs tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping"></span>
              $ npm run start:dev
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-red-600 select-text">Aryan Buha</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-mono text-neutral-400 flex items-center h-8">
              I am a&nbsp;
              <span className="text-red-500 border-r-2 border-red-500 pr-1 cursor-blink">
                {typedText}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed select-text">
              Engineering student at MSU Baroda passionate about full-stack systems, machine learning pipelines, and smart agricultural automation. Thriving in high-stress hackathons and team-focused builds.
            </p>

            {/* Upgraded Quote block */}
            <div className="border-l-2 border-red-500 pl-4 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md py-3.5 px-5 rounded-r-lg max-w-lg select-text border border-white/5 shadow-inner transition-all duration-500 group/quote hover:border-red-500/20">
              <span className="text-[9px] font-mono text-red-500/70 uppercase tracking-widest block mb-1.5 transition-colors group-hover/quote:text-red-400">// compiler message directive</span>
              <p className="italic text-neutral-300 text-sm leading-relaxed">
                "Turning ideas into code and learning every step of the way 💻."
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick('#portfolio');
                }}
                className="px-6 py-3 rounded-full bg-red-600/10 hover:bg-red-600/20 border border-red-500/40 hover:border-red-500 text-white font-semibold text-sm flex items-center gap-2 tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(239,68,68,0.35)] hover:scale-105"
              >
                View Achievements
                <ArrowRight size={16} />
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick('#contact');
                }}
                className="px-6 py-3 rounded-full border border-white/10 hover:border-red-500/30 bg-white/[0.02] hover:bg-white/[0.06] text-neutral-300 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                Let's Connect👋
              </a>
            </div>
          </motion.div>

          {/* Right panel: Terminal Terminal Console */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 w-full"
          >
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
          </motion.div>
        </div>
      </section>
    </>
  )
}
