---
title: "Ligands and receptors"
type: "concept"
domain: "biology-basics/signaling"
summary: "A ligand is a molecule that binds a particular partner; a receptor is a protein that senses a signal and can change a cell\u2019s behavior."
glossary_anchor: "ligand"
aliases: ["ligand", "receptor"]
level: "foundation"
prerequisites: []
used_by: ["[[wiki/education/cellular-therapies/07-cytokines-and-programmable-receptors]]","[[wiki/education/guides/from-variant-to-drug/06-pi3k-akt-mtor-and-repair]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/molecular-profiling/evee-pathways/03-notch-wnt-and-fgfr]]","[[wiki/education/oncology-101/1-ligands]]","[[wiki/education/oncology-101/index]]"]
sensitive: false
tags: ["education", "biology-basics"]
updated: "2026-10-10"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Ligands and receptors

## In one sentence

A ligand is a molecule that binds a particular partner; a receptor is a protein that senses a signal and can change a cell’s behavior.

## The intuition

Think of a doorbell: a visitor makes contact, and something inside may respond. The analogy separates an interaction from its consequence. It breaks down if it suggests one fixed response. Molecular binding is often reversible, and a cell's partners and state affect what follows.

A molecule can bind without ringing the bell. It might block another visitor or use the address to deliver a package. Those possibilities deserve different experiments.

## How it works

A receptor is a [protein](/wiki/education/concepts/biology-basics/molecules/protein-and-peptide). Some receptors receive signals at the [cell membrane](/wiki/education/concepts/biology-basics/cells/cell-and-membrane); others receive them inside the cell. A ligand must reach the relevant binding site. [Receptor types](/wiki/education/concepts/biology-basics/signaling/receptor-types) explain these receiving mechanisms and why location does not determine every function.

Binding can change a receptor's shape or interactions. That may open an ion channel, alter an enzyme's activity or change gene regulation. An ion is an electrically charged particle. The resulting [signal transduction](/wiki/education/concepts/biology-basics/signaling/signal-transduction-and-kinases) depends on the receptor, cellular partners and timing.

[Agonists and antagonists](/wiki/education/concepts/biology-basics/signaling/agonist-and-antagonist) describe functional effects through a receptor. They are not alternative words for a ligand. A ligand can activate a measured response, oppose another ligand's action or have no detected effect on that response.

```mermaid
%%{init: {"htmlLabels":false,"flowchart":{"htmlLabels":false,"padding":4,"nodeSpacing":12}}}%%
flowchart TD
    A["Binding to a<br/>molecular partner<br/>may:"] --> B["Signal"]
    A --> C["Block"]
    A --> D["Target"]
    B --> E["Measure the<br/>resulting behavior"]
    C --> E
    D --> E
```

The short labels name three possible jobs: signal means activating a signal, block means blocking an interaction, and target means localizing a payload. These are possible jobs, not guaranteed outcomes. Each needs its own action measurement; binding alone does not establish any branch.

An [antibody–drug conjugate](/wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate) illustrates the last job. An accessible protein can serve as an address for delivery without being the cancer's main growth driver. Whether delivery works depends on the finished construct and its target; binding alone does not prove that it does.

## Why it matters in cancer

Keep four questions apart: can the molecule bind; does it change a function; does the cell depend on that function; and does the treatment help patients? An experiment can answer the first while leaving the other three open.

A receptor's presence does not establish dependence. Conversely, targeting a surface address can support a delivery strategy even when blocking that protein alone does not slow growth. Normal cells may share the address, so accessible binding is not evidence of tumor-only exposure or safety.

## How it is measured

[Affinity](/wiki/education/concepts/biology-basics/molecules/enzymes-and-binding) describes binding strength under specified conditions. A dissociation constant, **Kd**, commonly has molar units, such as nanomolar. A concentration–response experiment measures a defined function instead. Receptor amount and signal amplification can separate these measurements; a binding number is not a response percentage.

Record the partner, accessible location, free versus added ligand concentration, timing and controls. Surface staining, purified-protein binding and a living-cell response are different assays. To test dependence, perturb the proposed function and measure growth and survival, with controls for unrelated effects.

## Common confusions

- **Ligand versus agonist:** a binding partner need not activate the measured response.
- **Strong binding versus strong response:** the cell's receiving machinery matters.
- **Targeting address versus driver:** an address may be useful for delivery without driving growth.
- **Binding versus benefit:** delivery, dependence, exposure and clinical outcomes remain separate tests.

## Try it

In a fictional experiment, an antibody binds surface protein A on viable cells. Growth is unchanged. A colleague concludes, “A cannot be a useful targeting address.” Does that follow?

**Answer:** No. The experiment supports binding without growth inhibition by this antibody under these conditions. It has not tested an attached payload, immune-effector recruitment or a different blocking mechanism. Those require construct-specific experiments, including effects on normal cells. It also has not established that A is a growth dependency.

## Explain it back

“Binding tells me ___; activation or delivery requires ___; dependence requires ___.”

One answer: “which partners interact; a measurement of the proposed action; a controlled perturbation with a relevant cellular outcome.”

## Takeaway

**Name the binding partner, the proposed action and the experiment that actually measured that action.**

## Related concepts

- [Drug targets and mechanisms](/wiki/education/concepts/therapeutics/how-drugs-work/drug-target-and-mechanism).
- [The supporting binding lesson](/wiki/education/oncology-101/1-ligands).

## Sources and scope

Source check: October 10, 2026. General mechanism education; the antibody experiment is fictional. Expert and learner review remain pending.

- [Cooper, Signaling Molecules and Their Receptors (2000)](https://www.ncbi.nlm.nih.gov/books/NBK9924/): textbook receptor locations and receiving mechanisms.
- [Black and Leff (1983)](https://pubmed.ncbi.nlm.nih.gov/6141562/): a pharmacological model separating binding, receptor amount and transduction into response; no clinical benefit model.
- [NCI: targeted therapy](https://www.cancer.gov/about-cancer/treatment/types/targeted-therapies): distinct signaling, immune and payload-delivery mechanisms, with treatment toxicity remaining possible.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Cytokines and programmable receptors](/wiki/education/cellular-therapies/07-cytokines-and-programmable-receptors)
- [PI3K, AKT, and mTOR: competing effects on repair and recycling](/wiki/education/guides/from-variant-to-drug/06-pi3k-akt-mtor-and-repair)
- [Understand how the immune system recognizes cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Notch, Wnt, and FGFR: locate the signal before choosing a target](/wiki/education/molecular-profiling/evee-pathways/03-notch-wnt-and-fgfr)
- [Ask what happens after binding](/wiki/education/oncology-101/1-ligands)
- [Oncology 101: immune foundations](/wiki/education/oncology-101/index)
<!-- END GENERATED USED IN -->
