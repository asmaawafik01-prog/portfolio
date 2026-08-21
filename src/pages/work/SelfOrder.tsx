import CaseHeader from '../../components/case-study/CaseHeader'
import CaseSection from '../../components/case-study/CaseSection'
import KioskFrame from '../../components/case-study/KioskFrame'
import FlowSteps from '../../components/case-study/FlowSteps'
import OwnershipGrid from '../../components/case-study/OwnershipGrid'
import DecisionTriple from '../../components/case-study/DecisionTriple'
import TokenFlow from '../../components/case-study/TokenFlow'
import ScreenGallery, { type GalleryScreen } from '../../components/case-study/ScreenGallery'
import CaseFooterNav from '../../components/case-study/CaseFooterNav'
import styles from './SelfOrder.module.css'

const IMG = (name: string) => `/images/highlights/kiosk/${name}`
const RATIO = 1080 / 1920

const flowScreens: GalleryScreen[] = [
  { src: IMG('01-welcome.png'), step: '01', caption: 'Welcome — choose dine-in or takeaway.', ratio: RATIO },
  { src: IMG('02-menu.png'), step: '02', caption: 'Browse menu — categories and quick filters.', ratio: RATIO },
  { src: IMG('03-item-detail.png'), step: '03', caption: 'Customize — a side panel keeps the menu in view.', ratio: RATIO },
  { src: IMG('04-order-review.png'), step: '04', caption: 'Review order — same panel pattern, full context kept.', ratio: RATIO },
  { src: IMG('05-payment.png'), step: '05', caption: 'Pay — one clear method selection.', ratio: RATIO },
]

const finalScreens: GalleryScreen[] = [
  { src: IMG('02-menu.png'), step: 'Menu', caption: 'The main ordering surface — category rail, filter chips, and an evenly spaced item grid.', ratio: RATIO },
  { src: IMG('03-item-detail.png'), step: 'Item detail', caption: 'Ingredients, add-ons, and quantity — all editable without leaving the menu behind.', ratio: RATIO },
  { src: IMG('04-order-review.png'), step: 'Order review', caption: 'The full order, reviewable in the same panel pattern used throughout.', ratio: RATIO },
  { src: IMG('05-payment.png'), step: 'Payment', caption: 'Four payment methods, each a full-width, unambiguous tap target.', ratio: RATIO },
]

