---
name: ГАРТ
description: Warm paper ground, photographs of a real floor, black contrast slabs and one volt-lime accent that is only ever a fill.
colors:
  paper: "#f2efe9"
  panel: "#e6e2d9"
  panel-2: "#ded9ce"
  white: "#ffffff"
  ink: "#101010"
  ink-2: "#3b3833"
  ink-3: "#6a655c"
  ink-4: "#8d8880"
  dark: "#141414"
  dark-2: "#1f1e1c"
  on-dark: "#f4f2ee"
  on-dark-2: "#b3aea4"
  volt: "#d8f84a"
  volt-deep: "#c2e230"
  volt-ink: "#101010"
  line: "rgb(16 16 16 / 0.12)"
  line-soft: "rgb(16 16 16 / 0.07)"
  line-dark: "rgb(255 255 255 / 0.14)"
  wm-paper: "#d3cec3"
  err-border: "#e2604a"
  err-ink: "#ff9d8a"
  tint-ink-75: "rgb(16 16 16 / 0.75)"
  tint-ink-72: "rgb(16 16 16 / 0.72)"
  tint-ink-60: "rgb(16 16 16 / 0.6)"
  tint-ink-28: "rgb(16 16 16 / 0.28)"
  wash-ink-06: "rgb(16 16 16 / 0.06)"
  wash-ink-05: "rgb(16 16 16 / 0.05)"
  wash-ink-04: "rgb(16 16 16 / 0.04)"
  wash-ink-035: "rgb(16 16 16 / 0.035)"
  wash-white-08: "rgb(255 255 255 / 0.08)"
  wash-white-05: "rgb(255 255 255 / 0.05)"
  edge-white-30: "rgb(255 255 255 / 0.3)"
  veil-dark-55: "rgb(20 20 20 / 0.55)"
  veil-dark-20: "rgb(20 20 20 / 0.2)"
  placeholder-dark: "rgb(179 174 164 / 0.65)"
  seal-volt: "rgb(216 248 74 / 0.5)"
  shadow-ink-45: "rgb(16 16 16 / 0.45)"
  shadow-ink-50: "rgb(16 16 16 / 0.5)"
  shadow-ink-55: "rgb(16 16 16 / 0.55)"
  shadow-ink-25: "rgb(16 16 16 / 0.25)"
typography:
  display:
    fontFamily: "Unbounded, Trebuchet MS, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.4rem + 5.4vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Unbounded, Trebuchet MS, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.35rem + 3.1vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Unbounded, Trebuchet MS, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.05rem + 1.3vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  subhead:
    fontFamily: "Unbounded, Trebuchet MS, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  stat:
    fontFamily: "Unbounded, Trebuchet MS, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.125rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.05em"
  price:
    fontFamily: "Unbounded, Trebuchet MS, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 2.75rem)"
    fontWeight: 800
    letterSpacing: "-0.055em"
  button:
    fontFamily: "Unbounded, Trebuchet MS, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Geologica, system-ui, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 300
    lineHeight: 1.55
  body:
    fontFamily: "Geologica, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.6
  body-sm:
    fontFamily: "Geologica, system-ui, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.12em"
  micro:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.5625rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  data:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.8125rem"
    fontWeight: 700
rounded:
  sm: "0.625rem"
  md: "1.125rem"
  lg: "1.75rem"
  xl: "2.5rem"
  pill: "999px"
spacing:
  1: "0.5rem"
  2: "0.875rem"
  3: "1.375rem"
  4: "2.25rem"
  5: "3.5rem"
  6: "5.5rem"
  7: "8rem"
  gutter: "clamp(1.125rem, 3.5vw, 3rem)"
  section: "clamp(3.5rem, 7vw, var(--sp-7))"
  section-tight: "clamp(2.75rem, 5vw, var(--sp-6))"
