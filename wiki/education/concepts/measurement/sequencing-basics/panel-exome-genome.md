---
title: "Panel, exome and genome sequencing: choose the coverage"
type: "concept"
domain: "measurement/sequencing-basics"
summary: "Panel, exome and genome sequencing examine progressively broader sets of DNA regions, with assay-specific depth and detection limits."
glossary_anchor: "panel-exome-genome"
aliases: ["WES", "WGS", "whole-exome sequencing", "whole-genome sequencing", "targeted panel", "panel exome genome"]
level: "foundation"
sensitive: false
tags: ["education", "measurement"]
updated: "2026-10-12"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/mutation-types]]"]
used_by: ["[[wiki/education/comparisons/index]]","[[wiki/education/guides/personalized-cancer-vaccine/02-reading-tumor-and-normal-data]]","[[wiki/education/molecular-profiling/01-dna-the-blueprint]]","[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"]
---

# Panel, exome and genome sequencing: choose the coverage

## In one sentence

Panel, exome and genome sequencing examine progressively broader sets of DNA regions, with assay-specific depth and detection limits.

## The intuition

You can proofread selected pages, most recipe sections or an entire book. Broader reading covers more territory, but how closely you read still matters. Sequencing has the same two questions: **which regions were examined, and how well could this assay detect the change of interest?** Unlike a book, a genome contains repeated passages that can make observations difficult to place.

## How it works

<img src="./images/sequencing-territory-and-local-depth-v1-light.svg" alt="A toy assay marks a selected DNA territory and a region outside its design. A local zoom aligns four invented reads across position P and two across position Q, giving depths of 4× and 2× at those specific positions. A second targeted region R has no usable aligned reads despite being included in the design. The schematic complements the preserved panel/exome/genome territory illustration; it is not a category ranking, coverage threshold, variant-detection probability or clinical-utility claim." width="600" height="900" data-theme-pair />

*Count usable aligned reads at the position of interest; do not substitute the assay’s breadth or average depth. The toy 4×, 2× and 0× values are invented teaching values, not clinical thresholds. Broader territory guarantees neither uniform local sensitivity, all-variant detection nor clinical utility.*

[DNA (deoxyribonucleic acid)](/wiki/education/concepts/biology-basics/molecules/dna) sequencing measures the order of bases in prepared molecules. **Next-generation sequencing** usually reads many molecules in parallel. The library design selects the territory; preparation, measurement and analysis determine what evidence is usable.

