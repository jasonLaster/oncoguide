---
title: "Oxidative metabolism and stress: energy, damage, and dependence"
type: "guide-lesson"
guide: "pathway-mechanisms"
step: 5
minutes: 12
objectives: ["Separate respiratory RNA, oxygen consumption, and ATP-linked respiration.", "Distinguish mitochondrial energy production, general ROS, and ferroptosis.", "Use normalization and functional controls to test a metabolic dependence.", "Distinguish lactate-producing metabolism, energy sensing and folding-stress responses."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/metabolism-and-stress/oxidative-phosphorylation]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1]]", "[[wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis]]", "[[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq]]", "[[wiki/education/concepts/cancer-biology/metabolism-and-stress/reactive-oxygen-species]]"]
sensitive: false
tags: ["education", "pathway-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Oxidative metabolism and stress: energy, damage, and dependence

**Energy production, reactive chemistry, stress protection and lipid-driven death are different processes. Match each question to its own measurement.**

**Before you start:** [Oxidative phosphorylation](/wiki/education/concepts/cancer-biology/metabolism-and-stress/oxidative-phosphorylation) links electron transport to adenosine triphosphate (**ATP**) production. [Reactive oxygen species (ROS)](/wiki/education/concepts/cancer-biology/metabolism-and-stress/reactive-oxygen-species) names distinct chemicals and their readout limits. [NRF2–KEAP1](/wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1) regulates stress defenses. [Ferroptosis](/wiki/education/concepts/cancer-biology/cell-death-and-survival/ferroptosis) concerns iron-dependent lipid damage causing death.

## Where this step sits

This final supporting lesson in [the pathway library](/wiki/education/molecular-profiling/evee-proposed-pathways) practices amount, rate and dependence. Then return to [the variant-to-drug guide](/wiki/education/guides/from-variant-to-drug/index) for clinical evidence and access.

## Keep the engine, sparks and protection separate

A workshop can use more power while improving its fire protection. Its power bill cannot tell you whether it will stop functioning when one generator is removed. The analogy helps organize questions; it does not turn all cellular oxidation into literal fire.

| Workshop picture | Biological question | Suitable evidence |
|---|---|---|
| Engine | Is oxidative phosphorylation producing energy? | Respiration with coupling analysis and appropriate ATP measurements |
| Sparks | Which reactive species changed, where and when? | A validated species/compartment-sensitive readout |
| Fire control | Is a stress-defense program active and useful? | Regulatory outputs followed by attributed perturbation |
| Membrane fire | Did iron-dependent lipid damage cause death? | Lipid damage, timing, iron dependence and relevant rescue |

Respiratory RNA belongs to an amount layer: captured messages. [Bulk RNA sequencing](/wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq) also averages multiple cell populations. More respiratory transcripts do not establish a higher rate in malignant cells, or a survival requirement.

## Ask three additional questions about adaptation

A metabolic program is easier to read when you name the process it describes:

| Question | Concept to use | What the observation cannot establish |
|---|---|---|
| Does glucose become lactate while oxygen is available? | [Warburg effect](/wiki/education/concepts/cancer-biology/metabolism-and-stress/warburg-effect) | Absent mitochondrial respiration or a survival dependence |
| Is the cell adjusting work to its energy state? | [AMP-activated protein kinase (AMPK)](/wiki/education/concepts/cancer-biology/metabolism-and-stress/nutrient-sensing-ampk) | A universal growth or death outcome |
| Is protein-folding demand stressing local capacity? | [Endoplasmic reticulum stress and the unfolded protein response (UPR)](/wiki/education/concepts/cancer-biology/metabolism-and-stress/er-stress-and-unfolded-protein-response) | Failed adaptation or lethal stress |

The [hypoxia concept](/wiki/education/concepts/cancer-biology/tumor-microenvironment/hypoxia) adds the oxygen-supply question. Lactate release does not establish low oxygen: it can occur with oxygen available. Likewise, a hypoxia-associated RNA signature is a response-pattern measurement, not an exact oxygen reading.

## Worked example: normalize before comparing

All numbers below are fictional. They illustrate reasoning, rather than assay cutoffs or expected tumor behavior. Assume independently confirmed viable-cell numbers and suitable technical controls.

| Observation | Culture A | Culture B |
|---|---|---|
| Viable cells per well | 30,000 | 20,000 |
| Baseline oxygen consumption | 180 picomoles/minute | 120 picomoles/minute |
| Baseline per 10,000 viable cells | 60 picomoles/minute | 60 picomoles/minute |
| After ATP-synthase inhibition, per 10,000 cells | 30 picomoles/minute | 40 picomoles/minute |

A initially looks busier because the well contains more cells. After normalization, the baseline rates match. Their raw inhibitor-sensitive differences are 30 and 20 picomoles/minute per 10,000 cells.

Under appropriate assay conditions, those differences help estimate ATP-linked respiration. They are not ATP-production rates. A complete calculation needs assumptions about coupling and other respiratory components, plus the method's corrections. Published ATP-rate equations have been corrected; specify the version instead of copying a convenient formula.

Neither culture has established a survival dependence. Measure compensation, direct growth and death over time, with relevant control cells. A higher estimated ATP-linked component need not mean greater susceptibility to disruption.

## Worked example: an ATP signal is not a cell count

A fictional compound lowers Culture A's ATP-based luminescence signal. Direct viable-cell counts remain stable over the same short interval. The result supports less measured ATP-related signal per living population. It does not establish that the same percentage of cells died.

Longer follow-up could show recovery, slower growth or death. Independent target measurements and genetic controls help determine which process caused the change. A respiratory compound can also have effects outside the proposed pathway.

Now suppose a peroxide-sensitive reporter increases. Validate its chemical response and compartment first. A general oxidation-sensitive dye cannot identify every ROS species or establish mitochondrial origin. The [ROS concept](/wiki/education/concepts/cancer-biology/metabolism-and-stress/reactive-oxygen-species) explains why reporter chemistry matters.

## Worked example: several stress responses can coexist

Now suppose the same fictional culture releases more lactate under documented oxygen conditions and continues consuming oxygen. An AMPK substrate becomes more phosphorylated, and the fraction of spliced XBP1 RNA increases. **XBP1**, X-box binding protein 1, is one branch readout of the UPR. Direct viable-cell counts stay stable.

There is no contradiction. Lactate production and respiration can coexist. The phosphorylation and splice-form measurements support particular response observations if their controls hold. They do not establish the upstream trigger, whole-pathway activity or a death mechanism. AMPK and the UPR can support adaptation in some settings.

To connect the chain, measure energy state and folding-related outputs, then perturb the proposed branch independently. Track growth and death over time. The useful sentence is “these responses coexist under these conditions,” until experiments establish which response causes which consequence.

## Test the proposed consequence

If the claim is energy dependence, follow ATP supply, compensatory pathways and survival. If it is lipid-driven death, follow lipid oxidation, iron dependence and suitable rescue. Do not use one kind of rescue to answer every question.

A general antioxidant can alter several damage and signaling processes. A ferroptosis interpretation becomes stronger when independent measurements converge on iron-dependent lipid damage preceding death. It still leaves selectivity, normal-tissue exposure and patient benefit unanswered.

## What can go wrong at this step

Cell composition can explain a tissue RNA signal. Cell number, fuel, oxygen, density and timing can explain a culture difference. Document these conditions before assigning a biological program.

Extracellular acidification is also not pure glycolysis: carbon dioxide from respiration can acidify the medium. The original measurement method separates these contributions. Likewise, a relative pathway rank depends on its reference and analysis; it is not a calibrated dependence score.

A final shortcut is joining high respiration, high defenses and a ROS rise into one treatment prediction. These findings can coexist, but the causal links and clinical relevance still need evidence.

## Try it

A fictional sample has a high respiratory RNA score. A compound lowers its ATP-based signal. No direct respiration or cell-count assay was done. What is established?

<details>
<summary>Show the answer</summary>

A relative RNA-program observation and a lower ATP-related readout under the tested conditions. Neither establishes high respiratory flux or selective death. Viable-cell normalization, respiration, independent health measurements and target controls would clarify the chain.

</details>

## Explain it back

“RNA measures ___; oxygen consumption measures ___; dependence needs ___.”

One answer: “captured messages; a rate under specified conditions; an attributed functional effect on survival.”

## Takeaway

**Keep energy, reactive chemistry, protection and death separate until experiments connect them.**

**Next:** [Check clinical evidence and access](/wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access), or return to [the supporting library](/wiki/education/molecular-profiling/evee-proposed-pathways).

## Sources and scope

Source check: October 9, 2026; expert and learner review pending. All cultures and numbers are fictional. Research rates, ranks and rescue results do not supply treatment recommendations. The linked Warburg, AMPK, UPR and hypoxia concepts provide their primary mechanism sources; the references below support this lesson's respiratory calculation and damage-readout examples.

- [Racker and Stoeckenius, 1974: proton-driven ATP formation in a reconstituted system](https://pubmed.ncbi.nlm.nih.gov/4272126/).
- [Mookerjee et al., 2015: respiratory and glycolytic contributions to acid production](https://pubmed.ncbi.nlm.nih.gov/25449966/).
- [Mookerjee et al., 2017: estimating ATP-production rates](https://pubmed.ncbi.nlm.nih.gov/28270511/).
- [Mookerjee et al., 2018: correction to that calculation method](https://pubmed.ncbi.nlm.nih.gov/30097494/).
- [Pak et al., 2020: a compartment-sensitive peroxide reporter](https://pubmed.ncbi.nlm.nih.gov/32130885/).
- [Dixon et al., 2012: iron-dependent ferroptotic death](https://pubmed.ncbi.nlm.nih.gov/22632970/).
