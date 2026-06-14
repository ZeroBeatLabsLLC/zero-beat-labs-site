# zero-beat-labs-site

Buyer-facing service page for ZeroBeatLabs at
[zerobeatlabs.org](https://zerobeatlabs.org). Single-page static Astro site
with anchored sections (`#home`, `#sprint`, `#proof`, `#process`,
`#contact`), deployable to GitHub Pages.

## Local development

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run check      # TypeScript / Astro diagnostics
npm run build      # static output to dist/
npm run preview    # serve dist/ locally
```

## Editing content

- **All page copy** lives in `src/pages/index.astro`, one `<section>` per
  topic. The headlines, CTAs, pricing, and body copy are vault-approved —
  do not paraphrase them.
- **Design tokens** (colors, type, spacing) are CSS custom properties in
  `src/styles/global.css`.
- See `AGENTS.md` before making changes with an AI coding agent.

## Deployment (GitHub Pages)

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository: **Settings → Pages → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds with Astro
   and deploys on every push to `main`.
4. **Settings → Pages → Custom domain:** enter `zerobeatlabs.org` (the
   `public/CNAME` file keeps this setting across deploys). Enable
   **Enforce HTTPS** once the certificate is issued.

### DNS for GitHub Pages

At Porkbun, point the apex domain at GitHub Pages:

- Four `A` records for `zerobeatlabs.org` → `185.199.108.153`,
  `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Optional `CNAME` record for `www` → `<github-username>.github.io`,
  with `www` → apex redirect handled by GitHub Pages.

## Domain remediation — zerobeatlabs.org

Observed 2026-06-11: the domain resolves to a registrar parking page. The
domain is owned and registered at Porkbun. Go-live order:

- [ ] Choose a minimal static hosting target (this repo assumes GitHub Pages).
- [ ] Create the one-page site before changing DNS (this repo).
- [ ] Add the custom domain at the host (GitHub Pages settings, above).
- [ ] Record existing DNS before edits.
- [ ] Replace only the required parking records.
- [ ] Verify TLS issuance and canonical redirect.
- [ ] Confirm no catch-all email or unrelated record is disrupted.
- [ ] Add analytics only when privacy and maintenance justify it (none included).

## Content inventory — remaining placeholders

| Item | Location | Status |
| --- | --- | --- |
| "Discuss your reporting workflow" CTA | `src/pages/index.astro` hero | Points to `#contact` for now; switch to the Upwork project URL once the listing is approved |
| "View the Upwork project" button | `src/pages/index.astro` `#contact` section | Rendered visibly disabled with a note; activate with the Upwork URL once live |
| Proof repository link | `src/pages/index.astro` `#proof` section (HTML comment) | Add once the synthetic demonstration repo is public |
| Contact email | `src/pages/index.astro` `#contact` section | Done 2026-06-14: `hello@zerobeatlabs.org` (Google Workspace alias, receiving) |
| Founder link to samjolley.com | footer | Done 2026-06-12: samjolley.com is live |
| OG image | `public/og.png` + manifest icons | Done 2026-06-12: generated from design tokens and approved copy |
| 404 page | none yet | Drafted locally, uncommitted — copy pending Sam's review |
