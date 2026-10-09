---
title: "Hazard ratio"
type: concept
domain: evidence-and-statistics/effect-measures
summary: "A hazard ratio compares the event hazards of two specified groups over follow-up."
glossary_anchor: hazard-ratio
aliases: ["hazard-ratio"]
prerequisites: []
reviewed: pending
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, evidence-and-statistics]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/index]]"]
updated: 2026-10-08
source_checked: 2026-10-08
review_status: "Expert and learner review pending"
---

# Hazard ratio

## In one sentence

A hazard ratio compares the event hazards of two specified groups over follow-up.

## The intuition

A hazard concerns the rate at which an event happens among people still at risk. It is different from the fraction who have had an event by five years. A ratio compares those rates rather than directly giving someone’s chance of recurrence.

## How it works

Always identify the event, reference group, population and analysis. A ratio below one means lower estimated hazard in the numerator group; above one means higher estimated hazard. Under a proportional-hazards interpretation, HR 0.70 represents a 30% relative hazard reduction. It does not mean 30 percentage points fewer patients recur.

The proportional-hazards assumption means the ratio is reasonably stable over time. Curves that cross or effects that change with time can complicate a single summary. A reported model may adjust for covariates, adding assumptions that should be retained with the estimate.

Absolute outcome differences require a time horizon and the actual survival estimates. If a hypothetical five-year event risk is 20% in one group and 14% in another, the absolute difference is six percentage points and the risk ratio is 0.70. That risk ratio need not equal a reported hazard ratio.

Confidence intervals describe uncertainty under the analysis. A wide interval warns that the estimate is imprecise. It does not rescue an inapplicable population. Multiplying unrelated hazard ratios for stage, Ki-67 and [ctDNA (circulating tumor DNA)](/about/Terminology#ctdna) can double-count correlated features and does not create a validated personal model.

## Why it matters in cancer

It prevents a relative event-rate comparison from being presented as a personal probability or an absolute treatment benefit.

## Worked example

A small cohort reports HR 14.8 with a very wide confidence interval. It suggests a prognostic association under that comparison, rather than a personal 14.8-fold probability or a treatment effect. Keep assay, sampling time and endpoint attached to it.

## Common confusions

- Hazard reduction differs from absolute risk reduction and fewer events by a fixed date.
- An adjusted association does not automatically establish causation.
- A subgroup hazard ratio is not a personal probability multiplier.

## Related concepts

[[wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier|Kaplan–Meier]] and [[wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints|endpoints]].

## Sources and scope

General teaching, source-checked October 8, 2026. The examples are hypothetical unless a study is explicitly named. Expert and learner review remain pending.

- [NCI hazard ratio definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hazard-ratio).
- [Primary methods: proportional-hazards regression](https://doi.org/10.1111/j.2517-6161.1972.tb00899.x).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
