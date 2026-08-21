import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PhoneFrame from './case-study/PhoneFrame'
import TabletFrame from './case-study/TabletFrame'
import BrowserFrame from './case-study/BrowserFrame'
import KioskFrame from './case-study/KioskFrame'
import ShotFrame from './case-study/ShotFrame'
import { useReveal } from '../hooks/useReveal'
import styles from './ProjectCard.module.css'

export interface Project {
  index: string
  slug: string
  name: string
  tag: string
  type: string
  platform: string
  description: string
  image: string
  device: 'phone' | 'tablet' | 'browser' | 'kiosk' | 'shot'
  ratio: number
  compact?: boolean
}

const FRAMES = { phone: PhoneFrame, tablet: TabletFrame, browser: BrowserFrame, kiosk: KioskFrame, shot: ShotFrame }
const MOCKUP_CLASS = { phone: 'mockupPhone', tablet: 'mockupTablet', browser: 'mockupBrowser', kiosk: 'mockupKiosk', shot: 'mockupShot' } as const

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const Frame = FRAMES[project.device]
  const { ref, revealed } = useReveal<HTMLAnchorElement>()
  return (
    <Link
      ref={ref}
      to={`/work/${project.slug}`}
      className={`${styles.card} reveal${revealed ? ' is-in' : ''}`}
      style={{ '--reveal-delay': `${Math.min(index, 4) * 90}ms` } as CSSProperties}
    >
      <div className={`${styles.stage} ${project.device === 'shot' ? styles.stageFull : ''}`}>
        <span className={styles.index}>{project.index}</span>
        <div className={`${styles.mockup} ${styles[MOCKUP_CLASS[project.device]]}`}>
          <Frame
            src={project.image}
            alt={`${project.name} — ${project.type} screen`}
            ratio={project.ratio}
            compact={project.compact}
          />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span>{project.tag}</span>
          <span className={styles.metaDot} />
          <span>{project.platform}</span>
        </div>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.desc}>{project.description}</p>
        <span className={styles.arrow} aria-hidden="true">→</span>
      </div>
    </Link>
  )
}
