# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS — confirmed by the user. No build step, no package manager. Single `index.html` + `assets/css` + `assets/js`, openable by double-click and deployable to any static host. Chosen because the artifact's job is to be shown to a prospective client on short notice.

## Users

Two audiences, in this order:

1. **The buyer (primary, decides in the first 90 seconds).** The owner or marketing lead of a Ukrainian premium fitness club, viewed on a laptop during a sales conversation with the site's author. Their job is not "read about a gym" — it is to judge whether this designer can build the site *their* club deserves. They scroll fast, look for craft, and mentally substitute their own brand into every block.
2. **The simulated end visitor (the fiction the page must sustain).** A 27–45 y.o. city professional in Kyiv with disposable income, comparing 2–3 premium clubs on a phone at night. Their job: find out what membership costs, whether the schedule fits their week, and book a trial visit without calling anyone.

The page must work completely for audience 2, because that is the only way it convinces audience 1.

## Product Purpose

A portfolio/demo landing page for a fictional premium fitness club, built to be shown to real gym clients as proof of capability. Success = the buyer asks "how much and how fast for mine", not "can you also do X".

Because it is a demo, it carries a visible NDA/concept notice: the brand, prices, schedule, trainers and testimonials are invented and must never be presented as a real club's data.

## Positioning

The fictional club is positioned as a **premium city club, not a discount chain**: paid access to space, equipment quality, expert supervision and recovery — sold on standards and results, not on the lowest monthly price. The demo's own positioning against generic gym templates: real conversion architecture (pricing that answers objections, a bookable trial, an honest schedule) inside an editorial visual world, rather than stock photos over a hero video.

## Operating Context

- Viewed first on a laptop in a live sales conversation, then re-opened on the buyer's phone afterwards. Both must be flawless; the phone pass is where template work usually dies.
- Likely shown with poor conference wifi or tethering — the page must render fast and degrade gracefully without external asset hosts.
- The buyer may open DevTools or "View Source". The code is part of the deliverable.
- The end-visitor fiction assumes the usual club touchpoints: membership tiers, a weekly class schedule, personal trainers, a trial visit, a physical address.

## Capabilities and Constraints

- Single static page. No backend, so the booking form validates and confirms client-side only, and says so honestly rather than faking a server response.
- No external CDNs, no analytics, no trackers — everything self-contained so it opens offline.
- Content language: Ukrainian (confirmed). Currency ₴ (UAH). 24-hour time. Ukrainian typographic conventions.
- Imagery: no licensed stock photography is available for this project. Visual weight must be carried by typography, layout, color, motion and generated/abstract graphics rather than by borrowed photos. This is a hard constraint, not a preference.
- **Undecided / deliberately not invented:** the real client, their brand name, their actual prices, locations and trainers. All such content in the demo is fictional and labeled.

## Brand Commitments

- The reference the user pinned (Dribbble "MURA" gym landing) is a **starting point, explicitly not a target to match**. The user's instruction: do not land at ~90% similarity. Borrow the energy tier — oversized grotesk display type, one hot accent color, high-contrast blocks, card-based class grid — and diverge on world, structure and craft.
- The demo brand must be obviously fictional and NDA-labeled.
- No real club names, logos, addresses or people.

## Evidence on Hand

- Reference image only (Dribbble screenshot, saved to the session scratchpad). No client brief, no real copy, no photography, no logo files, no testimonials, no metrics.
- Everything numeric on the page (prices, member counts, hours, ratings) is invented for the demo and must be presented as such via the NDA notice. Future work must not promote these numbers to fact.

## Product Principles

1. **Craft is the argument.** Every detail is a sales exhibit; there is no "good enough for a demo".
2. **Complete the fiction.** A demo that only looks good in the hero is a template. Schedule, pricing, trial booking and footer must all hold up.
3. **Diverge from the reference.** Same energy tier, different world. Similarity to the source is a defect.
4. **Honest about being a demo.** Fictional data is labeled, the non-functional form says it is non-functional. Never let a prospect mistake invented numbers for real ones.
5. **Self-contained and instant.** No network dependency, no build step, no broken state on someone else's laptop.

## Accessibility & Inclusion

No client-specific standard was established. Target WCAG 2.1 AA as the working floor: contrast on the orange accent verified rather than assumed, full keyboard operation, visible focus, `prefers-reduced-motion` honored across all scroll and hover motion, and the schedule readable as structure rather than as a picture.
