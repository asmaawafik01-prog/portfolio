import CaseHeader from '../../components/case-study/CaseHeader'
import CaseSection from '../../components/case-study/CaseSection'
import DecisionBlock from '../../components/case-study/DecisionBlock'
import FlowSteps from '../../components/case-study/FlowSteps'
import ScreenGallery, { type GalleryScreen } from '../../components/case-study/ScreenGallery'
import CaseFooterNav from '../../components/case-study/CaseFooterNav'

const IMG = (name: string) => `/images/fooj/${name}`

// Verified directly against every screenshot before writing captions. One asset in the
// source folder, 00_customer_def_dup.png, is a stray ERP screenshot (same content as the
// ERP Payment In screens) and is excluded — it is not part of the Fooj asset set.
const RATIO = 0.4613

const galleryScreens: GalleryScreen[] = [
  { src: IMG('01_horse_profile.png'), step: '01', caption: 'Horse profile — breed, lineage, and photos.', ratio: RATIO },
  { src: IMG('02_horse_history_a.png'), step: '02', caption: 'Horse health & training history, filterable by type.', ratio: RATIO },
  { src: IMG('03_horse_history_b.png'), step: '03', caption: 'Health & training history — a second view.', ratio: RATIO },
  { src: IMG('04_horse_history_c.png'), step: '04', caption: 'Health & training history — a third view.', ratio: RATIO },
  { src: IMG('07_map_discovery.png'), step: '05', caption: 'Map discovery — nearby stables.', ratio: RATIO },
  { src: IMG('09_stable_detail_rooms.png'), step: '06', caption: 'Stable profile — room pricing and amenities.', ratio: RATIO },
  { src: IMG('08_booking_service_active.png'), step: '07', caption: 'Active booking — an ongoing boarding service.', ratio: RATIO },
  { src: IMG('05_stable_rooms_list.png'), step: '08', caption: 'Rooms list — capacity shown with a progress-bar pattern.', ratio: RATIO },
  { src: IMG('06_room_detail.png'), step: '09', caption: 'Room detail — occupancy tracked per individual stall.', ratio: RATIO },
  { src: IMG('13_owner_dashboard.png'), step: '10', caption: 'Stable owner dashboard — revenue, expenses, and recent transactions.', ratio: RATIO },
  { src: IMG('10_transactions_expense.png'), step: '11', caption: 'Transactions — expense state.', ratio: RATIO },
  { src: IMG('11_transactions_income.png'), step: '12', caption: 'Transactions — income state.', ratio: RATIO },
  { src: IMG('12_income_statement.png'), step: '13', caption: 'Income statement — net income by category.', ratio: RATIO },
  { src: IMG('14_add_transaction.png'), step: '14', caption: 'Add transaction — logging revenue or expense by category.', ratio: RATIO },
]

