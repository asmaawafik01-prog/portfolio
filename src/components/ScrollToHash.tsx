import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Section ids (#work, #about, #contact) only exist on the Home page, so nav links always
 * route through "/" first. This scrolls to the target section once it's mounted, or resets
 * to the top on a plain route change (e.g. the Home link, or CaseFooterNav's "next" link).
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = hash.slice(1)
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

  return null
}
