---
title: "CD4 T-cell subsets"
type: concept
domain: immunology/t-cells
level: intermediate
sensitive: false
tags: [education, immunology]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: cd4-t-cell-subsets
aliases: [CD4 subsets, helper T-cell subsets, Th1, Th2, Th17, Tfh, follicular helper T cells, T helper cells, CD4 help]
summary: "CD4 T-cell subsets are differentiation programs, such as Th1, Th2, Th17, follicular helper and regulatory T cells, defined by the transcription factors and signaling proteins that shape what a CD4 T cell does."
prerequisites:
  - "[[wiki/education/concepts/immunology/t-cells/cd4-vs-cd8]]"
  - "[[wiki/education/concepts/immunology/immune-regulation/cytokine-and-chemokine]]"
  - "[[wiki/education/concepts/immunology/t-cells/t-cell-priming-three-signals]]"
used_by: ["[[wiki/education/guides/how-the-immune-system-fights-cancer/05-t-cell-states]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]"]
---

# CD4 T-cell subsets

## In one sentence

CD4 T-cell subsets are differentiation programs, such as Th1, Th2, Th17, follicular helper and regulatory T cells, defined by the transcription factors and signaling proteins that shape what a CD4 T cell does.

## The intuition

CD4 T cells are coordinators. The same coordinator can be trained for different emergencies: one team calls in killers and activates macrophages, another organizes antibody production, another calls down the response. The training happens when the cell is first activated, and the local signals at that moment decide which program it learns. The analogy breaks because these programs are not permanent job titles: cells can shift, mix programs and behave differently in mice and people.

## How it works

