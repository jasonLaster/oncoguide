---
title: "Positive predictive value and base rates"
type: concept
domain: evidence-and-statistics/tests-and-prediction
summary: "Positive predictive value is the probability of the defined condition among people with a positive test result."
glossary_anchor: ppv
aliases: ["ppv", "NPV", "negative predictive value", "base rate"]
prerequisites: []
reviewed: pending
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, evidence-and-statistics]
used_by: ["[[wiki/education/guides/judging-a-test-or-vendor-claim/01-write-the-exact-claim]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/index]]","[[wiki/education/guides/monitoring-residual-disease/index]]"]
updated: 2026-10-09
source_checked: 2026-10-09
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

**Negative predictive value (NPV)** asks the companion question: among those testing negative, what fraction lacks the defined condition? In the 10%-prevalence example, there are 810 true negatives and 20 false negatives. NPV is **810 / (810 + 20) = 97.6%**. At 50% prevalence, there are 450 true negatives and 100 false negatives, so NPV is about 81.8%.

Here sensitivity and specificity were held fixed for a teaching calculation. In real studies, differences in disease spectrum, timing and thresholds can also change performance. A high NPV when the condition is uncommon is not proof that the test detects every affected person.

| Start with this group | Ask this question | Measure |
|---|---|---|
| People with the condition | How many test positive? | Sensitivity |
| People without the condition | How many test negative? | Specificity |
| People who test positive | How many have the condition? | PPV |
| People who test negative | How many lack the condition? | NPV |

## Why it matters in cancer

It explains why specificity alone cannot establish the reliability of a positive result in a cancer-testing population.

## Worked example

A fictional screening report advertises “90% specificity,” then claims every positive result is 90% likely to be correct. The counts above show why the conclusion needs the condition's frequency and sensitivity too. For a negative result, use the negative group as the denominator instead.

## Common confusions

- 90% specificity is not 90% PPV.
- NPV is not one minus sensitivity: they start with different groups.
- A negative prediction of early shrinkage does not necessarily rule out eventual pCR.
- [ROC area (AUC)](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/auc-and-c-index) summarizes ranking across thresholds; PPV concerns a defined threshold and population.

## Related concepts

[[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive|Prognostic versus predictive]] and [[wiki/diagnostics/early-response-monitoring|the response-test reference]].

## Sources and scope

General teaching, source-checked October 9, 2026. The examples are hypothetical unless a study is explicitly named. Expert and learner review remain pending.

- [FDA guidance on diagnostic test statistical reporting](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/statistical-guidance-reporting-results-studies-evaluating-diagnostic-tests-guidance-industry-and-fda).
- [NCI positive predictive value definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/positive-predictive-value).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Write the exact claim before judging it](/wiki/education/guides/judging-a-test-or-vendor-claim/01-write-the-exact-claim)
- [Judge a test or company claim](/wiki/education/guides/judging-a-test-or-vendor-claim/index)
- [Understand blood tests and imaging after treatment](/wiki/education/guides/monitoring-residual-disease/index)
<!-- END GENERATED USED IN -->
