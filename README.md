# Resolute Ambitions — Site

Marketing site for Resolute Ambitions, a scholarship nonprofit for future U.S. military officers.

## Stack

- [Astro](https://astro.build) — static-site generator, zero JS by default
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`
- Currently serves at `https://resoluteambitions.github.io/` only — the custom domain `resoluteambitions.com` is intentionally **detached** until the site is ready to publish. DNS for the apex is unwired in Cloudflare; email routing on the domain remains active.
- To re-attach the custom domain later: (1) add `public/CNAME` with `resoluteambitions.com`, (2) in Cloudflare, add A records for the apex (185.199.108.153, .109.153, .110.153, .111.153) — optionally AAAA and a `www` CNAME to `resoluteambitions.github.io` — proxied through CF, (3) `gh api -X PUT repos/ResoluteAmbitions/ResoluteAmbitions.github.io/pages -f cname=resoluteambitions.com`, (4) revert `site:` in `astro.config.mjs` and `siteUrl` in `src/layouts/Base.astro` and the sitemap URL in `public/robots.txt` to `resoluteambitions.com`, and remove the `Disallow: /` in `robots.txt`.

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
