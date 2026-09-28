import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Fix for Vite / esbuild plugin name mangling where ScrollTrigger is named ScrollTrigger3
try {
  Object.defineProperty(ScrollTrigger, 'name', { value: 'ScrollTrigger', configurable: true })
} catch (e) {
  // Ignore in environments where name cannot be redefined
}

// Explicitly register ScrollTrigger in GSAP internal globals map
if (gsap.core && typeof gsap.core.globals === 'function') {
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}

// Set on window for global compatibility
if (typeof window !== 'undefined') {
  window.ScrollTrigger = ScrollTrigger
  window.gsap = gsap
}

// Register plugin with GSAP
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
export default gsap
