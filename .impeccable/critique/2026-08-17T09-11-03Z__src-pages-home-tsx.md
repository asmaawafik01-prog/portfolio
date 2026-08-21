---
target: homepage (src/pages/Home.tsx)
total_score: 20
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-17T09-11-03Z
slug: src-pages-home-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | No active-page state in nav (logo and "Home" both point to `/` with no `aria-current`); keyboard focus ring is technically present but computes to 1.02:1 contrast against the `#0d0d0f` background — effectively invisible on this dark theme |
| 2 | Match System / Real World | 3/4 | Honest scope-of-contribution language per card is a genuine strength; "Cross-Module / Systems Thinking" and "Design Validation (QA)" go unexplained for an outside reader |
| 3 | User Control and Freedom | 3/4 | Standard nav works, external links use rel="noopener noreferrer"; no "back to top" on a ~7,734px page |
| 4 | Consistency and Standards | 3/4 | Token discipline (one accent, hairlines, radii) mostly holds; Highlights cards structurally diverge from Project cards despite reading as the same content type; detector also found the section's own eyebrow+heading pattern repeated identically 4x |
| 5 | Error Prevention | 4/4 | No forms, no destructive actions — minimal error surface by design |
| 6 | Recognition Rather Than Recall | 3/4 | Project-card pattern repeats predictably; Highlights breaks that pattern mid-scroll |
| 7 | Flexibility and Efficiency | n/a | Single-pass Persuade-mode surface for a first-time visitor; no meaningful power-user path applies |
| 8 | Aesthetic and Minimalist Design | 2/4 | Highlights occupies 3,668px of 7,734px total (~47%) vs. 1,876px for the actual Case Studies section; detector's line-length finding (105 chars/line in gallery captions) independently supports this |
| 9 | Error Recovery | n/a | No error states exist on this static page |
| 10 | Help and Documentation | n/a | Static Persuade-mode portfolio; not applicable |
| **Total** | | **20/28** | **Good (71%)** |

## Design Specificity Verdict

**LLM assessment:** Mixed, leaning "authored but templated." The content is specific and hard to fake — honest per-project role framing, real company names used unhedged, and a genuinely distinctive device-frame system. But the compositional shell (hero -> 2-col case grid -> skill-tag grid -> about-teaser -> glow-CTA -> footer) is a stock "professional portfolio" pattern that would survive a name swap with zero structural change.

**Deterministic scan:** The detector independently flagged the same Eyebrow -> Heading structure repeated verbatim 4 times (kicker-above-heading) across Selected Work, Highlights, Strengths, and About — hard evidence behind the "templated" read.

**Visual overlays:** The live overlay ran successfully during the automated pass (script injection confirmed working, live-server started on a background port, 15 anti-patterns logged to console) but has since been stopped per protocol.

## Overall Impression

Strong bones, unbalanced proportions, and an accessibility gap the design review alone wouldn't have caught precisely. The hero and case-study cards open confidently and honestly. Then the page loses its nerve: Highlights — explicitly framed as "lighter treatment" — eats nearly half the page's height, sitting directly between the strongest content (case studies) and the closing ask (Contact). Layered on top: the one signal color that's supposed to mean "notice this" fails contrast exactly where it's carrying the most important text (the honesty-signaling "Role:" line), and keyboard focus is invisible sitewide despite never being explicitly disabled.

## What's Working

- Honest role-scope framing is load-bearing UI, not just prose: end-to-end / part of product team / team -> solo ownership on each card operationalizes the "honest reasoning over polished-looking claims" principle exactly where a hiring manager will see it first.
- The device-frame system is rigorously and consistently applied across Projects and Highlights; the detector's overused-font flag (Inter at 100% of text) confirms the one-typeface discipline is real, not accidental.
- Contact CTA closes cleanly — one heading, two well-differentiated actions, reachable from anywhere via the sticky nav chip.

## Priority Issues

**[P1] Highlights consumes ~47% of total page height despite being framed as secondary content**
- Why it matters: success is defined as "the hiring manager reaches out." Scroll budget is spent on the least differentiated, least evidentiary content right before Strengths/About/Contact.
- Fix: cap each Highlights entry to 1-2 representative shots with a "view more," or cut the section's rendered height roughly in half.
- Suggested command: /impeccable distill (or /impeccable layout if purely proportional)