components:
  button-primary:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.volt-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
    height: "52px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "{colors.wash-ink-04}"
    textColor: "{colors.ink}"
  button-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
    height: "52px"
  button-on-dark-hover:
    backgroundColor: "{colors.wash-white-05}"
    textColor: "{colors.volt}"
  round-arrow:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.volt-ink}"
    rounded: "{rounded.pill}"
    size: "46px"
  round-arrow-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.volt}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 0.85rem"
  nav-link-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  chip-coaches:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem 0.5rem 0.5rem"
  card-photo:
    backgroundColor: "{colors.panel-2}"
    rounded: "{rounded.lg}"
  card-video:
    backgroundColor: "{colors.dark}"
    rounded: "{rounded.md}"
    width: "190px"
  card-review:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "1.375rem"
  fact-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.stat}"
    padding: "1.375rem 1.375rem 1.175rem"
  day-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 0.4rem"
    height: "48px"
  day-pill-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  schedule-slot:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    padding: "0.95rem 1.375rem"
  plan-card:
    backgroundColor: "transparent"
    textColor: "{colors.volt-ink}"
    rounded: "{rounded.lg}"
    padding: "1.375rem"
  plan-card-lead:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "2.625rem 1.375rem"
  panel-plans:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.volt-ink}"
    rounded: "{rounded.xl}"
    padding: "clamp(2rem, 4.5vw, 4rem)"
  panel-dark:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
    padding: "clamp(2rem, 4.5vw, 4rem)"
  input-dark:
    backgroundColor: "{colors.wash-white-05}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1rem"
    height: "52px"
  input-dark-focus:
    backgroundColor: "{colors.wash-white-08}"
    textColor: "{colors.on-dark}"
---

# Design System: ГАРТ

## Overview

**Creative North Star: "The Daylight Club"**

This is a club photographed in daylight and printed on warm paper. The page is not a dark
gym landing with a hot stripe through it; it is a bright editorial surface — paper ground,
soft grey panels, white cards — where photographs of the actual floor carry the weight and
typography sets the volume. Nothing is lit from below, nothing glows. Depth comes from a
photograph having a lighter or darker room in it, from a card sitting on paper, and from
occasional black slabs that read as printed blocks rather than as darkness.

The signature move is scale plus radius. Panels are cut with very large corners
(`2.5rem` at panel scale, `1.75rem` at card scale), so every surface reads as a physical
plate laid on the page rather than a rectangle drawn in it. Display type is Unbounded set
uppercase, heavy and tightly tracked, at sizes that fill their container edge to edge — the
hero headline splits into two halves and parts around a keyed-out athlete standing on the
panel's bottom edge. Between the paper stretches and the black slabs sits exactly one
saturated colour: a volt lime that appears as a button fill, a full-bleed pricing block, a
badge, a focus ring on dark. It is loud precisely because it is rationed and because it is
never asked to be text on a light ground.

Density is generous but not airy: sections breathe on a `clamp(3.5rem, 7vw, var(--sp-7))`
rhythm, cards pack tightly inside `1.375rem` padding, and mono labels at `0.5625rem` do the
work that decoration would do in a lesser system. Motion is deliberate and named — a hero
load choreography, a bottom-to-top curtain wipe on every photograph, small lifts under the
cursor, counters that climb once — and all of it is optional: the whole motion language is
sealed inside `@media (prefers-reduced-motion: no-preference)` and the pre-animation hidden
state is gated on `html.js`, so the page is complete without JavaScript and calm for anyone
who asks for calm.

**Key Characteristics:**
- Warm paper ground (`--paper`), grey panels (`--panel`) and white cards; black slabs used as contrast punctuation, never as the page's base.
- Photography leads. Keyed-out athlete in the hero, vertical zone shots on a staggered grid, square coach portraits, one dark photographic band.
- One accent. Volt lime is a fill colour and a fill colour only.
- Very large radii as identity: `2.5rem` panels, `1.75rem` cards and photos, pill buttons and pill labels.
- Three self-hosted faces, zero external requests: Unbounded (display, uppercase), Geologica (body, weight 300), Martian Mono (labels and numbers).
- One deceleration curve for the entire page: `cubic-bezier(0.16, 1, 0.3, 1)`.

## Colors

A warm neutral field with a four-step ink ramp on light and a two-step ramp on dark, punctuated by black slabs and interrupted exactly once by a saturated lime.

### Primary
- **Volt Lime** (`--volt`): the single accent. Used as a fill: the primary CTA pill, the round arrow on zone cards, the full-bleed pricing block, the coach's years badge, the NDA tag, the skip link, the success banner, the selection highlight, and the focus ring on dark surfaces. It always carries near-black text (`--volt-ink`) on top of it.
- **Volt Deep** (`--volt-deep`): the darker sibling. Used where lime must sit *on* light as a mark rather than a field — the quote glyph on review cards, the "today" dot on day pills, the alternating rule above even-numbered method steps, and the plans watermark stroke.

