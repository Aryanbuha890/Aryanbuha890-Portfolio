import React from 'react'

export default function Footer({ onNavClick }) {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  const contactInfo = [
    { label: 'Email', value: 'aryanbuha56@gmail.com', href: 'mailto:aryanbuha56@gmail.com' },
    { label: 'Phone', value: '+91 9313198911', href: 'tel:+919313198911' },
    { label: 'Location', value: 'Gujarat, India', href: null }
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Aryanbuha890' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aryan-buha-874a5434b/' }
  ]

  return (
    <footer className="relative bg-black pt-16 pb-0 overflow-hidden z-10 font-mono text-xs select-text border-t border-neutral-900/60">
      
      {/* Purple & Red Ambient Glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[35vw] rounded-full bg-gradient-to-t from-red-950/20 via-purple-950/15 to-transparent blur-[130px] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 select-text mb-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 mb-12 border-b border-neutral-900/60">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-base font-mono flex items-center gap-1 group relative select-none">
              <span className="text-red-500 font-bold group-hover:-translate-x-1 group-hover:text-white transition-all duration-300">&lt;</span>
              <span className="font-extrabold tracking-widest bg-gradient-to-r from-white via-neutral-200 to-red-500 bg-clip-text text-transparent group-hover:from-red-500 group-hover:to-white transition-all duration-500">
                ARYAN BUHA
              </span>
              <span className="text-red-500 font-bold group-hover:translate-x-1 group-hover:text-white transition-all duration-300">/&gt;</span>
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse ml-1.5 self-center"></span>
            </div>
            <p className="text-neutral-400 text-[11px] leading-relaxed max-w-sm">
              Computer Science student at MSU Baroda passionate about engineering clean-code architectures, ML pipelines, and smart agricultural automation systems.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-red-500 transition-colors text-[11px]"
                >
                  [{soc.name}]
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-red-500 font-bold text-[10px] uppercase tracking-wider">// Quick Links</div>
            <ul className="space-y-2 text-[11px]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      if (onNavClick) {
                        onNavClick(link.href)
                      }
                    }}
                    className="text-neutral-400 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    &gt; {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-red-500 font-bold text-[10px] uppercase tracking-wider">// connection_ports</div>
            <ul className="space-y-3 text-[11px]">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex flex-col">
                  <span className="text-neutral-500 text-[9px] uppercase tracking-wider">{info.label}</span>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-neutral-300 hover:text-red-500 transition-colors mt-0.5"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-neutral-300 mt-0.5">{info.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sub-footer Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-mono select-text w-full">
          <p className="select-text">
            © {new Date().getFullYear()} Aryan Buha. All rights reserved.
          </p>
          <p className="text-red-500/80 hover:text-red-500 transition-colors select-text">
            $ built_with_react --tailwind-v4 --framer-motion
          </p>
        </div>
      </div>

      {/* Giant Background Text Watermark sitting below the text */}
      <div className="relative w-full pointer-events-none select-none z-0 overflow-hidden h-[16vw] min-h-[120px] flex items-end justify-center">
        <h1 className="text-[15vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-red-600/35 via-red-500/10 to-transparent select-none uppercase font-sans">
          ARYAN BUHA
        </h1>
      </div>

    </footer>
  )
}
