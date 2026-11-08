---
title: "NK-cell receptors"
type: concept
domain: immunology/innate-and-unconventional-cells
level: intermediate
sensitive: false
tags: [education, immunology]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: nk-cell-receptors
aliases: [NK-cell receptors, NK receptors, KIR, killer-cell immunoglobulin-like receptors, NKG2A, NKG2D, CD94/NKG2A, natural cytotoxicity receptors, CD16]
summary: "NK-cell receptors are the inherited, non-rearranged activating and inhibitory receptors, such as KIRs, NKG2A, NKG2D and CD16, whose combined signals decide whether a natural killer cell attacks a target."
prerequisites:
  - "[[wiki/education/concepts/immunology/innate-and-unconventional-cells/nk-cell-and-missing-self]]"
  - "[[wiki/education/concepts/immunology/antigen-presentation/hla]]"
used_by: ["[[wiki/education/guides/how-the-immune-system-fights-cancer/06-find-the-failed-step]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]"]
---

# NK-cell receptors

## In one sentence

NK-cell receptors are the inherited, non-rearranged activating and inhibitory receptors, such as KIRs, NKG2A, NKG2D and CD16, whose combined signals decide whether a natural killer cell attacks a target.

## The intuition

A natural killer cell carries a panel of switches. Some say "go": the target looks stressed, infected or coated with antibody. Others say "stop": the target shows normal self-markers. The cell adds up the switches it touches, and only a strong enough net "go" triggers killing. The analogy breaks because the panel is not fixed: it differs between people and between NK cells in one person, and the cell's history and surrounding signals change how hard each switch presses.

## How it works

