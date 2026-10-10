---
title: "Discrimination: ROC area and concordance"
type: "concept"
domain: "evidence-and-statistics/tests-and-prediction"
summary: "Discrimination describes how well a score orders people with different outcomes; ROC area and concordance summarize defined pairwise ranking comparisons."
glossary_anchor: "auroc"
aliases: ["AUC", "AUROC", "ROC AUC", "c-index", "C index", "discrimination"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates]]"]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]"]
sensitive: false
tags: ["education", "evidence-and-statistics"]
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Discrimination: ROC area and concordance

## In one sentence

Discrimination describes how well a score orders people with different outcomes; ROC area and concordance summarize defined pairwise ranking comparisons.

## The intuition

A score can put people in a useful order without giving reliable probabilities. **Discrimination** concerns ordering. Imagine comparing pairs: did the person with the outcome receive a higher score? The analogy stops at observation limits; censored follow-up can leave a pair's order unknown.

## How it works

A **receiver operating characteristic (ROC) curve** plots sensitivity against `1 − specificity` across score thresholds for a binary condition. Its **area under the curve (AUC)** can be interpreted as the probability that a randomly chosen case receives a higher score than a randomly chosen non-case, giving half credit to a tie. AUC 0.5 represents chance ordering under that convention; 1 means perfect ordering in those data. [Hanley and McNeil](https://pubmed.ncbi.nlm.nih.gov/7063747/).

A **concordance index (C-index)** summarizes agreement between predicted ranking and observed outcome ordering. For survival data, event times and **censoring** determine which comparisons are informative. The estimator, follow-up horizon and assumptions must be named. It is not simply the ordinary binary AUC applied to “ever had an event.”

Harrell-style concordance uses observed comparable pairs and can depend on the censoring distribution. Weighting-based estimators such as Uno's address a specified concordance target under their assumptions; they do not remove every follow-up bias. [Uno and colleagues](https://pmc.ncbi.nlm.nih.gov/articles/PMC3079915/).

A **time-specific AUC** is another question: cases have the event by a defined time, while controls remain event-free at that time under the chosen definition. Incomplete follow-up requires a suitable censoring-aware method. Do not pool it with a differently defined C-index.

## Worked example: binary ranking

Two fictional cases receive scores 0.9 and 0.6; two non-cases receive 0.7 and 0.2. There are four case/non-case pairs. The 0.9 case outranks both non-cases; the 0.6 case outranks only 0.2. AUC is `3/4 = 0.75`.

Squaring all four positive scores preserves their order, so AUC stays 0.75. Their numerical values change. If interpreted as probabilities, those values need separate [calibration](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/calibration).

## Worked example: censored ordering

Assume a higher score predicts an earlier event:

| Fictional person | Score | Observation |
|---|---:|---|
| A | 0.8 | Event at month 2 |
| B | 0.2 | Censored at month 1 |
| C | 0.5 | Event at month 4 |

A versus C has known event order and is concordant. B versus A is not an observed comparable pair: B could have an event between months 1 and 2. B versus C is also unknown. Censored people are not automatically controls, nor should every censored person be discarded from all possible comparisons.

## What is measured

| Check | Information needed |
|---|---|
| Input | Locked predictions, reference outcomes, and event/follow-up times if relevant. |
| Output | Named AUC or concordance estimator with uncertainty. |
| Context | Case mix, time horizon, censoring method and independent evaluation set. |
| Failure | Reporting only training performance or changing the outcome definition. |
| Cannot tell | Calibrated probability, a useful decision threshold or benefit from using the score. |

## Why it matters in cancer

A recurrence score may rank risk in one study while its percentages overstate outcomes in another era. Discrimination can also differ with population heterogeneity. Read independent validation and subgroup performance, not only a headline number. [TRIPOD+AI](https://www.bmj.com/content/385/bmj-2023-078378).

## Common confusions

- AUC 0.8 does not mean 80% of patient predictions are correct.
- Binary ROC AUC and censored concordance are not interchangeable.
- Good ordering does not establish good calibration or clinical utility.
- AUC alone does not select a threshold or account for the harms of false calls.

## Try it

Can B in the survival example be called “event-free at month 4”?

**Answer:** No. Observation ended at month 1. That missing status is why the later order cannot be established from this pair.

## Explain it back

Explain how unchanged ranking can coexist with changed, poorly calibrated probabilities.

## Takeaway

Name what is being ranked, which pairs are observable and how the metric handles the time horizon.

## Related concepts

- [Calibration](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/calibration)
- [Positive predictive value](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates)
- [Thresholds and cutpoints](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/thresholds-and-cutpoints)

## Sources and scope

Source check: October 10, 2026. Scores and participants are fictional; expert and learner review remain pending.

- [Hanley and McNeil, 1982: meaning of ROC area](https://doi.org/10.1148/radiology.143.1.7063747).
- [Uno et al., 2011: concordance measures with censored survival data](https://doi.org/10.1002/sim.4154).
- [TRIPOD+AI, 2024: reporting clinical prediction models](https://www.bmj.com/content/385/bmj-2023-078378).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
<!-- END GENERATED USED IN -->
