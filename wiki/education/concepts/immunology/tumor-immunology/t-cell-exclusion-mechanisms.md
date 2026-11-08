---
title: "T-cell exclusion mechanisms"
type: concept
domain: immunology/tumor-immunology
level: intermediate
sensitive: false
tags: [education, immunology]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: t-cell-exclusion-mechanisms
aliases: [T-cell exclusion, immune exclusion, exclusion mechanisms, stromal restriction of T cells, T-cell trafficking barriers]
summary: "T-cell exclusion mechanisms are the chemokine, blood-vessel, stromal and myeloid-cell barriers that keep T cells out of a tumor or hold them in the surrounding stroma, away from cancer cells."
prerequisites:
  - "[[wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor]]"
  - "[[wiki/education/concepts/immunology/immune-regulation/cytokine-and-chemokine]]"
  - "[[wiki/education/concepts/cancer-biology/tumor-microenvironment/cancer-associated-fibroblasts-and-stroma]]"
used_by: ["[[wiki/education/guides/how-the-immune-system-fights-cancer/03-reach-the-tumor]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/04-read-an-immune-map]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]"]
---

# T-cell exclusion mechanisms

## In one sentence

T-cell exclusion mechanisms are the chemokine, blood-vessel, stromal and myeloid-cell barriers that keep T cells out of a tumor or hold them in the surrounding stroma, away from cancer cells.

## The intuition

A rescue crew needs a call, an open road, a way through the gate and a path across the yard. A tumor can fail to send the call, damage the road, lock the gate or fill the yard with obstacles. Each failure leaves the crew somewhere different, and that location is a clue to which step failed. The analogy breaks because the "obstacles" are living cells and signals that change over time, and several can act at once.

## How it works

