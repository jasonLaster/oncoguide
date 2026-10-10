---
title: "P-values and multiple testing"
type: "concept"
domain: "evidence-and-statistics/effect-measures"
summary: "A p-value describes how incompatible the observed data are with a specified statistical model, while multiple testing creates more opportunities for misleading findings."
glossary_anchor: "p-value"
aliases: ["p-value", "p value", "multiple testing", "multiplicity"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval]]"]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
sensitive: false
tags: ["education", "evidence-and-statistics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# P-values and multiple testing

## In one sentence

A p-value describes how incompatible the observed data are with a specified statistical model, while multiple testing creates more opportunities for misleading findings.

## The intuition

If you search many drawers, you have more chances to find something surprising. A statistical test asks how surprising a result would be under a stated model. Searching many outcomes and showing only the most striking one hides the size of the search. The analogy stops at probability: the tests may be related, and their assumptions matter.

## How it works

A **null hypothesis** specifies the comparison being tested, such as no treatment effect on a defined endpoint. A p-value is calculated under that hypothesis and the other analysis assumptions. It concerns results at least as extreme as the observed one under the chosen test.

It is not the probability that the hypothesis is true, that the result occurred “by chance,” or that a selected finding is false. A small value also does not measure effect size. [American Statistical Association statement](https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf).

**Multiple testing** occurs when many hypotheses are examined. A confirmatory trial may plan an order of endpoints or allocate its error allowance among comparisons. This plan should be read beside each claim. A later exploratory analysis has a different evidentiary role. [FDA: multiple endpoints](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/multiple-endpoints-clinical-trials).

One possible method, the **Bonferroni correction**, divides a family-level error allowance by the number of tests. Other methods can use an ordered testing plan or control a different error quantity, such as the [false discovery rate](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/false-discovery-rate). The right method depends on the question and assumptions.

## Why it matters in cancer

Large molecular datasets contain many genes, pathways and possible subgroups. Finding one small p-value after examining many choices can generate a useful hypothesis. It cannot erase the unreported choices or establish drug benefit.

Keep the effect estimate and [confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) beside the test result. Check the [analysis plan](/wiki/education/concepts/evidence-and-statistics/study-design/exploratory-vs-prespecified-analysis) and whether the proposed action was actually studied.

## Worked example

Imagine 20 independent tests, each with a 5% false-positive rate when its null hypothesis is true. Assume every null is true. The probability of at least one false positive is `1 − 0.95^20`, about **64%**. This is invented arithmetic under independence, not a rate measured in cancer research.

For that same family, dividing 0.05 by 20 gives a Bonferroni threshold of 0.0025 per test. A p-value of 0.03 passes the unadjusted 0.05 threshold but does not pass that planned correction. Real endpoints can be correlated; the 64% calculation cannot simply be carried over.

## Common confusions

- “Not significant” does not prove no effect.
- A p-value of 0.03 does not mean a 97% probability of benefit.
- Passing a statistical threshold does not establish clinical importance.
- A multiplicity-adjusted result cannot repair biased measurements or an irrelevant comparison.

## Try it

A report tested 50 pathways and mentions only one with p = 0.04. What is missing?

**Answer:** The full search, analysis choices, correction method, estimated effect and uncertainty. Write down the hypothesis rather than treating the selected pathway as an established dependency.

## Related concepts

- [False discovery rate](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/false-discovery-rate)
- [Prespecified and exploratory analysis](/wiki/education/concepts/evidence-and-statistics/study-design/exploratory-vs-prespecified-analysis)

## Sources and scope

Source check: October 9, 2026. Hypothetical arithmetic; expert and learner review remain pending.

- [American Statistical Association, 2016: principles for p-value interpretation](https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf).
- [FDA, 2022: multiple endpoints in clinical trials](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/multiple-endpoints-clinical-trials).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
