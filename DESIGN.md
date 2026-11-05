---
name: Adittya Pratama Portfolio
description: A calm, typographic, light-only portfolio with black pill buttons, hairline borders, one gradient word and one dark panel.
colors:
  paper: "#fafafa"
  card: "#ffffff"
  ink: "#111113"
  mute: "#595960"
  line: "#e4e4e7"
  wash: "#f0f0f2"
  night: "#0c0b0d"
  night-mute: "#c8c3bd"
  ink-hover: "#2b2b30"
  ember: "#e8591f"
  selection: "#ffd9c7"
typography:
  display:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.4vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  pill: "9999px"
  panel: "2rem"
  tile: "1.5rem"
  mark: "1rem"
  focus: "6px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  section: "96px"
  section-lg: "128px"
components:
  button-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-pill-hover:
    backgroundColor: "{colors.ink-hover}"
  chip:
    backgroundColor: "{colors.card}"
    textColor: "{colors.mute}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  panel-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "32px"
  panel-wash:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "32px"
  panel-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "48px"
---

# Design System: Adittya Pratama Portfolio

## Overview

**Creative North Star: "The Quiet Manifesto"**

One bright page, set in one clean sans, where large type does the talking and the structure is drawn with hairlines and whitespace. It follows the grammar of imajinyata.com (section order, pill, panel, roster rows) and nothing else of it: no copy, no assets. Color is rationed to two moments: one gradient word in the home hero, and one dark panel with a warm horizon glow on the home page only.

The system is light only. No theme toggle ships. Density is low, radii are large, depth is flat. Recognizable with all copy removed by the whitespace, the black pill, and the single dark panel.

**Key Characteristics:**
- Light only, off-white ground, near-black ink, one sans (Instrument Sans).
- Black pill buttons and hairline (1px) borders as the structural vocabulary.
- Color in two places only: the hero accent word and the home dark panel.
- Flat depth; the sticky header is the only blurred surface.
- Motion is authored and sparse: hero lines rise in sequence; the header name folds on scroll; the profile diagrams and the ledger-style row rules draw in as they scroll into view. No fade-up on sections, no counters, no animated glow.

## Colors

Neutral and cool-gray, with warm red-orange appearing only inside the gradient word, the dark panel glow, and the ember dots in the profile diagrams.

### Primary
- **Ink Black** (`{colors.ink}`): text, black pill fill, focus outline, the logo tile on /profile. Hover steps to Ink Hover (`{colors.ink-hover}`).

### Secondary
- **Ember** (`{colors.ember}`): the dot in each profile diagram and the middle stop of the hero gradient. The gradient runs `#e0343f` to `#e8591f` to `#d4780a` at 100deg. The glow in the dark panel runs `#ff8a3d` out through rgba(232,89,31) and rgba(224,52,63) to transparent. These gradient and glow stops are not separate tokens; they exist only in `.accent-word` and `Glow`.

### Neutral
- **Paper** (`{colors.paper}`): page ground and text on dark/ink surfaces.
- **Card White** (`{colors.card}`): panels, chips, and the availability pill, always with a Line border.
- **Mute Gray** (`{colors.mute}`): secondary text, inactive nav, diagram strokes (at 70% opacity).
- **Hairline** (`{colors.line}`): every border and divider, and underline decoration for text links.
- **Wash** (`{colors.wash}`): borderless gray tiles for the /profile habit cards.
- **Night** (`{colors.night}`) and **Night Mute** (`{colors.night-mute}`): the dark panel and its body text.
- **Selection Peach** (`{colors.selection}`): text selection background.

### Named Rules
**The Two Moments Rule.** Saturated color appears in exactly two places: the hero accent word and the home dark panel's glow. A third colored element dilutes both.

**The Home-Only Night Rule.** The dark panel with warm glow is a home-page moment. Other pages use Wash tiles instead of dark surfaces.

## Typography

**Display, Body, Label Font:** Instrument Sans (with system-ui, sans-serif), loaded via next/font as `--font-instrument`.

**Character:** One family at weights 400, 500, 600. Hierarchy comes from size and tight negative tracking on headings, not from a second face. Muted gray carries the secondary voice.

### Hierarchy
- **Display** (600, clamp(2.5rem, 6.4vw, 5rem), 1.02, -0.035em): the home h1, three lines, text-balanced.
- **Headline** (600, 1.875rem to 3rem, 1.1, -0.03em): section h2. Page h1 on /products and /profile is 2.25rem to 3.75rem at 1.05, -0.035em.
- **Title** (600, 1.25rem, -0.02em): list row names, card titles, person name.
- **Body** (400, 1.125rem, Mute Gray): paragraphs; measure capped with `max-w` in ch (42ch to 60ch). `p` uses `text-wrap: pretty`.
- **Label** (500, 0.875rem, Mute Gray): nav links, chips, stack strip, dates and indices set with tabular numerals.

### Named Rules
**The One Family Rule.** Instrument Sans only; weight 600 for headings, 400 for prose, 500 for small labels.

