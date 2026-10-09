---
title: "Copies, alleles, and clones"
tags: [education, genomics, copy-number, LOH, clonality]
type: guide-lesson
sensitive: false
reviewed: pending
reviewed_by: ""
guide: multi-omics-foundations
step: 4
objectives: ["Interpret copies, alleles, and clones without treating an observation as validated clinical benefit."]
prerequisites: ["[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"]
---

# Copies, alleles, and clones

A tumor DNA result describes a mixture of genomes. To interpret it, separate **which sequence version exists**, **how many copies exist**, and **which cells carry it**.

## Sequence versions and parental copies

An **allele** is a sequence version at a genomic location. **Heterozygous** means two different versions are present; **homozygous** means the versions match. A **haplotype** is a set of nearby variants carried together on a chromosome. **Phasing** assigns variants to those chromosome copies. [NHGRI: allele](https://www.genome.gov/genetics-glossary/Allele), [haplotype](https://www.genome.gov/genetics-glossary/haplotype)

**Germline** variants can be inherited and occur broadly across the body's cells. **Somatic** variants are acquired in a cell lineage. **Matched normal** means a non-tumor comparison sample from the same person, used to help distinguish acquired tumor changes from their baseline DNA. A research matched-normal analysis and a clinical hereditary-risk test have different validation and reporting scopes.

## Copy number and LOH

<img src="/api/file?path=wiki%2Feducation%2Fmulti-omics-foundations%2Fimages%2Fcopy-number-and-loh-light.png" alt="Four cells illustrate two parental copies, deletion, copy-neutral loss and copy gain" data-theme-pair>

*Copy number and loss of a parental version are different descriptions; neither measures gene function.*

<!-- Cartoon source: [generation prompt](/api/file?path=wiki%2Feducation%2Fimages%2Fprompts%2Fcopy-number-and-loh.txt) -->

<!-- Theme asset: [dark variant](/api/file?path=wiki%2Feducation%2Fmulti-omics-foundations%2Fimages%2Fcopy-number-and-loh-dark.png) -->

*Copies of one region, with A and B representing inherited versions. Losing B does not establish that A is nonfunctional.*

**Copy number** is the number of copies of a DNA region. **Allele-specific copy number** separates the contributions of the two parental chromosome copies. **LOH**, loss of heterozygosity, means the loss of one of the distinguishable inherited versions. It can arise through deletion or through replacement/duplication that preserves total copy number.

| Simplified state | Copies from the two parental sides | Meaning |
|---|---|---|
| Ordinary diploid region | 1 + 1 | Both sides represented |
| Deletion with LOH | 1 + 0 | One side lost |
| Copy-neutral LOH | 2 + 0 | Two copies remain, both from one side |
| Gain with both sides retained | 2 + 1 | Extra copy, without complete loss of either side |

**Biallelic inactivation** means both functional gene copies are disabled. A mutation plus deletion can support this if the mutation is on the retained copy in the same cancer-cell population. LOH alone does not establish that the retained gene is nonfunctional. [NHGRI: LOH](https://www.genome.gov/genetics-glossary/Loss-of-Heterozygosity-LOH), [Carter et al.: absolute copy-number analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383288/)

**Amplification** is an increase in gene/region copy number. An **amplicon** is an amplified DNA segment that may contain several neighboring genes. **Structural variants** rearrange larger DNA segments; **tandem duplication** repeats a segment next to itself. A **fusion** joins sequences from different genes, but a DNA rearrangement does not guarantee an expressed fusion RNA or protein.

## Purity and ploidy

**Purity** estimates how much of the tested material comes from cancer cells. Specify whether a number refers to cells, DNA, or a model estimate. **Ploidy** describes genome copy content; tumor analyses often report average copy number across the genome. **Whole-genome doubling** is a past duplication of the genome. Subsequent gains and losses can obscure that history. Purity and ploidy are fitted together, and more than one plausible fit may explain the data. [ABSOLUTE primary study](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383288/)

## VAF is different from CCF

**VAF**, variant allele fraction, is the proportion of usable reads at a site carrying the alternate base. **CCF**, cancer cell fraction, estimates the proportion of cancer cells carrying the alteration, accounting for purity and copy state. A **clone** shares acquired DNA changes; a **subclone** is a branch within that population. “Clonal” is always relative to the sampled tumor and the model.

**Hypothetical example:** A diploid sample is half cancer cells. Each cancer cell has one mutated copy; normal cells have none. Expected VAF is 25%, although every cancer cell carries the mutation. With a deletion leaving one mutated copy per cancer cell at the same 50% purity, expected VAF is about 33%: `0.5 / (0.5 × 1 + 0.5 × 2)`. In a simple uniform-copy model, `VAF = purity × CCF × mutated copies / (purity × tumor copy number + (1 − purity) × normal copy number)`. Subclonal copy changes, mapping bias, and uncertainty make real inference harder. [Primary tumor-mixture model](https://pmc.ncbi.nlm.nih.gov/articles/PMC4054893/).

## Explain it back

**“A 25% VAF means a quarter of the reads carry the variant. It does not mean only a quarter of the cancer cells carry it. We need purity, tumor copy number, and the number of mutated copies to estimate how many cancer cells carry it. Phasing answers a different question: which chromosome copy carries each variant.”**

**Check yourself:** Does “one copy left” mean “no working copy left”? **No.** The retained copy's function is the next question. Continue to [[wiki/education/multi-omics-foundations/05-splicing-and-dna-repair|splicing and DNA repair]].


## Try it

An assay reports a striking value. Which sample, measurement method and comparator do you need before interpreting it?

**Answer:** Identify the sampled cells, assay definition and reference group before moving from the number to a biological or treatment claim.


## Takeaway

**The meaning of a measurement depends on its sample, method and comparison.**


## Sources and scope

General measurement teaching; expert and learner review pending. Sources and definitions are linked beside the relevant methods above.
