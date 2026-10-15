---
title: "Choose the comparison before interpreting the signal"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 8
minutes: 10
objectives: ["Interpret fold change and percentiles with their reference groups.", "Distinguish enrichment, selectivity, dependence and clinical validation."]
prerequisites: ["[[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]", "[[wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry]]", "[[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: 2026-10-13
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Choose the comparison before interpreting the signal

**“High” needs a comparator. “Useful” needs a question. A dramatic number does not supply either one by itself.**

**Before you start:** [[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq|Bulk RNA sequencing]] explains mixture and units. [[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity|Tumor heterogeneity]] explains sampling. [[wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry|Immunohistochemistry (IHC)]] can localize a protein. [[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability|Clinical actionability]] asks whether evidence supports a decision.

## Where this step sits

This is step 8 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. A person is tall relative to one group and average relative to another. A gene can be “high” in the same way. Begin with the reference group before interpreting the adjective.

## Read the denominator and reference

A **fold change** is a ratio under the method's normalization. A base-two logarithmic fold change, **log2FC**, of +1 means twice as high; +2 means four times as high. These are mathematical examples, not biological thresholds. A nearly zero reference value can produce a huge ratio with little underlying signal.

A **percentile** describes position in a reference distribution. The 90th percentile does not mean 90% of cells express the target. Ask which tumors, preparations and disease settings formed the distribution.

[**Batch effects**](/wiki/education/concepts/measurement/transcriptomics/batch-effects) can distort this comparison: capture chemistry can recover some genes differently, and global scaling may not fix gene-specific biases. Treatment exposure, tissue site and cell mixture can create biological differences as well.

## Choose the comparator that fits the claim

| Claim | Useful comparator | What remains open |
|---|---|---|
| Higher in cancer cells | Appropriate normal cells measured compatibly | Other normal organs or states |
| Changed after treatment | Attributed timepoints with compatible methods | Sampling differences and natural variation |
| A drug caused a model response | Vehicle and mechanism controls, replicated | Clinical relevance and toxicity |
| A test selects treatment benefit | Appropriate treated and comparison groups | Applicability outside the study setting |

Read the [**p-value**](/wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing) with its stated null model and the [**false discovery rate (FDR)** procedure](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/false-discovery-rate) with its tested family and assumptions. Neither gives the chance that a proposed target is useful. Statistical thresholds cannot rescue an inappropriate normal comparator or an unmodeled preparation difference.

## A worked target example

In a fictional experiment, receptor R is high in malignant cells, low in fibroblasts and similarly high in normal epithelial cells. The cancer-versus-fibroblast contrast is real. It does not establish tumor selectivity.

**Choose the reference:** Suppose that contrast also passes the stated statistical threshold. To assess whether R distinguishes malignant epithelium from its normal counterpart, would you choose fibroblasts or matched normal epithelial cells, measured compatibly?

**Answer:** Matched normal epithelial cells fit that claim. Here R is similarly high in that group, so significance against fibroblasts cannot establish the proposed epithelial selectivity. Fibroblasts answer a different comparison. Even the better reference leaves other normal organs, states and accessibility untested.

Tissue staining places R on cancer-cell membranes. That adds localization, but normal-organ access and expression still matter. In a model, blocking R has little effect on growth. R may be a possible delivery address for an antibody–drug conjugate, a medicine that carries a payload through an antibody. It has not demonstrated itself as a growth dependency.

**Enrichment** means higher in the stated comparison. **Selectivity** asks how well the target distinguishes relevant cancer from normal tissue. [**Dependency**](/wiki/education/concepts/measurement/functional-models/dependency-mapping-crispr) asks whether perturbing it impairs survival or growth under suitable conditions. These terms should not trade places halfway through the story.

The [evidence chain from variant to benefit](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/evidence-chain-variant-to-benefit) keeps the supported finding, biological effect, drug response and clinical benefit separate.

## Audit a variant claim too

A [variant caller](/wiki/education/concepts/measurement/sequencing-basics/variant-calling) is software proposing DNA changes. **PASS** means its filters passed. **Consensus** means agreement under a specified rule. Neither is independent confirmation.

Paired sequencing reads can come from one original fragment. Counting them as two independent supports inflates confidence. Mapping errors, repetitive sequence and contamination require review. Positive controls show that expected signals can be recovered; they do not make every proposed call correct.

## What can go wrong at this step

- Comparing unlike preparations as if normalization erased every difference.
- Treating a percentile as a cell fraction.
- Treating several related assays as independent votes.
- Treating significance as selectivity or clinical usefulness.

## Try it

Three reports reuse the same tissue and the same predicted variant list. Is that three independent confirmations?

**Answer:** No. Identify which raw measurements are independent and which repeat shared inputs or assumptions. Agreement can still help, but describe what it strengthens.

## Explain it back

“The value is high compared with ______, in ______, using ______. It supports ______ and leaves ______ open.”

One answer: “the stated normal reference; the sampled cell group; the stated assay; a measured difference; selectivity and benefit.”

## Takeaway

**A well-chosen comparison makes a modest result more useful than an impressive number without context.**

**Next:** [[wiki/education/molecular-profiling/01-dna-the-blueprint|Read a DNA assay as a coverage-and-confidence claim]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [edgeR methods guide: counts, normalization and comparisons](https://bioconductor.org/packages/devel/bioc/vignettes/edgeR/inst/doc/edgeRUsersGuide.pdf).
- [Bioconductor multi-sample comparisons](https://www.bioconductor.org/books/3.15/OSCA.multisample/multi-sample-comparisons.html).
- [[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability|Actionability and evidence sources]].
