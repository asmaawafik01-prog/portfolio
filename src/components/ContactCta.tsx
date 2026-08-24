import { useReveal } from '../hooks/useReveal'
import styles from './ContactCta.module.css'

export default function ContactCta({
  heading = 'Open to new opportunities.',
  supporting,
}: {
  heading?: string
  supporting?: string
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>()
  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="container">
        <div ref={ref} className={`${styles.card} reveal${revealed ? ' is-in' : ''}`}>
          <div className={styles.glow} aria-hidden="true" />
          <h2 className={styles.heading}>{heading}</h2>
          {supporting && <p className={styles.supporting}>{supporting}</p>}
          <div className={styles.actions}>
            <a href="mailto:asmaawafik01@gmail.com" className="btn-primary">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/asmaa-wafik-598625243"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
