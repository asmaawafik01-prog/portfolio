import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import ShotFrame from './case-study/ShotFrame'
import Lightbox, { type LightboxImage } from './Lightbox'
import { useReveal } from '../hooks/useReveal'
import styles from './Highlights.module.css'

interface BeforeAfterHighlight {
  kind: 'beforeAfter'
  tag: string
  title: string
  description: string
  before: { src: string; ratio: number }
  after: { src: string; ratio: number }
}

interface MiniCaseHighlight {
  kind: 'miniCase'
  tag: string
  /** Short reason this is shown as a brief snapshot instead of a full case study. */
  note?: string
  title: string
  description: string
  points: string[]
  before: { src: string; ratio: number }
  after: { src: string; ratio: number }
  href: string
}

interface GalleryHighlight {
  kind: 'gallery'
  tag?: string
  title: string
  description: string
  device: 'phone' | 'tablet' | 'browser'
  /** Full-page captures whose natural height would tower over their siblings: crop to the
   *  top of the page (nav + hero) at a fixed ratio instead of showing mostly blank canvas. */
  shotFit?: 'contain' | 'cover'
  shotRatio?: number
  items: { src: string; caption: string; ratio: number }[]
}

/** A gallery-style card that also links out to a short dedicated page — for work with real breadth (many screens/modules) but not a full case study. */
interface FeaturedCaseHighlight {
  kind: 'featuredCase'
  tag: string
  /** Short reason this is shown as a brief snapshot instead of a full case study. */
  note?: string
  title: string
  description: string
  points: string[]
  device: 'phone' | 'tablet' | 'browser'
  items: { src: string; caption: string; ratio: number }[]
  href: string
}

interface NoteHighlight {
  kind: 'note'
  tag: string
  title: string
  description: string
}

type Highlight = BeforeAfterHighlight | GalleryHighlight | MiniCaseHighlight | FeaturedCaseHighlight | NoteHighlight

const VAN_SALES = (name: string) => `/images/highlights/van-sales/${name}`
const MICROTEC_SITE = (name: string) => `/images/highlights/microtec-website/${name}`
const POS = (name: string) => `/images/pos/${name}`
const ERP = (name: string) => `/images/erp/${name}`

const ITEM_WIDTH: Record<GalleryHighlight['device'], string> = {
  phone: 'clamp(110px, 20vw, 170px)',
  tablet: 'clamp(160px, 24vw, 240px)',
  browser: 'clamp(220px, 30vw, 320px)',
}

/** Highlights split into two tiers: "case" items link out to a dedicated page and get the
 *  stronger, interactive treatment; everything else is visual evidence shown in brief. */
const CASE_KINDS = new Set<Highlight['kind']>(['featuredCase', 'miniCase'])

/** A plain screenshot tile — no device bezel. The box takes the image's own aspect ratio
 *  (or a shared ratio, for alignment / a deliberate crop), so nothing stretches or gets
 *  cropped by accident; `fit="cover"` is only used where a ratio narrower than the source
 *  is passed on purpose (full-page captures). */
function Shot({
  src,
  alt,
  ratio,
  fit = 'contain',
}: {
  src: string
  alt: string
  ratio: number
  fit?: 'contain' | 'cover'
}) {
  return (
    <div className={styles.shot} style={{ aspectRatio: ratio }}>
      <ShotFrame src={src} alt={alt} fit={fit} />
    </div>
  )
}

