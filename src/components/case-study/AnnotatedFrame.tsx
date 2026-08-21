import styles from './AnnotatedFrame.module.css'

export interface Annotation {
  /** Percent from left (0-100), positioned over the screenshot. */
  x: number
  /** Percent from top (0-100), positioned over the screenshot. */
  y: number
  label: string
}

export default function AnnotatedFrame({
  src,
  alt,
  ratio = 1.6,
  points,
}: {
  src: string
  alt: string
  ratio?: number
  points: Annotation[]
}) {
  return (
    <div>
      <div className={styles.frame}>
        <div className={styles.chrome}>
          <div className={styles.dots}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.bar} />
        </div>
        <div className={styles.screen} style={{ aspectRatio: ratio }}>
          <img src={src} alt={alt} loading="lazy" />
          {points.map((point, i) => (
            <span
              key={i}
              className={styles.pin}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              aria-hidden="true"
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>
      <ol className={styles.legend}>
        {points.map((point, i) => (
          <li key={i}>
            <span className={styles.legendNum}>{i + 1}</span>
            {point.label}
          </li>
        ))}
      </ol>
    </div>
  )
}
