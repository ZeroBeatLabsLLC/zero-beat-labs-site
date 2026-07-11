# Agent guide — zero-beat-labs-site

Conventions for AI coding agents (Claude Code, Codex) editing this repository.

## Architecture

- **Astro 5 + TypeScript, fully static** (`output: 'static'`), no client-side
  framework, no runtime JavaScript.
- **Routes.** The marketing home is `src/pages/index.astro` with anchored
  sections: `#home`, `#sprint`, `#process`, `#proof`, `#contact` (plus
  unanchored problem/boundaries sections). Alongside it: `/writing/` (the
  `writing` content-collection index), `/writing/<slug>/` (per-article pages
  via `src/pages/writing/[slug].astro`), `/privacy/`, and a 404. Adding a new
  top-level section is a decision for Sam, not an agent; adding a writing post
  is just a new Markdown file in `src/content/writing/`.
- `src/layouts/Article.astro` owns `<head>` metadata (title, description,
  canonical, OG/Twitter, RSS alternate, optional per-page JSON-LD via the
  `structuredData` prop), nav, and footer. Article pages pass a `BlogPosting`
  object; the home page passes none.
- `src/content/writing/` is an Astro content collection (schema in
  `src/content.config.ts`). Drafts (`draft: true`) render in `dev` for review
  but are excluded from production builds, so they never reach the sitemap or
  RSS feed.
- `src/styles/global.css` holds all design tokens as CSS custom properties.
  Retheme by editing tokens, not by scattering new color literals.
- **Sitemap + RSS are generated, never hand-edited.** `@astrojs/sitemap`
  emits `sitemap-index.xml` + `sitemap-0.xml` from the built routes;
  `src/pages/rss.xml.ts` emits `/rss.xml` from the writing collection. Do not
  add a static `public/sitemap.xml` — it would drift the moment routes change.
- `public/` is copied verbatim into the build: `CNAME`, `robots.txt`,
  `favicon.svg`, icons, `og.png`.

## Safe-editing rules

1. **Approved copy is verbatim.** Every headline, CTA, price, deliverable
   list, and body paragraph comes from Sam's vault. Do not paraphrase,
   expand, or "improve" them.
2. **Never fabricate**: no client names, testimonials, outcome claims,
   revenue numbers, or case studies. ZeroBeatLabs claims no client outcomes
   without evidence.
3. **CTA destinations must be valid.** The Upwork buttons stay disabled (or
   anchor-linked) until the Upwork project URL is live — never point them at
   a guessed or unpublished URL.
4. **Synthetic proof stays labeled.** The demonstration is fictional data and
   the copy says so; keep it that way.
5. **No resume/recruiter material or career history here** — that belongs on
   samjolley.com. The footer's one-line founder credit is the maximum.
6. **No analytics, tracking, cookies, third-party embeds, or external fonts.**
7. **No secrets** anywhere in the repo.
8. Run `npm run check && npm run build` before committing; both must pass.

## Verification commands

```sh
npm run check   # diagnostics must be clean
npm run build   # must exit 0; output in dist/
```
