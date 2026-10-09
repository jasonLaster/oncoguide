---
title: "Reading RNA counts"
tags: [education, RNA, single-nucleus, ambient-RNA]
type: guide-lesson
sensitive: false
reviewed: pending
reviewed_by: ""
guide: multi-omics-foundations
step: 3
objectives: ["Interpret reading RNA counts without treating an observation as validated clinical benefit."]
prerequisites: ["[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"]
---

# Reading RNA counts

RNA sequencing samples RNA molecules. It gives evidence about gene expression in the tested material; it does not directly count proteins or measure a pathway's functional output.

## Bulk, cells, and nuclei

| Method | Material measured | Main interpretation issue |
|---|---|---|
| **Bulk RNA-seq** | RNA extracted from a tissue mixture | The combined signal can come from malignant, immune, or supporting cells; RNA contributions differ between cell types |
| **scRNA-seq** | RNA assigned to individual cells | Preparation and capture affect which cells and molecules are recovered |
| **snRNA-seq** | RNA assigned to individual nuclei | Nuclear RNA includes more unfinished transcripts; it differs systematically from whole-cell RNA |

A **nucleus** is the compartment containing most cellular DNA. **Pre-mRNA** is an RNA transcript before processing is complete. **Exonic reads** map to exon sequence; **intronic reads** map to intron sequence and can capture unfinished RNA. Intronic reads are useful expression data, especially for nuclei. They do not by themselves demonstrate abnormal splicing. [10x: including intronic reads](https://www.10xgenomics.com/support/software/cell-ranger/8.0/miscellaneous/cr-intron-mode-rec)

## How a molecule becomes a count

<img src="/api/file?path=wiki%2Feducation%2Fmulti-omics-foundations%2Fimages%2Frna-molecules-background-and-doublets-light.png" alt="Three panels show molecule counting, background RNA and two nuclei sharing a barcode" data-theme-pair>

*RNA counts reflect captured molecules; background and doublets can mix cell signals.*

<!-- Cartoon source: [generation prompt](/api/file?path=wiki%2Feducation%2Fimages%2Fprompts%2Frna-molecules-background-and-doublets.txt) -->

<!-- Theme asset: [dark variant](/api/file?path=wiki%2Feducation%2Fmulti-omics-foundations%2Fimages%2Frna-molecules-background-and-doublets-dark.png) -->

*UMIs help avoid counting amplified copies as new molecules. Ambient RNA and doublets can mix signals; the measurements remain RNA counts.*

In a droplet workflow, a **droplet** is a tiny reaction compartment. A **barcode** helps assign RNA to that compartment. A **UMI**, or unique molecular identifier, tags a captured molecule so amplified copies can be collapsed. Ten sequencing **reads** can be repeated observations of one molecule; they are not necessarily ten independent molecules. [10x: gene-expression algorithm](https://www.10xgenomics.com/support/cn/software/cell-ranger/7.2/algorithms-overview/cr-gex-algorithm)

Two important sources of misleading signal are:

- **Ambient RNA:** free RNA from damaged or disrupted cells enters other droplets. A nucleus can appear to express a gene because that RNA was floating nearby. Background correction estimates this contribution; it does not certify every remaining count as intrinsic expression. [10x: ambient RNA correction](https://www.10xgenomics.com/cn/analysis-guides/introduction-to-ambient-rna-correction)
- **Doublet / multiplet:** more than one cell or nucleus contributes to one barcode. Mixed markers can create an apparent hybrid identity. Detection is computational and imperfect.

## The quantities in a results table

| Term | How to read it |
|---|---|
| **Count matrix** | Rows of genes and columns of samples, cells, or nuclei containing their counts |
| **Pseudobulk** | Counts pooled computationally from a selected cell group within a sample; a malignant pseudobulk still depends on correct group labels |
| **CPM** | Counts per million: a count scaled by the total or normalized library size |
| **TPM** | Transcripts per million: a relative abundance measure normalized for transcript length and sequencing depth; it does not remove library-composition bias and is not interchangeable with CPM. Standard TPM is suited to full-length transcript measurements, rather than UMI-tagged 3′ or 5′ counting |
| **Detection fraction** | Fraction of analyzed cells/nuclei with a detectable signal; failure to detect can reflect sparse sampling |
| **Module score** | A summary of a chosen group of genes, often relative to control genes; the method and reference affect the value |

Pseudobulk comparisons should retain independent samples as replicates. Thousands of nuclei from one biopsy do not become thousands of independent patients. [Bioconductor: pseudobulk comparisons](https://www.bioconductor.org/books/3.15/OSCA.multisample/multi-sample-comparisons.html) CPM and fold-change calculations have defined normalization choices; module scores also depend on their calculation. [edgeR guide](https://bioconductor.org/packages/devel/bioc/vignettes/edgeR/inst/doc/edgeRUsersGuide.pdf), [Seurat module scores](https://satijalab.org/seurat/reference/addmodulescore)

**Hypothetical example:** Gene A has 10 captured molecules among 10,000 total, or 1,000 CPM. Another library has 20 among 100,000, or 200 CPM. More raw molecules in the second library do not mean greater relative expression. Neither number counts surface proteins.

## Explain it back

**“This is nuclear RNA, so I need to check unfinished transcripts, background RNA, and the comparison method. A count is evidence of captured RNA, not proof of a working protein.”**

**Check yourself:** Does zero detected RNA prove a gene is completely inactive? **No.** Sampling depth and preparation matter. Next: [[wiki/education/multi-omics-foundations/04-copies-alleles-and-clones|copies, alleles, and clones]].


## Try it

An assay reports a striking value. Which sample, measurement method and comparator do you need before interpreting it?

**Answer:** Identify the sampled cells, assay definition and reference group before moving from the number to a biological or treatment claim.


## Takeaway

**The meaning of a measurement depends on its sample, method and comparison.**


## Sources and scope

General measurement teaching; expert and learner review pending. Sources and definitions are linked beside the relevant methods above.
