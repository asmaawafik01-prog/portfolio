import CaseHeader from '../../components/case-study/CaseHeader'
import CaseSection from '../../components/case-study/CaseSection'
import DecisionBlock from '../../components/case-study/DecisionBlock'
import FlowSteps from '../../components/case-study/FlowSteps'
import ScreenGallery, { type GalleryScreen } from '../../components/case-study/ScreenGallery'
import CaseFooterNav from '../../components/case-study/CaseFooterNav'

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
// The map below assigns each file to its real content and real flow position — do not
// reorder based on filename alone.
const galleryScreens: GalleryScreen[] = [
  { src: IMG('01_scan_prescription.png'), step: '01', caption: 'Start a scan: capture a prescription or upload one from the gallery.', ratio: RATIO('01_scan_prescription.png') },
  { src: IMG('16_confirmation.png'), step: '02', caption: 'Live camera capture of the prescription.', ratio: RATIO('16_confirmation.png') },
  { src: IMG('02_scan_prescription_labs.png'), step: '03', caption: 'Recommended labs, with required tests listed per lab.', ratio: RATIO('02_scan_prescription_labs.png') },
  { src: IMG('03_scan_prescription_confirmed.png'), step: '04', caption: 'Tests confirmed, with a booking date and time selected.', ratio: RATIO('03_scan_prescription_confirmed.png') },
  { src: IMG('04_home.png'), step: '05', caption: 'Home / discovery screen.', ratio: RATIO('04_home.png') },
  { src: IMG('05_lab_details.png'), step: '06', caption: 'Full profile for a selected lab, including branches and services.', ratio: RATIO('05_lab_details.png') },
  { src: IMG('06_branch_select.png'), step: '07', caption: 'Choose a specific branch.', ratio: RATIO('06_branch_select.png') },
  { src: IMG('07_booking_service.png'), step: '08', caption: 'Booking screen: selected service and appointment date.', ratio: RATIO('07_booking_service.png') },
  { src: IMG('08_tests_browse.png'), step: '09', caption: 'Browse available tests directly, with an offer and running total.', ratio: RATIO('08_tests_browse.png') },
  { src: IMG('10_booking_date.png'), step: '10', caption: 'Add a family member to book on their behalf.', ratio: RATIO('10_booking_date.png') },
  { src: IMG('09_family_profile.png'), step: '11', caption: 'Select a payment method: cash or wallet points.', ratio: RATIO('09_family_profile.png') },
  { src: IMG('11_payment_method.png'), step: '12', caption: 'Fasting guidance surfaced up front, e.g. a 12-hour window.', ratio: RATIO('11_payment_method.png') },
  { src: IMG('12_fasting_notice.png'), step: '13', caption: 'Booking on behalf of a registered family member.', ratio: RATIO('12_fasting_notice.png') },
  { src: IMG('13_book_for_family.png'), step: '14', caption: 'Booking for someone not yet added to the account.', ratio: RATIO('13_book_for_family.png') },
  { src: IMG('14_book_for_other.png'), step: '15', caption: 'Booking directly for yourself.', ratio: RATIO('14_book_for_other.png') },
  { src: IMG('15_book_for_self.png'), step: '16', caption: 'Booking confirmed.', ratio: RATIO('15_book_for_self.png') },
  { src: IMG('18_order_timeline.png'), step: '17', caption: 'Order status tracked through a timeline: confirmed, sample collected, analysis, results ready.', ratio: RATIO('18_order_timeline.png') },
  { src: IMG('17_order_results.png'), step: '18', caption: 'Results accessed directly in the app once ready.', ratio: RATIO('17_order_results.png') },
]

