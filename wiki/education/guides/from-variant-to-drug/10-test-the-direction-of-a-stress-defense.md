---
title: "Test the direction of a stress defense"
type: "guide-lesson"
guide: from-variant-to-drug
step: 10
minutes: 12
objectives: ["Explain how KEAP1 loss raises NRF2 and protects a cancer cell.", "Distinguish protection by a defense from dependence on it or on its costs.", "Use converging evidence to attribute cell death to ferroptosis."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1]]", "[[wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis]]", "[[wiki/education/concepts/cancer-biology/cell-death-and-survival/ubiquitin-and-proteasome]]"]
sensitive: false
tags: ["education", "pathway-biology"]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Test the direction of a stress defense

**A strong stress defense can make a cancer harder to kill and, at the same time, create a new weak point. Which way it cuts has to be tested, not read from the size of the defense.**

**Before you start:** [NRF2–KEAP1](/wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1) controls the cell's main antioxidant program. [Ubiquitin and the proteasome](/wiki/education/concepts/cancer-biology/cell-death-and-survival/ubiquitin-and-proteasome) explains how KEAP1 marks NRF2 for destruction. [Ferroptosis](/wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis) is iron-dependent cell death from runaway damage to membrane lipids.

## Where this step sits

This is optional casebook lesson 10 of [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index). It asks a direction question: does a defense protect the tumor, or make it depend on something?

## A bigger fire department is not a weakness by itself

A town with a large fire department may face many fires, or be well protected, or have spent so much on fire trucks that it now depends on one fuel supplier. Counting trucks cannot tell you which. A cancer cell's antioxidant program is the same: high levels are an observation, and its direction has two possible answers.

| Direction | Claim | What would show it |
|---|---|---|
| **Protection** | The defense helps the cell survive a stress, such as a drug | Removing the defense makes the stress more lethal |
| **[Dependence](/wiki/education/concepts/cancer-biology/what-cancer-is/oncogene-addiction-vs-synthetic-lethality)** | The cell now needs the defense, or something the defense consumes, to survive at all | Removing the defense or its supply kills the cells even without an added stress, and spares matched cells that never relied on the defense |

## Case 1: KEAP1 loss in lung cancer

Normally KEAP1 binds NRF2 and hands it to a ubiquitin ligase for destruction. When KEAP1 is lost, NRF2 builds up and switches on antioxidant, detoxification and drug-export genes. In non-small-cell lung cancer, Singh and colleagues found KEAP1 mutations in 10 of 54 tumors (19%), often with loss of the other copy [1]. About 20% of KRAS-mutant lung adenocarcinomas carry KEAP1 loss-of-function mutations [2].

**The protective direction.** Lung cancer cells with dysfunctional KEAP1 had higher NRF2 activity and switched on drug-export genes that may help them withstand chemotherapy [1].

**The dependence direction.** Romero and colleagues used gene editing in a mouse lung cancer model. Losing KEAP1 sped tumor growth, and a genetic screen and metabolite measurements showed that KEAP1- or NRF2-mutant cancers depended on breaking down glutamine (glutaminolysis), which a glutaminase inhibitor could exploit in mice [2]. The weak point was not NRF2 itself but a cost of running the defense.

**The clinical test.** The KEAPSAKE trial added the glutaminase inhibitor telaglenastat to standard chemotherapy and immunotherapy for KEAP1- or NRF2-mutated lung cancer. It enrolled 40 people and was terminated for lack of clinical benefit [3]. A dependence found in models still needs its own clinical evidence.

## Case 2: GPX4 and drug-tolerant cells

Glutathione peroxidase 4 (GPX4) is a lipid-defense enzyme that repairs oxidized membrane lipids. Hangauer and colleagues studied "persister" cells, the small population that survives a targeted drug for weeks. Across a range of cancers and drugs, persisters entered a drug-resistant state that depended on GPX4. Losing GPX4 killed them by ferroptosis in the dish and prevented relapse in mice [4]. The same cells were **protected** from the original drug and **dependent** on a different defense.

