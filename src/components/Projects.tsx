import { useReveal } from '../hooks/useReveal'
import styles from './Projects.module.css'
import ProjectCard, { type Project } from './ProjectCard'

const projects: Project[] = [
  {
    index: '01',
    slug: 'bcare',
    name: 'Bcare',
    tag: 'Healthcare',
    type: 'Healthcare booking app',
    platform: 'Mobile',
    description:
      'Turning a confusing paper prescription into a guided, confident booking experience.',
    image: '/images/bcare-card.png',
    device: 'shot',
    ratio: 1920 / 1536,
  },
  {
    index: '02',
    slug: 'fooj',
    name: 'Fooj',
    tag: 'Marketplace',
    type: 'Two-sided marketplace app',
    platform: 'Mobile',
    description:
      'Connecting horse owners and stable owners through discovery, booking, and stable management.',
    image: '/images/fooj-card-shot.png',
    device: 'shot',
    ratio: 1920 / 1536,
  },
  {
    index: '03',
    slug: 'self-order',
    name: 'Self-Order Kiosk',
    tag: 'Self-Service',
    type: 'Touch-first kiosk ordering',
    platform: 'Kiosk',
    description:
      'Designing a touch-first ordering experience — and the design-system foundation it exposed a gap in.',
    image: '/images/highlights/kiosk/02-menu.png',
    device: 'kiosk',
    ratio: 1080 / 1920,
    compact: true,
  },
]

export default function Projects() {
  const { ref: headerRef, revealed: headerRevealed } = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="work">
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal${headerRevealed ? ' is-in' : ''}`}>
          <span className="eyebrow">Selected Work</span>
          <h2 className={styles.heading}>Case studies</h2>
        </div>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
