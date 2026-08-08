# Lalo Bakery Solutions — Color & Visual Reference

Source: https://main.lalobakerysolutions.com/ (captured via live computed styles + screenshots, 2026-08-08)

## Core palette

| Role | Color | Hex (approx) | Notes |
|---|---|---|---|
| Primary dark (brand navy) | `rgb(20, 41, 56)` | `#142938` | Header/nav bg (transparent over hero, solid on scroll/inner pages), footer bg, hero dark overlay panels, feature card backgrounds on Home |
| Primary dark (button variant) | `rgb(26, 46, 59)` | `#1A2E3B` | "Send Message" button bg — nearly identical to primary dark, slightly lighter |
| Accent (terracotta / peach) | `rgb(201, 142, 122)` | `#C98E7A` | "LEARN MORE" pill buttons, small accent highlights |
| White | `rgb(255, 255, 255)` | `#FFFFFF` | Primary text on dark backgrounds, card text |
| Black / near-black | `rgb(0, 0, 0)` | `#000000` | Body default text color on light sections |
| Light cream/peach card bg | ~`#F5E8DF` | approx | Subsidiary card backgrounds on `/company` page (soft peach-cream, lighter tint of the terracotta accent) |
| Off-white section bg | `#FFFFFF` / very light gray | | Used for "About Lalo", "Our Companies", "Get in Touch" sections |
| Border/outline gray | light gray, ~`#E5E7EB` | | Outlined cards (Operations section: Distribution / Logistics) |

## Usage patterns

- **Header/Nav:** transparent, sits over the hero image; text is white; becomes visually anchored on a dark navy strip on inner pages (About/Company/Contact hero sections use solid navy `#142938` background).
- **Hero sections:** full-bleed background image (coffee plantation photography — green hillsides, coffee cherries) with a dark navy gradient/overlay for text legibility on Home; solid navy `#142938` block (no photo) used as the hero background on About/Subsidiaries/Contact pages.
- **Buttons:**
  - Primary/dark CTA buttons (e.g. "Send Message", hero "Learn More" on navy bg) — dark navy fill, white text.
  - "LEARN MORE" pill buttons on cards — terracotta/peach fill (`#C98E7A`), white uppercase text, rounded/pill shape.
  - Outlined "LEARN MORE →" buttons (seen on `/company` subsidiary cards) — dark navy outline/fill with white text and an arrow icon.
- **Cards:**
  - Home page's 3 feature cards ("Our Identity," "The Lalo Difference," "Global Reach") — dark navy background, white text, small icon in a translucent square, peach pill button.
  - `/company` subsidiary cards — light peach/cream background, dark text, bullet-point tag list, dark navy or outlined "LEARN MORE" button.
  - Operations cards ("Distribution," "Logistics") — white background, thin gray rounded border, centered icon + heading + text.
- **Footer:** dark navy background (`#142938`) with a coffee-cherry/leaves photo faded into it; white text and icons; embedded Google Map (light, standard Maps styling) in a rounded card on the right.
- **Typography:** Tailwind's default `ui-sans-serif` system font stack across the whole site (`ui-sans-serif, system-ui, sans-serif, ...`) — no custom webfont detected. Headings are bold/black weight; body text is regular weight, often in muted gray/white depending on background.
- **Logo:** "LALO" wordmark in bold white/cream serif-ish display letters with a small tagline line underneath (illegible at small size in header, worth pulling from source code/asset if pixel-accurate reproduction is needed), set on the dark navy/transparent header.

## Imagery style
- Warm, editorial photography: coffee plantations/hillsides, coffee cherries close-ups, roasted beans in baskets, a straw hat (lifestyle/origin shots), a modern apartment building exterior, an interior "Build on Trust" branded signage shot with wood paneling and a teal wave graphic accent.
- Overall mood: earthy greens + warm terracotta against a deep navy corporate base — "premium global trade" feel grounded in Ethiopian coffee-origin warmth.

## Suggested palette tokens for redo (starting point)

```
--color-navy-900: #142938;   /* primary dark / header / footer / hero panels */
--color-navy-800: #1A2E3B;   /* button variant */
--color-terracotta-500: #C98E7A; /* accent / CTA pills */
--color-cream-100: #F5E8DF;  /* light card backgrounds */
--color-white: #FFFFFF;
--color-black: #000000;
--color-gray-border: #E5E7EB;
```

Note: these are extracted approximations from computed styles and screenshots, not pulled from a design file — confirm exact hex values against brand assets/logo files if pixel-perfect accuracy is required.
