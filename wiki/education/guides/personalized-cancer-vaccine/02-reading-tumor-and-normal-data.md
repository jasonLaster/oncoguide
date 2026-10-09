---
title: "Read tumor and normal data before choosing targets"
type: "guide-lesson"
sensitive: false
tags: ["education", "lesson"]
updated: "2026-10-08"
source_checked: "2026-10-08"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
minutes: 12
guide: "personalized-cancer-vaccine"
step: 2
objectives: ["Describe variant calling and matched-normal comparison.", "Keep read fraction, tumor coverage and presentation separate."]
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]", "[[wiki/education/concepts/immunology/antigen-presentation/neoantigen]]"]
---

# Read tumor and normal data before choosing targets

**A sequencing result becomes a candidate source only after its identity, tumor specificity and biological support are checked.** This is step two of the [vaccine guide](/wiki/education/guides/personalized-cancer-vaccine/index).

**Before you start:** [DNA, RNA and protein](/wiki/education/concepts/biology-basics/genetics/central-dogma) describe different layers. A [neoantigen](/wiki/education/concepts/immunology/antigen-presentation/neoantigen) arises from altered sequence but still needs processing and recognition evidence.

## Where this step sits

This step supplies the source list. [Human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) matching and target selection come afterward. A larger source list can include more real candidates and more uncertain calls.

## The intuition: compare before calling a difference

A laboratory reads many short pieces of sequence. **Variant calling** is the process of inferring an alteration from those observations. The program compares reads with a reference and evaluates support, quality and competing explanations. It does not observe a perfectly complete tumor genome directly.

Matched normal material helps distinguish inherited differences from tumor-associated changes. The normal specimen’s suitability and contamination still need review. Tumor-only analysis estimates some of these distinctions, but cannot always establish them confidently.

## What the measurements contribute

| Layer | Useful question | Limit to record |
|---|---|---|
| Tumor DNA | Is the sequence alteration supported? | Coverage, artifacts, tumor fraction and copy number |
| Matched normal DNA | Is the alteration absent from the appropriate normal comparison? | Sampling and detection limits |
| Tumor RNA | Is the altered transcript supported? | Mixed-cell composition, expression depth and processing |
| Protein or peptide evidence | Does a downstream product exist? | Method coverage, cell origin and detection limits |

A targeted panel reads selected regions. Whole-exome sequencing focuses largely on coding regions. Whole-genome sequencing covers a broader range of sequence. Greater breadth does not by itself guarantee adequate depth, accurate structural calls or a useful antigen.

## Allele fraction is not tumor coverage

Variant allele fraction is the proportion of reads at a locus supporting the variant. Normal-cell admixture, copy-number changes and the number of mutant copies affect it. It is not automatically the percentage of cancer cells carrying a target.

Use [copies, alleles and clones](/wiki/education/multi-omics-foundations/04-copies-alleles-and-clones) for a worked interpretation. A **truncal** alteration is shared broadly across a tumor’s evolutionary branches; a **subclonal** alteration occurs in a subset. One small biopsy may not establish either pattern across every site.

## Worked example: maintain an evidence ledger

These are invented candidates, not patient data or a scoring algorithm.

| Candidate | Evidence | Next unresolved question |
|---|---|---|
| A | Tumor DNA call, absent in adequately covered normal, mutant RNA observed | Processing and display |
| B | Tumor DNA call, normal coverage too low | Tumor specificity |
| C | RNA junction only, with weak read support | Reproducibility and artifact control |
| D | Strong DNA support, no RNA detection in a shallow assay | Whether non-detection is informative |

Candidate A has progressed further on the ledger. None has yet demonstrated [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) presentation or T-cell recognition. Candidate D should not be called definitively unexpressed without adequate sampling and sensitivity.

## What can go wrong at this step

Fixation artifacts, misaligned reads, contamination and uncertain junctions can create misleading candidates. Sampling can miss a real alteration. A reference transcript may also be the wrong transcript for translating the altered sequence. Preserve methods, versions, coverage and manual decisions so the candidate can be traced to its source.

## Try it

A variant appears in half the reads. Can it be called present in half the cancer cells?

**Answer:** No. Purity, copy number and mutant-copy multiplicity are needed. Read fraction and cancer-cell fraction are different quantities.

## Explain it back

“Matched normal addresses ___; RNA addresses ___; neither alone proves ___.” One answer: “tumor specificity; expression; surface presentation or useful recognition.”

## Takeaway

**Source quality, expression and tumor coverage are separate entries in a candidate’s evidence ledger.**

**Next:** [HLA matching and presentation](/wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation).

## Sources and scope

Source check: October 8, 2026; expert and learner review pending. This is a reading framework, not a laboratory calling protocol.

- [NHGRI DNA sequencing overview](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Fact-Sheet).
- [Primary neoantigen prediction and validation study](https://pubmed.ncbi.nlm.nih.gov/33038342/).
- [Copies, alleles and clones](/wiki/education/multi-omics-foundations/04-copies-alleles-and-clones) — sourced quantitative examples.
