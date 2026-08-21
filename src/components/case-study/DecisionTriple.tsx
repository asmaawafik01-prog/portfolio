import type { ComponentType } from 'react'
import TabletFrame from './TabletFrame'
import styles from './DecisionTriple.module.css'

type FrameProps = { src: string; alt: string; ratio?: number }

export default function DecisionTriple({
  index,
  decision,
  why,
  image,
  Frame = TabletFrame,
}: {
  index: string
  decision: string
  why: string
  image: { src: string; alt: string; ratio?: number }
  Frame?: ComponentType<FrameProps>
}) {
  return (
    <div className={styles.card}>
      <div>
        <span className={styles.num}>{index}</span>
        <div className={styles.field}>
          <span className={styles.fieldLabel}>Decision</span>
          <p className={styles.fieldValue}>{decision}</p>
        </div>
        <div className={styles.field}>
          <span className={styles.fieldLabel}>Why</span>
          <p className={styles.fieldValue}>{why}</p>
        </div>
      </div>
      <div className={styles.resultCol}>
        <span className={styles.resultLabel}>Result</span>
        <Frame src={image.src} alt={image.alt} ratio={image.ratio} />
      </div>
    </div>
  )
}
