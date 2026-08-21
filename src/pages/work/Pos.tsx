import CaseHeader from '../../components/case-study/CaseHeader'
import CaseSection from '../../components/case-study/CaseSection'
import BeforeAfter from '../../components/case-study/BeforeAfter'
import BrowserFrame from '../../components/case-study/BrowserFrame'
import AnnotatedFrame from '../../components/case-study/AnnotatedFrame'
import ScreenGallery from '../../components/case-study/ScreenGallery'
import OwnershipGrid from '../../components/case-study/OwnershipGrid'
import TagList from '../../components/case-study/TagList'
import CaseFooterNav from '../../components/case-study/CaseFooterNav'

const IMG = (name: string) => `/images/pos/${name}`

// Verified directly against every screenshot before writing captions. Several before_XX
// filenames do not match their actual content (they are shifted relative to what the name
// says) — see the alt text on each usage below for what each image actually shows.
const RATIO_AFTER = 3840 / 2160
const RATIO_BEFORE = 2560 / 1600

export default function Pos() {
  return (
    <>
      <CaseHeader
        eyebrow="Product Highlight"
        title="Ored POS"
        subtitle="From legacy screens to a clearer retail experience."
        role="Role: UI/UX Designer"
        meta={['Web/Tablet', 'POS Redesign', 'Mini Case Study']}
        heroImage={IMG('05_table_screen_after.png')}
        heroAlt="Ored POS redesigned table screen, color-coded by occupancy"
        heroRatio={RATIO_AFTER}
        Frame={BrowserFrame}
        wide
      />

      <CaseSection eyebrow="01 — The Problem" heading="An existing POS, evaluated firsthand">
        <p>
          Ored is a live, in-use POS — not a blank slate. Before redesigning anything, I tested
          the existing product firsthand to see where it broke down in real, everyday tasks.
        </p>
        <div style={{ marginTop: 28, maxWidth: 640 }}>
          <AnnotatedFrame
            src={IMG('before_02_table_screen.png')}
            alt="Old Ored POS order list — a dense, unstructured data table"
            ratio={RATIO_BEFORE}
            points={[
              { x: 50, y: 16, label: 'Search, filters, and pagination compressed into one dense toolbar.' },
              { x: 50, y: 30, label: 'Eight columns given equal visual weight — no hierarchy for what matters most.' },
              { x: 28, y: 37, label: 'Order status shown only as small colored text, easy to miss while scanning.' },
            ]}
          />
        </div>
        <TagList
          tone="neutral"
          items={[
            'Dense information hierarchy',
            'Legacy visual language',
            'Hard-to-scan layouts',
            'Inefficient interactions',
            'Inconsistent actions',
          ]}
        />
      </CaseSection>

      <CaseSection
        eyebrow="02 — The Redesign"
        heading="A familiar POS, redesigned for a faster retail experience."
        alt
        wide
      >
        <p style={{ maxWidth: 640 }}>
          Same product, same core flows — restructured so the interface gets out of the way of
          the work.
        </p>
        <div style={{ marginTop: 28 }}>
          <ScreenGallery
            wide
            Frame={BrowserFrame}
            screens={[
              {
                src: IMG('05_table_screen_after.png'),
                step: 'Table Screen',
                caption: 'Color-coded floor layout instead of a flat button list.',
                ratio: RATIO_AFTER,
              },
              {
                src: IMG('03_order_list_after.png'),
                step: 'Order Detail',
                caption: 'Items, status, and payment grouped into one clear breakdown.',
                ratio: RATIO_AFTER,
              },
            ]}
          />
        </div>
        <div style={{ marginTop: 36 }}>
          <OwnershipGrid
            items={[
              { index: '01', verb: 'Clearer hierarchy', text: 'Primary information is easy to find at a glance.' },
              { index: '02', verb: 'Better grouping', text: 'Related information is grouped instead of scattered across a flat list.' },
              { index: '03', verb: 'Efficient interactions', text: 'Fewer steps and less hunting to complete common tasks.' },
              { index: '04', verb: 'Visible key actions', text: 'Primary actions stand out instead of blending into the layout.' },
              { index: '05', verb: 'Updated visual language', text: 'A modern interface replacing the dated, boxed-in look.' },
              { index: '06', verb: 'Consistency', text: 'The same patterns repeat across screens instead of each one behaving differently.' },
            ]}
          />
        </div>
      </CaseSection>

      <section className="section">
        <div className="container">
          <span className="eyebrow">03 — Before → After</span>
          <h2
            style={{
              fontSize: 'clamp(24px,3.2vw,30px)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              marginTop: 10,
              marginBottom: 4,
            }}
          >
            The clearest evidence of the redesign
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 640, marginBottom: 8 }}>
            The old and new versions of the same screens, side by side.
          </p>

          <BeforeAfter
            index="01"
            title="Table Screen — Layout"
            text="Before: a flat list of table buttons with no read on occupancy. After: a color-coded floor layout — occupancy, section, and reservation status are all visible at a glance."
            before={{ src: IMG('before_01_employee_meals.png'), alt: 'Old table screen, a flat list of table buttons', ratio: RATIO_BEFORE }}
            after={{ src: IMG('05_table_screen_after.png'), alt: 'Redesigned table screen with color-coded occupancy grid', ratio: RATIO_AFTER }}
          />

          <BeforeAfter
            index="02"
            title="Order List — Hierarchy"
            text="Before: every order was a raw, undifferentiated data row. After: a scannable breakdown — items, status, and payment method grouped together instead of competing for attention."
            before={{ src: IMG('before_02_table_screen.png'), alt: 'Old order list, a raw multi-column data table', ratio: RATIO_BEFORE }}
            after={{ src: IMG('03_order_list_after.png'), alt: 'Redesigned order detail with a clear item breakdown', ratio: RATIO_AFTER }}
          />

          <BeforeAfter
            index="03"
            title="Item Details — Actions"
            text="Before: discounts lived in a disconnected coupon modal, separate from the item. After: coupon codes, loyalty points, and wallet value fold into one panel directly on the item — the primary action is obvious instead of buried in a popup."
            before={{ src: IMG('before_03_order_list.png'), alt: 'Old discount coupon modal', ratio: RATIO_BEFORE }}
            after={{ src: IMG('01_item_details_discount_after.png'), alt: 'Redesigned item details with an offers and loyalty panel', ratio: RATIO_AFTER }}
          />
        </div>
      </section>

      <CaseSection eyebrow="04 — The Improvement" heading="A clearer, more efficient retail workflow" alt>
        <p>
          This redesign hasn&rsquo;t shipped yet, so there&rsquo;s no usage data to report. What&rsquo;s
          here is the direct result of solving the problems identified during evaluation — not a
          measured outcome.
        </p>
        <TagList
          tone="accent"
          items={[
            'Clearer retail workflow',
            'Easier scanning of information',
            'More focused interface',
            'More consistent UI',
            'More modern POS experience',
            'Simplified interactions',
          ]}
        />
      </CaseSection>

      <CaseFooterNav nextSlug="self-order" nextName="Self-Order Kiosk" nextLabel="Explore a full case study" />
    </>
  )
}
