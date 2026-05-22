import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Send, Terminal, ShieldAlert } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef(null)
  
  // Compiler state simulator
  const [formState, setFormState] = useState('idle') // idle, compiling, success, error
  const [logMessage, setLogMessage] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    setFormState('compiling')
    setLogMessage('compiling_form... resolving headers... sending payload...')

    // Initialize EmailJS key
    emailjs.init({
      publicKey: "dc2UOFd7SrfFFz4ok"
    })

    emailjs.sendForm('service_txnmfop', 'template_izdk4kt', formRef.current)
      .then((result) => {
        setFormState('success')
        setLogMessage('SUCCESS: Message sent! Output code 200. Re-routing completed.')
        formRef.current.reset()

        // Reset to idle after 6 seconds
        setTimeout(() => {
          setFormState('idle')
          setLogMessage('')
        }, 6000)
      }, (error) => {
        console.error(error)
        setFormState('error')
        setLogMessage('ERROR: Network handshake timed out. Code 503. Direct fallback to Email.')

        // Reset to idle after 10 seconds
        setTimeout(() => {
          setFormState('idle')
          setLogMessage('')
        }, 10000)
      })
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Aryanbuha890' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-buha-874a5434b/' }
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/90 select-none">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-950/10 blur-3xl animated-glow-bg pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-2">
          <div className="text-red-500 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
            contact.connect()
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Connect</h2>
          <div className="h-1 w-12 bg-red-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch select-text">
          
          {/* Left Column: Details */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-10"
          >
            <div className="space-y-8 select-text">
              <h3 className="text-xl font-bold tracking-tight text-white font-mono select-text flex items-center gap-2">
                <span className="text-red-500 select-none">&gt;_</span> Contact Info
              </h3>
              
              <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-sm select-text">
                Have an interesting hackathon idea, academic project, or a professional opportunity? Drop me a message and I will reply within 24 hours.
              </p>

              {/* Detail Items */}
              <div className="grid grid-cols-1 gap-4 font-mono select-text">
                {/* Card 1: Email */}
                <div className="group flex items-center gap-4 p-4 rounded-xl border border-red-500/20 bg-neutral-950/60 hover:border-red-500/50 hover:bg-neutral-900/40 hover:shadow-[0_0_25px_rgba(239,68,68,0.15),inset_0_0_15px_rgba(239,68,68,0.02)] transition-all duration-300 select-text">
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col text-left select-text">
                    <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold font-mono">// SEND_TRANSMISSION</span>
                    <span className="text-xs md:text-sm text-neutral-200 font-semibold select-text mt-0.5">aryanbuha56@gmail.com</span>
                  </div>
                </div>
                
                {/* Card 2: Phone */}
                <div className="group flex items-center gap-4 p-4 rounded-xl border border-red-500/20 bg-neutral-950/60 hover:border-red-500/50 hover:bg-neutral-900/40 hover:shadow-[0_0_25px_rgba(239,68,68,0.15),inset_0_0_15px_rgba(239,68,68,0.02)] transition-all duration-300 select-text">
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col text-left select-text">
                    <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold font-mono">// VOICE_COMMS</span>
                    <span className="text-xs md:text-sm text-neutral-200 font-semibold select-text mt-0.5">+91 9313198911</span>
                  </div>
                </div>

                {/* Card 3: Location */}
                <div className="group flex items-center gap-4 p-4 rounded-xl border border-red-500/20 bg-neutral-950/60 hover:border-red-500/50 hover:bg-neutral-900/40 hover:shadow-[0_0_25px_rgba(239,68,68,0.15),inset_0_0_15px_rgba(239,68,68,0.02)] transition-all duration-300 select-text">
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col text-left select-text">
                    <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold font-mono">// GEOLOCATION</span>
                    <span className="text-xs md:text-sm text-neutral-200 font-semibold select-text mt-0.5">Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials & Resume */}
            <div className="space-y-6 pt-6">
              <div className="flex flex-wrap items-center gap-4">
                {socialLinks.map((soc, idx) => {
                  const Icon = soc.icon
                  return (
                    <a 
                      key={idx}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-red-500/20 hover:border-red-500 bg-neutral-950 hover:bg-red-600/10 text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] flex items-center justify-center"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}

                <a 
                  href="/images/Aryan Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl border border-red-500/30 bg-red-950/20 hover:bg-red-600/20 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:scale-105 hover:border-red-500"
                >
                  <FileText size={16} /> Open Resume.pdf
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Console Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 select-text"
          >
            <div className="w-full rounded-2xl overflow-hidden glass-panel border border-red-500/30 flex flex-col shadow-2xl bg-neutral-950/60 select-text hover:border-red-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]">
              {/* Terminal Title Bar */}
              <div className="bg-black/90 px-4 py-3.5 border-b border-red-500/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 block"></span>
                </div>
                <div className="text-[10px] font-mono text-neutral-500">
                  compiler - aryan@connection-port
                </div>
                <div className="w-10"></div>
              </div>
 
              {/* Form Input Shell */}
              <form 
                ref={formRef} 
                onSubmit={handleFormSubmit}
                className="p-6 md:p-8 space-y-6 text-left font-mono select-text"
              >
                {/* Compiler feedback log messages */}
                {logMessage && (
                  <div className={`p-3 rounded-xl border font-mono text-[10px] select-text ${
                    formState === 'compiling' 
                      ? 'bg-yellow-950/15 border-yellow-500/20 text-yellow-400 animate-pulse' 
                      : formState === 'success' 
                      ? 'bg-green-950/15 border-green-500/20 text-green-400' 
                      : 'bg-red-950/15 border-red-500/20 text-red-400'
                  }`}>
                    <div className="flex items-center gap-2 select-text">
                      <Terminal size={12} />
                      <span>{logMessage}</span>
                    </div>
                  </div>
                )}
 
                {/* Name */}
                <div className="space-y-2 select-text text-left">
                  <label className="text-[11px] text-neutral-500 font-mono select-text flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-red-500/70"></span>
                    $ name --input
                  </label>
                  <div className="flex items-center rounded-xl border border-red-500/10 bg-neutral-950/80 px-4 py-3 focus-within:border-red-500/50 focus-within:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all duration-300 select-text">
                    <span className="text-red-500 text-xs mr-2.5 font-bold select-none">&gt;</span>
                    <input 
                      type="text" 
                      name="from_name"
                      required
                      placeholder="Enter your name"
                      className="bg-transparent text-white border-none outline-none focus:ring-0 text-xs w-full placeholder-neutral-700 font-mono"
                    />
                  </div>
                </div>
 
                {/* Email */}
                <div className="space-y-2 select-text text-left">
                  <label className="text-[11px] text-neutral-500 font-mono select-text flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-red-500/70"></span>
                    $ email --input
                  </label>
                  <div className="flex items-center rounded-xl border border-red-500/10 bg-neutral-950/80 px-4 py-3 focus-within:border-red-500/50 focus-within:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all duration-300 select-text">
                    <span className="text-red-500 text-xs mr-2.5 font-bold select-none">&gt;</span>
                    <input 
                      type="email" 
                      name="from_email"
                      required
                      placeholder="Enter your email"
                      className="bg-transparent text-white border-none outline-none focus:ring-0 text-xs w-full placeholder-neutral-700 font-mono"
                    />
                  </div>
                </div>
 
                {/* Message */}
                <div className="space-y-2 select-text text-left">
                  <label className="text-[11px] text-neutral-500 font-mono select-text flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-red-500/70"></span>
                    $ message --input
                  </label>
                  <div className="flex items-start rounded-xl border border-red-500/10 bg-neutral-950/80 px-4 py-3 focus-within:border-red-500/50 focus-within:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all duration-300 select-text">
                    <span className="text-red-500 text-xs mr-2.5 font-bold mt-0.5 select-none">&gt;</span>
                    <textarea 
                      name="message"
                      rows={5}
                      required
                      placeholder="Type your message details..."
                      className="bg-transparent text-white border-none outline-none focus:ring-0 text-xs w-full placeholder-neutral-700 font-mono resize-none"
                    />
                  </div>
                </div>
 
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === 'compiling'}
                  className="px-6 py-3 rounded-xl bg-red-600/10 hover:bg-red-600/20 disabled:bg-neutral-800 border border-red-500/30 hover:border-red-500 text-white font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(239,68,68,0.35)] ml-auto cursor-pointer"
                >
                  <Send size={12} />
                  {formState === 'compiling' ? 'Compiling...' : 'Execute Send'}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
