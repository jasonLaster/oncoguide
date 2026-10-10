---
title: "Separate DNA copies from cancer-cell fractions"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 5
minutes: 10
objectives: ["Distinguish sequence versions, copy number and loss of an inherited version.", "Explain a variant read fraction using purity and local copy state."]
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic]]", "[[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Separate DNA copies from cancer-cell fractions

**Which sequence version, how many copies, and how many cancer cells? Keep those three questions separate.**

**Before you start:** [[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic|Germline versus somatic]] distinguishes variant origin. [[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction|Variant allele fraction (VAF) versus cancer cell fraction (CCF)]] supplies the mixture model. [[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity|Tumor heterogeneity]] explains branches within a cancer.

## Where this step sits

This is step 5 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. When a report says “one copy lost,” it describes a physical count. When it says “function lost,” it describes a biological effect. The two can connect, but the connection must be established.

## First name the sequence versions

[Alleles and zygosity](/wiki/education/concepts/biology-basics/genetics/allele-and-zygosity) describe sequence versions, which must be interpreted alongside the number of copies in the measured population.

A **haplotype** is a group of nearby variants carried together on a chromosome. **Phasing** assigns variants to chromosome copies. It can help answer whether two changes lie on the same side. It is different from estimating the fraction of cancer cells carrying a change.

## Then count the local copies

**Copy number** describes how many copies of a DNA region exist. **Allele-specific copy number** estimates contributions from the two parental sides. **Loss of heterozygosity (LOH)** means one distinguishable inherited version has been lost from the relevant population. Total copies can fall or remain the same.

| Idealized local state | Copies from parental sides | What it says |
|---|---|---|
| Ordinary diploid | 1 + 1 | Both sides represented |
| Deletion with LOH | 1 + 0 | One side lost |
| Copy-neutral LOH | 2 + 0 | Two copies remain, from one side |
| Gain with both sides retained | 2 + 1 | An extra copy, both sides still present |

Letters used for parental sides do not identify good and bad copies. LOH alone does not say the retained gene is disabled. **Biallelic inactivation** asks whether both functional copies are disabled in the relevant cells. A damaging variant on the retained side plus loss of the other can support that mechanism, provided the phase and cell population fit.

An **amplicon** is an amplified segment that can contain several genes. More copies need not make every gene more active or identify the gene driving the cancer.

## Account for the mixture

**Purity** describes the cancer-cell contribution under a stated definition. A model's cell purity and a directly measured DNA fraction need not be the same quantity. **Ploidy** describes genome copy content; a tumor report often gives an average across the genome. Whole-genome doubling can be followed by losses and gains, so a later genome is not a neat four-copy book.

Purity and ploidy are estimated together in many analyses. More than one plausible solution can explain the observations. Preserve the alternatives rather than turning one selected fit into a perfect cell count.

## A worked example: two different read fractions

Use the idealized VAF/CCF example from the concept page. A sample is half cancer cells. Every cancer cell has one tumor-specific mutated copy, while normal cells have none.

With two local copies in every cell, expected VAF is 25%. If each cancer cell loses its other local copy, expected VAF becomes about 33%. Every cancer cell still carries the change in both scenarios. The denominator changed; the clone did not need to expand.

Real samples add uneven sequencing, subclonal copy changes and uncertainty in purity. The example is a mental check, not a calculator that resolves every tumor.

## What can go wrong at this step

- Calling a VAF a cancer-cell percentage.
- Calling one lost copy “no working copies.”
- Equating a nine-copy gain with nine times the protein.
- Treating phasing, clonality and copy number as synonyms.

## Try it

A region has copy-neutral LOH, and no disabling change is established on the retained side. Can you call the gene fully inactivated?

**Answer:** No. The inherited-version loss is established under the model. Sequence and functional evidence on the retained copies address inactivation.

## Explain it back

“The report tells me ______ copies remain. To know whether the gene works, I need ______. To know how many cancer cells carry the variant, I need ______.”

One answer: “the local copy count; consequence and functional evidence; a purity- and copy-aware CCF model.”

## Takeaway

**Copy loss, gene-function loss and cancer-cell fraction are different claims.**

**Next:** [[wiki/education/multi-omics-foundations/05-splicing-and-dna-repair|Follow a splice change toward repair function]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [NHGRI allele definition](https://www.genome.gov/genetics-glossary/Allele).
- [NHGRI loss of heterozygosity](https://www.genome.gov/genetics-glossary/Loss-of-Heterozygosity-LOH).
- [Carter et al., ABSOLUTE primary method](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383288/).
