---
title: "Measure energy and damage separately"
type: "guide-lesson"
guide: from-variant-to-drug
step: 11
minutes: 12
objectives: ["Separate respiratory RNA, oxygen consumption, ATP-linked respiration and survival dependence.", "Normalize respiration to viable cells before comparing cultures.", "Follow a real chain from an RNA signal to a tested dependence and a clinical safety limit."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/metabolism-and-stress/oxidative-phosphorylation]]", "[[wiki/education/concepts/cancer-biology/metabolism-and-stress/reactive-oxygen-species]]", "[[wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis]]", "[[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq]]"]
sensitive: false
tags: ["education", "pathway-biology", "functional-testing"]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Measure energy and damage separately

**Energy production, reactive chemistry and lipid-driven death are different processes. Each needs its own measurement, and an energy dependence in a model still has to clear a safety test in people.**

**Before you start:** [Oxidative phosphorylation (OXPHOS)](/wiki/education/concepts/cancer-biology/metabolism-and-stress/oxidative-phosphorylation) links oxygen use in mitochondria to adenosine triphosphate (ATP) production. [Reactive oxygen species (ROS)](/wiki/education/concepts/cancer-biology/metabolism-and-stress/reactive-oxygen-species) are distinct reactive chemicals with distinct readouts. [Ferroptosis](/wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis) is iron-dependent death from lipid damage. [Bulk RNA sequencing](/wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq) averages messages across a tissue.

## Where this step sits

This is the last optional casebook lesson, step 11 of [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index). It applies amount, rate and dependence to metabolism.

## Engine, sparks and fire are different questions

A factory can burn more fuel while also improving its fire protection. Its power bill cannot tell you whether it would stop if one generator failed. Match each metabolic question to its own measurement:

| Question | Suitable measurement | What it cannot show alone |
|---|---|---|
| Are respiration genes switched on? | RNA signature | A rate, or which cells are respiring |
| How fast are cells using oxygen? | Oxygen consumption rate, normalized to viable cells | How much ATP is made, or a dependence |
| How much respiration makes ATP? | The fall in oxygen use after blocking ATP synthase, under defined conditions | Whether the cell needs that ATP |
| Which reactive species changed, and where? | A validated, compartment-specific reporter | Mitochondrial origin from a general dye |
| Did lipid damage cause death? | Lipid oxidation before death, iron dependence and rescue | Energy status |
| Do the cells need respiration? | Growth or death after a specific perturbation | Safety or benefit in people |

Glucose turning into lactate while oxygen is present (the [Warburg effect](/wiki/education/concepts/cancer-biology/metabolism-and-stress/warburg-effect)) can coexist with active respiration, and lactate release does not prove low oxygen ([hypoxia](/wiki/education/concepts/cancer-biology/tumor-microenvironment/hypoxia)). Acid released into the medium is not pure glycolysis either: carbon dioxide from respiration also acidifies it [1]. Energy sensing by [AMP-activated protein kinase (AMPK)](/wiki/education/concepts/cancer-biology/metabolism-and-stress/nutrient-sensing-ampk) and protein-folding stress ([the unfolded protein response](/wiki/education/concepts/cancer-biology/metabolism-and-stress/er-stress-and-unfolded-protein-response)) are further, separate readouts; a rise in one does not identify the trigger or show that cells are dying.

## Worked example: normalize before comparing

All numbers are fictional. Assume confirmed viable-cell counts and suitable controls.

| Observation | Culture A | Culture B |
|---|---|---|
| Viable cells per well | 30,000 | 20,000 |
| Oxygen use per well | 180 picomoles/minute | 120 picomoles/minute |
| Oxygen use per 10,000 viable cells | 60 | 60 |
| After blocking ATP synthase, per 10,000 cells | 30 | 40 |

A looks busier only because its well holds more cells. Per 10,000 cells, the baseline rates match. Their normalized inhibitor-sensitive differences are 30 and 20 picomoles/minute per 10,000 cells. Those differences estimate ATP-linked respiration under the assay conditions; they are not ATP-production rates, which need further assumptions and a specified, corrected calculation method [2]. Neither culture has shown that it depends on respiration to survive.

## A real chain: residual triple-negative tumors and oxygen use

