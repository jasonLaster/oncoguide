---
title: "T-cell receptor sequencing"
type: "concept"
domain: "measurement/immune-monitoring"
summary: "T-cell receptor sequencing identifies sampled receptor sequences and their measured abundances, allowing immune populations to be compared across samples."
glossary_anchor: "tcr-seq"
aliases: ["TCR-seq","TCR sequencing","scTCR-seq"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/immunology/t-cells/t-cell-receptor]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-repertoire]]"]
used_by: ["[[wiki/education/designing-a-vaccine/03-immunopeptidomics]]","[[wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/local-treatment-modalities/05-tissue-and-sample-budget]]","[[wiki/education/molecular-profiling/tcr-and-tcr-sequencing]]","[[wiki/education/oncology-101/3-t-cell-states]]","[[wiki/education/reading-a-tumor/immune-hot-vs-cold]]","[[wiki/education/reading-a-tumor/measuring-t-cell-engagement]]","[[wiki/education/targeted-therapy-modalities/03-overlap-and-sequencing]]"]
sensitive: false
tags: ["education", "measurement"]
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# T-cell receptor sequencing

## In one sentence

T-cell receptor sequencing identifies sampled receptor sequences and their measured abundances, allowing immune populations to be compared across samples.

## The intuition

Sequencing reads labels on sampled cells. It can tell you that a label became more common or appeared in two places. The label is not a photograph of the cell attacking cancer. Target identity, cell state and useful activity remain separate questions.

## How it works

Many assays read variable regions of a [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor), especially the **complementarity-determining region 3 (CDR3)**. An analysis groups sequences into clonotypes using stated rules. Rules may use nucleotide or amino-acid sequence, gene segments, one chain or paired chains.

**Bulk TCR sequencing (TCR-seq)** profiles a mixed sample, often one receptor chain. **Single-cell TCR sequencing (scTCR-seq)** can pair alpha and beta chains from individual conventional T cells. Compatible methods can also measure gene expression in the same cells. Paired identity plus an expression program is more context; it is still not direct evidence of the receptor’s antigen. [Primary single-cell methods](https://www.nature.com/articles/nbt.2938) established this linkage.

Read counts are not always cell counts. Preparation, amplification and transcript abundance can change them. Some methods use molecular labels to reduce technical bias. Comparisons need the same definitions, adequate depth and suitable controls. A frequency increase can also occur because other populations contracted.

## Assay card

| Field | What to look for |
|---|---|
| Measures | Receptor identities and their measured representation in the sampled population |
| How | Extract nucleic acid; amplify or capture receptor regions; sequence; group and count under stated rules |
| Input and tissue cost | Blood cells or tissue-derived nucleic acid for bulk methods; compatible cell preparations for many single-cell methods; preparation consumes material |
| Output and units | Clonotype list, relative frequencies, diversity, clonality and overlap; count definitions depend on method |
| Thresholds | No universal clonality or expansion cutoff establishes tumor specificity |
| Failure modes | Poor material, shallow sampling, amplification bias, chain mismatch, inconsistent definitions or batch effects |
| What it cannot tell you | Every receptor’s target, physical location within a tissue section, tumor killing or clinical benefit |
| Validation tier | Depends on the exact assay and intended use; a research repertoire method is not automatically a treatment-selection test |

## Why it matters in cancer

The assay can nominate clones for follow-up and track changes during treatment. Blood offers repeat sampling. Tumor tissue provides a different compartment, but a tissue sequence alone does not reveal whether the cell sat inside a cancer-cell nest or outside it.

## Worked example

In a fictional series, clonotype A appears in blood and tumor and becomes more frequent after dosing. That establishes detected overlap and a frequency change. Antigen stimulation or receptor testing can ask what it recognizes. A tumor-cell assay asks whether natural presentation supports a response. These are additional experiments, not meanings hidden inside the sequence.

## Common confusions

- A single beta-chain match can group cells with different alpha chains.
- Amino-acid identity can arise from different underlying sequences.
- Clone expansion is not automatically vaccine-specific or cancer-specific.
- “Not detected” means absent from this assay’s result, not proven absent from the body.

## Try it

Invented numbers: clonotype A accounts for 10 of 10,000 sampled receptor units at baseline and 20 of 1,000 later. How did its measured frequency change? Did its body-wide cell count rise twentyfold?

**Answer:** Frequency rose from 0.1% to 2%, a twentyfold relative increase. Those denominators are sampled receptor units, not a census of cells in the body. Different sampling, contraction of other populations and method effects can alter frequency; absolute expansion needs compatible cell-number evidence.

## Explain it back

“Sequence overlap establishes ___; antigen specificity needs ___.” One answer: “detected overlap under the clonotype definition; a matching controlled recognition experiment.”

## Takeaway

**A receptor sequence is an identity to investigate, not a built-in tumor-target or killing result.**

## Related concepts

- [The T-cell repertoire](/wiki/education/concepts/immunology/t-cells/t-cell-repertoire)
- [T-cell states](/wiki/education/concepts/immunology/t-cells/t-cell-states)
- [Measuring T-cell engagement](/wiki/education/reading-a-tumor/measuring-t-cell-engagement)

## Sources and scope

Source check: October 10, 2026. Assay concepts, not procurement or patient-monitoring instructions. Expert and learner review remain pending.

- [Ruggiero et al., 2015: high-resolution human repertoire analysis](https://www.nature.com/articles/ncomms9081).
- [Han et al., 2014: linking receptor identity and functional phenotype in single cells](https://www.nature.com/articles/nbt.2938).
- [TIRTL-seq primary methods study](https://www.nature.com/articles/s41592-025-02907-9) — distinguishes bulk single-chain data from paired receptor data; not a universal validation claim.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Measure presentation, binding and response](/wiki/education/designing-a-vaccine/03-immunopeptidomics)
- [Dose a vaccine and measure its response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [Match each measurement to its claim](/wiki/education/local-treatment-modalities/05-tissue-and-sample-budget)
- [T-cell receptors and TCR sequencing](/wiki/education/molecular-profiling/tcr-and-tcr-sequencing)
- [Why a T-cell count does not tell the whole story](/wiki/education/oncology-101/3-t-cell-states)
- [Read an immune map without overreading it](/wiki/education/reading-a-tumor/immune-hot-vs-cold)
- [Measure each part of a T-cell response](/wiki/education/reading-a-tumor/measuring-t-cell-engagement)
- [Overlap and sequencing](/wiki/education/targeted-therapy-modalities/03-overlap-and-sequencing)
<!-- END GENERATED USED IN -->