## Layout

Single column container, `max-w-6xl` (72rem) centered, horizontal padding 16px, 24px from sm. Prose pages use `max-w-3xl`. Sections are separated by 96px top padding, 128px from sm; contact closes every page. Lists are rows divided by hairlines (`divide-y divide-line`, framed by `border-y`), with two or four column grids from lg (`1fr 2fr` label-and-content split). Hero fills `100svh` minus the header with centered text and the stack strip pushed to the bottom. Touch targets are at least 44px tall. Mobile: the header Email pill hides below sm, and the hero shows its own mailto pill instead.

## Elevation & Depth

Flat. No box-shadows anywhere. Depth is tonal and linear: Card White with a hairline border on Paper, Wash tiles without border, and the Night panel as the single dark plane. The sticky header (`bg-paper/85` with `backdrop-blur-md`) is the only blurred surface; keep blur there.

### Named Rules
**The Flat Rule.** Separation comes from hairlines, tone, and whitespace, never from shadow.

## Shapes

Large soft corners, pills for actions. Panels 2rem (32px), Wash tiles 1.5rem, logo tile 1rem, buttons and chips fully round (9999px), focus ring radius 6px. Borders are always 1px Hairline. The AP monogram is a 9px round-capped stroke drawn with `currentColor`. Profile diagrams are original line drawings: 1.5px dashed strokes (`3 4`) in Mute Gray at 70%, rounded caps, and one 4.5px Ember dot each, in a 160x96 frame.

## Components

### Buttons
- **Shape:** full pill, min-height 44px, 20px horizontal padding (`pillBtn`).
- **Primary:** Ink Black fill, Paper text, 14px weight 500. Larger variant in Contact: 48px height, 24px padding, 16px text.
- **Hover / Focus:** fill shifts to `#2b2b30` over a color transition. Focus ring is 2px Ink with 3px offset (white on the dark panel).
- **Text link (`textLink`):** underlined with a 2px Hairline decoration, 4px offset; the decoration turns Ink on hover. On the dark panel the decoration is Night Mute turning Paper.

### Chips
- **Style:** Card White, 1px Hairline border, Mute Gray 14px text, pill, 12px by 4px padding. Used for stack tags and role tags; also the hero availability pill (status, not a label).

### Cards / Containers
- **Panel (white):** 2rem radius, Hairline border, Card White, 24px to 32px padding (Contact uses 56px to 80px vertical).
- **Wash tile:** 1.5rem radius, no border, Wash fill, diagram on top, Title and Mute text below; two columns from sm.
- **Night panel:** 2rem radius, Night fill, Paper headline, Night Mute body, glow anchored to the bottom 18rem. Home only.
- **Spec sheet (/products):** a white panel with name, meta line, and hairline-divided part and role rows. No screenshots.

### Navigation
- **Header:** sticky, blurred Paper. Left: AP mark plus the name, which folds to zero width over the first 120px of scroll via a scroll-driven animation (name stays where unsupported or under reduced motion). Right: Products, Profile, language switch, Email pill. Links are 14px, Mute Gray, Ink when active (`aria-current`) or hovered.
- **Footer:** top hairline, 14px Mute Gray, text links.

### Motion
- **Rise:** hero elements translate 14px and fade in over 700ms with `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 90ms. The only time-based entrance animation. Disabled under `prefers-reduced-motion`, as are smooth scroll and the name fold.
- **Diagram draw:** each habits diagram wipes in left to right (`clip-path`) over roughly 250px of scroll as it rises through the viewport, then its warm dot pops from scale 0. Ranges end well before the viewport middle so the last rows of a page still finish. Scroll-driven (`view-timeline`), no JavaScript.
- **Row rules:** the top rule of each row in the home hard-problems list and the profile timeline scales in from the left as the row enters. The last bottom rule is static.
- **Press:** pill buttons scale to 0.98 for 150ms on press.
- **Enhancement rule:** the scroll-driven moments sit behind `@supports (animation-timeline: view())` and stop under `prefers-reduced-motion`. Without support, the finished state shows.

## Do's and Don'ts

### Do:
- **Do** keep the page light: Paper ground, Ink text, Mute Gray for secondary copy (`#595960` passes on Paper).
- **Do** draw structure with 1px Hairline rules and row dividers before reaching for a box.
- **Do** use black pill buttons for primary actions and underlined text links for the rest.
- **Do** keep the one gradient word in the home hero and the one glowing dark panel on home.
- **Do** make new diagrams as dashed Mute Gray line art with a single Ember dot.
- **Do** keep touch targets at 44px minimum.

### Don't:
- **Don't** add a dark theme or toggle; the system ships light only.
- **Don't** put a dark panel or glow on any page other than home.
- **Don't** add shadows or additional blurred surfaces beyond the sticky header.
- **Don't** introduce a second typeface or a second accent color.
- **Don't** use screenshots or invented imagery for internal systems; use the spec-sheet and diagram forms.
- **Don't** copy copy or assets from imajinyata.com; only its grammar is referenced.
