---
title: "PI3K–AKT–mTOR: growth signals and resource use"
type: "concept"
domain: "cancer-biology/signaling-pathways"
summary: "PI3K–AKT–mTOR signaling links growth cues and available resources to cellular programs such as protein production, metabolism, and recycling."
glossary_anchor: "pi3k-akt-mtor"
aliases: ["PI3K", "AKT", "mTOR", "mTORC1", "mTORC2"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]", "[[wiki/education/concepts/biology-basics/signaling/ligand-and-receptor]]"]
used_by: ["[[wiki/education/guides/from-variant-to-drug/06-pi3k-akt-mtor-and-repair]]","[[wiki/education/molecular-profiling/evee-pathways/02-lipid-and-mtor]]","[[wiki/education/molecular-profiling/evee-proposed-pathways]]"]
sensitive: false
tags: ["education", "cancer-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# PI3K–AKT–mTOR: growth signals and resource use

## In one sentence

PI3K–AKT–mTOR signaling links growth cues and available resources to cellular programs such as protein production, metabolism, and recycling.

## The intuition

A workshop needs both a request to build and enough supplies. Growth signals resemble the request; nutrients and energy resemble the supplies. This network coordinates them. It is a branching control system with feedback, so a straight arrow diagram is only a starting sketch.

## How it works

**Phosphoinositide 3-kinase (PI3K)** modifies membrane lipids that help recruit signaling proteins. **AKT**, also called protein kinase B, is a kinase: an enzyme that adds phosphate groups to proteins. Its activation depends on location and phosphorylation at particular sites. Experiments identified roles for PDK1 and mTOR complex 2 in this regulation. [Alessi 1997](https://pubmed.ncbi.nlm.nih.gov/9368760/), [Sarbassov 2005](https://pubmed.ncbi.nlm.nih.gov/15718470/).

**Mechanistic target of rapamycin (mTOR)** is another kinase. It works in different protein complexes. **mTORC1** integrates growth and nutrient signals and regulates processes including protein synthesis and autophagy. **mTORC2** has distinct roles, including a contribution to AKT phosphorylation. Sharing mTOR does not make the two complexes interchangeable.

mTORC1 can promote biosynthesis and restrain parts of the autophagy-initiation machinery when conditions favor growth. Reducing this signal can release that restraint, but completed recycling still depends on the rest of the machinery. [Ganley 2009](https://pubmed.ncbi.nlm.nih.gov/19258318/).

**Feedback** means a downstream change alters an upstream signal. A drug may reduce one output while increasing another through feedback. The network therefore needs measurements at specified proteins, sites, and times.

## Why it matters in cancer

Cancer-associated changes can disturb growth signaling. Some tumors depend on a particular branch. Others can compensate through another route. A variant in a network member does not by itself reveal gain of function, loss of function, or drug sensitivity.

An RNA gene-set score summarizes messages related to the pathway. It does not directly measure kinase activity or identify the best point to inhibit.

## A worked example

In a fictional culture, an mTORC1-directed perturbation lowers phosphorylation of a protein-production regulator. AKT phosphorylation later increases. This is compatible with a network response involving feedback, rather than proof that the drug failed to touch mTORC1.

Growth remains unchanged. The experiment supports a biochemical effect but has not demonstrated a growth dependence. A second assay, suitable controls, and a survival measurement help separate those conclusions.

## Common confusions

- **Protein amount versus activity:** abundance and phosphorylation state are distinct measurements.
- **mTORC1 versus mTORC2:** the complex determines which functions are being tested.
- **One readout versus the entire pathway:** phosphorylated S6 is a downstream clue, not a universal activity meter.
- **Reduced signaling versus clinical benefit:** target engagement is one step in an evidence chain.

## How it is measured

Research assays follow phosphorylation at named sites, protein localization, synthesis, recycling, and cell survival. A report should state the specimen, timing, normalization, and comparator. Antibodies and preservation conditions matter. Pair the expected biochemical effect with genetic controls or a second perturbation when testing dependence.

## Related concepts

[Ligands and receptors](/wiki/education/concepts/biology-basics/signaling/ligand-and-receptor) explains incoming cues. [Autophagy](/wiki/education/concepts/cancer-biology/cell-death-and-survival/autophagy) explains the recycling output. [Cholesterol homeostasis](/wiki/education/concepts/cancer-biology/metabolism-and-stress/cholesterol-and-srebp) is another resource-control system. [The growth lesson](/wiki/education/molecular-profiling/evee-pathways/02-lipid-and-mtor) puts these measurements side by side.

## Sources

Source check: 2026-10-09. General mechanism education; the worked example is fictional. Expert and learner review pending.

- [Alessi 1997: PDK1 and AKT activation](https://pubmed.ncbi.nlm.nih.gov/9368760/).
- [Sarbassov 2005: AKT phosphorylation by the rictor–mTOR complex](https://pubmed.ncbi.nlm.nih.gov/15718470/).
- [Ganley 2009: mTOR signaling and autophagy initiation](https://pubmed.ncbi.nlm.nih.gov/19258318/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [PI3K, AKT, and mTOR: competing effects on repair and recycling](/wiki/education/guides/from-variant-to-drug/06-pi3k-akt-mtor-and-repair)
- [Lipid supply and mTOR: measuring resource control](/wiki/education/molecular-profiling/evee-pathways/02-lipid-and-mtor)
- [Pathway mechanisms: a supporting lesson library](/wiki/education/molecular-profiling/evee-proposed-pathways)
<!-- END GENERATED USED IN -->
