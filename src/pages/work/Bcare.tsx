import CasePage, { ShotGrid } from '../../components/case-study/CasePage'
import FlowSteps from '../../components/case-study/FlowSteps'

const IMG = (name: string) => `/images/bcare/${name}`

// Actual pixel dimensions of each screenshot (these are full-length capture exports,
// not uniform device crops) so PhoneFrame can size to fit instead of cropping.
const DIMENSIONS: Record<string, [number, number]> = {
  '01_scan_prescription.png': [402, 874],
  '02_scan_prescription_labs.png': [402, 874],
  '03_scan_prescription_confirmed.png': [402, 874],
  '04_home.png': [402, 1328],
  '05_lab_details.png': [402, 874],
  '06_branch_select.png': [402, 874],
  '07_booking_service.png': [402, 874],
  '08_tests_browse.png': [402, 874],
  '09_family_profile.png': [402, 874],
  '10_booking_date.png': [402, 874],
  '11_payment_method.png': [402, 874],
  '12_fasting_notice.png': [402, 940],
  '13_book_for_family.png': [402, 1038],
  '14_book_for_other.png': [402, 940],
  '15_book_for_self.png': [402, 874],
  '16_confirmation.png': [402, 876],
  '17_order_results.png': [402, 874],
  '18_order_timeline.png': [402, 874],
}
const RATIO = (name: string) => {
  const dims = DIMENSIONS[name]
  return dims ? dims[0] / dims[1] : 0.462
}
const shot = (name: string, alt: string) => ({ src: IMG(name), alt, ratio: RATIO(name) })

// NOTE: the source filenames in /public/images/bcare do not reliably match their actual
// on-screen content. Re-verified every file directly, one at a time (a prior batched
// verification pass had misordered results and got 09/10 backwards), on 2026-08-16:
//   09_family_profile.png    → actually: payment method selection
//   10_booking_date.png      → actually: family/individual profile (health fields)
//   11_payment_method.png    → actually: fasting notice
//   12_fasting_notice.png    → actually: book-for-family confirmation
//   13_book_for_family.png   → actually: book-for-other confirmation
//   14_book_for_other.png    → actually: book-for-self confirmation
//   15_book_for_self.png     → actually: booking-confirmed success screen
//   16_confirmation.png      → actually: live camera capture mid-scan
// The alt text below describes each file's real content — do not reorder based on filename.

