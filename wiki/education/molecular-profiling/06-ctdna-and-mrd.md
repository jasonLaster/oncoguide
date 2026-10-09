---
title: ctDNA and residual disease over time
type: guide-lesson
guide: multi-omics
step: 6
level: intermediate
updated: 2026-10-08
objectives:
  - Distinguish monitoring from blood-based mutation discovery.
  - Interpret not detected without equating it with zero disease.
prerequisites:
  - "[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"
reviewed: pending
reviewed_by: ""
---

# ctDNA and residual disease over time

**Blood testing adds repeated measurements, but each measurement has a sampling limit.** Circulating tumor DNA (ctDNA) is the tumor-derived portion of cell-free DNA (cfDNA) in blood. Most cfDNA comes from non-tumor cells.

**Before you start:** [[wiki/education/reading-a-tumor/omics-and-multi-omics|Review tissue snapshots and blood time series]]. Molecular residual disease (MRD) means a molecular signal remaining after treatment. Detection is different from proving which intervention improves outcomes.

## Three questions, three assay designs

| Question | Design | What it does not establish |
|---|---|---|
| Are this tumor's known variants detectable? | Tumor-informed: sequence tumor and matched normal, then track selected variants in plasma | Disease location or discovery of every new resistance variant |
| Is there a tumor signal without sequencing tissue first? | Tumor-naive MRD: use features such as DNA methylation | A complete mutation profile or identical performance across cancers |
| Which alterations are detectable in blood? | Plasma genomic profiling: examine cancer-related genes | The same sensitivity as an MRD assay at very low tumor fractions |

Guardant Reveal and Guardant360 answer different questions. Reveal is a tissue-free, methylation-led MRD assay; Guardant360 is plasma genomic profiling for treatment-related alterations. A blood-only MRD test is not automatically a resistance-mutation discovery panel. [Guardant assay descriptions](https://about.guardanthealth.com/precision-oncology/for-institutional-partners/).

Signatera and NeXT Personal are tumor-informed platforms. Variant count and performance depend on assay version and sample input. SCANDARE used **NeXT Personal**, not Signatera; one assay's study should not be relabeled as validation of another. [SCANDARE primary abstract](https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.552).

## Keep the units attached

| Unit | Meaning | Common mistake |
|---|---|---|
| Variant allele fraction (VAF) | Fraction of reads or molecules at a position carrying a variant | Treating it as cancer-cell fraction without purity and copy number |
| Parts per million (PPM) | An assay-defined estimated tumor fraction per million | Assuming all platforms estimate the same quantity |
| Mean tumor molecules per milliliter (MTM/mL) | Signatera's concentration-based quantity | Converting directly to PPM without a model and denominator |
| Tumor fraction | Estimated tumor-derived proportion of the assayed material | Assuming it equals one mutation's VAF |

There is no universal MTM/mL-to-PPM conversion. Record assay, units, collection date, detection call, and quantitation caveat together.

## Detection limit is not clinical sensitivity

An analytical limit asks how often a test detects a specified signal under laboratory conditions. Clinical sensitivity asks how often it detects disease in a defined population at a defined time. Excellent analytical performance cannot compensate for a tumor shedding little DNA.

The published legacy Signatera specification reports a limit down to **0.01% VAF**. This is a version-specific analytical claim, not a guarantee that every negative result excludes recurrence. Do not directly compare it with another assay's tumor-fraction PPM as if the denominators matched. [Natera specification](https://www.natera.com/wp-content/uploads/2022/05/SGN_MD_CRC_BRO_20220308_NAT-8020221_DWNLD.pdf).

## False signal and real evolution

Clonal hematopoiesis means blood-cell clones carry acquired mutations. Their DNA can resemble a tumor signal. Matched-normal or white-blood-cell sequencing helps distinguish origins; methods vary by platform.

A confirmed **tumor-derived BRCA reversion** is different: it can be a real resistance alteration, not false-positive noise. A fixed tumor-informed panel may miss it if the new variant is outside its tracked positions.

Two assays need not agree at their detection floors. Disagreement calls for inspecting input, timing, units, and methods. It does not prove the more sensitive result is false.

## Try it

A sample is “not detected.” What follows?

**Answer:** “No qualifying signal was detected in this sample under this assay's conditions.” It does not follow that there are no cancer cells anywhere in the body.

## Explain it back

A ctDNA result is a dated, assay-specific observation, not a location, a treatment order, or a personal survival percentage.

## Takeaway

**A ctDNA result is a dated, assay-specific observation, not a location, a treatment order, or a personal survival percentage.**

**Next:** [[wiki/education/molecular-profiling/07-from-data-to-care-plan|From a finding to a treatment question]]. For imaging discordance, see [[wiki/education/molecular-profiling/ctdna-ppm-and-mri]]. Clinical evidence lives in [[wiki/diagnostics/ctdna-mrd]]; results and scheduling live in [[wiki/care/ctdna-monitoring]].

## Sources and scope

Source check: October 8, 2026. Assay descriptions do not establish a survival benefit from MRD-directed intervention in early TNBC. [ESMO recommendations](https://doi.org/10.1016/j.annonc.2022.05.520) distinguish prognostic detection from demonstrated clinical utility.
