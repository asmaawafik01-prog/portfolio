---
target: hero section copy/messaging
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 1
timestamp: 2026-08-20T11-40-13Z
slug: src-components-hero-tsx
---
Method: dual-agent (A: a3156edb52f3e149d · B: a0c9a56097e1a96d4)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Her live "open to work" status and any contact path exist only at the very bottom of the page — the hero shows none of it. |
| 2 | Match System / Real World | 3/4 | CTA labels are plain and familiar; the tagline leans on abstract portfolio-speak instead of a plain description of her actual work. |
| 3 | User Control and Freedom | 4/4 | Nothing destructive; external links correctly use `rel="noopener noreferrer"`. |
| 4 | Consistency and Standards | 4/4 | Hero fully reuses shared `.btn-primary`/`.btn-secondary`/`.eyebrow` tokens — confirmed clean by the design-system detector (0 findings on Hero.tsx). |
| 5 | Error Prevention | 3/4 | Links are well-formed; the CV link gives no size/format cue before opening a PDF in a new tab. |
| 6 | Recognition Rather Than Recall | 4/4 | CTA labels are literal; no hidden meaning to memorize. |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode marketing surface — no power-user paths to evaluate. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Generally restrained, but the paragraph carrying her strongest proof is visually the quietest element, and three co-equal buttons add clutter beyond what's needed. |
| 9 | Error Recovery | 3/4 | No error states to test; portrait has proper alt text, nothing else applicable. |
| 10 | Help and Documentation | n/a | Not a meaningful heuristic for a portfolio hero. |
| **Total** | | **26/32** | **Good (81%)** |

## Design Specificity Verdict

**LLM assessment:** Partially grounded, and where it's grounded, the evidence is buried. The tagline — "Designing clarity into complex products — from enterprise systems to mobile apps" — is genre-generic; "clarity" and "complex products" are among the most overused words in product-design portfolios and carry no proof on their own. The real specificity lives one line down, in the supporting paragraph ("multi-module ERP workflows," "end-to-end mobile app design") — but that line is smaller, muted-gray, and last, exactly where a skimming recruiter is least likely to still be reading. Worse, two of her four flagship domains established in PRODUCT.md — **healthcare booking and marketplace work** — never appear in the hero at all, so a reader who only sees the hero gets a narrower, blander version of her range than she actually has.

