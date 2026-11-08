---
title: "Non-inferiority trials"
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
glossary_anchor: non-inferiority-trials
aliases: [non-inferiority trial, noninferiority trial, non-inferiority, noninferiority, non-inferiority margin, equivalence trial, superiority trial]
summary: "A non-inferiority trial tests whether a new treatment is worse than an established one by no more than a margin chosen in advance, usually because the new option is simpler, shorter or less harmful."
prerequisites:
  - "[[wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval]]"
  - "[[wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization]]"
used_by: ["[[wiki/education/guides/local-therapy-and-the-immune-system/06-comparisons]]","[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
---

# Non-inferiority trials

## In one sentence

A non-inferiority trial tests whether a new treatment is worse than an established one by no more than a margin chosen in advance, usually because the new option is simpler, shorter or less harmful.

## The intuition

Suppose a town wants a lighter, cheaper bridge. It does not need the new bridge to carry more than the old one. It needs proof that the new bridge carries nearly as much, within a safety allowance agreed before testing. A non-inferiority trial sets that allowance, called the **margin**, before any results are seen.

The analogy has a limit. A bridge load can be measured exactly. A trial estimates the difference with uncertainty, and the margin is a judgment about how much benefit people would trade for the advantages of the new option.

## How it works

Three trial questions sound alike but test different claims:

| Design | Question | What counts as success |
|---|---|---|
| **Superiority** | Is the new option better? | The [confidence interval (CI)](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) excludes no difference, on the favorable side |
| **Non-inferiority** | Is the new option not worse by more than the margin? | The CI's worse-side limit stays inside the margin |
| **Equivalence** | Is the difference small in both directions? | The whole CI lies between a lower and an upper margin |

The steps are:

1. **Choose the margin before the trial.** The U.S. Food and Drug Administration (FDA) describes two quantities. M1 is the whole benefit the established treatment is believed to provide, estimated from earlier trials. M2 is the smaller loss judged clinically acceptable, a fraction of M1 [1].
2. **Estimate the difference.** For example, a [hazard ratio (HR)](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio) for new versus standard, where values above 1 are worse.
3. **Compare the interval with the margin.** If the margin is HR 1.3 and the upper CI limit is 1.16, the trial has ruled out a loss that large. FDA generally asks for the two-sided 95% interval [1]. Some academic trials use a one-sided 5% level, which corresponds to a two-sided 90% interval.

Non-inferiority rests on an assumption the trial cannot check directly: that the established treatment still works about as well as it did in the earlier trials. Poor conduct makes this worse. Missed doses, crossover and lost follow-up push the two arms toward looking alike. In a superiority trial that hides a real benefit. In a non-inferiority trial it can create a false claim of "not worse." FDA warns that an [intention-to-treat analysis](/wiki/education/concepts/evidence-and-statistics/study-design/analysis-populations), conservative in superiority trials, is "not necessarily conservative" here [1]. Reports therefore show per-protocol results too [2].

A trial may plan a two-step test: non-inferiority first and superiority second. The reverse switch, claiming non-inferiority after a superiority trial fails, needs a margin that was set in advance.

## Real examples in breast cancer

| Trial | Question | Margin | Result |
|---|---|---|---|
| Z0011 | Sentinel-node removal alone versus full axillary dissection, with 1–2 positive sentinel nodes | Overall survival HR 1.3 | 10-year overall survival 86.3% vs 83.6%; HR 0.85, one-sided 95% upper limit 1.16: non-inferior [3] |
| PERSEPHONE | 6 versus 12 months of trastuzumab for HER2 (human epidermal growth factor receptor 2)-positive disease | 3 percentage points in 4-year disease-free survival | 89.4% vs 89.8%; HR 1.07 (90% CI 0.93–1.24): non-inferior, with fewer heart-related stops [4] |
| EA1131 | Platinum versus capecitabine for residual basal-subtype triple-negative breast cancer (TNBC) | Non-inferiority, with superiority as the alternative | Stopped at 61% of planned information; 3-year invasive disease-free survival 42% vs 49%; neither claim was attainable [5] |

Z0011 also shows a second problem. It planned 1,900 women and 500 deaths but closed early at 891 women because deaths were fewer than expected [6]. That left it with less [statistical power](/wiki/education/concepts/evidence-and-statistics/study-design/statistical-power-and-sample-size) than planned, a limit to weigh beside its result.

## Why it matters in cancer

- De-escalation questions, such as less surgery, shorter treatment or less radiation, are usually non-inferiority questions.
- The margin is the price the trial accepted. Ask whether a loss up to that size would matter to the person deciding.
- A non-inferiority result belongs to its population, its comparator and its endpoint, like any other result.

## Common confusions

- **"No significant difference" is not non-inferiority.** A superiority trial that misses its target has not ruled out a meaningful loss; see [absence of evidence](/wiki/education/concepts/evidence-and-statistics/biomarkers/absence-of-evidence).
- **Non-inferior is not identical.** The new option may be slightly worse, within the margin.
- **A treatment can be non-inferior and statistically worse at once.** An HR of 1.15 with CI 1.02–1.28 excludes no difference, yet stays inside a 1.3 margin.
- **Relative and absolute margins differ.** An HR margin of 1.3 permits a larger absolute loss when events are common.
- **Chains of non-inferiority can drift.** If each new option is "not much worse" than the last, small losses can add up, sometimes called biocreep.

## Try it

A fictional trial compares a shorter treatment with a standard one. Its margin is 3 percentage points of 4-year disease-free survival. The observed difference is 1.0 point worse, with a 90% CI from 2.6 points worse to 0.6 points better. Was non-inferiority shown? What if the interval ran from 3.6 points worse to 1.6 points better?

**Answer:** The first interval stays inside the 3-point margin, so non-inferiority was shown at that level. The second crosses the margin, so the result is inconclusive. It shows neither non-inferiority nor harm.

## Explain it back

"A non-inferiority trial succeeds when ___ stays inside ___, which was chosen ___."

**One possible answer:** "The worse-side limit of the confidence interval; the margin; before the trial, from the standard treatment's known benefit and the loss people would accept."

## Takeaway

**Read a non-inferiority claim by its margin first: it names the loss the trial was willing to accept.**

## Related concepts

- [Confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval)
- [Analysis populations](/wiki/education/concepts/evidence-and-statistics/study-design/analysis-populations)
- [Statistical power and sample size](/wiki/education/concepts/evidence-and-statistics/study-design/statistical-power-and-sample-size)
- [Absence of evidence](/wiki/education/concepts/evidence-and-statistics/biomarkers/absence-of-evidence)
- [Interim analysis](/wiki/education/concepts/evidence-and-statistics/study-design/interim-analysis)

## Sources and scope

Source-checked November 8, 2026 against the FDA guidance text and the primary abstracts. General statistics education; expert and learner review pending. The practice trial is fictional.

1. [FDA 2016: Non-inferiority clinical trials to establish effectiveness](https://www.fda.gov/media/78504/download) — M1 and M2 margins, assay sensitivity and the intention-to-treat caution.
2. [Piaggio and colleagues, JAMA 2012: CONSORT extension for non-inferiority and equivalence trials](https://pubmed.ncbi.nlm.nih.gov/23268518/).
3. [Giuliano and colleagues, JAMA 2017: ACOSOG Z0011 10-year overall survival](https://pubmed.ncbi.nlm.nih.gov/28898379/).
4. [Earl and colleagues, Lancet 2019: PERSEPHONE](https://pubmed.ncbi.nlm.nih.gov/31178152/).
5. [Mayer and colleagues, JCO 2021: EA1131](https://pubmed.ncbi.nlm.nih.gov/34092112/).
6. [Giuliano and colleagues, JAMA 2011: Z0011 design and early closure](https://pubmed.ncbi.nlm.nih.gov/21304082/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Compare delivery and recognition separately](/wiki/education/guides/local-therapy-and-the-immune-system/06-comparisons)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims, survival statistics and single success stories](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
