# Brand palette

Adopted for the site 2026-10-24, from the palette options under consideration as of 2026-09-28.

Together the colors represent service as a whole, not any one branch: navy, scarlet, gold, green, and steel all appear across the services' traditions. Externally, describe the palette as representing **all who serve**. Never assign a color to a branch.

## Colors

| Color | Hex | Signals | Best use | Accessibility | CSS token |
|---|---|---|---|---|---|
| Deep Navy | `#031846` | Trust, authority, permanence, the weight of service | Primary background, headlines | White (17.2:1) or bronze (8.8:1) text on navy | `--navy` |
| Cool Steel | `#A1A1AA` | Discipline, precision, technology, quiet strength | Borders, dividers, secondary backgrounds | Never white text on steel (2.6:1); navy text only (6.7:1) | `--steel`, `--rule` |
| Cherry Rose | `#A4303F` | Courage, sacrifice, urgency, heart | Give buttons and calls to action, key stats | White text passes (6.8:1) | `--rose` |
| Hunter Green | `#415D43` | Growth, steadiness, investment, the long view | Recipient and program content, secondary buttons | White text passes (7.3:1) | `--green` |
| Honey Bronze | `#EDAE49` | Achievement, heritage, earned honor, brass | Accents on navy, rules and lines, donor materials | Fails as text on white (1.95:1); strong on navy (8.8:1) | `--gold` |
| Golden Pollen | `#FFC857` | Optimism, possibility, youth, light | *Alternate, not in use.* Accents on navy, candidate-facing pieces | Fails as text on white (1.5:1); strong on navy (11.2:1) | — |

Ratios are WCAG 2 contrast ratios, verified 2026-10-24.

### Gold choice

The site uses **Honey Bronze**. It reads as brass and insignia, in particular the gold bar a newly commissioned officer receives, which is the moment Resolute Ambitions exists to fund. Golden Pollen is brighter but reads as a caution sign next to Cherry Rose. A more orange gold is still an open question; changing it is a one-line edit to `--gold` in `src/styles/global.css` (plus the logo stroke in `src/components/Header.astro` and `public/favicon.svg`).

## Usage rules

1. Navy, steel, and bronze carry the brand.
2. Cherry Rose is reserved for action, so the **Give** button always stands out. Every Give/Donate button uses `.btn-give`.
3. Don't put large blocks of Cherry Rose and Hunter Green side by side.
4. Never use bronze/gold for text on a light background. On light pages, bronze appears only as lines and rules (link-hover underline, nav underline, callout and disclosure borders).

## Where each color lives on the site

| Element | Color |
|---|---|
| Header logo, hero, footer | Navy with bronze accents |
| Headlines, body links | Navy |
| Give buttons (header, hero, home CTA) | Cherry Rose |
| Home page key stats | Cherry Rose |
| Track labels, checklist marks | Hunter Green |
| Card and section borders | Steel |
| Shaded sections, callouts | Steel tint (`--paper-muted`, `#F1F1F3`) |
