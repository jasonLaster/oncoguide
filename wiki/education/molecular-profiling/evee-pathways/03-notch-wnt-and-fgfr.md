---
title: "Notch, Wnt, and FGFR: locate the signal before choosing a target"
type: "guide-lesson"
guide: "pathway-mechanisms"
step: 3
minutes: 12
objectives: ["Compare contact-dependent Notch, canonical Wnt, and receptor-kinase signaling.", "Identify the sending cell, receiving cell, and intervention point.", "Separate ligand dependence, target engagement, and tumor response."]
prerequisites: ["[[wiki/education/concepts/biology-basics/signaling/ligand-and-receptor]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/notch-signaling]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/wnt-beta-catenin]]"]
sensitive: false
tags: ["education", "pathway-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Notch, Wnt, and FGFR: locate the signal before choosing a target

**A signal's source and position in the circuit determine what an intervention can change. Receptor presence or a gene name does not establish a tumor dependence.**

**Before you start:** [Ligands and receptors](/wiki/education/concepts/biology-basics/signaling/ligand-and-receptor) describes sending and sensing signals. [Notch](/wiki/education/concepts/cancer-biology/signaling-pathways/notch-signaling) commonly carries a message between neighbors. [Canonical Wnt](/wiki/education/concepts/cancer-biology/signaling-pathways/wnt-beta-catenin) controls β-catenin stability and gene regulation.

## Where this step sits

This is a supporting comparison in [the pathway library](/wiki/education/molecular-profiling/evee-proposed-pathways). Use it when [the variant-to-drug guide](/wiki/education/guides/from-variant-to-drug/index) asks which biological consequence was actually measured.

## Ask who is speaking and who is listening

Think of three ways a workshop receives an instruction: a neighbor delivers it at the door, a message arrives from farther away, or a surface sensor activates machinery inside. All can influence behavior. They do so through different equipment.

Notch commonly begins when a ligand-bearing cell contacts a receptor-bearing neighbor. Sequential cutting of the receptor releases the **Notch intracellular domain (NICD)**. This fragment can enter the nucleus and help regulate transcription. **Gamma-secretase** performs a membrane cutting step; it is not the ligand itself. [Schroeter 1998](https://pubmed.ncbi.nlm.nih.gov/9620803/), [De Strooper 1999](https://pubmed.ncbi.nlm.nih.gov/10206645/).

Wnt ligands are secreted signals. In the canonical route, receptor signaling changes β-catenin destruction. More β-catenin can then participate in nuclear regulation. The enzyme **PORCN** supports ligand modification and secretion. Blocking secretion acts upstream of the intracellular control system. [Liu 2002](https://pubmed.ncbi.nlm.nih.gov/11955436/).

**Fibroblast growth factor receptors (FGFRs)** are receptor tyrosine kinases. A kinase adds phosphate groups to proteins; a tyrosine kinase acts on the amino acid tyrosine. Receptor activation can send signals through several intracellular branches. FGFR family members and alterations are distinct. Evidence about one member or allele cannot be assigned to all of them.

## Find the relevant step

| Circuit | An activity question | Why the intervention point matters |
|---|---|---|
| Notch | Is the receptor being cleaved in the receiving cells? | Ligand blockade and cleavage blockade affect different steps. |
| Canonical Wnt | Is β-catenin signaling active and still ligand-dependent? | A downstream change may bypass secretion blockade. |
| FGFR | Is a particular receptor active and contributing to survival? | A compound must engage that receptor at an interpretable exposure. |

“Engage” means change the intended target or process. Engagement does not establish that the changed process is essential to survival.

## A worked example: two Wnt cultures

Two fictional cultures show nuclear β-catenin and a pathway-responsive transcript. The first depends on signals supplied by neighboring cells. The second has a downstream defect in β-catenin regulation.

Researchers block ligand secretion and confirm that secretion falls. The first culture loses its nuclear signal. The second keeps it. That difference is biologically coherent: the second culture can bypass the upstream intervention.

Researchers next measure growth. Suppose the first culture continues growing despite reduced signaling. The experiment supports target engagement, but it has not shown growth dependence. This distinction also appears in a clinical phase I study of WNT974, which measured tissue pathway effects and patient response separately. [Rodon 2021](https://pubmed.ncbi.nlm.nih.gov/33941878/).

## The cell population can change the story

A ligand detected near vessels may be supplied by vessel cells. A signal measured in a mixed sample may come from stromal or immune cells. Before calling it a malignant-cell dependency, identify the receiving cells and the relevant output.

A fictional FGFR4 missense variant creates another uncertainty. A missense variant changes one amino acid. Some FGFR4 alterations have been functionally characterized in rhabdomyosarcoma models, but that does not establish the effect of every FGFR4 variant in another disease. [Taylor 2009](https://pubmed.ncbi.nlm.nih.gov/19809159/).

A useful next experiment compares the specific variant with a matched reference receptor. It checks receptor phosphorylation, downstream signals, expression level, and survival. Independent genetic and pharmacologic tests can strengthen attribution. A gene's appearance in an important pathway is only the starting point.

## What can go wrong at this step

A protein can be mistaken for a whole circuit. A DLL4 ligand alteration does not mimic an antibody blocking DLL4, and it does not prove Notch cleavage increased. Similarly, a secretion inhibitor cannot be assumed to overcome ligand-independent downstream signaling.

Another mistake is treating reduced signaling as proof of selective cancer killing. Developmental circuits also support normal tissues. Mechanism, tumor dependence, and a tolerable clinical effect each need evidence.

## Try it

A researcher sees high total β-catenin in tissue and proposes a Wnt-secretion inhibitor. What two questions should come before a response prediction?

<details>
<summary>Show the answer</summary>

First, is canonical nuclear signaling active in the relevant malignant cells? Total β-catenin can include its cell-junction role. Second, does that signaling depend on secreted Wnt ligands? A downstream alteration could bypass secretion. Growth and selectivity testing would follow.

</details>

## Explain it back

“To connect a signal to an intervention, locate ___, measure ___, and test whether ___.”

One possible answer: “the sender, receiver, and active step; the expected biochemical change; the relevant cells depend on that step.”

## Takeaway

**An intervention must fit the active step, and changing that step must matter to the tumor before a drug-response claim follows.**

**Next:** [Stress defenses, ferroptosis, and chromatin readers](/wiki/education/molecular-profiling/evee-pathways/04-cul3-nrf2-ferroptosis-and-bet).

## Sources and scope

Source check: 2026-10-09. General education; all worked scenarios and numerical examples are fictional. Mechanistic experiments describe their tested systems, not a treatment-selection rule. Expert and learner review pending.

- [Schroeter 1998: Notch intracellular-domain release](https://pubmed.ncbi.nlm.nih.gov/9620803/).
- [De Strooper 1999: gamma-secretase-like Notch cleavage](https://pubmed.ncbi.nlm.nih.gov/10206645/).
- [Liu 2002: β-catenin phosphorylation and degradation](https://pubmed.ncbi.nlm.nih.gov/11955436/).
- [Taylor 2009: selected activating FGFR4 mutations in rhabdomyosarcoma models](https://pubmed.ncbi.nlm.nih.gov/19809159/).
- [Rodon 2021: WNT974 phase I study](https://pubmed.ncbi.nlm.nih.gov/33941878/).
