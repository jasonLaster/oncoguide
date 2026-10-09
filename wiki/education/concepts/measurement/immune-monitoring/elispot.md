---
title: "ELISpot (enzyme-linked immunospot)"
type: "concept"
domain: "measurement/immune-monitoring"
summary: "ELISpot counts spots formed when sampled cells release a chosen molecule under defined test conditions."
glossary_anchor: "elispot"
aliases: ["ELISpot", "enzyme-linked immunospot"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/immunology/t-cells/t-cell-receptor]]"]
used_by: ["[[wiki/education/designing-a-vaccine/03-immunopeptidomics]]","[[wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/molecular-profiling/tcr-and-tcr-sequencing]]","[[wiki/education/oncology-101/3-t-cell-states]]","[[wiki/education/reading-a-tumor/measuring-t-cell-engagement]]"]
sensitive: false
tags: ["education", "measurement"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# ELISpot (enzyme-linked immunospot)

## In one sentence

ELISpot counts spots formed when sampled cells release a chosen molecule under defined test conditions.

## The intuition

Picture a plate that catches small droplets where each cell sits. A cell releasing the molecule being measured leaves a mark. The assay counts those marks; it does not watch the cell kill a tumor. That distinction makes a positive result useful without asking it to answer every question.

## How it works

Antibodies on a membrane capture a selected molecule, often interferon gamma, released by nearby cells. After stimulation and incubation, detection reagents make localized spots visible. The laboratory reports spot-forming units relative to the number of cells tested, with the method and background stated.

For antigen testing, cells may receive a candidate peptide or peptide pool. A negative control estimates background; a positive control checks whether the sample can respond. Replicates and predefined criteria help distinguish a response from noise. Viability, prior freezing and sample handling also matter.

A conventional mixed-cell assay does not identify every responding cell. Sorting or additional measurements may be needed to assign a response to a cell type. Spot size and intensity are not a direct meter of tumor killing.

## Why it matters in cancer

A vaccine study can compare responses before and after dosing under a consistent protocol. A rise supports increased activity against the test stimulus, within the assay's limits. [Human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) displays the naturally processed peptide. Artificial peptide addition can bypass the tumor's natural processing and presentation. A response to a peptide therefore needs a separate bridge to recognition of actual tumor cells.

## How it is measured

| Field | Interpretation |
|---|---|
| Input | A suitable viable-cell preparation, often blood-derived immune cells |
| Output | Spot-forming units per stated number of input cells, with background handling |
| Controls | Unstimulated or vehicle wells, positive stimulation, replicates and viability |
| Failure modes | High background, dead cells, weak stimulation, merged spots or inconsistent counting |
| Cannot establish alone | The target of each receptor, natural tumor recognition, tissue safety or clinical benefit |

The response cutoff belongs to the specific assay and study. Do not import one paper's positivity rule into a different laboratory report.

## Worked example

In a fictional experiment, post-dose cells produce more spots with a candidate peptide than with vehicle. Good controls support a peptide-stimulated response. If the experiment used an expanded culture, that result describes the cultured cells; it is not the direct frequency of responding cells in the original blood draw.

## Common confusions

- “More spots” and “more tumor killing” are different observations.
- A negative result can reflect sample or assay limitations rather than no relevant cells anywhere.
- [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) sequencing tracks receptor sequences; its [assay concept](/wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing) explains the readout; ELISpot measures secretion after stimulation.

## Related concepts

- [Peptide–HLA multimer staining](/wiki/education/concepts/measurement/immune-monitoring/peptide-hla-multimer-staining)
- [Immunopeptidomics](/wiki/education/concepts/measurement/proteins-and-spatial/immunopeptidomics)

## Sources and scope

Source check: October 9, 2026. This page explains a method or mechanism. Expert and learner review remain pending.

- [Peptide-specific interferon-gamma ELISpot protocol](https://pmc.ncbi.nlm.nih.gov/articles/PMC8410284/).
- [IFN-gamma ELISpot protocol and interpretation in vaccine research](https://www.nature.com/articles/nprot.2009.7).
- [Primary assay-validation study in nonhuman primates](https://www.nature.com/articles/s41434-020-00214-w) — method validation does not establish cancer efficacy.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Measure presentation, binding and response](/wiki/education/designing-a-vaccine/03-immunopeptidomics)
- [Dose a vaccine and measure its response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [T-cell receptors and TCR sequencing](/wiki/education/molecular-profiling/tcr-and-tcr-sequencing)
- [Why a T-cell count does not tell the whole story](/wiki/education/oncology-101/3-t-cell-states)
- [Measure each part of a T-cell response](/wiki/education/reading-a-tumor/measuring-t-cell-engagement)
<!-- END GENERATED USED IN -->
