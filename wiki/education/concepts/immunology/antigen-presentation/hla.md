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
used_by: ["[[wiki/education/cellular-therapies/02-car-tcr-til-comparison]]","[[wiki/education/cellular-therapies/05-engineered-t-cell-building-blocks]]","[[wiki/education/cellular-therapies/08-solid-tumor-barriers]]","[[wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation]]","[[wiki/education/designing-a-vaccine/03-immunopeptidomics]]","[[wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board]]","[[wiki/education/designing-a-vaccine/index]]","[[wiki/education/guides/engineered-cell-therapy/index]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/guides/personalized-cancer-vaccine/02-reading-tumor-and-normal-data]]","[[wiki/education/guides/personalized-cancer-vaccine/06-writing-the-message]]","[[wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/local-treatment-modalities/01-mechanism]]","[[wiki/education/local-treatment-modalities/index]]","[[wiki/education/modeling-tumor-response/verification-and-feedback-loops]]","[[wiki/education/molecular-profiling/04-spatial-biology]]","[[wiki/education/molecular-profiling/tcr-and-tcr-sequencing]]","[[wiki/education/oncology-101/1-ligands]]","[[wiki/education/oncology-101/2-dendritic-cells]]","[[wiki/education/oncology-101/4-escape-mechanisms]]","[[wiki/education/oncology-101/index]]","[[wiki/education/targeted-therapy-modalities/01-mechanism]]","[[wiki/education/targeted-therapy-modalities/index]]"]
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
- [Immunopeptidomics: measuring peptide display](/wiki/education/designing-a-vaccine/03-immunopeptidomics)
- [Read a neoantigen design board](/wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board)
- [Why a personalized cancer vaccine can help](/wiki/education/designing-a-vaccine/index)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
- [Understand how the immune system recognizes cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Read tumor and normal data before choosing targets](/wiki/education/guides/personalized-cancer-vaccine/02-reading-tumor-and-normal-data)
- [Turn selected targets into an mRNA message](/wiki/education/guides/personalized-cancer-vaccine/06-writing-the-message)
- [Dose a vaccine and measure its response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [How local injury can create immune signals](/wiki/education/local-treatment-modalities/01-mechanism)
- [Understand local treatment and immune priming](/wiki/education/local-treatment-modalities/index)
- [Verification and feedback loops](/wiki/education/modeling-tumor-response/verification-and-feedback-loops)
- [Spatial biology: where are the cells?](/wiki/education/molecular-profiling/04-spatial-biology)
- [T-cell receptors and TCR sequencing](/wiki/education/molecular-profiling/tcr-and-tcr-sequencing)
- [Ligands and receptors](/wiki/education/oncology-101/1-ligands)
- [Dendritic cells and T-cell priming](/wiki/education/oncology-101/2-dendritic-cells)
- [How tumors escape a treatment](/wiki/education/oncology-101/4-escape-mechanisms)
- [Oncology 101 — the minimum vocabulary](/wiki/education/oncology-101/index)
- [How targeted therapies act](/wiki/education/targeted-therapy-modalities/01-mechanism)
- [Targeted therapy modalities](/wiki/education/targeted-therapy-modalities/index)
<!-- END GENERATED USED IN -->
