---
title: Reconciliation as a trust primitive
description: Matching every material number back to its source is one of the cheapest things you can do to make an AI-assisted document trustworthy, and it is often the step that gets skipped.
pubDate: 2026-07-11
draft: false
keywords:
  - reconciliation
  - trustworthy ai reporting
  - ai report accuracy
  - reconcile totals to source
---

There is one check that does more for the trustworthiness of an AI-assisted document than most prompt or model changes. It is also the least glamorous. You take every material number in the output and trace it back to the source it came from. If it does not trace, it does not ship. I call this reconciliation, and I treat it as a primitive: a small, boring operation you build everything else on top of.

## The problem it solves

A language model produces fluent text. Fluent and correct are different properties, and the gap between them is where trust quietly dies. A report can read perfectly and still say twenty-six when the file holds twenty-four, or describe an open risk as resolved because the surrounding sentences sounded conclusive. These are not loud errors. They are plausible, and plausible is exactly what a busy reviewer signs off on.

Prompting reduces this. It does not remove it, because it is not a mistake in the wording. It is a property of a tool optimized for readable continuation rather than arithmetic or source fidelity. So you stop trying to make the model reliable at the thing it is not reliable at, and you add a step that checks it.

## What reconciliation actually is

Reconciliation is not review in the vague sense of reading it over. It is a specific, mechanical operation:

1. Identify every material figure in the output, meaning any number a decision could turn on. Totals, rates, counts, dates.
2. For each one, find the source it should come from. A row count, a sum of a column, a computed rate with a stated numerator and denominator.
3. Recompute it from the source, not from the narrative.
4. Compare. If the number in the prose does not match the number from the data, the data wins and the sentence is rewritten or removed.

The single most useful instance is the simplest. Opened plus carried-over should equal closed plus still-open. A handful of identities like that, one for each class of figure, closes most of the gap between a document you can trust and one you only hope is right.

## Why it is a primitive, not a nicety

Two reasons it belongs at the bottom of the stack rather than at the end of a checklist.

First, it is cheap. Once you know which figure comes from which source, recomputing and comparing is arithmetic. That part costs seconds and needs no judgment, which means it can run every time, without fatigue deciding whether it is worth it.

Second, it composes. Once every number is reconciled, the review that remains is about things that actually need a person: wording, context, whether a recommendation is labeled as a recommendation, whether a gap is visible. You have removed a class of error humans are bad at catching, the plausible but wrong number, and left the ones a human is good at.

## It generalizes past reports

I came to this in IT operations reporting, where the numbers are ticket counts and uptime. But the primitive is not about IT. Any document where a model assembled figures a reader will act on has the same exposure and the same cheap fix. An invoice summary, a metrics recap, a financial rollup, a compliance count. If a number in the output cannot be traced to a source, it is a claim, not a fact, and it should be treated like one.

The rule underneath is small enough to say in a sentence. Reconcile every material number to its source, make the missing data visible, and let a named person approve the wording. The model still does the part it is good at, turning a correct set of facts into clear prose. It is just no longer trusted with the arithmetic or the fidelity check.

A fluent paragraph can still report numbers that do not add up. Reconciliation is how you make sure it does not, and how you can show your work when someone asks.

This is the discipline behind the [fixed-scope IT reporting sprint](/#sprint), and you can [watch it run on sample data](https://demo.zerobeatlabs.org/reconcile).
