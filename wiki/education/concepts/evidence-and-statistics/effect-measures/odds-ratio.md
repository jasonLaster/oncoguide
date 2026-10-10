---
title: "Odds ratio"
type: "concept"
domain: "evidence-and-statistics/effect-measures"
summary: "An odds ratio compares the odds of a defined event in one group with the odds in another group."
glossary_anchor: "odds-ratio"
aliases: ["OR", "odds ratio"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval]]"]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
sensitive: false
tags: ["education", "evidence-and-statistics"]
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Odds ratio

## In one sentence

An odds ratio compares the odds of a defined event in one group with the odds in another group.

## The intuition

A bag contains 20 red counters and 80 blue ones. The chance of drawing red is `20/100 = 20%`. The **odds** are `20/80 = 0.25`: red relative to non-red, rather than red relative to everyone. This bag analogy explains a denominator; it does not establish a clinical risk.

## How it works

For probability p, odds are `p/(1 − p)`. An **odds ratio (OR)** divides one group's odds by the reference group's odds for a defined event.

An OR above one means higher odds in the numerator group; whether that is favorable depends on the event. Response and toxicity have different meanings. Specify the event, comparator and horizon before interpreting direction. [Bland and Altman](https://doi.org/10.1136/bmj.320.7247.1468).

When events are rare in both groups, an OR can approximate a [risk ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt). It can differ substantially when outcomes are common. An OR is not a multiplier to apply directly to a percentage.

**Logistic regression** commonly reports ORs. For a continuous predictor, check the increment: an OR per one unit differs from one per ten units. An adjusted OR can also differ from the unadjusted OR even without confounding, a property called **noncollapsibility**. A changed OR after adjustment does not alone prove confounding. [Greenland, Robins and Pearl](https://doi.org/10.1214/ss/1009211805).

## Worked example

In a fictional comparison with complete response assessment, 40 of 100 people in group A respond versus 20 of 100 in group B.

| Measure | Calculation |
|---|---|
| Response risk ratio | `(40/100)/(20/100) = 2` |
| Response odds ratio | `(40/60)/(20/80) ≈ 2.67` |
| Absolute response difference | `40% − 20% = 20 percentage points` |

The same counts produce three different measures. “2.67 times the odds” does not mean “2.67 times the chance.” The study design would determine whether these differences support a causal treatment claim.

## What is measured

| Check | What to retain |
|---|---|
| Input | Event/non-event counts or participant-level data for a regression. |
| Coding | Which outcome is positive, reference group and predictor increment. |
| Output | OR without units, with [confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) and adjustment set. |
| Failure | Reading odds as risk, ignoring sampling design, or interpreting adjustment as causal proof. |
| Cannot tell | Absolute risk from the OR alone. |

A **case-control study** deliberately samples cases and controls. Their proportions in the study are not the population's event prevalence, so its case fraction cannot simply supply absolute risk. Zero counts can also make a raw odds ratio zero, infinite or undefined; the estimation method and uncertainty matter.

## Why it matters in cancer

Biomarker-response reports often use ORs because response is a binary outcome. A response OR is not a survival HR and does not quantify the benefit of acting on a marker. Keep the assay, model, endpoint and treatment comparison visible.

## Common confusions

- Odds and probability use different denominators.
- OR 2 does not generally mean twice the risk.
- An association with response does not prove treatment selection improves outcomes.
- Reciprocal comparisons need reciprocal ORs; they do not change the underlying observations.

## Try it

In another fictional example, 20 of 100 people have an adverse event with A and 10 of 100 with B. Calculate the risk ratio and OR.

**Answer:** RR is `0.20/0.10 = 2`. OR is `(20/80)/(10/90) = 2.25`. Both indicate more events with A, but they are different quantities.

## Explain it back

Explain the difference between “events per everyone” and “events per non-events.”

## Takeaway

Name odds as odds, and ask for absolute event probabilities separately.

## Related concepts

- [Absolute and relative risk](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt)
- [Hazard ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio): a different comparison involving event rates over follow-up.

## Sources and scope

Source check: October 10, 2026. All counts are fictional teaching examples. Expert and learner review remain pending.

- [Bland and Altman, 2000: the odds ratio](https://www.bmj.com/content/320/7247/1468.1).
- [Greenland, Robins and Pearl, 1999: confounding and collapsibility](https://doi.org/10.1214/ss/1009211805).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the curve and effect](/wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
