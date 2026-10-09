---
title: "Hazard ratio"
type: concept
domain: evidence-and-statistics/effect-measures
summary: "A hazard ratio compares the instantaneous event rates of two groups among people who remain at risk in each group."
glossary_anchor: hazard-ratio
aliases: ["hazard ratio", "hazard-ratio", "proportional hazards"]
level: foundation
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints]]"]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect]]","[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
sensitive: false
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
source_checked: 2026-10-09
updated: 2026-10-09
tags: [education, evidence-and-statistics]
---

# Hazard ratio

## In one sentence

A hazard ratio compares the instantaneous event rates of two groups among people who remain at risk in each group.

## The intuition

Picture two groups being followed for the same [survival endpoint](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints). At each moment, ask how quickly new events are occurring among people who have not yet had that event. This conditional rate is the **hazard**. A **hazard ratio (HR)** compares the rates. It is a pace comparison, rather than the fraction of the original group that has had an event by a particular date.

The pace analogy has a limit: the people still at risk change over time. The comparison is not a race between two fixed, unchanged groups.

## How it works

First identify the event, population, numerator group, reference group, and analysis. An HR below 1 indicates a lower estimated event hazard in the numerator group; above 1 indicates a higher hazard. Reversing the comparison reverses the ratio.

Many reports use a **Cox proportional-hazards model**, a statistical model that can compare hazards while accounting for specified baseline factors. **Proportional hazards** means the hazard ratio stays constant over time under the model. The hazards themselves can rise or fall; they need not be constant. [Cox 1972](https://doi.org/10.1111/j.2517-6161.1972.tb00899.x).

When effects change with time, a fitted single ratio can hide early and late differences. Crossing curves are a warning to investigate, but visual inspection alone does not prove or disprove the assumption. Read the reported checks, time-specific results, and [Kaplan–Meier curve](/wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier) alongside the model.

**Risk** is the chance of a defined event by a specified time. A [risk ratio and absolute risk difference](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt) compare those cumulative chances. An HR does not directly provide either quantity. To describe the absolute effect, use the appropriate outcome estimates at the same time point in both groups.

## A worked example

A fictional randomized study compares treatment A with treatment B for time to first recurrence or death, starting at randomization. Its model reports HR 0.70, with a [95% confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) from 0.50 to 0.98. These invented values are for teaching.

Under the stated proportional-hazards analysis, A has an estimated 30% lower event hazard than B. That does **not** mean 30 percentage points fewer people have an event, that 30% of participants benefit, or that any person's recurrence risk falls by exactly 30%.

The reader still needs absolute outcomes at a useful time, adequacy of follow-up, adverse effects, and how well the studied comparison answers the proposed question. The ratio alone cannot supply those answers.

## Why it matters in cancer

Cancer studies often report a time-to-event comparison. Keeping the hazard separate from cumulative risk prevents a striking relative number from becoming an unsupported claim about how many people benefit.

A hazard ratio from an observational biomarker study may describe an association with outcome. It does not automatically describe a treatment effect. An adjusted model accounts for its specified factors; adjustment alone does not guarantee causal interpretation.

## Common confusions

- **HR 0.70 versus 30 percentage points:** the first is a relative hazard comparison; the second is an absolute difference in event probabilities.
- **Constant ratio versus constant rate:** proportional hazards can hold while both groups' hazards change.
- **HR versus median survival:** median survival is a time at which a curve reaches 50%, not a hazard ratio.
- **HR versus number needed to treat:** never calculate that number as `1/HR` or `1/(1 − HR)`.
- **A group comparison versus a personal forecast:** multiplying unrelated prognostic hazard ratios does not create a validated individual prediction.

## Related concepts

- [Absolute risk, relative risk, and number needed to treat](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt) express the effect at a specified time.
- [Confidence intervals](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) express precision under the analysis.
- [Prognostic versus predictive biomarkers](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive) distinguish an outcome association from differences in treatment effect.

## Sources and scope

Source check: 2026-10-09. General statistics education; expert and learner review pending. The study and numerical example are fictional, not personal prognosis estimates.

- [Cox 1972: original proportional-hazards regression method](https://doi.org/10.1111/j.2517-6161.1972.tb00899.x).
- [National Cancer Institute: hazard ratio](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hazard-ratio).
- [Altman and Andersen 1999: time-specific absolute effects and number needed to treat](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the curve and effect](/wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