export default function Fooj() {
  return (
    <>
      <CaseHeader
        eyebrow="Case Study 02"
        title="Fooj"
        subtitle="Two-sided marketplace app — 2025"
        role="Role: UI/UX Designer — started as part of a team, later managed the product design independently"
        meta={['Mobile app', 'Designed in Figma']}
        heroImage={IMG('07_map_discovery.png')}
        heroAlt="Fooj map discovery screen showing nearby stables"
        heroRatio={RATIO}
      />

      <CaseSection eyebrow="Context" heading="Connecting two sides of the equestrian market">
        <p>
          Fooj was designed to bridge a gap in the Saudi equestrian market between horse
          owners and stable owners. Horse owners needed an easier way to find stables offering
          the right facilities and care; stable owners needed a way to showcase their services
          and reach potential customers. Fooj was built as the connection point between both
          sides.
        </p>
      </CaseSection>

      <CaseSection eyebrow="The Challenge" heading="A genuinely two-sided product" alt>
        <p>
          This was a genuinely two-sided product: horse owners and stable owners have very
          different needs, and the app had to serve both — discovery and booking for one side,
          inventory and business management for the other — within a single coherent system.
        </p>
      </CaseSection>

      <CaseSection eyebrow="My Contribution" heading="From team effort to independent ownership">
        <p>
          I worked on the UX/UI for both sides of the app. The project started as a team
          effort and I later took on independent ownership of the product design.
        </p>
      </CaseSection>

      <section className="section" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-alt)' }}>
        <div className="container">
          <span className="eyebrow">Key Decisions</span>
          <div style={{ marginTop: 10 }}>
            <DecisionBlock
              index="01"
              title="Horse Owner journey."
              text="Create account → Add horse profile → Discover nearby stables (with search & filters) → Stable profile → Room details → Select date & horse → Confirm booking → Manage horses & bookings. Horse profiles and room/stable profiles were designed as two distinct entity types that needed to be matched against each other — closer to a two-sided matching system than a simple booking form."
              images={[
                { src: IMG('01_horse_profile.png'), alt: 'Horse profile', ratio: RATIO },
                { src: IMG('07_map_discovery.png'), alt: 'Map discovery', ratio: RATIO },
                { src: IMG('09_stable_detail_rooms.png'), alt: 'Stable profile with room pricing', ratio: RATIO },
              ]}
            />
            <DecisionBlock
              index="02"
              title="Stable Owner journey."
              text="Stable and room setup (with an admin review/verification step before going live) → Dashboard with booking requests and room capacity → Rooms management with per-space occupancy tracking → Transactions section for recording revenue/expenses by category and cost center, with the ability to create new categories inline without leaving the flow."
              images={[
                { src: IMG('13_owner_dashboard.png'), alt: 'Stable owner dashboard', ratio: RATIO },
                { src: IMG('06_room_detail.png'), alt: 'Room detail with stall occupancy', ratio: RATIO },
                { src: IMG('14_add_transaction.png'), alt: 'Add transaction flow', ratio: RATIO },
              ]}
            />
            <DecisionBlock
              index="03"
              title="Capacity visualization."
              text="I used a progress-bar pattern to communicate room capacity and availability at a glance, helping stable owners quickly see which rooms were filling up."
              images={[{ src: IMG('05_stable_rooms_list.png'), alt: 'Rooms list with capacity progress bars', ratio: RATIO }]}
            />
            <DecisionBlock
              index="04"
              title="Financial management, connected to operations."
              text="The Transactions feature let stable owners log revenue and expenses tied to specific horses, rooms, or cost centers — turning a booking app into a lightweight operational tool for stable owners."
              images={[
                { src: IMG('10_transactions_expense.png'), alt: 'Transactions expense state', ratio: RATIO },
                { src: IMG('11_transactions_income.png'), alt: 'Transactions income state', ratio: RATIO },
                { src: IMG('12_income_statement.png'), alt: 'Income statement', ratio: RATIO },
              ]}
            />
          </div>
        </div>
      </section>

      <CaseSection eyebrow="Solution" heading="Two journeys, one coherent system">
        <FlowSteps
          label="Horse Owner journey"
          steps={[
            'Create account',
            'Add horse profile',
            'Discover nearby stables',
            'Stable profile',
            'Room details',
            'Select date & horse',
            'Confirm booking',
            'Manage horses & bookings',
          ]}
        />
        <FlowSteps
          label="Stable Owner journey"
          steps={[
            'Stable & room setup (admin review)',
            'Dashboard',
            'Rooms management',
            'Transactions',
          ]}
        />
      </CaseSection>

      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <span className="eyebrow">Full Screen Flow</span>
          <h2
            style={{
              fontSize: 'clamp(24px,3.2vw,30px)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              marginTop: 10,
              marginBottom: 8,
            }}
          >
            Horse owner and stable owner screens, 01 → 14
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 640, marginBottom: 8 }}>
            Horse profile and health history, stable discovery and room pricing, an active
            booking, then the stable-owner side: room capacity, the dashboard, and the
            transactions flow.
          </p>
          <ScreenGallery screens={galleryScreens} />
        </div>
      </section>

      <CaseSection eyebrow="Outcome" heading="Published, released, and tested by hand">
        <p>
          Fooj was published and released. I conducted usability testing on the live product
          from a real user perspective, going through the main journeys to identify usability
          issues. No specific business metrics or user numbers are available — the outcome
          here is best represented through the design-and-validate process itself rather than
          quantified impact.
        </p>
      </CaseSection>

      <CaseFooterNav nextSlug="self-order" nextName="Self-Order Kiosk" />
    </>
  )
}
