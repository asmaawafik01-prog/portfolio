import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CaseModalContext } from './caseModalContext'
import styles from './CaseModal.module.css'

const EXIT_MS = 250

/** A case study sliding up over the page it was opened from. A native <dialog> traps focus. */
export default function CaseModal({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const ref = useRef<HTMLDialogElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const timer = useRef<number | undefined>(undefined)
  const [closing, setClosing] = useState(false)

  const close = () => {
    if (timer.current) return
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setClosing(true)
    timer.current = window.setTimeout(() => navigate(-1), still ? 0 : EXIT_MS)
  }

  useEffect(() => {
    const dialog = ref.current!
    const opener = document.activeElement as HTMLElement | null
    const root = document.documentElement
    // Keep the page behind from scrolling, without it jumping sideways.
    const scrollbar = window.innerWidth - root.clientWidth
    root.style.overflow = 'hidden'
    root.style.paddingRight = `${scrollbar}px`
    dialog.showModal()

    return () => {
      window.clearTimeout(timer.current)
      timer.current = undefined
      dialog.close()
      root.style.overflow = ''
      root.style.paddingRight = ''
      opener?.focus({ preventScroll: true })
    }
  }, [])

  // Previous / next swaps the case study in place: start it from the top.
  useEffect(() => {
    // The dialog scrolls on wide screens, the panel on phones.
    ref.current?.scrollTo({ top: 0 })
    panelRef.current?.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <dialog
      ref={ref}
      className={`${styles.dialog}${closing ? ` ${styles.closing}` : ''}`}
      aria-label="Case study"
      onCancel={(e) => {
        e.preventDefault()
        close()
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
    >
      <button type="button" className={styles.close} onClick={close} aria-label="Close case study">
        ✕
      </button>
      <div ref={panelRef} className={styles.panel}>
        <CaseModalContext.Provider value={close}>{children}</CaseModalContext.Provider>
      </div>
    </dialog>
  )
}
