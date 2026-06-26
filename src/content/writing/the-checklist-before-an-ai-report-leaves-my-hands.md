---
title: The checklist I run before any AI-assisted report leaves my hands
description: Trust in an AI-assisted report comes from the review step, not the model. Here is the actual checklist, scoring rubric, and reconciliation checks I run before one ships.
pubDate: 2026-06-24
draft: true
keywords:
  - reviewing ai output
  - ai report quality checklist
  - ai hallucination check
  - human in the loop
---

An AI draft of a report is confident in a way that has nothing to do with whether it is correct. It will state a wrong number in the same even tone it uses for a right one. So the trust in an AI-assisted report cannot come from the model. It has to come from the step after the model, the review. Here is the one I actually run.

I am publishing it in full on purpose. Showing the quality control is stronger proof than describing it.

## The risk this guards against

AI drafts fail in specific, predictable ways, and those are the ways the checklist is built to catch:

- a number that reads cleanly but does not trace to the source
- an open risk summarized as resolved
- a root cause that no record actually states
- a trend asserted with no comparison period to support it

None of these announce themselves. They look exactly like the correct parts of the draft. That is why the review has to be a deliberate procedure, not a quick read-through.

## The rubric: score it before you trust it

Every report is scored across six dimensions, zero to two on each:

- **Source fidelity.** Does every claim trace to the input data?
- **Reconciliation.** Do the totals and rates add up to the source?
- **Missing-data discipline.** Are gaps shown rather than smoothed over?
- **Executive usefulness.** Can the intended reader act on it?
- **Scope discipline.** Does it stay inside what was asked, with no invented extras?
- **Safety.** No regulated decisions, no sensitive data, no claims it cannot support.

The minimum acceptable score is eleven of twelve, with a hard rule: no zero on source fidelity, reconciliation, or safety. A report can be a little less polished and still ship. It cannot be a little bit wrong on the numbers or the source.

## The deterministic checks

Some of the review is not judgment at all. It is arithmetic, and arithmetic has a right answer. These run mechanically:

- Row counts equal tickets opened.
- Open plus closed equals the total.
- Medians exclude empty values rather than treating them as zero.
- Availability recomputes from the measurement and downtime fields, not from whatever figure appears in the draft.

This is the same separation described in [why "just summarize the files" fails](/writing/why-summarizing-files-fails-for-it-operations-reports/): the calculation is deterministic and gets verified deterministically. The model does not get a vote on whether the numbers are right.

## The narrative review

What is left is the part that genuinely needs a person. Four rules carry most of the weight:

- **No invented root cause.** If the records do not state why, the report does not either.
- **No trend without comparison data.** "Up from last month" requires last month's number to exist.
- **Recommendations are labeled as recommendations.** A suggestion is never dressed up as a finding.
- **Open risks keep their source identifier.** A live risk stays traceable to the ticket it came from, so nothing quietly disappears.

## Why a named human approves

The last line of the checklist is a name. A specific person signs off on the wording before it leaves.

That is not ceremony. Accountability has to land somewhere, and "the AI wrote it" is not a place it can land. When a report drives a staffing or budget or escalation decision, someone has to be answerable for it. The method makes sure that someone is a person, by name, and that they had real checks to rely on rather than just a good feeling about a fluent draft.

The model does not get the final say. A person does.

---

This checklist is the QA layer inside the [fixed-scope IT reporting sprint](/#sprint), and the [live demo](https://demo.zerobeatlabs.org/reconcile) shows the reconciliation half of it running on sample data.
