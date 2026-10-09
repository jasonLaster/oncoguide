---
title: "Kaplan\u2013Meier curves"
type: concept
domain: evidence-and-statistics/endpoints
summary: "A Kaplan\u2013Meier curve estimates the probability of remaining free of a defined event over time while accounting for incomplete follow-up."
glossary_anchor: kaplan-meier
aliases: ["kaplan-meier"]
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

# Kaplan–Meier curves

## In one sentence

A Kaplan–Meier curve estimates the probability of remaining free of a defined event over time while accounting for incomplete follow-up.

## The intuition

The curve steps down when events occur. People whose follow-up ends without an observed event contribute information until that time. They are not counted as permanently event-free; their later outcome is unknown to the analysis.

## How it works

The horizontal axis is time from a specified origin. The vertical axis is the estimated probability of remaining free of the endpoint. A death curve and a recurrence curve can have different steps because they count different events.

Censoring means follow-up ends before an event is observed. It may occur at a data cutoff, loss to follow-up or another prespecified circumstance. Standard interpretation assumes censoring is sufficiently non-informative; patients dropping out because they are worsening can threaten that assumption.

The number-at-risk table shows how many people remain observed and event-free at each interval. Estimates near the tail can rest on very few people. Confidence bands often widen there, even when the line looks flat. A five-year point is an estimate under that follow-up, rather than a count showing every enrolled person reached five years.

Median survival is the time the estimated curve reaches 50%. If it never reaches 50% by the cutoff, the median is not reached. That does not mean no events occurred or that the outcome is infinite. A hazard ratio summarizes another aspect of the comparison; medians and a ratio cannot be substituted for each other.

## Why it matters in cancer

It helps readers inspect time, event definitions and follow-up before quoting a survival percentage.

## Worked example

A study enrolls 100 people but only ten remain at risk near six years. A flat late segment does not demonstrate a precise six-year result for all 100. Inspect censoring, the risk table and confidence interval before quoting the tail.

## Common confusions

- Censored does not mean cured or known to have had an event.
- “Median not reached” does not mean all patients are event-free.
- Apparent curve separation is not alone proof of a meaningful or causal treatment effect.

## Related concepts

[[wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio|Hazard ratios]] and [[wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints|endpoints]].

## Sources and scope

General teaching, source-checked October 8, 2026. The examples are hypothetical unless a study is explicitly named. Expert and learner review remain pending.

- [Original Kaplan–Meier method](https://doi.org/10.1080/01621459.1958.10501452).
- [NCI survival curve definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/survival-curve).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
