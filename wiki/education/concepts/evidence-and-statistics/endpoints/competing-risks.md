---
title: "Competing risks and cumulative incidence"
type: concept
domain: evidence-and-statistics/endpoints
level: advanced
sensitive: false
tags: [education, evidence-and-statistics]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: competing-risks
aliases: [competing risk, competing risks, competing event, competing events, cumulative incidence, cumulative incidence function, Aalen-Johansen, Aalen–Johansen estimator, Fine-Gray, Fine–Gray, subdistribution hazard, cause-specific hazard]
summary: "A competing risk is an event, such as death from another cause, that prevents the event of interest from happening; cumulative incidence estimates the probability of the event of interest while accounting for it."
prerequisites:
  - "[[wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier]]"
  - "[[wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints]]"
used_by: ["[[wiki/education/guides/reading-cancer-evidence/05-read-a-real-trial]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
---

# Competing risks and cumulative incidence

## In one sentence

A competing risk is an event, such as death from another cause, that prevents the event of interest from happening; cumulative incidence estimates the probability of the event of interest while accounting for it.

## The intuition

Imagine counting how many runners trip on a particular hurdle. Some runners leave the race earlier for other reasons. They can never trip on that hurdle. If you pretend they were merely "out of view" and might still trip later, you will overestimate how many runners trip.

The analogy has a limit. In real data, the competing event, the event of interest and ordinary loss to follow-up can all occur, and each needs its own handling.

## How it works

Take a study of breast-cancer recurrence. A person who dies of another cause before any recurrence can no longer have a first recurrence. Death is then a **competing event** for that endpoint.

A [Kaplan–Meier curve](/wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier) handles **censoring**: people whose follow-up ended but who could still have the event later. If deaths are treated as censored, the curve assumes those people remain at risk of recurrence in some hypothetical future. One minus that curve then estimates recurrence in a world where nobody dies of anything else, and even that reading holds only if deaths are unrelated to recurrence risk, which cannot be checked from the data. It is biased upward as a real-world probability, whether or not the competing events are independent of recurrence [1].

The **cumulative incidence function** gives the probability of having the event of interest by a given time, in a world where competing events can happen. Its standard nonparametric estimate is the **Aalen–Johansen estimator** [2]. At each recurrence time it multiplies:

1. the probability of still being free of *every* event just before that time, by
2. the fraction of people at risk who have a recurrence at that time.

It then adds these steps up. Deaths lower the first factor, so they reduce later increments instead of being ignored.

## Worked example: count it by hand

Ten fictional people are followed for 5 years. Nobody is lost to follow-up.

| Year | What happens | At risk before | 1 − Kaplan–Meier, deaths censored | Cumulative incidence (Aalen–Johansen) |
|---|---|---|---|---|
| 1 | 2 die without recurrence | 10 | 0% | 0% |
| 2 | 2 recur | 8 | 1 − 6/8 = 25% | 0.8 × 2/8 = 20% |
| 3 | 2 die without recurrence | 6 | 25% | 20% |
| 4 | 2 recur | 4 | 1 − (6/8 × 2/4) = 62.5% | 20% + 0.4 × 2/4 = 40% |
| 5 | 2 remain free of both events | 2 | 62.5% | 40% |

Four of the ten people had a recurrence, so the true observed proportion is 40%. Cumulative incidence gives 40%. One minus Kaplan–Meier gives 62.5%, because it treated the four people who died as if they could still recur.

## Two kinds of regression

When a study compares groups, two models answer different questions [1, 3]:

| Model | What it compares | Better suited to |
|---|---|---|
| **Cause-specific hazard** (usually a Cox model with competing events censored) | The rate of the event of interest among people still free of all events | Questions about cause and mechanism |
| **Subdistribution hazard** (the Fine–Gray model) | Effects on the cumulative incidence itself | Estimating a person's absolute risk |

Fine–Gray is a regression model. It is not the estimator of the cumulative incidence curve, which is Aalen–Johansen.

## Why it matters in cancer

- A survey of 100 studies with Kaplan–Meier analyses in prominent medical journals found 46 susceptible to competing-risk bias. Among 16 that reported enough data to check, 6 overstated the event risk by 10% or more relative to the true risk [4].
- Endpoints such as local recurrence or brain metastasis as first event need competing-risk methods; death and other first sites compete with them.
- Composite endpoints that count death as an event, such as [event-free survival](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints), avoid this problem for the composite, but not for its components reported separately.
- The bias grows when competing events are common, for example in older people or long follow-up.

## Common confusions

- **Censoring is not the same as a competing event.** Censoring hides a future that could still happen; a competing event rules it out.
- **"1 − Kaplan–Meier" is not a risk when competing events exist.** It answers a hypothetical question.
- **A cause-specific hazard ratio and a subdistribution hazard ratio are not interchangeable.** The same treatment can have different values on each; see [hazard ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio).
- **Cumulative incidences add up.** The cumulative incidence of recurrence plus that of death without recurrence, plus the probability of being free of both, equals 100%.

## Try it

A fictional report on women over 75 gives a 10-year local-recurrence risk of 12% from "1 − Kaplan–Meier, with deaths censored." Many participants died of other causes. Is 12% the chance of a local recurrence in this group?

**Answer:** Probably not. Censoring deaths treats people who died as if they could still recur, so 12% overstates the real-world probability. Ask for the cumulative incidence with death as a competing event.

## Explain it back

"When some people die before they can have a recurrence, ___ overstates recurrence risk, while ___ does not, because it ___."

**One possible answer:** "One minus Kaplan–Meier; cumulative incidence (Aalen–Johansen); treats death as an event that removes the chance of recurrence instead of as missing follow-up."

## Takeaway

**When another event can stop the event of interest, ask for cumulative incidence, not one minus Kaplan–Meier.**

## Related concepts

- [Kaplan–Meier curves](/wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier)
- [Survival endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints)
- [Hazard ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio)
- [Denominators and conditional probability](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/denominators-and-conditional-probability)

## Sources and scope

Source-checked November 8, 2026 against the cited abstracts. General statistics education; expert and learner review pending. The worked example and practice report are fictional.

1. [Austin, Lee and Fine, Circulation 2016: competing risks tutorial](https://pubmed.ncbi.nlm.nih.gov/26858290/) — cumulative incidence versus 1 − Kaplan–Meier and the two regression families.
2. [Putter, Fiocco and Geskus, Statistics in Medicine 2007: competing risks and multi-state models](https://pubmed.ncbi.nlm.nih.gov/17031868/) — cumulative incidence estimation.
3. [Fine and Gray, JASA 1999: proportional hazards model for the subdistribution of a competing risk](https://doi.org/10.1080/01621459.1999.10474144).
4. [van Walraven and McAlister, Journal of Clinical Epidemiology 2016: competing risk bias in published Kaplan–Meier estimates](https://pubmed.ncbi.nlm.nih.gov/26232083/).
- [Gooley and colleagues, Statistics in Medicine 1999: estimating failure probabilities with competing risks](https://pubmed.ncbi.nlm.nih.gov/10204198/) — why the complement of Kaplan–Meier misleads.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read a real trial: KEYNOTE-522](/wiki/education/guides/reading-cancer-evidence/05-read-a-real-trial)
- [Read trial claims, survival statistics and single success stories](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
