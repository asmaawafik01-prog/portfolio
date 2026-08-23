import { Link } from 'react-router-dom'
import heroStyles from '../../components/case-study/CaseHeader.module.css'
import styles from './Erp.module.css'
import CaseSection from '../../components/case-study/CaseSection'
import FlowSteps from '../../components/case-study/FlowSteps'
import OwnershipGrid from '../../components/case-study/OwnershipGrid'
import ModuleDiagram from '../../components/case-study/ModuleDiagram'
import ComponentShowcase from '../../components/case-study/ComponentShowcase'
import ScreenGallery, { type GalleryScreen } from '../../components/case-study/ScreenGallery'
import BrowserFrame from '../../components/case-study/BrowserFrame'
import CaseFooterNav from '../../components/case-study/CaseFooterNav'

const IMG = (name: string) => `/images/erp/${name}`

// Verified directly against every screenshot before writing captions — filenames here
// were confirmed accurate (unlike the BCare set, where several were mislabeled).
const DIMENSIONS: Record<string, [number, number]> = {
  '01_treasury_entry.png': [2920, 2088],
  '03_payment_terms_empty.png': [2920, 2088],
  '05_vendor_entry.png': [2880, 2048],
  '06_journal_entry_a.png': [2880, 2048],
  '07_journal_entry_b.png': [2880, 2048],
  '09_payment_out_filled.png': [1440, 1024],
  '10_customer_definition.png': [1440, 1024],
  '12_bank_definition_filled.png': [2920, 2088],
  '13_payment_method_filled.png': [2920, 2088],
  '14_payment_in_filled.png': [2920, 2088],
}
const RATIO = (name: string) => {
  const dims = DIMENSIONS[name]
  return dims ? dims[0] / dims[1] : 1.4
}

const sectionHeading = {
  fontSize: 'clamp(24px,3.2vw,30px)',
  fontWeight: 800,
  letterSpacing: '-0.015em',
  marginTop: 10,
  marginBottom: 8,
} as const

const showcaseScreens: GalleryScreen[] = [
  { src: IMG('01_treasury_entry.png'), step: 'Treasury', caption: 'Cash account setup.', ratio: RATIO('01_treasury_entry.png') },
  { src: IMG('12_bank_definition_filled.png'), step: 'Bank', caption: 'Linked accounts and branch details.', ratio: RATIO('12_bank_definition_filled.png') },
  { src: IMG('03_payment_terms_empty.png'), step: 'Payment Terms', caption: 'Configurable terms used across transactions.', ratio: RATIO('03_payment_terms_empty.png') },
  { src: IMG('13_payment_method_filled.png'), step: 'Payment Method', caption: 'Linked to a bank account and currency.', ratio: RATIO('13_payment_method_filled.png') },
  { src: IMG('05_vendor_entry.png'), step: 'Vendor', caption: 'Purchase-module record.', ratio: RATIO('05_vendor_entry.png') },
  { src: IMG('10_customer_definition.png'), step: 'Customer', caption: 'Sales-module record.', ratio: RATIO('10_customer_definition.png') },
  { src: IMG('06_journal_entry_a.png'), step: 'General Journal', caption: 'Entry view.', ratio: RATIO('06_journal_entry_a.png') },
  { src: IMG('07_journal_entry_b.png'), step: 'General Journal', caption: 'A second entry view.', ratio: RATIO('07_journal_entry_b.png') },
  { src: IMG('14_payment_in_filled.png'), step: 'Payment In', caption: 'Money received.', ratio: RATIO('14_payment_in_filled.png') },
  { src: IMG('09_payment_out_filled.png'), step: 'Payment Out', caption: 'Money paid out, multi-currency.', ratio: RATIO('09_payment_out_filled.png') },
]