### Neutral — light ground
- **Warm Paper** (`--paper`): the page ground, the browser theme colour, the fill of every fact cell, and the text colour on ink-filled buttons and pills.
- **Panel Grey** (`--panel`): the hero plate — the one big surface that sits visibly *on* the paper.
- **Panel Grey Deep** (`--panel-2`): the placeholder tone behind photographs while they load, inside zone and coach frames.
- **White** (`--white`): raised cards — the coach chip, the schedule sheet, review cards, the leading pricing card, and the ring around overlapping avatars.
- **Watermark Paper** (`--wm-paper`): the stroke colour of the hero's circle-and-bar watermark, one step below panel grey so it reads as embossing, not drawing.

### Neutral — ink ramp on light
- **Ink** (`--ink`): all primary text on paper, white and panel; also the fill of black chips, active nav pills, the wordmark badge and the focus ring.
- **Ink 2** (`--ink-2`): secondary prose — ledes, body copy in `.prose`, step and coach descriptions, nav links at rest.
- **Ink 3** (`--ink-3`): mono labels, captions, unit suffixes and metadata. The lightest tone allowed to carry words on light.
- **Ink 4** (`--ink-4`): icon-only tone. Used for the chevron glyph in drawer links; never for text.

### Neutral — dark slabs
- **Slab Black** (`--dark`): the contrast bands — the photographic band, the booking panel, the footer panel, the NDA strip (via `--ink`) and the video card's backing.
- **Slab Black Raised** (`--dark-2`): the form plate inside the booking panel, one step up from the slab so the form reads as a card on black.
- **On Dark** (`--on-dark`): headings and body on black slabs; also the footer's oversized outlined wordmark at 14% opacity.
- **On Dark 2** (`--on-dark-2`): secondary copy on black — dark prose, field labels, footer addresses, the NDA strip's sentence.

### Lines and material tints
- **Line** (`--line`), **Line Soft** (`--line-soft`): hairlines on light — day-pill and burger borders, the grid gaps in the facts strip, slot dividers, drawer link rules.
- **Line Dark** (`--line-dark`): the same role on black — input borders, form and footer rules.
- **Ink washes** (`--wash-ink-035` … `--wash-ink-06`): hover fills on light surfaces — schedule rows, nav links, the burger, ghost buttons.
- **White washes** (`--wash-white-05`, `--wash-white-08`, `--edge-white-30`): input rest and focus fills, hover borders and the on-dark button hover fill.
- **Ink text tints** (`--tint-ink-60`, `--tint-ink-72`, `--tint-ink-75`): the only way secondary text is expressed *inside* the volt block, where the ink ramp would clash with the field.
- **Dark veils** (`--veil-dark-55`, `--veil-dark-20`): the 100° gradient that reads the photographic band's image down until headline text sits on near-solid black at the left.
- **Shadow inks** (`--shadow-ink-25` … `--shadow-ink-55`): the only colours inside every `box-shadow` and `drop-shadow` in the build.

### Status
- **Error Border** (`--err-border`) and **Error Ink** (`--err-ink`): the invalid field border and its message text on the dark form. The only hue in the system besides volt, and it appears only when a field is wrong.

### Named Rules
**The Fill-Only Volt Rule.** Volt is a background, never a foreground on light. It may carry `--volt-ink` text on top of itself, and it may be text *on a black slab* (`em` inside dark headings, the required-field asterisk, footer link hover, the seal caption). Volt text on paper, panel or white is forbidden — it measures 1.2:1 and does not exist anywhere in the build.

**The One Slab Rule.** Black is punctuation, not ground. A dark surface appears only as a bounded, rounded panel (band, booking, footer) or as a strip (NDA). The page never inverts wholesale, and two black slabs never touch without paper between them.

**The Audited Ramp Rule.** Every text role in the build was measured, and each clears WCAG AA
at its actual size and ground: `--ink` on paper ≈ 17:1, `--ink-2` ≈ 10:1, `--ink-3` ≈ 5.1:1 on
paper and 4.6:1 on panel (its floor — it never goes on anything darker), `--on-dark-2` on
`--dark` ≈ 8.4:1, `--volt-ink` on volt ≈ 15.7:1, and the volt block's dimmest tint
(`--tint-ink-60`) ≈ 4.6:1. New pairings are measured, not assumed; `--ink-3` and
`--tint-ink-60` are the two that sit closest to the line.

**The Tint-Inside-Volt Rule.** Inside the volt block, secondary text is `--volt-ink` at 60–75% alpha, not a grey from the ink ramp. Greys go muddy on lime; a tinted black stays in the same family as the block's primary text.

## Typography

