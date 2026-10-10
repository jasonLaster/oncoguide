---
title: "Meta-analysis"
type: "concept"
domain: "evidence-and-statistics/study-design"
summary: "Meta-analysis combines estimates from separate studies using a specified statistical method to answer a defined question."
glossary_anchor: "meta-analysis"
aliases: ["meta-analysis", "meta analysis", "pooled estimate"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization]]"]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
sensitive: false
tags: ["education", "evidence-and-statistics"]
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Meta-analysis

## In one sentence

Meta-analysis combines estimates from separate studies using a specified statistical method to answer a defined question.

## The intuition

Several small windows can offer a broader view. They help only if you know where each window looks and whether its glass distorts the scene. Combining studies can improve precision, but a larger combined result can still answer the wrong question or combine biased evidence.

## How it works

A **systematic review** uses explicit methods to find, select and appraise relevant studies. Meta-analysis is its possible statistical component. Some reviews should not pool results because the populations, interventions, comparators or endpoints differ too much.

Pooling commonly uses a weighted combination of estimates. A **common-effect model** targets a shared underlying effect; a **random-effects model** allows a distribution of study effects and summarizes its mean. Neither removes bias. [Cochrane Statistical Methods Group: meta-analysis](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10).

**Heterogeneity** can describe differences in populations or methods; statistical heterogeneity concerns variation in underlying effects beyond sampling error. Investigate differences in setting, method and risk of bias. A [confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) for an average and a prediction interval describing possible study effects answer different questions. Prediction intervals also have assumptions and can be unreliable with few studies. [Higgins, Thompson and Spiegelhalter: random-effects interpretation](https://doi.org/10.1111/j.1467-985X.2008.00552.x).

### Read heterogeneity with its units

**I-squared (I²)** estimates the proportion of variability in study estimates attributed to heterogeneity rather than sampling error. It is not the percentage of people helped or a universal “safe to pool” threshold. **Tau-squared (τ²)** estimates between-study effect variance on the model’s scale: for a log risk ratio, its units are squared log risk-ratio units. Both estimates can be uncertain, especially with few studies. Clinical and methodological compatibility still needs inspection.

## Why it matters in cancer

Trials may compare different treatment sequences or count different events. Preserve each study's question before pooling. Several papers can report the same participants; a later follow-up is additional information, not an independent trial. Count unique studies and check overlapping cohorts.

A pooled observational association does not acquire randomized treatment assignment by becoming larger. A combined estimate also does not identify one person's benefit.

## Worked example

Two fictional studies report [risk differences](/wiki/education/concepts/evidence-and-statistics/effect-measures/absolute-relative-risk-and-nnt) of minus 4 and minus 8 percentage points for recurrence or death by three years from randomization, using the same event definition. Suppose a specified teaching calculation gives them normalized weights of 0.75 and 0.25. Their weighted mean is `0.75 × (−4) + 0.25 × (−8) = −5` percentage points. These weights are supplied only to illustrate averaging; they are not derived estimates of study precision.

Now discover that the first study started follow-up at randomization and the second at a later response-selected landmark. The arithmetic is still correct, but the studies answer different questions. Revisit inclusion and the target estimate before presenting the mean as a treatment effect.

## The review record

Keep search dates, inclusion rules, unique study identities, risk-of-bias appraisal, endpoint and time horizon, effect scale, model and weights, uncertainty and sensitivity analyses. **Publication bias** arises when availability of studies depends on their findings; a pooled published sample can therefore omit relevant evidence. The Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) checklist supports transparent reporting rather than certifying validity.

## Common confusions

- A systematic review need not include a meta-analysis.
- More papers do not necessarily mean more independent participants.
- A random-effects model does not make clinical differences or reporting bias disappear.
- A precise pooled mean does not mean effects are similar in every setting.
- A prediction interval for study effects is not an individual's prognosis interval.

## Try it

An abstract, full trial report and later follow-up all appear in a review. Should they receive three independent study weights?

**Answer:** No. Link the reports to their shared trial and choose the appropriate information for the defined analysis, avoiding duplicate participants.

## Explain it back

“A precise pooled mean can coexist with ___.” One answer: “different effects across settings, biased studies or missing reports.”

## Takeaway

**Inspect study identities and compatibility before trusting the combined number.**

## Related concepts

- [Publication versions](/wiki/education/concepts/evidence-and-statistics/study-design/abstract-vs-peer-reviewed)
- [Confounding](/wiki/education/concepts/evidence-and-statistics/study-design/observational-studies-and-confounding)
- [Confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval)

## Sources and scope

Source check: October 10, 2026. Studies, effects and weights are fictional. Expert and learner review remain pending.

- [Cochrane Statistical Methods Group, chapter 10: pooling and heterogeneity](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10).
- [Higgins, Thompson and Spiegelhalter, 2009: random-effects meta-analysis](https://doi.org/10.1111/j.1467-985X.2008.00552.x).
- [PRISMA 2020: reporting systematic reviews](https://www.bmj.com/content/372/bmj.n71).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
