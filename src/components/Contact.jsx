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
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-8 select-text">
              <h3 className="text-xl font-bold tracking-tight text-white font-mono select-text">
                &gt;_ Contact Info
              </h3>
              
              <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-sm select-text">
                Have an interesting hackathon idea, academic project, or a professional opportunity? Drop me a message and I will reply within 24 hours.
              </p>

              {/* Detail Items */}
              <div className="space-y-4 font-mono text-xs select-text">
                <div className="flex items-center gap-3 py-3 px-4 rounded border border-white/5 bg-neutral-950/60 w-fit select-text">
                  <Mail size={16} className="text-red-500" />
                  <span className="text-neutral-300 font-semibold select-text">aryanbuha56@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-3 py-3 px-4 rounded border border-white/5 bg-neutral-950/60 w-fit select-text">
                  <Phone size={16} className="text-red-500" />
                  <span className="text-neutral-300 font-semibold select-text">+91 9313198911</span>
                </div>

                <div className="flex items-center gap-3 py-3 px-4 rounded border border-white/5 bg-neutral-950/60 w-fit select-text">
                  <MapPin size={16} className="text-red-500" />
                  <span className="text-neutral-300 font-semibold select-text">Gujarat, India</span>
                </div>
              </div>
            </div>

            {/* Socials & Resume */}
            <div className="space-y-6 pt-12 lg:pt-0">
              <div className="flex items-center gap-4">
                {socialLinks.map((soc, idx) => {
                  const Icon = soc.icon
                  return (
                    <a 
                      key={idx}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-white/10 hover:border-red-500/40 bg-white/[0.02] hover:bg-red-600/10 text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>

              <a 
                href="/images/Aryan Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-red-500/40 bg-red-950/20 hover:bg-red-600/20 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 w-fit transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:scale-105"
              >
                <FileText size={16} /> Open Resume.pdf
              </a>
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
            <div className="w-full rounded-lg overflow-hidden glass-panel border-white/10 flex flex-col shadow-2xl bg-neutral-950/50 select-text">
              {/* Terminal Title Bar */}
              <div className="bg-black/90 px-4 py-3 border-b border-white/5 flex items-center justify-between">
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
                  <div className={`p-3 rounded border font-mono text-[10px] select-text ${
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
                <div className="space-y-1.5 select-text">
                  <label className="text-[11px] text-neutral-500 select-text">$ name --input</label>
                  <div className="flex items-center border-b border-white/5 hover:border-red-500/40 focus-within:border-red-500 transition-colors py-1.5 select-text">
                    <span className="text-red-500 text-xs mr-2 font-bold select-none">&gt;</span>
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
                <div className="space-y-1.5 select-text">
                  <label className="text-[11px] text-neutral-500 select-text">$ email --input</label>
                  <div className="flex items-center border-b border-white/5 hover:border-red-500/40 focus-within:border-red-500 transition-colors py-1.5 select-text">
                    <span className="text-red-500 text-xs mr-2 font-bold select-none">&gt;</span>
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
                <div className="space-y-1.5 select-text">
                  <label className="text-[11px] text-neutral-500 select-text">$ message --input</label>
                  <div className="flex items-start border-b border-white/5 hover:border-red-500/40 focus-within:border-red-500 transition-colors py-1.5 select-text">
                    <span className="text-red-500 text-xs mr-2 font-bold mt-1 select-none">&gt;</span>
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
                  className="px-6 py-3 rounded-full bg-red-600/10 hover:bg-red-600/20 disabled:bg-neutral-800 border border-red-500/40 hover:border-red-500 text-white font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(239,68,68,0.35)] ml-auto cursor-pointer"
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
