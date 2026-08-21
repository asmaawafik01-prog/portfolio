import { Link } from 'react-router-dom'
import styles from './CaseFooterNav.module.css'

export default function CaseFooterNav({
  nextSlug,
  nextName,
  nextHref,
  nextLabel = 'Next case study',
}: {
  nextSlug?: string
  nextName: string
  /** Overrides the default `/work/${nextSlug}` target — use for links that aren't case studies. */
  nextHref?: string
  nextLabel?: string
}) {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.row}>
          <Link to="/" className={styles.backLink}>
            ← Back to all work
          </Link>
          <Link to={nextHref ?? `/work/${nextSlug}`} className={styles.next}>
            <div>
              <div className={styles.nextLabel}>{nextLabel}</div>
              <div className={styles.nextName}>{nextName} →</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
