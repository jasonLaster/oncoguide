---
title: "ctDNA (circulating tumor DNA) units and detection limits"
type: concept
domain: measurement/liquid-biopsy
summary: "A circulating tumor DNA number is meaningful only with the assay\u2019s measured quantity, units and detection criteria."
glossary_anchor: ctdna-units
aliases: ["ctdna-units"]
prerequisites: []
reviewed: pending
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, measurement]
used_by: ["[[wiki/education/guides/monitoring-residual-disease/01-read-the-blood-result]]","[[wiki/education/guides/monitoring-residual-disease/index]]","[[wiki/education/index]]","[[wiki/education/molecular-profiling/06-ctdna-and-mrd]]","[[wiki/education/molecular-profiling/ctdna-ppm-and-mri]]","[[wiki/education/reading-a-tumor/measuring-t-cell-engagement]]","[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"]
updated: 2026-10-09
source_checked: 2026-10-09
review_status: "Expert and learner review pending"
---

# ctDNA (circulating tumor DNA) units and detection limits

## In one sentence

A circulating tumor DNA number is meaningful only with the assay’s measured quantity, units and detection criteria.

## The intuition

Two rulers can show similar numbers while measuring different things. A concentration counts molecules per volume. A fraction describes a part of a total. A categorical “not detected” follows an assay rule. These cannot be collapsed into a single universal tumor-load scale.

## How it works

MTM/mL means mean tumor molecules per milliliter under the reporting assay’s method. PPM means parts per million; 1 PPM is 0.0001% as a numerical fraction. The biological quantity scaled to PPM may be an estimated tumor fraction, rather than the fraction of molecules carrying one variant.

[[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction|Variant allele fraction (VAF)]] is the fraction of evaluated alleles supporting a variant. Tumor fraction estimates how much DNA comes from tumor. Purity, copy number, mutated-copy count and clone composition affect the relationship. A single-variant VAF should not be directly equated with an assay’s calibrated tumor-fraction PPM result.

Limit of detection (LOD) describes detection under specified inputs and performance criteria; LOD95 indicates a 95% detection probability under those conditions. Limit of quantitation (LOQ) concerns reliable numerical measurement. A detected value can be below a reliable quantitation range. An assay can report no detection even though tumor exists below its sampled sensitivity.

Plasma volume, molecule recovery, background [[wiki/education/concepts/measurement/liquid-biopsy/cfdna-vs-ctdna|cell-free DNA (cfDNA)]], shedding and tracked targets influence the result. Analytical sensitivity in validation samples differs from clinical sensitivity for recurrence in a particular population and draw schedule. More tracked targets can improve opportunities to detect signal, but do not guarantee a complete clinical result.

## Why it matters in cancer

It prevents different blood-assay quantities from being combined into a misleading universal tumor-load scale.

## Worked example

A fictional assay reports a tumor-fraction estimate of 3 PPM. Another reports 0.2 mean tumor molecules per milliliter. The first is a fraction; the second is a concentration. These are not competing counts of cancer cells and cannot be compared by the size of their numbers.

Now suppose the first result is detected but below its reliable quantitation range. The detection call may be more informative than an exact fold change from the prior draw. Keep that qualification beside the result.

## How it is measured

| Report item | What to keep attached |
|---|---|
| Measured quantity | Fraction, concentration or another assay-defined estimate |
| Input | Collected and evaluated plasma or DNA input, plus qualifications |
| Detection call | Qualifying rule, not just a printed number |
| Numerical value | Units, calibration and reliable quantitation range |
| Validation | Assay version, intended use and population-specific evidence |
| Main limit | A result is not a direct count of all cancer cells or a lesion map |

## Common confusions

- Zero or “not detected” does not mean zero cancer cells in the body.
- LOD and LOQ answer different questions.
- A pooled fraction below another nominal threshold is not a head-to-head miss rate.

## Related concepts

[[wiki/education/concepts/measurement/liquid-biopsy/cfdna-vs-ctdna|cfDNA versus ctDNA]], [[wiki/education/concepts/measurement/liquid-biopsy/tumor-informed-mrd-assay|tumor-informed monitoring]], and [[wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility|validity and utility]].

## Sources and scope

Source check: October 9, 2026. General measurement principles; the example is fictional. Expert and learner review remain pending. Specific product performance belongs in the dated clinical reference.

- [FDA 2024 ctDNA drug-development guidance](https://www.fda.gov/media/183874/download) — sampling and analytical-validation considerations.
- [Magbanua et al. 2021](https://doi.org/10.1038/s41523-021-00239-3) — tumor molecules per milliliter used in a defined breast-cancer study.
- [ESMO 2022 ctDNA recommendations](https://pubmed.ncbi.nlm.nih.gov/35809752/) — assay limits and setting-specific interpretation.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the blood result before reading the trend](/wiki/education/guides/monitoring-residual-disease/01-read-the-blood-result)
- [Understand blood tests and imaging after treatment](/wiki/education/guides/monitoring-residual-disease/index)
- [Learn the biology and evidence](/wiki/education/index)
- [Read blood measurements as a time series](/wiki/education/molecular-profiling/06-ctdna-and-mrd)
- [Compare blood results with imaging](/wiki/education/molecular-profiling/ctdna-ppm-and-mri)
- [Measure each part of a T-cell response](/wiki/education/reading-a-tumor/measuring-t-cell-engagement)
- [Understand multi-omics, one question at a time](/wiki/education/reading-a-tumor/omics-and-multi-omics)
<!-- END GENERATED USED IN -->