const highlights: Highlight[] = [
  {
    kind: 'featuredCase',
    tag: 'Microtec ERP',
    note: 'Live product, shown as a brief overview',
    title: 'One product. Multiple workflows. One consistent experience.',
    description:
      'A multi-module ERP platform. I designed and evolved experiences across Finance, Sales, Purchase, and more, translating business requirements into UI/UX solutions and contributing to the shared Design System along the way.',
    points: ['Multi-module ERP', 'Complex workflows', 'Design System contribution', 'Responsive UX'],
    device: 'browser',
    items: [
      { src: ERP('14_payment_in_filled.png'), caption: 'Payment In, Finance module', ratio: 2920 / 2088 },
      { src: ERP('05_vendor_entry.png'), caption: 'Vendor entry, Purchase module', ratio: 2880 / 2048 },
      { src: ERP('10_customer_definition.png'), caption: 'Customer definition, Sales module', ratio: 1440 / 1024 },
    ],
    href: '/work/erp',
  },
  {
    kind: 'miniCase',
    tag: 'Ored POS',
    note: 'Not yet shipped, shown as a brief overview',
    title: 'From legacy screens to a clearer POS experience.',
    description:
      'Ored is a live, in-use POS. I evaluated the existing product, identified where its hierarchy and interactions broke down in everyday tasks, and redesigned the core workflows to resolve them.',
    points: ['Clearer hierarchy', 'Better grouping', 'More efficient interactions', 'Updated visual language'],
    before: { src: POS('before_02_table_screen.png'), ratio: 2560 / 1600 },
    after: { src: POS('03_order_list_after.png'), ratio: 3840 / 2160 },
    href: '/work/pos',
  },
  {
    kind: 'beforeAfter',
    tag: 'Ogreen',
    title: 'Retail Management System',
    description:
      'Same POS system deployed for a retail client, redesigned the Sale screen for improved clarity and hierarchy.',
    before: { src: '/images/highlights/ogreen-before.png', ratio: 3830 / 1984 },
    after: { src: '/images/highlights/ogreen-after.png', ratio: 3840 / 2160 },
  },
  {
    kind: 'gallery',
    title: 'Van Sales',
    description:
      "Adapted an existing van sales app into the company's shared Design System, and designed a new solution for managing product-level tax and discounts, supporting a single tax or multiple taxes per item, and configurable customer or user discounts, each applied through a consistent bottom-sheet pattern.",
    device: 'phone',
    // One shared ratio, cropped to fill it — the "multiple taxes" shot is naturally taller
    // (its sheet has more rows) so without this it would either letterbox or stretch the row;
    // cropping keeps every shot exactly the same width and height.
    shotRatio: 393 / 807,
    shotFit: 'cover',
    items: [
      { src: VAN_SALES('01-base.png'), caption: 'Base state, no tax or discount applied', ratio: 393 / 807 },
      { src: VAN_SALES('03-multi-tax.png'), caption: 'Multiple taxes applied', ratio: 393 / 1061 },
      { src: VAN_SALES('05-tax-sheet-filtered.png'), caption: 'Tax selection, filtered to one group', ratio: 393 / 807 },
      { src: VAN_SALES('07-discount-sheet.png'), caption: 'Add Discount sheet', ratio: 393 / 807 },
    ],
  },
  {
    kind: 'gallery',
    tag: 'Microtec',
    title: 'Company Website Redesign',
    description:
      "Redesigned and evolved the company's existing website into a modern, product-focused digital experience. Built from scratch in Adobe XD, then migrated and refined in Figma. The new direction was built around the company's diverse product portfolio, with a distinct color identity for each product to help users clearly differentiate between solutions and understand their unique value. The design was successfully implemented and launched as a live website, and the new product-focused visual direction was highly appreciated by the company's owners.",
    device: 'browser',
    shotFit: 'cover',
    shotRatio: 1.15,
    items: [
      { src: MICROTEC_SITE('01-about.png'), caption: 'About Us page', ratio: 1440 / 3486 },
      { src: MICROTEC_SITE('02-home-erp.png'), caption: 'Home page, ERP solutions', ratio: 1441 / 4768 },
      { src: MICROTEC_SITE('03-orange.png'), caption: 'O-Orange product page, with its own color identity', ratio: 1440 / 3237 },
      { src: MICROTEC_SITE('04-red.png'), caption: 'O-Red product page, with its own color identity', ratio: 1440 / 3237 },
    ],
  },
]

