import { useScreenReveal } from '../../hooks/useReveal'
import styles from './TabletFrame.module.css'

export default function TabletFrame({
  src,
  alt,
  ratio = 0.5625,
  align = 'top',
  compact = false,
  priority = false,
}: {
  src: string
  alt: string
  ratio?: number
  align?: 'top' | 'bottom'
  compact?: boolean
  /** Accepted for signature parity with BrowserFrame when used interchangeably; unused here. */
  fit?: 'contain' | 'cover'
  /** For above-the-fold hero usage — loads eagerly and skips the scroll-triggered reveal. */
  priority?: boolean
}) {
  const { ref, show, onLoad } = useScreenReveal<HTMLDivElement>()
  const isShown = priority || show
  return (
    <div className={`${styles.frame} ${compact ? styles.frameCompact : ''}`}>
      <div className={styles.camera} aria-hidden="true" />
      <div
        ref={ref}
        className={`${styles.screen} reveal-screen${isShown ? ' is-in' : ''}`}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={onLoad}
          style={{ objectPosition: `center ${align}` }}
        />
      </div>
    </div>
  )
}
