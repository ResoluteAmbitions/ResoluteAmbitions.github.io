# Site plan

Target page set, agreed 2026-10-24. Context, content, and messaging are still to come from comms/marketing and the founders (see `docs/messaging/`). Each page's open work is tracked in a GitHub issue.

| Page | URL | Covers | Status |
|---|---|---|---|
| Home | `/` | Mission, the problem, the response, Give CTA | Live; copy to be refreshed from messaging |
| Our Story | `/our-story` | The founders' story, purpose, why it matters | Live with mission copy; founders' story placeholder |
| How It Works | `/how-it-works` | Eligibility, what we fund, selection, how money is paid | Live |
| Apply | `/apply` | Who can apply, application form and timeline | Stub: applications not yet open |
| Give | `/give` | Donorbox embed, pending 501(c)(3) language | Live; Donorbox placeholder until the campaign is approved |
| For Schools and Units | `/for-schools-and-units` | Partner information for schools, ROTC programs, units | Stub |
| Newsletter | `/newsletter` | Newsletter signup | Stub: email signup until a provider is chosen |

`/contact` stays, linked from the footer rather than the main nav.

## Navigation

- Header: Our Story · How It Works · Apply · For Schools & Units · **Give** (Cherry Rose button, visible on mobile too)
- Footer: every page above, plus Newsletter and Contact

## Old URLs

Redirected in `astro.config.mjs`: `/about` → `/our-story`, `/programs` → `/how-it-works`, `/donate` → `/give`.

## Pending 501(c)(3) language

Must appear on Give (and stays in the footer) until the IRS grants recognition:

> **501(c)(3) status: pending.** Resolute Ambitions has filed for federal tax-exempt recognition. Contributions made now will be retroactively tax-deductible to our filing date upon IRS approval. Please consult your tax advisor for guidance specific to your situation.

Once granted, update `src/pages/give.astro`, `src/pages/our-story.astro` (Status section), and the footer.

## Placeholders

Content still to come is marked in the page source with `<!-- TODO(content): ... -->`. Find them with:

```bash
grep -rn 'TODO(content)' src
```
