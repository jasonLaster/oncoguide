---
title: "Population versus individual risk"
type: concept
domain: evidence-and-statistics/reasoning-tools
summary: "Population risk describes outcomes in a defined group, while an individual risk estimate applies a model and its assumptions to one person's circumstances."
glossary_anchor: population-vs-individual-risk
aliases: ["population-vs-individual-risk", "individual risk", "personal risk", "population risk"]
level: foundation
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints]]", "[[wiki/education/concepts/evidence-and-statistics/tests-and-prediction/calibration]]"]
used_by: ["[[wiki/education/guides/judging-a-test-or-vendor-claim/01-write-the-exact-claim]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/index]]","[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
sensitive: false
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
source_checked: 2026-10-10
updated: 2026-10-10
tags: [education, evidence-and-statistics]
---

# Population versus individual risk

## In one sentence

Population risk describes outcomes in a defined group, while an individual risk estimate applies a model and its assumptions to one person's circumstances.

## The intuition

A weather forecast can be useful without naming which garden will get rain. A clinical probability can also help with decisions without determining one person's future. The analogy stops there: people differ in biology and treatment, and those differences may change the relevant risk.

You can take a number seriously while asking how well its group, clock and model fit the situation. Greater precision in printing a number does not supply that fit.

## How it works

A **population risk** needs an outcome, a starting point and a time horizon. For example, “first recurrence by five years after surgery among people meeting these criteria and receiving this care.” A cohort or [survival analysis](/wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier) estimates that quantity under its sampling and follow-up assumptions.

An **individual prediction model** combines specified characteristics to estimate a probability for a particular setting. Its output remains an estimate with limitations. A model can omit relevant biology, use imperfect measurements or reflect a different treatment era. [The National Cancer Institute's prognosis explanation](https://www.cancer.gov/about-cancer/diagnosis-staging/prognosis) distinguishes useful group statistics from knowing what will happen to one person.

Check [calibration](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/calibration): do people assigned similar probabilities have approximately the corresponding outcome frequency in a relevant evaluation? Check [discrimination](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/auc-and-c-index) separately: does the model rank outcomes well? Good ranking does not guarantee accurate probabilities.

External evaluation uses people outside the model's development data. Performance can still vary by hospital, treatment context or subgroup. An evaluation in one new setting does not certify every future setting. [TRIPOD-Cluster](https://www.bmj.com/content/380/bmj-2022-071058) explains variation between populations and evaluation settings.

## A worked example

In a fictional, fully followed cohort of one hundred people receiving a defined treatment, twenty experience the specified event by five years. Its observed event proportion is 20%.

A model assigns a 10% five-year risk to a smaller group with particular characteristics. If about ten of one hundred comparable people experience the event in a sufficiently informative independent evaluation, that supports calibration near this prediction. It does not identify the ten in advance, prove every relevant subgroup is calibrated or guarantee the estimate fits a different treatment sequence.

Now imagine someone multiplies the cohort's 20% by a published [hazard ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio) for a marker and another ratio for a treatment. This does not produce a validated personal probability. The ratios may describe different populations, adjusted comparisons, endpoints and clocks. A hazard ratio is also not a fixed-time risk ratio.

## Try it

A fictional model ranks outcomes well at Hospital A. Someone proposes using its printed probabilities at Hospital B, where treatment and follow-up differ. What would you ask to see before trusting those probabilities?

**Answer:** Ask for evaluation in a relevant population at Hospital B, including calibration, the outcome and time horizon, required inputs and uncertainty. Good ranking at Hospital A does not establish accurate probabilities at Hospital B or determine one person's future.

## Why it matters in cancer

- Prognosis estimates can inform a discussion without becoming promises or personal verdicts.
- A test taken after treatment cannot automatically replace a model's required pretreatment input, or vice versa.
- A probability under current care differs from the benefit of changing care. An outcome-prediction model alone does not establish a treatment effect.

## Common confusions

- **Uncertain versus useless:** an appropriately evaluated estimate may be helpful while remaining uncertain.
- **A confidence interval versus a range of individual futures:** an interval for a group parameter describes estimation uncertainty under a method.
- **A narrow subgroup versus exact personalization:** a small subgroup can leave little information and substantial uncertainty.
- **More biomarkers versus better prediction:** added inputs need evaluation; counting features does not demonstrate improvement.
- **Risk versus fate:** a probability describes uncertainty about an outcome, not a fractional event inside a person.

## How it is measured

Retain the model name and version, required inputs, missing-value rules, population, received treatment, outcome and horizon. Evaluate calibration, discrimination and the uncertainty of those measurements. [Transportability and eligibility](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/transportability-and-eligibility) explain why matching entry criteria is only one part of judging fit.

## Related concepts

- [Denominators and conditional probability](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/denominators-and-conditional-probability).
- [Prognostic versus predictive biomarkers](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive).
- [Analytical validity, clinical validity and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility).

## Sources and scope

Source check: October 10, 2026. General risk interpretation; all cohorts, predictions and outcomes are fictional. This page supplies no personal prognosis. Expert and learner review remain pending.

- [NCI: understanding cancer prognosis](https://www.cancer.gov/about-cancer/diagnosis-staging/prognosis) — group statistics, treatment context and individual uncertainty.
- [Debray and colleagues 2023: TRIPOD-Cluster explanation and elaboration](https://www.bmj.com/content/380/bmj-2022-071058) — model evaluation and differences between settings.
- [Hernán and Robins, Causal Inference: What If](https://miguelhernan.org/whatifbook) — author-linked August 19, 2026 version, chapter 1; population effects and individual outcomes are distinct.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Write the exact claim before judging it](/wiki/education/guides/judging-a-test-or-vendor-claim/01-write-the-exact-claim)
- [Judge a test or company claim](/wiki/education/guides/judging-a-test-or-vendor-claim/index)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
