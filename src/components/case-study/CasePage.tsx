import { useContext, useEffect, useState, type ComponentType, type CSSProperties, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CaseModalContext } from '../caseModalContext'
import PhoneFrame from './PhoneFrame'
import { useReveal } from '../../hooks/useReveal'
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

export interface Stat {
  value: number
  label: string
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
  /** Short "What I did" labels, scannable before reading. */
  tags: string[]
  context: { text: ReactNode; points: ReactNode[]; extra?: ReactNode }
  problems: { points: Point[]; extra?: ReactNode }
  insights: Insight[]
  /** How the work was checked. Say plainly when it wasn't tested with users. */
  validation?: { title: string; intro: ReactNode; points: Point[] }
  design: { title: string; intro?: ReactNode; modules: DesignModule[] }
  /** Scope figures already stated elsewhere on the page — never outcome claims. */
  impact: { stats: Stat[]; points: Point[]; closing?: string }
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
  // Sections can be many screens tall, so reveal as soon as the top edge is well in view.
  const { ref, revealed } = useReveal<HTMLElement>({ threshold: 0, rootMargin: '0px 0px -8% 0px' })
  return (
    <section ref={ref} className={`${styles.section} reveal${revealed ? ' is-in' : ''}`}>
      <div className={styles.rail}>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className={styles.sectionBody}>
        {title && <h2 className={styles.heading}>{title}</h2>}
        {children}
      </div>
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

/** Each problem next to what the design does about it. */
export function ProblemPairs({ pairs }: { pairs: { problem: string; solution: string }[] }) {
  const { ref, revealed } = useReveal<HTMLDivElement>({ threshold: 0, rootMargin: '0px 0px -8% 0px' })
  return (
    <div ref={ref} className={styles.pairs}>
      {pairs.map((pair, i) => (
        <div
          key={pair.problem}
          className={`${styles.pair} reveal${revealed ? ' is-in' : ''}`}
          style={{ '--reveal-delay': `${i * 90}ms` } as CSSProperties}
        >
          <span className={styles.pairLabel}>Problem</span>
          <p className={styles.pairProblem}>{pair.problem}</p>
          <span className={`${styles.pairLabel} ${styles.pairLabelSolution}`}>Solution</span>
          <p className={styles.pairSolution}>{pair.solution}</p>
        </div>
      ))}
    </div>
  )
}

/** Counts up once, the first time it scrolls into view. */
function StatCard({ value, label }: Stat) {
  const { ref, revealed } = useReveal<HTMLDivElement>()
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!revealed) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(value)
      return
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 900, 1)
      setShown(Math.round(value * (1 - (1 - progress) ** 3)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [revealed, value])

  return (
    <div ref={ref} className={styles.stat}>
      {/* Screen readers get the final figure, not the counting frames. */}
      <span className={styles.statValue} aria-hidden="true">{shown}</span>
      <span className={styles.srOnly}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

/** The closing line lights up word by word. */
function Closing({ text }: { text: string }) {
  const { ref, revealed } = useReveal<HTMLParagraphElement>()
  return (
    <p ref={ref} className={`${styles.closing}${revealed ? ` ${styles.closingOn}` : ''}`}>
      {text.split(' ').map((word, i) => (
        <span key={i} style={{ transitionDelay: `${i * 40}ms` }}>
          {word}{' '}
        </span>
      ))}
    </p>
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
  tags,
  context,
  problems,
  insights,
  validation,
  design,
  impact,
  prev,
  next,
}: CasePageProps) {
  const close = useContext(CaseModalContext)
  const { state } = useLocation()
  const pagerProps = close ? { state, replace: true } : {}
  return (
    <article className={styles.page}>
      <div className={styles.column}>
        <header className={styles.header}>
          <Link
            to="/#work"
            className={styles.back}
            onClick={(e) => {
              if (!close) return
              e.preventDefault()
              close()
            }}
          >
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
          <div className={styles.did}>
            <span className={styles.didLabel}>What I did</span>
            <ul className={styles.tags}>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
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
          <div className={styles.stats}>
            {impact.stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <Points points={impact.points} />
          {impact.closing && <Closing text={impact.closing} />}
        </Section>

        <nav className={styles.pager} aria-label="More case studies">
          <Link to={prev.to} className={styles.pagerLink} {...pagerProps}>
            ← Previous: {prev.name}
          </Link>
          <Link to={next.to} className={styles.pagerLink} {...pagerProps}>
            Next: {next.name} →
          </Link>
        </nav>
      </div>
    </article>
  )
}
