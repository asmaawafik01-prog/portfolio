import CasePage, { ShotGrid } from '../../components/case-study/CasePage'
import FlowSteps from '../../components/case-study/FlowSteps'

const IMG = (name: string) => `/images/fooj/${name}`

// Verified directly against every screenshot before writing alt text. One asset in the
// source folder, 00_customer_def_dup.png, is a stray ERP screenshot (same content as the
// ERP Payment In screens) and is excluded — it is not part of the Fooj asset set.
const RATIO = 0.4613
const shot = (name: string, alt: string) => ({ src: IMG(name), alt, ratio: RATIO })

export default function Fooj() {
  return (
    <CasePage
      title="Fooj: One App for Horse Owners and Stable Owners"
      summary="I designed the UX/UI for both sides of Fooj. The project started as a team effort, and I later took over as the sole product designer, owning the direction independently."
      meta={[
        { label: 'Role', value: 'Product Designer' },
        { label: 'Type', value: 'Marketplace / Mobile App' },
        { label: 'Team', value: 'Team, then sole designer' },
        { label: 'Year', value: '2025' },
      ]}
      hero={
        <ShotGrid
          priority
          shots={[
            shot('07_map_discovery.png', 'Map discovery of nearby stables'),
            shot('01_horse_profile.png', 'Horse profile'),
            shot('13_owner_dashboard.png', 'Stable owner dashboard'),
          ]}
        />
      }
      context={{
        text: 'Fooj was designed to bridge a gap in the Saudi equestrian market between horse owners and stable owners: one connection point where owners find stables with the right facilities and care, and stables showcase their services.',
        points: [
          <>Designed the UX/UI for <strong>both sides</strong> of the app.</>,
          <>Started as part of a team, then took <strong>independent ownership</strong> of the product design.</>,
          <>For <strong>horse owners</strong>: horse profiles, stable discovery, room details, and booking.</>,
          <>For <strong>stable owners</strong>: room capacity, bookings, and <strong>transactions</strong>.</>,
        ],
      }}
      problems={{
        points: [
          { lead: 'Finding the right stable', text: 'Horse owners needed an easier way to find stables offering the right facilities and care.' },
          { lead: 'Reaching customers', text: 'Stable owners needed a way to showcase their services and reach potential customers.' },
          { lead: 'Two very different users', text: 'One side needs discovery and booking; the other needs inventory and business management.' },
          { lead: 'One coherent system', text: 'Both sides had to work inside a single product.' },
        ],
      }}
      insights={[
        {
          title: 'Matching horses to stables is more than a booking form.',
          intro: 'Horse profiles and room/stable profiles are two distinct entity types that need to be matched against each other.',
          decisions: [
            { lead: 'Two-sided matching', text: 'Designed horse profiles and stable/room profiles as separate entities, closer to a matching system than a simple booking form.' },
            { lead: 'Map discovery', text: 'Horse owners find nearby stables with search and filters.' },
          ],
        },
        {
          title: 'Stable owners need to see which rooms are filling up.',
          intro: 'Capacity and availability have to be readable at a glance.',
          decisions: [
            { lead: 'Progress-bar capacity', text: 'A progress bar shows each room’s capacity and availability.' },
            { lead: 'Per-stall occupancy', text: 'Room detail tracks occupancy for each individual stall.' },
          ],
        },
        {
          title: 'Running a stable means tracking money, not just bookings.',
          intro: 'Revenue and expenses are tied to specific horses, rooms, and cost centers.',
          decisions: [
            { lead: 'Transactions', text: 'Owners log revenue and expenses by category and cost center, turning a booking app into a lightweight operational tool.' },
            { lead: 'Inline categories', text: 'New categories can be created without leaving the flow.' },
          ],
        },
      ]}
      validation={{
        title: 'Usability Testing on the Live Product',
        intro: 'I usability-tested the shipped product myself, to identify real usability issues rather than relying on assumptions.',
        points: [
          { lead: 'Evaluation', text: 'Went through the main journeys of both user roles, horse owners and stable owners, across 14 screens.' },
          { lead: 'Launch', text: 'The product is published and live.' },
        ],
      }}
      design={{
        title: 'Delivering a two-sided marketplace app for Fooj',
        intro: (
          <>
            <FlowSteps
              label="Horse Owner journey"
              steps={['Create account', 'Add horse profile', 'Discover nearby stables', 'Stable profile', 'Room details', 'Select date & horse', 'Confirm booking', 'Manage horses & bookings']}
            />
            <FlowSteps
              label="Stable Owner journey"
              steps={['Stable & room setup (admin review)', 'Dashboard', 'Rooms management', 'Transactions']}
            />
          </>
        ),
        modules: [
          {
            title: 'Horse Profile & History',
            text: 'Breed, lineage, and photos, with health and training history filterable by type.',
            media: (
              <ShotGrid
                columns={4}
                shots={[
                  shot('01_horse_profile.png', 'Horse profile: breed, lineage, and photos'),
                  shot('02_horse_history_a.png', 'Health and training history, filterable by type'),
                  shot('03_horse_history_b.png', 'Health and training history, second view'),
                  shot('04_horse_history_c.png', 'Health and training history, third view'),
                ]}
              />
            ),
          },
          {
            title: 'Discovery & Booking',
            text: 'Find nearby stables on the map, compare room pricing and amenities, and follow an active boarding service.',
            media: (
              <ShotGrid
                shots={[
                  shot('07_map_discovery.png', 'Map discovery of nearby stables'),
                  shot('09_stable_detail_rooms.png', 'Stable profile with room pricing and amenities'),
                  shot('08_booking_service_active.png', 'Active booking'),
                ]}
              />
            ),
          },
          {
            title: 'Stable Management',
            text: 'Stable and room setup (reviewed by an admin before going live), a dashboard with revenue, expenses, and recent transactions, and room capacity down to each stall.',
            media: (
              <ShotGrid
                shots={[
                  shot('13_owner_dashboard.png', 'Stable owner dashboard'),
                  shot('05_stable_rooms_list.png', 'Rooms list with capacity progress bars'),
                  shot('06_room_detail.png', 'Room detail with stall occupancy'),
                ]}
              />
            ),
          },
          {
            title: 'Transactions & Income',
            text: 'Expense and income views, an income statement by category, and adding a transaction.',
            media: (
              <ShotGrid
                columns={4}
                shots={[
                  shot('10_transactions_expense.png', 'Transactions, expense state'),
                  shot('11_transactions_income.png', 'Transactions, income state'),
                  shot('12_income_statement.png', 'Income statement by category'),
                  shot('14_add_transaction.png', 'Add a transaction'),
                ]}
              />
            ),
          },
        ],
      }}
      impact={{
        points: [
          { lead: 'Published and live', text: 'Both sides of the marketplace shipped in one app.' },
          { lead: 'Two journeys, one system', text: 'Horse owners and stable owners each have a complete path inside a single product.' },
          { lead: 'Beyond booking', text: 'Transactions give stable owners a lightweight operational tool.' },
          { lead: 'Independent ownership', text: 'Took over the product design as the sole designer.' },
        ],
      }}
      prev={{ to: '/work/bcare', name: 'Bcare' }}
      next={{ to: '/work/self-order', name: 'Self-Order Kiosk' }}
    />
  )
}
