import CasePage, { ShotGrid } from '../../components/case-study/CasePage'
import KioskFrame from '../../components/case-study/KioskFrame'
import FlowSteps from '../../components/case-study/FlowSteps'
import TokenFlow from '../../components/case-study/TokenFlow'

const IMG = (name: string) => `/images/highlights/kiosk/${name}`
const RATIO = 1080 / 1920
const shot = (name: string, alt: string) => ({ src: IMG(name), alt, ratio: RATIO })

export default function SelfOrder() {
  return (
    <CasePage
      title="Self-Order Kiosk: Designing for Touch With No Playbook to Follow"
      summary="I designed the Self-Order Kiosk experience while researching touch-target sizing and helping build the design-system foundation behind it."
      meta={[
        { label: 'Role', value: 'Product Designer' },
        { label: 'Type', value: 'Self-service / Kiosk' },
        { label: 'Focus', value: 'UX/UI · Research · Design System' },
      ]}
      tags={['Touch-target research', 'UX/UI design', 'Portrait & landscape', 'Testing with users', 'Value tokens', 'Design System']}
      hero={
        <ShotGrid
          priority
          Frame={KioskFrame}
          shots={[
            shot('01-welcome.png', 'Kiosk welcome screen'),
            shot('02-menu.png', 'Kiosk menu, a touch-first grid of dishes'),
            shot('03-item-detail.png', 'Item customization panel'),
          ]}
        />
      }
      context={{
        text: 'I owned the Self-Order UX/UI design and the touch-target research behind it. When I spotted a gap in the design system, I raised it with the team and helped build the new value-token foundation that resulted.',
        points: [
          <><strong>Designed</strong> the Self-Order UX/UI and interaction flows, supporting both <strong>portrait and landscape</strong> orientations.</>,
          <><strong>Researched</strong> sizing and touch-target requirements for the kiosk experience.</>,
          <><strong>Built</strong> a new value-token foundation to support consistent UI decisions.</>,
          <><strong>Aligned</strong> with the team to validate the direction and move the system forward.</>,
        ],
      }}
      problems={{
        points: [
          { lead: 'No playbook', text: 'There were few existing references for kiosk sizing, touch targets, or scalable UI foundations.' },
          { lead: 'A different way of touching', text: 'A kiosk is used standing up, often quickly, without the precision of a phone held in hand.' },
          { lead: 'Screen-by-screen decisions', text: 'Sizing and spacing kept being decided per screen, with no shared reference to check against.' },
          { lead: 'A Design System gap', text: 'The problem went beyond the kiosk.' },
        ],
      }}
      insights={[
        {
          title: 'A kiosk is touched differently from a phone.',
          intro: 'That changes what “usable” means for spacing, sizing, and layout.',
          decisions: [
            { lead: 'Full-row tap targets', text: 'Selection options use the entire row, not just the radio circle: dine-in/takeaway, payment method.' },
            { lead: 'Evenly spaced grid', text: 'Menu items sit in a grid with consistent gaps, sized for a quick, accurate tap.' },
            { lead: 'One fixed primary action', text: 'A single, high-contrast action bar anchored at the bottom of every screen.' },
            { lead: 'Repeatable sizing', text: 'The same target sizes and spacing carried across welcome, menu, item detail, and payment.' },
          ],
        },
        {
          title: 'People shouldn’t lose their place mid-order.',
          intro: 'Customizing an item or reviewing the cart shouldn’t take them away from the menu.',
          decisions: [
            { lead: 'Side panel, not a new page', text: 'Item customization opens beside the menu, which stays visible behind it.' },
            { lead: 'One pattern, reused', text: 'Cart review uses the exact same panel, so it’s learned once, with less to figure out under time pressure.' },
          ],
        },
        {
          title: 'The same problem sat underneath the UI.',
          intro: 'Sizing and spacing were being decided screen by screen. It was a Design System gap, not just a kiosk problem.',
          decisions: [
            { lead: 'Raise it', text: 'I raised the gap with the team and we aligned on the direction.' },
            { lead: 'Value tokens', text: 'I worked on a new value-token set with them, and used it directly to build the Self-Order UI.' },
          ],
          extra: (
            <div style={{ marginTop: 28 }}>
              <FlowSteps label="How the gap surfaced" steps={['UI needs', 'System gap', 'New value tokens', 'Consistent components']} />
            </div>
          ),
        },
      ]}
      validation={{
        title: 'User & Team Validation',
        intro: 'We tried the design with users, and I worked with the team to validate the direction and move the system forward.',
        points: [
          { lead: 'Evaluation', text: 'We tried the button sizes and hand reach with users on a vertical screen.' },
          { lead: 'Result', text: 'The sizes were comfortable to use.' },
          { lead: 'Design System', text: 'The value tokens used to build the Self-Order UI were adopted into the shared Design System.' },
        ],
      }}
      design={{
        title: 'Delivering a touch-first ordering experience',
        intro: <FlowSteps label="Main flow" steps={['Welcome', 'Browse menu', 'Customize item', 'Review order', 'Pay']} />,
        modules: [
          {
            title: 'Welcome & Menu',
            text: 'Choose dine-in or takeaway, then browse the menu with a category rail, filter chips, and an evenly spaced item grid.',
            media: (
              <ShotGrid
                Frame={KioskFrame}
                shots={[shot('01-welcome.png', 'Welcome: dine-in or takeaway'), shot('02-menu.png', 'Menu with categories and filters')]}
              />
            ),
          },
          {
            title: 'Customize & Review',
            text: 'Ingredients, add-ons, quantity, and the full order are all editable in the same side panel, with the menu still in view.',
            media: (
              <ShotGrid
                Frame={KioskFrame}
                shots={[shot('03-item-detail.png', 'Item customization panel'), shot('04-order-review.png', 'Order review panel')]}
              />
            ),
          },
          {
            title: 'Payment',
            text: 'Four payment methods, each a full-width, unambiguous tap target.',
            media: <ShotGrid Frame={KioskFrame} columns={1} shots={[shot('05-payment.png', 'Payment method selection')]} />,
          },
          {
            title: 'From Token to UI',
            text: 'The value tokens weren’t just documentation. They are what the Self-Order UI is built on.',
            media: <TokenFlow screen={{ src: IMG('02-menu.png'), alt: 'Self-Order Kiosk menu screen', ratio: RATIO }} />,
          },
        ],
      }}
      impact={{
        stats: [
          { value: 5, label: 'screens in the ordering flow' },
          { value: 4, label: 'touch-first rules applied' },
        ],
        points: [
          { lead: 'Design System foundation', text: 'The value tokens I helped build were adopted into the shared Design System and are available to the whole team.' },
          { lead: 'A complete Self-Order UI', text: 'Designed end-to-end on the interaction and UI side.' },
          { lead: 'Research-informed sizing', text: 'Sizing and touch-target decisions grounded in how a kiosk is used.' },
          { lead: 'Scalability', text: 'A stronger base for future screens and components.' },
        ],
        closing: 'I wasn’t just designing the interface. I was helping define the foundation it needed to work well.',
      }}
      prev={{ to: '/work/fooj', name: 'Fooj' }}
      next={{ to: '/work/pos', name: 'Ored POS' }}
    />
  )
}
