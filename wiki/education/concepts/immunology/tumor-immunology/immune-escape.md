---
title: "Immune escape"
type: "concept"
domain: "immunology/tumor-immunology"
summary: "Immune escape occurs when cancer cells survive by avoiding recognition, access or effective immune attack."
glossary_anchor: "immune-escape"
aliases: ["immune escape", "antigen escape"]
prerequisites: ["[[wiki/education/concepts/cancer-biology/what-cancer-is/immunoediting]]", "[[wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-states]]"]
used_by: ["[[wiki/education/guides/engineered-cell-therapy/06-solid-tumor-barriers]]","[[wiki/education/guides/engineered-cell-therapy/08-reading-cell-therapy-evidence]]","[[wiki/education/guides/engineered-cell-therapy/index]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/06-find-the-failed-step]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/guides/start-here/02-follow-immune-recognition]]"]
level: "intermediate"
sensitive: false
tags: ["education", "immunology"]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Immune escape

## In one sentence

Immune escape occurs when cancer cells survive by avoiding recognition, access or effective immune attack.

## The intuition

A pursuit can fail because the address changed, the road is blocked or the responders cannot act. These are different obstacles. “Escape” describes an outcome and its possible mechanisms; it does not identify the next treatment automatically. A living tumor is more complicated than this analogy: several obstacles can coexist and change over time.

## How it works

