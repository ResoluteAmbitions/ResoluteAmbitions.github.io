# Resolute Ambitions — Site

Marketing site for Resolute Ambitions, a scholarship nonprofit for future U.S. military officers.

## Stack

- [Astro](https://astro.build) — static-site generator, zero JS by default
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`
- Lives at `https://resoluteambitions.github.io/` (org-level Pages site — repo is named `ResoluteAmbitions.github.io`). Custom domain `resoluteambitions.com` is owned but not yet wired; to attach it later: add `public/CNAME` with the apex, point DNS A records at GitHub Pages, then set `cname` via `gh api -X PUT repos/ResoluteAmbitions/ResoluteAmbitions.github.io/pages -f cname=resoluteambitions.com`

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serve built site locally
```

## Donations

Donations are wired through a [Donorbox](https://donorbox.org) embed in `src/components/Donorbox.astro`, rendered on `/donate`.

To activate live donations:

1. Complete entity incorporation and obtain an EIN.
2. Create a Donorbox account, verify the EIN, and create a campaign.
3. Set the campaign slug in `src/pages/donate.astro` (`DONORBOX_SLUG`).
4. Update the disclosure copy in `src/pages/donate.astro` once 501(c)(3) is granted.

Until a campaign slug is set, the donate page renders a "coming soon" placeholder.

## Structure

```
src/
  components/   # Header, Footer, Donorbox
  layouts/      # Base layout (head, header, footer wrapper)
  pages/        # index, about, programs, donate, contact
  styles/       # global.css
public/         # CNAME, favicon, robots.txt — copied as-is to /
.github/workflows/deploy.yml   # GH Pages deploy on push to main
```

## Future

- Blog at `/blog` — add MDX integration and a `src/content/blog/` collection
- Scholarship application portal — likely needs a backend (forms, file uploads, review workflow); start with a Google Form embed, graduate to a hosted form service or custom backend when volume warrants