| Design | Intended territory | What still needs checking |
|---|---|---|
| **Targeted panel** | Predefined genes or regions; some include selected introns or other targets | Exact coordinates and analyzed change classes, rather than gene count alone |
| **[Whole-exome sequencing (WES)](/about/Terminology#wes)** | Primarily exons, the segments retained in processed [ribonucleic acid (RNA)](/wiki/education/concepts/biology-basics/molecules/rna-and-mrna); nearby splice boundaries are often targeted | Capture design, untranslated-region coverage and reporting scope |
| **[Whole-genome sequencing (WGS)](/about/Terminology#wgs)** | Coding and noncoding regions broadly | Difficult repeats, uneven measurement and which analyses were actually performed |

Exons include untranslated sequence as well as protein-coding sequence. “Exome” therefore does not mean that every captured base codes for protein, or that every regulatory region and rearrangement breakpoint was examined. [NCI exon definition](https://www.cancer.gov/publications/dictionaries/genetics-dictionary/def/exon).

<img src="./images/panel-exome-genome-comparison-territory-v1-light.svg" alt="Three design tracks align to the same illustrative DNA interval. Gray boxes above identify exons among intervening sequence. The toy panel targets one exon and a selected non-exon region, exome sequencing targets primarily the exon boxes, and genome sequencing targets the broader interval. Blank positions are outside the toy design; hatched patches mark illustrative potential usable-evidence gaps, including a difficult repeat-like region on the genome track. Widths, coordinates and gaps are schematic, not an assay dataset, fixed category property, measured depth or performance ranking." width="780" height="1320" data-theme-pair />

*The same illustrative DNA interval underlies all three tracks. Fill marks intended targets; blank positions lie outside this toy design; hatching shows potential gaps in usable evidence. Locations and widths are not genomic coordinates, study results or fixed category properties. Broader territory is not guaranteed detection. [Sanghvi 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6456263/) examined reduced coverage in specified exome/genome workflows.*

[Depth and coverage breadth](/wiki/education/concepts/measurement/sequencing-basics/sequencing-depth-and-coverage) answer separate questions. At a fixed sequencing budget, covering more territory commonly spreads observations more thinly, but actual depth depends on the design and usable yield. A panel can be deep and a genome broad; either can leave an important position poorly measured.

Likewise, the territory label does not specify performance for small sequence changes, [copy-number changes](/wiki/education/concepts/measurement/sequencing-basics/copy-number-and-loh) or rearrangements. Each needs an appropriate analysis and validation. Conventional WGS does not automatically measure methylation; [long-read and methylation sequencing](/wiki/education/concepts/measurement/sequencing-basics/long-read-and-methylation-sequencing) describes that separate capability.

## Why it matters in cancer

A broad assay can discover changes outside a narrow panel. A focused assay can achieve deeper validated measurement of its intended targets. These strengths can coexist. Fit depends on the question, specimen and validated change classes, rather than a universal ranking of panels and genomes.

## Worked example

A fictional research genome assay reports no change at a difficult repeated region. A clinical panel was specifically validated to detect one alteration there. The genome result does not automatically supersede that focused test. Conversely, a panel that never examines a fusion breakpoint cannot exclude it simply by returning a negative report.

## Assay card

| Field | What to retain |
|---|---|
| Measures and method | Library targeting, sequencing, alignment and change-specific analysis across defined regions |
| Input and tissue cost | DNA from an accepted specimen; extraction and library preparation consume material. Input amount and fixed-tissue acceptance are assay-specific |
| Output and units | Read support, depth in ×, coverage breadth in %, and analyzed variants or copy segments within a named territory |
| Thresholds | Reportable regions, quality criteria and validated detection limits for each change class; no universal WES or WGS cutoff |
| Failure modes | Poor recovery, damaged DNA, uneven capture, ambiguous alignment and unsupported alteration classes |
| Limits and validation | Check the full workflow's intended specimen and use. Research discovery is not automatically a validated clinical or companion diagnostic test |

## Common confusions

- **More genes versus better detection:** a longer gene list does not guarantee reliable measurement of every change in those genes.
- **Whole versus complete:** broad intended territory does not establish perfect observation of every base.
- **DNA versus downstream layers:** DNA sequencing does not directly measure RNA expression, protein or function.

## Try it

A fictional panel is negative for a gene's substitutions, but its specification excludes the intron containing a proposed fusion breakpoint. Has it excluded that fusion?

**Answer:** No. Check whether another analyzed region could detect the fusion, and retain the panel's actual change-class scope. Its substitution result cannot settle an untested rearrangement question.

## Explain it back

“The assay's territory tells me ______; its validated performance tells me ______.”

One answer: “where it looks; what it can detect reliably there.”

## Takeaway

**Name both territory and validated detection capability before comparing sequencing assays.**

## Related concepts

- [Mutation types](/wiki/education/concepts/biology-basics/genetics/mutation-types): what kind of change needs detection?
- [Tumor–normal versus tumor-only sequencing](/wiki/education/concepts/measurement/sequencing-basics/tumor-normal-vs-tumor-only-sequencing): what does a normal comparison add?

## Sources and scope

Source check: October 10, 2026. Assay-category education; the examples are fictional. Expert and learner review remain pending. No laboratory or treatment recommendation is proposed.

- [NHGRI DNA-sequencing fact sheet: sequence measurement and broad assay scope](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Fact-Sheet).
- [NCI genetics dictionary: exon, including retained untranslated sequence](https://www.cancer.gov/publications/dictionaries/genetics-dictionary/def/exon).
- [AMP/CAP 2017: end-to-end oncology sequencing validation by specimen, region and change class](https://pmc.ncbi.nlm.nih.gov/articles/PMC6941185/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Compare related ideas](/wiki/education/comparisons/index)
- [Read tumor and normal data before choosing targets](/wiki/education/guides/personalized-cancer-vaccine/02-reading-tumor-and-normal-data)
- [Read a DNA assay as a coverage-and-confidence claim](/wiki/education/molecular-profiling/01-dna-the-blueprint)
- [What does multi-omics tell us about a tumor?](/wiki/education/reading-a-tumor/omics-and-multi-omics)
<!-- END GENERATED USED IN -->