**Display Font:** Unbounded (with Trebuchet MS, system-ui, sans-serif) — variable weight 200–900, self-hosted woff2, four unicode-range subsets.
**Body Font:** Geologica (with system-ui, -apple-system, sans-serif) — variable weight 200–700, self-hosted.
**Label/Mono Font:** Martian Mono (with ui-monospace, SFMono-Regular, monospace) — variable weight 400–700, self-hosted.

**Character:** Unbounded is a wide geometric display face; set uppercase at weight 800 with `-0.045em` tracking and `0.88–0.98` line-height, it behaves like a stamp pressed into the panel rather than a headline typed onto it. Geologica at weight 300 underneath is quiet, humanist and long-form readable — the contrast between the two is the system's whole tonal range. Martian Mono, only ever small and letterspaced, is the instrument panel: areas, times, loads, prices, counts.

The three faces are pinned by the client and are not a variable of this system. All are loaded from `assets/fonts/` with `font-display: swap` and Cyrillic + Latin subsets; the page makes zero external font requests, and the Unbounded and Geologica Cyrillic subsets are preloaded in `<head>`.

### Hierarchy
- **Display** (Unbounded 800, `--h1` = `clamp(2.75rem, 1.4rem + 5.4vw, 5.75rem)`, line-height `0.88`, tracking `-0.045em`, uppercase): the hero headline only. Split into two spans, first left, second right-aligned, parting around the athlete.
- **Headline** (Unbounded 800, `--h2` = `clamp(2.125rem, 1.35rem + 3.1vw, 3.75rem)`, line-height `0.98`, tracking `-0.045em`, uppercase): section headings, capped at `18ch` (`22ch` when centred) so they always break into a block of two or three lines.
- **Title** (Unbounded 700, `--h3` = `clamp(1.375rem, 1.05rem + 1.3vw, 1.875rem)`, line-height `1.05`, tracking `-0.035em`): plan names (uppercase) and any third-level heading that stands alone.
- **Subhead** (Unbounded 700, `--h4` = `1.0625rem`, line-height `1.2`, tracking `-0.025em`): the in-card heading size — zone names, coach names, method steps, the booking panel's three reasons. The most-used heading in the build.
- **Stat** (Unbounded 800, `clamp(1.5rem, 2.4vw, 2.125rem)`, tracking `-0.05em`): the four counters in the facts strip. Unit suffixes ride inside at `0.55em` in `--ink-3`.
- **Price** (Unbounded 800, `clamp(2rem, 3.4vw, 2.75rem)`, tracking `-0.055em`): the monthly figure on plan cards, paired with a mono `₴ / місяць` at `--t-xs`.
- **Lede** (Geologica 300, `--t-md` = `1.0625rem`, line-height `1.55`, `--ink-2`, max `46ch`): the hero paragraph and nothing else.
- **Body** (Geologica 300, `--t-base` = `1rem`, line-height `1.6`): the page default; section intros use `.prose` at max `68ch`.
- **Body small** (Geologica 300, `--t-sm` = `0.8125rem`, line-height `1.45–1.6`): in-card copy — step and coach descriptions, plan bullets and subtitles, review quotes, footer links.
- **Label** (Martian Mono 500, `--t-xs` = `0.6875rem`, tracking `0.12em`, uppercase, `--ink-3`): the standard caption role — schedule footnotes, plan tier names, the day pills, form disclaimers.
- **Micro** (Martian Mono 700, `0.5625rem`, tracking `0.07–0.15em`, uppercase): the smallest voice in the system — fact captions, zone areas, coach roles, plan tags, form field labels, footer column heads.
- **Data** (Martian Mono 700, `--t-sm`, `font-variant-numeric: tabular-nums`): times in the schedule and figures marked `.num` or `.count`, so nothing shifts width while a counter runs.

### Named Rules
**The Stamp Rule.** Every display and headline setting is uppercase, weight 700–800, tracked in to `-0.035em`/`-0.045em`, and set on a line-height below 1. Sentence-case or normally-tracked display type is not part of this world.

**The Three-Voices Rule.** Unbounded speaks in headings and buttons, Geologica in sentences, Martian Mono in anything measured — times, areas, prices, counts, loads, tier names. A number that means something gets mono; a number inside a sentence does not.

**The Wide-Only Break Rule.** Hard line breaks in headings are authored as `<br class="dt">`, which is `display: none` by default and only becomes `inline` at `min-width: 900px`. A break that flatters a desktop headline must never survive into a phone column.

## Layout

