---
title: "T-cell exhaustion"
type: "concept"
domain: "immunology/t-cells"
summary: "T-cell exhaustion is a distinct differentiation program that T cells enter under persistent antigen stimulation, marked by several inhibitory receptors, graded loss of effector function and a stable TOX-driven gene and chromatin pattern."
glossary_anchor: "t-cell-exhaustion"
aliases: ["exhaustion", "T-cell exhaustion", "exhausted T cells", "Tex", "Tpex", "progenitor exhausted T cells", "terminally exhausted T cells"]
level: "intermediate"
prerequisites:
  - "[[wiki/education/concepts/immunology/t-cells/t-cell-states]]"
  - "[[wiki/education/concepts/immunology/immune-regulation/immune-checkpoint]]"
used_by: ["[[wiki/education/guides/how-the-immune-system-fights-cancer/05-t-cell-states]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]"]
sensitive: false
tags: ["education", "immunology"]
updated: 2026-11-07
source_checked: 2026-11-07
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# T-cell exhaustion

## In one sentence

T-cell exhaustion is a distinct differentiation program that T cells enter under persistent antigen stimulation, marked by several inhibitory receptors, graded loss of effector function and a stable TOX-driven gene and chromatin pattern.

## The intuition

Think of a firefighter called to the same fire every hour for months. Over time they pace themselves: they still turn up, but they hold back, and their habits harden. Exhaustion is that kind of adaptation, not a cell that is simply tired after one shift. The analogy breaks because the cell's restraint is written into its gene-control machinery, and some subsets keep dividing and supplying new cells.

## How it works

