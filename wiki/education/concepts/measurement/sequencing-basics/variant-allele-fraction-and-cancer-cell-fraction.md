---
title: "Variant allele fraction vs cancer cell fraction"
type: "concept"
domain: "measurement/sequencing-basics"
summary: "Variant allele fraction measures variant-supporting sequence observations, while cancer cell fraction estimates how many cancer cells carry the change."
glossary_anchor: "variant-allele-fraction-and-cancer-cell-fraction"
aliases: ["VAF", "CCF", "vaf", "ccf", "variant allele fraction", "variant allele frequency", "cancer cell fraction"]
level: "intermediate"
sensitive: false
tags: ["education", "measurement"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/mutation-types]]", "[[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]"]
used_by: ["[[wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board]]","[[wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding]]","[[wiki/education/guides/from-variant-to-drug/index]]","[[wiki/education/molecular-profiling/01-dna-the-blueprint]]","[[wiki/education/molecular-profiling/06-ctdna-and-mrd]]","[[wiki/education/multi-omics-foundations/04-copies-alleles-and-clones]]","[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"]
---

# Variant allele fraction vs cancer cell fraction

## In one sentence

Variant allele fraction measures variant-supporting sequence observations, while cancer cell fraction estimates how many cancer cells carry the change.

## The intuition

A jar contains red and blue beads, with different numbers of beads contributed by each cell. Counting red beads does not directly count red-bead-owning cells. DNA sequencing counts sequence observations, while cancer-cell fractions are inferred from a mixture model. The bead picture ignores mapping and sampling errors, which real analysis must also consider.

## How it works

**Variant allele fraction (VAF)** is the proportion of usable reads, or assay-defined molecules, at a location supporting the alternate sequence. The denominator must stay attached: 25 alternate reads among 100 usable reads is a VAF of 25%.

**Cancer cell fraction (CCF)** estimates the fraction of cancer cells carrying the change. To infer it, a model considers **purity**, the cancer-cell contribution to the sample, **copy number**, the copies of the local region, and **multiplicity**, how many copies in a carrier cancer cell contain the variant.

Normal cells dilute a tumor-specific variant. Copy gains or losses can shift its VAF even when its distribution across cancer cells stays the same. Uneven sampling and uncertainty in copy-state models add more ambiguity. A precise-looking CCF estimate can therefore have a wide plausible range.

## Worked example

These are invented, idealized mixtures with diploid normal cells and unbiased sequencing.

| Mixture | Variant copies | Total local copies | Expected VAF |
|---|---|---|---|
| 50 cancer cells plus 50 normal cells; every cell has two local copies | One mutated copy in each cancer cell: 50 | 200 | 25% |
| Same cells; cancer cells retain only the mutated copy | 50 | 50 cancer copies plus 100 normal copies: 150 | About 33% |

In both rows every cancer cell carries the mutation, so CCF is 100% under the assumptions. The read fraction changes because the denominator changed.

For a simple uniform-copy mixture, expected VAF is `p × f × m / [p × C + (1 − p) × 2]`. Here `p` is cell purity, `f` is CCF, `m` is mutated copies per carrier cell and `C` is tumor local copy number. Subclonal copy changes require a richer model.

## Why it matters in cancer

Clonality can matter for target coverage and tumor evolution. But a VAF cannot be relabeled as a cell percentage. It also cannot alone distinguish germline origin from somatic origin: normal-sample evidence and the biological context matter.

## Common confusions

- A 25% VAF does not mean 25% of cancer cells carry the variant.
- A higher VAF after treatment does not by itself prove a clone expanded.
- **Phasing** assigns changes to chromosome copies; it does not estimate CCF.
- A clonal estimate applies to the sampled population and model, not every unseen cancer cell.

## How it is measured

VAF comes from sequence support under quality filters. CCF is modeled using sequence and copy evidence. Reports should retain usable depth, purity definition, local copy state, alternative fits and uncertainty. A software PASS flag is not independent clinical confirmation.

## Related concepts

- [[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity|Clones and sampling]]
- [[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic|Origin of a change]]

## Sources and scope

Source check: October 9, 2026. The arithmetic is an illustrative mixture model, not a patient result. Expert and learner review remain pending.

- [Carter et al., ABSOLUTE primary method](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383288/).
- [Roth et al., PyClone primary mixture method](https://www.nature.com/articles/nmeth.2883).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read a neoantigen design board](/wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board)
- [Authenticate and attribute the finding](/wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding)
- [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index)
- [Read a DNA assay as a coverage-and-confidence claim](/wiki/education/molecular-profiling/01-dna-the-blueprint)
- [Read blood measurements as a time series](/wiki/education/molecular-profiling/06-ctdna-and-mrd)
- [Separate DNA copies from cancer-cell fractions](/wiki/education/multi-omics-foundations/04-copies-alleles-and-clones)
- [Understand multi-omics, one question at a time](/wiki/education/reading-a-tumor/omics-and-multi-omics)
<!-- END GENERATED USED IN -->