**[P1] The "Role:" line and every eyebrow label fail WCAG AA contrast**
- Why it matters: #4a6fa5 on #1b2a4a computes to 2.8:1 (browser-measured), LLM review independently estimated 3.3-3.8:1 on the same pairing — both fail the 4.5:1 threshold. This is the line carrying the "honest about scope" differentiator.
- Fix: move the Role line and eyebrow labels to --text or --text-muted, reserving Signal Azure for the numbered index and interactive/hover states only.
- Suggested command: /impeccable audit or /impeccable polish

**[P1] Keyboard focus is present but effectively invisible sitewide**
- Why it matters: no outline/:focus rules exist anywhere in the codebase, but the browser default resolves to rgb(16,16,16) on rgb(13,13,15) — measured 1.02:1 contrast. Every tabbable element is affected.
- Fix: add an explicit :focus-visible style using Signal Azure.
- Suggested command: /impeccable audit

**[P2] Strengths reads as an unsubstantiated claims list, directly under copy that rejects that pattern**
- Why it matters: seven skill tags carry no link back to proof, one section below copy stating "honest, well-reasoned design decisions over polished-looking claims." The 7-item grid in a 4-column layout also leaves one bordered cell visibly empty (items 5-7 end at x=911px in a 1189px grid).
- Fix: tie each strength to the case study that demonstrates it, or fold into case-study copy; resolve the grid to 6 or 8 items, or switch to a wrapping chip layout.
- Suggested command: /impeccable clarify + /impeccable layout

**[P2] Real typography/radius drift beyond what DESIGN.md documents**
- Why it matters: 31 in-scope detector findings against the just-written DESIGN.md; 4 are false positives (documented device-frame exceptions), but ~27 are genuine drift — heading clamps and one-off sizes (11px, 11.5px, 14px, 14.5px, 18px, 19px, a 7px nav-CTA radius) outside any documented step.
- Fix: consolidate the CSS onto the documented scale, or re-run /impeccable document to widen the scale to match reality.
- Suggested command: /impeccable document (refresh) or /impeccable typeset

## Persona Red Flags

**Alex (impatient recruiter):** Gets name/role/tagline immediately, reaches the 4 case-study cards fast — but the highest-value skim text (the "Role:" line) is the lowest-contrast text on the page. Then hits a 3,668px wall of Highlights with zero clickable affordances before Contact.

**Jordan (confused first-timer):** "Design Validation (QA)" and "Cross-Module / Systems Thinking" are unexplained jargon with no supporting link. Nav mixes anchor links and real routes with no visual distinction.

**Sam (screen reader + keyboard-only):** Focus indication is not suppressed (confirmed via code search) but is functionally invisible (1.02:1 measured contrast) — same practical experience as if it were suppressed. Each project card is one giant Link with no aria-label, concatenating a long accessible name from image alt + type + platform + title + role + description + "View case study."

**Casey (distracted mobile, 390px):** No horizontal overflow at 390px. Nav packs 4 links + Contact chip into ~366px of a 390px viewport — tight but functional. Sticky Contact chip stays reachable at any scroll depth. Note: full visual mobile screenshots weren't obtainable this run due to a viewport-rendering glitch; this read is DOM/computed-style evidence only.

## Minor Observations

- Footer duplicates the email/LinkedIn already in the Contact CTA — harmless redundancy.
- Nav has two adjacent tab stops (logo, "Home" link) going to the identical destination with no current-page marking.
- 14 em-dashes across body copy (detector-flagged) — matches the site's voice; call out only if it starts to read as a tic.
- The POS project card image is 3840x2160 (16:9) inside a 4:3 stage container — worth a visual gut-check once screenshots render reliably.
- Hero has exactly one CTA above the fold with no secondary path — acceptable given the sticky Contact chip, but thin given the page's success metric is "get contacted."

## Questions to Consider

- If Highlights is explicitly "lighter treatment, not full case studies," what breaks if it's cut to one representative shot per project with a "see more"?
- The Strengths section makes seven unlinked claims right next to copy that explicitly rejects "polished-looking claims" — what does keeping it as a standalone list buy that folding it into the case studies wouldn't?
- Since Contact is only reachable via the sticky-nav chip or the very last section, would a second, bolder contact touchpoint right after the four core case studies capture recruiters who are convinced but won't scroll further?
