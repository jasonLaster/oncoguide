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
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Discrimination: ROC area and concordance

## In one sentence

Discrimination describes how well a score orders people with different outcomes; ROC area and concordance summarize defined pairwise ranking comparisons.

## The intuition

A score can put people in the right order while giving everyone the wrong probability. Ranking is like sorting parcels from lighter to heavier. Calibration asks whether the numbers on the scale are right. A good ordering does not answer both questions.

## How it works

For a binary outcome, a **receiver operating characteristic (ROC) curve** plots sensitivity against one minus specificity as the decision threshold changes. The **area under the curve (AUC)** summarizes this ranking. ROC AUC is the probability that a randomly chosen person with the defined outcome has a higher score than a randomly chosen person without it, adding half credit when their scores tie.

An AUC of 0.5 corresponds to chance ordering for that comparison; one indicates perfect separation in the evaluated sample. Values below 0.5 can reflect reversed ordering. None supplies the probability that a particular prediction is correct. [Hanley and McNeil: interpreting ROC area](https://doi.org/10.1148/radiology.143.1.7063747).

For time-to-event outcomes, a **concordance index**, or c-index, assesses ranking for comparable pairs. People can leave observation before their outcome is known. How [censoring](/wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier) and prediction time are handled changes the comparison. An all-follow-up c-index and an AUC at a specified time are different summaries. [Uno and colleagues: survival concordance](https://doi.org/10.1002/sim.4154).

## Why it matters in cancer

Risk models and response tests often advertise one ranking number. Retain the endpoint, prediction horizon, population, independent evaluation data and uncertainty. A high AUC does not establish [calibration](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/calibration), useful action thresholds or better outcomes from using the score.

## Worked example

Two fictional people had the outcome and received scores of 0.9 and 0.6. Two without it received 0.7 and 0.2. Compare all four outcome/non-outcome pairs: 0.9 beats both scores; 0.6 beats 0.2 but not 0.7. Three of four pairs are correctly ordered, giving AUC 0.75. There are no ties in this tiny illustration.

Replacing each score with its square keeps the ordering and AUC unchanged. It changes the numerical probabilities if the scores are presented as risks. That is why ranking cannot certify the probabilities. Four people would be far too few for a reliable clinical evaluation.

## Common confusions

- AUC 0.75 does not mean a 75% chance that every positive prediction is correct.
- A ROC curve is different from a precision–recall curve; always name which area is reported.
- A score can discriminate well and be poorly calibrated.
- There is no universal AUC cutoff that proves clinical usefulness.
- Training performance can be optimistic; evaluate the intended new use on suitably independent data.

## Try it

A model ranks every participant correctly but assigns everyone a risk above 90%. Only a small fraction has the outcome. What does the ranking result miss?

**Answer:** Whether those high probabilities agree with observed outcomes. Calibration and the benefit of any proposed action need separate evaluation.

## Related concepts

- [Calibration](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/calibration)
- [Positive predictive value](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates)
- [Thresholds and cutpoints](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/thresholds-and-cutpoints)

## Sources and scope

Source check: October 9, 2026. Scores and participants are fictional; expert and learner review remain pending.

- [Hanley and McNeil, 1982: meaning of ROC area](https://doi.org/10.1148/radiology.143.1.7063747).
- [Uno et al., 2011: concordance measures with censored survival data](https://doi.org/10.1002/sim.4154).
- [TRIPOD+AI, 2024: reporting clinical prediction models](https://www.bmj.com/content/385/bmj-2023-078378).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
<!-- END GENERATED USED IN -->
