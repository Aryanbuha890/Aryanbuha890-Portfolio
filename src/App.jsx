import React, { useEffect, useState, useRef } from 'react'
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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  getSectionIdFromPath, 
  getPathFromSectionId, 
  scrollToSection 
} from './utils/navigation'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash) {
        return getSectionIdFromPath(window.location.hash)
      }
      return getSectionIdFromPath(window.location.pathname)
    }
    return 'home'
  })

  // Flag to avoid observer triggering replaceState while smooth scrolling from a click
  const isNavigatingRef = useRef(false)

  // Central navigation handler
  const handleNavClick = (target) => {
    const cleanPath = target.startsWith('/') ? target : getPathFromSectionId(target)
    const sectionId = getSectionIdFromPath(cleanPath)

    setActiveSection(sectionId)

    // Update URL path cleanly without '#'
    if (window.location.pathname !== cleanPath) {
      window.history.pushState(null, '', cleanPath)
    }

    // Suppress scroll observer during smooth programmatic transition
    isNavigatingRef.current = true
    scrollToSection(sectionId)

    setTimeout(() => {
      isNavigatingRef.current = false
    }, 850)
  }

  // Handle initial page load, deep-linking, and browser back/forward buttons
  useEffect(() => {
    window.history.scrollRestoration = 'manual'

    // Clean legacy hash if present in URL (e.g. localhost:5173/#about -> localhost:5173/about)
    if (window.location.hash) {
      const cleanPath = getPathFromSectionId(window.location.hash)
      window.history.replaceState(null, '', cleanPath)
    }

    // Direct deep-link handling on initial load or refresh
    const initialSectionId = getSectionIdFromPath(window.location.pathname)
    if (initialSectionId && initialSectionId !== 'home') {
      setActiveSection(initialSectionId)
      const timer = setTimeout(() => {
        scrollToSection(initialSectionId)
      }, 200)
      return () => clearTimeout(timer)
    }

    // Browser back/forward navigation
    const handlePopState = () => {
      const popSectionId = getSectionIdFromPath(window.location.pathname)
      setActiveSection(popSectionId)
      isNavigatingRef.current = true
      scrollToSection(popSectionId)
      setTimeout(() => {
        isNavigatingRef.current = false
      }, 850)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Initialize GSAP header animations
  useEffect(() => {
    // Smooth reveal fade-in for section headers on scroll
    gsap.utils.toArray('section').forEach((section) => {
      const header = section.querySelector('.text-left.mb-16')
      if (header) {
        gsap.fromTo(header, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
    })
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
        <Header 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          onNavClick={handleNavClick}
          isNavigatingRef={isNavigatingRef}
        />
        <About />
        <Services />
        <TechCarousel />
        <WhyChooseMe />
        <Projects onNavClick={handleNavClick} />
        <Portfolio onNavClick={handleNavClick} />
        <Contact />
      </main>

      <Footer onNavClick={handleNavClick} />
      
    </div>
  )
}
