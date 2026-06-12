# Agent guide — zero-beat-labs-site

Conventions for AI coding agents (Claude Code, Codex) editing this repository.

## Architecture

- **Astro 5 + TypeScript, fully static** (`output: 'static'`), no client-side
  framework, no runtime JavaScript.
- **Single page.** The entire site is `src/pages/index.astro` with anchored
  sections: `#home`, `#sprint`, `#process`, `#proof`, `#contact` (plus
  unanchored problem/boundaries sections). Do not add routes — the launch
  design is deliberately one page. If the site ever needs real pages, that is
  a decision for Sam, not an agent.
- `src/styles/global.css` holds all design tokens as CSS custom properties.
  Retheme by editing tokens, not by scattering new color literals.
- `public/` is copied verbatim into the build: `CNAME`, `robots.txt`,
  `sitemap.xml`, `favicon.svg`.

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
