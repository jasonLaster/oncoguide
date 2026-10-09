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
used_by: ["[[wiki/education/index]]"]
updated: 2026-10-08
source_checked: 2026-10-08
review_status: "Expert and learner review pending"
---

# ctDNA (circulating tumor DNA) units and detection limits

## In one sentence

A circulating tumor DNA number is meaningful only with the assay’s measured quantity, units and detection criteria.

## The intuition

Two rulers can show similar numbers while measuring different things. A concentration counts molecules per volume. A fraction describes a part of a total. A categorical “not detected” follows an assay rule. These cannot be collapsed into a single universal tumor-load scale.

## How it works

MTM/mL means mean tumor molecules per milliliter under the reporting assay’s method. PPM means parts per million; 1 PPM is 0.0001% as a numerical fraction. The biological quantity scaled to PPM may be an estimated tumor fraction, rather than the fraction of molecules carrying one variant.

Variant allele fraction (VAF) is the fraction of evaluated alleles supporting a variant. Tumor fraction estimates how much DNA comes from tumor. Purity, copy number, mutated-copy count and clone composition affect the relationship. A single-variant VAF should not be directly equated with an assay’s calibrated tumor-fraction PPM result.

Limit of detection (LOD) describes detection under specified inputs and performance criteria; LOD95 indicates a 95% detection probability under those conditions. Limit of quantitation (LOQ) concerns reliable numerical measurement. A detected value can be below a reliable quantitation range. An assay can report no detection even though tumor exists below its sampled sensitivity.

Plasma volume, molecule recovery, background cfDNA (cell-free DNA), shedding and tracked targets influence the result. Analytical sensitivity in validation samples differs from clinical sensitivity for recurrence in a particular population and draw schedule. More tracked targets can improve opportunities to detect signal, but do not guarantee a complete clinical result.

## Why it matters in cancer

It prevents different blood-assay quantities from being combined into a misleading universal tumor-load scale.

## Worked example

Legacy Signatera specifications cite 0.01% VAF. NeXT Personal uses an assay-specific PPM tumor-fraction estimate. The numeric scaling is easy; equating these as the same biological quantity is not. A direct comparison needs compatible versions, inputs and definitions.

## Common confusions

- Zero or “not detected” does not mean zero cancer cells in the body.
- LOD and LOQ answer different questions.
- A pooled fraction below another nominal threshold is not a head-to-head miss rate.

## Related concepts

[[wiki/education/multi-omics-foundations/04-copies-alleles-and-clones|VAF and copy number]] and [[wiki/diagnostics/ctdna-mrd|clinical evidence]].

## Sources and scope

General teaching, source-checked October 8, 2026. The examples are hypothetical unless a study is explicitly named. Expert and learner review remain pending.

- [Legacy Signatera analytical specification](https://www.natera.com/wp-content/uploads/2022/05/SGN_MD_CRC_BRO_20220308_NAT-8020221_DWNLD.pdf).
- [[wiki/education/molecular-profiling/06-ctdna-and-mrd|Assay comparison with sources]].

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Learn the biology and evidence](/wiki/education/index)
<!-- END GENERATED USED IN -->
