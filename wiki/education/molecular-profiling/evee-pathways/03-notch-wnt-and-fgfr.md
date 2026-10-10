---
title: "Notch, Wnt, and FGFR: locate the signal before choosing a target"
type: "guide-lesson"
guide: "pathway-mechanisms"
step: 3
minutes: 12
objectives: ["Compare contact-dependent Notch, canonical Wnt, and receptor-kinase signaling.", "Identify the sending cell, receiving cell, and intervention point.", "Separate ligand dependence, target engagement, and tumor response."]
prerequisites: ["[[wiki/education/concepts/biology-basics/signaling/ligand-and-receptor]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/notch-signaling]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/wnt-beta-catenin]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/receptor-tyrosine-kinases]]"]
sensitive: false
tags: ["education", "pathway-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Notch, Wnt, and FGFR: locate the signal before choosing a target

**Locate the active step before judging an intervention. A changed signal still needs a separate test of tumor dependence.**

**Before you start:** [Ligands and receptors](/wiki/education/concepts/biology-basics/signaling/ligand-and-receptor) separates binding from signaling. [Notch](/wiki/education/concepts/cancer-biology/signaling-pathways/notch-signaling) commonly carries a contact-dependent message. [Canonical Wnt](/wiki/education/concepts/cancer-biology/signaling-pathways/wnt-beta-catenin) regulates β-catenin stability. [Receptor tyrosine kinases](/wiki/education/concepts/cancer-biology/signaling-pathways/receptor-tyrosine-kinases) connect surface signals to protein phosphorylation.

## Where this step sits

This supporting lesson in [the pathway library](/wiki/education/molecular-profiling/evee-proposed-pathways) practices the biological-consequence step of [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index).

## Three circuits ask different questions

Think of a workshop receiving an instruction. A neighbor can deliver it at the door, a message can arrive from elsewhere, or a surface sensor can activate machinery inside. Knowing the equipment helps you choose a useful test. The analogy does not make the three molecular circuits interchangeable.

| Circuit | Locate the active step | A tempting overread |
|---|---|---|
| Notch | Sending cell, receptor cleavage and received nuclear signal | Ligand abundance proves tumor-cell signaling |
| Canonical Wnt | β-catenin regulation and continued ligand dependence | Total β-catenin proves a secretion inhibitor will work |
| Fibroblast growth factor receptor (FGFR) | Exact receptor, phosphorylation and downstream response | Any FGFR alteration predicts any FGFR inhibitor |

The concept pages explain the machinery. Here, your job is to keep amount, activity and dependence separate. A variant may motivate a question about the circuit, but its effect cannot be assigned from its gene name.

## Worked example: three fictional experiment cards

All observations below are fictional and assume suitable assay controls. They are reasoning examples, not treatment-selection criteria.

**Card A: a Notch sender near vessels.** Spatial staining finds Delta-like ligand 4 (**DLL4**) mainly in vessel cells. Tumor cells have total Notch receptor but little detectable nuclear Notch intracellular domain (**NICD**). You have found a sender and receptor amount. You have not established a received signal in the malignant cells. A useful next test identifies the receiver and receptor processing, with a positive staining control.

Now suppose a controlled contact experiment reduces nuclear NICD but leaves tumor-cell growth unchanged. That supports a pathway output effect. It has not shown a growth requirement. Contact changes could also affect other signals, so an independent perturbation matters.

**Card B: two Wnt cultures.** Both show nuclear β-catenin and a responsive transcript. Researchers block Porcupine (**PORCN**), the enzyme supporting Wnt-ligand modification and secretion, and confirm less ligand secretion. Culture A loses the nuclear response; culture B retains it through an experimentally established downstream regulatory defect.

A supports a ligand-dependent route. B can bypass the upstream intervention. If A keeps growing after its signal falls, the experiment has not demonstrated growth dependence. Target engagement and tumor response were also distinct measurements in the primary WNT974 phase I study. Its human findings cannot be used as a response prediction for these fictional cultures.

**Card C: an FGFR4 sequence change.** Researchers compare a variant receptor with a reference receptor at matched expression. Total protein is similar, but neither receptor shows increased phosphorylation in the tested condition. This does not support activation under that condition. It also does not prove the variant is harmless in every environment.

Known activating kinase-domain FGFR4 mutations were studied in rhabdomyosarcoma models. An uncharacterized alteration, a different protein domain and another cancer are additional evidence gaps. Testing a drug that hits a related receptor would not resolve them.

## Choose the next experiment by the unresolved claim

| Gap | Useful next evidence | What remains separate |
|---|---|---|
| Cell of origin | Spatial localization or appropriately separated populations | A bulk signal alone cannot assign a tumor-cell mechanism |
| Activity | A validated proximal readout and expected downstream change | Protein amount is insufficient |
| Attribution | Matched genetic perturbation, reference restoration and independent controls | A broad compound may have other effects |
| Dependence | Growth and death after the attributed perturbation | Clinical benefit, exposure and normal-tissue effects |

“Target engagement” needs a definition here. Suppressing ligand secretion, changing receptor phosphorylation and reducing a downstream transcript are different readouts. Report the step actually measured. Do not call every downstream change proof that a compound bound its intended protein.

## What can go wrong at this step

A sending-cell signal can be assigned to the wrong receiver. A downstream alteration can make an upstream block irrelevant. A compound can lower a readout through broad toxicity, while another drug sharing its family label has a different target profile.

Normal tissues also use these circuits. Even a well-supported tumor-model dependence leaves an exposure and safety question before patient benefit can be assessed.

## Try it

A fictional sample has high total β-catenin. A researcher proposes a Wnt-secretion inhibitor. Which two biological questions come first?

<details>
<summary>Show the answer</summary>

Is canonical nuclear signaling active in the relevant malignant cells? Total β-catenin includes its cell-junction role. Does the active signal still require secreted Wnt ligands? A downstream change could bypass secretion. Functional selectivity and clinical evidence would follow.

</details>

## Explain it back

“Locate ___, measure the expected ___, and test whether ___.”

One answer: “the sender, receiver and active step; biological change; the relevant cells depend on it.”

## Takeaway

**Fit the intervention to the active step, then test whether changing that step matters to survival.**

**Next:** [Stress defenses and chromatin readers](/wiki/education/molecular-profiling/evee-pathways/04-cul3-nrf2-ferroptosis-and-bet).

## Sources and scope

Source check: October 9, 2026; expert and learner review pending. All experiment cards are fictional. Primary findings concern their studied systems; no exact-variant drug match or treatment recommendation is supplied.

- [Mumm et al., 2000: ligand-regulated Notch cleavage](https://pubmed.ncbi.nlm.nih.gov/10882062/).
- [Tamai et al., 2000: the Wnt co-receptor mechanism](https://pubmed.ncbi.nlm.nih.gov/11029007/).
- [Takada et al., 2006: PORCN and Wnt secretion](https://pubmed.ncbi.nlm.nih.gov/17141155/).
- [Taylor et al., 2009: specified activating FGFR4 mutations in rhabdomyosarcoma models](https://pubmed.ncbi.nlm.nih.gov/19809159/).
- [Rodon et al., 2021: separate tissue pathway and clinical response measurements](https://pubmed.ncbi.nlm.nih.gov/33941878/).