1. **Persistent antigen starts it.** In chronic viral infection and in cancer, [T cells](/wiki/education/concepts/immunology/t-cells/t-cell) keep meeting their target without the infection or tumor clearing. Exhausted T cells then lose robust effector functions, display several inhibitory receptors at once and switch on an altered gene program ([Wherry and Kurachi, 2015](https://pubmed.ncbi.nlm.nih.gov/26205583/)).
2. **TOX commits the cell.** The transcription factor TOX is induced by repeated signaling. In mice, exhausted cells did not form without TOX, while effector and memory cells formed normally ([Khan et al., 2019](https://pubmed.ncbi.nlm.nih.gov/31207603/)).
3. **The program has subsets.** **Progenitor exhausted T cells (Tpex)** express T-cell factor 1 (TCF1) and programmed cell death protein 1 (PD-1), keep dividing and give rise to **terminally exhausted** cells, which are commonly identified by TIM-3 or CD39. In chronic viral infection in mice, the progenitor cells supplied the burst of new cells after PD-1 blockade ([Im et al., 2016](https://pubmed.ncbi.nlm.nih.gov/27501248/)). In mouse tumors, terminally exhausted cells controlled tumors less well and did not respond to anti-PD-1; in people with melanoma, a higher share of progenitor exhausted cells went with longer responses to checkpoint blockade ([Miller et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30778252/)).
4. **The chromatin pattern is sticky.** In mice, blocking programmed death-ligand 1 (PD-L1) revived exhausted cells and re-engaged effector genes. But their chromatin barely changed, and they became exhausted again when antigen stayed high ([Pauken et al., 2016](https://pubmed.ncbi.nlm.nih.gov/27789795/)).

| Marker or feature | Usually found on | Caution |
|---|---|---|
| PD-1 | Recently activated and exhausted cells | Alone it does not mean exhaustion |
| TCF1 (gene *TCF7*) | Tpex, naive and memory cells | Alone it does not assign Tpex identity |
| TIM-3, CD39 | Terminally exhausted cells | Also seen on some activated tumor-reactive cells |
| TOX | Exhausted cells | Measured by intracellular staining or RNA, not routine pathology |
| CD103 with CD39 | Tissue-resident memory-like CD8 cells in tumors | A residency program that overlaps with exhaustion markers |

## Why it matters in cancer

- **Checkpoint inhibitors act on this program.** [Immune-checkpoint inhibitors](/wiki/education/concepts/therapeutics/immunotherapy/immune-checkpoint-inhibitor) such as pembrolizumab block PD-1. In mouse models, the cells that expand after blockade come mostly from Tpex.
- **New arrivals may matter as much.** In paired human skin-cancer biopsies before and after anti-PD-1, many expanded clones were new to the tumor ([Yost et al., 2019](https://pubmed.ncbi.nlm.nih.gov/31359002/)). Revival of resident cells and replacement by new clones can both contribute.
- **Breast cancer has a tissue-resident subset.** In single-cell profiling of breast cancers, tumors rich in tumor-infiltrating lymphocytes contained CD8 tissue-resident memory cells with high checkpoint and effector proteins. A gene signature from these cells was associated with better survival in early triple-negative breast cancer ([Savas et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29942092/)).

## Common confusions

- **Exhaustion vs anergy.** Anergy follows priming without proper costimulation and is mainly a block in interleukin-2 production and division; see [anergy versus exhaustion](/wiki/education/concepts/immunology/t-cells/anergy-vs-exhaustion).
- **Exhausted vs useless.** In mouse tumors, progenitor exhausted cells kept several functions, persisted and controlled tumor growth better than terminal cells ([Miller et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30778252/)).
- **Exhaustion vs "dysfunction".** "Dysfunction" is the umbrella word for any T cell failing to control a tumor; exhaustion is one specific program under it.
- **PD-1-positive vs exhausted.** Activation also raises PD-1.

## How it is measured

[Flow cytometry](/wiki/education/concepts/measurement/immune-monitoring/flow-cytometry) panels combine PD-1, TIM-3, TCF1 and TOX. Single-cell RNA sequencing with [T-cell receptor sequencing](/wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing) links a clone to its program, which is how clonal replacement was found. [Functional cytotoxicity assays](/wiki/education/concepts/measurement/immune-monitoring/functional-cytotoxicity-assays) test what the cells can still do.

## Try it

A tumor sample has many PD-1-positive, TCF1-positive CD8 T cells, and few TIM-3-positive ones. Are these cells exhausted, and will PD-1 blockade work?

**Answer:** The pattern fits a Tpex-rich population, but PD-1 and TCF1 together also fit recently activated or memory cells; TOX, receptor specificity and response history would help. Even a confirmed Tpex pool does not predict a clinical response by itself; the evidence linking Tpex to response comes mainly from mouse models and melanoma cohorts.

## Explain it back

"Exhaustion is a ___ program caused by ___; PD-1 blockade can ___ but does not ___." One answer: "differentiation; persistent antigen; revive effector function in some cells; erase the exhausted chromatin pattern."

## Takeaway

**Exhaustion is a stable, graded program, not tiredness; checkpoint blockade works with it rather than undoing it.**

## Related concepts

- [T-cell states](/wiki/education/concepts/immunology/t-cells/t-cell-states)
- [Anergy](/wiki/education/concepts/immunology/t-cells/anergy)
- [Immune checkpoint](/wiki/education/concepts/immunology/immune-regulation/immune-checkpoint)
- [Immune escape](/wiki/education/concepts/immunology/tumor-immunology/immune-escape)

## Sources and scope

Source-checked November 7, 2026, against PubMed abstracts. Most mechanism evidence is from mouse chronic-infection and tumor models; human evidence is from biopsies and single-cell cohorts. Expert and learner review pending.

- [Wherry and Kurachi, 2015: review of T-cell exhaustion](https://pubmed.ncbi.nlm.nih.gov/26205583/).
- [Khan et al., 2019: TOX programs exhaustion](https://pubmed.ncbi.nlm.nih.gov/31207603/).
- [Im et al., 2016: progenitor cells supply the burst after PD-1 blockade](https://pubmed.ncbi.nlm.nih.gov/27501248/).
- [Miller et al., 2019: exhausted subsets differ in tumor control](https://pubmed.ncbi.nlm.nih.gov/30778252/).
- [Pauken et al., 2016: epigenetic stability limits reinvigoration](https://pubmed.ncbi.nlm.nih.gov/27789795/).
- [Yost et al., 2019: clonal replacement after PD-1 blockade](https://pubmed.ncbi.nlm.nih.gov/31359002/).
- [Savas et al., 2018: tissue-resident memory CD8 cells in breast cancer](https://pubmed.ncbi.nlm.nih.gov/29942092/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Why a T-cell count does not tell the whole story](/wiki/education/guides/how-the-immune-system-fights-cancer/05-t-cell-states)
- [What checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change)
- [Why the immune system doesn't just kill a tumor, and what checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
<!-- END GENERATED USED IN -->
