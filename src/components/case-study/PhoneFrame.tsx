import { useScreenReveal } from '../../hooks/useReveal'
import styles from './PhoneFrame.module.css'

export default function PhoneFrame({
  src,
  alt,
  ratio = 0.462,
  align = 'top',
  compact = false,
}: {
  src: string
  alt: string
  /** width / height of the source screenshot, so the frame matches it exactly instead of cropping */
  ratio?: number
  /**
   * Where the screenshot sits within the frame. Use 'bottom' for bottom-sheet / modal
   * crops that are much shorter than a full screen — pair with a standard phone `ratio`
   * (matching a sibling full screen) so the frame still reads as a phone, with the sheet
   * pinned to the bottom rather than stretching the bezel to the crop's own squat ratio.
   */
  align?: 'top' | 'bottom'
  /**
   * For small mockup thumbnails (e.g. Highlights galleries), where the case-study frame's
   * fixed-pixel bezel/notch would look chunky and can cover a screenshot's own header text.
   */
  compact?: boolean
  /** Accepted for signature parity with BrowserFrame when used interchangeably; unused here. */
  fit?: 'contain' | 'cover'
}) {
  const { ref, show, onLoad } = useScreenReveal<HTMLDivElement>()
  return (
    <div className={`${styles.frame} ${compact ? styles.frameCompact : ''}`}>
      <div className={styles.notch} aria-hidden="true" />
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
