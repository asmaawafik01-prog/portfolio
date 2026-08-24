import styles from './ShotFrame.module.css'

export default function ShotFrame({
  src,
  alt,
  fit = 'cover',
}: {
  src: string
  alt: string
  /** Accepted for signature parity with PhoneFrame/TabletFrame/BrowserFrame when used interchangeably; unused here — the shot fills its container edge-to-edge. */
  ratio?: number
  compact?: boolean
  /** 'cover' crops to fill (the default, used for full-bleed hero shots); 'contain' keeps
   *  the whole image visible, uncropped, letterboxed on the frame's own background. */
  fit?: 'contain' | 'cover'
}) {
  return (
    <div className={styles.frame}>
      <img src={src} alt={alt} decoding="async" className={fit === 'contain' ? styles.contain : undefined} />
    </div>
  )
}
