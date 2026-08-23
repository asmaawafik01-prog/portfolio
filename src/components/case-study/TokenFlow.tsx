import KioskFrame from './KioskFrame'
import styles from './TokenFlow.module.css'

export default function TokenFlow({
  screen,
}: {
  screen: { src: string; alt: string; ratio?: number }
}) {
  return (
    <div className={styles.chain}>
      <div className={styles.node}>
        <span className={styles.nodeLabel}>Token</span>
        <div className={styles.visual}>
          <div className={styles.swatches}>
            <span className={`${styles.swatch} ${styles.swatchSm}`} />
            <span className={`${styles.swatch} ${styles.swatchMd}`} />
            <span className={`${styles.swatch} ${styles.swatchLg}`} />
          </div>
        </div>
        <p className={styles.nodeCaption}>Value tokens, a spacing &amp; sizing scale</p>
      </div>

      <span className={styles.arrow} aria-hidden="true">→</span>

      <div className={styles.node}>
        <span className={styles.nodeLabel}>Component</span>
        <div className={styles.visual}>
          <div className={styles.componentMock}>
            <span className={styles.mockButton} />
            <span className={styles.mockRow} />
            <span className={styles.mockRow} />
          </div>
        </div>
        <p className={styles.nodeCaption}>Buttons, cards, list rows built on the scale</p>
      </div>

      <span className={styles.arrow} aria-hidden="true">→</span>

      <div className={`${styles.node} ${styles.screenNode}`}>
        <span className={styles.nodeLabel}>Screen</span>
        <div className={styles.visual}>
          <div>
            <KioskFrame src={screen.src} alt={screen.alt} ratio={screen.ratio} compact />
          </div>
        </div>
        <p className={styles.nodeCaption}>Applied directly to the Self-Order UI</p>
      </div>
    </div>
  )
}
