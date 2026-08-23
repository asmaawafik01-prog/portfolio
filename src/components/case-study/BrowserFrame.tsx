import { useScreenReveal } from '../../hooks/useReveal'
import styles from './BrowserFrame.module.css'

export default function BrowserFrame({
  src,
  alt,
  ratio = 1.4,
  fit = 'contain',
  priority = false,
}: {
  src: string
  alt: string
  /** width / height of the source screenshot, so the frame matches it exactly instead of cropping */
  ratio?: number
  /** Accepted for signature parity with PhoneFrame/TabletFrame when used interchangeably; unused here. */
  compact?: boolean
  /**
   * 'contain' (default) fits the whole image with no cropping — use with the image's own
   * true ratio. 'cover' crops to fill a `ratio` shorter than the source — use for very long
   * full-page captures where showing the entire scroll would tower over sibling mockups;
   * pass a `ratio` matching the desired crop and this shows the top of the page.
   */
  fit?: 'contain' | 'cover'
  /** For above-the-fold hero usage — loads eagerly and skips the scroll-triggered reveal. */
  priority?: boolean
}) {
  const { ref, show, onLoad } = useScreenReveal<HTMLDivElement>()
  const isShown = priority || show
  return (
    <div className={styles.frame}>
      <div className={styles.chrome}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.bar} />
      </div>
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
          style={{ objectFit: fit }}
        />
      </div>
    </div>
  )
}
