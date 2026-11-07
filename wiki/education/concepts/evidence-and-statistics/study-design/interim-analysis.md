---
title: "Interim analysis"
type: "concept"
domain: "evidence-and-statistics/study-design"
summary: "An interim analysis compares trial arms before the trial's planned end, using prespecified timing and stricter significance thresholds so that looking early does not inflate false-positive findings."
glossary_anchor: "interim-analysis"
aliases: ["interim analysis", "interim analyses", "group sequential design", "alpha spending", "stopping boundary", "data maturity", "early stopping"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization]]", "[[wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing]]"]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
sensitive: false
tags: ["education", "evidence-and-statistics"]
updated: "2026-11-07"
source_checked: "2026-11-07"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Interim analysis

## In one sentence

An interim analysis compares trial arms before the trial's planned end, using prespecified timing and stricter significance thresholds so that looking early does not inflate false-positive findings.

## The intuition

If you check a coin-flip contest after every flip, sooner or later one side will look ahead by luck. Peeking many times raises the chance of declaring a false winner. A trial that plans to look early therefore sets a higher bar for each early look. The analogy has a limit: trials also look early for safety, and an early stop can be the right call.

## How it works

1. **Plan the looks.** The protocol fixes when analyses happen, usually after a set number of events (the **information fraction**: events so far divided by events planned) [1].
2. **Split the error allowance.** The trial's overall false-positive allowance (often a two-sided 5%, called alpha) is divided across the looks, a method called **alpha spending**. Early looks get small shares, so their thresholds are strict [1, 2].
3. **Apply stopping boundaries.** An independent data monitoring committee sees unblinded results. It can recommend stopping for clear benefit, for **futility** (a real difference has become unlikely) or for harm [1].
4. **Keep everyone else blind.** Investigators learn only whether the trial continues [1].

**Data maturity** is how much follow-up and how many events an analysis has. An endpoint is "immature" when too few events have occurred to estimate it well, which is common for overall survival at early looks.

## Real examples in breast cancer

| Trial | What happened at an interim analysis |
|---|---|
| KEYNOTE-522 | [Pathologic complete response (pCR)](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr) was reported at the first interim analysis, among the first 602 randomized; event-free survival at the fourth planned interim analysis [3, 4] |
| OlympiA | At the first interim analysis, fewer deaths with olaparib (P = 0.02) did not meet that look's threshold of P < 0.01; at the second, overall survival met its threshold of P < 0.015 (P = 0.009) [5, 6] |
| CREATE-X | Met its primary endpoint at a prespecified interim analysis and stopped early [7] |
| EA1131 | Stopped for futility at 61% of planned information: platinum was unlikely to prove non-inferior or superior to capecitabine [8] |

## Why it matters in cancer

- Results for pCR, [event-free survival](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints) and overall survival usually arrive years apart, at different looks, each with its own threshold.
- "Not significant yet" at an early look is not "no effect": OlympiA's survival result crossed its boundary at the next look.
- Trials stopped early for benefit tend to overestimate the effect. Across 91 such trials, the relative risks averaged 0.71 times those of comparable trials that ran to completion, a more favorable-looking effect [9].

## Common confusions

- An interim analysis is not an unplanned peek; unplanned looks undermine the error control.
- A P value at an interim look is judged against that look's boundary, not against 0.05.
- Stopping for futility does not prove the arms are equal; it shows a meaningful difference became unlikely.
- Median follow-up is not the same as data maturity; event counts matter more.

## Try it

A trial plans two survival looks. At the first, P = 0.03 against a boundary of P < 0.01. A headline says "survival benefit not shown." Is that right?

**Answer:** Partly. The result did not cross that look's boundary, so benefit was not established yet. It is not evidence of no benefit; the next look may cross its own threshold, as OlympiA's did.

## Explain it back

"An interim analysis uses a stricter threshold because ___."

**One possible answer:** "Every extra look is another chance for a false-positive result, so the overall error allowance is split across the looks."

## Takeaway

**Read an early trial result with its look number, boundary and event count, not just its P value.**

## Related concepts

- [Trial phases and randomization](/wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization)
- [P-values and multiple testing](/wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing)
- [Survival endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints)
- [Kaplan–Meier curves](/wiki/education/concepts/evidence-and-statistics/endpoints/kaplan-meier)

## Sources and scope

Source-checked November 7, 2026 against ICH E9 and primary abstracts. General statistics education; expert and learner review pending.

1. [ICH E9: Statistical principles for clinical trials (FDA)](https://www.fda.gov/media/71336/download) — sections on group sequential designs and interim analysis and early stopping.
2. [O'Brien and Fleming, Biometrics 1979](https://pubmed.ncbi.nlm.nih.gov/497341/) — a widely used stopping boundary.
3. [Schmid and colleagues, NEJM 2020](https://pubmed.ncbi.nlm.nih.gov/32101663/).
4. [Schmid and colleagues, NEJM 2022](https://pubmed.ncbi.nlm.nih.gov/35139274/).
5. [Tutt and colleagues, NEJM 2021](https://pubmed.ncbi.nlm.nih.gov/34081848/).
6. [Geyer and colleagues, Annals of Oncology 2022](https://pubmed.ncbi.nlm.nih.gov/36228963/).
7. [Masuda and colleagues, NEJM 2017](https://pubmed.ncbi.nlm.nih.gov/28564564/).
8. [Mayer and colleagues, JCO 2021](https://pubmed.ncbi.nlm.nih.gov/34092112/).
9. [Bassler and colleagues, JAMA 2010](https://pubmed.ncbi.nlm.nih.gov/20332404/) — ratio of relative risks 0.71, truncated versus nontruncated trials.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the curve and effect](/wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect)
- [Read trial claims, survival statistics and single success stories](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