export default function Bcare() {
  return (
    <>
      <CaseHeader
        eyebrow="Case Study 01"
        title="Bcare"
        subtitle="Healthcare booking app, 2026"
        role="Role: UI/UX Designer (designed the app end-to-end)"
        meta={['Mobile app', 'Designed in Figma']}
        heroImage={IMG('01_scan_prescription.png')}
        heroAlt="Bcare prescription scanning screen"
        heroRatio={RATIO('01_scan_prescription.png')}
      />

      <CaseSection eyebrow="Context" heading="What Bcare is">
        <p>
          Bcare is a healthcare booking app designed to make accessing medical services,
          particularly laboratory testing, more convenient. Instead of relying on traditional
          methods, calling labs or visiting them in person, users could search for tests, find
          nearby labs, and complete bookings directly through the app.
        </p>
      </CaseSection>

      <CaseSection eyebrow="The Challenge" heading="Starting from a paper prescription" alt>
        <p>
          Healthcare booking often assumes users already understand exactly what they need:
          which test, which lab, which service. In reality, many users start from something more
          confusing: a paper prescription written by a doctor. The core design challenge was
          turning that starting point into a clear, guided path to a booking, without requiring
          the user to understand medical terminology themselves.
        </p>
      </CaseSection>

      <CaseSection eyebrow="My Contribution" heading="Designed end-to-end">
        <p>I designed the complete Bcare experience end-to-end, including:</p>
        <ul style={{ marginTop: 18, paddingLeft: 20, lineHeight: 1.9, color: 'var(--text-muted)' }}>
          <li>Prescription scanning and test detection</li>
          <li>Lab discovery and comparison</li>
          <li>Booking flow (for self or for family members)</li>
          <li>Family member management</li>
          <li>Order tracking and results delivery</li>
        </ul>
        <p style={{ marginTop: 18 }}>
          I also built a lightweight set of reusable UI components as part of designing the app
          entirely from scratch, to keep the experience visually consistent, without a formal
          design system in place.
        </p>
      </CaseSection>

      <section className="section" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">Key Decisions</span>
          <div style={{ marginTop: 10 }}>
            <DecisionBlock
              index="01"
              title="Prescription scanning with smart lab matching."
              text="After a user scans their prescription, the app identifies the required tests and surfaces nearby labs. Since not every lab carries every test, I designed a coverage-matching system that shows users exactly how many of their required tests each lab offers (e.g., “4 of 4” or “2 of 4”). Labs with full coverage are prioritized; when no single lab covers everything, the app recommends a fallback lab for the remaining tests. This let users make a fast, informed choice without manually cross-checking each lab themselves."
              images={[
                { src: IMG('01_scan_prescription.png'), alt: 'Scan prescription', ratio: RATIO('01_scan_prescription.png') },
                { src: IMG('16_confirmation.png'), alt: 'Live prescription capture', ratio: RATIO('16_confirmation.png') },
                { src: IMG('02_scan_prescription_labs.png'), alt: 'Coverage-matched labs', ratio: RATIO('02_scan_prescription_labs.png') },
              ]}
            />
            <DecisionBlock
              index="02"
              title="Booking flexibility, with three distinct paths."
              text="At checkout, users could book for themselves, for a registered family member, or for someone else entirely (entered manually or pulled from contacts). Each path adjusts what information is collected. This was designed around real scenarios, like a parent booking a test for a child, or someone booking on behalf of a relative who isn't formally added to their account yet."
              images={[
                { src: IMG('14_book_for_other.png'), alt: 'Book for self', ratio: RATIO('14_book_for_other.png') },
                { src: IMG('12_fasting_notice.png'), alt: 'Book for family', ratio: RATIO('12_fasting_notice.png') },
                { src: IMG('13_book_for_family.png'), alt: 'Book for other', ratio: RATIO('13_book_for_family.png') },
              ]}
            />
            <DecisionBlock
              index="03"
              title="Proactive medical prep guidance."
              text="Some tests require fasting or other preparation before the appointment. Rather than let users discover this after arriving at the lab, the booking flow surfaces a clear notice up front (e.g., a 12-hour fasting requirement) so they can plan accordingly."
              images={[
                { src: IMG('11_payment_method.png'), alt: 'Fasting notice', ratio: RATIO('11_payment_method.png') },
              ]}
            />
            <DecisionBlock
              index="04"
              title="End-to-end journey, not just booking."
              text="The experience continued past checkout: users could track their order status and, once results were ready, access them directly in the app, removing the need to follow up with the lab directly."
              images={[
                { src: IMG('18_order_timeline.png'), alt: 'Order status timeline', ratio: RATIO('18_order_timeline.png') },
                { src: IMG('17_order_results.png'), alt: 'Test results ready to access', ratio: RATIO('17_order_results.png') },
              ]}
            />
          </div>
        </div>
      </section>

      <CaseSection eyebrow="Solution" heading="Two entry points, one guided path" alt>
        <FlowSteps
          label="Full flow"
          steps={[
            'Discover a lab',
            'View lab profile',
            'Select tests',
            'Book',
            'Track order status',
            'Access results',
          ]}
        />
        <FlowSteps
          label="Parallel flow"
          steps={[
            'Scan prescription',
            'Auto-detected tests',
            'Matched labs with coverage indicators',
            'Book',
          ]}
        />
      </CaseSection>

      <section className="section">
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
            All confirmed screens, 01 → 18
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 620, marginBottom: 8 }}>
            Prescription scan/capture, coverage-matched lab results, lab details, booking with
            date/service selection, fasting notice, payment method selection, the three-way
            &ldquo;book for&rdquo; flow, booking confirmation, and order status through to results.
          </p>
          <ScreenGallery screens={galleryScreens} />
        </div>
      </section>

      <CaseSection eyebrow="Impact" heading="What this design delivers." alt>
        <p>
          A complete, 18-screen booking flow designed from a single ambiguous input, a paper
          prescription, with zero existing reference to build from. This includes a lab
          coverage-matching system, three distinct booking paths, and a reusable UI component
          set built from scratch to keep the experience consistent without a formal design
          system in place.
        </p>
      </CaseSection>

      <CaseFooterNav nextSlug="fooj" nextName="Fooj" />
    </>
  )
}