A single centred column: `.shell` at `max-width: 1360px` with side padding of `clamp(1.125rem, 3.5vw, 3rem)`. Every section — including the full-bleed-feeling volt block and the black panels — lives inside that shell, so the paper margin runs unbroken down both edges of the page and the rounded plates float within it.

Vertical rhythm comes from two section paddings: `clamp(3.5rem, 7vw, var(--sp-7))` for a standard section and `clamp(2.75rem, 5vw, var(--sp-6))` for a tight one (used for the photographic band, which is visually heavy enough to need less air). Inside sections, spacing steps come from a seven-token scale (`0.5rem`, `0.875rem`, `1.375rem`, `2.25rem`, `3.5rem`, `5.5rem`, `8rem`), and three of them carry nearly all the work: `--sp-3` (`1.375rem`) is the default gap and the default card padding, `--sp-4` (`2.25rem`) separates a section head from its content, and `--sp-5` (`3.5rem`) is the wide-screen column gap.

Section heads are a two-column asymmetric split at `min-width: 900px` (`1.15fr / 0.85fr`, baseline-aligned at the bottom): heading left, one paragraph of prose right. A centred variant collapses to one column with centred text.

**Responsive behaviour**, breakpoint by breakpoint:
- **`max-width: 680px`** — the NDA strip swaps its full sentence for the short form.
- **`min-width: 620px`** — the booking form's fields become two columns; the form footer puts its disclaimer and submit on one row.
- **`min-width: 700px`** — zone photo cards go from 2 to 3 columns.
- **`min-width: 760px`** — method steps go to 2 columns; coach cards go to 3.
- **`min-width: 780px`** — the facts strip goes from 2 to 4 cells across.
- **`min-width: 820px`** — a schedule slot changes from a stacked three-row block to a single 5-column row (`84px` time / name / coach / room / load).
- **`min-width: 860px`** — reviews go to 3 columns; the footer opens to a 4-column grid (`1.3fr / 0.8fr / 0.8fr / 1.1fr`).
- **`min-width: 900px`** — the hero becomes its full composition (see Components); section heads, the photographic band, and the pricing head all become two-column; the pricing grid becomes three cards; the leading card lifts out of the row with `margin-block: -1.25rem` and compensating padding; `br.dt` breaks activate; the hero's action row stops wrapping.
- **`min-width: 980px`** — the booking panel splits into copy and form (`0.95fr / 1.05fr`).
- **`min-width: 1000px`** — desktop navigation appears (links plus the CTA pill) and the burger disappears. This is the only place the header changes.
- **`min-width: 1080px`** — the zone grid becomes six tracks with each card spanning two, and the stagger switches on; method steps go to 4 across.
- **`min-width: 1180px`** — the hero athlete grows from `min(78%, 34rem)` to `min(82%, 38rem)`.

### Named Rules
**The Padding-Stagger Rule.** The zone grid's staggered offsets are `padding-top` on `:nth-child(2, 3, 4, 6)`, never `margin-top`. Margin does not contribute to a grid row's height, so a margin-based stagger lets the second row climb into the first and overlap it. This is load-bearing: any future offset inside a grid uses padding.

**The One Shell Rule.** Nothing is truly full-bleed. Even the volt pricing block and the black footer are rounded plates inside the `1360px` shell, and the paper gutter is always visible on both sides.

## Elevation & Depth

The system is nearly flat and layers tonally: paper → panel → white card, with black slabs as the extreme. Where shadows do appear they are wide, very soft and pushed far up with a large negative spread, so a card looks *set down on paper* rather than floating above it — there is never a visible hard edge or an offset drop. Shadow colour is always ink at low alpha, never pure black.

### Shadow Vocabulary
- **Card at rest** (`box-shadow: 0 18px 40px -28px rgb(16 16 16 / 0.45)`): the coach chip, the video card, the schedule sheet, review cards. The default "this is a raised white plate" tone.
- **Lifted** (`box-shadow: 0 30px 60px -34px rgb(16 16 16 / 0.55)`): the state a card moves into on hover, and the permanent state of the leading pricing card — the only element that ships already elevated.
- **Button hover** (`box-shadow: 0 14px 26px -14px rgb(16 16 16 / 0.5)`): tighter and closer, matched to a `-2px` translate. Ghost and on-dark buttons explicitly cancel it.
- **Stuck header** (`box-shadow: 0 1px 0 var(--line-soft)`): a hairline, not a shadow. Appears once the page has scrolled past `24px`, alongside the header's backdrop opacity rising from 88% to 96%.
- **Cut-out figure** (`filter: drop-shadow(0 26px 40px rgb(16 16 16 / 0.25))`): the only drop-shadow in the build, grounding the keyed-out athlete on the hero panel so she does not read as a sticker.

