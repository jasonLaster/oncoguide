---
title: "Read DNA: coverage, calls, copies and cell fractions"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 3
minutes: 14
objectives:
  - "Match a DNA question to the assay's tested regions and change classes."
  - "Judge how well a variant call is supported, and why a software PASS or caller agreement is not independent confirmation."
  - "Explain a variant read fraction using purity and local copy state."
prerequisites:
  - "[[wiki/education/concepts/biology-basics/genetics/mutation-types]]"
  - "[[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic]]"
  - "[[wiki/education/concepts/measurement/sequencing-basics/panel-exome-genome]]"
  - "[[wiki/education/concepts/measurement/sequencing-basics/copy-number-and-loh]]"
  - "[[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction]]"
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-11-08"
source_checked: "2026-11-08"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Read DNA: coverage, calls, copies and cell fractions

**A DNA result is a claim about sequence and copies in the material tested. Check what the assay could see and how well the call is supported, then count copies and cells, before asking what the change does.**

**Before you start:** [Mutation types](/wiki/education/concepts/biology-basics/genetics/mutation-types) names the edits. [Germline versus somatic](/wiki/education/concepts/biology-basics/genetics/germline-vs-somatic) names their origin. [Panel, exome and genome sequencing](/wiki/education/concepts/measurement/sequencing-basics/panel-exome-genome) names the territory examined. [Copy number and loss of heterozygosity (LOH)](/wiki/education/concepts/measurement/sequencing-basics/copy-number-and-loh) counts copies. [Variant allele fraction (VAF) versus cancer cell fraction (CCF)](/wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction) supplies the mixture model.

## Where this step sits

This is step 3 of [What does multi-omics tell us about a tumor?](/wiki/education/guides/what-multi-omics-tells-us/index) It is the guide's one DNA lesson. Optional lesson 4 practices the copy arithmetic in more depth.

## Match the question to the tested regions

Panels, exomes and genomes differ in which regions they examine, and scope is only one part of performance. For each finding, ask whether the exact region and change class were inside the assay's validated scope. A panel can detect a known hotspot deeply and reliably; a broader research assay can find a rearrangement the panel never examined. Neither automatically overrides the other. [Long-read and methylation sequencing](/wiki/education/concepts/measurement/sequencing-basics/long-read-and-methylation-sequencing) adds other capabilities; check which the workflow actually used.

| Field | What to record |
|---|---|
| Input | Tissue or blood, preparation and sampled region |
| Coverage | [Depth and breadth](/wiki/education/concepts/measurement/sequencing-basics/sequencing-depth-and-coverage), with usable evidence at the exact location |
| Change classes | Substitutions, small insertions or deletions, copy changes and rearrangements actually analyzed |
| Normal comparison | [Tumor–normal or tumor-only](/wiki/education/concepts/measurement/sequencing-basics/tumor-normal-vs-tumor-only-sequencing) design |
| Output | Exact reference, variant notation, read support and copy-model uncertainty |
| Validation | Research discovery or a clinical assay validated for the intended use |

An average depth can hide a poorly covered position. Before reading “not found,” check coverage at that position and the assay's validated detection limit.

## Audit the call, not just the gene name

[Variant calling](/wiki/education/concepts/measurement/sequencing-basics/variant-calling) is software proposing DNA changes from [sequencing reads](/wiki/education/concepts/measurement/sequencing-basics/sequencing-reads). **PASS** means the caller's own filters passed. **Consensus** means several callers agreed under a stated rule. Neither is independent confirmation, because callers share the same alignments and can share the same artifacts.

Support comes from different directions. Two reads from one original DNA fragment are one molecule, not two. Mapping errors, repetitive sequence and contamination need review. A matched normal sample helps separate inherited from acquired changes. Positive controls show that expected signals can be recovered; they do not make every proposed call correct.

Origin needs its own test. [Hereditary breast-cancer genes](/wiki/education/concepts/breast-cancer/hereditary-risk/hereditary-breast-cancer-genes) and [germline testing](/wiki/education/concepts/breast-cancer/hereditary-risk/germline-testing) explain why a familiar gene name on a tumor report does not establish inherited risk. Tumor-only inference cannot replace a germline test.

## Count the copies

[Alleles and zygosity](/wiki/education/concepts/biology-basics/genetics/allele-and-zygosity) describe sequence versions. **Phasing** assigns variants to the same or different chromosome copies; it is not the fraction of cancer cells carrying a change. Copy number counts how many copies of a region each cell holds, and from which parent.

| Idealized local state | Copies from each parent | What it says |
|---|---|---|
| Ordinary diploid | 1 + 1 | Both parental copies present |
| Deletion with LOH | 1 + 0 | One parental copy lost |
| Copy-neutral LOH | 2 + 0 | Two copies remain, both from one parent |
| Gain with both retained | 2 + 1 | An extra copy; both parents still present |

LOH alone does not say the remaining gene is disabled. **Biallelic inactivation** asks whether neither parental copy still supplies useful function. A damaging variant on the retained copy plus loss of the other can support it, if phase and cell population fit. An **amplicon** is an amplified segment that can carry several genes, so more copies need not make every gene more active. [Human leukocyte antigen LOH (HLA-LOH)](/wiki/education/concepts/measurement/sequencing-basics/hla-loh) applies the same copy question to immune-display genes.

