# Stripe checkout launch handoff

This change supplies website legal pages and a draft PR. It does not configure Stripe, merge, deploy, create products, or process payments. Never store customer, payment, credential, or signed-contract records in this public repository.

## Publish and enable sales

1. Review and merge the PR when ready. The existing main-branch GitHub Pages workflow deploys the site.
2. Verify HTTPS 200 for https://zerobeatlabs.org/terms/ and https://zerobeatlabs.org/privacy/, the Terms version/date, and both footer links. Version 1.0 is dated 11 September 2026 and applies only after publication and acceptance, never retroactively.
3. In Stripe Public details, enter those Terms and Privacy URLs and verify the public support contact details.
4. Inventory each active Payment Link. Set required terms agreement on each applicable link, including existing links; setting the account URL alone does not enable the checkbox.
5. Complete and sign the [Order](legal/order-template.md), including assignment where relevant. Associate its ID/version with the purchase and give the client the full Order and exact Terms before payment. A generic checkbox does not identify a private custom Order on its own.
6. In test mode, test the corresponding product/price/link settings, required checkbox, billing details, receipt, renewal/cancellation and refund paths. Test-mode settings do not automatically prove live settings match; inspect each live link's corresponding configuration without submitting a live payment.
7. Only start using or sharing a live link when the legal pages, accepted Order and required consent are in place. If an existing link is already taking payments, the owner must coordinate its cutover so no purchase relies on unaccepted new Terms. This task does not deactivate links.
8. Retain the signed Order, exact Terms snapshot, consent result and acceptance/payment timestamps in access-controlled business records. Do not rely on a mutable URL as the only evidence.

## Product consistency checklist

| Item | Reporting Diagnostic | Other projects | Recurring support |
| --- | --- | --- | --- |
| Billing | One-time; no retainer/lock-in | Agreed deposit/milestones | Explicit interval, amount, first charge, renewal date/time/time zone |
| Delivery | Seven calendar days after complete requirements | Order schedule and dependencies | Named availability and responsibilities |
| Included | 45-minute handoff; one revision | Identified deliverables/handoff | Bounded support scope |
| Corrections | Separate from included revision | Acceptance criteria and correction period | Service obligations and unavailable-service refund |
| Cancellation | Agreed earned work/costs; refund unused balance | Same, with partial milestone valuation | Before renewal; support through paid period |
| Currency/tax | Explicit currency and applicable tax treatment | Same | Same |

Use this table when creating actual products; do not invent SKU prices or tax registrations. Audit any sales entry page and checkout for accurate scope, contact, fulfillment, currency, refunds and cancellation. The marketing site currently uses scoped pricing rather than public price amounts.

## Cancellation and refund operations

- Treat the email server's accepted timestamp as receipt, not the time a person reads it. Confirm requests and record the phone fallback when used.
- Disclose renewal timing in the Order. Configure cancellation to stop future renewal at paid-period end while retaining paid support.
- Ensure payment retries and nonpayment suspension honor the accepted schedule and ten-business-day notice/cure rule. Cancellation does not erase a properly owed earlier amount; a retry must not collect a canceled future renewal.
- On project cancellation, itemize earned work at pre-agreed values/rates and approved noncancelable costs. Initiate the undisputed refund within ten business days even if the rest is disputed.
- Do not impose a newly invented hourly rate when partial-work valuation was omitted. Propose a documented allocation and resolve the disputed amount separately.
- Track refunds to success. If a refund fails, notify the customer and arrange a lawful alternative. Reconcile chargebacks to avoid duplicate recovery without limiting customer dispute rights.
- Preserve scoped delivery and no-charge correction commitments. Do not consume a discretionary revision to fix a deliverable that fails acceptance criteria.
- Do not change recurring prices without advance notice and affirmative agreement; otherwise end support at paid-period end.

## Versioning

The Astro page is the current public Terms. [Version 1.0](legal/terms-v1.0-2026-09-11.md) is its accepted-text archive. Keep their text aligned before first publication; after first publication, retain that archive unchanged, create a new dated/versioned archive for later revisions, and record which version each Order accepts. Git history supports auditability but does not replace customer acceptance records.

## Sources and limits

- [Stripe website checklist](https://docs.stripe.com/get-started/checklist/website)
- [Payment Link terms acceptance](https://docs.stripe.com/payment-links/customize)
- [Stripe Privacy Policy](https://stripe.com/privacy)
- [Copyright ownership and written transfers](https://www.copyright.gov/title17/92chap2.html)

Actual Stripe catalog, permissions, live links, retries, tax configuration, cancellation inbox and e-signature records were not inspected. No claim of Stripe approval, comprehensive PCI compliance, or legal enforceability is made. The terms-risk reviews are AI reviews, not attorney review.