### Named Rules
**The Set-Down Rule.** Every shadow uses a large blur, a large negative spread, and no horizontal offset. Elevation reads as contact with the page, never as levitation, and never as a hard offset block.

**The Elevation-Is-A-State Rule.** Surfaces are flat at rest. Shadow deepens only on hover, and only in the same direction as the card's translate. The single exception is the leading pricing card, whose permanent lift is what marks it as the recommended plan.

## Shapes

Radius is the identity. Four steps, each tied to a scale of object: `--r-xl` (`2.5rem`) for full-width plates — the hero panel, the photographic band, the pricing block, the booking panel, the footer; `--r-lg` (`1.75rem`) for cards and every photograph — zone shots, coach portraits, the schedule sheet, review cards, plan cards, the form; `--r-md` (`1.125rem`) for small objects — the video card, the success banner, the footer seal; `--r-sm` (`0.625rem`) for form inputs, the one place a tight corner is correct. Pills (`999px`) carry all buttons, nav links, day chips, tags and badges; circles carry avatars, the round arrow, the burger and the wordmark badge.

Photographs are cropped to fixed ratios so the grids stay honest: `4 / 5` for zone shots, `1` for coach portraits, `16 / 10` for the video card. Borders are hairline and structural, never decorative: `1.5px` on buttons, day pills, plan cards and inputs; `1px` dividers between schedule slots and above card footers; a `2px` top rule on method steps (ink, alternating with volt-deep on even steps); and one dashed `1.5px` volt border on the footer's NDA seal — the only dashed line in the system.

### Named Rules
**The Radius-By-Scale Rule.** Corner size scales with the object: plate `2.5rem`, card `1.75rem`, small object `1.125rem`, input `0.625rem`, control `pill`. A card-sized element with a small radius, or an input with a card radius, is off-system.

**The Radius-Survives-Clipping Rule.** Photographic reveals animate `clip-path: inset(… round var(--r-lg))` so the corner radius travels with the wipe. A reveal that squares off a photo mid-animation is a bug, not a variant.

## Components

### Buttons
- **Shape:** full pill (`--r-pill`), minimum height `52px`, padding `0.9rem 1.6rem`, `1.5px` border always present (matching the fill on solid variants), Unbounded 700 at `--t-sm`, with an optional inline `16px` stroke icon at `0.6rem` gap.
- **Primary:** volt fill, `--volt-ink` label. The trial-day CTA, the header CTA, the form submit, and the drawer's block CTA.
- **Ink:** `--ink` fill, `--paper` label. Used for the three plan CTAs, where volt would disappear into the volt block.
- **Ghost:** transparent on light with a `--line` border and `--ink` label; on hover the border goes solid ink and a `4%` ink wash fills it. No shadow.
- **On dark:** transparent with a `--line-dark` border and `--on-dark` label; on hover the border and the label both turn volt over a `5%` white wash.
- **Hover / Active:** `translateY(-2px)` plus the button-hover shadow on solid variants; `translateY(0)` on `:active`. Disabled drops to `0.5` opacity and cancels both transform and shadow.
- **Round arrow:** a `46px` volt circle with a diagonal arrow, sitting at the end of each zone card's bar. On card hover it rotates `45deg` and inverts to ink with a volt glyph.

### Chips and tags
- **Coach chip:** white pill, card shadow, three `34px` avatars overlapping at `-12px` with `2px` white rings, then a `1.0625rem` Unbounded count and a `0.5625rem` mono caption. The hero's proof-of-staff object.
- **Zone area tag:** absolutely positioned top-left inside a photo, `92%` paper with a `6px` backdrop blur, mono `0.5625rem` in `--ink` — legible over any photograph.
- **Plan tag / coach years / NDA tag:** small pills, mono `0.5625rem` at weight 700; the plan tag is ink-filled with volt text, the years badge and NDA tag are volt-filled with ink text.

### Cards / Containers
- **Corner style:** `--r-lg` for cards, `--r-xl` for plates.
- **Background:** white for raised cards (chip, schedule, review, leading plan), `--panel-2` behind photographs, transparent with a `28%` ink border for the outer plan cards, `--dark` for the video card and all black plates.
- **Shadow strategy:** card-at-rest by default, lifted on hover — see Elevation & Depth.
- **Internal padding:** `--sp-3` (`1.375rem`) for cards; `clamp(2rem, 4.5vw, 4rem)` for the volt and booking plates; `clamp(2rem, 4vw, 3.5rem)` for the footer plate.
- **Photo cards** pair a ratio-locked image frame with a bar underneath (title plus caption left, round arrow right); the image scales to `1.06` and the whole frame lifts `-6px` on hover.

