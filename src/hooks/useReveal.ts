import { useCallback, useEffect, useRef, useState, type SyntheticEvent } from 'react'

/** Fires once when the element first enters the viewport — drives the site's scroll-reveal utility classes. */
export function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px', ...options },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, revealed }
}

/** Tracks whether the element is currently on screen — used to pause/resume infinite loops (status pulses, idle rotation) so they don't run while scrolled away. */
export function useInViewport<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inViewport, setInViewport] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInViewport(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => setInViewport(entry.isIntersecting), {
      threshold: 0,
      ...options,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inViewport }
}

/**
 * Combines scroll-reveal with actual image-load state, so the device-screen "power on"
 * effect never starts fading an image in before it has pixels to show — that mismatch is
 * what reads as lag/glitch when a large screenshot is still decoding as it scrolls into view.
 * `onLoad` also fires for images the browser serves from cache, so already-loaded shots
 * still animate in normally rather than getting stuck hidden.
 */
export function useScreenReveal<T extends HTMLElement>() {
  const { ref, revealed } = useReveal<T>()
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback((event: SyntheticEvent<HTMLImageElement>) => {
    if (event.currentTarget.complete) setLoaded(true)
  }, [])

  return { ref, show: revealed && loaded, onLoad }
}
