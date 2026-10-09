---
title: "Oxidative metabolism and stress: energy, damage, and dependence"
type: "guide-lesson"
guide: "pathway-mechanisms"
step: 5
minutes: 12
objectives: ["Separate respiratory RNA, oxygen consumption, and ATP-linked respiration.", "Distinguish mitochondrial energy production, general ROS, and ferroptosis.", "Use normalization and functional controls to test a metabolic dependence."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/metabolism-and-stress/oxidative-phosphorylation]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1]]", "[[wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis]]", "[[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq]]"]
sensitive: false
tags: ["education", "pathway-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Oxidative metabolism and stress: energy, damage, and dependence

**A busy energy system, a strong stress defense, and a vulnerable membrane are different biological states. Each needs a measurement suited to the question.**

**Before you start:** [Oxidative phosphorylation](/wiki/education/concepts/cancer-biology/metabolism-and-stress/oxidative-phosphorylation) couples electron transport to ATP production. [NRF2–KEAP1](/wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1) regulates stress defenses. [Ferroptosis](/wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis) concerns uncontrolled lipid damage. [Bulk RNA sequencing](/wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq) measures a tissue mixture of messages.

## Where this step sits

This final lesson in [the pathway library](/wiki/education/molecular-profiling/evee-proposed-pathways) brings the amount–flow–dependence distinction to metabolism. Then return to [the variant-to-drug guide](/wiki/education/guides/from-variant-to-drug/index) to check clinical evidence.

## The workshop needs power and protection

A workshop can use more power while improving its fire protection. These are related changes, but they answer different questions. A power bill does not tell you whether the workshop will stop functioning when one generator is removed.

**Oxidative phosphorylation**, often abbreviated OXPHOS, uses electron transport and a gradient across the inner mitochondrial membrane to make **adenosine triphosphate (ATP)**. ATP powers many cellular processes. **Glycolysis** is another route that processes glucose and can produce ATP. Cells can use both routes and can adapt their balance.

**Reactive oxygen species (ROS)** are reactive oxygen-containing molecules. They can arise from mitochondrial reactions and from other sources. Stress-defense systems limit their effects. A general ROS signal does not show where the molecules came from, which cellular material was damaged, or which death mechanism occurred.

Ferroptosis is more specific: iron-dependent lipid peroxidation overwhelms protective systems. It cannot be diagnosed from a respiratory RNA program or a general ROS signal alone.

## A message, a rate, and a requirement

| Evidence layer | The question it answers | What remains open |
|---|---|---|
| Respiratory gene-expression program | Which selected messages are prominent? | Cell origin, respiration rate, and dependence |
| Oxygen-consumption rate | How fast does this model consume oxygen under the assay conditions? | ATP coupling, fuel source, and survival importance |
| ATP-linked respiratory estimate | Which respiratory component changes after a controlled ATP-synthase perturbation? | Compensation and selective survival effects |
| Controlled functional experiment | Does disrupting a defined function affect survival? | Patient exposure, toxicity, and benefit |

Mitochondrial **respiration** consumes oxygen through electron transport. Some oxygen consumption is not mitochondrial, and some mitochondrial respiration is not coupled to ATP production. A sequence of controlled perturbations helps separate these components. Baseline oxygen use alone cannot do that.

## A worked example: more cells or more respiration?

Researchers study fictional cultures A and B. A consumes more oxygen per well. But A also contains more viable cells. After normalization to viable-cell number, their baseline rates are similar.

| Assay question | Fictional observation | Careful interpretation |
|---|---|---|
| Total oxygen use | Higher in A | Cell number may explain the difference. |
| Rate per viable cell | Similar in A and B | No large baseline difference in this condition. |
| After ATP-synthase inhibition | A falls more than B | ATP-linked components may differ. |
| After a prolonged respiratory perturbation | A maintains ATP and growth | Compensation remains possible. |

The last result is particularly useful. Even if a respiratory component differs, A has not demonstrated a survival dependence under the tested condition. Follow-up experiments could examine compensatory glycolysis and fuel use.

Measure growth and death separately. A lower ATP-based viability signal can reflect less ATP per living cell rather than fewer cells. Direct cell counts and an independent health readout reduce that ambiguity.

## Follow the proposed mechanism

Suppose a perturbation increases a general ROS readout. The next question is what changed before cells died. Did respiration fall? Did ATP fall? Did membrane-lipid oxidation rise? Could an independent genetic perturbation reproduce the pattern?

A matched restoration or rescue can support a proposed cause, but it must fit the question. A general antioxidant rescue can reduce several kinds of damage. A ferroptosis interpretation becomes stronger with lipid-damage measurements, iron dependence, appropriate lipid-radical rescue, and independent controls. [Dixon 2012](https://pubmed.ncbi.nlm.nih.gov/22632970/), [Yang 2014](https://pubmed.ncbi.nlm.nih.gov/24439385/).

## What can go wrong at this step

Mixed tissue can make a respiratory program appear to belong to malignant cells when another population contributes. Different RNA preparation and analysis methods can also distort comparisons. A pathway rank is relative to its reference and method; it is not a calibrated dependency score.

Culture fuel, oxygen, cell density, and measurement timing change metabolic behavior. Document them and use relevant comparators. Do not generalize a single supply condition to every tumor environment.

Finally, extracellular acidification is often treated as pure glycolysis. Respiratory carbon dioxide can contribute to that acidification. Quantitative interpretation needs to account for both sources. [Mookerjee 2015](https://pubmed.ncbi.nlm.nih.gov/25449966/).

## Try it

A high respiratory RNA score is followed by a decline in an ATP-based assay after a compound. No direct cell count or respiration assay was done. What can be concluded?

<details>
<summary>Show the answer</summary>

The sample has a relative RNA-program observation, and the ATP-related signal fell in the tested model. Neither establishes high respiratory flux or selective cell death. Direct respiration, viable-cell normalization, independent health measurements, and target controls would clarify the chain.

</details>

## Explain it back

“RNA measures ___; oxygen consumption measures ___; a dependence claim needs ___.”

One possible answer: “captured messages; a rate under specified conditions; a controlled functional effect attributed to the proposed process.”

## Takeaway

**Measure energy production, stress damage, and survival dependence separately before combining them into a drug hypothesis.**

**Next:** [Check clinical evidence and access](/wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access), or return to [the supporting library](/wiki/education/molecular-profiling/evee-proposed-pathways).

## Sources and scope

Source check: 2026-10-09. General education; all worked scenarios and numerical examples are fictional. Mechanistic experiments describe their tested systems, not a treatment-selection rule. Expert and learner review pending.

- [Racker and Stoeckenius 1974: proton-driven ATP formation](https://pubmed.ncbi.nlm.nih.gov/4272126/).
- [Mookerjee 2015: respiratory and glycolytic acid production](https://pubmed.ncbi.nlm.nih.gov/25449966/).
- [Mookerjee 2015: measuring extracellular acid production](https://pubmed.ncbi.nlm.nih.gov/26709455/).
- [Dixon 2012: iron-dependent ferroptosis](https://pubmed.ncbi.nlm.nih.gov/22632970/).
- [Yang 2014: lipid protection by GPX4](https://pubmed.ncbi.nlm.nih.gov/24439385/).
