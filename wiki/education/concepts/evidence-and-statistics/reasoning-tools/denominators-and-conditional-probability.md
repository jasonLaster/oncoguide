---
title: "Denominators and conditional probability"
type: concept
domain: evidence-and-statistics/reasoning-tools
summary: "A conditional probability describes how often an event occurs within a specified group, so its denominator must identify that group."
glossary_anchor: denominators-and-conditional-probability
aliases: ["denominators-and-conditional-probability", "conditional probability", "denominator"]
level: foundation
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates]]"]
used_by: ["[[wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/index]]","[[wiki/education/guides/reading-cancer-evidence/01-name-the-comparison-and-endpoint]]","[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/index]]","[[wiki/education/modeling-tumor-response/verification-and-feedback-loops]]"]
sensitive: false
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
source_checked: 2026-10-10
updated: 2026-10-10
tags: [education, evidence-and-statistics]
---

# Denominators and conditional probability

## In one sentence

A conditional probability describes how often an event occurs within a specified group, so its denominator must identify that group.

## The intuition

Suppose someone says, “Half had a response.” Half of whom: everyone enrolled, everyone treated or everyone with a scan? The fraction may be calculated correctly and still answer a different question from the one you have in mind.

Read the denominator as a doorway into the group. Changing that doorway changes the question. It does not automatically reveal why the group had its outcome.

## How it works

The **numerator** counts the observations meeting the stated event rule. The **denominator** counts the relevant group or amount of observation. A simple proportion divides the first by the second.

Write `P(A | B)` as “the probability of A among those satisfying B.” The vertical bar means “given,” not “caused by.” For events with `P(B) > 0`, the rule is `P(A | B) = P(A and B) / P(B)`. A conditional probability is undefined when the conditioning event has probability zero. [Hernán and Robins: association and conditioning](https://miguelhernan.org/whatifbook).

The direction matters. The chance of a positive test among people with disease differs from the chance of disease among people with a positive test. [Positive predictive value and base rates](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates) works through that reversal.

Name the observation unit too. People, lesions, blood draws and laboratory wells give different denominators. An event count per person-time is a **rate**, not a simple probability: one person can contribute multiple periods or events under the specified rule.

When follow-up is incomplete, an observed event count divided by everyone enrolled may not estimate risk at a chosen date. [Kaplan–Meier estimation](/wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier) and competing-risk methods address particular time-to-event questions and assumptions.

## A worked example

A fictional study enrolls twenty people. Six never receive the product. Of fourteen treated people, ten have an evaluable follow-up scan. Five of those ten meet the stated response rule.

| Description | Calculation | What the denominator says |
|---|---:|---|
| Observed responders among enrolled people | 5/20 = 25% | Includes everyone enrolled |
| Observed responders among treated people | 5/14 ≈ 35.7% | Includes everyone treated |
| Responders among scan-evaluable people | 5/10 = 50% | Excludes treated people without evaluable scans |

These descriptions do not establish the missing participants' outcomes. The first two count **observed** responses; calling everyone else a confirmed non-responder would add an unsupported assumption. A protocol may define an analysis that treats missing assessments as non-response. Report that rule and its sensitivity analyses rather than silently improvising one. [CONSORT 2025: participant flow and analysis counts](https://www.bmj.com/content/389/bmj-2024-081124).

<img src="./images/analysis-population-denominators-v1-light.svg" alt="Three count strips show the same five observed responses among twenty enrolled, fourteen treated and ten scan-evaluable people. Five other evaluable scans did not meet the response rule, four treated people lack evaluable scans, and six were not treated; these last two groups have no supplied response outcome." width="390" height="720" data-theme-pair>

*Fictional data: the same five observed responses give 5/20, 5/14 and 5/10 because the counted group changes. Scan-evaluable people are a subset of treated people, who are a subset of enrolled people. Four treated people lack an evaluable scan; six were not treated. Neither group’s response outcomes are supplied.*

Now take a separate, complete fictional cohort of one hundred people: twenty have recurrence, and five of those twenty have brain involvement. The proportion with brain involvement **among those with recurrence** is 5/20 = 25%. The proportion **among the original cohort** is 5/100 = 5%. Neither number is a personal forecast.

## Try it

A fictional study has forty enrolled people, thirty treated people and twenty evaluable scans. Eight scans meet the response rule. Complete this sentence: “The observed response proportion among people with evaluable scans is ___.” Does that establish the outcomes of the other enrolled people?

**Answer:** Eight divided by twenty is 40%. It does not establish the other outcomes. Eight divided by forty is 20% observed responders among everyone enrolled; that denominator answers a different question.

## Why it matters in cancer

- A safety table may count treated people, while an efficacy table counts a different analysis set.
- A biomarker subgroup or later disease-free landmark changes who contributes to the estimate.
- Several reports from the same participants do not create additional independent people.

## Common confusions

- **Conditional probability versus causation:** a group defined by treatment response may also be selected by underlying biology.
- **Evaluable versus enrolled:** exclusion reasons can affect interpretation, especially when disease progression prevents assessment.
- **Percentages versus percentage points:** a changed proportion needs its reference proportion attached.
- **Patient denominator versus sample denominator:** repeated samples do not become independent patients.

## Related concepts

- [Population versus individual risk](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/population-vs-individual-risk).
- [Survival endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints).
- [Observational studies and confounding](/wiki/education/concepts/evidence-and-statistics/study-design/observational-studies-and-confounding).

## Sources and scope

Source check: October 10, 2026. General probability and denominator education; all cohorts and numbers are fictional. Expert and learner review remain pending.

- [Hernán and Robins, Causal Inference: What If](https://miguelhernan.org/whatifbook) — author-linked August 19, 2026 version, chapters 1–2; conditional associations and causal contrasts.
- [CONSORT 2025 explanation and elaboration](https://www.bmj.com/content/389/bmj-2024-081124) — distinguish assigned, treated, observed and analyzed participants.
- [FDA: cancer-trial endpoint guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-trial-endpoints-approval-cancer-drugs-and-biologics) — assessment and analysis rules belong to the endpoint.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the validation behind the claim](/wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation)
- [Judge a test or company claim](/wiki/education/guides/judging-a-test-or-vendor-claim/index)
- [Name the comparison and endpoint](/wiki/education/guides/reading-cancer-evidence/01-name-the-comparison-and-endpoint)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
- [Test clinical relevance and learn from feedback](/wiki/education/modeling-tumor-response/verification-and-feedback-loops)
<!-- END GENERATED USED IN -->