export default function Erp() {
  return (
    <>
      <section className={heroStyles.hero}>
        <div className={heroStyles.glow} aria-hidden="true" />
        <div className="container">
          <Link to="/" className={heroStyles.back}>
            ← Back to work
          </Link>
          <div className={heroStyles.grid}>
            <div>
              <span className="eyebrow">Product Highlight</span>
              <h1 className={heroStyles.title}>
                One product. Multiple workflows. One consistent experience.
              </h1>
              <p className={heroStyles.subtitle}>
                A multi-module ERP platform where I worked across complex business workflows,
                designing and evolving experiences while helping maintain consistency across the
                product.
              </p>
              <p className={heroStyles.ownership}>
                I designed screens across nine ERP modules as part of a larger product team,
                working closely with business stakeholders on requirements. When I spotted gaps
                beyond my assigned screens, I raised them and proposed solutions, including a
                reusable input pattern that&rsquo;s now used beyond my own work.
              </p>
              <div className={heroStyles.metaRow}>
                <span className={heroStyles.metaPill}>
                  Focus: UX/UI · Complex Workflows · Design System · Responsive Design
                </span>
                <span className={heroStyles.metaPill}>Product: ERP Platform</span>
                <span className={heroStyles.metaPill}>Case Snapshot</span>
              </div>
            </div>
            <div className={styles.heroCollage}>
              <BrowserFrame
                src={IMG('14_payment_in_filled.png')}
                alt="Payment In screen, Finance module"
                ratio={RATIO('14_payment_in_filled.png')}
              />
              <BrowserFrame
                src={IMG('05_vendor_entry.png')}
                alt="Vendor entry screen, Purchase module"
                ratio={RATIO('05_vendor_entry.png')}
              />
              <BrowserFrame
                src={IMG('10_customer_definition.png')}
                alt="Customer definition screen, Sales module"
                ratio={RATIO('10_customer_definition.png')}
              />
              <BrowserFrame
                src={IMG('06_journal_entry_a.png')}
                alt="General Journal screen, Accounting module"
                ratio={RATIO('06_journal_entry_a.png')}
              />
            </div>
          </div>
        </div>
      </section>

      <CaseSection eyebrow="01: The Scale" heading="Designing across a complex ERP ecosystem." wide>
        <p style={{ maxWidth: 640 }}>
          Microtec ERP spans multiple business modules used daily by teams across the business,
          from finance to HR. My
          work sat across several of them, deepest in Finance &amp; Accounting, and contributing
          wherever else the team needed UI/UX support.
        </p>
        <div style={{ marginTop: 32 }}>
          <OwnershipGrid
            items={[
              {
                index: '01',
                verb: 'Accounting',
                text: 'Chart of Accounts and the General Journal, the accounting-side records that feed the Finance workflows.',
              },
              {
                index: '02',
                verb: 'Finance',
                text: 'Treasury, banking, payment terms/methods, and the Payment In/Out workflow, the deepest, most complex flows I worked on.',
              },
              { index: '03', verb: 'Sales', text: 'Customer records and the sales-side data that feeds downstream transactions.' },
              { index: '04', verb: 'Purchase', text: 'Vendor records and purchase-side workflows connected to Finance.' },
              { index: '05', verb: 'HR', text: 'Employee-related workflows and screens across the HR module.' },
              { index: '06', verb: 'Fixed Assets', text: 'Asset registration and tracking screens within the module.' },
              { index: '07', verb: 'General Settings', text: 'System configuration and preference screens across the platform.' },
              { index: '08', verb: 'Dashboards', text: 'At-a-glance overview screens surfacing key business data.' },
              { index: '09', verb: 'Reports & Print Outputs', text: 'Dense business data made easier to scan across modules.' },
            ]}
          />
        </div>
      </CaseSection>

      <CaseSection eyebrow="02: My Contribution" heading="Where I added value, at a glance." alt wide>
        <div>
          <OwnershipGrid
            items={[
              { index: '01', verb: 'Product Design', text: 'Designed and refined experiences across multiple ERP modules.' },
              { index: '02', verb: 'Complex Workflows', text: 'Worked on data-heavy, transactional, and operational business flows.' },
              { index: '03', verb: 'Responsive UX', text: 'Adapted complex ERP experiences for mobile and responsive layouts.' },
              { index: '04', verb: 'Design System', text: 'Contributed reusable components, templates, tokens, and consistent patterns.' },
              { index: '05', verb: 'Collaboration', text: 'Worked closely with business, product, and engineering teams.' },
              {
                index: '06',
                verb: 'Product Improvement',
                text: 'Helped shape and bring missing features into the product when gaps came up.',
              },
            ]}
          />
          <p style={{ marginTop: 24, color: 'var(--text-muted)' }}>
            I also contributed to the ERP product&rsquo;s public-facing website and Help System.
          </p>
        </div>
      </CaseSection>

      <CaseSection eyebrow="03: Beyond The Assigned Screen" heading="I didn&rsquo;t just design what was assigned.">
        <p>
          When I identified a product gap or a missing need, I raised it with the team, discussed
          possible solutions, contributed to defining what needed to be added, and helped shape
          the UI/UX direction, as part of a collaborative process, not a solo call.
        </p>
        <div style={{ marginTop: 28 }}>
          <FlowSteps label="Process" steps={['Identify', 'Discuss', 'Define', 'Design', 'Align', 'Deliver']} />
        </div>
      </CaseSection>

      <section className="section" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">04: Selected Modules</span>
          <h2 style={sectionHeading}>Two connected modules, up close.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 640, marginBottom: 8 }}>
            Only the modules with real, shippable screens are shown here in depth, not every
            screen I touched.
          </p>

          <div className={styles.story}>
            <div className={styles.storyHead}>
              <span className="eyebrow">Finance &amp; Accounting</span>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em', marginTop: 8 }}>
              Turning a connected payment workflow into something legible
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.75, maxWidth: 700, marginTop: 10 }}>
              Payment In and Payment Out look like two simple screens. Each one actually depends
              on data configured across Treasury, Bank, Payment Terms, Payment Method, and a
              Vendor or Customer record first, so I designed for the dependency chain as one
              connected system, not isolated screens.
            </p>
            <div style={{ marginTop: 28 }}>
              <ModuleDiagram />
            </div>
            <div className={styles.storyImages} style={{ marginTop: 28, maxWidth: 640 }}>
              <div>
                <BrowserFrame
                  src={IMG('14_payment_in_filled.png')}
                  alt="Payment In screen, filled with data"
                  ratio={RATIO('14_payment_in_filled.png')}
                />
              </div>
              <div>
                <BrowserFrame
                  src={IMG('09_payment_out_filled.png')}
                  alt="Payment Out screen with multi-currency support"
                  ratio={RATIO('09_payment_out_filled.png')}
                />
              </div>
            </div>
          </div>

          <div className={styles.story}>
            <div className={styles.storyHead}>
              <span className="eyebrow">Sales &amp; Purchase</span>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em', marginTop: 8 }}>
              One entry pattern, reused across both modules
            </h3>
            <div className={styles.storyGrid}>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.75 }}>
                Vendor and Customer records feed directly into Finance. Both use the same
                entry-form pattern, so the interaction is learned once and reused everywhere it
                shows up.
              </p>
              <div className={styles.storyImages}>
                <div>
                  <BrowserFrame
                    src={IMG('05_vendor_entry.png')}
                    alt="Vendor entry screen, Purchase module"
                    ratio={RATIO('05_vendor_entry.png')}
                  />
                </div>
                <div>
                  <BrowserFrame
                    src={IMG('10_customer_definition.png')}
                    alt="Customer definition screen, Sales module"
                    ratio={RATIO('10_customer_definition.png')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseSection eyebrow="05: My Design Cycle" heading="One cycle, applied across every module.">
        <p>
          Regardless of the module, the same cycle repeated, adapted each time to the specific
          business workflow, but always aimed at keeping the product experience consistent.
        </p>
        <div style={{ marginTop: 28 }}>
          <FlowSteps label="Design cycle" steps={['Understand', 'Define', 'Design', 'Review', 'Iterate']} />
        </div>
      </CaseSection>

      <CaseSection eyebrow="06: Design System At Scale" heading="Thinking beyond the individual screen." alt>
        <p>
          Working across this many modules meant screens needed to feel like one product, not
          several stitched together. When an interaction wasn&rsquo;t yet covered by the existing
          Design System, I could propose a reusable pattern instead of a one-off fix.
        </p>
        <div style={{ marginTop: 28 }}>
          <FlowSteps label="From token to module" steps={['Token', 'Component', 'Template', 'Module']} />
        </div>
        <div style={{ marginTop: 32 }}>
          <ComponentShowcase
            src={IMG('11_flyout_input_states.png')}
            alt="Flyout Input component states: default, error, success, and multi-tag"
          />
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 14, marginTop: 16 }}>
            The Flyout Input, a pattern I proposed to fill a gap in the system, now reused across
            screens.
          </p>
        </div>
      </CaseSection>

      <section className="section" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">07: Full Product Showcase</span>
          <h2 style={sectionHeading}>Scale, variety, and one consistent visual language.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 640, marginBottom: 8 }}>
            A wider look across the Finance, Purchase, Sales, and Accounting screens above.
          </p>
          <ScreenGallery screens={showcaseScreens} Frame={BrowserFrame} wide />
        </div>
      </section>

      <CaseSection eyebrow="08: Impact" heading="What this work contributed." alt>
        <p>
          In production, used daily by teams across finance, sales, purchasing, and HR.
          Designed across nine business modules, and proposed a new reusable input pattern, the
          Flyout Input, that&rsquo;s since been adopted in screens beyond the ones I built.
        </p>
        <ul style={{ marginTop: 18, paddingLeft: 20, lineHeight: 1.9, color: 'var(--text-muted)' }}>
          <li>Contributed to a more consistent ERP experience across modules</li>
          <li>Designed complex business workflows in a clearer, more usable way</li>
          <li>Helped evolve the product when new needs or gaps were identified</li>
          <li>Improved and adapted experiences across desktop and responsive/mobile contexts</li>
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
            I wasn&rsquo;t only designing individual screens. I was contributing to how a{' '}
            <span style={{ color: 'var(--navy-bright-text)' }}>complex product evolved</span>{' '}
            across modules.
          </p>
        </div>
      </section>

      <CaseFooterNav nextSlug="self-order" nextName="Self-Order Kiosk" nextLabel="Explore a full case study" />
    </>
  )
}