## Account for the mixture

**[Purity](/wiki/education/concepts/measurement/sequencing-basics/tumor-purity-and-ploidy)** is the fraction of sampled cells that are malignant. **Ploidy** describes genome copy content, often averaged across the genome. Methods such as ABSOLUTE estimate purity and ploidy together from the data, and more than one solution can fit ([Carter et al., 2012](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383288/)). Keep the alternatives rather than treating one fit as a cell count. A pathologist's tissue-area [cellularity](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/tumor-bed-cellularity) estimate uses a different denominator.

## A worked finding: a TP53 two-hit pattern

*TP53* is one of only three genes mutated in more than 10% of all breast cancers ([TCGA, 2012](https://pubmed.ncbi.nlm.nih.gov/23000897/)), and in triple-negative cancers its mutations tend to be clonally dominant, carried by most cancer cells, though not in every tumor ([Shah et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22495314/)). Imagine a fictional report: a *TP53* missense variant at VAF 43%, estimated purity 60%, and deletion of the other *TP53* copy in the cancer cells. Normal cells have two unmutated copies.

Count the copies in 100 cells. Sixty cancer cells each contribute one mutated copy: 60. Forty normal cells contribute 80 unmutated copies. The expected VAF is 60 ÷ 140 ≈ 43%. The data fit “every cancer cell carries the variant and has lost its other copy,” a somatic two-hit pattern.

Now change one assumption. If purity were 86% and both copies were retained, a heterozygous variant in every cancer cell gives 86 ÷ 200 = 43% too. The same read fraction fits two different copy states. Only independent copy-number evidence chooses between them. A simpler version of this check: at 50% purity, a heterozygous variant reads 25% with both copies retained and about 33% after loss of the other copy, with no change in how many cancer cells carry it.

Even the two-hit fit says nothing yet about which RNA products were made or whether useful protein remains. [Variant-effect prediction](/wiki/education/concepts/measurement/computational-analysis/variant-effect-prediction) can prioritize the next question; the RNA and protein lessons measure it.

## Summary metrics keep their own scope

[Tumor mutational burden (TMB)](/wiki/education/concepts/measurement/sequencing-basics/tumor-mutational-burden) counts mutations over a defined sequenced territory. [Microsatellite instability (MSI)](/wiki/education/concepts/measurement/sequencing-basics/msi) examines repetitive loci. Neither is a general “immunotherapy will work” score; keep the method, threshold and intended setting attached.

## What can go wrong at this step

- Declaring a gene normal when its change class or region was not assayed.
- Counting PASS, caller agreement or duplicate reads as independent confirmation.
- Calling a VAF a cancer-cell percentage, or one lost copy “no working copies.”
- Equating a copy gain with that many times the protein.
- Replacing a clinical hereditary test with tumor-only inference.

## Try it

1. A tumor panel is negative, but it does not examine the intron containing a proposed rearrangement. Has it disproved the rearrangement?
2. A region shows copy-neutral LOH, and no damaging change is found on the retained copies. Is the gene fully inactivated?

**Answers:** (1) No. A negative result covers only the assay's actual scope; the untested question needs another validated method. (2) No. The loss of one parent's copy is established under the model. Inactivation needs sequence and functional evidence on the copies that remain.

## Explain it back

“Before I interpret a DNA change, I check ______. To know how many cancer cells carry it, I need ______. To know what it does, I need ______.”

One answer: “region, change class, read support and normal comparison; a purity- and copy-aware model; RNA, protein or functional evidence.”

## Takeaway

**A credible DNA call, counted with its copies and its mixture, is the start of a consequence test, not its conclusion.**

**Optional practice:** [Test a copy-aware clone model](/wiki/education/guides/what-multi-omics-tells-us/04-test-a-copy-aware-clone-model) solves backwards from a read fraction to an impossible result.

**Next:** [Read RNA: counts, preparation and splice products](/wiki/education/guides/what-multi-omics-tells-us/05-read-rna).

## Sources and scope

Source check: November 8, 2026. The TP53 report and its numbers are fictional teaching arithmetic; the gene frequencies are from the cited cohorts. Expert and learner review remain pending.

- [The Cancer Genome Atlas Network, 2012](https://pubmed.ncbi.nlm.nih.gov/23000897/): primary breast cancers; TP53, PIK3CA and GATA3 were the only genes mutated in more than 10%.
- [Shah et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22495314/): 104 primary triple-negative breast cancers; clonal frequencies of TP53, PIK3CA and PTEN mutations.
- [Carter et al., 2012: ABSOLUTE](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383288/): purity, ploidy and multiplicity inference.
- [Association for Molecular Pathology and College of American Pathologists (AMP/CAP), 2017: oncology sequencing validation](https://pmc.ncbi.nlm.nih.gov/articles/PMC6941185/).
- [NHGRI: loss of heterozygosity](https://www.genome.gov/genetics-glossary/Loss-of-Heterozygosity-LOH) and [HGVS variant nomenclature](https://hgvs-nomenclature.org/stable/).
