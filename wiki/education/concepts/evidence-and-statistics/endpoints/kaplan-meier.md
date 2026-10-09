---
title: "Kaplan–Meier curves"
type: concept
domain: evidence-and-statistics/endpoints
summary: "A Kaplan–Meier curve estimates the probability of remaining free of a defined event over time while accounting for incomplete follow-up."
glossary_anchor: kaplan-meier
aliases: ["kaplan-meier", "Kaplan–Meier curve", "Kaplan-Meier curve", "survival curve", "number at risk", "censoring"]
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

# Kaplan–Meier curves

## In one sentence

A Kaplan–Meier curve estimates the probability of remaining free of a defined event over time while accounting for incomplete follow-up.

## The intuition

A **Kaplan–Meier curve** follows a group along a clock. The line steps down when the defined event occurs. Some people's observation ends before an event is seen. Their earlier follow-up still contributes information, while their later outcome remains unknown to the analysis.

The line is therefore an estimate, rather than a photograph showing that every original participant reached every date.

## How it works

Start with the [survival endpoint](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints): the origin of the clock and the events that count. A curve for death from any cause and a curve for recurrence or death can take different steps. The vertical axis estimates the probability of remaining free of that endpoint; the horizontal axis gives time since the specified origin.

**Censoring** means observation of the time to the event ends without that event being observed. It can occur at a planned data cutoff or through loss to follow-up. A censoring mark does not count as a recurrence or death. Nor does it mean the person is permanently event-free.

At each event time, the method uses the number of events and people still **at risk** just before that time. It multiplies the previous estimate by the fraction of that risk set that avoided the event at that step. Censored people leave later risk sets, without causing a downward step at their censoring time. [Kaplan and Meier 1958](https://doi.org/10.1080/01621459.1958.10501452).

Interpretation assumes censoring is sufficiently independent of the future event time within the analysis. If people disappear from follow-up because their disease is worsening, simply treating their later outcomes as comparable to those still followed can bias the estimate.

## A worked example

Five fictional participants are followed for first recurrence, with the clock starting at enrollment. Nobody dies during this small example.

| Month | People at risk just before this time | Observation at this time | Estimated recurrence-free probability after this time |
|---|---:|---|---:|
| 0 | 5 | Follow-up starts | 100% |
| 1 | 5 | One recurrence | `1 × (4/5) = 80%` |
| 2 | 4 | One person is censored without observed recurrence | 80% |
| 3 | 3 | One recurrence | `0.80 × (2/3) ≈ 53.3%` |

Censoring at month 2 does not cause a fall. It changes the denominator for the later event. This estimate differs from simply counting the two observed recurrences among five original participants, because one participant's outcome after month 2 is unavailable.

The tiny example teaches the calculation. It cannot support a precise clinical conclusion or establish what happened to the censored participant.

## Why it matters in cancer

The **number-at-risk table** beneath a graph shows how many people remain observed and event-free at selected times. A late flat line may rest on very few participants. Read the risk table and [confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) before quoting the tail.

**Median survival** is the time the estimated curve reaches 50% for its endpoint. If it does not reach 50% during observed follow-up, the median is “not reached.” That does not mean there were no events or that survival is infinite. Median follow-up instead describes observation time; it is not median survival.

## Common confusions

- **Censoring versus an event:** a tick mark is incomplete observation, not a recurrence or death.
- **A flat tail versus proof of cure:** there may be little information supporting the late estimate.
- **Curve separation versus a causal treatment effect:** study design, uncertainty, and the comparator still matter.
- **Recurrence alone versus recurrence or death:** death may be a competing event for recurrence alone. Treating it as ordinary censoring does not automatically estimate the real-world chance of recurrence; a competing-risk analysis may be needed.
- **Curve height versus hazard ratio:** a [hazard ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio) summarizes a rate comparison, not the vertical difference at one date.

## Related concepts

- [Survival endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints) define the clock and event rules.
- [Absolute risk and number needed to treat](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt) compare suitable estimates at the same time.
- [Confidence intervals](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) show precision under the analysis.

## Sources and scope

Source check: 2026-10-09. General curve-reading education; expert and learner review pending. The five-participant example is fictional. An endpoint with competing events needs its own appropriate analysis.

- [Kaplan and Meier 1958: original estimation method](https://doi.org/10.1080/01621459.1958.10501452).
- [U.S. Food and Drug Administration: cancer-trial endpoint guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-trial-endpoints-approval-cancer-drugs-and-biologics).
- [Fine and Gray 1999: original competing-risk regression method](https://doi.org/10.1080/01621459.1999.10474144).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the curve and effect](/wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
