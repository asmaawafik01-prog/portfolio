import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

type SectionKey = 'home' | 'work' | 'about' | 'contact'

// Order matters: checked bottom-up so the last section the user has scrolled past "wins" —
// e.g. Highlights/Strengths (no nav link of their own) still read as "work" until About arrives.
const HOME_SECTIONS: SectionKey[] = ['contact', 'about', 'work']
// Just below the sticky nav (72px), so a section counts as "current" once its heading clears it.
const TRIGGER_OFFSET = 96

function useActiveSection(pathname: string): SectionKey {
  const [active, setActive] = useState<SectionKey>('home')

  useEffect(() => {
    if (pathname !== '/') {
      setActive(pathname.startsWith('/work') ? 'work' : 'home')
      return
    }

    let ticking = false
    const updateActive = () => {
      ticking = false
      for (const id of HOME_SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= TRIGGER_OFFSET) {
          setActive(id)
          return
        }
      }
      setActive('home')
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateActive)
      }
    }

    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return active
}

export default function Nav() {
  const { pathname } = useLocation()
  const active = useActiveSection(pathname)

  const isActive = (key: SectionKey) => active === key

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          Asmaa Wafik<span>.</span>
        </Link>
        <nav className={styles.links}>
          <Link
            to="/"
            className={`${styles.navLink} ${isActive('home') ? styles.active : ''}`}
            aria-current={isActive('home') ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            to="/#work"
            className={`${styles.navLink} ${isActive('work') ? styles.active : ''}`}
            aria-current={isActive('work') ? 'page' : undefined}
          >
            Work
          </Link>
          <Link
            to="/#about"
            className={`${styles.navLink} ${isActive('about') ? styles.active : ''}`}
            aria-current={isActive('about') ? 'page' : undefined}
          >
            About
          </Link>
          <Link
            to="/#contact"
            className={`${styles.cta} ${isActive('contact') ? styles.active : ''}`}
            aria-current={isActive('contact') ? 'page' : undefined}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
