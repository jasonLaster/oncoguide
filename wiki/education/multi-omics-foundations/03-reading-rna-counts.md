---
title: "Read RNA counts without counting proteins"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 4
minutes: 10
objectives: ["Distinguish reads, captured molecules and normalized expression.", "Identify ambient RNA, doublets and inadequate replication."]
prerequisites: ["[[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq]]", "[[wiki/education/concepts/biology-basics/genetics/central-dogma]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Read RNA counts without counting proteins

**RNA counts describe what an assay captured. They become interpretable only with preparation, units and cell assignment attached.**

**Before you start:** [[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq|Bulk RNA sequencing]] explains mixed tissue profiles. [[wiki/education/concepts/biology-basics/genetics/central-dogma|The central dogma]] separates messages from protein products.

## Where this step sits

This is step 4 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. A count table can look wonderfully precise. The precision is useful, but we still need to know what was counted. Think of receipts: ten printed copies of one purchase are not ten purchases.

## How a molecule becomes a count

A **read** is a sequence observation. In some assays, a **unique molecular identifier (UMI)** tags a captured molecule. Repeated reads with the same tag can be collapsed, helping avoid counting amplified copies as new molecules. This estimates captured molecules under the workflow, rather than every molecule that existed in the cell.

A **barcode** assigns material to a compartment or sample. In a droplet workflow, a small reaction compartment ideally contains one cell or nucleus. The barcode tells us where the captured message was assigned. It does not prove its biological origin without quality checks.

**[[about/Terminology#scrna-seq|Single-cell RNA sequencing (scRNA-seq)]]** assigns profiles to cells. **Single-nucleus RNA sequencing (snRNA-seq)** assigns them to nuclei. Nuclear preparations include more unfinished RNA, so intron-containing reads can be useful expression evidence. They do not by themselves establish abnormal splicing.

## Two ways messages can appear in the wrong place

**Ambient RNA** is free RNA released from disrupted cells. It can enter another compartment and make a cell appear to express a gene. Background-correction methods estimate this contribution; correction does not certify every remaining molecule.

A **doublet** contains contributions from two cells or nuclei under one barcode. Their markers can resemble a new hybrid identity. Computational filters help detect these mixtures but are imperfect. A surprising cell population needs biological and technical checks before an exciting name.

## Keep the units straight

| Quantity | Interpretation |
|---|---|
| Raw count | Captured observations under the counting rule |
| Counts per million (CPM) | Counts scaled by a library-size denominator |
| Transcripts per million (TPM) | Relative abundance accounting for transcript length and depth under a suitable method |
| Detection fraction | Fraction of analyzed cells with a detected signal |
| Module score | Summary of selected genes under a stated scoring and reference rule |

CPM and TPM are not interchangeable. Neither is a direct surface-protein count. Standard length-based TPM is not the default interpretation of every UMI-tagged counting assay.

## A worked count example

In fictional library A, gene R has 10 captured molecules among 10,000 total: 1,000 CPM using this simple denominator. In library B, it has 20 among 100,000: 200 CPM. B has more raw molecules but lower relative abundance. The calculation illustrates normalization, not a comparison validated across any two preparations.

Now suppose a group of 500 nuclei from one biopsy is pooled computationally. That is **pseudobulk**. It can summarize a selected population while retaining the biopsy as the biological sample. It does not create 500 independent patients. Differential comparisons should preserve independent biological samples as replicates where the question requires them.

## What can go wrong at this step

- Treating zero detection as proof of complete biological silence.
- Comparing nuclear and whole-cell counts without considering preparation.
- Counting amplified reads as independent molecules.
- Treating a module score as measured pathway function.
- Using thousands of cells from one patient as independent patient replicates.

A clear report states the capture and counting rules, filtering, normalization, reference group and sample replication. A changed number may reflect a changed denominator or composition rather than changed cancer-cell biology.

## Try it

A nucleus has one immune-gene count but otherwise resembles an epithelial cell. Is it now an immune cell?

**Answer:** No. Consider sparse sampling, ambient RNA and doublets. Identity should use a coherent profile and supporting evidence, not one isolated count.

## Explain it back

“A count is evidence of ______, and before comparing it I need ______.”

One answer: “captured RNA under a specified method; compatible preparation, units, cell labels and independent samples.”

## Takeaway

**Counted messages become evidence only after their assignment and denominator are understood.**

**Next:** [[wiki/education/multi-omics-foundations/04-copies-alleles-and-clones|Separate DNA copies from cancer-cell fractions]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [10x Genomics technical note: intronic reads](https://www.10xgenomics.com/support/software/cell-ranger/8.0/miscellaneous/cr-intron-mode-rec).
- [Bioconductor: multi-sample and pseudobulk comparisons](https://www.bioconductor.org/books/3.15/OSCA.multisample/multi-sample-comparisons.html).
- [Seurat module-score method](https://satijalab.org/seurat/reference/addmodulescore).