export default function Highlights() {
  const { ref: headerRef, revealed: headerRevealed } = useReveal<HTMLDivElement>()
  const { ref: gridRef, revealed: gridRevealed } = useReveal<HTMLDivElement>()
  const cardMotion = (i: number) => ({
    className: `reveal${gridRevealed ? ' is-in' : ''}`,
    style: { '--reveal-delay': `${Math.min(i, 4) * 80}ms` } as CSSProperties,
  })
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null)
  const openLightbox = (images: LightboxImage[], index: number) => setLightbox({ images, index })

  const caseItems = highlights.filter((item) => CASE_KINDS.has(item.kind))
  const evidenceItems = highlights.filter((item) => !CASE_KINDS.has(item.kind))

  const renderCard = (item: Highlight, tierClassName: string) => {
    const motion = cardMotion(highlights.indexOf(item))

    if (item.kind === 'gallery' || item.kind === 'featuredCase') {
      const isGallery = item.kind === 'gallery'
      // A gallery can force every shot to one shared ratio (uniform box) via `shotRatio`;
      // `shotFit: 'cover'` additionally crops to fill it. Without `shotRatio`, each shot
      // keeps its own true ratio.
      const uniformRatio = isGallery ? item.shotRatio : undefined
      const shotFit: 'contain' | 'cover' = (isGallery && item.shotFit) || 'contain'
      const body = (
        <div className={styles.galleryBody}>
          <div className={styles.galleryHeader}>
            <div>
              {item.tag && <span className={styles.tag}>{item.tag}</span>}
              {item.kind === 'featuredCase' && item.note && <span className={styles.note}> · {item.note}</span>}
              <h3 className={styles.title} style={{ marginTop: item.tag ? 8 : 0 }}>
                {item.title}
              </h3>
            </div>
          </div>
          <p className={styles.galleryDesc}>{item.description}</p>
          {item.kind === 'featuredCase' && (
            <ul className={styles.miniPoints}>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
          <div
            className={styles.galleryGrid}
            style={{ '--item-width': ITEM_WIDTH[item.device] } as CSSProperties}
          >
            {item.items.map((shot, shotIndex) => (
              <div className={styles.galleryItem} key={shot.src}>
                <button
                  type="button"
                  className={styles.thumbButton}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    openLightbox(
                      item.items.map((s) => ({ src: s.src, alt: s.caption })),
                      shotIndex,
                    )
                  }}
                  aria-label={`View larger: ${shot.caption}`}
                >
                  <Shot
                    src={shot.src}
                    alt={shot.caption}
                    ratio={uniformRatio ?? shot.ratio}
                    fit={shotFit}
                  />
                </button>
                <span className={styles.galleryCaption}>{shot.caption}</span>
              </div>
            ))}
          </div>
        </div>
      )

      if (item.kind === 'featuredCase') {
        return (
          <Link
            to={item.href}
            className={`${styles.card} ${tierClassName} ${motion.className}`}
            style={motion.style}
            key={item.title}
          >
            {body}
            <span className={styles.miniCaseLink}>
              View case snapshot <span aria-hidden="true">→</span>
            </span>
          </Link>
        )
      }

      return (
        <div className={`${styles.card} ${tierClassName} ${motion.className}`} style={motion.style} key={item.title}>
          {body}
        </div>
      )
    }

    if (item.kind === 'miniCase' || item.kind === 'beforeAfter') {
      // Before/after shots rarely share a native ratio; using the "after" shot's ratio for
      // both frames keeps the pair the same size and vertically aligned instead of staggered.
      // The "before" shot then crops to fill that box (its own ratio is usually close enough
      // that nothing meaningful is lost) instead of letterboxing.
      const pairRatio = item.after.ratio
      const compareBody = (
        <>
          <div className={styles.compareBody}>
            <span className={styles.tag}>{item.tag}</span>
            {item.kind === 'miniCase' && item.note && <span className={styles.note}> · {item.note}</span>}
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.compareDesc}>{item.description}</p>
            {item.kind === 'miniCase' && (
              <ul className={styles.miniPoints}>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.compareRow}>
            <div className={styles.compareCol}>
              <span className={`${styles.compareTag} ${styles.compareTagBefore}`}>Before</span>
              <button
                type="button"
                className={styles.thumbButton}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  openLightbox(
                    [
                      { src: item.before.src, alt: `${item.title} (before)` },
                      { src: item.after.src, alt: `${item.title} (after)` },
                    ],
                    0,
                  )
                }}
                aria-label={`View larger: ${item.title} (before)`}
              >
                <Shot src={item.before.src} alt={`${item.title} (before)`} ratio={pairRatio} fit="cover" />
              </button>
            </div>
            <div className={styles.compareCol}>
              <span className={`${styles.compareTag} ${styles.compareTagAfter}`}>After</span>
              <button
                type="button"
                className={styles.thumbButton}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  openLightbox(
                    [
                      { src: item.before.src, alt: `${item.title} (before)` },
                      { src: item.after.src, alt: `${item.title} (after)` },
                    ],
                    1,
                  )
                }}
                aria-label={`View larger: ${item.title} (after)`}
              >
                <Shot src={item.after.src} alt={`${item.title} (after)`} ratio={pairRatio} />
              </button>
            </div>
          </div>
        </>
      )

      if (item.kind === 'miniCase') {
        return (
          <Link
            to={item.href}
            className={`${styles.card} ${tierClassName} ${motion.className}`}
            style={motion.style}
            key={item.title}
          >
            {compareBody}
            <span className={styles.miniCaseLink}>
              View case snapshot <span aria-hidden="true">→</span>
            </span>
          </Link>
        )
      }

      return (
        <div className={`${styles.card} ${tierClassName} ${motion.className}`} style={motion.style} key={item.title}>
          {compareBody}
        </div>
      )
    }

    if (item.kind === 'note') {
      return (
        <div className={`${styles.card} ${tierClassName} ${motion.className}`} style={motion.style} key={item.title}>
          <div className={styles.body}>
            <span className={styles.tag}>{item.tag}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal${headerRevealed ? ' is-in' : ''}`}>
          <span className="eyebrow">Highlights</span>
          <h2 className={styles.heading}>More selected work</h2>
          <p className={styles.sub}>Additional projects and contributions, presented in brief.</p>
        </div>
        <div ref={gridRef} className={styles.stack}>
          <div className={styles.caseGroup}>{caseItems.map((item) => renderCard(item, styles.caseCard))}</div>
          <div className={styles.evidenceDivider}>
            <span>More visual evidence</span>
          </div>
          <div className={styles.evidenceGroup}>
            {evidenceItems.map((item) => renderCard(item, styles.evidenceCard))}
          </div>
        </div>
      </div>
      <Lightbox
        images={lightbox?.images ?? []}
        index={lightbox?.index ?? null}
        onClose={() => setLightbox(null)}
        onNavigate={(i) => setLightbox((l) => (l ? { ...l, index: i } : l))}
      />
    </section>
  )
}
