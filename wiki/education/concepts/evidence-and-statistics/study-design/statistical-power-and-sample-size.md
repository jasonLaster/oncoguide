---
title: "Statistical power and sample size"
type: concept
domain: evidence-and-statistics/study-design
level: intermediate
sensitive: false
tags: [education, evidence-and-statistics]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: statistical-power-and-sample-size
aliases: [statistical power, power, sample size, sample-size calculation, underpowered, type II error, number of events]
summary: "Statistical power is the probability that a study will detect a true effect of a specified size, given its sample size or number of events, the outcome's variability and its significance threshold."
prerequisites:
  - "[[wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing]]"
  - "[[wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio]]"
used_by: ["[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
---

# Statistical power and sample size

## In one sentence

Statistical power is the probability that a study will detect a true effect of a specified size, given its sample size or number of events, the outcome's variability and its significance threshold.

## The intuition

Searching a dark room with a small flashlight, you will find a sofa but may miss a coin. Not finding the coin does not show it is absent; the light was too weak for something that small. Power describes how strong the light is for an object of a stated size. The analogy has a limit: power is calculated before the study, for an effect size the investigators assume.

## How it works

A sample-size calculation fixes four things in advance [1]:

1. **The effect to detect**, such as a [hazard ratio (HR)](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio) of 0.70. It should be the smallest effect worth finding, not a hopeful guess.
2. **The false-positive allowance (alpha)**, often a two-sided 5%; see [p-values](/wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing).
3. **The power**, often 80% or 90%. One minus power is the chance of missing an effect that is really there, called a type II error.
4. **The variability**, or for survival outcomes the expected event rate.

For time-to-event outcomes such as recurrence or death, power depends on the **number of events**, not the number of people [2]. Trials therefore plan their analyses for a target event count. A widely used formula from Schoenfeld gives the events needed for two equal arms [3]:

`events ≈ 4 × (1.96 + 0.84)² / (ln HR)²` for a two-sided 5% test with 80% power.

| Hazard ratio to detect | Events needed (equal arms, 80% power) |
|---|---|
| 0.60 | about 121 |
| 0.70 | about 247 |
| 0.74 | about 347 |
| 0.85 | about 1,189 |

Small effects are expensive. Halving the effect on the log scale quadruples the events required. Unequal allocation costs a little more: a 2:1 design needs about 12.5% more events than 1:1.

## Real examples in breast cancer

- **CALOR**, a trial of chemotherapy after an isolated local recurrence, first planned 977 patients and 347 events to detect HR 0.74. The formula above, at 80% power and a two-sided 5% level, gives about 347. The trial later revised to 265 patients and 124 events for HR 0.6, and closed for poor accrual with 162 enrolled [4]. Its result, HR 0.59 (95% confidence interval 0.35–0.99), shows how wide an interval stays with few events [5].
- **Z0011**, a [non-inferiority trial](/wiki/education/concepts/evidence-and-statistics/study-design/non-inferiority-trials) of axillary surgery, planned 1,900 women and 500 deaths. It closed at 891 women because deaths were fewer than expected [6].

## Why it matters in cancer

- A "negative" small trial often cannot rule out a useful benefit. Read its [confidence interval (CI)](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) and the [absence-of-evidence](/wiki/education/concepts/evidence-and-statistics/biomarkers/absence-of-evidence) question before calling a treatment ineffective.
- Subgroups have far fewer events than the whole trial. A test for different effects between subgroups usually has low power in a trial sized for the main comparison [1].
- When a small study does reach significance, its estimate tends to overstate the true effect, because only the lucky high estimates cross the threshold [7]. Trials stopped early for benefit show the same pattern; see [interim analysis](/wiki/education/concepts/evidence-and-statistics/study-design/interim-analysis).
- Rare outcomes, such as uncommon harms, need very large studies to estimate well.

## Common confusions

- **Power is not the chance the drug works.** It is the chance of detecting the assumed effect if that effect is real.
- **80% power still misses 1 in 5.** Even a well-designed trial can miss its target effect.
- **"Underpowered" needs an effect size attached.** A trial can be well powered for HR 0.60 and badly underpowered for HR 0.85.
- **Calculating "observed power" after a nonsignificant result adds nothing.** It is a restatement of the p-value [8]. Use the confidence interval instead.
- **Huge trials can detect trivial effects.** Statistical detection is not clinical importance.

## Try it

A fictional trial was sized to detect HR 0.70 with 80% power, so it plans about 247 events. Suppose the treatment's true HR is 0.85. Is the trial likely to detect it?

**Answer:** No. Detecting HR 0.85 with 80% power needs about 1,189 events. With 247 events, the power is only about 25%. A nonsignificant result would be the most likely outcome even though the treatment helps.

## Explain it back

"A trial's power depends on ___, and for survival endpoints it is driven by ___, not ___."

**One possible answer:** "The effect size it is looking for, the significance threshold and the amount of information; the number of events; the number of people enrolled."

## Takeaway

**Before reading a null result as "no effect," ask what effect size the study was powered to find and how many events it actually had.**

## Related concepts

- [P-values and multiple testing](/wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing)
- [Confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval)
- [Interim analysis](/wiki/education/concepts/evidence-and-statistics/study-design/interim-analysis)
- [Non-inferiority trials](/wiki/education/concepts/evidence-and-statistics/study-design/non-inferiority-trials)
- [Absence of evidence](/wiki/education/concepts/evidence-and-statistics/biomarkers/absence-of-evidence)

## Sources and scope

Source-checked November 8, 2026. General statistics education; expert and learner review pending. The event table is calculated with the cited formula; the practice trial is fictional.

1. [ICH E9: Statistical principles for clinical trials (FDA)](https://www.fda.gov/media/71336/download) — sample-size elements and low power for interaction tests.
2. [FDA 2019: Adaptive designs for clinical trials of drugs and biologics](https://www.fda.gov/media/78495/download) — power in time-to-event trials depends on events.
3. [Schoenfeld, Biometrics 1983: sample-size formula for the proportional-hazards model](https://pubmed.ncbi.nlm.nih.gov/6354290/).
4. [NCI PDQ: breast cancer treatment, locoregional recurrence section](https://www.cancer.gov/types/breast/hp/breast-treatment-pdq) — CALOR's original and revised sample sizes.
5. [Aebi and colleagues, Lancet Oncology 2014: CALOR](https://pubmed.ncbi.nlm.nih.gov/24439313/).
6. [Giuliano and colleagues, JAMA 2011: ACOSOG Z0011](https://pubmed.ncbi.nlm.nih.gov/21304082/).
7. [Button and colleagues, Nature Reviews Neuroscience 2013: power failure](https://pubmed.ncbi.nlm.nih.gov/23571845/) — small studies and inflated effect estimates, outside oncology.
8. [Hoenig and Heisey, The American Statistician 2001: the abuse of power](https://doi.org/10.1198/000313001300339897).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims, survival statistics and single success stories](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
