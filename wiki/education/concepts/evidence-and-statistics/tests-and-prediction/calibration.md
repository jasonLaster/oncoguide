---
title: "Calibration of predicted probabilities"
type: "concept"
domain: "evidence-and-statistics/tests-and-prediction"
summary: "Calibration describes how closely predicted probabilities agree with observed outcome frequencies in a defined population and time period."
glossary_anchor: "calibration"
aliases: ["calibration", "calibrated probability"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/tests-and-prediction/auc-and-c-index]]"]
used_by: ["[[wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation]]","[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]"]
sensitive: false
tags: ["education", "evidence-and-statistics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Calibration of predicted probabilities

## In one sentence

Calibration describes how closely predicted probabilities agree with observed outcome frequencies in a defined population and time period.

## The intuition

If a weather service says “20% chance of rain” on many comparable days, you would hope about one in five turns rainy. It can predict which days are wetter without getting that percentage right. Cancer-risk models face the same distinction between [ordering](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/auc-and-c-index) and probability agreement. The weather analogy does not supply evidence about a patient's outcome.

## How it works

Calibration compares predictions with observed outcomes at the same defined horizon. Grouped observations or a smooth calibration curve can show whether predictions are systematically too high, too low or too extreme. Finite samples create uncertainty; a rough comparison is not an exact verdict.

**Calibration in the large** compares the overall predicted event frequency with the observed frequency. That average can look right while predictions for lower- and higher-risk people remain wrong. A **calibration slope** examines how the strength of predictions compares with outcomes under a specified model. A slope of one and a suitable intercept are useful targets, but they do not guarantee agreement everywhere. [Riley and colleagues: external validation](https://www.bmj.com/content/384/bmj-2023-074820).

Changing treatment era, eligibility, measurement or baseline event frequency can change calibration. **Recalibration** updates parts of a model to fit a new setting; it creates a version that needs its own evaluation. A familiar calculator name cannot stand in for that record. [TRIPOD+AI reporting guidance](https://www.bmj.com/content/385/bmj-2023-078378).

## Why it matters in cancer

A person may use a predicted recurrence probability to understand a discussion. Before reading it as a reliable probability, check the model's endpoint, time origin, inputs and relevant independent validation. Even good calibration does not establish that choosing treatment with the model improves outcomes.

## Worked example

<img src="./images/ranking-and-calibration-light.png" alt="Two panels show correctly ordered fictional groups with observed event rates of 10% and 30%, while predicted risks of 20% and 40% overstate both groups' outcomes." data-theme-pair>

*Correct ordering can coexist with probabilities that are too high; the fictional counts below share one five-year endpoint.*

Two equally sized fictional groups each contain 100 people assessed for the same event by five years, with complete follow-up.

| Group | Model's predicted risk | Observed events |
|---|---|---|
| Lower scores | 20% | 10 of 100 |
| Higher scores | 40% | 30 of 100 |

The model distinguishes the groups in the right direction. Both percentages overstate their observed frequencies. Overall it predicts 60 events but observes 40. These invented counts illustrate poor agreement; they do not measure any cancer model's performance.

Now imagine predictions of 10% and 50%, with 20 and 40 events in those groups. Both the predicted and observed total are 60 events, yet each group is miscalibrated. Checking only the overall average would miss this.

## Common confusions

- A high AUC does not establish calibration.
- Calibration belongs to a population, endpoint and horizon, not every future setting.
- A calibrated 20% prediction cannot tell which particular person will have the event.
- A narrow range displayed by software is not evidence that model or input uncertainty is small.
- A model can agree with observed frequencies while offering no useful treatment decision.

## Try it

A calculator was validated before a new treatment became routine. Does its original validation settle the probabilities under the new treatment?

**Answer:** No. The new treatment context needs evaluation. Do not repair the output by multiplying unrelated trial effect estimates.

## Related concepts

- [Discrimination](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/auc-and-c-index)
- [Clinical validity and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility)
- [Confidence intervals](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval)

## Sources and scope

Source check: October 9, 2026. Examples are fictional; expert and learner review remain pending.

- [Riley et al., 2024: external validation and calibration evaluation](https://www.bmj.com/content/384/bmj-2023-074820).
- [Van Calster et al., 2019: calibration definitions and evaluation](https://doi.org/10.1186/s12916-019-1466-7).
- [TRIPOD+AI, 2024: required prediction-model reporting](https://www.bmj.com/content/385/bmj-2023-078378).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the validation behind the claim](/wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
<!-- END GENERATED USED IN -->
