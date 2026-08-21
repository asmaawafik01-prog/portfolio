import { useScreenReveal } from '../../hooks/useReveal'
import styles from './TabletFrame.module.css'

export default function TabletFrame({
  src,
  alt,
  ratio = 0.5625,
  align = 'top',
  compact = false,
}: {
  src: string
  alt: string
  ratio?: number
  align?: 'top' | 'bottom'
  compact?: boolean
  /** Accepted for signature parity with BrowserFrame when used interchangeably; unused here. */
  fit?: 'contain' | 'cover'
}) {
  const { ref, show, onLoad } = useScreenReveal<HTMLDivElement>()
  return (
    <div className={`${styles.frame} ${compact ? styles.frameCompact : ''}`}>
      <div className={styles.camera} aria-hidden="true" />
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
  )
}
