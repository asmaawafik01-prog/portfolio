import { useScreenReveal } from '../../hooks/useReveal'
import styles from './ShotFrame.module.css'

export default function ShotFrame({
  src,
  alt,
}: {
  src: string
  alt: string
  /** Accepted for signature parity with PhoneFrame/TabletFrame/BrowserFrame when used interchangeably; unused here — the shot fills its container edge-to-edge. */
  ratio?: number
  compact?: boolean
  fit?: 'contain' | 'cover'
}) {
  const { ref, show, onLoad } = useScreenReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`${styles.frame} reveal-screen${show ? ' is-in' : ''}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" onLoad={onLoad} />
    </div>
  )
}
