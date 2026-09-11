# Terms implementation and AI review record

Author: Codex (OpenAI). Date: 11 September 2026.
Scope: Terms page, Stripe-related privacy amendment, footer links, Order template and owner checkout instructions. These are AI terms-risk reviews, not attorney review or certification of enforceability.

## Independent draft reviews

### Adversarial Review - gpt-5.6-sol - 2026-09-11

Verdict: approve-with-changes. Fresh session, blind to other findings.
Confirmed text/plan issues: refund calculation could deadlock; Order and accepted Terms version were not bound together; partial-termination assignment was ambiguous; confidentiality lacked exit/incident boundaries; reporting promises needed explicit preservation.
Plausible operational issues: cancellation timing/retries, revision vs correction, failed refund handling, and live checkout disclosure consistency.
Corrections: explicit undisputed refund deadline; version archive and private acceptance-record checklist; signed present-tense assignment for identified paid deliverables; return/deletion/incident clauses; reporting scope preserved; cancellation timing, failed refunds and operational checklist added.
The review labeled a possible live-link cutover gap CONFIRMED; local reconciliation narrows it to a conditional operational risk because no live Stripe inventory was available. The owner checklist covers cutover without asserting existing links are deficient or changing them.

### Adversarial Review - gpt-5.6-terra - 2026-09-11

Verdict: approve-with-changes. Fresh session, blind to the first review.
Confirmed issues: signed assignment and acceptance/correction process needed implementation details.
Plausible issues: provider data-handling boundaries and consent/version evidence.
Corrections: compact signed Order template with assignment, ten-business-day review/correction defaults, no acceptance by silence, data-handling addendum, and accepted-version records.

### Independence and coverage

Gemini subscription attempt timed out without findings and does not count as a completed review. Sol and Terra are distinct models in the same family as the author; cross-vendor independence was not achieved. The owner explicitly authorized both fallback reviews.

Repository and live website facts were checked by the author. Reviews did not verify enforceability, executed Orders, Stripe account settings, inbox operation, or client data-processing practices. Builds, visual checks, and final implementation review are recorded below when completed.

## Policy scenario reconciliation

| Scenario | Expected behavior in implemented text |
| --- | --- |
| Cancel before work | Refund unused prepayment, less only expressly approved noncancelable costs |
| Partial milestone | Use agreed values/rates; no retrospective rate; itemized accounting |
| Disputed allocation | Undisputed refund within ten business days; remainder after resolution |
| Cancel near renewal | Receipt governs; future renewal stops; paid support continues |
| Failed refund | Notification and lawful alternative; failed initiation does not discharge debt |
| Nonconforming deliverable | No-charge correction separate from revision; attributable refund if unresolved |
| Partial termination | Paid identified deliverables assigned without requiring payment for canceled work |
| Changed Terms or price | No retroactive changes; ongoing material changes require agreement |

## Final implementation review

### Adversarial Review - gpt-5.6-sol - final implementation - 2026-09-11

Verdict: approve-with-changes. Fresh session; reviewer explicitly reported no access to earlier findings and performed finder/refuter/verifier passes on the inlined implemented Terms, privacy text, Order template, checkout instructions and footer diff.

| Finding | Scenario | Resolution |
| --- | --- | --- |
| CONFIRMED: acceptance-refund wording differed | A rejected deliverable still has limited utility; Terms and Order could yield different refunds | Both now refund fees attributable to rejected affected work |
| CONFIRMED: unavailable support lacked valuation | Support stops halfway through a paid period | Default is prepaid fee multiplied by unavailable time divided by total paid-period time; a different allocation must be agreed before purchase |
| CONFIRMED: Michigan venue was permissive | Another competent forum could be chosen despite intended Michigan venue | Named Michigan courts are now exclusive, retaining mandatory-law and jurisdiction qualifications |
| PLAUSIBLE: client-data scope included ordinary billing | Stripe could appear to need a separate operational-data addendum | Operational/service-delivery data distinguished from routine Stripe billing handled by checkout disclosures and Privacy Policy |

Refuted scenarios: automatic deposit forfeiture, assignment conflict with reusable components, contradiction in confidentiality/liability allocation, and retroactive or checkbox-only contracting. Author verified and applied the reviewer's specific corrections to the page, version archive and Order template. No material finding remains unaddressed.

Could-not-check resolution: archive consistency checked against all 38 legal paragraphs; generated routes, footer links, diagnostics, build and browser behavior checked locally. Live Stripe settings, signatures, operational practices and enforceability remain unverified. Existing provider-specific Web3Forms retention claims were preserved, not independently re-audited; the review does not certify them.

## Verification

- Final npm run check: 18 files, zero errors, warnings or hints.
- Final npm run build: 13 pages generated successfully.
- Headless Edge: Terms, Privacy and Links pages at 320, 390, 768, 1440 and 1920px; HTTP 200, one H1, correct canonical, both legal footer links, no horizontal overflow or runtime scripts.
- All local links and fragment targets checked across 13 generated HTML files: none broken. Terms included in generated sitemap.
- Keyboard: visible skip-link and Terms-navigation focus; skip link works. Project-refund anchor remains below sticky header on mobile.
- New Terms navigation and legal footer targets are at least 44px high and wide. Body text contrast on white measured 17.16:1.
- Mobile and desktop screenshots visually inspected for title, legal text, refunds and footer. Existing design and social-card asset reused.
- An initial QA focus assertion used programmatic focus after a pointer click and did not activate :focus-visible. Replaced with real Tab navigation; final assertion passed. No product focus workaround was needed.
- Version archive matches all 38 public legal paragraphs; signed-order fields are deliberately unfilled template fields.
- Policy scenarios above checked against the implemented text. These are text-level checks, not live Stripe integration tests.
- No merge, deployment, live Stripe change, or real payment performed.
