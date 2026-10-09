---
title: "Peptide–HLA multimer staining"
type: "concept"
domain: "measurement/immune-monitoring"
summary: "Multimer staining labels cells whose receptors bind a specified peptide held by its display molecule under the assay conditions."
glossary_anchor: "peptide-hla-multimer"
aliases: ["tetramer", "multimer staining", "peptide–HLA multimer"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/hla]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-receptor]]"]
used_by: ["[[wiki/education/designing-a-vaccine/03-immunopeptidomics]]","[[wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/molecular-profiling/tcr-and-tcr-sequencing]]","[[wiki/education/oncology-101/3-t-cell-states]]","[[wiki/education/reading-a-tumor/measuring-t-cell-engagement]]"]
sensitive: false
tags: ["education", "measurement"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Peptide–HLA multimer staining

## In one sentence

Multimer staining labels cells whose receptors bind a specified peptide held by its display molecule under the assay conditions.

## The intuition

A labeled test piece lets researchers find cells that bind a chosen target shape. Using several copies together makes the contact easier to detect. Think of it as a binding label, not a certificate that the labeled cell can kill cancer.

Here, [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) holds the peptide. The reagent tests contact with a [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor). It does not contain a whole tumor cell.

## How it works

Researchers assemble a specified HLA molecule with a selected peptide and attach multiple copies to a detectable scaffold. A tetramer is one commonly used format. Cells are exposed to the reagent and analyzed, often by flow cytometry, which records fluorescence and selected cell markers.

The peptide sequence and HLA allele define what was tested. A mismatched allele or poorly formed reagent can make a negative result uninformative. Controls help address nonspecific binding, dead cells and background fluorescence. Some relevant receptors bind too weakly for a particular staining method.

Staining can be combined with cell-state markers or receptor sequencing. That links a binding observation to the sampled cell's identity. It still does not prove functional activation, persistence or recognition of naturally processed antigen on cancer cells.

## Why it matters in cancer

Multimers can help count or isolate candidate antigen-reactive cells in a vaccine or receptor-discovery experiment. They are most informative when used alongside controlled functional studies. Different assays answer neighboring questions; agreement helps connect the chain, while disagreement can reveal a missing step.

## How it is measured

| Field | What the report needs |
|---|---|
| Input | Suitable cells and a reagent matching the specified peptide and allele |
| Output | Fraction or count of stained cells within a stated cell population |
| Controls | Background reagent, viable-cell selection and documented analysis gates |
| Failure modes | Nonspecific binding, weak binding, incorrect reagent or sampling loss |
| Cannot establish alone | Cytokine response, tumor-cell killing, healthy-tissue specificity or patient benefit |

Cell fractions depend on the denominator. A percentage of CD8 cells cannot be compared directly with a percentage of all blood cells.

## Worked example

A fictional multimer labels a small population after vaccination. Those cells bind the test reagent under the chosen conditions. An [ELISpot assay](/wiki/education/concepts/measurement/immune-monitoring/elispot) could test secretion after stimulation. A tumor-cell assay would ask whether naturally presented antigen supports useful function. Neither follow-up answer is contained in the staining percentage.

## Common confusions

- Binding a reagent is different from killing a naturally presenting tumor cell.
- A tetramer-negative result is not a census of every possible relevant receptor.
- HLA restriction belongs to the peptide–HLA pair, not the peptide alone.

## Related concepts

- [T-cell states](/wiki/education/concepts/immunology/t-cells/t-cell-states)
- [Immunopeptidomics](/wiki/education/concepts/measurement/proteins-and-spatial/immunopeptidomics)

## Sources and scope

Source check: October 9, 2026. This page explains a method or mechanism. Expert and learner review remain pending.

- [Altman et al., primary antigen-specific T-cell labeling study](https://pubmed.ncbi.nlm.nih.gov/8810254/).
- [Primary tetramer-production method](https://pubmed.ncbi.nlm.nih.gov/17187819/).
- [Peptide-specific functional assay protocol](https://pmc.ncbi.nlm.nih.gov/articles/PMC8410284/) — complementary secretion measurement.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Measure presentation, binding and response](/wiki/education/designing-a-vaccine/03-immunopeptidomics)
- [Dose a vaccine and measure its response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [T-cell receptors and TCR sequencing](/wiki/education/molecular-profiling/tcr-and-tcr-sequencing)
- [Why a T-cell count does not tell the whole story](/wiki/education/oncology-101/3-t-cell-states)
- [Measure each part of a T-cell response](/wiki/education/reading-a-tumor/measuring-t-cell-engagement)
<!-- END GENERATED USED IN -->
