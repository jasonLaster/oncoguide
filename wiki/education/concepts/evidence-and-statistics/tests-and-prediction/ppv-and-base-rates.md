---
title: "Positive predictive value and base rates"
type: concept
domain: evidence-and-statistics/tests-and-prediction
summary: "Positive predictive value is the probability of the defined condition among people with a positive test result."
glossary_anchor: ppv
aliases: ["ppv"]
prerequisites: []
reviewed: pending
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, evidence-and-statistics]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/index]]"]
updated: 2026-10-08
source_checked: 2026-10-08
review_status: "Expert and learner review pending"
---

# Positive predictive value and base rates

## In one sentence

Positive predictive value is the probability of the defined condition among people with a positive test result.

## The intuition

A good test can generate many false alarms when the condition is rare. Start with people rather than percentages: count how many have the condition, then apply the test to each group. The positive group contains both true and false positives.

## How it works

Sensitivity is the fraction testing positive among people with the condition. Specificity is the fraction testing negative among people without it. Positive predictive value (PPV) reverses that conditioning: among everyone testing positive, what fraction actually has the condition?

Prevalence, or the base rate, determines how many people begin in each group. When sensitivity and specificity are fixed, PPV rises as the condition becomes more common. The clinical population, endpoint definition and timing therefore belong beside a test-performance claim.

These measures also depend on the chosen threshold and reference standard. A response-prediction test must state whether its positive outcome means [pCR (pathologic complete response)](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr), imaging response or another endpoint. Performance in one treatment setting is not automatically transferable to another.

For a hypothetical test with 80% sensitivity and 90% specificity, consider 1,000 people with 10% prevalence. Of 100 affected people, 80 test positive. Of 900 unaffected people, 90 test positive. PPV is **80 / (80 + 90) = 47%**, despite specificity of 90%. At 50% prevalence, 400 true positives and 50 false positives give PPV of about 89%. These are arithmetic examples, not assay-validation results.

## Why it matters in cancer

It explains why specificity alone cannot establish the reliability of a positive result in a cancer-testing population.

## Worked example

The early-response reference formerly said 90% specificity made a positive highly reliable. Specificity alone cannot answer that question. The worked counts above show exactly why the outcome’s frequency is needed before interpreting a positive.

## Common confusions

- 90% specificity is not 90% PPV.
- A negative prediction of early shrinkage does not necessarily rule out eventual pCR.
- AUC summarizes ranking across thresholds; PPV concerns a defined threshold and population.

## Related concepts

[[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive|Prognostic versus predictive]] and [[wiki/diagnostics/early-response-monitoring|the response-test reference]].

## Sources and scope

General teaching, source-checked October 8, 2026. The examples are hypothetical unless a study is explicitly named. Expert and learner review remain pending.

- [FDA guidance on diagnostic test statistical reporting](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/statistical-guidance-reporting-results-studies-evaluating-diagnostic-tests-guidance-industry-and-fda).
- [NCI positive predictive value definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/positive-predictive-value).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
