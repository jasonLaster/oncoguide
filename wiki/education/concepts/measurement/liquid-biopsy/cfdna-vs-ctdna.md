---
title: "Cell-free DNA versus circulating tumor DNA"
sensitive: false
tags: ["education", "monitoring"]
updated: "2026-10-10"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
type: "concept"
glossary_anchor: "ctdna"
domain: "measurement/liquid-biopsy"
summary: "Cell-free DNA is DNA outside intact cells in a sample; circulating tumor DNA is the portion that comes from tumor cells."
aliases: ["cfDNA", "ctDNA", "cell-free DNA", "circulating tumor DNA"]
level: "foundation"
prerequisites: ["[[wiki/education/concepts/biology-basics/molecules/dna]]"]
used_by: ["[[wiki/education/guides/monitoring-residual-disease/01-read-the-blood-result]]","[[wiki/education/guides/monitoring-residual-disease/03-ask-what-a-result-should-change]]","[[wiki/education/guides/monitoring-residual-disease/index]]","[[wiki/education/local-treatment-modalities/02-timing]]","[[wiki/education/molecular-profiling/06-ctdna-and-mrd]]","[[wiki/education/molecular-profiling/ctdna-ppm-and-mri]]"]
---

# Cell-free DNA versus circulating tumor DNA

## In one sentence

Cell-free DNA is DNA outside intact cells in a sample; circulating tumor DNA is the portion that comes from tumor cells.

## The intuition

Picture a river carrying scraps of paper from many buildings. Finding paper tells you material entered the river; identifying its origin requires more information. Likewise, [DNA](/wiki/education/concepts/biology-basics/molecules/dna) fragments in plasma come from several cell populations. The analogy stops at source identification: DNA release, transport and clearance are biological processes, and one fragment does not count one living cell.

## How it works

Blood contains cells and a fluid component. Plasma is separated from collected blood before extracting cell-free DNA (cfDNA). Normal cell turnover contributes fragments; tumor cells can contribute circulating tumor DNA (ctDNA). The tumor-derived portion may be small or absent in the evaluated sample even when cancer exists elsewhere.

A laboratory must distinguish tumor-associated features from background. These features can include sequence changes, [methylation or fragment patterns](/wiki/education/concepts/measurement/liquid-biopsy/fragmentomics-and-methylation). A mutation found in plasma is not automatically tumor-derived. [Clonal hematopoiesis](/wiki/education/concepts/measurement/liquid-biopsy/chip) can produce variants from blood-forming cells. Matched white-blood-cell sequencing, tumor comparison and other validated origin filters address different sources of ambiguity; none should be assumed from the word “liquid biopsy.”

Collection and processing matter. If blood cells break down before plasma separation, added background DNA can alter the measurement. Extraction and library preparation retain only some available molecules. Read the [sampling and detection limits](/wiki/education/concepts/measurement/liquid-biopsy/limit-of-detection-and-sampling) alongside the call.

## Why it matters in cancer

An assay may use ctDNA for genotyping, treatment-response research or [molecular residual disease](/wiki/education/concepts/measurement/liquid-biopsy/mrd) monitoring. Those are different intended uses. Blood DNA does not locate a lesion, show its architecture, or directly demonstrate live tumor-cell activity. [Circulating tumor cells](/wiki/education/concepts/measurement/liquid-biopsy/circulating-tumor-cells) are a separate cell-based analyte.

## How it is measured

| Assay-card item | Scope to keep attached |
|---|---|
| Measures / how | Selected features in plasma DNA, using the stated sequencing or molecular method |
| Input and cost | Blood draw and a finite plasma aliquot; processing and analysis consume material |
| Output / units | Detected/not detected, variant fractions, molecule concentrations or model estimates; see [ctDNA units](/wiki/education/concepts/measurement/liquid-biopsy/ctdna-units) |
| Thresholds | Assay-specific origin filters, quality criteria and calling rule |
| Failure modes | Low shedding, too few qualifying molecules, damaged samples, background or origin misclassification |
| Cannot tell | All-body cell count, lesion location, viability or treatment benefit |
| Validation | Exact specimen, assay version, intended use and clinical population |

## Common confusions

- **cfDNA is not another name for ctDNA.** Tumor-derived DNA is a subset of the broader pool.
- **A real variant can have the wrong assumed source.** Technical accuracy and tumor attribution are separate questions.
- **Not detected is sample-specific.** It does not prove that no tumor exists.

## Try it

A fictional plasma assay detects Variant Q. Matched white-blood-cell DNA also carries Q, and no tumor comparison is available. Can Q be called a tumor marker just because it appeared in plasma?

**Answer:** No. A blood-cell source is plausible and needs assessment under the assay's origin rules. The detected sequence can be real while the tumor attribution remains unresolved.

## Explain it back

Why does finding a DNA fragment in plasma require both measurement and source attribution?

## Takeaway

Keep the material, its source and the intended clinical question separate.

## Related concepts

- [chip](/wiki/education/concepts/measurement/liquid-biopsy/chip)
- [mrd](/wiki/education/concepts/measurement/liquid-biopsy/mrd)

## Sources and scope

Source check: October 10, 2026. The exercise is fictional. Expert and learner review remain pending.

- [FDA 2024 circulating tumor DNA (ctDNA) drug-development guidance](https://www.fda.gov/media/183874/download) — specimen handling, assay design and use-specific validation.
- [Razavi et al. 2019](https://doi.org/10.1038/s41591-019-0652-7) — matched plasma, blood-cell and tumor sequencing demonstrates origin confounding in a defined study.
- [Newman et al. 2016](https://doi.org/10.1038/nbt.3520) — molecule recovery and error suppression are distinct analytical limits.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the blood result before reading the trend](/wiki/education/guides/monitoring-residual-disease/01-read-the-blood-result)
- [Ask what a result should change](/wiki/education/guides/monitoring-residual-disease/03-ask-what-a-result-should-change)
- [Understand blood tests and imaging after treatment](/wiki/education/guides/monitoring-residual-disease/index)
- [Put the disease setting before the clock](/wiki/education/local-treatment-modalities/02-timing)
- [Read blood measurements as a time series](/wiki/education/molecular-profiling/06-ctdna-and-mrd)
- [Compare blood results with imaging](/wiki/education/molecular-profiling/ctdna-ppm-and-mri)
<!-- END GENERATED USED IN -->
