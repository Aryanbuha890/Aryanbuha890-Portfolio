import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-black pt-16 pb-0 overflow-hidden z-10 font-mono text-xs select-text">
      
      {/* Purple & Red Ambient Glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[35vw] rounded-full bg-gradient-to-t from-red-950/20 via-purple-950/15 to-transparent blur-[130px] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 select-text mb-8">
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
