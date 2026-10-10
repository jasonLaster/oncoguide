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
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Odds ratio

## In one sentence

An odds ratio compares the odds of a defined event in one group with the odds in another group.

## The intuition

Imagine a bag with 20 red counters and 80 blue ones. The chance of drawing red is 20 in 100. The odds of red are 20 to 80. Both describe the same bag, but they divide by different totals. Confusing those denominators makes a reported effect sound larger or smaller than it is.

## How it works

**Risk** divides events by everyone in the defined group. **Odds** divide events by non-events. For a probability `p`, odds are `p / (1 − p)`. An **odds ratio (OR)** divides one group's odds by the comparison group's odds. A ratio of one means equal odds for that comparison.

An odds ratio and a [risk ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt) are different measures. They can be close when events are uncommon in both groups. The difference grows as events become common. Always name the event, comparison direction, population and observation period. [Bland and Altman: odds ratios](https://www.bmj.com/content/320/7247/1468.1).

A regression model can estimate an adjusted odds ratio while accounting for specified variables. This does not remove every source of [confounding](/wiki/education/concepts/evidence-and-statistics/study-design/observational-studies-and-confounding). It also need not equal the unadjusted group comparison, even when the added variable is not a confounder. Do not mix adjusted and unadjusted results as though they measured the same contrast. [Greenland, Robins and Pearl: collapsibility](https://doi.org/10.1214/ss/1009211805).

## Why it matters in cancer

Response and pathology studies often report odds ratios. The event might be complete response, recurrence or a side effect. An odds ratio above one therefore cannot be labeled “better” without knowing what was counted. A [confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) belongs beside the estimate.

## Worked example

In a fictional study, 40 of 100 people in group A respond, compared with 20 of 100 in B. Everyone is assessed at the same defined visit.

| Measure | Group A | Group B |
|---|---|---|
| Response risk | 40/100 = 40% | 20/100 = 20% |
| Response odds | 40/60 = 0.667 | 20/80 = 0.25 |

The risk ratio is `0.40 / 0.20 = 2`. The odds ratio is `(40/60) / (20/80) = 2.67`. Calling the second number “2.67 times the chance of response” changes its meaning. Neither comparison by itself establishes that treatment caused the difference.

## Common confusions

- Odds are not another spelling of probability.
- An odds ratio of two does not mean an additional two percentage points.
- An adjusted odds ratio does not supply an absolute benefit or a personal forecast.
- A case-control study selects participants by outcome; its sampled event fraction is not the population's event risk.

## Try it

Would an odds ratio below one favor a treatment if the event were serious toxicity?

**Answer:** It would describe lower odds of that toxicity in the named comparison. Benefit, bias, uncertainty and other harms still need assessment.

## Related concepts

- [Absolute and relative risk](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt)
- [Hazard ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio): a different comparison involving event rates over follow-up.

## Sources and scope

Source check: October 9, 2026. All counts are fictional teaching examples. Expert and learner review remain pending.

- [Bland and Altman, 2000: the odds ratio](https://www.bmj.com/content/320/7247/1468.1).
- [Greenland, Robins and Pearl, 1999: confounding and collapsibility](https://doi.org/10.1214/ss/1009211805).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the curve and effect](/wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
