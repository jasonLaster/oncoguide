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
source_checked: 2026-10-10
updated: 2026-10-10
tags: [education, evidence-and-statistics]
---

# Hazard ratio

## In one sentence

A hazard ratio compares the instantaneous event rates of two groups among people who remain at risk in each group.

## The intuition

Imagine comparing how quickly events occur in two groups among people who have not yet had that event. The eligible groups change as follow-up proceeds. A hazard is an instantaneous rate conditional on remaining event-free; it is not the fraction of everyone enrolled who has an event by five years. The moving-group analogy cannot supply an individual's future outcome.

## How it works

A **hazard ratio (HR)** divides one group's hazard by the reference group's hazard for a defined [endpoint](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints). HR 1 means equal hazards under the comparison; direction depends on which group is in the numerator.

A Cox proportional-hazards model often estimates this ratio. **Proportional hazards** means the hazard ratio is constant over time, not that either group's hazard itself stays constant. An adjusted HR depends on the model, included covariates and their coding. It is not automatically a causal effect. [Cox](https://doi.org/10.1111/j.2517-6161.1972.tb00899.x).

An HR of 0.70 for treatment versus control describes a 30% lower hazard under that model. It does not mean 30 percentage points fewer events, 30% longer survival or a 30% reduction in each person's probability. [NCI definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hazard-ratio).

## Worked example: a rate is not a risk

For illustration only, assume hazards stay constant at 0.10 per year with control and 0.07 per year with treatment. Assume one event type and no competing events. HR is `0.07/0.10 = 0.70`.

Under this deliberately simple exponential model, event risk by time t is `1 − exp(−hazard × t)`:

| At five years | Event risk |
|---|---:|
| Control | `1 − exp(−0.10 × 5) ≈ 39.3%` |
| Treatment | `1 − exp(−0.07 × 5) ≈ 29.5%` |

The risk ratio is about `29.5/39.3 = 0.75`, and the absolute difference is about 9.8 percentage points. Neither is HR 0.70. These invented assumptions explain the distinction; cancer studies need their actual curves and model.

## What is measured

| Reading question | Information needed |
|---|---|
| Input | Event and censoring times, group labels and modeled covariates. |
| Output | HR and [confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval), with comparator direction. |
| Model check | Proportional-hazards assessment, time-varying effects and analysis population. |
| Failure | Treating an average rate comparison as a fixed-time risk reduction. |
| Cannot tell | Absolute benefit or [number needed to treat](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt) from HR alone. |

A reported HR may summarize changing effects when proportional hazards is unsuitable. Crossing curves can raise that concern but do not, by themselves, diagnose every model failure. Time-specific rates or other prespecified summaries may be needed.

## Why it matters in cancer

Trial reports often headline HRs. Read the endpoint, actual survival curves, absolute estimates at a useful horizon and uncertainty alongside the ratio. A biomarker association may be adjusted for prognostic variables without proving that selecting treatment using it improves outcomes.

## Common confusions

- “Lower hazard” does not equal “lower risk by the same percentage.”
- HR 1 is a model's rate comparison, not proof that every aspect of two curves is identical.
- An adjusted HR does not repair unmeasured confounding.
- A cause-specific HR and a competing-risk subdistribution HR have different meanings; do not substitute one for the other.

## Try it

An article reverses the comparison from treatment/control HR 0.70 to control/treatment. What happens? Can either ratio supply five-year absolute benefit?

**Answer:** The reciprocal is `1/0.70 ≈ 1.43`. Neither supplies absolute benefit without additional outcome information and appropriate assumptions.

## Explain it back

Explain why the people still at risk matter when defining a hazard.

## Takeaway

Read HR as a conditional rate comparison, with its endpoint, direction, model and curves attached.

## Related concepts

- [Absolute risk, relative risk, and number needed to treat](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt) express the effect at a specified time.
- [Confidence intervals](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) express precision under the analysis.
- [Prognostic versus predictive biomarkers](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive) distinguish an outcome association from differences in treatment effect.

## Sources and scope

Source check: 2026-10-10. General statistics education; expert and learner review pending. The study and numerical example are fictional, not personal prognosis estimates.

- [Cox 1972: original proportional-hazards regression method](https://doi.org/10.1111/j.2517-6161.1972.tb00899.x).
- [National Cancer Institute: hazard ratio](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hazard-ratio).
- [Altman and Andersen 1999: time-specific absolute effects and number needed to treat](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the curve and effect](/wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
