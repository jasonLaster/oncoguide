---
title: "Immunopeptidomics"
type: "concept"
domain: "measurement/proteins-and-spatial"
summary: "Immunopeptidomics identifies protein fragments associated with antigen-display molecules in a sampled preparation."
glossary_anchor: "immunopeptidomics"
aliases: ["immunopeptidomics"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/hla]]"]
used_by: ["[[wiki/education/designing-a-vaccine/03-immunopeptidomics]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/molecular-profiling/03-protein-expression-and-activation]]","[[wiki/education/molecular-profiling/08-profile-residual-tumor]]","[[wiki/education/multi-omics-foundations/06-immune-presence-and-recognition]]"]
sensitive: false
tags: ["education", "measurement"]
updated: 2026-10-10
source_checked: 2026-10-10
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

The [immunopeptidome](/wiki/education/concepts/immunology/antigen-presentation/immunopeptidome) is the biological peptide repertoire in a defined HLA/cell/time context. The reported assay list is a recovered and identified subset, not a complete inventory of that repertoire.

A typical workflow isolates HLA–peptide complexes from suitable cells or tissue. The laboratory releases the peptides, separates them by liquid chromatography, and records their masses and fragment patterns with tandem mass spectrometry. Those patterns are compared with candidate sequences using identification-confidence rules.

A tumor-aware sequence database can include altered proteins. It also needs careful controls: adding more possible sequences can increase incorrect matches. A synthetic reference peptide can strengthen a particular identification, but cannot repair every sampling limitation.

The result concerns the preparation that was analyzed. In a mixed tumor specimen, cancer cells and surrounding immune or stromal cells may all contribute. An HLA-associated peptide does not automatically reveal its cell of origin or its abundance on every living cell surface.

Class-I and class-II isolation use appropriate capture reagents. A whole-cell lysate can include assembled intracellular HLA complexes as well as those from the surface; it is not automatically a surface-only survey. In multi-allele preparations, assigning a peptide to an individual allele may require computational inference rather than direct isolation of that allele.

## Why it matters in cancer

This method adds experimental presentation evidence to a vaccine candidate board. It can reveal peptides missed by a shortlist, or help investigate an uncertain prediction. It does not show whether a [T-cell receptor](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) recognizes the peptide–HLA pair or whether treatment helps a patient.

## How it is measured

| Field | What to ask |
|---|---|
| Input | Which tissue preparation and preservation method are compatible, and how much material will be consumed? |
| Output and units | Peptide identities and unique-sequence counts; instrument intensities are method-dependent, not automatically copies per cell |
| Identification threshold | Which sequence database and false-discovery rule were used, at spectrum or peptide level, with what supporting spectra? |
| Coverage | Which HLA classes and alleles were captured, and which allele assignments were measured or inferred? |
| Material and cost | Protocol-specific tissue/cell input, preservation, consumption, turnaround and analysis cost; request these before using a scarce specimen |
| Validation | Recovery, reproducibility and reference-peptide checks for this method; research detection does not establish clinical utility |
| Failure modes | Low input, poor recovery, mixed cell populations, database gaps or incorrect sequence assignments |
| Limits | Non-detection does not prove biological absence; detection does not prove safe tumor recognition |

There is no universal tissue requirement or detection threshold. Those belong to the named laboratory method.

## Preservation needs method-specific validation

**Formalin-fixed, paraffin-embedded (FFPE) tissue cannot be assumed usable for an assay validated on cells or frozen tissue.** Without a validated FFPE workflow, an archived block may be unusable in practice for that assay. Confirm compatibility before consuming scarce tissue or interpreting non-detection. [Sirois and colleagues (2021)](https://www.jove.com/t/63052/immunopeptidomics-isolation-mouse-human-mhc-class-i-ii-associated) demonstrated their method in cell lines and proposed FFPE adaptation; that proposal does not establish routine FFPE performance. [Immunohistochemistry (IHC)](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry) and [total-protein profiling](/wiki/education/concepts/measurement/proteins-and-spatial/mass-spectrometry-proteomics) answer different questions; their success does not validate recovery of HLA-associated peptides. Preservation compatibility must be established for the named method and input.

## Worked example

A fictional specimen yields peptide A but not peptide B. A has measured support in that preparation. For B, ask whether the relevant allele was recovered, whether the altered sequence was searchable and whether sensitivity was adequate. “A detected, B absent everywhere” would be a much stronger claim than the experiment supports.

## Common confusions

- Binding prediction estimates a model output; immunopeptidomics identifies recovered peptides.
- Measuring total protein is different from measuring HLA-associated fragments.
- Presentation, immune response and clinical efficacy are separate questions.

## Try it

In the fictional A/B result, B is missing from the search database and was not identified. Is its non-detection a clean biological negative?

**Answer:** No. The workflow could not identify that sequence as configured. Correcting the database addresses one limitation but does not guarantee recovery or prove natural display.

## Explain it back

“Biological repertoire” and “reported peptide list” differ because ___.

## Takeaway

**Read a peptide list with its capture, search and confidence rules.**

## Related concepts

- [Antigen-processing machinery](/wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery)
- [ELISpot](/wiki/education/concepts/measurement/immune-monitoring/elispot)

## Sources and scope

Source check: October 10, 2026. This page explains a method or mechanism. Expert and learner review remain pending.

- [Purcell et al., mass-spectrometry immunopeptidomics protocol](https://www.nature.com/articles/s41596-019-0133-y).
- [Sarkizova et al., primary HLA-associated peptide dataset](https://www.nature.com/articles/s41587-019-0322-9).
- [Wilhelm et al., 2021](https://www.nature.com/articles/s41467-021-23713-9), identification sensitivity and sequence-assignment limitations.
- [Chong et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29242379/), class-I/class-II capture and method-specific recovery, not a universal tissue requirement.

Focused source check: October 14, 2026. The preservation addition uses the Sirois 2021 abstract and selected primary discussion, plus the [2022 quantitative tissue study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10130759/)'s selected specimen-description text. The latter separates frozen peptide–HLA analysis from FFPE histology. No universal FFPE feasibility claim or full-paper review is made; expert and learner review remain pending.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Measure presentation, binding and response](/wiki/education/designing-a-vaccine/03-immunopeptidomics)
- [Understand how the immune system recognizes cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [Ask whether protein is present, placed and active](/wiki/education/molecular-profiling/03-protein-expression-and-activation)
- [Read single-cell data after treatment](/wiki/education/molecular-profiling/08-profile-residual-tumor)
- [Separate immune presence from tumor recognition](/wiki/education/multi-omics-foundations/06-immune-presence-and-recognition)
<!-- END GENERATED USED IN -->
