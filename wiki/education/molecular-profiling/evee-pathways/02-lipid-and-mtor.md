---
title: "Lipid supply and mTOR: measuring resource control"
type: "guide-lesson"
guide: "pathway-mechanisms"
step: 2
minutes: 12
objectives: ["Trace SCAP–SREBP regulation from sterol sensing to a nuclear regulator.", "Separate pathway-related RNA, biochemical activity, and growth dependence.", "Explain why culture supply and compensation change a metabolic experiment."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/metabolism-and-stress/cholesterol-and-srebp]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/pi3k-akt-mtor]]", "[[wiki/education/concepts/cancer-biology/cell-death-and-survival/autophagy]]"]
sensitive: false
tags: ["education", "pathway-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Lipid supply and mTOR: measuring resource control

**A cell's resource-control program tells you how it is responding to supply. It does not reveal which resource is indispensable or which drug will help.**

**Before you start:** [SCAP–SREBP](/wiki/education/concepts/cancer-biology/metabolism-and-stress/cholesterol-and-srebp) regulates lipid supply. [PI3K–AKT–mTOR](/wiki/education/concepts/cancer-biology/signaling-pathways/pi3k-akt-mtor) coordinates growth and resources. [Autophagy](/wiki/education/concepts/cancer-biology/cell-death-and-survival/autophagy) explains a recycling output influenced by growth signals.

## Where this step sits

This supporting lesson follows recycling in [the pathway library](/wiki/education/molecular-profiling/evee-proposed-pathways). It helps test a biological consequence in [the variant-to-drug guide](/wiki/education/guides/from-variant-to-drug/index).

## Two control systems, different questions

Picture a workshop deciding whether to order supplies and whether to begin a large build. A supply sensor and a production controller can interact, but their readings mean different things.

Cells obtain lipids through production, uptake, and recycling. Cholesterol is one membrane component. **SCAP** helps regulate transport of **sterol regulatory element-binding proteins (SREBPs)** from the endoplasmic reticulum to the Golgi when sterol conditions permit it. Processing releases a fragment that can act in the nucleus. The SREBP family regulates overlapping lipid programs; SREBP-2 is especially associated with cholesterol supply. [Radhakrishnan 2008](https://pmc.ncbi.nlm.nih.gov/articles/PMC2652870/).

The relevant signal is more specific than “total cellular cholesterol.” Sterol location and processing state matter. Measuring nuclear SREBP and its precursor can therefore add information beyond a list of lipid-related RNA messages.

## Growth signaling adds another layer

**mTOR** is a kinase, an enzyme that adds phosphate groups to proteins. It works in distinct complexes. mTORC1 regulates protein production and parts of autophagy initiation. mTORC2 contributes to AKT regulation and other functions. A compound's effects on one complex do not automatically describe the other. [Sarbassov 2005](https://pubmed.ncbi.nlm.nih.gov/15718470/), [Ganley 2009](https://pubmed.ncbi.nlm.nih.gov/19258318/).

Energy state supplies another input. [AMP-activated protein kinase (AMPK)](/wiki/education/concepts/cancer-biology/metabolism-and-stress/nutrient-sensing-ampk) can restrain mTORC1 through defined molecular steps. That restraint can reduce expensive cellular work. It does not make AMPK activation a universal death signal: stress adaptation and slower growth can coexist.

A **phosphoprotein** is a protein carrying a phosphate modification. Reports may describe phosphorylated S6, 4E-BP1, or AKT. Each is a named readout at a specified site and time. None is a universal gauge for the entire network. Feedback can also increase one branch while another falls.

Similarly, [bulk RNA sequencing](/wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq) measures a combined tissue profile of messages. A gene-set score summarizes selected messages relative to a method and comparator. It is not a direct measurement of lipid synthesis, mTOR kinase activity, or drug response.

## A worked example: changing the pantry

Researchers study a fictional cancer culture under lipid-poor and lipid-rich conditions. They measure nuclear SREBP-2, new lipid synthesis, and viable-cell number after a defined synthesis perturbation.

| Question | Lipid-poor medium | Lipid-rich medium |
|---|---|---|
| Is the regulator engaged? | Nuclear SREBP-2 increases | The increase is smaller |
| Does the perturbation reduce new synthesis? | Yes | Yes |
| Does growth slow? | Yes | Little change |
| What might explain the difference? | External supply cannot compensate adequately | Uptake may compensate |

These are fictional observations. They support a supply-dependent hypothesis and biochemical target engagement. To attribute compensation to uptake, researchers should measure uptake and test that route. The medium comparison alone cannot name every contributing metabolite.

Now an mTORC1-directed perturbation reduces an expected phosphoprotein readout in both conditions. Growth remains unchanged in the lipid-rich condition. This shows why engaging a signaling target and finding a survival bottleneck are distinct steps. If AMPK-linked phosphorylation also increases, that adds an energy-response hypothesis; it does not identify the trigger or prove that the response caused death.

## A rescue experiment needs a precise question

A **rescue** supplies or restores something expected to reverse the proposed effect. It can strengthen a causal explanation, but what it supplies matters. Statins inhibit HMG-CoA reductase in the mevalonate pathway. That pathway supplies cholesterol and other products. Restoring mevalonate can rescue several downstream functions, so it does not uniquely prove cholesterol depletion caused the outcome.

The useful question is narrower: “Which missing product, changed process, and cell population explain this response?” A matched genetic perturbation, direct metabolite measurements, and selective supplementation can help. Clinical exposure and patient benefit are later questions.

## What can go wrong at this step

A single RNA rank may combine genes with different roles or cell origins. Comparing unlike sample preparation and analysis methods can add another distortion. Measure the proposed state directly before declaring a pathway active.

Culture media can also create a dependence that differs from the tumor environment. Repeat key conclusions under relevant supply conditions. Describe that limitation rather than treating an artificial condition as a universal tumor property.

Finally, a sequence change in SCAP or MTOR can have several consequences. It may alter regulation, reduce function, or have little effect. The protein name does not establish the direction.

## Try it

A compound lowers lipid synthesis. Adding mevalonate restores growth. May the researcher conclude that the cells died specifically because cholesterol was missing?

<details>
<summary>Show the answer</summary>

No. The experiment supports a contribution from the mevalonate pathway. Mevalonate feeds more than cholesterol production. Direct measurements and more specific rescue conditions are needed to identify the limiting product.

</details>

## Explain it back

“The RNA program suggests ___; the biochemical assay tests ___; the growth experiment asks ___.”

One possible answer: “which messages are prominent; whether a defined process changed; whether that change limits growth under these supply conditions.”

## Takeaway

**A resource program becomes a dependence claim only after supply, compensation, and selective functional response are tested.**

**Next:** [Notch, Wnt, and FGFR signaling](/wiki/education/molecular-profiling/evee-pathways/03-notch-wnt-and-fgfr).

## Sources and scope

Source check: 2026-10-09. General education; all worked scenarios and numerical examples are fictional. Mechanistic experiments describe their tested systems, not a treatment-selection rule. Expert and learner review pending.

- [Radhakrishnan 2008: local sterol control of SREBP-2 transport](https://pmc.ncbi.nlm.nih.gov/articles/PMC2652870/).
- [Lange 2008: rapid cholesterol-homeostasis responses](https://pubmed.ncbi.nlm.nih.gov/18024962/).
- [Sarbassov 2005: mTOR complex 2 and AKT phosphorylation](https://pubmed.ncbi.nlm.nih.gov/15718470/).
- [Ganley 2009: mTOR and autophagy-initiation machinery](https://pubmed.ncbi.nlm.nih.gov/19258318/).
- [Gwinn et al., 2008: AMPK phosphorylation of raptor and mTORC1 restraint](https://pubmed.ncbi.nlm.nih.gov/18439900/).
