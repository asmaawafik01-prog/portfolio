import { type ComponentType } from 'react'
import { Link } from 'react-router-dom'
import PhoneFrame from './PhoneFrame'
import styles from './CaseHeader.module.css'

type FrameProps = { src: string; alt: string; ratio?: number }

export default function CaseHeader({
  eyebrow,
  title,
  subtitle,
  role,
  meta,
  heroImage,
  heroAlt,
  heroRatio,
  Frame = PhoneFrame,
  wide,
}: {
  eyebrow: string
  title: string
  subtitle: string
  role: string
  meta: string[]
  heroImage: string
  heroAlt: string
  heroRatio?: number
  Frame?: ComponentType<FrameProps>
  /** Use for landscape/web screenshots — stacks the frame full-width below the text instead of a narrow side column. */
  wide?: boolean
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <Link to="/" className={styles.back}>
          ← Back to work
        </Link>
        <div className={`${styles.grid} ${wide ? styles.gridWide : ''}`}>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.subtitle} style={{ color: 'var(--text-muted)', fontWeight: 500 }}>
              {role}
            </p>
            <div className={styles.metaRow}>
              {meta.map((item) => (
                <span className={styles.metaPill} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className={`${styles.heroFrame} ${wide ? styles.heroFrameWide : ''}`}>
            <Frame src={heroImage} alt={heroAlt} ratio={heroRatio} />
          </div>
        </div>
      </div>
    </section>
  )
}
