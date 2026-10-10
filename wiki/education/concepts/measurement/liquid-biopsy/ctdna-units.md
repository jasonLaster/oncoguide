---
title: "ctDNA units: concentration, fractions and reporting rules"
type: concept
domain: measurement/liquid-biopsy
summary: "A circulating tumor DNA number is meaningful only with the assay’s measured quantity, units and detection criteria."
glossary_anchor: ctdna-units
aliases: ["ctdna-units", "MTM/mL", "mean tumor molecules per milliliter", "ctDNA PPM"]
prerequisites: ["[[wiki/education/concepts/measurement/liquid-biopsy/cfdna-vs-ctdna]]", "[[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction]]"]
reviewed: "pending"
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, measurement]
used_by: ["[[wiki/education/guides/monitoring-residual-disease/01-read-the-blood-result]]","[[wiki/education/guides/monitoring-residual-disease/index]]","[[wiki/education/index]]","[[wiki/education/molecular-profiling/06-ctdna-and-mrd]]","[[wiki/education/molecular-profiling/ctdna-ppm-and-mri]]","[[wiki/education/reading-a-tumor/measuring-t-cell-engagement]]","[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"]
updated: "2026-10-10"
source_checked: "2026-10-10"
review_status: "Source-checked; expert and learner review pending"
---

# ctDNA units: concentration, fractions and reporting rules

## In one sentence

A circulating tumor DNA number is meaningful only with the assay’s measured quantity, units and detection criteria.

## The intuition

A teaspoon and a percentage answer different questions. One describes an amount; the other describes a share. A blood-test result also needs the quantity behind its number. Comparing printed numbers without units is like comparing “three teaspoons” with “five percent.” Neither is automatically larger.

The analogy stops at measurement: plasma assays may estimate quantities through calibration and several tracked features rather than directly count every tumor fragment.

## How it works

[Circulating tumor DNA (ctDNA)](/wiki/education/concepts/measurement/liquid-biopsy/cfdna-vs-ctdna) can be reported in several ways:

| Report quantity | Meaning | Boundary |
|---|---|---|
| **MTM/mL** | Mean tumor molecules per milliliter of plasma under the assay's calculation | A concentration estimated across tracked features; not all cancer cells per milliliter |
| **PPM** | Parts per million: a fraction multiplied by one million | Identify which fraction is scaled; 1 PPM equals 0.0001% numerically |
| **Variant allele fraction (VAF)** | Fraction of evaluated alleles supporting a specified variant | Variant-specific and affected by copy number, clone composition and measurement |
| **Tumor fraction** | Estimated share of evaluated DNA attributable to tumor | Model and calibration matter; it is not automatically one variant's VAF |

A numerical percentage can be rescaled to PPM only when it describes the **same quantity**. A VAF of 0.01% equals 100 PPM of variant-supporting alleles. That arithmetic does not establish a tumor fraction of 100 PPM. [Copy number and zygosity](/wiki/education/concepts/biology-basics/genetics/allele-and-zygosity) can change the relationship, and some tumor-fraction estimates combine several features.

Concentration and fraction can also move differently. More background cell-free DNA can dilute a fraction without a matching decrease in tumor-associated molecules per plasma volume. Differences in extraction, recovery and calibration further limit conversions between assays. You cannot convert MTM/mL to PPM from the printed result alone.

A qualifying detection call and a reliable numerical amount are distinct. The [limit of detection and limit of quantitation](/wiki/education/concepts/evidence-and-statistics/biomarkers/limits-of-detection-and-quantitation) have different validation criteria. A detected value below the reliable quantitative range may not support an exact fold change.

## Why it matters in cancer

Attach the assay version, time point and units before interpreting a trend. A falling number can motivate a question about molecular dynamics; it does not independently identify response, lesion location or a treatment benefit.

## How it is measured

| Assay-card item | Scope to keep attached |
|---|---|
| Measures / how | A stated molecular concentration, fraction or calibrated estimate |
| Input and cost | Finite evaluated plasma/DNA; collection volume is not identical to recovered input |
| Output / units | Exact units, target aggregation and positive/negative reporting rule |
| Thresholds | Detection probability at defined input; validated quantitation range |
| Failure modes | Low molecular counts, dilution/background changes, poor recovery or incompatible calibration |
| Cannot tell | Universal tumor-load scale, cell count or cross-assay fold change |
| Validation | Reference material, bias/precision, specimen matrix and intended clinical use |

## Common confusions

- A printed zero or “not detected” is not an all-body count of zero cancer cells.
- More decimal places do not establish reliable quantitation.
- Pooled values below another assay's nominal threshold do not establish its miss rate.

## Try it

A fictional report lists 0.01% VAF for Variant R. A second lists 0.2 MTM/mL. Can you call the first result “100 PPM tumor fraction” and compare 100 with 0.2?

**Answer:** No. The first is 100 PPM of evaluated variant-supporting alleles, not automatically tumor fraction. The second is a concentration. Their numbers cannot be compared or converted without the methods and calibration.

## Explain it back

Which denominator belongs to a fraction, and which volume belongs to a concentration?

## Takeaway

Read the measured quantity before reading its number.

## Related concepts

- [variant allele fraction and cancer cell fraction](/wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction)
- [limits of detection and quantitation](/wiki/education/concepts/evidence-and-statistics/biomarkers/limits-of-detection-and-quantitation)

## Sources and scope

Source check: October 10, 2026. Fictional arithmetic; expert and learner review remain pending.

- [Magbanua et al. 2021](https://doi.org/10.1038/s41523-021-00239-3) — MTM/mL in a defined breast-cancer study and assay.
- [FDA 2024 circulating tumor DNA (ctDNA) drug-development guidance](https://www.fda.gov/media/183874/download) — input, reporting and analytical-validation considerations.
- [CLSI harmonized terminology](https://htd.clsi.org/listterms.asp?button=Submit) — detection and quantitation require stated conditions and performance.

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
