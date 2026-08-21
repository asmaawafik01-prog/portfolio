import TagList from './case-study/TagList'
import { useReveal } from '../hooks/useReveal'
import styles from './AboutSection.module.css'

const WHAT_I_DO = ['Wireframing', 'Prototyping', 'User Interface Design', 'User Experience Design', 'Usability Testing']
const TOOLS = ['Figma', 'Adobe XD']

const HIGHLIGHTS = [
  'Designed the end-to-end experience for Bcare, a healthcare booking app',
  'Contributed to Microtec ERP, a multi-module enterprise system, including a cross-module payment workflow and a reusable Design System component',
  'Worked across both sides of Fooj, a two-sided marketplace app, from team collaboration to independent ownership',
  'Redesigned core screens of Ored POS to resolve usability issues in an existing product',
  'Designed Batecom, a real estate website',
]

export default function AboutSection() {
  const { ref: introRef, revealed: introRevealed } = useReveal<HTMLDivElement>()
  const { ref: panelRef, revealed: panelRevealed } = useReveal<HTMLDivElement>()

  return (
    <section className={`section ${styles.section}`} id="about">
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div ref={introRef} className={`${styles.intro} reveal${introRevealed ? ' is-in' : ''}`}>
          <span className="eyebrow">About</span>
          <h2 className={styles.heading}>Asmaa Wafik — Product/UX Designer</h2>
          <p className={styles.bio}>
            I design clear, usable products across a wide range of types — POS systems, enterprise
            ERP platforms, mobile apps, and websites. I usually work within product teams,
            contributing to specific screens, flows, and features — and I&rsquo;ve also taken a
            project from concept to full ownership on my own. Either way, my process stays the
            same: understand the problem, design and test the solution, then follow through past
            handoff to make sure what ships actually works.
          </p>
          <div className={styles.doRow}>
            <span className={styles.label}>What I do</span>
            <TagList items={WHAT_I_DO} />
          </div>
        </div>

        <div ref={panelRef} className={`${styles.panel} reveal${panelRevealed ? ' is-in' : ''}`}>
          <div className={styles.panelCol}>
            <span className="eyebrow">Highlights</span>
            <h3 className={styles.panelHeading}>Selected contributions</h3>
            <ul className={styles.highlights}>
              {HIGHLIGHTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.panelCol}>
            <span className="eyebrow">Tools</span>
            <h3 className={styles.panelHeading}>Design tools</h3>
            <TagList items={TOOLS} tone="accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
