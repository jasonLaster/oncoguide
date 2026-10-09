---
title: "Immunopeptidomics"
type: "concept"
domain: "measurement/proteins-and-spatial"
summary: "Immunopeptidomics identifies protein fragments associated with antigen-display molecules in a sampled preparation."
glossary_anchor: "immunopeptidomics"
aliases: ["immunopeptidomics", "HLA peptidome"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/hla]]"]
used_by: ["[[wiki/education/designing-a-vaccine/03-immunopeptidomics]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/molecular-profiling/03-protein-expression-and-activation]]","[[wiki/education/multi-omics-foundations/06-immune-presence-and-recognition]]"]
sensitive: false
tags: ["education", "measurement"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Immunopeptidomics

## In one sentence

Immunopeptidomics identifies protein fragments associated with antigen-display molecules in a sampled preparation.

## The intuition

Imagine reading the cards in a display case, rather than guessing which cards could fit. [Human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) molecules are the display system; peptides are short protein fragments. The analogy stops at the sampling step: the laboratory recovers material from cells, and some cards are easier to recover and identify than others.

## How it works

A typical workflow isolates HLA–peptide complexes from suitable cells or tissue. The laboratory releases the peptides, separates them by liquid chromatography, and records their masses and fragment patterns with tandem mass spectrometry. Those patterns are compared with candidate sequences using identification-confidence rules.

A tumor-aware sequence database can include altered proteins. It also needs careful controls: adding more possible sequences can increase incorrect matches. A synthetic reference peptide can strengthen a particular identification, but cannot repair every sampling limitation.

The result concerns the preparation that was analyzed. In a mixed tumor specimen, cancer cells and surrounding immune or stromal cells may all contribute. An HLA-associated peptide does not automatically reveal its cell of origin or its abundance on every living cell surface.

## Why it matters in cancer

This method adds experimental presentation evidence to a vaccine candidate board. It can reveal peptides missed by a shortlist, or help investigate an uncertain prediction. It does not show whether a [T-cell receptor](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) recognizes the peptide–HLA pair or whether treatment helps a patient.

## How it is measured

| Field | What to ask |
|---|---|
| Input | Which tissue preparation and preservation method are compatible, and how much material will be consumed? |
| Output | Which sequences passed the stated identification threshold, with what supporting spectra? |
| Coverage | Which HLA classes and alleles were recovered adequately? |
| Failure modes | Low input, poor recovery, mixed cell populations, database gaps or incorrect sequence assignments |
| Limits | Non-detection does not prove biological absence; detection does not prove safe tumor recognition |

There is no universal tissue requirement or detection threshold. Those belong to the named laboratory method.

## Worked example

A fictional specimen yields peptide A but not peptide B. A has measured support in that preparation. For B, ask whether the relevant allele was recovered, whether the altered sequence was searchable and whether sensitivity was adequate. “A detected, B absent everywhere” would be a much stronger claim than the experiment supports.

## Common confusions

- Binding prediction estimates a model output; immunopeptidomics identifies recovered peptides.
- Measuring total protein is different from measuring HLA-associated fragments.
- Presentation, immune response and clinical efficacy are separate questions.

## Related concepts

- [Antigen-processing machinery](/wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery)
- [ELISpot](/wiki/education/concepts/measurement/immune-monitoring/elispot)

## Sources and scope

Source check: October 9, 2026. This page explains a method or mechanism. Expert and learner review remain pending.

- [Purcell et al., mass-spectrometry immunopeptidomics protocol](https://www.nature.com/articles/s41596-019-0133-y).
- [Sarkizova et al., primary HLA-associated peptide dataset](https://www.nature.com/articles/s41587-019-0322-9).
- [Primary study improving analytical sensitivity](https://www.nature.com/articles/s41467-021-23713-9).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Measure presentation, binding and response](/wiki/education/designing-a-vaccine/03-immunopeptidomics)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [Ask whether protein is present, placed and active](/wiki/education/molecular-profiling/03-protein-expression-and-activation)
- [Separate immune presence from tumor recognition](/wiki/education/multi-omics-foundations/06-immune-presence-and-recognition)
<!-- END GENERATED USED IN -->
