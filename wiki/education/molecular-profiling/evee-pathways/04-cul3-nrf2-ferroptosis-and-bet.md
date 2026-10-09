---
title: "Stress defenses and chromatin readers: test the direction"
type: "guide-lesson"
guide: "pathway-mechanisms"
step: 4
minutes: 14
objectives: ["Explain how KEAP1–CUL3 regulates NRF2 turnover.", "Distinguish antioxidant protection from dependence on a lipid-defense system.", "Explain why a BET-family alteration does not predict response to broad BET inhibition."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/cell-death-and-survival/ubiquitin-and-proteasome]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1]]", "[[wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis]]"]
sensitive: false
tags: ["education", "pathway-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Stress defenses and chromatin readers: test the direction

**A stress-defense program may protect a cell, and a transcription regulator may support many genes. A useful drug hypothesis needs a measured direction and a specific dependence, not a shared category label.**

**Before you start:** [Ubiquitin and the proteasome](/wiki/education/concepts/cancer-biology/cell-death-and-survival/ubiquitin-and-proteasome) controls selected protein lifetimes. [NRF2–KEAP1](/wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1) regulates stress responses. [Ferroptosis](/wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis) is iron-dependent death through uncontrolled membrane-lipid damage.

## Where this step sits

This is the fourth supporting lesson in [the pathway library](/wiki/education/molecular-profiling/evee-proposed-pathways). It develops the direction-of-effect question in [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index).

## A stronger shield can mean several things

Imagine a workshop with more fire extinguishers. Perhaps fires are frequent. Perhaps the building is well protected. Perhaps workers have become reliant on that protection. Counting extinguishers cannot tell you which explanation is correct.

**NRF2** is a transcription factor, a protein that helps regulate gene expression. **KEAP1** serves as an adaptor for a **CUL3**-based ubiquitin-ligase complex. Under suitable conditions, that machinery promotes NRF2 destruction through the proteasome. Stress can alter this regulation and permit more NRF2 to participate in nuclear gene control. [Kobayashi 2004](https://pubmed.ncbi.nlm.nih.gov/15282312/).

The mechanism involves altered turnover; it need not mean that all NRF2 physically separates from KEAP1. CUL3 also works with other adaptors and targets. Therefore, a CUL3 sequence change needs characterization before being assigned a particular NRF2 consequence. [Zhang 2004](https://pubmed.ncbi.nlm.nih.gov/15572695/).

A stress-response transcript alone is also insufficient. Combine localization, several responsive genes or proteins, turnover, and controlled perturbation to test the proposed regulatory state.

## Protection is different from dependence

NRF2-associated defenses can reduce oxidative damage. In specific oncogene-driven models, this regulation helped support detoxification and tumor development. That is a context-bound experimental finding. [DeNicola 2011](https://pubmed.ncbi.nlm.nih.gov/21734707/).

**Ferroptosis** concerns a more specific failure: iron-dependent lipid peroxidation overwhelms membrane protection. **Glutathione peroxidase 4 (GPX4)** is one important protective enzyme. High defenses can resist this kind of damage. A cell may nevertheless depend on one defense, but that requires testing what happens when the defense is disrupted. [Yang 2014](https://pubmed.ncbi.nlm.nih.gov/24439385/).

These observations can coexist without contradiction. A shield can make ordinary stress less harmful while leaving the cell vulnerable if that particular shield is removed.

## A worked example: what caused the death?

In a fictional culture, researchers find nuclear NRF2 and several responsive proteins. They then perturb GPX4 and follow early lipid oxidation and later survival.

| Observation | What it supports | What it leaves open |
|---|---|---|
| Nuclear NRF2 and a coherent response program | An active stress-response state | Its cause and effect on survival |
| Lipid oxidation rises before death | Damage consistent with the proposed route | Whether ferroptosis explains the death |
| Independent iron and lipid-radical rescue conditions reduce death | A stronger ferroptosis interpretation | Selectivity, exposure, and clinical benefit |
| Genetic GPX4 perturbation produces a similar pattern | More specific support for GPX4 involvement | Whether the same dependence exists in a person |

The experiment should include vehicle, rescue-only, matched control-cell, and unrelated-death conditions. Rescue compounds can have broader effects. Converging evidence is stronger than one rescue result. A laboratory probe remains an experimental tool, even when its mechanism is useful.

## Chromatin readers are a different mechanism

**Chromatin** is DNA packaged with proteins, including histones. Chemical marks on histones help regulate how genes are used. **Bromodomains** are protein regions that recognize acetylated lysines, a particular chemical modification.

The **BET family**, short for bromodomain and extra-terminal proteins, includes BRD2, BRD3, BRD4, and BRDT. They help connect acetyl marks to transcriptional machinery. Experimental BET inhibitors can occupy these reading sites in several family members. They do not repair a damaged BRD3 gene or isolate every BRD3 function. [Filippakopoulos 2010](https://www.nature.com/articles/nature09504).

A fictional BRD3 variant might reduce one function, change interactions, or have little effect. Broad BET inhibition could still act through another family member. To connect the variant to response, compare the specific alteration, separate family-member perturbations, transcriptional outputs, and survival. The same category name does not complete that chain.

## What can go wrong at this step

A proposed loss of a ubiquitin-ligase component can be translated into an assumed increase in every substrate. Complex membership and substrate choice must be established.

A high antioxidant program can then be misread as ferroptosis sensitivity. Protection is the starting observation; dependence on a particular defense is an additional question.

Finally, reducing a short-lived protein with a broadly toxic compound does not demonstrate selective inhibition of that protein. Early target measurements, controls for general transcription or translation changes, and independent perturbations help distinguish mechanisms.

## Try it

A culture has high antioxidant transcripts and dies after a chemical probe. No lipid-damage assay or rescue experiment was done. Can the researcher claim NRF2-driven ferroptosis dependence?

<details>
<summary>Show the answer</summary>

No. The observations are transcript abundance and probe-associated death. The NRF2 mechanism, ferroptosis diagnosis, and dependence each need their own evidence. A general stress or toxicity effect remains possible.

</details>

## Explain it back

“An active defense can produce ___; dependence means ___; a broad inhibitor's response does not identify ___.”

One possible answer: “protection; survival requires a defined defense under specified conditions; which altered gene caused the response.”

## Takeaway

**Measure the direction of a regulatory change, then test its causal role before translating it into a vulnerability.**

**Next:** [Oxidative metabolism and stress](/wiki/education/molecular-profiling/evee-pathways/05-oxidative-metabolism-and-stress).

## Sources and scope

Source check: 2026-10-09. General education; all worked scenarios and numerical examples are fictional. Mechanistic experiments describe their tested systems, not a treatment-selection rule. Expert and learner review pending.

- [Kobayashi 2004: KEAP1–CUL3 control of NRF2 turnover](https://pubmed.ncbi.nlm.nih.gov/15282312/).
- [Zhang 2004: redox regulation of the KEAP1 ligase complex](https://pubmed.ncbi.nlm.nih.gov/15572695/).
- [DeNicola 2011: context-specific NRF2-dependent detoxification](https://pubmed.ncbi.nlm.nih.gov/21734707/).
- [Dixon 2012: defining ferroptosis experimentally](https://pubmed.ncbi.nlm.nih.gov/22632970/).
- [Yang 2014: GPX4 and ferroptotic cancer-cell death](https://pubmed.ncbi.nlm.nih.gov/24439385/).
- [Filippakopoulos 2010: selective BET bromodomain inhibition](https://www.nature.com/articles/nature09504).
