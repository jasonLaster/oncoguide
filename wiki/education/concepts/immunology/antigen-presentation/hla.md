---
title: "HLA (human leukocyte antigen)"
type: concept
domain: immunology/antigen-presentation
summary: "HLA molecules display protein fragments for T-cell recognition."
glossary_anchor: hla
aliases: ["hla"]
prerequisites: []
reviewed: pending
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, immunology]
used_by: ["[[wiki/education/cellular-therapies/02-car-tcr-til-comparison]]","[[wiki/education/cellular-therapies/05-engineered-t-cell-building-blocks]]","[[wiki/education/cellular-therapies/08-solid-tumor-barriers]]","[[wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation]]","[[wiki/education/designing-a-vaccine/03-immunopeptidomics]]","[[wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board]]","[[wiki/education/designing-a-vaccine/index]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]","[[wiki/education/guides/engineered-cell-therapy/02-choosing-a-target]]","[[wiki/education/guides/engineered-cell-therapy/index]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/guides/personalized-cancer-vaccine/02-reading-tumor-and-normal-data]]","[[wiki/education/guides/personalized-cancer-vaccine/06-writing-the-message]]","[[wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/guides/start-here/02-follow-immune-recognition]]","[[wiki/education/guides/start-here/index]]","[[wiki/education/local-treatment-modalities/01-mechanism]]","[[wiki/education/local-treatment-modalities/index]]","[[wiki/education/molecular-profiling/tcr-and-tcr-sequencing]]","[[wiki/education/multi-omics-foundations/06-immune-presence-and-recognition]]","[[wiki/education/oncology-101/2-dendritic-cells]]","[[wiki/education/oncology-101/3-t-cell-states]]","[[wiki/education/oncology-101/4-escape-mechanisms]]","[[wiki/education/reading-a-tumor/measuring-t-cell-engagement]]","[[wiki/education/targeted-therapy-modalities/01-mechanism]]","[[wiki/education/targeted-therapy-modalities/06-comparisons]]","[[wiki/education/targeted-therapy-modalities/index]]"]
updated: 2026-10-08
source_checked: 2026-10-08
review_status: "Expert and learner review pending"
---

# HLA (human leukocyte antigen)

## In one sentence

HLA molecules display protein fragments for T-cell recognition.

## The intuition

A display case is a useful analogy: the cell exposes a small sample of its proteins. The case and the fragment both matter. A T-cell receptor recognizes a peptide together with a particular HLA molecule, rather than simply recognizing any version of the original protein.

## How it works

HLA is the human major histocompatibility complex (MHC). Class I molecules generally display peptides to CD8 T cells; class II molecules generally display peptides to CD4 T cells. The pathways and cell types differ, with important exceptions such as cross-presentation.

HLA alleles are shared across people. A person inherits a combination; it is not necessarily unique. HLA typing identifies that combination. Binding predictors estimate whether a candidate peptide can fit a specified allele’s groove. Processing, transport, loading and cell-surface expression still determine whether it is actually displayed.

Most conventional class I complexes require [beta-2 microglobulin (B2M)](/wiki/education/concepts/immunology/antigen-presentation/b2m). Tumors can lose a presenting allele, alter processing or reduce expression. Allele-specific loss is different from complete loss of conventional class I display. Targets using retained alleles may remain possible.

HLA-C has lower surface expression than HLA-A/B in many contexts. Its smaller observed peptide share is not evidence that it is universally more permissive. Dataset representation and allele-specific prediction quality also matter. A measured peptide in a mixed tissue preparation does not establish its source cell or a safe tumor-specific T-cell response.

## Why it matters in cancer

It connects antigen display to receptor recognition and explains why loss of a presenting allele can affect a treatment route.

## Worked example

A mutation produces a plausible peptide for HLA-A*02:01. If the tumor loses the allele used by the intended receptor, binding predictions from inherited typing alone may no longer describe tumor presentation. Retained-allele assessment answers a different question from typing.

## Common confusions

- The HLA groove holds the peptide; the [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) contacts the peptide–HLA complex.
- Binding prediction is not measured presentation or T-cell recognition.
- A surface-antigen engager can bypass HLA; a TCR-based engager cannot.

## Related concepts

[[wiki/education/molecular-profiling/tcr-and-tcr-sequencing|TCR sequencing]] and [[wiki/questions/hla-b2m-loss|case assessment]].

## Sources and scope

General teaching, source-checked October 8, 2026. The examples are hypothetical unless a study is explicitly named. Expert and learner review remain pending.

- [Primary HLAthena immunopeptidomics study](https://doi.org/10.1038/s41587-019-0322-9).
- [[wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation|Detailed antigen-presentation lesson and sources]].

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Compare immune-cell recognition systems](/wiki/education/cellular-therapies/02-car-tcr-til-comparison)
- [Building an engineered T cell](/wiki/education/cellular-therapies/05-engineered-t-cell-building-blocks)
- [The journey through a solid tumor](/wiki/education/cellular-therapies/08-solid-tumor-barriers)
- [HLA and antigen presentation in vaccine design](/wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation)
- [Measure presentation, binding and response](/wiki/education/designing-a-vaccine/03-immunopeptidomics)
- [Read a neoantigen design board](/wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board)
- [Why a personalized cancer vaccine can help](/wiki/education/designing-a-vaccine/index)
- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
- [Choose a target with a usable safety window](/wiki/education/guides/engineered-cell-therapy/02-choosing-a-target)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
- [Understand how the immune system recognizes cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Read tumor and normal data before choosing targets](/wiki/education/guides/personalized-cancer-vaccine/02-reading-tumor-and-normal-data)
- [Turn selected targets into an mRNA message](/wiki/education/guides/personalized-cancer-vaccine/06-writing-the-message)
- [Dose a vaccine and measure its response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [Follow the route to immune recognition](/wiki/education/guides/start-here/02-follow-immune-recognition)
- [Start here: read the biology, then the evidence](/wiki/education/guides/start-here/index)
- [How local injury can create immune signals](/wiki/education/local-treatment-modalities/01-mechanism)
- [Understand local treatment and immune priming](/wiki/education/local-treatment-modalities/index)
- [T-cell receptors and TCR sequencing](/wiki/education/molecular-profiling/tcr-and-tcr-sequencing)
- [Separate immune presence from tumor recognition](/wiki/education/multi-omics-foundations/06-immune-presence-and-recognition)
- [How dendritic cells help start a T-cell response](/wiki/education/oncology-101/2-dendritic-cells)
- [Why a T-cell count does not tell the whole story](/wiki/education/oncology-101/3-t-cell-states)
- [Find the step an immune response can lose](/wiki/education/oncology-101/4-escape-mechanisms)
- [Measure each part of a T-cell response](/wiki/education/reading-a-tumor/measuring-t-cell-engagement)
- [Separate the address from the killing mechanism](/wiki/education/targeted-therapy-modalities/01-mechanism)
- [Compare formats with evidence and normal-tissue risk](/wiki/education/targeted-therapy-modalities/06-comparisons)
- [Targeted therapy mechanisms and comparisons](/wiki/education/targeted-therapy-modalities/index)
<!-- END GENERATED USED IN -->
