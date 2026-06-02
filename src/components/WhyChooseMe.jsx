import React from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, MessageSquare, Cpu } from 'lucide-react'

export default function WhyChooseMe() {
  const cards = [
    {
      icon: Code,
      title: 'HIGH QUALITY CODE',
      desc: 'I engineer robust, well-documented code following strict design patterns and clean architectures, ensuring zero linter errors and 100% production reliability.'
    },
    {
      icon: Zap,
      title: 'RAPID VELOCITY',
      desc: 'Time is code. Drawing from intense 30-hour national hackathon wins, I plan milestones granularly and deliver optimized builds ahead of the planned deadlines.'
    },
    {
      icon: MessageSquare,
      title: 'CLEAR TRANSPARENCY',
      desc: 'Zero black boxes. I maintain active, clear sync cycles, sharing real-time staging previews and seeking feedback proactively to keep development perfectly aligned.'
    },
    {
      icon: Cpu,
      title: 'SCALABLE ARCHITECTURE',
      desc: 'Architected for growth. I construct applications using modular, decoupled services and highly-efficient database queries prepared for heavy traffic scaling.'
    }
  ]

  return (
    <section id="why-me" className="py-24 relative overflow-hidden bg-black select-none">
      {/* Background elegant blurs */}
      <div className="absolute top-[30%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-red-950/10 blur-[130px] pointer-events-none z-0 animate-[pulseGlow_12s_infinite_ease-in-out]"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-neutral-900/45 blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-red-500/10 via-amber-500/10 to-yellow-500/10 border border-red-500/20 rounded-full text-[10px] font-mono tracking-widest text-red-500 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping"></span>
            ⚙️ VALUE PROPOSITION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent font-extrabold">Aryan?</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-2xl leading-relaxed">
            I combine advanced computer science fundamentals with rapid execution velocity to engineer premium digital systems.
          </p>
          <div className="h-[2.5px] w-16 bg-gradient-to-r from-red-600 to-amber-500 rounded"></div>
        </div>

        {/* Process Timeline Card Grid */}
        <div className="relative w-full">
          
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[72px] left-[12.5%] right-[12.5%] h-[1.5px] bg-gradient-to-r from-red-950 via-amber-500/25 to-red-950 pointer-events-none z-0 hidden lg:block"></div>

          {/* Pulse Connector Joints between columns (Desktop) */}
          {/* Joint 1 (Between Column 1 and 2) */}
          <div className="absolute top-[72px] left-[25%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-500 border border-black shadow-[0_0_12px_rgba(245,158,11,0.9)] z-10 hidden lg:block animate-pulse"></div>
          {/* Joint 2 (Between Column 2 and 3) */}
          <div className="absolute top-[72px] left-[50%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-500 border border-black shadow-[0_0_12px_rgba(239,68,68,0.9)] z-10 hidden lg:block animate-pulse"></div>
          {/* Joint 3 (Between Column 3 and 4) */}
          <div className="absolute top-[72px] left-[75%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-500 border border-black shadow-[0_0_12px_rgba(245,158,11,0.9)] z-10 hidden lg:block animate-pulse"></div>

          {/* Connecting Line (Mobile Vertical) */}
          <div className="absolute left-[40px] top-12 bottom-12 w-[1.5px] bg-gradient-to-b from-red-600/30 via-amber-500/40 to-yellow-500/10 pointer-events-none z-0 lg:hidden"></div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {cards.map((card, idx) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative rounded-[32px] border border-white/5 hover:border-red-500/25 bg-[#0a0a0a] hover:bg-[#0f0f0f] p-8 flex flex-col items-center text-center transition-all duration-500 min-h-[380px] shadow-2xl pl-16 sm:pl-16 lg:pl-8 relative overflow-hidden"
                >
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-red-500/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon Block with Premium Glow and Squirclebed */}
                  <div className="relative mb-6 shrink-0 z-10 self-start lg:self-center">
                    {/* Glowing Squircle border ring */}
                    <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-r from-red-600 via-amber-500 to-yellow-500 opacity-25 group-hover:opacity-100 blur-md transition duration-500 pointer-events-none"></div>
                    
                    {/* White squircle container frame */}
                    <div className="relative w-20 h-20 rounded-[24px] bg-white flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-inner">
                      <Icon className="text-black stroke-[2.5]" size={28} />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-3 z-10 text-left lg:text-center w-full flex-grow flex flex-col justify-center">
                    <h3 className="text-xs sm:text-[13px] font-extrabold tracking-widest bg-gradient-to-r from-yellow-500 via-amber-500 to-red-400 bg-clip-text text-transparent group-hover:from-red-400 group-hover:to-yellow-500 transition-all duration-500 font-mono uppercase">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-xs text-neutral-400 leading-relaxed font-sans mt-2 select-text">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
