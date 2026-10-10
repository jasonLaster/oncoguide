---
title: "Confidence interval"
type: concept
domain: evidence-and-statistics/effect-measures
summary: "A confidence interval shows an estimate's precision using a method with a stated rate of coverage across repeated studies."
glossary_anchor: confidence-interval
aliases: ["confidence interval", "CI", "confidence limits"]
level: foundation
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints]]"]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect]]","[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/index]]","[[wiki/education/guides/reading-pathology-and-surgery-results/03-build-the-next-question]]","[[wiki/education/local-treatment-modalities/03-overlap-and-sequencing]]"]
sensitive: false
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
source_checked: 2026-10-09
updated: 2026-10-09
tags: [education, evidence-and-statistics]
---

# Confidence interval

## In one sentence

A confidence interval shows an estimate's precision using a method with a stated rate of coverage across repeated studies.

## The intuition

A study gives an estimate, but another comparable sample would not produce exactly the same number. A **confidence interval (CI)** puts a range beside the estimate to express this sampling uncertainty under a stated analysis.

Think of repeatedly taking samples and drawing a new interval each time. A method with 95% coverage would contain the fixed true value in about 95% of those intervals in the long run, if its assumptions hold. The 95% belongs to the **method's repeated performance**, not a 95% probability assigned to the fixed true value after seeing one interval. [National Institute of Standards and Technology](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm).

## How it works

First name what was estimated. An interval around a [hazard ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio) describes a relative event-rate comparison. An interval around an [absolute risk difference](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt) describes a difference in event probabilities at a named time. These are different scales.

The analysis calculates lower and upper bounds using the data, confidence level, and method. The interval can be asymmetric. Its width depends on the information and variability available; in time-to-event analyses, the observed events and follow-up matter as well as the number enrolled.

The method's assumptions matter too. A narrow interval does not account for every possible bias, missing-data problem, or mismatch between the study population and the question being asked. Confidence intervals describe precision under an analysis, rather than certify that its design or interpretation is valid. [Neyman 1937](https://doi.org/10.1098/rsta.1937.0005), [Greenland and colleagues 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/).

## A worked example

Two fictional studies estimate the same hazard ratio of 0.70 for treatment A versus B. Both analyze time to first recurrence or death from randomization.

| Fictional result | What the interval adds |
|---|---|
| HR 0.70, 95% CI 0.65–0.76 | The estimate is comparatively precise under this analysis. |
| HR 0.70, 95% CI 0.35–1.40 | The estimate is imprecise; the interval includes much lower hazard, equal hazard, and higher hazard. |

HR means hazard ratio. For a ratio, **1** is the no-difference value. The second interval does not prove there is no benefit. It shows that this analysis cannot distinguish a wide range of effects with the chosen precision criterion. The first still needs absolute outcomes, safety, and a relevant population before its medical importance can be assessed.

These invented bounds illustrate interpretation; they do not establish real treatment effects.

## Why it matters in cancer

Small subgroups can yield striking point estimates with wide intervals. Reading both together prevents a precise-looking decimal from carrying more confidence than the data support.

An interval also helps ask whether the range includes effects that would matter clinically. A statistically detectable difference can be small in absolute terms. A wide interval can leave both worthwhile benefit and meaningful harm unresolved.

## Common confusions

- **Probability of the parameter:** a conventional 95% CI does not assign a 95% probability to the fixed true effect being inside that observed interval.
- **Probability of an individual outcome:** it is not a patient's 95% survival range or a range containing 95% of patients.
- **Crossing the null versus no effect:** a ratio interval crossing 1, or a difference interval crossing 0, does not establish equivalence or absence of benefit.
- **Outside the interval versus impossible:** values outside it are not logically ruled out; the interval depends on its method and assumptions.
- **Overlapping intervals versus equal effects:** compare the groups directly; overlap alone is not a valid test of whether their effects differ.

## Related concepts

- [Absolute risk, relative risk, and number needed to treat](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt) attach uncertainty to the effect scale.
- [Kaplan–Meier curves](/wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier) show uncertainty changing over follow-up.
- [Prognostic versus predictive biomarkers](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive) help distinguish an association from a treatment comparison.

## Sources and scope

Source check: 2026-10-09. Conventional frequentist interval interpretation; expert and learner review pending. Bayesian credible intervals use a different framework. All worked estimates are fictional, not personal prognosis calculations.

- [Neyman 1937: original confidence-interval framework](https://doi.org/10.1098/rsta.1937.0005).
- [National Institute of Standards and Technology: confidence limits and repeated coverage](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm).
- [Greenland and colleagues 2016: statistical interpretations and common errors](https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the curve and effect](/wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
- [Build the next question](/wiki/education/guides/reading-pathology-and-surgery-results/03-build-the-next-question)
- [Ask what a combination trial actually proved](/wiki/education/local-treatment-modalities/03-overlap-and-sequencing)
<!-- END GENERATED USED IN -->
