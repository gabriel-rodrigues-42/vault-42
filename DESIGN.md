---
name: Vault 42
description: Organic & Premium Seeds and Plants Shop
colors:
  primary: "#f9c322"
  secondary: "#0066b1"
  tertiary: "#001423"
  neutral-bg: "#ffffff"
  neutral-fg: "#2f2f2f"
  light: "#f6f8fc"
  success: "#2dd55b"
typography:
  display:
    fontFamily: "Outfit, Inter, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#000000"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#dbac1e"
---

# Design System: Vault 42

## 1. Overview

**Creative North Star: "The Herbarium Curator"**

A visual system focused on botanical elegance, taxonomic clarity, and premium spacing. It draws inspiration from classic botanical archives and modern museum displays: high-contrast text, structured details, and natural precision. It explicitly rejects the soft, round, pastel-heavy look of mainstream SaaS platforms, choosing sharp structure and deep organic tones instead.

**Key Characteristics:**
- Meticulous information layout (structured grids and tables for botanical specifications).
- Natural premium styling: clean typography paired with generous negative space.
- Restricted use of color: botanical gold serves as a focused spotlight.

## 2. Colors

A premium botanical palette matching high-end organic gardens and professional horticulture centers.

### Primary
- **Botanical Gold** (#f9c322): Used for primary calls to action, badges, and highlighting critical interactive states.

### Secondary
- **Water Blue** (#0066b1): Used for complementary elements, subheaders, and secondary buttons.

### Tertiary
- **Deep Obsidian** (#001423): Used for high-contrast typography headers and deep dark backgrounds.

### Neutral
- **Botanical Chalk** (#ffffff): Root background color for pages and components.
- **Deep Charcoal** (#2f2f2f): Default body text color.
- **Alabaster** (#f6f8fc): Background fill for secondary panels, list headers, and container cells.

### Named Rules
**The Rarity of Gold Rule.** Botanical Gold is used on ≤10% of any given screen. Its scarcity is the source of its premium impact.

## 3. Typography

**Display Font:** Outfit (with Inter fallback)
**Body Font:** Inter (with sans-serif fallback)

**Character:** A pairing that balances structural geometry (Outfit) with clean, readable prose (Inter) to feel authoritative yet modern.

### Hierarchy
- **Display** (600, clamp(2rem, 5vw, 3.5rem), 1.15): Used for main hero headers and shop titles.
- **Headline** (600, 1.5rem, 1.25): Used for section headers.
- **Title** (600, 1.15rem, 1.3): Used for product card names and panel headers.
- **Body** (400, 1rem, 1.5): Used for descriptions, care guides, and reviews. Line length is capped at 70ch.
- **Label** (500, 0.85rem, 1.2): Used for button labels, product specifications, and status tags.

## 4. Elevation

Vault 42 relies on a flat, structural layering model rather than deep physical shadows. Hierarchy is established through thin borders and light background fills.

### Shadow Vocabulary
- **Interactive Focus** (`box-shadow: 0 4px 12px rgba(0,20,35,0.08)`): Displayed only on active inputs or during card hover transitions.

### Named Rules
**The Border-Over-Shadow Rule.** Containers and cards use 1px solid borders rather than drop shadows to divide surfaces at rest.

## 5. Components

### Buttons
- **Shape:** Subtle curve (4px radius).
- **Primary:** Botanical Gold background with dark text, 12px vertical and 24px horizontal padding.
- **Hover / Focus:** Transitions smoothly to a deeper gold shade (#dbac1e).

### Cards / Containers
- **Corner Style:** Rounded (8px radius).
- **Background:** White, with flat 1px solid gray borders.
- **Shadow Strategy:** Flat at rest; subtle shadow focus on hover state.
- **Internal Padding:** Generous padding (16px md or 24px lg) to let product photos breathe.

### Inputs / Fields
- **Shape:** Subtle curve (4px radius).
- **Focus:** 1px highlight border in Botanical Gold.

## 6. Do's and Don'ts

### Do:
- **Do** display plant care stats (sun, water, soil) in clear, structured lists.
- **Do** use 1px solid borders to define container limits at rest.
- **Do** use precise scientific naming alongside common product names.

### Don't:
- **Don't** use border-radius greater than 16px on cards (Vault 42 rejects "insanely rounded" UI).
- **Don't** use side-stripe borders or text color gradients.
- **Don't** use cartoon plant doodles or low-resolution images.