### Inputs / Fields
- **Style:** dark-only. `5%` white fill, `1.5px --line-dark` border, `--r-sm` corners, `52px` minimum height (`100px` for the textarea), Geologica 300 at `--t-base` in `--on-dark`. Every field has a persistent mono `0.5625rem` label above it in `--on-dark-2`, with a volt asterisk when required.
- **Focus:** border turns volt and the fill rises to `8%` white; the outline is suppressed because the border shift is the indicator. Hover alone lifts the border to `30%` white.
- **Select:** native chevron replaced by an inline data-URI SVG arrow in `--on-dark-2`, right-aligned with `2.5rem` of padding reserved.
- **Error:** the field's wrapper takes `data-invalid="true"`, the border turns `--err-border`, and a mono `0.625rem` message in `--err-ink` with a warning glyph appears below. Validation fires on blur, then live on every keystroke once a field is already marked invalid.
- **Success:** a volt banner with an ink check glyph replaces nothing — it appears above the fields and scrolls itself into view.

### Navigation
- **Header:** sticky, `76px` tall, `88%` paper with a `blur(16px) saturate(1.4)` backdrop; at `data-stuck="true"` it goes to `96%` plus a hairline. Wordmark = a `34px` ink circle with a volt Cyrillic Г, then Unbounded 800 at `1.1875rem`.
- **Links:** Geologica `--t-sm` in `--ink-2` inside pill hit areas; hover fills a `6%` ink wash, and the scroll-spy sets `aria-current="true"` on the section in view, which fills the pill with ink and reverses the label to paper.
- **Mobile:** below `1000px` the links collapse into a `48px` circular burger with a hairline border; the drawer is a full-viewport paper sheet that slides down from `translateY(-100%)`, listing Unbounded `1.625rem` links with hairline rules and diagonal arrows, closing on link click or Escape and locking body scroll while open.

### Hero panel (signature)
A `--panel` plate with `--r-xl` corners, `min-height: min(80svh, 44rem)` above `900px`, holding four layers: a watermark SVG of two rings joined by a bar at `0.5` opacity; the headline as a flex row split baseline-aligned to both edges; the keyed-out athlete absolutely positioned centre-bottom at `min(78%, 34rem)` tall; and, on the bottom row, the lede plus actions at left and the video card plus coach chip at right. Below `900px` the same parts stack in source order — title, athlete, copy, side block — with the athlete centred at `min(74%, 300px)`.

### Facts strip (signature)
Four cells in a one-pixel `--line-soft` grid, clipped by an `--r-lg` container so the hairlines read as seams in a single plate. Each cell is `--paper`, with an Unbounded stat, an optional `0.55em` unit in `--ink-3`, and a mono `0.5625rem` caption. Three of the four numbers count up once, over `1100ms` on a cubic ease-out, formatted through `Intl.NumberFormat('uk-UA')` and held on tabular figures so nothing reflows.

### Schedule (signature)
A seven-column grid of day pills above a white sheet of slots. Pills are `48px` mono chips with hairline borders; the selected day fills ink, and today carries a `5px` volt-deep dot (volt when also selected). The pills are a real tablist: `role="tab"`, roaming `tabIndex`, `aria-selected`, and Arrow/Home/End keyboard navigation. Each slot shows time, class name, coach, room and a load indicator of three `7px` dots — filled ink for load, hairline for the rest — with a mono word beside them.

### Pricing block (signature)
A volt plate with `--r-xl` corners and a volt-deep ring watermark, holding three cards. The outer two are transparent with a `28%` ink border; the middle is white, permanently lifted, and pulled `1.25rem` out of the row top and bottom above `900px`. Inside: a mono tier label, an uppercase Unbounded name, the price with a mono unit, a subtitle on a `3em` minimum height so the three cards' bullet lists align, then a check/cross list where excluded items drop to `0.45` opacity, and an ink button pinned to the card bottom with `margin-top: auto`.

### Motion

Motion is a named, system-wide language, and all of it lives inside
`@media (prefers-reduced-motion: no-preference)`. The `reduce` branch turns off smooth
scrolling and clamps every animation and transition to `0.001ms`.

