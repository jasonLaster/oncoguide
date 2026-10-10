---
title: "Autophagy: traffic, flow, and dependence"
type: guide-lesson
guide: from-variant-to-drug
step: 5
minutes: 12
objectives:
  - "Distinguish recycling machinery abundance from completed autophagic flux."
  - "Explain why a static marker can rise when clearance is blocked."
  - "Read a perturbation result without assuming autophagy always protects a tumor."
prerequisites:
  - "[[wiki/education/concepts/biology-basics/genetics/central-dogma]]"
  - "[[wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd]]"
sensitive: false
reviewed: pending
reviewed_by: ""
review_status: "Expert and learner review pending"
source_checked: 2026-10-09
tags: [education, autophagy, PARP, functional-testing]
---

# Autophagy: traffic, flow, and dependence

**A busy-looking recycling system may be working quickly, waiting at a blockage, or doing something that does not determine survival. Amount, completed flow, and dependence are separate questions.**

**Before you start:** [DNA, RNA, and protein](/wiki/education/concepts/biology-basics/genetics/central-dogma) separates genetic instructions from the machinery they encode; [homologous recombination (HR)](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd) is a DNA repair process that can change drug vulnerability. DNA means deoxyribonucleic acid, and RNA means ribonucleic acid.

## Where this step sits

This is optional step 5 of [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index). After identifying the [PARP obstacle](./04-parp-trapping-and-recycling), we ask what recycling is doing. PARP stands for poly(ADP-ribose) polymerase, an enzyme that builds chemical signals at DNA damage. The next lesson follows growth signals that can affect repair and recycling together.

## Count packages, then watch deliveries

[Autophagy](/wiki/education/concepts/cancer-biology/cell-death-and-survival/autophagy) is a cell process that encloses material in a membrane package, an **autophagosome**, and sends it to a **lysosome** for breakdown. The cell can reuse the resulting components. It is normal maintenance machinery as well as a possible stress response.

Think of a delivery depot. A photograph showing many packages could mean many deliveries are arriving. It could also mean the trucks stopped leaving. The photograph alone does not tell you how much material completes its trip.

**Autophagic flux** means material progressing through the process over time, including breakdown at the end. More autophagosomes at one moment do not establish greater flux. Likewise, [bulk RNA sequencing](/wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq) measures instructions in a sampled mixture. It does not watch cargo move or show that a tumor depends on recycling.

## What the markers can and cannot tell you

Two common laboratory markers need careful interpretation:

- **LC3-II** is a lipid-attached form of microtubule-associated protein 1 light chain 3. It associates with autophagic membranes. More LC3-II can reflect more package formation or less clearance.
- **p62**, also called sequestosome 1, is a cargo adaptor that can be broken down through autophagy. Its amount also depends on production and other processes. An increase alone does not establish a blockage.

Researchers therefore compare time points and conditions, often with and without a controlled block of lysosomal degradation. They may add a reporter with two colors that respond differently as cargo reaches an acidic compartment. The interpretation depends on controls for the marker, lysosome, and experiment. Expert assay guidelines recommend complementary measurements rather than a single static marker. [Klionsky 2021](https://pubmed.ncbi.nlm.nih.gov/33634751/).

## A worked example: the same queue, different flow

These are invented delivery counts over one hour. They are an analogy, not assay values or thresholds.

| Observation | Depot A | Depot B |
|---|---:|---:|
| Packages initially waiting | 20 | 20 |
| New packages arriving | 30 | 5 |
| Packages processed | 30 | 0 |
| Packages left waiting | 20 | 25 |

Both start with the same queue. Depot A processes many packages while keeping its queue stable. Depot B accumulates packages because nothing leaves. A single starting snapshot misses that difference.

Cells are more complicated than depots: cargo types differ, markers are made and degraded, and drug exposure can change several steps. The analogy's useful lesson is to measure *completion over time*, rather than infer it from the queue.

## Flow still does not establish dependence

Suppose recycling completes efficiently during drug treatment. Does it help the cell survive? To ask that question, change the process and measure survival under controlled conditions.

| Result after disrupting the process | Possible interpretation | Important remaining check |
|---|---|---|
| More tumor-cell death | Recycling may have been protective. | Did the perturbation act through the intended process? |
| Less drug-induced death | Recycling may have contributed to the death response. | Does an independent perturbation reproduce the result? |
| Changed flux, similar survival | Recycling may not limit survival in these conditions. | Could timing or compensation conceal an effect? |

Published breast cancer experiments illustrate why both directions deserve attention. Bellare and colleagues found that disrupting autophagy increased talazoparib sensitivity in the HR-proficient models they studied. Arun and colleagues found that reducing ATG5, an autophagy machinery protein, partly reduced olaparib-induced apoptosis in the BRCA2-mutant HCC-1428 cell line. **Apoptosis** is a regulated cell-death process. These studies used different models, drugs, and perturbations. Their results do not define a universal tumor label or individual treatment effect. [Bellare 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8007595/), [Arun 2015](https://www.spandidos-publications.com/10.3892/ijo.2015.3003).

Read Bellare's report with its [2025 correction](https://pubmed.ncbi.nlm.nih.gov/40527957/), which replaced an incorrectly assembled representative liver-histology image in Figure 6f.

## What can go wrong at this step

An RNA signal can be mistaken for a pathway rate. A static marker can be mistaken for completed recycling. A toxic lysosomal drug can be mistaken for a selective autophagy perturbation. Each move skips a measurement.

It is also easy to call autophagy “protective” for an entire tumor. Dependence is conditional: the sampled cells, drug, timing, and environment shape the answer. A separate intervention that changes the intended process strengthens the explanation, especially if restoring the function reverses the result.

## Try it

A fictional experiment shows more LC3-II after a drug and lower metabolic signal after adding a lysosomal blocker. A report calls this “high protective autophagy.” What is still missing?

<details>
<summary>Show the answer</summary>

The LC3-II snapshot cannot distinguish increased formation from blocked clearance. A controlled flux measurement is needed. Lower metabolic signal also does not prove cell death or autophagy dependence. The researcher needs survival or death measurements and evidence that the intended pathway caused the effect.

</details>

## Explain it back

“Amount asks ___; flux asks ___; dependence asks ___.”

One possible answer: “how much machinery or cargo is present; how much material completes the process over time; whether changing the process changes survival.”

## Takeaway

**Measure amount, flow, and survival dependence as three different claims.**

**Next:** [Follow growth signals and their competing effects](./06-pi3k-akt-mtor-and-repair).

## Sources and scope

Source check: 2026-10-09. General measurement education; expert and learner review pending. Delivery counts are fictional. Published drug interactions discussed here come from preclinical models.

- [Klionsky 2021: fourth-edition guidelines for interpreting autophagy assays](https://pubmed.ncbi.nlm.nih.gov/33634751/).
- [Bellare 2021: autophagy perturbation in HR-proficient breast cancer models](https://pmc.ncbi.nlm.nih.gov/articles/PMC8007595/); [2025 correction](https://pubmed.ncbi.nlm.nih.gov/40527957/).
- [Arun 2015: autophagy and apoptosis in BRCA-mutant breast cancer cell models](https://www.spandidos-publications.com/10.3892/ijo.2015.3003).
