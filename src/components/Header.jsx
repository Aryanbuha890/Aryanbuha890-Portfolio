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

export default function Header({ onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Terminal simulator states
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'input', text: 'help' },
    { type: 'output', text: 'Welcome to Aryan\'s Portfolio interactive shell!\nType or click a command below to explore.' }
  ])
  const [terminalInput, setTerminalInput] = useState('')
  const terminalEndRef = useRef(null)

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

  // Auto-scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [terminalHistory])

  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase()
    if (!cleanCmd) return

    let response = ''
    switch (cleanCmd) {
      case 'help':
        response = `Available commands:\n  [skills]       - View technical skill catalog\n  [about]        - Learn about Aryan's profile & background\n  [achievements] - List latest hackathon awards\n  [contact]      - Get connection credentials\n  [clear]        - Flush the terminal logs`
        break
      case 'skills':
        response = `SKILL CATALOG:\n----------------------------------------\n• Languages:   C, C++, Java, Python, JavaScript\n• Web Dev:     HTML5, CSS3, React.js, Tailwind CSS\n• Backend:     Node.js, Express, FastAPI, Flask, SQL\n• ML & AI:     Scikit-learn, Pandas, NumPy, Model Prep\n• Core:        DSA, OOP, System Debugging, Logic`
        break
      case 'about':
        response = `ARYAN BUHA | CS ENGINEER:\n----------------------------------------\n• Academy:   B.E. Computer Science & Engineering\n• Institute: Maharaja Sayajirao University of Baroda\n• Passion:   Developing smart AI systems, high-speed full-stack webs, and agriculture tech IoT systems.\n• Mission:   Solving critical problems via clean architectures.`
        break
      case 'achievements':
        response = `HACKATHONS & AWARDS:\n----------------------------------------\n🏆 Finalist (Top 40 / 240+) - Hackovate 2025 (LJ University)\n💻 Climate Tech Award - HackOut 2025 (DAIICT)\n🚀 Global Challenger - NASA Space Apps\n🛰️ Space Tech Hack - ISRO Bharatiya Antariksh\n🎮 Creative Design - ITM Game Jam`
        break
      case 'contact':
        response = `CONTACT DETAILS:\n----------------------------------------\n📧 Email:    aryanbuha56@gmail.com\n📞 Phone:    +91 9313198911\n🌐 GitHub:   github.com/Aryanbuha89\n💼 LinkedIn: linkedin.com/in/aryan-buha-874a5434b/`
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
    { name: 'Achievements', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Floating Translucent Header */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-wider font-mono flex items-center gap-2 group">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-red-500 transition-colors group-hover:text-white">A</span>RYAN
          </a>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(link.href);
                }}
                className="text-sm font-medium tracking-wide text-neutral-400 hover:text-white hover:shadow-[0_2px_0_#ef4444] pb-1 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('#contact');
              }}
              className="px-4 py-2 rounded-md bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-red-600 hover:text-white border border-white hover:border-red-600"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-black/95 backdrop-blur-lg border-b border-white/10 md:hidden py-6 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    onNavClick(link.href)
                  }}
                  className="text-lg font-medium text-neutral-300 hover:text-red-500 py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  onNavClick('#contact')
                }}
                className="mt-2 py-3 rounded-md bg-red-600 text-white font-bold text-center tracking-wider text-sm uppercase transition-colors hover:bg-red-700"
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
        className="relative min-height-screen pt-32 pb-24 md:py-40 flex items-center overflow-hidden code-grid-bg"
      >
        {/* Glow Particles */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-950/20 blur-3xl animated-glow-bg z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-neutral-900/40 blur-3xl animated-glow-bg z-0"></div>

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

            {/* Quote block */}
            <div className="border-l-2 border-red-600 pl-4 bg-white/2 backdrop-blur-sm py-3 px-4 rounded-r-md max-w-lg select-text">
              <p className="italic text-neutral-400 text-sm">
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
                className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold text-sm flex items-center gap-2 tracking-wide transition-all shadow-[0_4px_20px_rgba(239,68,68,0.3)] hover:scale-105"
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
                className="px-6 py-3 rounded-md border border-neutral-800 hover:border-red-500 bg-black/50 text-neutral-300 hover:text-white font-semibold text-sm transition-all hover:scale-105"
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
            <div className="w-full rounded-lg overflow-hidden glass-panel red-glow-subtle flex flex-col h-[380px] shadow-2xl relative">
              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none scanline opacity-[0.03] z-10"></div>

              {/* Window Header */}
              <div className="bg-black/90 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full terminal-btn-red block"></span>
                  <span className="w-3 h-3 rounded-full terminal-btn-yellow block"></span>
                  <span className="w-3 h-3 rounded-full terminal-btn-green block"></span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                  <Terminal size={12} className="text-red-500 animate-pulse" />
                  bash - aryan@msu-box:~
                </div>
                <div className="w-10"></div>
              </div>

              {/* Console logs */}
              <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-neutral-300 text-left space-y-3 bg-black/60 scrollbar select-text">
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
                {['skills', 'about', 'achievements', 'contact'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-2 py-0.5 rounded border border-neutral-800 hover:border-red-500/50 bg-neutral-900 text-[10px] font-mono text-neutral-400 hover:text-white transition-all"
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
