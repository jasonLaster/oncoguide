---
title: "Read RNA: counts, preparation and splice products"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 5
minutes: 14
objectives:
  - "Distinguish reads, captured molecules and normalized expression, and keep units with every comparison."
  - "Distinguish gene-level abundance from mutant-message and splice-product evidence."
  - "Choose bulk or cell-resolved RNA for a defined question, and recognize ambient RNA, doublets and false replication."
prerequisites:
  - "[[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq]]"
  - "[[wiki/education/concepts/measurement/transcriptomics/single-cell-and-single-nucleus-rna-seq]]"
  - "[[wiki/education/concepts/measurement/transcriptomics/counts-normalization]]"
  - "[[wiki/education/concepts/biology-basics/genetics/splicing]]"
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-11-08"
source_checked: "2026-11-08"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Read RNA: counts, preparation and splice products

**RNA tests whether a message was made, in which form and by which cells. A count means something only with its preparation, units and cell assignment attached.**

**Before you start:** [Bulk RNA sequencing](/wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq) profiles a tissue mixture. [Single-cell and single-nucleus RNA sequencing (scRNA-seq and snRNA-seq)](/wiki/education/concepts/measurement/transcriptomics/single-cell-and-single-nucleus-rna-seq) assigns messages to cells or nuclei. [Counts and normalization](/wiki/education/concepts/measurement/transcriptomics/counts-normalization) explains the units. [Splicing](/wiki/education/concepts/biology-basics/genetics/splicing) explains how a message is edited.

## Where this step sits

This is step 5 of [What does multi-omics tell us about a tumor?](/wiki/education/guides/what-multi-omics-tells-us/index) DNA said which sequence is available. RNA asks which messages were made and captured. The gap is real: in 104 primary triple-negative breast cancers, only about 36% of the DNA mutations found were detectably expressed in RNA ([Shah et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22495314/)).

## Choose the smallest question RNA can answer

| Question | Relevant RNA evidence | Limit |
|---|---|---|
| Is the gene expressed? | Captured messages assigned to the gene | Does not identify every transcript form |
| Is the mutated sequence expressed? | Usable reads covering the variant | Gene-level abundance cannot answer this |
| Did splicing change? | Reproducible junction or retained-segment evidence | Protein consequence is a separate question |
| Which cells supply the signal? | Cell-resolved profiles or a modeled mixture | Cell labels and estimates need validation |
| Which program is prominent? | A defined gene set or classifier | Does not measure dependence or pathway activity |

## How a molecule becomes a count

A **read** is one sequence observation. In some assays a **unique molecular identifier (UMI)** tags each captured molecule, so repeated reads from one amplified molecule collapse into one count. Think of receipts: ten printed copies of one purchase are not ten purchases. A UMI count estimates captured molecules, not every molecule the cell made.

A **barcode** assigns material to a compartment, ideally one cell or nucleus. Two artifacts can put a message in the wrong place:

- **Ambient RNA** is free RNA from broken cells that enters another compartment. Correction methods estimate it; they can also remove real low-level signal.
- A **doublet** is two cells or nuclei under one barcode, whose mixed markers can look like a new hybrid cell type.

Nuclear preparations capture more unfinished RNA, so intron-containing reads are expected there. They do not by themselves show abnormal splicing.

## Keep the units straight

| Quantity | Interpretation |
|---|---|
| Raw count | Captured observations under the counting rule |
| Counts per million (CPM) | Counts scaled by library size |
| Transcripts per million (TPM) | Relative abundance adjusted for transcript length and depth, under a suitable method |
| Detection fraction | Fraction of analyzed cells with any detected signal |
| Module score | A summary of selected genes under a stated scoring rule |

**A worked count.** In fictional library A, a gene has 10 captured molecules among 10,000: 1,000 CPM. In library B it has 20 among 100,000: 200 CPM. B has more molecules but lower relative abundance. CPM and TPM are not interchangeable, and neither is a protein count.