A naive [CD4 T cell](/wiki/education/concepts/immunology/t-cells/cd4-vs-cd8) recognizes a peptide on [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) class II, usually on a dendritic cell. The [cytokines](/wiki/education/concepts/immunology/immune-regulation/cytokine-and-chemokine) present during that [priming](/wiki/education/concepts/immunology/t-cells/t-cell-priming-three-signals) switch on a "master" transcription factor, a protein that sets a whole gene program. Each program has signature outputs ([Zhu et al., 2010](https://pubmed.ncbi.nlm.nih.gov/20192806/)):

| Subset | Signals that steer it | Master transcription factor | Signature outputs | Usual job |
|---|---|---|---|---|
| T helper 1 (Th1) | Interleukin 12 (IL-12), interferon gamma (IFN-γ) | T-bet | IFN-γ, IL-2 | Fights viruses and bacteria inside cells; activates macrophages and helps CD8 T cells |
| T helper 2 (Th2) | IL-4 | GATA3 | IL-4, IL-5, IL-13 | Fights parasitic worms; drives allergy |
| T helper 17 (Th17) | Transforming growth factor beta (TGF-β) with IL-6; IL-23 sustains it | RORγt | IL-17, IL-22 | Fights bacteria and fungi at barrier surfaces |
| Follicular helper (Tfh) | IL-6, IL-21 | BCL6 | IL-21; the receptor CXCR5; in people, the chemokine CXCL13 | Helps B cells in germinal centers make high-quality antibodies |
| [Regulatory T cells (Tregs)](/wiki/education/concepts/immunology/t-cells/regulatory-t-cells) | TGF-β, IL-2 | FOXP3 | IL-10, TGF-β, cytotoxic T-lymphocyte antigen 4 (CTLA-4) | Restrains responses and protects tolerance |

The Th1/Th2 split was first described in mouse T-cell clones ([Mosmann et al., 1986](https://pubmed.ncbi.nlm.nih.gov/2419430/)). Human cells often express mixed programs, and cells can change program after activation.

**CD4 help for CD8 killing.** A CD4 cell that recognizes its peptide on a dendritic cell uses CD40 ligand to "license" that dendritic cell. The licensed cell raises costimulatory molecules and IL-12, which improves priming and memory of CD8 T cells that recognize class I peptides on the same cell ([Borst et al., 2018](https://pubmed.ncbi.nlm.nih.gov/30057419/)).

## Why it matters in cancer

- **CD4 cells are needed even when tumors lack class II.** In mouse tumors, spontaneous and immunotherapy-induced rejection needed both CD4 and CD8 T cells, and class II-presented [neoantigens](/wiki/education/concepts/immunology/antigen-presentation/neoantigen) were needed at the tumor site ([Alspach et al., 2019](https://pubmed.ncbi.nlm.nih.gov/31645760/)).
- **Vaccines often make more CD4 than CD8 responses.** In a phase I trial of a personal neoantigen vaccine in six people with melanoma, vaccine-induced CD4 T cells recognized 58 of the 97 neoantigens used across patients (60%) and CD8 T cells 15 (16%) ([Ott et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28678778/)).
- **Tfh cells mark organized immunity in breast cancer.** In untreated primary breast tumors, CXCL13-producing Tfh cells sat mainly in [tertiary lymphoid structures](/wiki/education/concepts/immunology/antibodies-and-b-cells/tertiary-lymphoid-structures), and an 8-gene Tfh signature predicted survival or response to preoperative chemotherapy ([Gu-Trantien et al., 2013](https://pubmed.ncbi.nlm.nih.gov/23778140/)). That is a prognostic association.
- **Some programs can help a tumor.** In a mouse breast cancer model, IL-4-producing CD4 T cells pushed macrophages toward a state that promoted invasion and lung metastasis ([DeNardo et al., 2009](https://pubmed.ncbi.nlm.nih.gov/19647220/)).
- **Tregs restrain antitumor responses.** See [regulatory T cells](/wiki/education/concepts/immunology/t-cells/regulatory-t-cells).

## Common confusions

- **CD4 does not mean "helper only".** Some CD4 cells kill class II-presenting targets directly; see [CD4 versus CD8](/wiki/education/concepts/immunology/t-cells/cd4-vs-cd8).
- **Th1 is not always good and Th2 is not always bad.** The effect depends on the tissue, timing and tumor.
- **A transcription factor stain is a clue, not a function.** FOXP3 alone does not prove suppression in human cells, and T-bet alone does not prove IFN-γ release.
- **A bulk gene signature is not a cell count.** A "Th1 signature" in mixed tumor RNA can come from several cell types.

## How it is measured

[Flow cytometry](/wiki/education/concepts/measurement/immune-monitoring/flow-cytometry) can stain transcription factors and, after stimulation, cytokines inside cells ([intracellular cytokine staining](/wiki/education/concepts/measurement/immune-monitoring/intracellular-cytokine-staining)). Single-cell RNA sequencing assigns programs by gene expression. Tissue staining for CXCL13 or FOXP3 adds location. Each method defines subsets by its own markers, so labels may not match across studies.

## Try it

A vaccine study reports strong IFN-γ release from CD4 T cells after stimulation with a vaccine peptide, but no CD8 response. Has the vaccine failed?

**Answer:** Not necessarily. Th1-like CD4 cells can license dendritic cells and help CD8 responses, and mouse data show CD4 cells are needed for rejection. The result shows a CD4 response under assay conditions; tumor recognition and benefit need separate evidence.

## Explain it back

"A CD4 subset is set by ___ during priming, and it is named for its ___."

**One possible answer:** "the cytokines present; master transcription factor and signature outputs."

## Takeaway

**CD4 subsets are programs learned at priming; ask which program, where, and with what measured function.**

## Related concepts

- [CD4 versus CD8 T cells](/wiki/education/concepts/immunology/t-cells/cd4-vs-cd8)
- [Regulatory T cells](/wiki/education/concepts/immunology/t-cells/regulatory-t-cells)
- [T-cell states](/wiki/education/concepts/immunology/t-cells/t-cell-states)
- [B cells and plasma cells](/wiki/education/concepts/immunology/antibodies-and-b-cells/b-cells-and-plasma-cells)
- [Macrophage states](/wiki/education/concepts/immunology/innate-and-unconventional-cells/macrophage-states)

## Sources and scope

Source-checked November 8, 2026, against PubMed abstracts. Mouse and human findings are labeled; no treatment recommendation. Expert and learner review pending.

1. [Zhu, Yamane and Paul, Annual Review of Immunology 2010](https://pubmed.ncbi.nlm.nih.gov/20192806/) — review of CD4 effector differentiation, transcription factors and cytokines.
2. [Borst and colleagues, Nature Reviews Immunology 2018](https://pubmed.ncbi.nlm.nih.gov/30057419/) — review of CD4 help in cancer immunology.
3. [Alspach and colleagues, Nature 2019](https://pubmed.ncbi.nlm.nih.gov/31645760/) — class II neoantigens and CD4 cells in mouse tumor rejection.
4. [Ott and colleagues, Nature 2017](https://pubmed.ncbi.nlm.nih.gov/28678778/) — personal neoantigen vaccine in melanoma.
5. [Gu-Trantien and colleagues, Journal of Clinical Investigation 2013](https://pubmed.ncbi.nlm.nih.gov/23778140/) — Tfh cells in breast cancer.
6. [DeNardo and colleagues, Cancer Cell 2009](https://pubmed.ncbi.nlm.nih.gov/19647220/) — IL-4-producing CD4 cells and metastasis in a mouse breast cancer model.

Also cited: [Mosmann and colleagues, Journal of Immunology 1986](https://pubmed.ncbi.nlm.nih.gov/2419430/), the first Th1/Th2 description.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Why a T-cell count does not tell the whole story](/wiki/education/guides/how-the-immune-system-fights-cancer/05-t-cell-states)
- [Why the immune system doesn't just kill a tumor, and what checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
<!-- END GENERATED USED IN -->
