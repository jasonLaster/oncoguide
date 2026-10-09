---
title: "Panel, exome and genome sequencing: choose the coverage"
type: "concept"
domain: "measurement/sequencing-basics"
summary: "Panel, exome and genome sequencing examine progressively broader sets of DNA regions, with assay-specific depth and detection limits."
glossary_anchor: "panel-exome-genome"
aliases: ["WES", "WGS", "whole-exome sequencing", "whole-genome sequencing", "targeted panel", "panel exome genome"]
level: "foundation"
sensitive: false
tags: ["education", "measurement"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/mutation-types]]"]
used_by: ["[[wiki/education/molecular-profiling/01-dna-the-blueprint]]","[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"]
---

# Panel, exome and genome sequencing: choose the coverage

## In one sentence

Panel, exome and genome sequencing examine progressively broader sets of DNA regions, with assay-specific depth and detection limits.

## The intuition

You can proofread selected pages, most recipe sections or an entire book. Broader reading covers more territory, but how closely you read still matters. Sequencing has the same two questions: **which regions were examined, and how well could this assay detect the change of interest?**

## How it works

A **targeted panel** examines a predefined set of genes or regions. A panel can include coding sequence, selected introns, copy-number analysis or other features. Its specification, rather than its gene count alone, tells us what it can find.

**[[about/Terminology#wes|Whole-exome sequencing (WES)]]** focuses on exons, the segments retained in processed RNA. Assays often target nearby splice boundaries too. Exons include untranslated regions, although actual capture and reporting vary. The exome does not include every regulatory or rearrangement breakpoint.

**[[about/Terminology#wgs|Whole-genome sequencing (WGS)]]** examines coding and noncoding regions broadly. “Whole” describes scope, not perfect observation of every base. Repeated sequence, uneven coverage and analysis limits can still leave gaps.

**Depth** describes how many usable observations support a position. **Coverage** can describe depth or how much of a region meets a required depth; ask which meaning the report uses. Average depth does not guarantee that a particular location was adequately measured.

## Why it matters in cancer

A broad assay can discover changes outside a narrow panel. A focused assay can achieve deeper validated measurement of its intended targets. These strengths can coexist. The best fit depends on the question, specimen and validated change classes, rather than a universal “genome beats panel” ranking.

## Worked example

A fictional research genome assay reports no change at a difficult repeated region. A clinical panel was specifically validated to detect one alteration there. The genome result does not automatically supersede that focused test. Conversely, a panel that never targets a fusion breakpoint cannot exclude it simply by returning a negative report.

## Common confusions

- More genes do not guarantee better detection of every variant class.
- DNA sequencing does not directly measure RNA expression or protein.
- Conventional WGS does not by itself measure all methylation or chromatin states.
- A research discovery assay is not automatically a companion diagnostic, a test tied to a particular treatment's use.

## How it is measured

The assay card should record specimen requirements, extraction, targeted regions, usable depth, detected change classes and validation scope. The same labels can cover different laboratory designs. Tissue consumed and minimum input are method-specific; never infer them from “WES” alone.

## Related concepts

- [[wiki/education/concepts/biology-basics/genetics/mutation-types|What kind of change needs detection?]]
- [[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic|What a matched normal adds]]

## Sources and scope

Source check: October 9, 2026. This is an assay-category comparison, not a laboratory recommendation. Expert and learner review remain pending.

- [NHGRI DNA-sequencing fact sheet](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Fact-Sheet).
- [NHGRI exome definition](https://www.genome.gov/genetics-glossary/Exome).
- [GeneReviews glossary: coverage limitations](https://www.ncbi.nlm.nih.gov/books/NBK5191/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read a DNA assay as a coverage-and-confidence claim](/wiki/education/molecular-profiling/01-dna-the-blueprint)
- [Understand multi-omics, one question at a time](/wiki/education/reading-a-tumor/omics-and-multi-omics)
<!-- END GENERATED USED IN -->
