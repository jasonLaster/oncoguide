---
title: "Stress defenses and chromatin readers: test the direction"
type: "guide-lesson"
guide: "pathway-mechanisms"
step: 4
minutes: 14
objectives: ["Explain how KEAP1–CUL3 regulates NRF2 turnover.", "Distinguish antioxidant protection from dependence on a lipid-defense system.", "Explain why a BET-family alteration does not predict response to broad BET inhibition."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/cell-death-and-survival/ubiquitin-and-proteasome]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1]]", "[[wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/bet-bromodomain-proteins]]"]
sensitive: false
tags: ["education", "pathway-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Stress defenses and chromatin readers: test the direction

**A defense program can protect a cell without revealing its weak point. A regulator's family name does not identify which function an inhibitor must reach.**

**Before you start:** [Ubiquitin and the proteasome](/wiki/education/concepts/cancer-biology/cell-death-and-survival/ubiquitin-and-proteasome) regulates selected protein lifetimes. [NRF2–KEAP1](/wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1) controls a stress-defense program. [Ferroptosis](/wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis) is iron-dependent death through uncontrolled lipid damage. [Bromodomain and extra-terminal (BET) proteins](/wiki/education/concepts/cancer-biology/signaling-pathways/bet-bromodomain-proteins) read acetyl marks and help regulate gene expression.

## Where this step sits

The fourth lesson in [the pathway library](/wiki/education/molecular-profiling/evee-proposed-pathways) practices direction and attribution before the [variant-to-drug guide](/wiki/education/guides/from-variant-to-drug/index) asks about clinical evidence.

## Count the shields, then ask what they do

Picture a workshop with many fire extinguishers. Perhaps it faces frequent sparks. Perhaps it is well protected. Perhaps it needs one particular extinguisher to keep operating. The count cannot choose among these explanations.

The concept pages supply the mechanisms. Your task here is to separate three questions:

1. What changed in the regulatory system?
2. What protection or transcriptional output followed?
3. What specific function became necessary for survival?

A fourth question follows later: can an intervention safely reach that function and improve outcomes in the relevant clinical setting?

## Worked example: the stress-defense card

All cards in this lesson are fictional, with illustrative laboratory observations.

Culture A contains a cullin 3 (**CUL3**) variant. Its antioxidant transcripts are high. The researcher proposes that the variant disabled Kelch-like ECH-associated protein 1 (**KEAP1**) regulation of nuclear factor erythroid 2-related factor 2 (**NRF2**).

That is a hypothesis with several missing links. CUL3 participates in complexes with different adaptors. The variant's presence does not establish impaired KEAP1 function. High transcripts could also have other causes. Test allele function, NRF2 turnover/localization and several expected outputs before assigning the direction.

Suppose restoring a suitable reference component lowers nuclear NRF2 and several responsive readouts in a well-controlled model. This supports a regulatory consequence. It still does not identify which defense the cells need to survive.

A broadly acting compound then lowers NRF2 and kills cells. That result cannot supply the missing specificity. Primary A549 experiments found that brusatol inhibited global protein synthesis; lowering NRF2 was part of that broader effect. An independent genetic test and early controls for general translation help distinguish mechanisms.

## Worked example: the membrane-protection card

Culture B has a measured antioxidant program. Researchers perturb glutathione peroxidase 4 (**GPX4**), a lipid-defense enzyme. They observe the following sequence:

| Fictional observation | Careful interpretation |
|---|---|
| Lipid oxidation rises before death | Consistent with the proposed damage route |
| Iron chelation and lipid-radical-trapping rescue each reduce death | Stronger support for a ferroptosis interpretation |
| Genetic GPX4 perturbation gives a similar pattern | Stronger attribution to this defense |
| A matched control culture retains survival | A context-specific difference needing confirmation |

Use vehicle, rescue-only and unrelated-death controls. Rescue compounds can affect more than one process. Converging evidence supports the mechanism better than a single color change or one rescue.

Ferroptosis suppressor protein 1 (**FSP1**) supplies a parallel defense. Its existence helps explain why GPX4 perturbation need not affect every culture equally. High defense abundance can resist damage, while a particular functional dependence must be tested. Neither statement makes a [laboratory probe](/wiki/education/concepts/therapeutics/how-drugs-work/chemical-probe-vs-drug-and-target-engagement) a clinical treatment.

## Worked example: the chromatin-reader card

Culture C contains an uncharacterized BRD3 variant. A BET bromodomain inhibitor changes selected transcripts, but growth persists. Independent BRD4 depletion impairs growth.

These results can coexist. Pocket inhibition and removal of an entire protein affect different functions. Primary breast-cancer model experiments identified inhibitor-resistant cells that still depended on BRD4 through bromodomain-independent regulation. That is a model finding, not a rule assigning sensitivity to a BRD3 allele.

To attribute the fictional result, verify inhibitor engagement, perturbation specificity, suitable reference restoration and the sequence of transcriptional and growth changes. Compare family members rather than treating BRD2, BRD3 and BRD4 as interchangeable.

## What can go wrong at this step

Three shortcuts are especially tempting: turning a CUL3 variant into assumed NRF2 activation; turning antioxidant amount into ferroptosis sensitivity; and turning a BET-family alteration into response to any BET inhibitor.

Several plausible pathways also do not establish a useful drug combination. The combination needs its own attribution, exposure, normal-cell and clinical evidence. Adding two hypotheses does not remove either uncertainty.

## Try it

A fictional culture has high antioxidant RNA and dies after a chemical probe. No lipid-damage, rescue or specificity test was done. Can the researcher claim NRF2-driven ferroptosis dependence?

<details>
<summary>Show the answer</summary>

No. The observations are transcript abundance and probe-associated death. NRF2 regulation, ferroptosis and dependence each need their own evidence. General translation inhibition or another toxicity mechanism remains possible.

</details>

## Explain it back

“Protection describes ___; dependence means ___; a family label does not establish ___.”

One answer: “what a defense does under specified conditions; survival requires a defined function; the variant's effect or an inhibitor's response.”

## Takeaway

**Measure direction, attribute the mechanism, and test the specific requirement before calling a defense a vulnerability.**

**Next:** [Oxidative metabolism and stress](/wiki/education/molecular-profiling/evee-pathways/05-oxidative-metabolism-and-stress).

## Sources and scope

Source check: October 9, 2026; expert and learner review pending. Every culture and card is fictional. Model mechanisms do not provide matched therapies or combination recommendations.

- [Kobayashi et al., 2004: KEAP1 as an adaptor in CUL3-dependent NRF2 turnover](https://pubmed.ncbi.nlm.nih.gov/15282312/).
- [Vartanian et al., 2016: brusatol and global protein synthesis](https://pubmed.ncbi.nlm.nih.gov/26711467/).
- [Yang et al., 2014: GPX4 and ferroptotic death](https://pubmed.ncbi.nlm.nih.gov/24439385/).
- [Bersuker et al., 2019: the parallel FSP1 defense](https://pubmed.ncbi.nlm.nih.gov/31634900/).
- [Filippakopoulos et al., 2010: BET pocket inhibition](https://pubmed.ncbi.nlm.nih.gov/20871596/).
- [Shu et al., 2016: BET-inhibitor resistance with retained BRD4 dependence in models](https://pubmed.ncbi.nlm.nih.gov/26735014/).
