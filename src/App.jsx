import React, { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import TechCarousel from './components/TechCarousel'
import WhyChooseMe from './components/WhyChooseMe'
import Projects from './components/Projects'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

export default function App() {
  
  // Custom navigation scrolls
  const scrollToSection = (id) => {
    const element = document.querySelector(id)
    if (element) {
      const offset = 100 // Height of the floating navbar + safe padding
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Set page scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col w-full selection:bg-red-600 selection:text-white">
      
      {/* Background Decorative Neon Node Lights */}
      <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-red-950/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-neutral-900/40 blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[35vw] h-[35vw] rounded-full bg-red-950/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[5%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-neutral-900/30 blur-[110px] pointer-events-none z-0"></div>

      {/* Main Sections Assembly */}
      <main className="flex-1 w-full relative z-10">
        <Header onNavClick={scrollToSection} />
        <About />
        <Services />
        <TechCarousel />
        <WhyChooseMe />
        <Projects />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      
    </div>
  )
}
