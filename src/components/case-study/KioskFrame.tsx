import { useScreenReveal } from '../../hooks/useReveal'
import styles from './KioskFrame.module.css'

export default function KioskFrame({
  src,
  alt,
  ratio = 0.5625,
  align = 'top',
  compact = false,
}: {
  src: string
  alt: string
  /** width / height of the source screenshot, so the frame matches it exactly instead of cropping */
  ratio?: number
  align?: 'top' | 'bottom'
  /** For small mockup thumbnails (e.g. flow galleries), where the case-study frame's fixed-pixel bezel would look chunky. */
  compact?: boolean
  /** Accepted for signature parity with PhoneFrame/TabletFrame/BrowserFrame when used interchangeably; unused here. */
  fit?: 'contain' | 'cover'
}) {
  const { ref, show, onLoad } = useScreenReveal<HTMLDivElement>()
  return (
    <div className={styles.wrap}>
      <div className={`${styles.frame} ${compact ? styles.frameCompact : ''}`}>
        <div className={styles.sensor} aria-hidden="true" />
        <div
          ref={ref}
          className={`${styles.screen} reveal-screen${show ? ' is-in' : ''}`}
          style={{ aspectRatio: ratio }}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={onLoad}
            style={{ objectPosition: `center ${align}` }}
          />
        </div>
      </div>
      <div className={styles.neck} aria-hidden="true" />
      <div className={styles.base} aria-hidden="true" />
    </div>
  )
}