Escape is the last phase of [cancer immunoediting](/wiki/education/concepts/cancer-biology/what-cancer-is/immunoediting): immune pressure first eliminates or holds back cancer cells, and the cells that survive are those that have found a way around it ([Dunn et al., 2004](https://pubmed.ncbi.nlm.nih.gov/15032581/)). The routes fall into a few classes, each a failure at a different step of [the cancer-immunity cycle](/wiki/education/concepts/immunology/tumor-immunology/cancer-immunity-cycle):

| Escape route | What fails | Example evidence |
|---|---|---|
| **Antigen loss** | The targeted protein or mutation disappears | Neoantigens lost from lung tumors that became resistant to checkpoint blockade ([Anagnostou et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28031159/)) |
| **HLA loss** | One presenting [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) allele is deleted ([HLA loss of heterozygosity](/wiki/education/concepts/measurement/sequencing-basics/hla-loh)) | Allele-specific HLA loss during lung cancer evolution ([McGranahan et al., 2017](https://pubmed.ncbi.nlm.nih.gov/29107330/)); across 83,644 tumors of many types profiled by one genomic test, 17% had lost one inherited copy of at least one HLA class I gene ([Montesion et al., 2021](https://pubmed.ncbi.nlm.nih.gov/33127846/)) |
| **Presentation machinery loss** | [B2M](/wiki/education/concepts/immunology/antigen-presentation/b2m) or [antigen-processing machinery](/wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery) defects remove class I display for all alleles at once | A truncating B2M change in a melanoma relapse on PD-1 blockade ([Zaretsky et al., 2016](https://pubmed.ncbi.nlm.nih.gov/27433843/)) |
| **Lost interferon response** | JAK1 or JAK2 loss stops the tumor responding to interferon gamma | Same melanoma series; see the next section |
| **[Adaptive PD-L1 display](/wiki/education/concepts/immunology/tumor-immunology/adaptive-immune-resistance)** | Interferon from attacking T cells induces programmed death-ligand 1 (PD-L1), which switches those T cells down | PD-L1 found next to immune infiltrates in melanoma ([Taube et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22461641/)); the target of [checkpoint inhibitors](/wiki/education/concepts/therapeutics/immunotherapy/immune-checkpoint-inhibitor) |
| **Suppressive cells and signals** | [Regulatory T cells](/wiki/education/concepts/immunology/t-cells/regulatory-t-cells), suppressive myeloid cells, [adenosine and IDO](/wiki/education/concepts/immunology/immune-regulation/adenosine-and-ido) reduce function after entry | Mechanism-specific studies on the linked pages |
| **Exclusion** | Stroma, abnormal vessels, missing chemokines or tumor signaling keep T cells out | [T-cell exclusion mechanisms](/wiki/education/concepts/immunology/tumor-immunology/t-cell-exclusion-mechanisms), including 681 triple-negative breast cancers sorted by immune pattern |
| **T-cell exhaustion** | Persistent antigen drives responding T cells into a restrained program | [T-cell exhaustion](/wiki/education/concepts/immunology/t-cells/t-cell-exhaustion) |

Losing one allele differs from impairing all class-I complexes. Reduced expression can be reversible; a deletion changes the underlying sequence. Several routes can coexist, and different sites can have different bottlenecks.

Treatment may select a pre-existing resistant population, and new changes can arise. A variant in resistant tissue does not establish cause. Earlier specimens, retained copies, expression and controlled functional comparisons help investigate it.

## Interferon responsiveness is a separate dependency

[Interferon gamma (IFNγ)](/wiki/education/concepts/immunology/the-immune-system/interferons) signals through its receptor and Janus kinases JAK1 and JAK2. These kinases help activate signal transducer and activator of transcription 1 (STAT1), which can alter presentation programs and growth responses. **A defective inducible response is different from no baseline display.**

A small, selected study of acquired resistance after PD-1 blockade examined four people with metastatic melanoma. Two relapse samples had loss-of-function JAK1 or JAK2 changes with loss of the remaining normal allele; another had a [beta-2-microglobulin (B2M)](/wiki/education/concepts/immunology/antigen-presentation/b2m) defect. Functional experiments separated interferon-response loss from class-I surface loss.

In an engineered melanoma model from that study, JAK1- or JAK2-deficient cells still elicited recognition by the tested antigen-specific [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor). They resisted particular interferon-induced growth effects. Thus a JAK defect does **not automatically mean all baseline HLA display or direct T-cell recognition is absent**. The series is mechanistic evidence in melanoma, not a frequency estimate for all cancers.

<img src="./images/immune-escape-baseline-induction-v1-light.png" alt="Three stacked panels compare baseline surface HLA-I in control and JAK2-deficient fictional cultures, an increase only in control after matched IFNγ exposure, and unanswered T-cell recognition, tissue-access and killing-test questions." width="1024" height="1536" data-theme-pair>

*In this fictional comparison, surface human leukocyte antigen class I (HLA-I) remains present, but the Janus kinase 2 (JAK2)-deficient model does not increase display after interferon gamma (IFNγ). Symbol counts are schematic, not measurements. Selected melanoma experiments support separating inducibility from recognition; access and killing still need their own tests. Neither baseline HLA abundance nor this stimulus comparison proves display of a particular target peptide.*

## Why it matters in cancer

Combining interventions may address distinct bottlenecks, share a failure point or add toxicity. A diagram of complementary mechanisms does not establish benefit or a safe regimen. HLA-independent recognition also retains target, access and functional requirements.

## How it is investigated

Sequence analysis asks what changed; surface-protein measurement asks what is displayed; stimulation asks whether a signal induces a response. Killing assays test another outcome. Keep the specimen date, model, stimulus, controls and readout attached to each claim. A blood tumor-DNA result does not identify a particular escape mechanism.

## Worked example: test the missing response

Imagine two matched fictional cancer-cell cultures: a control and a candidate JAK2-deficient culture. Both show baseline HLA class I. After IFNγ exposure, the control increases a signaling readout and surface class I; the candidate does neither. A separate interferon-alpha stimulus remains active in the candidate. Restoring JAK2 restores the tested IFNγ response.

This supports a JAK2-dependent inducibility defect in that controlled model. Equal viability, matched handling and a control restoration procedure help exclude alternatives. Tumor recognition and killing still need their own tests. Restoring a laboratory readout does not demonstrate a safe clinical rescue.

## Common confusions

- A variant label alone does not establish loss of functional signaling.
- JAK1 and JAK2 are not identical: their interferon dependencies differ.
- Baseline expression, inducibility, recognition and killing are separate measurements.
- A mechanism in one resistant site need not describe every site or patient.

## Try it

In the fictional experiment, baseline HLA remains detectable but fails to increase after IFNγ. Can you conclude that a TCR cannot recognize the cells?

**Answer:** No. The tested inducible response is impaired. Recognition depends on the relevant peptide–HLA complex and receptor; it requires a separate controlled test.

## Explain it back

“Escape is a possible failure at ___; evidence for inducibility does not by itself establish ___.” One answer: “recognition, access or function; the presence or absence of tumor killing.”

## Takeaway

**Identify the failed dependency with a matching experiment, and keep the next untested step visible.**

## In Diana's case

Whether these escape routes have been examined for Diana is tracked in [[wiki/questions/hla-b2m-loss|the HLA and B2M loss question]].

## Related concepts

- [Cancer immunoediting](/wiki/education/concepts/cancer-biology/what-cancer-is/immunoediting)
- [T-cell states](/wiki/education/concepts/immunology/t-cells/t-cell-states)
- [T-cell exclusion mechanisms](/wiki/education/concepts/immunology/tumor-immunology/t-cell-exclusion-mechanisms)
- [Chimeric antigen receptor (CAR) anatomy](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy)

## Sources and scope

Source check: November 8, 2026. General mechanism teaching and a fictional functional experiment; no treatment recommendation. Expert and learner review remain pending.

- [Chen and Mellman, 2013: cancer-immunity-cycle framework](https://pubmed.ncbi.nlm.nih.gov/23890059/).
- [Dunn et al., 2004: the three Es of cancer immunoediting](https://pubmed.ncbi.nlm.nih.gov/15032581/).
- [Anagnostou et al., 2017: neoantigen loss under checkpoint blockade](https://pubmed.ncbi.nlm.nih.gov/28031159/).
- [McGranahan et al., 2017: allele-specific HLA loss in lung cancer](https://pubmed.ncbi.nlm.nih.gov/29107330/).
- [Montesion et al., 2021: HLA class I loss of heterozygosity across 83,644 tumors](https://pubmed.ncbi.nlm.nih.gov/33127846/) — pan-cancer prevalence from a commercial genomic database; not a breast-specific rate.
- [Taube et al., 2012: adaptive PD-L1 resistance](https://pubmed.ncbi.nlm.nih.gov/22461641/).
- [Zaretsky et al., 2016: acquired resistance in selected metastatic melanoma cases](https://pmc.ncbi.nlm.nih.gov/articles/PMC5007206/). Matched tissue and controlled functional experiments, including preserved recognition in tested JAK-knockout cells.
- [Torrejon et al., 2020: genetic resistance models](https://pmc.ncbi.nlm.nih.gov/articles/PMC7416458/). Human cell and mouse experiments distinguish interferon defects from B2M loss; preclinical rescue is not a clinical recommendation.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [The journey through a solid tumor](/wiki/education/guides/engineered-cell-therapy/06-solid-tumor-barriers)
- [Reading cell-therapy evidence](/wiki/education/guides/engineered-cell-therapy/08-reading-cell-therapy-evidence)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
- [Find the step an immune response can lose](/wiki/education/guides/how-the-immune-system-fights-cancer/06-find-the-failed-step)
- [What checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change)
- [Why the immune system doesn't just kill a tumor, and what checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Dose a vaccine and measure its response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [Follow the route to immune recognition](/wiki/education/guides/start-here/02-follow-immune-recognition)
<!-- END GENERATED USED IN -->
