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
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# False discovery rate

## In one sentence

The false discovery rate is the expected fraction of false findings among a procedure’s selected findings, with that fraction defined as zero when none are selected.

## The intuition

A large molecular screen needs a way to keep a promising shortlist from filling with false leads. **False discovery rate (FDR)** concerns the shortlist as a set, averaged across repetitions of the procedure. It is not a truth label attached to each gene. The shortlist analogy also does not guarantee a fixed number of false findings in today's list.

## How it works

Let V be the number of false rejections and R the total number of rejections. The false discovery proportion is `V/R` when R is positive, and zero when no findings are selected. FDR is the **expected value** of that proportion.

This differs from the **family-wise error rate**, the probability of at least one false rejection. If every null hypothesis is true, any nonempty selected list is entirely false, so those two error rates coincide. Otherwise they generally differ. [Benjamini and Hochberg](https://doi.org/10.1111/j.2517-6161.1995.tb02031.x).

The **Benjamini–Hochberg (BH)** step-up method sorts m p-values. For a target q, compare rank i with `(i/m) × q`. Find the **largest passing rank**, then select all findings through that rank. Do not stop at the first failed comparison.

The original theorem establishes control under independence. Later results cover specified positive-dependence structures; other methods or corrections address broader dependence. Correlated genes are not permission to ignore the method's assumptions. [Benjamini and Yekutieli](https://doi.org/10.1214/aos/1013699998).

## Worked example

Five fictional tests have sorted p-values 0.001, 0.008, 0.026, 0.080 and 0.200. With q = 0.05:

| Rank | p-value | BH comparison value |
|---:|---:|---:|
| 1 | 0.001 | 0.010 |
| 2 | 0.008 | 0.020 |
| 3 | 0.026 | 0.030 |
| 4 | 0.080 | 0.040 |
| 5 | 0.200 | 0.050 |

Rank 3 is the largest that passes, so the first three are selected. This does not mean exactly 5% of those three are false, or that each has a 5% probability of being false.

## What is measured

| Check | Information needed |
|---|---|
| Input | All tested hypotheses and valid p-values, not just the published hits. |
| Method | Defined test family, target, procedure and dependence assumptions. |
| Output | Selected set or adjusted values under that procedure. |
| Failure | Running many separate corrections, then presenting a combined list as if one family was controlled. |
| Cannot tell | Which finding is false, biological importance or clinical benefit. |

“q-value” and “FDR-adjusted p-value” can refer to different calculations; read the method. Molecular identification FDR at peptide, protein or gene levels also concerns different units. A protein-level claim cannot inherit a peptide-level guarantee without its own procedure.

## Why it matters in cancer

Omics screens often use FDR to prioritize hypotheses for replication or functional experiments. Passing the screen is a discovery step, not evidence that a treatment selected from it helps patients.

A diagnostic paper may call `1 − positive predictive value` a “false discovery rate”: the observed false fraction among positive calls. That diagnostic fraction is distinct from BH-style multiple-testing control. Read the denominator and intended meaning. See [test results and base rates](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates).

## Common confusions

- An FDR target is not an individual finding's probability of being false.
- Five percent FDR does not guarantee one false result in every list of 20.
- Corrected significance does not establish a large effect or a useful treatment.
- Changing the test family changes the question being controlled.

## Try it

For three fictional tests, sorted p-values are 0.018, 0.030 and 0.060. At q = 0.05, the comparison values are 0.0167, 0.0333 and 0.050. How many does BH select?

**Answer:** Two. Rank 1 fails its own comparison, but rank 2 passes and is the largest passing rank. The step-up rule selects both first and second findings.

## Explain it back

Explain why controlling an expected fraction does not identify the false findings in a particular list.

## Takeaway

FDR belongs to a defined procedure and family of findings, with assumptions and a replication step attached.

## Related concepts

- [P-values and multiple testing](/wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing)
- [Preclinical evidence](/wiki/education/concepts/evidence-and-statistics/study-design/preclinical-evidence)

## Sources and scope

Source check: October 10, 2026. Invented p-values; expert and learner review remain pending.

- [Benjamini and Hochberg, 1995: the original step-up procedure](https://rss.onlinelibrary.wiley.com/doi/10.1111/j.2517-6161.1995.tb02031.x).
- [Benjamini and Yekutieli, 2001: dependence conditions](https://doi.org/10.1214/aos/1013699998).

<!-- BEGIN GENERATED USED IN -->
## Used in

Browse the [concept index](/wiki/education/concepts/index) for related learning paths.
<!-- END GENERATED USED IN -->
