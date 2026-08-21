---
name: Asmaa Wafik — Product Designer Portfolio
description: A dark, systems-room portfolio for a product/UX designer — near-black canvas, one signal-blue accent, and a signature device-frame system for presenting enterprise, healthcare, marketplace, and POS case studies.
colors:
  ink-black: "#0d0d0f"
  ink-black-alt: "#121218"
  navy-deep: "#0f1b33"
  navy-deep-2: "#1b2a4a"
  signal-azure: "#4a6fa5"
  signal-azure-deep: "#3b5998"
  signal-azure-text: "#7a97c0"
  paper-white: "#fafafa"
  slate-muted: "#a1a1aa"
  hairline: "rgba(250, 250, 250, 0.08)"
  hairline-strong: "rgba(250, 250, 250, 0.14)"
  bezel-black: "#1a1a1e"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(40px, 6vw, 64px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(28px, 3.6vw, 38px)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "56px"
  section-y: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal-azure}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.sm}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-azure-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "rgba(74, 111, 165, 0.08)"
  tag-pill:
    backgroundColor: "{colors.signal-azure}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  card-surface:
    backgroundColor: "{colors.navy-deep}"
    rounded: "{rounded.lg}"
    padding: "24px 26px 28px"
---

# Design System: Asmaa Wafik — Product Designer Portfolio

## Overview

**Creative North Star: "The Systems Room"**

The portfolio reads like a command console for serious product work: a near-black canvas, hairline dividers, and exactly one signal color that lights up interactive and important elements. Nothing competes with the case-study screenshots — the interface is confident, technical, and precise, built to make enterprise ERP flows, healthcare booking, marketplace apps, and POS redesigns feel like the credible, systems-level work they are. It deliberately avoids playful, pastel, or maximalist styling; there is no light mode, no illustration layer, and no more than one accent hue anywhere on the page.

The site's signature move is its device-frame system — bespoke phone, tablet, and browser bezels that present real screenshots as if inspected on physical hardware, each with its own near-black casing and a deep, soft drop shadow. Everything else — cards, sections, navigation — stays flat and grid-aligned, so the device frames are the only elements that feel like they're floating off the page.

**Key Characteristics:**
- Near-black ink canvas (`#0d0d0f`) with a single signal-blue accent (`#4a6fa5`) — no secondary or tertiary hues.
- Flat-by-default surfaces; depth is reserved for floating device mockups and their hover states.
- A repeatable device-frame vocabulary (phone / tablet / browser) that carries the case-study screens.
- Confident, condensed Inter type at 800 weight for headings, generous line-height on body copy.
- Numbered, tabular-figure labels (`01`, `02`...) used as a structural device across strengths, decisions, and flow steps.

## Colors

Overwhelmingly neutral and dark, with one accent color doing all the signaling work.

