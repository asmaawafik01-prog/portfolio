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
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (key: SectionKey) => active === key
  const closeMenu = () => setMenuOpen(false)

  // Close the mobile menu on route/section change so it never stays open after navigating.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock background scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // The mobile dropdown always renders plain, unhighlighted links — no "current section"
  // indicator there, only on the desktop inline nav.
  const renderLinks = (showActive: boolean) => (
    <>
      <Link
        to="/"
        className={`${styles.navLink} ${showActive && isActive('home') ? styles.active : ''}`}
        aria-current={showActive && isActive('home') ? 'page' : undefined}
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        to="/#work"
        className={`${styles.navLink} ${showActive && isActive('work') ? styles.active : ''}`}
        aria-current={showActive && isActive('work') ? 'page' : undefined}
        onClick={closeMenu}
      >
        Work
      </Link>
      <Link
        to="/#about"
        className={`${styles.navLink} ${showActive && isActive('about') ? styles.active : ''}`}
        aria-current={showActive && isActive('about') ? 'page' : undefined}
        onClick={closeMenu}
      >
        About
      </Link>
      <Link
        to="/#contact"
        className={`${styles.cta} ${showActive && isActive('contact') ? styles.active : ''}`}
        aria-current={showActive && isActive('contact') ? 'page' : undefined}
        onClick={closeMenu}
      >
        Contact
      </Link>
    </>
  )

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          Asmaa Wafik<span>.</span>
        </Link>
        <nav className={styles.links}>{renderLinks(true)}</nav>
        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {menuOpen && (
        <nav className={styles.mobileMenu}>
          {renderLinks(false)}
        </nav>
      )}
    </header>
  )
}
