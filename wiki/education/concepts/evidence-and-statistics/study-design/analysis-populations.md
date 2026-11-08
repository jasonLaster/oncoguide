---
title: "Analysis populations: intention-to-treat, per-protocol and safety"
type: concept
domain: evidence-and-statistics/study-design
level: intermediate
sensitive: false
tags: [education, evidence-and-statistics]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: analysis-populations
aliases: [analysis population, analysis populations, analysis set, intention-to-treat, intention to treat, intent-to-treat, ITT, modified intention-to-treat, mITT, per-protocol, per protocol, as-treated, safety population, full analysis set]
summary: "An analysis population is the defined group of trial participants whose data enter a particular analysis; intention-to-treat, modified intention-to-treat, per-protocol, as-treated and safety populations answer different questions."
prerequisites:
  - "[[wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization]]"
  - "[[wiki/education/concepts/evidence-and-statistics/reasoning-tools/denominators-and-conditional-probability]]"
used_by: ["[[wiki/education/guides/engineered-cell-therapy/10-read-a-research-product-study]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation]]","[[wiki/education/guides/reading-cancer-evidence/01-name-the-comparison-and-endpoint]]","[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/05-read-a-real-trial]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
---

# Analysis populations: intention-to-treat, per-protocol and safety

## In one sentence

An analysis population is the defined group of trial participants whose data enter a particular analysis; intention-to-treat, modified intention-to-treat, per-protocol, as-treated and safety populations answer different questions.

## The intuition

A school compares two reading programs by assigning classes at random. One report counts every student assigned to each program, including those who switched classes or skipped lessons. Another counts only students who attended every lesson. The second sounds cleaner, but the students who kept attending may differ from those who stopped. The analogy has a limit: in a trial, stopping treatment is often caused by side effects or worsening disease, which also affect outcomes.

## How it works

Randomization makes the groups comparable at the start. Each population below keeps or gives up part of that protection.

| Population | Who is counted | Grouped by | Question it answers |
|---|---|---|---|
| **Intention-to-treat (ITT)** | Everyone randomized | Assigned group | What happens when this strategy is assigned? |
| **Modified intention-to-treat (mITT)** | Everyone randomized minus prespecified exclusions, such as people who never started treatment | Assigned group | Close to ITT, if the exclusions could not depend on the assignment |
| **Per-protocol** | People who followed the protocol closely enough, without major violations | Assigned group | What happens among people who took it as planned? |
| **As-treated** | Everyone, by what they actually received | Treatment received | Gives up randomization; prone to bias |
| **Safety population** | Everyone who received at least one dose | Treatment received | Which harms occurred on each treatment? |

The International Council for Harmonisation (ICH) E9 guideline calls the practical version of ITT the **full analysis set**. It allows a few justified exclusions, such as major eligibility violations measured before randomization or people who never took a dose, when those exclusions cannot be influenced by the assignment [1]. The safety summary usually covers people who received at least one dose [1].

The later ICH E9(R1) addendum asks trials to state the question first. It calls this the **estimand**: what happens to people who stop treatment, switch or die before the outcome is measured is part of the question, not a cleanup step [2].

## Worked example: dropping people changes the answer

A fictional trial randomizes 100 people to new treatment A and 100 to standard treatment B. The endpoint is recurrence by 3 years, with complete follow-up.

| Group | People | Recurrences | Risk |
|---|---|---|---|
| A, completed treatment | 80 | 16 | 20% |
| A, stopped early because of side effects | 20 | 10 | 50% |
| A, everyone assigned (ITT) | 100 | 26 | 26% |
| B, everyone assigned (all completed) | 100 | 26 | 26% |

The ITT comparison is 26% versus 26%: no difference. A per-protocol analysis keeps only A's completers: 20% versus 26%, which looks like a 6-point benefit. That apparent benefit comes from removing the 20 frailer people who could not tolerate A. Nothing about A's effect changed; only the denominator did.

## Real examples in breast cancer

- **KEYNOTE-522** analyzed its two primary endpoints in the ITT population: all 1,174 people randomized, 784 to pembrolizumab and 390 to placebo [3]. Its first [pathologic complete response (pCR)](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr) result came from the first 602 randomized, a planned [interim analysis](/wiki/education/concepts/evidence-and-statistics/study-design/interim-analysis) population that was still analyzed as randomized [3].
- **BrighTNess** ran its efficacy analyses by ITT across 634 randomized people. Its safety analyses included those who received at least one dose, 628 people [4].

## Why it matters in cancer

- ITT protects the randomized comparison, so it is the usual primary analysis in superiority trials. In [non-inferiority trials](/wiki/education/concepts/evidence-and-statistics/study-design/non-inferiority-trials), poor adherence can make arms look alike, so per-protocol results are reported too.
- Response rates often use an "evaluable" subset. Removing people without follow-up scans can raise the rate; see [response rates](/wiki/education/concepts/evidence-and-statistics/endpoints/response-rates).
- Harms tables usually use the safety population, so their denominators can differ from the efficacy table's.

## Common confusions

- **"Modified ITT" has no single definition.** A review found 475 trials reporting it; 80% excluded people after randomization, often for reasons tied to treatment received [5]. Read the exclusions.
- **ITT does not mean everyone finished treatment.** It means everyone is counted in the group they were assigned to.
- **Per-protocol is not the "true" effect.** It answers a different question in a group selected after randomization.
- **Saying ITT is not always doing ITT.** In trial reports published in 1997, 12 of 119 that claimed ITT excluded people who never started treatment, 3 did not analyze everyone as allocated, and 75% had missing primary-outcome data, often handled poorly [6].

## Try it

A fictional report says, "In the per-protocol population, the new drug reduced recurrence by 8 points." The ITT difference is 2 points with a wide interval. Which result describes assigning the drug?

**Answer:** The ITT result. The per-protocol figure describes people who stayed on treatment, a group shaped by tolerance and health after randomization. Ask how many were excluded from each arm and why.

## Explain it back

"Intention-to-treat counts ___ in ___; per-protocol counts ___."

**One possible answer:** "Everyone randomized, in the group they were assigned to; only those who followed the protocol, which can reintroduce the bias randomization removed."

## Takeaway

**Before reading a trial number, ask who was counted and who was left out, and whether leaving them out could depend on the treatment.**

## Related concepts

- [Trial phases and randomization](/wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization)
- [Denominators and conditional probability](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/denominators-and-conditional-probability)
- [Non-inferiority trials](/wiki/education/concepts/evidence-and-statistics/study-design/non-inferiority-trials)
- [Exploratory versus prespecified analysis](/wiki/education/concepts/evidence-and-statistics/study-design/exploratory-vs-prespecified-analysis)

## Sources and scope

Source-checked November 8, 2026 against the ICH E9 text and primary abstracts. General statistics education; expert and learner review pending. The worked trial is fictional.

1. [ICH E9: Statistical principles for clinical trials (FDA)](https://www.fda.gov/media/71336/download) — full analysis set, per protocol set and safety set.
2. [ICH E9(R1): Estimands and sensitivity analysis (FDA)](https://www.fda.gov/media/148473/download).
3. [Schmid and colleagues, NEJM 2020: KEYNOTE-522](https://pubmed.ncbi.nlm.nih.gov/32101663/).
4. [Loibl and colleagues, Lancet Oncology 2018: BrighTNess](https://pubmed.ncbi.nlm.nih.gov/29501363/).
5. [Abraha and Montedori, BMJ 2010: modified intention-to-treat reporting](https://pubmed.ncbi.nlm.nih.gov/20547685/).
6. [Hollis and Campbell, BMJ 1999: what is meant by intention to treat analysis?](https://pubmed.ncbi.nlm.nih.gov/10480822/)

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read a research-product study without losing the denominator](/wiki/education/guides/engineered-cell-therapy/10-read-a-research-product-study)
- [Read the validation behind the claim](/wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation)
- [Name the comparison and endpoint](/wiki/education/guides/reading-cancer-evidence/01-name-the-comparison-and-endpoint)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read a real trial: KEYNOTE-522](/wiki/education/guides/reading-cancer-evidence/05-read-a-real-trial)
- [Read trial claims, survival statistics and single success stories](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
