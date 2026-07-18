# Agent guide: zero-beat-labs-site

Conventions for AI coding agents (Claude Code, Codex) editing this repository.

## Architecture

- **Astro 5 + TypeScript, fully static** (`output: 'static'`), no client-side
  framework, no runtime JavaScript.
- **Routes.** The marketing home is `src/pages/index.astro` with preserved
  anchors `#home`, `#sprint`, `#process`, `#proof`, `#faq`, and `#contact`.
  The service architecture is `/services/`, `/services/agentic-workflows/`,
  and `/services/it-reporting/`. Alongside it: `/writing/`,
  `/writing/<slug>/`, `/privacy/`, `/links/`, and a 404.
- `src/layouts/SiteShell.astro` owns shared metadata, the stable global
  navigation, active-page state, mobile `<details>` menu, and footer for the
  home, service, writing, privacy, and 404 routes. `Article.astro` wraps that
  shell for writing and privacy content. `LinkHub.astro` remains intentionally
  specialized and does not use the global shell.
- Home passes the broadened Organization schema. Each service page passes a
  page-specific `Service` schema. Writing articles pass `BlogPosting`.
- `src/content/writing/` is an Astro content collection (schema in
  `src/content.config.ts`). Drafts (`draft: true`) render in `dev` for review
  but are excluded from production builds, so they never reach the sitemap or
  RSS feed.
- `src/styles/global.css` holds all design tokens as CSS custom properties.
  Retheme by editing tokens, not by scattering new color literals.
- **Sitemap + RSS are generated, never hand-edited.** `@astrojs/sitemap`
  emits `sitemap-index.xml` + `sitemap-0.xml` from the built routes;
  `src/pages/rss.xml.ts` emits `/rss.xml` from the writing collection. Do not
  add a static `public/sitemap.xml`; it would drift the moment routes change.
- `public/` is copied verbatim into the build: `CNAME`, `robots.txt`,
  favicons, icons, the general `og.png`, the agentic `og-agentic.png`, and
  the approved horizontal `logo.png` lockup.

## Safe-editing rules

1. **Approved copy is verbatim.** Every headline, CTA, price, deliverable
   list, and body paragraph comes from Sam's vault. Do not paraphrase,
   expand, or "improve" them. The canonical implementation source for the
   governed service architecture is
   `Agentic-Workflows-Site-Plan-2026-07-18.md` plus its companion review and
   approved final-corrections objective.
2. **Keep the service boundary explicit.** "No production credentials" and
   "no system access" describe only the IT Reporting Workflow Sprint.
   Governed Agentic Workflows may use client-owned, revocable, scoped access.
   Never ask for client passwords.
3. **Authority copy is precise.** Consequential, customer-facing, financial,
   destructive, and record-of-truth actions require named human approval.
   Lower-risk automation is allowed only when explicitly pre-authorized in the
   approved workflow specification, logged, bounded, and recoverable.
4. **No public future-rung framing.** Do not use employee, teammate, autonomous
   staff, or staff-replacement language for the current offer. The Lead
   Response Engine remains a separate held SKU.
5. **Never fabricate**: no client names, testimonials, outcome claims,
   revenue numbers, or case studies. ZeroBeatLabs claims no client outcomes
   without evidence.
6. **CTA destinations must be valid.** The Upwork buttons stay disabled (or
   anchor-linked) until the Upwork project URL is live, never point them at
   a guessed or unpublished URL.
7. **Synthetic proof stays labeled.** The reporting demonstration and all
   illustrative agentic artifacts stay labeled. Public pages must never expose
   vault paths, internal operating details, client data, or confidential source
   material.
8. **No resume/recruiter material or career history here.** That belongs on
   samjolley.com. The footer's one-line founder credit is the maximum.
9. **No analytics, tracking, cookies, third-party embeds, or external fonts.**
10. **No secrets** anywhere in the repo.
11. Run `npm run check && npm run build` before committing; both must pass.
    Validate the generated sitemap, canonicals, structured data, internal
    links, legacy anchors, zero runtime JavaScript, responsive layouts, focus,
    contrast, touch targets, and pre-merge social-card crop and text. Verify
    the live page and social unfurl only after deployment.

## Verification commands

```sh
npm run check   # diagnostics must be clean
npm run build   # must exit 0; output in dist/
```