A [T cell](/wiki/education/concepts/immunology/t-cells/t-cell) primed in a lymph node must travel through the blood, leave a tumor blood vessel and cross the supporting tissue (stroma) to touch cancer cells. Exclusion can act at each leg ([Joyce and Fearon, 2015](https://pubmed.ncbi.nlm.nih.gov/25838376/); [Slaney et al., 2014](https://pubmed.ncbi.nlm.nih.gov/25477332/)).

| Where T cells stop | Barrier | What it does | Example evidence |
|---|---|---|---|
| Never called | Missing recruitment [chemokines](/wiki/education/concepts/immunology/immune-regulation/cytokine-and-chemokine) | Without CXCL9 and CXCL10, which bind the receptor CXCR3 on effector T cells, fewer cells are drawn in | In human melanoma metastases, six chemokines, including CCL5, CXCL9 and CXCL10, were expressed mainly in tumors that contained T cells ([Harlin et al., 2009](https://pubmed.ncbi.nlm.nih.gov/19293190/)) |
| Never called | Tumor WNT/β-catenin signaling | Lowers CCL4, so fewer of the dendritic cells that start a response arrive | Melanoma patients and mouse models; tends to produce a desert, not an excluded rim ([Spranger et al., 2015](https://pubmed.ncbi.nlm.nih.gov/25970248/)) |
| At the vessel wall | Abnormal vessels and adhesion | Leaky, disorganized vessels with low adhesion molecules (ICAM-1, VCAM-1) give T cells little to grip | In mouse and human melanoma models, CXCR3 was needed for transferred CD8 T cells to stick inside tumor vessels and exit ([Mikucki et al., 2015](https://pubmed.ncbi.nlm.nih.gov/26109379/)) |
| In the stroma | Dense, aligned collagen | T cells crawl along fibers and stall in dense matrix | In live slices of human lung tumors, T cells moved in loose matrix but poorly in dense matrix; digesting collagen increased contact with cancer cells ([Salmon et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22293174/)) |
| In the stroma | Fibroblast TGF-β | [Cancer-associated fibroblasts](/wiki/education/concepts/cancer-biology/tumor-microenvironment/cancer-associated-fibroblasts-and-stroma) and transforming growth factor beta (TGF-β) signaling keep T cells at the edge | In metastatic urothelial cancer treated with atezolizumab, a stromal TGF-β signature went with non-response and exclusion; in mice, blocking TGF-β with PD-L1 let T cells into the tumor ([Mariathasan et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29443960/)) |
| In the stroma | Trapping macrophages | Stromal macrophages hold CD8 T cells in long contacts | In human lung squamous cancer, excluded CD8 cells moved little; in mice, depleting macrophages let T cells reach tumor islets ([Peranzoni et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29632196/)) |

Exclusion is about **location**. A T cell that reaches cancer cells but is switched off by programmed death-ligand 1 (PD-L1), [exhaustion](/wiki/education/concepts/immunology/t-cells/t-cell-exhaustion) or [regulatory T cells](/wiki/education/concepts/immunology/t-cells/regulatory-t-cells) has passed the exclusion barriers. It is restrained, not excluded. Those tumors usually look inflamed ("hot"); see [adaptive immune resistance](/wiki/education/concepts/immunology/tumor-immunology/adaptive-immune-resistance).

## Why it matters in cancer

- **Triple-negative breast cancer (TNBC) shows these patterns.** In 681 TNBCs, Hammerl and colleagues sorted tumors by where immune cells sat. The excluded group showed collagen-10 deposits and TGF-β and vascular endothelial growth factor (VEGF) pathway activity. The "ignored" (desert-like) group showed either dense CD163-positive myeloid cells or WNT/PPARγ pathway activity. In a phase II trial in metastatic TNBC, the inflamed pattern went with response to an anti-PD-1 drug, and the other two with resistance ([Hammerl et al., 2021](https://pubmed.ncbi.nlm.nih.gov/34580291/)).
- **Stroma-restricted T cells carried a worse outlook in one TNBC study.** A TNBC subgroup whose CD8 T cells stayed in the stroma had poor outcomes, alongside stromal PD-L1 ([Gruosso et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30753167/)). These are associations, not proof that the barrier caused the outcome.
- **Each barrier suggests a different intervention, and none is proven in TNBC.** TGF-β blockade, macrophage depletion and vessel "normalization" let more T cells in to mouse tumors. No drug that targets an exclusion mechanism is an approved part of TNBC treatment.

## Common confusions

- **Excluded is not cold.** Excluded tumors have T cells nearby; desert tumors have few anywhere. Some writers call both "cold". See [hot, excluded and cold patterns](/wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor).
- **A chemokine can matter after entry, too.** In mouse tumors, CXCR3 and CXCL9 were needed for anti-PD-1 to work but not for CD8 T cells to enter. The chemokine came from tumor dendritic cells and helped them meet T cells inside the tumor ([Chow et al., 2019](https://pubmed.ncbi.nlm.nih.gov/31097342/)).
- **Stroma-rich is not the same as excluding.** Dense stroma is one candidate cause. An image shows where cells are, not why.
- **A rescue in mice is a hypothesis for people.** Most mechanisms above were shown causally only in animal models or tissue slices.

## How it is measured

Multiplex imaging can count CD8 T cells separately in stroma and in cancer-cell nests and measure their distance to cancer cells. Gene-expression signatures can score TGF-β, fibroblast and chemokine programs, but they lose location. A [stromal tumor-infiltrating lymphocyte (sTIL) score](/wiki/education/concepts/measurement/pathology-readouts/stil-scoring) counts lymphocytes in stroma, so a high score is compatible with exclusion. Spatial classifiers such as Hammerl's are research tools, not clinical tests.

## In Diana's case

The [immune-context question](/wiki/questions/is-tumor-hot) tracks how her tissue pattern has been read.

## Try it

A fictional TNBC biopsy has many CD8 T cells in collagen-dense stroma, few inside cancer-cell nests and a high TGF-β signature. A second biopsy has few T cells anywhere and low CXCL9 and CXCL10. Where did each journey most likely stop?

**Answer:** The first stopped in the stroma, consistent with fibroblast and matrix exclusion. The second suggests T cells were never called in, or never primed. Each is a hypothesis to test, not a diagnosis.

## Explain it back

"Exclusion describes where T cells ___; restraint describes what happens after they ___."

**One possible answer:** "stop before reaching cancer cells; arrive."

## Takeaway

**Name the leg of the journey where T cells stopped before naming a fix.**

## Related concepts

- [Hot, excluded and cold tumor patterns](/wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor)
- [Cancer-associated fibroblasts and stroma](/wiki/education/concepts/cancer-biology/tumor-microenvironment/cancer-associated-fibroblasts-and-stroma)
- [Angiogenesis](/wiki/education/concepts/cancer-biology/tumor-microenvironment/angiogenesis)
- [Tumor-associated macrophages](/wiki/education/concepts/cancer-biology/tumor-microenvironment/tumor-associated-macrophages)
- [Immune escape](/wiki/education/concepts/immunology/tumor-immunology/immune-escape)

## Sources and scope

Source-checked November 8, 2026, against PubMed abstracts. Mechanisms in mice and tissue slices are labeled as such; no treatment recommendation. Expert and learner review pending.

1. [Joyce and Fearon, Science 2015](https://pubmed.ncbi.nlm.nih.gov/25838376/) — review of T-cell exclusion and the tumor microenvironment.
2. [Mikucki and colleagues, Nature Communications 2015](https://pubmed.ncbi.nlm.nih.gov/26109379/) — CXCR3 at the tumor vessel wall, mouse and human melanoma models.
3. [Salmon and colleagues, Journal of Clinical Investigation 2012](https://pubmed.ncbi.nlm.nih.gov/22293174/) — matrix architecture and T-cell movement in human lung tumor slices.
4. [Mariathasan and colleagues, Nature 2018](https://pubmed.ncbi.nlm.nih.gov/29443960/) — TGF-β and exclusion in urothelial cancer treated with atezolizumab.
5. [Peranzoni and colleagues, PNAS 2018](https://pubmed.ncbi.nlm.nih.gov/29632196/) — macrophages trapping CD8 T cells.
6. [Hammerl and colleagues, Nature Communications 2021](https://pubmed.ncbi.nlm.nih.gov/34580291/) — spatial immune phenotypes in 681 TNBCs.
7. [Gruosso and colleagues, Journal of Clinical Investigation 2019](https://pubmed.ncbi.nlm.nih.gov/30753167/) — stroma-restricted CD8 T cells in TNBC.

Also cited in the text: [Harlin 2009](https://pubmed.ncbi.nlm.nih.gov/19293190/), [Spranger 2015](https://pubmed.ncbi.nlm.nih.gov/25970248/), [Chow 2019](https://pubmed.ncbi.nlm.nih.gov/31097342/) and [Slaney 2014](https://pubmed.ncbi.nlm.nih.gov/25477332/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [How T cells reach a tumor, and what keeps them out](/wiki/education/guides/how-the-immune-system-fights-cancer/03-reach-the-tumor)
- [Read an immune map without overreading it](/wiki/education/guides/how-the-immune-system-fights-cancer/04-read-an-immune-map)
- [Why the immune system doesn't just kill a tumor, and what checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
<!-- END GENERATED USED IN -->
