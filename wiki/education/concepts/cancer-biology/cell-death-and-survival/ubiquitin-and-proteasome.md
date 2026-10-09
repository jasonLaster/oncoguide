---
title: "Ubiquitin and the proteasome"
type: "concept"
domain: "cancer-biology/cell-death-and-survival"
summary: "The ubiquitin–proteasome system marks selected proteins for controlled breakdown, while other ubiquitin signals have jobs beyond destruction."
glossary_anchor: "ubiquitin-and-proteasome"
aliases: ["ubiquitin", "proteasome", "ubiquitination", "E3 ligase"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]"]
used_by: ["[[wiki/education/molecular-profiling/evee-pathways/01-autophagy-and-proteostasis]]","[[wiki/education/molecular-profiling/evee-pathways/04-cul3-nrf2-ferroptosis-and-bet]]","[[wiki/education/molecular-profiling/evee-proposed-pathways]]"]
sensitive: false
tags: ["education", "cancer-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Ubiquitin and the proteasome

## In one sentence

The ubiquitin–proteasome system marks selected proteins for controlled breakdown, while other ubiquitin signals have jobs beyond destruction.

## The intuition

Imagine removable labels attached to objects in a workshop. Some labels send an object to a shredder. Others change where it goes or who works with it. Ubiquitin is such a label, but its meaning depends on how it is attached. It is not a universal “destroy this” sticker.

## How it works

**Ubiquitin** is a small protein that can be attached to another protein. A series of enzymes performs the attachment. E1 activates ubiquitin using energy. E2 carries it. An **E3 ligase** helps select the target and assemble the signal. Many different E3 complexes recognize different targets. [Hershko 1983](https://pubmed.ncbi.nlm.nih.gov/6305978/).

One ubiquitin or a chain can be attached. The arrangement matters. Some chains help deliver a protein to the **proteasome**, a protein complex that unfolds suitable cargo and cuts it into small pieces. Ubiquitin is removed and recycled. Other ubiquitin signals organize trafficking, DNA-damage responses, or signaling rather than immediate destruction.

The proteasome therefore regulates protein quality and protein lifetime. It can remove damaged proteins and also working proteins whose job is finished. Protein abundance reflects both production and removal. A high amount could mean more synthesis, slower destruction, or both.

## Why it matters in cancer

Cancer cells may need to manage a large protein workload. Turnover also controls growth and stress regulators. But a variant in an E3 gene does not establish a general proteasome defect. You need to know which complex, target, and biochemical step are affected.

For example, [KEAP1–NRF2 signaling](/wiki/education/concepts/cancer-biology/signaling-pathways/nrf2-keap1) involves a CUL3-based E3 complex. CUL3 is a scaffold used with different adaptors. Its effect cannot be assigned to NRF2 from the gene name alone.

## A worked example

A fictional culture has high levels of protein P. After new protein synthesis is briefly halted under controlled conditions, P disappears more slowly than in a matched culture. This supports slower turnover of P in that experiment.

Next, researchers restore one altered E3 adaptor. P turnover returns toward the control state. The result supports a role for that adaptor in P handling. It still does not show that every proteasome substrate is affected or that the culture will benefit from a proteasome inhibitor.

## Common confusions

- **Ubiquitin versus degradation:** not every ubiquitin attachment causes destruction.
- **One ligase versus the whole system:** an adaptor can affect selected targets.
- **High protein abundance versus high production:** slow turnover can produce the same snapshot.
- **Target inhibition versus selective killing:** a proteasome inhibitor can engage its target without proving tumor-specific benefit.

## How it is measured

Research assays can measure proteasome catalytic activity, ubiquitinated cargo, and a specific protein's lifetime. These answer different questions. Protein-lifetime experiments require controls for altered synthesis, stress, and cell death. Genetic perturbation and restoration can help attribute a change to a particular regulator. A broad inhibitor is not a precise substitute for those controls.

## Related concepts

[Autophagy](/wiki/education/concepts/cancer-biology/cell-death-and-survival/autophagy) handles cellular cargo through lysosomes. [Wnt–β-catenin signaling](/wiki/education/concepts/cancer-biology/signaling-pathways/wnt-beta-catenin) also uses regulated protein destruction. [The supporting lesson](/wiki/education/molecular-profiling/evee-pathways/01-autophagy-and-proteostasis) compares recycling routes.

## Sources

Source check: 2026-10-09. General mechanism education; the worked example is fictional. Expert and learner review pending.

- [Hershko 1983: components of the ubiquitin-protein ligase system](https://pubmed.ncbi.nlm.nih.gov/6305978/).
- [Hershko and Rose 1987: ubiquitin recycling and protein breakdown](https://pubmed.ncbi.nlm.nih.gov/3031653/).
- [Kobayashi 2004: KEAP1 as an adaptor for CUL3-dependent NRF2 degradation](https://pubmed.ncbi.nlm.nih.gov/15282312/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Autophagy and proteostasis: amount, flow, and dependence](/wiki/education/molecular-profiling/evee-pathways/01-autophagy-and-proteostasis)
- [Stress defenses and chromatin readers: test the direction](/wiki/education/molecular-profiling/evee-pathways/04-cul3-nrf2-ferroptosis-and-bet)
- [Pathway mechanisms: a supporting lesson library](/wiki/education/molecular-profiling/evee-proposed-pathways)
<!-- END GENERATED USED IN -->