export default function Bcare() {
  return (
    <CasePage
      title="Bcare: From a Paper Prescription to a Booked Lab Test"
      summary="I designed the complete Bcare experience end-to-end, solo, from prescription scanning through booking, family management, and order tracking."
      meta={[
        { label: 'Role', value: 'Product Designer' },
        { label: 'Type', value: 'Healthcare / Mobile App' },
        { label: 'Team', value: 'Solo project' },
        { label: 'Year', value: '2026' },
      ]}
      tags={['Competitor analysis', 'User personas', 'UI design', 'Usability testing', 'Reusable components']}
      hero={
        <ShotGrid
          priority
          shots={[
            shot('01_scan_prescription.png', 'Bcare prescription scanning screen'),
            shot('02_scan_prescription_labs.png', 'Labs matched to the prescription'),
            shot('18_order_timeline.png', 'Order status timeline'),
          ]}
        />
      }
      context={{
        text: 'Bcare is a healthcare booking app designed to make accessing medical services, particularly laboratory testing, more convenient. Instead of calling labs or visiting them in person, users can search for tests, find nearby labs, and complete bookings directly through the app.',
        points: [
          <>Ran <strong>competitor analysis</strong> and built <strong>user personas</strong>.</>,
          <>Designed <strong>prescription scanning</strong> and test detection, plus <strong>lab discovery and comparison</strong>.</>,
          <>Designed the <strong>booking flow</strong> for yourself or family members, including family member management.</>,
          <>Designed <strong>order tracking</strong> and results delivery.</>,
          <>Built a lightweight set of <strong>reusable UI components</strong> from scratch, to keep the app consistent without a formal design system.</>,
        ],
      }}
      problems={{
        points: [
          { lead: 'Assumed knowledge', text: 'Healthcare booking often assumes users already know which test, which lab, and which service they need.' },
          { lead: 'A confusing starting point', text: 'Many users start from a paper prescription written by a doctor.' },
          { lead: 'Medical terminology', text: 'The path to a booking shouldn’t require users to understand medical terms themselves.' },
          { lead: 'Offline effort', text: 'The traditional way means calling labs or visiting them in person.' },
        ],
      }}
      insights={[
        {
          title: 'Not every lab carries every test.',
          intro: 'Users need to know which lab can cover their prescription before they book.',
          decisions: [
            { lead: 'Coverage matching', text: 'After scanning, the app identifies the required tests and shows how many each nearby lab offers (e.g. “4 of 4” or “2 of 4”), so users can choose without checking each lab by hand.' },
            { lead: 'Full coverage first', text: 'Labs with full coverage are prioritized. When no single lab covers everything, the app recommends a fallback lab for the remaining tests.' },
          ],
        },
        {
          title: 'Booking isn’t always for yourself.',
          intro: 'A parent books a test for a child, or someone books for a relative who isn’t on their account yet.',
          decisions: [
            { lead: 'Three booking paths', text: 'Users book for themselves, for a registered family member, or for someone else entirely (entered manually or pulled from contacts).' },
            { lead: 'The right information per path', text: 'Each path adjusts what information is collected.' },
          ],
        },
        {
          title: 'Test preparation shouldn’t be discovered at the lab.',
          intro: 'Some tests require fasting or other preparation before the appointment.',
          decisions: [
            { lead: 'Up-front notice', text: 'The booking flow surfaces a clear notice early (e.g. a 12-hour fasting requirement) so users can plan accordingly.' },
          ],
        },
      ]}
      validation={{
        title: 'Research & Usability Testing',
        intro: 'I analyzed competitor apps, defined personas for the people who would use Bcare, and ran usability testing. This is how the design answers each problem it set out to solve.',
        points: [
          { lead: 'Starting from a prescription', text: 'Scanning identifies the required tests, so users don’t need to understand the terminology.' },
          { lead: 'Choosing a lab', text: 'Coverage indicators show how many of the required tests each lab offers.' },
          { lead: 'Booking for others', text: 'Three paths cover yourself, a family member, or someone else.' },
          { lead: 'Preparation', text: 'The fasting notice appears before the appointment, not at the lab.' },        ],
      }}
      design={{
        title: 'Delivering an end-to-end lab booking app for Bcare',
        intro: (
          <>
            <FlowSteps
              label="Full flow"
              steps={['Discover a lab', 'View lab profile', 'Select tests', 'Book', 'Track order status', 'Access results']}
            />
            <FlowSteps
              label="Parallel flow"
              steps={['Scan prescription', 'Auto-detected tests', 'Matched labs with coverage indicators', 'Book']}
            />
          </>
        ),
        modules: [
          {
            title: 'Prescription Scan & Lab Matching',
            text: 'Capture or upload a prescription, compare labs by the tests they cover, then confirm the tests with a date and time.',
            media: (
              <ShotGrid
                columns={4}
                shots={[
                  shot('01_scan_prescription.png', 'Start a scan or upload from the gallery'),
                  shot('16_confirmation.png', 'Live camera capture of the prescription'),
                  shot('02_scan_prescription_labs.png', 'Recommended labs with required tests per lab'),
                  shot('03_scan_prescription_confirmed.png', 'Tests confirmed with a date and time'),
                ]}
              />
            ),
          },
          {
            title: 'Lab Discovery',
            text: 'Browse labs and tests directly, open a lab’s full profile, and choose a branch.',
            media: (
              <ShotGrid
                columns={4}
                shots={[
                  shot('04_home.png', 'Home and discovery'),
                  shot('05_lab_details.png', 'Lab profile with branches and services'),
                  shot('06_branch_select.png', 'Branch selection'),
                  shot('08_tests_browse.png', 'Browse tests with an offer and running total'),
                ]}
              />
            ),
          },
          {
            title: 'Booking & Family',
            text: 'Choose the service and date, see fasting guidance, pick a payment method, and book for yourself, a family member, or someone else.',
            media: (
              <ShotGrid
                columns={4}
                shots={[
                  shot('07_booking_service.png', 'Selected service and appointment date'),
                  shot('11_payment_method.png', 'Fasting guidance'),
                  shot('10_booking_date.png', 'Add a family member'),
                  shot('09_family_profile.png', 'Payment method: cash or wallet points'),
                  shot('14_book_for_other.png', 'Booking for yourself'),
                  shot('12_fasting_notice.png', 'Booking for a family member'),
                  shot('13_book_for_family.png', 'Booking for someone not on the account'),
                  shot('15_book_for_self.png', 'Booking confirmed'),
                ]}
              />
            ),
          },
          {
            title: 'Order Tracking & Results',
            text: 'The journey continues past checkout: users track their order status and access results directly in the app, without following up with the lab.',
            media: (
              <ShotGrid
                shots={[
                  shot('18_order_timeline.png', 'Order status timeline'),
                  shot('17_order_results.png', 'Results ready in the app'),
                ]}
              />
            ),
          },
        ],
      }}
      impact={{
        stats: [
          { value: 18, label: 'screens designed end-to-end' },
          { value: 3, label: 'booking paths' },
          { value: 2, label: 'ways in: browse or scan a prescription' },
        ],
        points: [
          { lead: 'A complete booking flow', text: '18 screens designed from a single ambiguous input, a paper prescription, with no existing reference to build from.' },
          { lead: 'Lab coverage matching', text: 'Users can compare labs by how many of their required tests each one offers.' },
          { lead: 'Three booking paths', text: 'One flow serves bookings for yourself, a family member, or someone else.' },
          { lead: 'Consistent UI', text: 'A reusable component set built from scratch keeps the experience consistent without a formal design system.' },
        ],
      }}
      prev={{ to: '/work/erp', name: 'Microtec ERP' }}
      next={{ to: '/work/fooj', name: 'Fooj' }}
    />
  )
}
