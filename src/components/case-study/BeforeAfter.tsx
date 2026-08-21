import BrowserFrame from './BrowserFrame'
import styles from './BeforeAfter.module.css'

export default function BeforeAfter({
  index,
  title,
  text,
  before,
  after,
}: {
  index: string
  title: string
  text: string
  before: { src: string; alt: string; ratio?: number }
  after: { src: string; alt: string; ratio?: number }
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.num}>{index}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
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
    </div>
  )
}
