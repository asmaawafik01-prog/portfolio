import CasePage, { ProblemPairs, ShotGrid } from '../../components/case-study/CasePage'
import BeforeAfter from '../../components/case-study/BeforeAfter'
import BrowserFrame from '../../components/case-study/BrowserFrame'
import AnnotatedFrame from '../../components/case-study/AnnotatedFrame'

const IMG = (name: string) => `/images/pos/${name}`

// Verified directly against every screenshot before writing alt text. Several before_XX
// filenames do not match their actual content (they are shifted relative to what the name
// says) — see the alt text on each usage below for what each image actually shows.
const RATIO_AFTER = 3840 / 2160
const RATIO_BEFORE = 2560 / 1600

export default function Pos() {
  return (
    <CasePage
      title="Ored POS: From Legacy Screens to a Clearer Retail Experience"
      summary="I own this redesign end-to-end: evaluating the existing product firsthand, identifying what wasn’t working, and redesigning the core POS workflows myself."
      meta={[
        { label: 'Role', value: 'Product Designer' },
        { label: 'Type', value: 'POS / Web & Tablet' },
        { label: 'Focus', value: 'POS Redesign' },
      ]}
      tags={['Research with employees', 'Heuristic review', 'Workflow redesign', 'Arabic RTL', 'Visual language']}
      hero={
        <ShotGrid
          priority
          columns={1}
          Frame={BrowserFrame}
          shots={[{ src: IMG('05_table_screen_after.png'), alt: 'Redesigned table screen, color-coded by occupancy', ratio: RATIO_AFTER }]}
        />
      }
      context={{
        text: 'Ored is a live, in-use POS, not a blank slate. Same product, same core flows, restructured so the interface gets out of the way of the work.',
        points: [
          <><strong>Evaluated the existing product</strong> firsthand, in real, everyday tasks.</>,
          <><strong>Sat with employees</strong> using the current system, looking at cashier speed and errors.</>,
          <>Redesigned the core workflows: <strong>table screen, order detail, and item details</strong>.</>,
          <>Updated the <strong>visual language</strong> and made patterns consistent across screens.</>,
          <>Owned the redesign <strong>end-to-end</strong>.</>,
        ],
      }}
      problems={{
        points: [
          { lead: 'Too complex to use', text: 'Employees complained that the system was complicated.' },
          { lead: 'Long training', text: 'Training new employees on it took a long time.' },
          { lead: 'Load on the cashier', text: 'The complexity added to an already heavy workload, with speed and errors at stake.' },
          { lead: 'Crowded toolbar', text: 'Search, filters, and pagination were compressed into one dense toolbar.' },
          { lead: 'Legacy interactions', text: 'Hard-to-scan layouts, inefficient interactions, and inconsistent actions.' },
        ],
        extra: (
          <>
          <ProblemPairs
            pairs={[
              { problem: 'Eight columns were given equal visual weight, with nothing showing what matters most.', solution: 'Items, order details, payment and status sit in separate, grouped areas.' },
              { problem: 'Order status appeared only as small colored text.', solution: 'Status has its own labelled block with a filled badge.' },
              { problem: 'The table screen gave no read on occupancy.', solution: 'A color-coded floor layout shows occupancy, section and reservations at a glance.' },
              { problem: 'Applying a discount meant a disconnected coupon modal.', solution: 'Coupons, loyalty points and wallet value fold into one panel on the item.' },
            ]}
          />
          <div style={{ marginTop: 28, maxWidth: 720 }}>
            <AnnotatedFrame
              src={IMG('before_02_table_screen.png')}
              alt="Old Ored POS order list, a dense, unstructured data table"
              ratio={RATIO_BEFORE}
              points={[
                { x: 50, y: 16, label: 'Search, filters, and pagination compressed into one dense toolbar.' },
                { x: 50, y: 30, label: 'Eight columns given equal visual weight, no hierarchy for what matters most.' },
                { x: 28, y: 37, label: 'Order status shown only as small colored text, easy to miss while scanning.' },
              ]}
            />
          </div>
          </>
        ),
      }}
      insights={[
        {
          title: 'Table status wasn’t visible.',
          intro: 'The old table screen was a flat list of table buttons with no read on occupancy.',
          decisions: [{ lead: 'Color-coded floor layout', text: 'Occupancy, section, and reservation status are all visible at a glance.' }],
        },
        {
          title: 'Every order looked like a raw data row.',
          intro: 'Information competed for attention instead of being organized.',
          decisions: [{ lead: 'Grouped breakdown', text: 'Items, status, and payment method are grouped into one scannable view.' }],
        },
        {
          title: 'Discounts lived away from the item.',
          intro: 'Applying a discount meant a disconnected coupon modal.',
          decisions: [
            { lead: 'One panel on the item', text: 'Coupon codes, loyalty points, and wallet value fold into a single panel directly on the item.' },
            { lead: 'Obvious primary action', text: 'The main action stands out instead of being buried in a popup.' },
          ],
        },
      ]}
      validation={{
        title: 'Grounded in the Live Product, Adopted by the Team',
        intro: 'Validation comes from research on the current product and from the team.',
        points: [
          { lead: 'Evaluation', text: 'I sat with employees and evaluated the existing product in real, everyday tasks, looking at cashier speed, errors, and training time.' },
          { lead: 'Traceability', text: 'Every change traces back to a problem found in that evaluation.' },
          { lead: 'Heuristic review', text: 'A later review of the old screens against usability heuristics flagged status shown as small colored text, a coupon modal that hides the order behind two look-alike buttons, and very small quantity controls.' },
          { lead: 'Result', text: 'The redesign is the team’s active direction for the POS.' },
        ],
      }}
      design={{
        title: 'Delivering a faster, clearer POS experience',
        modules: [
          {
            title: 'Table Screen',
            text: 'A flat list of table buttons became a color-coded floor layout.',
            media: (
              <BeforeAfter
                before={{ src: IMG('before_01_employee_meals.png'), alt: 'Old table screen, a flat list of table buttons', ratio: RATIO_BEFORE }}
                after={{ src: IMG('05_table_screen_after.png'), alt: 'Redesigned table screen with color-coded occupancy grid', ratio: RATIO_AFTER }}
              />
            ),
          },
          {
            title: 'Order Detail',
            text: 'Raw, undifferentiated data rows became a scannable breakdown.',
            media: (
              <BeforeAfter
                before={{ src: IMG('before_02_table_screen.png'), alt: 'Old order list, a raw multi-column data table', ratio: RATIO_BEFORE }}
                after={{ src: IMG('03_order_list_after.png'), alt: 'Redesigned order detail with a clear item breakdown', ratio: RATIO_AFTER }}
              />
            ),
          },
          {
            title: 'Item Details & Offers',
            text: 'The coupon modal became an offers and loyalty panel on the item itself.',
            media: (
              <BeforeAfter
                before={{ src: IMG('before_03_order_list.png'), alt: 'Old discount coupon modal', ratio: RATIO_BEFORE }}
                after={{ src: IMG('01_item_details_discount_after.png'), alt: 'Redesigned item details with an offers and loyalty panel', ratio: RATIO_AFTER }}
              />
            ),
          },
        ],
      }}
      impact={{
        stats: [
          { value: 3, label: 'core workflows redesigned' },
          { value: 4, label: 'problems paired with a solution' },
        ],
        points: [
          { lead: 'Clearer hierarchy', text: 'An eight-column, no-hierarchy table became a color-coded, grouped breakdown, so primary information is easy to find.' },
          { lead: 'Efficient interactions', text: 'Fewer steps and less hunting, with key actions standing out.' },
          { lead: 'Consistency', text: 'The same patterns repeat across screens, in a modern visual language.' },        ],
      }}
      prev={{ to: '/work/self-order', name: 'Self-Order Kiosk' }}
      next={{ to: '/work/erp', name: 'Microtec ERP' }}
    />
  )
}
