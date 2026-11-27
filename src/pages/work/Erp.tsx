import CasePage, { ShotGrid } from '../../components/case-study/CasePage'
import BrowserFrame from '../../components/case-study/BrowserFrame'
import FlowSteps from '../../components/case-study/FlowSteps'
import ModuleDiagram from '../../components/case-study/ModuleDiagram'
import ComponentShowcase from '../../components/case-study/ComponentShowcase'

const IMG = (name: string) => `/images/erp/${name}`

// Verified directly against every screenshot before writing alt text — filenames here
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
const shot = (name: string, alt: string) => ({ src: IMG(name), alt, ratio: RATIO(name) })

export default function Erp() {
  return (
    <CasePage
      title="Microtec ERP: One Product, Multiple Workflows, One Consistent Experience"
      summary="A multi-module ERP platform where I worked across complex business workflows, designing and evolving experiences while helping keep the product consistent."
      meta={[
        { label: 'Role', value: 'Product Designer' },
        { label: 'Type', value: 'ERP / Web & Responsive' },
        { label: 'Team', value: 'Microtec' },
        { label: 'Focus', value: 'Complex Workflows · Design System' },
      ]}
      tags={['Business requirements', 'Complex workflows', 'UX/UI design', 'Responsive design', 'Design System', 'Design QA']}
      hero={
        <ShotGrid
          priority
          columns={2}
          Frame={BrowserFrame}
          shots={[
            shot('14_payment_in_filled.png', 'Payment In screen, Finance module'),
            shot('05_vendor_entry.png', 'Vendor entry screen, Purchase module'),
            shot('10_customer_definition.png', 'Customer definition screen, Sales module'),
            shot('06_journal_entry_a.png', 'General Journal screen, Accounting module'),
          ]}
        />
      }
      context={{
        text: 'Microtec ERP spans multiple business modules used daily by teams across the business, from finance to HR. My work sat across several of them, deepest in Finance & Accounting.',
        points: [
          <>Designed screens across <strong>nine modules</strong>: Accounting, Finance, Sales, Purchase, HR, Fixed Assets, General Settings, Dashboards, and Reports &amp; Print Outputs.</>,
          <>Worked closely with <strong>business stakeholders</strong> on requirements, as part of a larger product team.</>,
          <>Adapted complex ERP experiences for <strong>mobile and responsive layouts</strong>.</>,
          <>Contributed reusable <strong>components, templates, and tokens</strong> to the Design System.</>,
        ],
      }}
      problems={{
        points: [
          { lead: 'Hidden dependency chains', text: 'Payment In and Out look simple, but depend on data set up across Treasury, Bank, Payment Terms, Payment Method, and a Vendor or Customer record.' },
          { lead: 'Many modules, one product', text: 'Screens needed to feel like one product, not several stitched together.' },
          { lead: 'Design System gaps', text: 'Some interactions weren’t covered by the existing system yet.' },
          { lead: 'Dense business data', text: 'Transactional, data-heavy workflows had to stay clear.' },
        ],
      }}
      insights={[
        {
          title: 'Payments are one connected system, not isolated screens.',
          intro: 'Each payment screen depends on records configured earlier in other places.',
          decisions: [{ lead: 'Design for the chain', text: 'I designed the whole dependency chain as one connected system.' }],
          extra: (
            <div style={{ marginTop: 28 }}>
              <ModuleDiagram />
            </div>
          ),
        },
        {
          title: 'One entry pattern can serve two modules.',
          intro: 'Vendor and Customer records both feed directly into Finance.',
          decisions: [{ lead: 'Shared entry form', text: 'Both use the same pattern, so the interaction is learned once and reused everywhere it shows up.' }],
        },
        {
          title: 'A one-off fix wouldn’t scale.',
          intro: 'When I found a gap or a missing need, I raised it with the team and we worked out the solution together.',
          decisions: [{ lead: 'Flyout Input', text: 'I proposed a reusable input pattern instead of a one-off fix. It is now reused across screens.' }],
          extra: (
            <div style={{ marginTop: 28 }}>
              <FlowSteps label="Process" steps={['Identify', 'Discuss', 'Define', 'Design', 'Align', 'Deliver']} />
            </div>
          ),
        },
      ]}
      validation={{
        title: 'Team Alignment & Real-World Adoption',
        intro: 'Validation here came through the team and the product itself.',
        points: [
          { lead: 'Requirements', text: 'I worked closely with business stakeholders on requirements.' },
          { lead: 'Team alignment', text: 'Gaps I found, like the one behind the Flyout Input, were raised with the team and solved together.' },
          { lead: 'Handoff & Design QA', text: 'I partnered with developers through design handoff and Design QA, catching UI inconsistencies and implementation issues after development and resolving them together.' },
          { lead: 'Adoption', text: 'The Flyout Input has since been adopted in screens beyond the ones I built.' },
          { lead: 'Launch', text: 'The ERP is in production, used daily by teams across finance, sales, purchasing, and HR.' },
        ],
      }}
      design={{
        title: 'Delivering a consistent ERP experience across modules',
        modules: [
          {
            title: 'Finance & Accounting',
            text: 'Payment In and Out, treasury and banking setup, payment terms and methods, and the General Journal.',
            media: (
              <ShotGrid
                columns={2}
                Frame={BrowserFrame}
                shots={[
                  shot('14_payment_in_filled.png', 'Payment In: money received'),
                  shot('09_payment_out_filled.png', 'Payment Out, multi-currency'),
                  shot('01_treasury_entry.png', 'Treasury: cash account setup'),
                  shot('12_bank_definition_filled.png', 'Bank: linked accounts and branch details'),
                  shot('03_payment_terms_empty.png', 'Payment terms'),
                  shot('13_payment_method_filled.png', 'Payment method linked to a bank account and currency'),
                  shot('06_journal_entry_a.png', 'General Journal entry view'),
                  shot('07_journal_entry_b.png', 'General Journal, second entry view'),
                ]}
              />
            ),
          },
          {
            title: 'Sales & Purchase',
            text: 'Vendor and Customer records, built on one shared entry-form pattern.',
            media: (
              <ShotGrid
                columns={2}
                Frame={BrowserFrame}
                shots={[
                  shot('05_vendor_entry.png', 'Vendor entry, Purchase module'),
                  shot('10_customer_definition.png', 'Customer definition, Sales module'),
                ]}
              />
            ),
          },
          {
            title: 'Design System: Flyout Input',
            text: 'A reusable component with default, error, success, and multi-tag states.',
            media: <ComponentShowcase src={IMG('11_flyout_input_states.png')} alt="Flyout Input component states" />,
          },
        ],
      }}
      impact={{
        stats: [
          { value: 9, label: 'business modules designed' },
          { value: 4, label: 'business areas using it daily' },
        ],
        points: [
          { lead: 'A reusable pattern', text: 'The Flyout Input gave the team a shared answer instead of a one-off fix.' },
          { lead: 'Consistency', text: 'A more consistent ERP experience across modules, on desktop and responsive/mobile.' },
        ],
        closing: 'I wasn’t only designing individual screens. I was contributing to how a complex product evolved across modules.',
      }}
      prev={{ to: '/work/pos', name: 'Ored POS' }}
      next={{ to: '/work/bcare', name: 'Bcare' }}
    />
  )
}