Echeverria and colleagues treated patient-derived triple-negative breast tumors growing in mice with doxorubicin plus cyclophosphamide (AC), the "AC" of standard chemotherapy, and studied the tumors that remained [3]. Each layer was measured separately:

| Layer | Finding in the residual tumors | What it added |
|---|---|---|
| Clonal makeup | The same subclones as before treatment | Resistance was a reversible cell state, not selection of a resistant clone |
| RNA | OXPHOS was the most up-regulated pathway in one model | A hypothesis about respiration |
| Rate | Higher oxygen use and lower acid release than untreated tumor cells | Respiration was actually higher |
| Dependence | The complex I inhibitor IACS-010759 delayed regrowth | A tested vulnerability in mice |

After treatment stopped, the residual tumors regrew and were sensitive to AC again [3]. This is how an RNA signal becomes a dependence claim: by adding a rate and a perturbation.

## From model to person: the safety test

IACS-010759 then entered two phase 1 trials, in acute myeloid leukemia (17 people) and advanced solid tumors (23 people). It had a narrow therapeutic window: dose-limiting rises in blood lactate and nerve toxicity prevented the dose needed to keep the target blocked. Only modest target inhibition and limited antitumor activity were seen, no recommended phase 2 dose was set, and both trials were discontinued [4]. Normal tissues also respire, so an energy dependence in a tumor model has to clear a toxicity test that a culture cannot run.

## What can go wrong at this step

- **Cell number as biology.** More cells per well, a different fuel or oxygen level, or a later time point can explain a culture difference.
- **ATP signal as cell count.** A lower ATP-based signal can mean less ATP per cell rather than fewer living cells; count cells directly.
- **One dye for every reactive species.** A general oxidation dye cannot identify the species or its compartment [5].
- **One rescue for every question.** An antioxidant changes several processes; ferroptosis needs iron-dependent lipid damage before death [6].
- **A model dependence as a treatment.** The IACS-010759 trials show the gap.

## Try it

A sample has a high respiratory RNA score. A compound lowers its ATP-based signal. No direct oxygen-use or cell-count measurement was done. What is established?

<details>
<summary>Show the answer</summary>

A relative RNA observation and a lower ATP-related readout under the tested conditions. Neither shows a high respiration rate or selective death. Viable-cell counts, normalized oxygen use, a specific perturbation and an independent death measurement would connect the chain, as the residual-tumor study did.

</details>

## Explain it back

"RNA measures ___; oxygen consumption measures ___; dependence needs ___; and a drug for people also needs ___."

One possible answer: "captured messages; a rate under stated conditions; a specific perturbation that changes survival; a tolerable dose that still hits the target."

## Takeaway

**Keep energy, reactive chemistry and death separate until experiments connect them, then ask whether normal tissue can tolerate the drug.**

**Next:** return to [Check clinical evidence and access](/wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access), or revisit [the guide map](/wiki/education/guides/from-variant-to-drug/index).

## Sources and scope

Source check: November 8, 2026. General education; the culture numbers are fictional; the residual-tumor study is preclinical and the drug trials are phase 1. Expert and learner review pending.

1. [Mookerjee and colleagues 2015: respiratory and glycolytic contributions to acid production](https://pubmed.ncbi.nlm.nih.gov/25449966/).
2. [Mookerjee and colleagues 2017: estimating ATP-production rates](https://pubmed.ncbi.nlm.nih.gov/28270511/), with its [2018 correction](https://pubmed.ncbi.nlm.nih.gov/30097494/).
3. [Echeverria and colleagues, *Science Translational Medicine* 2019](https://pubmed.ncbi.nlm.nih.gov/30996079/): a reversible drug-tolerant state and OXPHOS dependence in residual triple-negative tumors.
4. [Yap and colleagues, *Nature Medicine* 2023](https://pubmed.ncbi.nlm.nih.gov/36658425/): phase 1 trials of the complex I inhibitor IACS-010759.
5. [Pak and colleagues 2020: a compartment-specific peroxide reporter](https://pubmed.ncbi.nlm.nih.gov/32130885/).
6. [Dixon and colleagues 2012: iron-dependent ferroptotic death](https://pubmed.ncbi.nlm.nih.gov/22632970/).
