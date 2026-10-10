---
title: "False discovery rate"
type: "concept"
domain: "evidence-and-statistics/tests-and-prediction"
summary: "The false discovery rate is the expected fraction of false findings among a procedure’s selected findings, with that fraction defined as zero when none are selected."
glossary_anchor: "false-discovery-rate"
aliases: ["FDR", "false discovery rate"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing]]"]
used_by: []
sensitive: false
tags: ["education", "evidence-and-statistics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# False discovery rate

## In one sentence

The false discovery rate is the expected fraction of false findings among a procedure’s selected findings, with that fraction defined as zero when none are selected.

## The intuition

Suppose a search returns a basket of candidates. You care how many selected candidates could be false finds, rather than only how many searches were performed. **False discovery rate (FDR)** concerns the basket produced by a defined procedure. It does not certify each item in it.

## How it works

Imagine repeating the entire procedure on comparable data. In each repeat, divide false selections by all selections, using zero if there are no selections. FDR is the average of that fraction across repeats under the statistical model. The false labels are generally unknown in a real dataset.

An FDR-controlling procedure therefore targets an expected proportion. It is different from controlling the probability of even one false selection, called the **family-wise error rate**. The original Benjamini–Hochberg procedure establishes its control under independent test statistics; dependence conditions and the method used need attention. [Benjamini and Hochberg, 1995](https://rss.onlinelibrary.wiley.com/doi/10.1111/j.2517-6161.1995.tb02031.x).

For that procedure, sort the [p-values](/wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing). With `m` tests and target `q`, compare the p-value at rank `i` with `(i/m) × q`. Find the largest rank meeting its threshold, then select all findings up to that rank. This step-up rule is a teaching description, not a substitute for choosing a method appropriate to the data.

## Why it matters in cancer

Gene-expression screens and [mass spectrometry](/wiki/education/concepts/measurement/proteins-and-spatial/mass-spectrometry-proteomics) can make many comparisons or identifications. Retain the tested family, procedure and reporting level. A protein-level error estimate and a peptide-level estimate describe different sets. A controlled selection error still does not establish the biological importance of a change.

## Worked example

Five fictional tests give sorted p-values of 0.001, 0.008, 0.026, 0.080 and 0.200. At `q = 0.05`, the rank thresholds are 0.010, 0.020, 0.030, 0.040 and 0.050. The largest passing rank is three, so the step-up procedure selects the first three findings.

You do not know which, if any, of those three are false. The calculation does not say each has a 5% error probability, or that exactly 5% of this particular basket is false. It describes the procedure's expected behavior when its assumptions hold.

## Common confusions

- An FDR control target does not supply a patient's false-positive probability. Clinical [positive predictive value](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates) needs its population and test-performance information.
- An FDR target of 5% is not a guarantee about a particular gene or patient.
- Screening more hypotheses and reporting only selected ones without the method obscures the error claim.
- Different adjusted p-values or q-value methods should not be treated as interchangeable labels without checking their definitions.

## Try it

A researcher reports 20 selected genes at FDR 5%. Must exactly one be false?

**Answer:** No. The realized number is unknown. The target concerns an expected fraction across repetitions under the procedure's assumptions.

## Related concepts

- [P-values and multiple testing](/wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing)
- [Preclinical evidence](/wiki/education/concepts/evidence-and-statistics/study-design/preclinical-evidence)

## Sources and scope

Source check: October 9, 2026. Invented p-values; expert and learner review remain pending.

- [Benjamini and Hochberg, 1995: the original step-up procedure](https://rss.onlinelibrary.wiley.com/doi/10.1111/j.2517-6161.1995.tb02031.x).
- [Benjamini and Yekutieli, 2001: dependence conditions](https://doi.org/10.1214/aos/1013699998).

<!-- BEGIN GENERATED USED IN -->
## Used in

Browse the [concept index](/wiki/education/concepts/index) for related learning paths.
<!-- END GENERATED USED IN -->