Unlike a [T-cell receptor](/wiki/education/concepts/immunology/t-cells/t-cell-receptor), NK-cell receptors are encoded by genes that do not rearrange, so they recognize families of molecules rather than one peptide. **Inhibitory receptors** carry a motif that recruits phosphatases, enzymes that cancel activating signals. **Activating receptors** pair with adaptor proteins that start the killing signal. No single receptor dominates; the NK cell integrates them ([Lanier, 2008](https://pubmed.ncbi.nlm.nih.gov/18425106/); [Long et al., 2013](https://pubmed.ncbi.nlm.nih.gov/23516982/)).

| Receptor | Effect | Ligand on the target | Note |
|---|---|---|---|
| Inhibitory killer-cell immunoglobulin-like receptors (KIRs), such as KIR2DL1, KIR2DL2/3 and KIR3DL1 | Inhibitory | Groups of human leukocyte antigen ([HLA](/wiki/education/concepts/immunology/antigen-presentation/hla)) class I: mainly HLA-C, plus HLA-B and some HLA-A variants | KIR genes and HLA genes both vary between people, so the matched pairs differ ([Parham, 2005](https://pubmed.ncbi.nlm.nih.gov/15719024/)) |
| Activating KIRs (KIR2DS, KIR3DS) | Activating | Some HLA class I molecules; several ligands unknown | Present in some people, absent in others |
| CD94/NKG2A | Inhibitory | HLA-E carrying a peptide cut from other class I molecules ([Braud et al., 1998](https://pubmed.ncbi.nlm.nih.gov/9486650/)) | HLA-E reports whether the cell is making class I overall |
| CD94/NKG2C | Activating | HLA-E | Weaker binder; expanded in some people after cytomegalovirus infection |
| NKG2D | Activating | Stress-induced MICA, MICB and ULBP proteins ([Bauer et al., 1999](https://pubmed.ncbi.nlm.nih.gov/10426993/)) | Also found on CD8 T cells |
| Natural cytotoxicity receptors (NKp30, NKp44, NKp46) | Activating | Several cellular and viral ligands | Mostly specific to NK cells |
| DNAM-1 (CD226) versus TIGIT | Activating versus inhibitory | CD155 and CD112 | Two receptors competing for the same ligands |
| CD16 | Activating | The Fc tail of antibodies bound to a target | Drives [antibody-dependent cellular cytotoxicity (ADCC)](/wiki/education/concepts/immunology/antibodies-and-b-cells/adcc-adcp-cdc) |

**Education.** During development, NK cells whose inhibitory receptors meet matching self-HLA become more responsive ("licensed"). Cells that never meet a matching ligand are less responsive, though cytokines can boost them ([Juelke et al., 2009](https://pubmed.ncbi.nlm.nih.gov/19701893/)). So losing HLA on a target matters most to NK cells that were educated on that HLA.

## Why it matters in cancer

- **HLA loss lifts brakes.** Losing class I HLA, or [beta-2 microglobulin (B2M)](/wiki/education/concepts/immunology/antigen-presentation/b2m), removes KIR ligands and, through HLA-E, the NKG2A ligand. That is the basis of [missing-self recognition](/wiki/education/concepts/immunology/innate-and-unconventional-cells/nk-cell-and-missing-self). It still needs enough activating signal.
- **Tumors can blunt the "go" switch.** Tumors can shed soluble MIC proteins (MICA and MICB); in people with cancer, this lowered NKG2D on lymphocytes and impaired their activation ([Groh et al., 2002](https://pubmed.ncbi.nlm.nih.gov/12384702/)).
- **NKG2A blockade is unproven.** An antibody against NKG2A, monalizumab, released both NK and CD8 T cells in laboratory and mouse experiments ([André et al., 2018](https://pubmed.ncbi.nlm.nih.gov/30503213/)). In the phase III INTERLINK-1 trial, 216 people whose head and neck cancer had progressed after a checkpoint inhibitor and platinum chemotherapy were randomized 2:1 to cetuximab with monalizumab or with placebo. In that primary analysis set, median overall survival was 8.8 versus 8.6 months (hazard ratio 1.00), and the trial stopped for futility ([Fayette et al., 2025](https://pubmed.ncbi.nlm.nih.gov/40300079/)).
- **Antibody drugs use CD16.** An antibody's Fc region can recruit NK cells through CD16; Fc design changes this ([isotypes and Fc silencing](/wiki/education/concepts/immunology/antibodies-and-b-cells/isotypes-and-fc-silencing)).

## Common confusions

- **NKG2A and NKG2D are different switches.** NKG2A is inhibitory and reads HLA-E; NKG2D is activating and reads stress ligands.
- **NK receptors are not NK-only.** NKG2D and NKG2A also appear on some CD8 T cells, so blocking them affects both.
- **KIR matching is personal.** Whether a tumor's HLA loss frees an NK cell depends on the person's KIR and HLA genes.
- **Losing a brake does not press the accelerator.** A target needs activating ligands as well.

## How it is measured

[Flow cytometry](/wiki/education/concepts/measurement/immune-monitoring/flow-cytometry) measures receptor proteins on NK cells. KIR and HLA genotyping identify which pairs a person can form. Tumor staining or RNA can measure ligands such as HLA-E or MICA. A [cytotoxicity assay](/wiki/education/concepts/measurement/immune-monitoring/functional-cytotoxicity-assays) tests whether a given NK–target pair kills.

## Try it

A tumor has lost all class I HLA, including HLA-E, but makes no NKG2D ligands and no other activating ligands found in testing. Should NK cells kill it?

**Answer:** Not necessarily. KIR and NKG2A brakes are lifted, but killing also needs activating input. An antibody that engages CD16 could supply one; a controlled assay would test it.

## Explain it back

"An NK cell kills when ___ outweighs ___; HLA-E is read by ___."

**One possible answer:** "activating input from receptors such as NKG2D or CD16; inhibitory input from KIRs and NKG2A; CD94/NKG2A."

## Takeaway

**Read NK recognition as a balance: name the brakes lost and the accelerators present.**

## Related concepts

- [Natural killer cells and missing self](/wiki/education/concepts/immunology/innate-and-unconventional-cells/nk-cell-and-missing-self)
- [HLA (human leukocyte antigen)](/wiki/education/concepts/immunology/antigen-presentation/hla)
- [B2M (beta-2 microglobulin)](/wiki/education/concepts/immunology/antigen-presentation/b2m)
- [ADCC, ADCP and CDC](/wiki/education/concepts/immunology/antibodies-and-b-cells/adcc-adcp-cdc)
- [Chimeric antigen receptor (CAR) natural killer cells](/wiki/education/concepts/therapeutics/cell-therapies/car-nk)

## Sources and scope

Source-checked November 8, 2026, against PubMed abstracts. Laboratory, mouse and clinical findings are labeled; no treatment recommendation. Expert and learner review pending.

1. [Lanier, Nature Immunology 2008](https://pubmed.ncbi.nlm.nih.gov/18425106/) — review of NK activation and inhibition.
2. [Long and colleagues, Annual Review of Immunology 2013](https://pubmed.ncbi.nlm.nih.gov/23516982/) — integration of NK receptor signals.
3. [Parham, Nature Reviews Immunology 2005](https://pubmed.ncbi.nlm.nih.gov/15719024/) — KIRs and HLA class I.
4. [Braud and colleagues, Nature 1998](https://pubmed.ncbi.nlm.nih.gov/9486650/) — HLA-E binds CD94/NKG2A.
5. [Groh and colleagues, Nature 2002](https://pubmed.ncbi.nlm.nih.gov/12384702/) — soluble MIC ligands and NKG2D.
6. [André and colleagues, Cell 2018](https://pubmed.ncbi.nlm.nih.gov/30503213/) — NKG2A blockade in laboratory and mouse models.
7. [Fayette and colleagues, Clinical Cancer Research 2025](https://pubmed.ncbi.nlm.nih.gov/40300079/) — INTERLINK-1 phase III trial.

Also cited: [Bauer and colleagues, Science 1999](https://pubmed.ncbi.nlm.nih.gov/10426993/) and [Juelke and colleagues, European Journal of Immunology 2009](https://pubmed.ncbi.nlm.nih.gov/19701893/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Find the step an immune response can lose](/wiki/education/guides/how-the-immune-system-fights-cancer/06-find-the-failed-step)
- [Why the immune system doesn't just kill a tumor, and what checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
<!-- END GENERATED USED IN -->
