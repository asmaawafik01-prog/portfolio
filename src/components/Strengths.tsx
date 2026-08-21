import type { CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Strengths.module.css'

const strengths = [
  'Product Thinking',
  'UX Problem Solving',
  'Enterprise & Complex Workflows',
  'Cross-Module / Systems Thinking',
  'Design System Contribution',
  'UI Craft',
  'Design Validation (QA)',
]

export default function Strengths() {
  const { ref: headerRef, revealed: headerRevealed } = useReveal<HTMLDivElement>()
  const { ref: gridRef, revealed: gridRevealed } = useReveal<HTMLDivElement>()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal${headerRevealed ? ' is-in' : ''}`}
        >
          <span className="eyebrow">Strengths</span>
          <h2 className={styles.heading}>Where I add the most value</h2>
        </div>
        <div ref={gridRef} className={styles.grid}>
          {strengths.map((item, i) => (
            <div
              className={`${styles.item} reveal${gridRevealed ? ' is-in' : ''}`}
              style={{ '--reveal-delay': `${Math.min(i, 6) * 55}ms` } as CSSProperties}
              key={item}
            >
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.label}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
