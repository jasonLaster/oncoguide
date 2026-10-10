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
source_checked: 2026-10-10
updated: 2026-10-10
tags: [education, evidence-and-statistics]
---

# Confidence interval

## In one sentence

A confidence interval shows an estimate's precision using a method with a stated rate of coverage across repeated studies.

## The intuition

An estimate comes with uncertainty because another sample could produce a different estimate. A **confidence interval (CI)** describes precision under a specified method. Think of repeatedly casting a net: the method has a coverage rate across valid repetitions. The analogy stops once a particular net has landed; it does not assign a new probability to a fixed parameter.

## How it works

For a frequentist 95% CI, the method would include the true parameter in 95% of intervals across repeated valid applications, under its assumptions. It does not mean this observed interval has a 95% probability of containing the fixed parameter. [Neyman](https://doi.org/10.1098/rsta.1937.0005); [NIST](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm).

The interval depends on the data, estimator, confidence level and calculation method. Larger samples often narrow intervals, but more observations do not remove biased measurement, confounding or an incorrect model.

For a difference, the no-difference value is usually zero. For a ratio such as a [hazard ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio) or [odds ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/odds-ratio), it is one. Crossing that value does not prove equality; the interval may remain compatible with meaningful benefit and harm.

## Worked example

A fictional survey observes a binary outcome in 50 of 100 independent people. A simple **normal approximation** estimates the proportion's standard error as `sqrt(0.50 × 0.50/100) = 0.05`. An approximate 95% interval is `0.50 ± 1.96 × 0.05`, or **40.2%–59.8%**.

With 5,000 of 10,000 people having the outcome, the same calculation gives standard error 0.005 and interval **49.02%–50.98%**. The proportion is unchanged, but sampling precision improves. These are fictional calculations with independent observations; small counts, proportions near zero or one, clustering and incomplete outcomes can require different methods.

## What is measured

| Check | Information needed |
|---|---|
| Inputs | Estimate, data structure, sampling or statistical model. |
| Output | Lower and upper bounds on the estimate's scale, with confidence level. |
| Method | Calculation method, adjustment set, missing-data handling and any multiplicity adjustment. |
| Failure | Calling narrow bounds proof of validity or treating an approximate interval as universally reliable. |
| Cannot tell | The range containing 95% of patients or the outcome of a particular person. |

A **prediction interval** addresses a future observation and includes additional variability. A **Bayesian credible interval** has a probability interpretation conditional on its model and prior. Those are different constructions, not alternative names for a frequentist CI.

## Why it matters in cancer

Consider fictional HR 0.70 with CI 0.35–1.40: the estimate suggests lower hazard, but substantial benefit and harm remain compatible with this analysis. HR 0.70 with CI 0.65–0.76 is more precise. Neither establishes relevance to a different population or a personal benefit.

## Common confusions

- A CI is not a distribution of patient outcomes.
- Including the null value does not establish no effect or equivalence.
- Overlapping intervals are not a substitute for directly estimating or testing the difference between groups.
- Repeating many unadjusted intervals can create a multiplicity problem.
- Statistical precision is not protection against bias. [Greenland and colleagues](https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/).

## Try it

A fictional difference has a 95% CI from −8 to +10 percentage points. Does it prove equivalence?

**Answer:** No. It includes potentially important differences in both directions. Equivalence requires a prespecified acceptable margin and an appropriate analysis; merely failing to demonstrate a difference is insufficient.

## Explain it back

Explain why 95% belongs to repeated coverage of the method rather than the proportion of patients inside the interval.

## Takeaway

Read the estimate, interval and method together, keeping precision separate from validity.

## Related concepts

- [Absolute risk, relative risk, and number needed to treat](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt) attach uncertainty to the effect scale.
- [Kaplan–Meier curves](/wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier) show uncertainty changing over follow-up.
- [Prognostic versus predictive biomarkers](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive) help distinguish an association from a treatment comparison.

## Sources and scope

Source check: 2026-10-10. Conventional frequentist interval interpretation; expert and learner review pending. Bayesian credible intervals use a different framework. All worked estimates are fictional, not personal prognosis calculations.

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
