import { useEffect, useState, type CSSProperties } from 'react'
import { useInViewport } from '../hooks/useReveal'
import styles from './Hero.module.css'

const STAGGER_MS = 70

function beat(i: number): CSSProperties {
  return { '--reveal-delay': `${i * STAGGER_MS}ms` } as CSSProperties
}

export default function Hero() {
  const { ref, inViewport } = useInViewport<HTMLElement>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Effects run after the initial (opacity: 0) frame has already painted, so setting
    // state here — no rAF needed — is what makes the transition to `.is-in` actually animate.
    setMounted(true)
  }, [])

  const entrance = mounted ? ' is-in' : ''

  return (
    <section ref={ref} className={`${styles.hero} ${inViewport ? styles.live : ''}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={`${styles.eyebrowRow} reveal${entrance}`} style={beat(0)}>
            <span className={styles.dot} />
            <span className="eyebrow">Product Designer</span>
          </div>
          <h1 className={`${styles.name} reveal${entrance}`} style={beat(1)}>
            Asmaa Wafik
          </h1>
          <p className={`${styles.tagline} reveal${entrance}`} style={beat(2)}>
            Designing clarity into complex products, from enterprise systems to mobile apps.
          </p>
          <p className={`${styles.supporting} reveal${entrance}`} style={beat(3)}>
            I&rsquo;m a UI/UX Designer who works within product teams to solve real usability
            problems across enterprise, retail, and consumer platforms, from multi-module ERP
            workflows to end-to-end mobile app design.
          </p>
          <div className={`${styles.actions} reveal${entrance}`} style={beat(4)}>
            <a href="#work" className="btn-primary">
              View Work →
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View CV
            </a>
            <a
              href="https://www.linkedin.com/in/asmaa-wafik-598625243"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className={`${styles.portraitWrap} reveal${entrance}`} style={beat(2)}>
          <div className={styles.portraitStage}>
            <svg className={styles.orbit} viewBox="0 0 360 360" fill="none" aria-hidden="true">
              <circle cx="180" cy="180" r="158" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="1 7" />
              <circle cx="180" cy="180" r="138" stroke="rgba(74, 111, 165, 0.2)" strokeWidth="1" />
              <circle cx="272" cy="88" r="3" fill="var(--navy-bright)" />
              <circle cx="88" cy="272" r="2.5" fill="var(--navy-bright)" opacity="0.6" />
              <rect x="28.5" y="146.5" width="7" height="7" transform="rotate(45 32 150)" fill="none" stroke="var(--navy-bright)" strokeWidth="1.2" opacity="0.8" />
              <circle cx="200" cy="20" r="9" fill="var(--navy-bright)" opacity="0.15" />
              <circle cx="200" cy="20" r="3" fill="var(--navy-bright)" />
              <line x1="292" y1="66" x2="300" y2="54" stroke="rgba(74, 111, 165, 0.4)" strokeWidth="1" />
              <line x1="68" y1="294" x2="60" y2="306" stroke="rgba(74, 111, 165, 0.3)" strokeWidth="1" />
            </svg>
            <div className={styles.portrait}>
              <img src="/images/portrait.jpg" alt="Portrait of Asmaa Wafik" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