**Deterministic scan:** `node detect.mjs --json src/components/Hero.tsx` → **0 findings, exit 0.** Hero.tsx and Hero.module.css are clean against the documented design system — no off-ramp font sizes, no undocumented colors, no drift. (Note: Assessment B's sub-agent first attempted this from a project-relative path that doesn't exist in this checkout and incorrectly reported the detector as missing entirely; re-running it from the correct installed path produced a clean, valid result, which is what's reported here. A repo-wide scan does surface unrelated advisory findings in other components — e.g. off-ramp font sizes in `AboutPreview.module.css`, an undocumented color in `AnnotatedFrame.module.css` — but nothing in Hero.tsx itself.)

**Visual overlays:** Not available this run — the Browser pane wasn't compositing frames in Assessment B's sub-agent context, so no screenshots or injected overlay could be captured. In place of pixel evidence, B measured computed styles directly: all hero text clears WCAG AA contrast (eyebrow 6.49:1, name/tagline 18.60:1, supporting text 7.58:1, primary button text 4.90:1, secondary button text 18.60:1), there's no horizontal overflow at 1280px or 375px, the portrait loads correctly with descriptive alt text, and the two decorative elements (`.glow`, `.orbit`) that bleed outside the mobile viewport are both correctly clipped by `overflow: hidden` and marked `aria-hidden`, so they produce no visible or accessibility defect.

## Overall Impression

The hero looks like a professional's hero should — dark systems-room aesthetic, clean type, zero design-system drift — but its words are doing less work than its visuals. The single biggest opportunity: right now, a recruiter can read the entire hero and finish without knowing she's actively job-hunting or getting a one-click way to email her — that critical information exists, just 100% below the fold in `ContactCta.tsx`. For a page whose whole job is to convert a 10-second scan into outreach, that's the gap most worth closing before anything else.

## What's Working

1. **The visual system is polished and disciplined.** The dark "systems room" aesthetic, single signal-blue accent, and orbit/portrait framing are executed with real restraint, and the deterministic scan confirms the hero introduces zero drift from the documented design system — every button, label, and color routes through shared tokens.
2. **The supporting paragraph, where it's read, is genuinely credible.** "Multi-module ERP workflows," "end-to-end mobile app design" — concrete, specific phrases that actually differentiate her from a template portfolio. The content exists; it just needs to be promoted, not invented.
3. **Accessibility fundamentals are solid and measured, not assumed.** Every hero text/background pairing clears WCAG AA (6.49:1–18.60:1), external links are correctly attributed, and the portrait has real descriptive alt text — confirmed by direct contrast calculation, not a guess.

## Priority Issues

**[P0] The hero gives no availability signal and no direct contact path — both live only at the very bottom of the page**
*Why it matters:* "Open to new opportunities" and the only `mailto:` action exist solely in the page's final section, reached only after scrolling past Work and About. A recruiter who reads the hero and bounces — a completely normal skim pattern — never learns she's actively looking or gets a one-click way to email her.
*Fix:* Turn the existing dot+eyebrow (which already visually reads as a live-status pattern) into the actual status line, and add email as a hero-level action alongside "View Work →":
- Eyebrow → `● Open to new opportunities — Product & UX Designer`
- New CTA → `Email Me` (`mailto:asmaawafik01@gmail.com`), sitting with equal visual weight to "View Work →"
*Suggested command:* `/impeccable clarify`

**[P0] The tagline leads with generic language while her real evidence is demoted, and two of her four flagship domains are missing entirely**
*Why it matters:* "Designing clarity into complex products" reads as interchangeable with any other product-designer portfolio and offers no proof; healthcare booking and marketplace work — core to her documented range — never surface in the hero at all.
*Fix — rewrite the tagline:*
> "Product & UX design for real workflows — enterprise ERP, healthcare booking, retail POS, and marketplace platforms."

*Fix — tighten the supporting paragraph so the proof survives contact with a skim:*
> "I design for product teams solving real usability problems — simplifying multi-module ERP systems, streamlining healthcare booking flows, and shaping retail and marketplace experiences end-to-end, from web to mobile."
*Suggested command:* `/impeccable clarify`

**[P1] Three visually-equal CTAs dilute the primary action, and none of them is the highest-value action**
*Why it matters:* "View Work," "View CV," and "LinkedIn" carry near-identical visual weight (same size/weight/padding, differing only in fill), forcing an unnecessary three-way decision at the exact moment the hero should be driving one clear next step — and email, the action most tied to actually getting contacted, isn't present at all.
*Fix:* Keep one primary + one equally prominent secondary mapped to what matters most (proof, then contact): `View Work →` and `Email Me`. Demote `LinkedIn` and `View CV` to small inline text links beneath the buttons (e.g. `LinkedIn · Download CV`), signaling "alternate paths," not "equal decisions."
*Suggested command:* `/impeccable layout`

**[P2] Inconsistent self-labeling: "Product Designer" in the eyebrow vs. "UI/UX Designer" one line later**
*Why it matters:* Two adjacent copy blocks hand a fast-scanning recruiter two different job titles to file her under, reading as unresolved positioning rather than a confident, singular label.
*Fix:* Standardize on one term in both places — e.g. "Product & UX Designer" in the eyebrow, and open the paragraph with "I'm a product designer who…" instead of reintroducing a different title.
*Suggested command:* `/impeccable clarify`

**[P3] On mobile, the portrait is reordered above all copy, so the value proposition sits below a photo**
*Why it matters:* Mobile is the likely path for a recruiter opening a link from LinkedIn or a shared email, and `order: -1` at the ≤860px breakpoint (Hero.module.css) delays name/tagline/CTA behind an image for exactly that audience.
*Fix:* Keep the copy block first in visual order at the ≤860px breakpoint; let the portrait follow rather than lead.
*Suggested command:* `/impeccable adapt`

## Persona Red Flags

**Skimming recruiter / hiring manager (10–15 second scan):** Reads a generic tagline, has to work to find the real specifics, sees three same-weight buttons and hesitates on which to click, and never learns she's actively available or gets a one-click email option unless they scroll the entire page. This is the persona most likely to bounce before any of that resolves — and it's the persona this page exists for.

**First-time visitor evaluating craft (peer designer / referred contact):** Notices the polished visual system immediately, which is a strong first impression — but the tagline's genericness registers as slightly template-adjacent before the paragraph recovers credibility a few seconds later. A stronger opening line removes that flicker of doubt entirely.

**Mobile visitor arriving from a shared link:** Sees the portrait before any text due to the mobile reflow (`order: -1`), pushing her entire value proposition below the fold on an already-small screen — working against the fastest-decision persona rather than for it.

## Minor Observations

- `Hero.module.css` defines a `.role` class (lines 97–102) that `Hero.tsx` never references — dead CSS from a prior iteration; harmless but worth deleting.
- "Designing clarity **into** complex products" is a slightly unusual preposition; "clarity **for**" or "**within**" reads more naturally if any version of this line survives the rewrite.
- "View CV" opens a PDF in a new tab with no size/format cue — low priority, but a small `(PDF)` suffix costs nothing.
- The decorative orbit SVG is correctly `aria-hidden` and causes no accessibility issue — noted only because it represents real design effort spent on decoration while the copy doing the actual persuading is comparatively under-invested.
- The global `:focus-visible` outline rule is present in source and applies to every hero link/button; it could not be verified live via programmatic focus (a Chromium `:focus-visible` heuristic limitation, not evidence of a defect) — treat as present-but-unconfirmed-by-screenshot, not a finding.

## Questions to Consider

- If a recruiter reads only the tagline and nothing else, would they know she's job-hunting right now, or what makes her different from any other "Product Designer" tagline on a template site? Currently, no to both.
- Why does the page's single strongest action-driving line — "Open to new opportunities" — live at the *bottom* of the page instead of the top, given the explicit goal is to make recruiters act fast?
- Of the three hero buttons, which one is actually optimized for the metric that defines success — a recruiter emailing or messaging her? None of them is "email" today — is that a deliberate choice, or a gap worth closing now?
