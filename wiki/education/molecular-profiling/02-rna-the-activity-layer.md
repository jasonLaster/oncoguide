---
title: "Use RNA to test the message and its source"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 10
minutes: 10
objectives: ["Distinguish gene-level abundance from mutant or splice-product evidence.", "Choose bulk or cell-resolved RNA measurement for a defined question."]
prerequisites: ["[[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq]]", "[[wiki/education/concepts/biology-basics/genetics/central-dogma]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: 2026-10-10
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Use RNA to test the message and its source

**RNA can test whether a message was captured and which form it took. Its source cells and preparation are part of the result.**

**Before you start:** [[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq|Bulk RNA sequencing]] defines a mixed message profile. [[wiki/education/concepts/biology-basics/genetics/central-dogma|The central dogma]] separates message and product. [[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity|Tumor heterogeneity]] explains why averaging can hide populations.

## Where this step sits

This is step 10 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. DNA tells us what sequence is available. RNA asks what messages were made and sampled. This is a useful next step, provided we do not turn the messages into a protein or function claim.

## Choose the smallest question RNA can answer

| Question | Relevant RNA evidence | Limit |
|---|---|---|
| Is the gene expressed? | Captured messages assigned to the gene | Does not identify every transcript form |
| Is the mutated sequence expressed? | Usable messages supporting the variant | Gene-level abundance alone cannot answer this |
| Did splicing change? | Reproducible junction or retained-segment evidence | Protein consequence remains a separate question |
| Which cells supply a signal? | Suitable cell-resolved profiles or a modeled mixture | Cell labels and estimates need validation |
| What program is prominent? | Defined gene set or expression classifier | Does not directly measure dependence or flux |

A report saying “repair gene R is expressed” is compatible with an abnormal transcript. The question is whether the relevant intact form is made, rather than whether any fragment of the gene can be counted.

## Preparation shapes what can be recovered

A sequencing **library** is prepared material, not the original tissue. Some methods select polyadenylated RNA, some enrich targeted messages and some count short transcript ends. These choices influence gene recovery and splice or isoform resolution.

**[[about/Terminology#ffpe|Formalin-fixed, paraffin-embedded (FFPE)]]** tissue preserves architecture but alters molecules. [RNA integrity](/wiki/education/concepts/measurement/specimens/rna-integrity) helps match recovered material to the intended assay. A preparation that supports short-target gene counts may leave full-length transcript questions unanswered. Fresh-frozen molecular preservation is also different from preserving viable cells for culture.

[Single-cell RNA sequencing (scRNA-seq) and single-nucleus RNA sequencing (snRNA-seq)](/wiki/education/concepts/measurement/transcriptomics/single-cell-and-single-nucleus-rna-seq) sample different compartments. Match the preparation to the question; neither profiles every original cell and message completely.

## A worked splice question

Use the fictional repair-gene R finding from the DNA lesson. A [[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq|bulk RNA assay]] detects abundant R messages. [Fusion and splice detection](/wiki/education/concepts/measurement/transcriptomics/fusion-and-splice-detection) finds a reproducible abnormal junction. The second observation is more specific to the proposed mechanism than gene abundance. A gene-counting library may not cover the junction needed to test it.

Next ask whether the messages came from malignant cells. Normal neighbors can contribute intact R RNA and conceal a cancer-cell loss. Cell-resolved or enriched measurements may help, provided their labels and preparation are suitable. Protein and repair assays still answer different questions.

Now consider a surface-target gene with high bulk RNA. Cell-resolved data place much of it in normal epithelial cells. The original bulk measurement can remain correct; its attribution changes. That is integration doing useful work.

## Programs and classifications need their own scope

Before comparing profiles, check for [batch effects](/wiki/education/concepts/measurement/transcriptomics/batch-effects): systematic differences associated with preparation or analysis. If all baseline samples use one method and all follow-up samples another, their contributions cannot be separated from that comparison alone. Normalizing counts does not supply the missing comparison.

[Gene-expression signatures](/wiki/education/concepts/measurement/transcriptomics/gene-expression-signatures) need their algorithm, preprocessing and reference population. A classifier such as [PAM50](/wiki/education/concepts/breast-cancer/receptors-and-subtypes/intrinsic-subtype) and a pathway module answer different questions. A similarity label is not the exact cell of origin, measured pathway activity or a drug-response rule.

A luminal-progenitor-like RNA program can coexist with [triple-negative breast cancer (TNBC)](/wiki/education/concepts/breast-cancer/receptors-and-subtypes/tnbc). Its resemblance does not make the tumor hormone-receptor-positive. The [[wiki/education/multi-omics-foundations/02-cell-identity-and-state|identity-and-state lesson]] applies that distinction.

## What can go wrong at this step

- Comparing capture-based and whole-transcript preparations as if all genes are recovered identically.
- Treating low detection as proven absence.
- Treating intronic reads as automatic evidence of abnormal splicing.
- Replacing an intact-transcript question with a gene-level count.

## Try it

Gene R has high total RNA, but most variant-supporting reads show abnormal processing. Does high abundance settle the protein-function question?

**Answer:** No. Abundance and transcript structure answer different questions. Inspect the actual products and test the relevant protein or function.

## Explain it back

“RNA adds evidence about ______, but I still need ______ before claiming the protein works.”

One answer: “captured messages, their form and source; intact product and appropriate functional evidence.”

## Takeaway

**Ask for the message that matters, in the cells that matter, rather than a gene name with a high number.**

**Next:** [[wiki/education/molecular-profiling/03-protein-expression-and-activation|Ask whether protein is present, placed and active]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [Conesa et al., RNA-seq design and analysis](https://doi.org/10.1186/s13059-016-0881-8).
- [10x Genomics, intronic-read interpretation](https://www.10xgenomics.com/support/software/cell-ranger/8.0/miscellaneous/cr-intron-mode-rec).
- [[wiki/education/multi-omics-foundations/03-reading-rna-counts|RNA-count methods and practice]].
- [Hatzis et al., tissue handling and RNA measurement (2011)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3243675/).
- [Risso et al., control-based normalization and unwanted variation (2014)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4404308/).