Ferroptosis suppressor protein 1 (FSP1) is a parallel lipid defense [5]. Its presence helps explain why removing GPX4 does not kill every cell type equally.

## Converging evidence for ferroptosis

One rescue or one dye cannot establish ferroptosis. A fictional experiment that removes GPX4 builds the case in steps:

| Observation | What it adds |
|---|---|
| Lipid oxidation rises before cells die | Fits the proposed damage route |
| An iron chelator and a lipid-radical trap each prevent death | Points to iron-dependent lipid damage |
| Genetic GPX4 loss gives the same pattern as the drug | Attributes the effect to this defense |
| Matched cells with high FSP1 survive | Shows a parallel defense can compensate |

Use vehicle, rescue-only and unrelated-death controls; a rescue compound can act on more than one process.

## What can go wrong at this step

- **Amount read as direction.** High antioxidant RNA says the program is on, not whether it protects or creates a dependence.
- **A broad drug read as a specific one.** A compound that lowers NRF2 by blocking all protein production does not isolate the NRF2 effect. A [chemical probe](/wiki/education/concepts/therapeutics/how-drugs-work/chemical-probe-vs-drug-and-target-engagement) needs evidence that it engaged the intended target; a genetic perturbation is the cleaner test.
- **A gene name read as a direction.** The ubiquitin-ligase scaffold that works with KEAP1 also works with many other adaptors, so a change in it cannot be assigned to NRF2 without testing NRF2 turnover.
- **A model dependence read as a treatment.** KEAPSAKE shows that a convincing mouse dependence can fail in patients.

## Try it

A culture has high antioxidant RNA and dies after a chemical probe. No lipid-damage, rescue or specificity test was done. Can the researcher claim an NRF2-driven ferroptosis dependence?

<details>
<summary>Show the answer</summary>

No. The observations are transcript levels and probe-associated death. NRF2 activity needs a turnover or nuclear-localization test; ferroptosis needs lipid damage before death plus iron and lipid-radical rescue; dependence needs a specific genetic perturbation with matched controls. General toxicity remains possible.

</details>

## Explain it back

"Protection means removing the defense makes ___ more lethal; dependence means removing the defense or its supply ___."

One possible answer: "a stress such as a drug; kills the cells on its own, while sparing matched cells without the defense."

## Takeaway

**Measure which way a defense cuts, protection or dependence, before calling it a vulnerability, and then ask for clinical evidence.**

**Next:** [Measure energy and damage separately](/wiki/education/guides/from-variant-to-drug/11-measure-energy-and-damage-separately).

## Sources and scope

Source check: November 8, 2026. General education; the ferroptosis table is fictional and cases 1 and 2 combine human tumor data with preclinical models. Expert and learner review pending.

1. [Singh and colleagues, *PLoS Medicine* 2006](https://pubmed.ncbi.nlm.nih.gov/17020408/): dysfunctional KEAP1–NRF2 interaction in non-small-cell lung cancer.
2. [Romero and colleagues, *Nature Medicine* 2017](https://pubmed.ncbi.nlm.nih.gov/28967920/): KEAP1 loss and dependence on glutaminolysis.
3. [KEAPSAKE, NCT04265534, ClinicalTrials.gov](https://clinicaltrials.gov/study/NCT04265534): terminated for lack of clinical benefit; registry record, no peer-reviewed result checked.
4. [Hangauer and colleagues, *Nature* 2017](https://pubmed.ncbi.nlm.nih.gov/29088702/): drug-tolerant persister cells depend on GPX4.
5. [Bersuker and colleagues, *Nature* 2019](https://pubmed.ncbi.nlm.nih.gov/31634900/): FSP1 as a parallel ferroptosis defense.
6. [Kobayashi and colleagues 2004: KEAP1 as the adaptor for CUL3-dependent NRF2 turnover](https://pubmed.ncbi.nlm.nih.gov/15282312/).
