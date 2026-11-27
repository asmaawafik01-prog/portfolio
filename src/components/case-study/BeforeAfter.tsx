import BrowserFrame from './BrowserFrame'
import styles from './BeforeAfter.module.css'

export default function BeforeAfter({
  before,
  after,
}: {
  before: { src: string; alt: string; ratio?: number }
  after: { src: string; alt: string; ratio?: number }
}) {
  return (
    <div className={styles.grid}>
      <div className={styles.col}>
        <span className={`${styles.tag} ${styles.tagBefore}`}>Before</span>
        <BrowserFrame src={before.src} alt={before.alt} ratio={before.ratio} />
      </div>
      <div className={styles.col}>
        <span className={`${styles.tag} ${styles.tagAfter}`}>After</span>
        <BrowserFrame src={after.src} alt={after.alt} ratio={after.ratio} />
      </div>
    </div>
  )
}
