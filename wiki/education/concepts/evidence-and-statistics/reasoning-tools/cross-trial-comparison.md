---
title: "Cross-trial comparison"
type: concept
domain: evidence-and-statistics/reasoning-tools
summary: "A cross-trial comparison contrasts results from separate studies whose populations, methods and care may differ, so the contrast does not automatically isolate a treatment effect."
glossary_anchor: cross-trial-comparison
aliases: [cross-trial comparison, cross-trial comparisons, indirect treatment comparison]
level: foundation
prerequisites:
  - "[[wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization]]"
  - "[[wiki/education/concepts/evidence-and-statistics/endpoints/response-rates]]"
used_by: ["[[wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access]]","[[wiki/education/guides/reading-cancer-evidence/01-name-the-comparison-and-endpoint]]","[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
sensitive: false
tags: [education, evidence-and-statistics]
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Cross-trial comparison

## In one sentence

A cross-trial comparison contrasts results from separate studies whose populations, methods and care may differ, so the contrast does not automatically isolate a treatment effect.

## The intuition

Comparing two classrooms' exam averages without checking their students, exams or teaching time can be misleading. It may help generate a question, but it is a poor way to identify the better teaching method. The analogy describes differences in study context; cancer outcomes involve many additional biological and clinical factors.

Seeing a higher response or survival percentage in one paper is a useful reason to inspect it. It is not enough to declare that treatment superior.

## How it works

[Randomization](/wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization) protects a comparison **within** a trial. It does not randomize participants between two separately conducted trials. Even if both trials were randomized, comparing only their experimental-arm percentages discards that protection.

Differences in disease burden, biomarker selection, prior treatment, follow-up, supportive care and assessment rules can produce different results. [Confounding](/wiki/education/concepts/evidence-and-statistics/study-design/observational-studies-and-confounding) describes how other factors can mix with the apparent treatment contrast.

A formal indirect comparison can use a common comparator, retaining each trial's treatment-versus-control contrast. It still needs compatible populations and methods. Bucher's primary method explains why pooling active arms is prone to bias and why an adjusted indirect estimate remains less secure than a suitable direct comparison. [Bucher et al., 1997](https://pubmed.ncbi.nlm.nih.gov/9250266/).

Network meta-analysis connects multiple comparisons. Its **transitivity** assumption asks whether important factors that change treatment effects are sufficiently comparable across the network. A shared drug name is not enough: dose, background care and population can differ. Statistical agreement cannot certify unmeasured compatibility. [Cochrane Handbook, chapter 11](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-11).

## A fictional example: population mix changes the headline

Two single-arm studies use the same defined, confirmed [objective response rate (ORR)](/wiki/education/concepts/evidence-and-statistics/endpoints/response-rates), assessment period and complete denominator. Each enrolls 100 people. A baseline feature divides them into two groups:

| Fictional group | Study A responses | Study B responses |
|---|---|---|
| Favorable baseline feature | 40/80 = 50% | 12/20 = 60% |
| Unfavorable baseline feature | 4/20 = 20% | 24/80 = 30% |
| Everyone | 44/100 = 44% | 36/100 = 36% |

Study A has the higher overall rate, although Study B has the higher rate within each group. Study A enrolled many more people with the favorable feature. The overall percentage hides that mixture.

This arithmetic does **not** establish that B is better: participants were not randomized between studies, and other differences remain. It demonstrates why the crude ranking can mislead. Adjusting for one measured feature does not resolve every bias.

## Why it matters in cancer

An early-stage postoperative study and a heavily pretreated metastatic study ask different questions. Immune responses, [pathologic complete response (pCR)](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr), imaging response and survival are also different endpoints. A percentage from one cannot become a treatment-effect estimate for another setting.

For time-to-event outcomes, retain the starting clock, event definition, assessment schedule and follow-up. The U.S. Food and Drug Administration (FDA) warns that externally controlled survival contrasts can reflect patient selection, imaging or supportive-care differences rather than drug effects. [FDA oncology endpoint guidance, 2018](https://www.fda.gov/media/71195/download).

## The comparison card

Align disease and setting; biomarker assay and threshold; prior care; intervention and background care; comparator; endpoint, units and clock; analysis population; cutoff and uncertainty. A table showing mismatches is often more honest than a ranked list. Read the actual papers rather than treating matching trial acronyms as matching methods.

## Common confusions

- **Two randomized trials versus a randomized A–B comparison:** they are different designs.
- **Similar labels versus comparable endpoints:** “clinical benefit” may include different durations of stable disease.
- **Adjustment versus complete correction:** measured-variable adjustment cannot remove every unmeasured difference.
- **Lower [hazard ratio](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio) versus better treatment:** ratios use their own comparators and cannot rank unrelated studies automatically.

## Try it

A fictional vaccine study reports 90% recurrence-free at two years in selected postoperative patients. A different drug study reports 30% ORR in advanced disease. Can those numbers show the vaccine is more effective?

**Answer:** No. The populations, outcomes and clocks differ. The numbers describe their respective studies. A comparison of treatments needs a relevant shared question and defensible comparative design.

## Explain it back

“The headline differs, but before attributing that difference to treatment I need to compare ___.” One answer: “the enrolled population, background care, comparator, endpoint and follow-up.”

## Takeaway

**Use cross-trial results to locate evidence and gaps; preserve the assumptions before making a comparative claim.**

## Related concepts

[Response rates](/wiki/education/concepts/evidence-and-statistics/endpoints/response-rates) keeps category, denominator and duration attached. [Observational studies and confounding](/wiki/education/concepts/evidence-and-statistics/study-design/observational-studies-and-confounding) explains the remaining comparison problem.

## Sources and scope

Source check: October 10, 2026. Both examples are fictional. This introduction does not certify any actual indirect comparison. Expert and learner review pending.

- [Bucher et al., 1997: primary direct and indirect comparison method](https://pubmed.ncbi.nlm.nih.gov/9250266/) — preserving within-trial comparisons and limits of inference.
- [Cochrane Handbook, chapter 11](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-11) — transitivity and effect modifiers.
- [FDA, December 2018: oncology endpoint guidance](https://www.fda.gov/media/71195/download) — externally controlled survival comparisons.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Check clinical evidence and access](/wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access)
- [Name the comparison and endpoint](/wiki/education/guides/reading-cancer-evidence/01-name-the-comparison-and-endpoint)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