**Pseudobulk** pools the profiles of a selected cell group, for example 500 malignant nuclei from one biopsy. It remains one biological sample, not 500 patients. Comparisons need independent samples as replicates ([Squair et al., 2021](https://www.nature.com/articles/s41467-021-25960-2)).

## Preparation shapes what can be recovered

A sequencing **library** is prepared material, not the original tissue. Some methods select messages with poly(A) tails, some enrich chosen targets and some read only short transcript ends. Those choices change which genes, junctions and isoforms can be seen.

[Formalin-fixed, paraffin-embedded (FFPE) tissue](/wiki/education/concepts/measurement/specimens/ffpe-vs-fresh-frozen-vs-viable) preserves architecture but damages RNA. [RNA integrity](/wiki/education/concepts/measurement/specimens/rna-integrity) helps match material to the assay: a preparation that supports short gene counts may not answer a full-length transcript question. [Batch effects](/wiki/education/concepts/measurement/transcriptomics/batch-effects) are systematic differences from preparation or analysis. If every baseline sample used one method and every follow-up another, normalization cannot separate biology from method.

## Follow a splice change into the message

Splicing joins exons and removes introns. A variant at a splice boundary raises a processing question that only RNA can answer.

**Read the notation.** A `c.` name uses a coding-DNA reference and a `p.` name refers to protein. A fictional `c.200+1G>A` lies one base into the intron after coding position 200, at a donor boundary. A complete name also needs the reference transcript and version ([HGVS splicing recommendations](https://archive.hgvs-nomenclature.org/recommendations/RNA/variant/splicing/)). The location suggests disrupted splicing. It does not say which segment is skipped or how much function remains.

**Then measure.** Suppose bulk RNA shows abundant messages for that fictional gene. [Fusion and splice detection](/wiki/education/concepts/measurement/transcriptomics/fusion-and-splice-detection) finds a reproducible junction that skips an exon, alongside some normal junctions. The abnormal junction is far more specific evidence than total abundance. A gene-counting library may not cover the junction at all.

Next ask who made each message. Normal neighbors can contribute intact RNA and hide a cancer-cell loss; cell-resolved or tumor-enriched data can help if their labels are sound. A skipped exon does not automatically mean a frameshift or complete loss. The protein lesson tests what was actually made.

## Programs and classifications need their own scope

[Gene-expression signatures](/wiki/education/concepts/measurement/transcriptomics/gene-expression-signatures) need their algorithm, preprocessing and reference population. [PAM50](/wiki/education/concepts/breast-cancer/receptors-and-subtypes/intrinsic-subtype) assigns an expression subtype; [immune deconvolution](/wiki/education/concepts/measurement/transcriptomics/immune-deconvolution) estimates mixture contributions; [RNA pathway scoring](/wiki/education/concepts/measurement/transcriptomics/rna-pathway-scoring) summarizes selected messages. None measures biochemical activity, cell of origin or drug response directly. For method choice, use the [bulk versus single-cell versus spatial RNA comparison](/wiki/education/concepts/measurement/transcriptomics/bulk-vs-single-cell-vs-spatial-rna).

## What can go wrong at this step

- Treating zero detection as proof of silence, or one stray count as a new identity.
- Counting amplified reads as molecules, or cells from one patient as independent replicates.
- Comparing capture-based and whole-transcript preparations as if they recover genes equally.
- Reading intronic reads as abnormal splicing, or a gene-level count as an intact transcript.
- Treating a module score as measured pathway function.

## Try it

1. A nucleus has one immune-gene count but otherwise resembles an epithelial cell. Is it an immune cell?
2. A gene has high total RNA, but most reads covering the variant show an abnormal junction. Does high abundance settle the protein question?

**Answers:** (1) No. Consider sparse capture, ambient RNA and doublets; identity needs a coherent profile. (2) No. Abundance and transcript structure answer different questions; inspect the products and then test the protein.

## Explain it back

“This RNA result is evidence of ______ in ______. Before comparing it, I need ______. Before claiming the protein works, I need ______.”

One answer: “captured messages and their form; these assigned cells; compatible preparation, units and independent samples; protein and functional evidence.”

## Takeaway

**Ask for the message that matters, in the form that matters, from the cells that matter, with its denominator attached.**

**Next:** [Read protein: presence, place and activation](/wiki/education/guides/what-multi-omics-tells-us/06-read-protein).

## Sources and scope

Source check: November 8, 2026. The count and splice examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [Shah et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22495314/): 104 primary triple-negative breast cancers; about 36% of mutations were expressed.
- [Conesa et al., 2016: RNA-seq design and analysis](https://doi.org/10.1186/s13059-016-0881-8).
- [Squair et al., 2021](https://www.nature.com/articles/s41467-021-25960-2): biological replication in single-cell differential expression.
- [10x Genomics: intronic reads in single-nucleus data](https://www.10xgenomics.com/support/software/cell-ranger/8.0/miscellaneous/cr-intron-mode-rec): a methods note, not clinical validation.
- [HGVS: RNA splicing nomenclature](https://archive.hgvs-nomenclature.org/recommendations/RNA/variant/splicing/).
- [Hatzis et al., 2011: tissue handling and RNA measurement](https://pmc.ncbi.nlm.nih.gov/articles/PMC3243675/).
