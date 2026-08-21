import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './Lightbox.module.css'

export interface LightboxImage {
  src: string
  alt: string
}

const SWIPE_THRESHOLD = 50

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: LightboxImage[]
  /** null/undefined keeps the lightbox unmounted. */
  index: number | null | undefined
  onClose: () => void
  onNavigate: (index: number) => void
}) {
  const open = index !== null && index !== undefined
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)
  const touchStartX = useRef<number | null>(null)

  const goPrev = () => {
    if (index != null && index > 0) onNavigate(index - 1)
  }
  const goNext = () => {
    if (index != null && index < images.length - 1) onNavigate(index + 1)
  }

  useEffect(() => {
    if (!open) return
    restoreFocusRef.current = document.activeElement as HTMLElement
    closeBtnRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      restoreFocusRef.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index, images.length])

  if (!open) return null

  const current = images[index]

  const onOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > SWIPE_THRESHOLD) goPrev()
    else if (delta < -SWIPE_THRESHOLD) goNext()
    touchStartX.current = null
  }

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      onClick={onOverlayClick}
    >
      <div className={styles.topBar}>
        {images.length > 1 ? (
          <span className={styles.counter}>
            {index + 1} / {images.length}
          </span>
        ) : (
          <span />
        )}
        <button ref={closeBtnRef} type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>
      <div className={styles.stage} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {images.length > 1 && (
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous image"
          >
            ‹
          </button>
        )}
        <div className={styles.imageWrap} onClick={onOverlayClick}>
          <img src={current.src} alt={current.alt} />
        </div>
        {images.length > 1 && (
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={goNext}
            disabled={index === images.length - 1}
            aria-label="Next image"
          >
            ›
          </button>
        )}
      </div>
      {current.alt && <p className={styles.caption}>{current.alt}</p>}
    </div>,
    document.body,
  )
}
