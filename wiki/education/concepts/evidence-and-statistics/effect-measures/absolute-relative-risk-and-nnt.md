---
title: "Absolute risk, relative risk, and number needed to treat"
type: concept
domain: evidence-and-statistics/effect-measures
summary: "Absolute risk is the chance of a defined event by a specified time; relative risk compares those chances, and number needed to treat summarizes their difference."
glossary_anchor: absolute-relative-risk-and-nnt
aliases: ["absolute risk", "relative risk", "risk ratio", "absolute risk reduction", "relative risk reduction", "number needed to treat", "ARR", "RRR", "NNT"]
level: foundation
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints]]"]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
sensitive: false
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
source_checked: 2026-10-09
updated: 2026-10-09
tags: [education, evidence-and-statistics]
---

# Absolute risk, relative risk, and number needed to treat

## In one sentence

Absolute risk is the chance of a defined event by a specified time; relative risk compares those chances, and number needed to treat summarizes their difference.

## The intuition

“Risk fell by a third” leaves out the starting point. Reducing 3 events to 2 in every 100 people has a different absolute effect from reducing 30 to 20. You need the [endpoint](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints), time horizon, and comparison to make either claim meaningful. The numbers here are fictional.

**Absolute risk** names the chance of that event by that time. **Relative risk**, also called a **risk ratio**, divides one group's risk by the reference group's risk. **Number needed to treat (NNT)** converts the absolute difference into an average number treated for one additional desired outcome, compared with the alternative.

## How it works

For an undesirable event, such as first recurrence or death by five years:

- **Absolute risk reduction (ARR)** is the control risk minus the treatment risk.
- **Risk ratio (RR)** is the treatment risk divided by the control risk.
- **Relative risk reduction (RRR)** is `1 − RR`.
- **NNT** is `1/ARR`, using ARR as a fraction, when the treatment reduces the event risk.

These quantities must describe the **same population, event definition, comparison, and time**. With incomplete follow-up, use suitable time-specific outcome estimates, rather than simply divide observed events by everyone enrolled. [Altman and Andersen 1999](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/).

## A worked example

In a fictional randomized trial after surgery, first recurrence or death by five years is estimated at 20% with the control strategy and 14% with the new strategy.

| Quantity | Calculation | Meaning for this fictional comparison |
|---|---|---|
| Absolute risk reduction | `20% − 14% = 6 percentage points` | An estimated 6 fewer events per 100 people by five years. |
| Risk ratio | `14% / 20% = 0.70` | The new strategy's five-year risk is 70% of the control risk. |
| Relative risk reduction | `1 − 0.70 = 30%` | A 30% relative reduction in that five-year event risk. |
| Number needed to treat | `1 / 0.06 ≈ 16.7` | Approximately 17 people treated for one additional person to avoid that event by five years. |

NNT is an average contrast between strategies. It does not identify a particular beneficiary, and it does not mean every seventeenth person is helped. The treatment may also cause harms that require their own endpoints and comparisons. [Cook and Sackett 1995](https://doi.org/10.1136/bmj.310.6977.452).

## Why it matters in cancer

Relative effects can look similar in groups with different baseline risks while their absolute benefits differ. NNT helps describe scale, provided its endpoint and time horizon stay attached. It does not combine benefit, toxicity, inconvenience, and quality of life into one verdict.

A [hazard ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio) compares conditional event rates, rather than these cumulative risks. NNT is **never** the inverse of an HR. An HR alone does not provide the absolute difference needed here.

## Uncertainty belongs beside the number

Suppose the fictional ARR of 6 percentage points has a [95% confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) from 2 to 10 percentage points. Transforming those positive bounds gives an NNT interval from 10 to 50 for the same endpoint at five years. The point estimate of about 17 needs that uncertainty beside it.

If the ARR interval crosses zero, the NNT interval passes through infinity and can include both benefit and harm. Do not present it as an ordinary finite range around a reassuring point estimate. Reporting the ARR and its interval may be clearer. [Altman 1998](https://doi.org/10.1136/bmj.317.7168.1309).

## Common confusions

- **Percent versus percentage points:** a change from 20% to 14% is 6 percentage points, not a 6% relative reduction.
- **Endpoint or time mismatch:** recurrence, death, and a composite outcome can yield different NNTs; so can three versus five years.
- **A cure count:** avoiding an event by a date does not prove permanent cure.
- **A personal promise:** a group average cannot determine who benefits.
- **A benefit-only summary:** a favorable NNT does not establish acceptable toxicity.

## Related concepts

- [Survival endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints) define the event and the clock.
- [Kaplan–Meier curves](/wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier) estimate event-free probability over follow-up.
- [Confidence intervals](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) express precision and prevent overreading a point estimate.

## Sources and scope

Source check: 2026-10-09. General effect-size education; expert and learner review pending. All worked risks and intervals are invented for arithmetic practice, not clinical estimates or thresholds.

- [Cook and Sackett 1995: number needed to treat as a measure of effect](https://doi.org/10.1136/bmj.310.6977.452).
- [Altman and Andersen 1999: number needed to treat for time-to-event outcomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/).
- [Altman 1998: confidence intervals for number needed to treat](https://doi.org/10.1136/bmj.317.7168.1309).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the curve and effect](/wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
