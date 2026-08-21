import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import styles from './CaseSection.module.css'

export default function CaseSection({
  eyebrow,
  heading,
  alt,
  wide,
  id,
  children,
}: {
  eyebrow?: string
  heading?: string
  alt?: boolean
  wide?: boolean
  id?: string
  children: ReactNode
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>()
  return (
    <section
      id={id}
      className={`section ${styles.section} ${alt ? styles.alt : ''} ${wide ? styles.wide : ''}`}
    >
      <div className="container">
        <div ref={ref} className={`${styles.inner} reveal${revealed ? ' is-in' : ''}`}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {heading && <h2 className={styles.heading}>{heading}</h2>}
          <div className={styles.prose}>{children}</div>
        </div>
      </div>
    </section>
  )
}
