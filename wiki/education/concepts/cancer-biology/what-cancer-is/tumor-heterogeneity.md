---
title: "Tumor heterogeneity: one cancer, several populations"
type: "concept"
domain: "cancer-biology/what-cancer-is"
summary: "Tumor heterogeneity means cancer cells can differ in their DNA, molecular state or behavior within and between sampled regions."
glossary_anchor: "tumor-heterogeneity"
aliases: ["tumor heterogeneity", "clonal heterogeneity", "clone", "subclone", "truncal", "clonal"]
level: "foundation"
sensitive: false
tags: ["education", "cancer-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/oncogene-and-tumor-suppressor]]"]
used_by: ["[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]","[[wiki/education/guides/predicting-response-before-treating/index]]","[[wiki/education/guides/start-here/01-read-the-labels]]","[[wiki/education/guides/start-here/index]]","[[wiki/education/modeling-tumor-response/index]]","[[wiki/education/molecular-profiling/02-rna-the-activity-layer]]","[[wiki/education/molecular-profiling/04-spatial-biology]]","[[wiki/education/molecular-profiling/05-functional-drug-response]]","[[wiki/education/molecular-profiling/07-from-data-to-care-plan]]","[[wiki/education/multi-omics-foundations/01-epithelial-and-breast-tissue]]","[[wiki/education/multi-omics-foundations/02-cell-identity-and-state]]","[[wiki/education/multi-omics-foundations/04-copies-alleles-and-clones]]","[[wiki/education/multi-omics-foundations/07-comparisons-and-evidence]]","[[wiki/education/reading-a-tumor/omics-and-multi-omics]]","[[wiki/education/targeted-therapy-modalities/06-comparisons]]"]
---

# Tumor heterogeneity: one cancer, several populations

## In one sentence

Tumor heterogeneity means cancer cells can differ in their DNA, molecular state or behavior within and between sampled regions.

## The intuition

A forest contains related trees that do not all have the same branches. Sampling one branch tells us something real, but not everything about the forest. A tumor also contains related populations. The analogy ends when we consider cell states: cells can change their behavior without acquiring a new DNA branch.

## How it works

A **clone** is a population sharing acquired DNA changes. A **subclone** is a branch with additional changes. A change found across the sampled cancer-cell populations may be described as clonal or truncal. That description depends on what was sampled and how confidently the analysis estimated its distribution.

Genetic differences are only one kind of heterogeneity. Cells with similar DNA can use different RNA programs, make different proteins or respond differently to their surroundings. Oxygen, neighboring cells and treatment can shape these states. A computational RNA cluster is therefore not automatically a genetic clone.

Differences can occur across one tumor, between a primary tumor and another lesion, or over time. Treatment can remove susceptible populations and leave others to expand. A resistant branch that appears after therapy may have existed below detection before therapy, arisen later or changed state. A pair of snapshots does not always distinguish these explanations.

## Why it matters in cancer

A treatment aimed at one feature may leave cells that lack it. A biopsy can miss a relevant branch. Culture can favor populations that grow well in the model. These are sampling and mechanism questions, not proof that profiling is useless: the answer is to state the sampled scope and the uncertainty.

## Worked example

Imagine a fictional specimen with 60 cells carrying a surface target and 40 lacking it. A perfectly target-specific treatment could still leave the second group. Now suppose one small biopsy sampled only the target-rich region. Its result is accurate for that piece, yet incomplete for the whole tumor. These invented counts illustrate the sampling problem; they are not a clinical response estimate.

## Common confusions

- A high average signal does not mean every cancer cell expresses the target.
- Similar RNA states do not establish shared mutation ancestry.
- A “clonal” call in one biopsy does not prove presence in every unseen lesion.
- A higher variant read fraction may reflect copy number or sample purity, rather than a larger clone.

## How it is measured

Multi-region sequencing, appropriately modeled variant fractions, single-cell assays and spatial measurements probe different differences. Each has detection limits and sampling bias. Keep the specimen, region, time, method and uncertainty beside the claim.

## Related concepts

- [[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction|Variant and cancer-cell fractions]]
- [[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq|Why bulk RNA mixes populations]]

## Sources and scope

Source check: October 9, 2026. Fictional counts are teaching examples. Expert and learner review remain pending.

- [NCI tumor-heterogeneity definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/tumor-heterogeneity).
- [Gerlinger et al., primary multi-region renal-cancer study](https://pubmed.ncbi.nlm.nih.gov/22397650/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
- [Understand what a tumor model can predict](/wiki/education/guides/predicting-response-before-treating/index)
- [Read each label as an answer to a question](/wiki/education/guides/start-here/01-read-the-labels)
- [Start here: read the biology, then the evidence](/wiki/education/guides/start-here/index)
- [Choose a tumor model for the question](/wiki/education/modeling-tumor-response/index)
- [Use RNA to test the message and its source](/wiki/education/molecular-profiling/02-rna-the-activity-layer)
- [Add the geography of cells and signals](/wiki/education/molecular-profiling/04-spatial-biology)
- [Test a mechanism in a living model](/wiki/education/molecular-profiling/05-functional-drug-response)
- [Build an integrated claim without skipping the clinical question](/wiki/education/molecular-profiling/07-from-data-to-care-plan)
- [See what is inside a tissue sample](/wiki/education/multi-omics-foundations/01-epithelial-and-breast-tissue)
- [Separate cell identity from cell state](/wiki/education/multi-omics-foundations/02-cell-identity-and-state)
- [Separate DNA copies from cancer-cell fractions](/wiki/education/multi-omics-foundations/04-copies-alleles-and-clones)
- [Choose the comparison before interpreting the signal](/wiki/education/multi-omics-foundations/07-comparisons-and-evidence)
- [Understand multi-omics, one question at a time](/wiki/education/reading-a-tumor/omics-and-multi-omics)
- [Compare formats with evidence and normal-tissue risk](/wiki/education/targeted-therapy-modalities/06-comparisons)
<!-- END GENERATED USED IN -->
