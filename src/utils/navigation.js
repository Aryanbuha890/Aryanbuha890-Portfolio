// Centralized navigation configuration and smooth scroll helpers with Clean URL support (No '#' in URL)

export const NAV_ITEMS = [
  { name: 'Home', path: '/', id: 'home' },
  { name: 'About', path: '/about', id: 'about' },
  { name: 'Expertise', path: '/expertise', id: 'services', aliases: ['/services'] },
  { name: 'Projects', path: '/projects', id: 'projects' },
  { name: 'Achievements', path: '/achievements', id: 'portfolio', aliases: ['/portfolio'] },
  { name: 'Contact', path: '/contact', id: 'contact' },
]

/**
 * Resolves a section DOM ID from a given pathname or hash
 * e.g. '/about' -> 'about', '/expertise' -> 'services', '/portfolio' -> 'portfolio'
 */
export const getSectionIdFromPath = (pathname) => {
  if (!pathname) return 'home'
  // Clean hash if provided, strip trailing slashes
  const clean = pathname.replace(/^#/, '').toLowerCase().replace(/\/+$/, '') || '/'
  
  const matched = NAV_ITEMS.find(
    (item) => item.path === clean || (item.aliases && item.aliases.includes(clean))
  )
  if (matched) return matched.id
  if (clean === '/why-me' || clean === 'why-me') return 'why-me'
  
  // If clean is directly a section id (e.g. 'services', 'about')
  const directMatch = NAV_ITEMS.find((item) => item.id === clean)
  if (directMatch) return directMatch.id

  return 'home'
}

/**
 * Resolves the clean URL pathname from a section DOM ID
 * e.g. 'services' -> '/expertise', 'portfolio' -> '/achievements', 'home' -> '/'
 */
export const getPathFromSectionId = (sectionId) => {
  if (!sectionId) return '/'
  const cleanId = sectionId.replace(/^#/, '').toLowerCase()
  
  const matched = NAV_ITEMS.find((item) => item.id === cleanId)
  if (matched) return matched.path
  if (cleanId === 'why-me') return '/why-me'
  
  return '/'
}

/**
 * Smoothly scrolls to a target section by ID or Path without hash jumps
 */
export const scrollToSection = (target) => {
  if (typeof window === 'undefined') return false

  let sectionId = 'home'
  if (target.startsWith('/')) {
    sectionId = getSectionIdFromPath(target)
  } else {
    sectionId = target.replace(/^#/, '')
  }

  // If home, smoothly scroll to top of page
  if (sectionId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return true
  }

  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 95 // Height of floating navbar + safe clearance padding
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = Math.max(0, elementPosition - offset)

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    return true
  }

  return false
}
