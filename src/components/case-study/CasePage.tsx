import type { ComponentType, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import PhoneFrame from './PhoneFrame'
import styles from './CasePage.module.css'

type FrameProps = { src: string; alt: string; ratio?: number; priority?: boolean }

export interface Shot {
  src: string
  alt: string
  ratio?: number
}

/** A bold lead-in followed by its sentence: "**Lead:** text". */
export interface Point {
  lead: string
  text: ReactNode
}

export interface Insight {
  title: string
  intro: ReactNode
  decisions: Point[]
  extra?: ReactNode
}

export interface DesignModule {
  title: string
  text: ReactNode
  media: ReactNode
}

export interface CasePageProps {
  title: string
  summary: ReactNode
  meta: { label: string; value: string }[]
  hero: ReactNode
  context: { text: ReactNode; points: ReactNode[]; extra?: ReactNode }
  problems: { points: Point[]; extra?: ReactNode }
  insights: Insight[]
  /** How the work was checked. Say plainly when it wasn't tested with users. */
  validation?: { title: string; intro: ReactNode; points: Point[] }
  design: { title: string; intro?: ReactNode; modules: DesignModule[] }
  impact: { points: Point[]; closing?: ReactNode }
  prev: { to: string; name: string }
  next: { to: string; name: string }
}

/** Screenshots on a panel, in a fixed number of columns. */
export function ShotGrid({
  shots,
  Frame = PhoneFrame,
  columns = 3,
  priority,
}: {
  shots: Shot[]
  Frame?: ComponentType<FrameProps>
  columns?: 1 | 2 | 3 | 4
  priority?: boolean
}) {
  return (
    <div className={styles.panel}>
      <div className={`${styles.shots} ${styles[`cols${columns}`]}`}>
        {shots.map((shot) => (
          <div key={shot.src} className={`${styles.shot} ${(shot.ratio ?? 0) > 1 ? styles.wide : ''}`}>
            <Frame src={shot.src} alt={shot.alt} ratio={shot.ratio} priority={priority} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Section({ eyebrow, title, children }: { eyebrow: string; title?: string; children: ReactNode }) {
  return (
    <section className={styles.section}>
      <span className="eyebrow">{eyebrow}</span>
      {title && <h2 className={styles.heading}>{title}</h2>}
      {children}
    </section>
  )
}

function Points({ points }: { points: Point[] }) {
  return (
    <ul className={styles.list}>
      {points.map((point) => (
        <li key={point.lead}>
          <strong>{point.lead}:</strong> {point.text}
        </li>
      ))}
    </ul>
  )
}

const letter = (i: number) => String.fromCharCode(65 + i)
const number = (i: number) => String(i + 1).padStart(2, '0')

/** The one layout every case study follows. */
export default function CasePage({
  title,
  summary,
  meta,
  hero,
  context,
  problems,
  insights,
  validation,
  design,
  impact,
  prev,
  next,
}: CasePageProps) {
  return (
    <article className={styles.page}>
      <div className={styles.column}>
        <header className={styles.header}>
          <Link to="/#work" className={styles.back}>
            ← Back to work
          </Link>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.summary}>{summary}</p>
          <dl className={styles.meta}>
            {meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.hero}>{hero}</div>
        </header>

        <Section eyebrow="Project overview" title="Context & Scope">
          <p className={styles.text}>{context.text}</p>
          <ul className={styles.list}>
            {context.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {context.extra}
        </Section>

        <Section eyebrow="Problem discovery" title="User Experience Barriers & Business Impact">
          <Points points={problems.points} />
          {problems.extra}
        </Section>

        <Section eyebrow="Core insights & design decisions">
          {insights.map((insight, i) => (
            <div key={insight.title} className={styles.insight}>
              <h2 className={styles.heading}>
                Insight {number(i)}: {insight.title}
              </h2>
              <p className={styles.text}>{insight.intro}</p>
              <ul className={styles.list}>
                {insight.decisions.map((decision) => (
                  <li key={decision.lead}>
                    <strong>Decision ({decision.lead}):</strong> {decision.text}
                  </li>
                ))}
              </ul>
              {insight.extra}
            </div>
          ))}
        </Section>

        {validation && (
          <Section eyebrow="Validation" title={validation.title}>
            <p className={styles.text}>{validation.intro}</p>
            <Points points={validation.points} />
          </Section>
        )}

        <Section eyebrow="Final design" title={design.title}>
          {design.intro}
          {design.modules.map((module, i) => (
            <div key={module.title} className={styles.module}>
              <h3 className={styles.moduleTitle}>
                {letter(i)}. {module.title}
              </h3>
              <p className={styles.text}>{module.text}</p>
              <div className={styles.media}>{module.media}</div>
            </div>
          ))}
        </Section>

        <Section eyebrow="Reflection" title="Impact & Results">
          <Points points={impact.points} />
          {impact.closing && <p className={styles.closing}>{impact.closing}</p>}
        </Section>

        <nav className={styles.pager} aria-label="More case studies">
          <Link to={prev.to} className={styles.pagerLink}>
            ← Previous: {prev.name}
          </Link>
          <Link to={next.to} className={styles.pagerLink}>
            Next: {next.name} →
          </Link>
        </nav>
      </div>
    </article>
  )
}