### Primary
- **Signal Azure** (`#4a6fa5`): The one accent in the system. Used for glows, active/hover borders, filled buttons, and any non-text element that should read as "notice this." Also has a deeper hover state, **Signal Azure Deep** (`#3b5998`), used on `:hover` for primary buttons. `#4a6fa5` at these sizes fails WCAG AA (2.8–3.8:1) against every dark surface in this palette, so it is never used as small text — see Signal Azure Text below and the updated One Signal Rule.
- **Signal Azure Text** (`#7a97c0`): A lighter tint of the same accent hue, reserved for text: the eyebrow label, tabular-numeral indices (Strengths, decision blocks), tag/category labels, and small accent links (About's "Read more," footer hover). Passes WCAG AA (≥4.76:1) against every surface color in the system. This is a tint of Signal Azure, not a second hue — the One Signal Rule still holds.

### Neutral
- **Ink Black** (`#0d0d0f`): Page background.
- **Ink Black Alt** (`#121218`): Secondary section background, used to alternate rhythm between stacked sections (e.g. Strengths, alternating case-study sections).
- **Navy Deep** (`#0f1b33`) / **Navy Deep 2** (`#1b2a4a`): The card and surface family. Project cards, highlight cards, decision-block chips, and the contact CTA card use a `navy-deep-2 → navy-deep` gradient or flat `navy-deep` fill to sit one step lighter than the page background.
- **Bezel Black** (`#1a1a1e`): The device-frame casing color. Phone and tablet frames use closely related near-blacks (`#08080a`, `#0e0e11`) tuned slightly darker per device — same family, deliberately not unified into one flat value.
- **Paper White** (`#fafafa`): Primary text and headings.
- **Slate Muted** (`#a1a1aa`): Secondary/supporting text, captions, metadata.
- **Hairline** (`rgba(250,250,250,0.08)`) / **Hairline Strong** (`rgba(250,250,250,0.14)`): All borders and dividers. Hairline for passive section/card borders, Hairline Strong for anything meant to read as a distinct edge (pills, chips, the sticky nav's CTA button).

### Named Rules
**The One Signal Rule.** Signal Azure is the only accent color in the system. If a screen needs a second color to communicate meaning, that's a sign the hierarchy is wrong — reach for weight, size, or the neutral scale first. Its two lightness steps (Signal Azure for non-text/large use, Signal Azure Text for small text) are accessibility tints of one hue, not an exception to this rule: never use base Signal Azure as small body/label text on a dark surface.

## Typography

**Display / Body Font:** Inter (with `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` fallback) — the system uses one typeface throughout; weight and size carry the hierarchy, not a font pairing.

**Character:** Confident and technical. Heavy (800) weight display/headline type with tight negative letter-spacing reads as engineered precision; body copy loosens up considerably (1.7–1.8 line-height) so long case-study paragraphs stay comfortable to read against the dark background.

### Hierarchy
- **Display** (800, `clamp(40px, 6vw, 64px)`, line-height 1.05, letter-spacing -0.02em): The hero name only (`Asmaa Wafik`).
- **Headline** (800, `clamp(28px, 3.6vw, 38px)`, letter-spacing -0.015em): Section headings on the homepage (Case studies, Where I add the most value, More selected work, Open to new opportunities). Case-study page section headings use a smaller variant of the same weight/tracking, `clamp(24px, 3.2vw, 30px)`.
- **Title** (700, 18–22px, letter-spacing -0.01em): Card and component titles — project card names, decision-block titles, highlight card titles.
- **Body** (400–500, 15–17px, line-height 1.6–1.8): Paragraph copy, in `paper-white` for emphasis passages (hero tagline) or `slate-muted` for supporting/secondary copy.
- **Label** (600–700, 12–13px, letter-spacing 0.05–0.08em, uppercase): Eyebrow tags, category pills, "Before/After" tags, numbered index labels (`01`, `02`...). Always paired with either `slate-muted` (neutral label) or `signal-azure` (emphasized label).

### Named Rules
**The Tabular Number Rule.** Any numbered label (strengths list, decision blocks, flow steps) uses `font-variant-numeric: tabular-nums` and zero-padded two-digit numbers (`01`, `02`) in Signal Azure — a small but consistent signature across the system.

## Layout

Single centered container, `max-width: 1160px`, `24px` horizontal padding. Sections use a shared `.section` rhythm of `96px` vertical padding (`64px` on screens ≤640px) so scroll pacing stays consistent regardless of section content. Section backgrounds alternate between Ink Black and Ink Black Alt, separated by hairline top/bottom borders, to create rhythm without needing shadows or cards to delineate sections.

Grids are content-driven rather than a fixed global grid: project cards use a 2-column grid collapsing to 1 at ≤860px; the strengths list uses a 4→2→1 column grid; highlight cards use `auto-fill, minmax(260px, 1fr)` with certain cards spanning full width (`cardFeatured`) for galleries and before/after comparisons. Case-study pages use a hero grid (roughly 1.3fr / 0.7fr, text to device frame) that stacks to one column at ≤780px.

## Elevation & Depth

Flat by default; depth is reserved for floating device mockups. Section surfaces, cards, and chips sit at the same visual plane as the page and are separated by hairline borders, not shadows. The one exception is anything presented as physical hardware or lifted on hover: phone/tablet/browser device frames always carry a deep, soft shadow, and project cards gain a shadow only on hover (paired with a translateY lift), signaling interactivity rather than resting elevation.

### Shadow Vocabulary
- **Device frame shadow** (`box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.7)`): Applied at rest to every phone/tablet/browser frame — the one shadow that's always on, because these elements represent physical screens floating above the page.
- **Card hover lift** (`box-shadow: 0 20px 44px -20px rgba(0, 0, 0, 0.55)`): Applied to project cards on `:hover`, paired with `translateY(-4px)` and a border color shift to Signal Azure.
- **Mockup drop shadow** (`filter: drop-shadow(0 16px 28px rgba(0, 0, 0, 0.5))`, deepening to `0 26px 40px rgba(0, 0, 0, 0.6)` on card hover): Applied to the device mockup image inside a project card's stage, independent of the card's own shadow.

### Named Rules
**The Floating-Hardware Rule.** Shadows exist only where something is meant to read as a physical object (a device frame) or as actively lifting toward the cursor (hover states). A flat card at rest never has a shadow.

## Shapes

Radii scale from tight (buttons, chips) to generous (cards), plus a fully-rounded pill for tags and badges:
- **xs** (`6px`): small index/count badges, image corners inside gallery visuals.
- **sm** (`8px`): buttons, nav CTA chip, flow-step chips.
- **md** (`12px`): browser device frame, "next case study" link, placeholder notes (which additionally use a dashed border).
- **lg** (`16px`): project cards, highlight cards, module diagram containers.
- **xl** (`20px`): contact CTA card, tablet device frame.
- **pill** (`100px`): before/after tags, category tags, visual-label badges, nav CTA on some states.

Device frames each carry their own bespoke radius language distinct from the general scale — phone frames use a much larger `34px` outer radius (`24px` inner screen) to read as a rounded handset silhouette; tablet frames use `20px`/`10px`. This is intentional device-mimicry, not an inconsistency to reconcile with the card radius scale.

## Components

Every interactive surface stays hairline-bordered and flat at rest; hover states shift the border to Signal Azure and/or introduce the system's one permitted lift+shadow.

### Focus (sitewide)
- **Style:** A global `:focus-visible { outline: 2px solid var(--navy-bright); outline-offset: 2px; }` rule in `global.css` applies to every focusable element. Base Signal Azure (not the text tint) is correct here — an outline is a non-text UI indicator (WCAG 3:1 threshold, not 4.5:1), and `#4a6fa5` clears 3:1 against every surface in the palette. Never suppress the outline or override it with a lower-contrast color; nothing in the codebase previously set `outline`, which meant the browser default (near-invisible on this dark theme) was the only focus indicator anywhere.

### Buttons
- **Shape:** `8px` radius (`{rounded.sm}`).
- **Primary:** Signal Azure background (`#4a6fa5`), Paper White text, 600 weight, `13px 24px` padding. Hover deepens to Signal Azure Deep (`#3b5998`) with a `translateY(-1px)` lift.
- **Secondary / Ghost:** Transparent background, Hairline Strong border, Paper White text. Hover shifts the border to Signal Azure and tints the background with `rgba(74, 111, 165, 0.08)`.

### Chips / Pills (tags, before/after labels, index badges)
- **Style:** `100px` (fully rounded) or `6–8px` (index/count badges). Label typography (12–13px, 600–700 weight, uppercase, tracked).
- **State:** Two variants throughout the system — a neutral pill (Slate Muted text on `rgba(250,250,250,0.06)` with a Hairline Strong border) and an emphasized pill (Paper White text on solid Signal Azure), used consistently for Before/After and category tags.

### Cards / Containers
- **Corner Style:** `16px` (project/highlight cards), `20px` (contact CTA).
- **Background:** Navy Deep flat fill, or a `navy-deep-2 → navy-deep` gradient for cards that need to read as slightly elevated content (project cards, contact CTA).
- **Shadow Strategy:** None at rest; see Elevation & Depth for hover-only exceptions.
- **Border:** `1px` Hairline at rest, shifting to Signal Azure on interactive hover.
- **Internal Padding:** `24px 26px 28px` is the standard card body padding across project cards, highlight cards, and gallery cards.

### Navigation
- Sticky, translucent (`rgba(13,13,15,0.82)` + `backdrop-filter: blur(10px)`) header with a Hairline bottom border. Logo uses Paper White with a Signal Azure accent dot/period. Links are Slate Muted, brightening to Paper White on hover; the Contact link is styled as a small filled CTA chip (Navy Deep 2 background, Hairline Strong border, hover border shifts to Signal Azure).

### Device Frames (signature component)
The system's defining custom component, used throughout case studies and highlight galleries to present screenshots as physical hardware rather than bare images:
- **Browser Frame:** `#1a1a1e` bezel, `12px` radius, a fake chrome bar (`#232328`) with three dot indicators and an address-bar block, white screen area, `0 24px 60px -20px rgba(0,0,0,0.7)` shadow.
- **Phone Frame:** `#08080a` bezel, `34px` outer radius / `24px` screen radius, a pill notch, same shadow treatment. A `frameCompact` variant (percentage-based radii, no notch) exists for small thumbnail contexts like Highlights galleries.
- **Tablet Frame:** `#0e0e11` bezel, `20px` outer radius / `10px` screen radius, a small camera dot instead of a notch. Also has a `frameCompact` variant.
- All three frames render the screenshot at `object-fit: contain` against a white screen background, so screenshots of any aspect ratio sit correctly inset within the bezel.

## Do's and Don'ts

### Do:
- **Do** keep Signal Azure as the only accent color anywhere in the system — new sections reach for weight, size, or the neutral scale before introducing a second hue.
- **Do** keep shadows exclusive to device frames and hover-lift states (The Floating-Hardware Rule); flat cards stay flat at rest.
- **Do** route every new case-study screenshot through the existing Phone/Tablet/Browser frame components rather than presenting bare images.
- **Do** use the `01`, `02`... tabular-numeral label pattern for any new sequential/structural list (strengths, decisions, flow steps).
- **Do** alternate Ink Black / Ink Black Alt section backgrounds with hairline borders to create rhythm between stacked sections.

### Don't:
- **Don't** introduce a light mode or a second/third accent color — the one-signal-color discipline is a deliberate, confirmed constraint.
- **Don't** add ambient shadows to cards or sections at rest; shadows are reserved for device frames and interactive hover states only.
- **Don't** use playful, pastel, or illustration-heavy styling — the system is intentionally technical and restrained, not startup-cute.
- **Don't** unify the three device-frame bezel colors or radii into one shared value; each frame's slightly different near-black and radius is deliberate device-mimicry.
