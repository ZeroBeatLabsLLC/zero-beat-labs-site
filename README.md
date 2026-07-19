# zero-beat-labs-site

Buyer-facing service site for ZeroBeatLabs at
[zerobeatlabs.org](https://zerobeatlabs.org). It is a fully static Astro site
for Governed Agentic Workflows and the IT Reporting Workflow Sprint,
deployable to GitHub Pages with zero runtime JavaScript.

## Local development

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run check      # TypeScript / Astro diagnostics
npm run build      # static output to dist/
npm run preview    # serve dist/ locally
```

## Architecture and editing

- `src/layouts/SiteShell.astro` owns shared metadata, global navigation,
  active-page state, the native mobile menu, and footer. Home, services,
  writing, privacy, and 404 routes use it; the link hub keeps its specialized
  layout.
- Service routes live at `/services/`, `/services/agentic-workflows/`, and
  `/services/it-reporting/`.
- The homepage preserves `#home`, `#sprint`, `#process`, `#proof`, `#faq`, and
  `#contact` for published deep links.
- Headlines, CTAs, pricing, claims, and body copy are vault-approved. Follow
  `AGENTS.md`; do not blur the no-credential Reporting Sprint boundary with
  live, client-controlled agentic implementations.
- **Design tokens** (colors, type, spacing) are CSS custom properties in
  `src/styles/global.css`.
- See `AGENTS.md` before making changes with an AI coding agent.

## Validation workflow

Before commit, run `npm run check` and `npm run build`, then confirm the new
routes in the generated sitemap, canonical and structured-data output, legacy
anchors, internal links, and the absence of runtime JavaScript, analytics,
trackers, and external fonts. Check 320px, 390px, tablet, desktop, and wide
desktop layouts, keyboard navigation, focus, contrast, 44px touch targets,
and the social-card text and crop. Live unfurl validation happens only after
the GitHub Pages deployment.

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
| Public service pricing | All service pages | Intentionally omitted; pricing is tailored to business requirements and shared as the engagement is scoped after a workflow mapping call |
| Contact email | Shared shell and contact sections | `hello@zerobeatlabs.org` (Google Workspace alias, receiving) |
| Founder link to samjolley.com | footer | Done 2026-06-12: samjolley.com is live |
| General OG image | `public/og.png` + manifest icons | Existing approved brand asset |
| Agentic OG image | `public/og-agentic.png` | Validate locally before merge; verify live unfurl after deployment |