export default function SelfOrder() {
  return (
    <>
      <CaseHeader
        eyebrow="Case Study 03 — Self-Order Kiosk"
        title="Designing for touch, with no playbook to follow."
        subtitle="I designed the Self-Order Kiosk experience while researching touch-target sizing and helping build the design-system foundation behind it."
        role="Role: Product Designer"
        meta={['Focus: UX/UI · Research · Design System', 'Product: Self-Order Kiosk']}
        heroImage={IMG('02-menu.png')}
        heroAlt="Self-Order Kiosk menu screen, a touch-first grid of dishes with category tabs"
        heroRatio={RATIO}
        Frame={KioskFrame}
      />

      <CaseSection eyebrow="The Challenge" heading="No playbook. So we had to build one.">
        <p>
          The Self-Order experience had few existing references for kiosk sizing, touch targets,
          or scalable UI foundations. Key decisions couldn&rsquo;t just be copied from an existing
          system — they had to be figured out.
        </p>
      </CaseSection>

      <section className="section" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">What I Owned</span>
          <h2
            style={{
              fontSize: 'clamp(24px,3.2vw,30px)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              marginTop: 10,
              marginBottom: 4,
            }}
          >
            One project, four connected responsibilities.
          </h2>
          <OwnershipGrid
            items={[
              { index: '01', verb: 'Designed', text: 'Self-Order UX/UI and interaction flows.' },
              { index: '02', verb: 'Researched', text: 'Sizing and touch-target requirements for the kiosk experience.' },
              { index: '03', verb: 'Built', text: 'A new value-token foundation to support consistent UI decisions.' },
              { index: '04', verb: 'Aligned', text: 'Worked with the team to validate the direction and move the system forward.' },
            ]}
          />
        </div>
      </section>

      <section className="section" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">The Research</span>
          <h2
            style={{
              fontSize: 'clamp(24px,3.2vw,30px)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              marginTop: 10,
              marginBottom: 4,
              maxWidth: 620,
            }}
          >
            Before designing the buttons, I had to understand the space they lived in.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15.5, lineHeight: 1.8, maxWidth: 620, marginBottom: 40 }}>
            A kiosk is touched standing up, often quickly, without the precision of a phone held
            in hand. That changes what &ldquo;usable&rdquo; means for spacing, sizing, and layout.
          </p>
          <div className={styles.researchGrid}>
            <div style={{ width: '100%', maxWidth: 220, margin: '0 auto' }}>
              <KioskFrame src={IMG('02-menu.png')} alt="Self-Order Kiosk menu grid" ratio={RATIO} />
            </div>
            <div style={{ display: 'grid', gap: 22 }}>
              {[
                {
                  label: 'Full-row tap targets',
                  text: 'Selection options use the entire row, not just the radio circle — dine-in/takeaway, payment method.',
                },
                {
                  label: 'Evenly spaced grid',
                  text: 'Menu items sit in a grid with consistent gaps, sized for a quick, accurate tap.',
                },
                {
                  label: 'One fixed primary action',
                  text: 'A single, high-contrast action bar anchored at the bottom of every screen.',
                },
                {
                  label: 'Repeatable sizing',
                  text: 'The same target sizes and spacing carried across welcome, menu, item detail, and payment.',
                },
              ].map((row) => (
                <div key={row.label}>
                  <span style={{ display: 'block', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--navy-bright-text)', marginBottom: 6 }}>
                    {row.label}
                  </span>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)' }}>{row.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">Designing the Experience</span>
          <h2
            style={{
              fontSize: 'clamp(24px,3.2vw,30px)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              marginTop: 10,
              marginBottom: 22,
            }}
          >
            From a blank flow to a working kiosk.
          </h2>
          <FlowSteps
            label="Main flow"
            steps={['Welcome', 'Browse menu', 'Customize item', 'Review order', 'Pay']}
          />
          <div style={{ marginTop: 36 }}>
            <ScreenGallery screens={flowScreens} Frame={KioskFrame} />
          </div>

          <div style={{ marginTop: 24 }}>
            <DecisionTriple
              index="01"
              decision="Item customization opens in a side panel, not a new page."
              why="The menu stays visible behind it, so people don't lose their place mid-order."
              image={{ src: IMG('03-item-detail.png'), alt: 'Item customization panel over the dimmed menu', ratio: RATIO }}
              Frame={KioskFrame}
            />
            <DecisionTriple
              index="02"
              decision="Cart review reuses the exact same panel pattern."
              why="One interaction, learned once and reused everywhere — less to figure out under time pressure."
              image={{ src: IMG('04-order-review.png'), alt: 'Order review panel over the dimmed menu', ratio: RATIO }}
              Frame={KioskFrame}
            />
            <DecisionTriple
              index="03"
              decision="Every screen ends in a single, unmistakable action."
              why="No hover states, no second guesses — kiosk interactions need to be obvious at a glance."
              image={{ src: IMG('01-welcome.png'), alt: 'Welcome screen with one primary action', ratio: RATIO }}
              Frame={KioskFrame}
            />
          </div>
        </div>
      </section>

      <CaseSection eyebrow="The System Problem" heading="Then the same problem showed up underneath the UI.">
        <p>
          While designing the kiosk, sizing and spacing decisions kept getting made screen by
          screen, with no shared reference to check against — a Design System gap, not just a
          kiosk problem.
        </p>
        <div style={{ marginTop: 28 }}>
          <FlowSteps
            label="How the gap surfaced"
            steps={['UI needs', 'System gap', 'New value tokens', 'Consistent components']}
          />
        </div>
        <p style={{ marginTop: 28 }}>
          I raised it with the team, we aligned on the direction, and I worked on the new
          value-token set together with them.
        </p>
      </CaseSection>

      <section className="section" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">From Token to UI</span>
          <h2
            style={{
              fontSize: 'clamp(24px,3.2vw,30px)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              marginTop: 10,
              marginBottom: 4,
            }}
          >
            Not theoretical — it&rsquo;s in the product.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15.5, maxWidth: 560, marginBottom: 36 }}>
            The value tokens weren&rsquo;t just documentation. I used them directly to build the
            Self-Order UI.
          </p>
          <TokenFlow screen={{ src: IMG('02-menu.png'), alt: 'Self-Order Kiosk menu screen', ratio: RATIO }} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">The Final Experience</span>
          <h2
            style={{
              fontSize: 'clamp(28px,3.6vw,38px)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              marginTop: 10,
              marginBottom: 8,
            }}
          >
            A touch-first experience, built to scale.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 560, marginBottom: 8 }}>
            The complete Self-Order flow, end to end.
          </p>
          <ScreenGallery screens={finalScreens} Frame={KioskFrame} wide />
        </div>
      </section>

      <CaseSection eyebrow="Outcome" heading="What this work left behind." alt>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9, color: 'var(--text-muted)' }}>
          <li>A complete Self-Order UI experience, designed end-to-end on the interaction/UI side</li>
          <li>Research-informed sizing and touch-target decisions</li>
          <li>A new value-token foundation for the design system</li>
          <li>More consistent UI decisions across screens</li>
          <li>Stronger scalability for future screens and components</li>
          <li>Better alignment between the product UI and the design system</li>
        </ul>
      </CaseSection>

      <section className="section">
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p
            style={{
              fontSize: 'clamp(22px, 2.8vw, 28px)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              lineHeight: 1.5,
            }}
          >
            I wasn&rsquo;t just designing the interface. I was helping define the{' '}
            <span style={{ color: 'var(--navy-bright-text)' }}>foundation</span> it needed to work
            well.
          </p>
        </div>
      </section>

      <CaseFooterNav nextName="About" nextHref="/#about" nextLabel="Up next" />
    </>
  )
}