- **One curve.** Everything decelerates on `--ease` = `cubic-bezier(0.16, 1, 0.3, 1)`. Linear and ease-in-out do not appear.
- **Hero load choreography.** Before `body.ready`, the first title half sits at `translateX(-0.42em)`, the second at `translateX(0.42em)`, the athlete at `translateY(7%) scale(0.985)`, and the copy and side block at `translateY(1.4rem)` — all at `opacity: 0`. Adding `ready` releases them on `opacity 0.9s` / `transform 1.15s`, staggered by `0.1s` (athlete), `0.26s` (copy) and `0.36s` (side block). The hidden state exists only under `html.js`.
- **Photo curtain.** Zone and coach photographs reveal with `clip-path: inset(0 0 100% 0 round var(--r-lg))` opening to `inset(0 0 0 0 round var(--r-lg))` over `0.95s` — a wipe from the bottom edge upward that keeps the corner radius throughout.
- **Rise.** Anything marked `data-rise` enters from `opacity: 0, translateY(20px)` over `0.7s`, triggered by an IntersectionObserver at `4%` visibility with a `-10%` bottom margin, staggered among siblings by `60ms` up to a `240ms` ceiling.
- **Facts stagger.** The four fact cells carry fixed delays of `0.02s`, `0.09s`, `0.16s`, `0.23s`.
- **Hover lifts.** Photo cards `-6px`, review cards `-4px`, plan cards `-4px`, video card and coach chip `-3px`, buttons `-2px`; photographs scale to `1.06` (zones, video) or `1.05` (coaches) over `0.6–0.7s`; the round arrow rotates `45deg` and inverts.
- **Counters.** Fact numbers count from zero to target over `1100ms` on a cubic ease-out (`1 - (1 - p)³`), locale-formatted, on tabular figures. Under reduced motion they simply print their final value.

## Do's and Don'ts

### Do:
- **Do** keep volt as a fill. On light surfaces it may be a background carrying `--volt-ink`, never a text colour.
- **Do** put a `1.5px` border on every button, including solid ones, so ghost and filled variants share one silhouette.
- **Do** match radius to object scale: `2.5rem` plates, `1.75rem` cards and photos, `1.125rem` small objects, `0.625rem` inputs, pill controls.
- **Do** wrap every new motion in `@media (prefers-reduced-motion: no-preference)`, and give the element a visible resting state outside that block.
- **Do** gate any pre-animation hidden state on `html.js` (the class is set by an inline script in `<head>`) so the page renders complete with JavaScript disabled or failed.
- **Do** trigger load choreography from `body.ready` with a `setTimeout` fallback — the build uses `1200ms` — so a background tab or a cache-served load can never leave content invisible.
- **Do** re-arm rAF-throttled scroll handlers on `visibilitychange`, clearing the pending frame id, so a backgrounded tab does not leave the handler permanently stuck.
- **Do** use `padding-top` for staggered offsets inside a grid; margins do not add to row height and cause row overlap.
- **Do** author desktop-only line breaks as `<br class="dt">`.
- **Do** set measured values — times, areas, prices, loads, counts — in Martian Mono, and add `tabular-nums` to anything that animates.
- **Do** cap prose at `68ch` and ledes at `46ch`, and cap headings at `18ch` so they break into blocks.
- **Do** keep every asset local: fonts are self-hosted woff2 subsets with `font-display: swap`, and the page makes no external requests.

### Don't:
- **Don't** set volt as text on paper, panel or white — it measures about 1.2:1 and fails every threshold.
- **Don't** use `--ink-4` for text; it is an icon tone. `--ink-3` is the lightest ink allowed to carry words on light.
- **Don't** let a placeholder be the only source of a field's meaning. Every input keeps its persistent mono label; placeholders only illustrate format.
- **Don't** invert the page to a dark theme. Black is punctuation — bounded rounded slabs and one strip — on a paper ground.
- **Don't** add hard offset shadows, visible shadow edges, or glows. Shadows are wide, soft, ink-tinted and pushed up with negative spread.
- **Don't** introduce a second accent hue. The only colours outside the neutral ramp are volt, volt-deep and the two error tones.
- **Don't** use grey ink text inside the volt block; use `--volt-ink` at 60–75% alpha instead.
- **Don't** set display or heading type in sentence case, at loose tracking, or on a line-height above 1.
- **Don't** animate a photograph's reveal with a plain `inset()` clip — always carry `round var(--r-lg)` so corners survive the wipe.
- **Don't** remove focus visibility. The system uses a `3px --ink` outline at `3px` offset on light and a volt outline on dark; inputs suppress the outline only because their border turns volt.
