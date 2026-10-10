---
title: "DNA damage response inhibitors: which repair dependency?"
type: "concept"
domain: "therapeutics/targeted-small-molecules"
summary: "DNA damage response inhibitors interfere with proteins that detect, signal, tolerate, or repair DNA damage, and their effects depend on the particular target and repair state."
glossary_anchor: "ddr-inhibitors"
aliases: ["DDR inhibitors", "DNA damage response inhibitor", "DNA damage response inhibitors"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd]]", "[[wiki/education/concepts/therapeutics/how-drugs-work/synthetic-lethality]]"]
used_by: []
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# DNA damage response inhibitors: which repair dependency?

## In one sentence

DNA damage response inhibitors interfere with proteins that detect, signal, tolerate, or repair DNA damage, and their effects depend on the particular target and repair state.

## The intuition

A workshop can pause a damaged production line, stabilize unfinished work, or repair a broken part. Removing one of those services matters most when the workshop relies on it. Cells have several such services. The analogy stops at the idea of a single repair crew: DNA repair and damage signaling are overlapping, dynamic networks.

## How it works

**DNA damage response (DDR)** includes more than repair enzymes. DNA means deoxyribonucleic acid, the information-bearing molecule described in the [central dogma](/wiki/education/concepts/biology-basics/genetics/central-dogma). Replication stress means difficulty copying DNA; the moving copying machinery can slow or stall.

Different inhibitors interrupt different jobs:

| Target | Job being interrupted | What the name alone cannot tell you |
|---|---|---|
| Ataxia telangiectasia and Rad3-related kinase (ATR) | Signals replication stress and supports checkpoint responses | Whether that tumor depends on ATR at a tolerable exposure |
| WEE1 kinase | Adds inhibitory phosphate marks to cyclin-dependent kinases, helping control progression through the cell cycle | Whether a TP53 alteration predicts benefit |
| DNA polymerase theta (POLθ), encoded by POLQ | Supports theta-mediated end joining, a repair route that can join DNA ends using short matching sequences | Whether every resistant tumor still needs this route |

A kinase is an enzyme that transfers phosphate groups. Inhibiting a damage checkpoint can let cells proceed with unresolved damage; inhibiting an end-joining enzyme removes a repair route. These are distinct mechanisms, even when both reduce survival in an experiment.

[Homologous recombination (HR)](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd) uses a matching template for repair. Loss of HR can make another repair function more important. That is a possible [synthetic-lethal relationship](/wiki/education/concepts/therapeutics/how-drugs-work/synthetic-lethality), which requires evidence about the paired losses. A historical genomic scar does not prove today's repair dependency.

## Why it matters in cancer

Primary POLθ studies found activity in selected HR-deficient models and some models resistant to poly(ADP-ribose) polymerase (PARP) inhibitors. PARP enzymes help organize responses to DNA damage. Resistance mechanisms were decisive: models with losses of the repair-regulating 53BP1/Shieldin machinery differed from models with BRCA2 reversions that restored gene function. In the novobiocin study, the tested BRCA2-reverted models resisted both PARP inhibition and novobiocin.

This is a useful boundary, not a universal sequencing rule. Different POLθ compounds target different parts of the protein. Neither a preclinical rescue experiment nor a mutation in TP53 establishes that a person should receive a DDR drug. Combinations can affect normal dividing cells as well as tumors; different targets do not guarantee nonoverlapping toxicity.

## How it is measured

Researchers distinguish target engagement, damage, repair capacity, and survival. Readouts can include phosphorylation at a named site, repair-protein foci per nucleus, and regrowth after drug removal. Foci are visible clusters of a protein; their presence alone does not prove successful repair. Compare matched repair states and genetic controls at specified times and concentrations, often reported in nanomoles per liter (nM) or micromoles per liter (µM). A culture concentration is not a clinical dose.

## Common confusions

- **DDR versus one repair pathway:** the label covers several jobs.
- **Scar versus function:** past damage patterns can persist after repair changes.
- **PARP resistance versus POLθ sensitivity:** the resistance mechanism matters.
- **TP53 mutation versus drug selection:** a mechanistic rationale is not a validated response rule.

## Try it

Two fictional cultures resist a PARP inhibitor. One retains a BRCA defect with 53BP1 loss; the other has a BRCA2 reversion. Can one POLθ result predict both?

**Answer:** No. Test each repair state and the actual compound. The primary model work shows why “PARP-resistant” is too broad a biomarker. Even a positive model result would leave clinical benefit and safety unresolved.

## Explain it back

“A DDR target does ___; sensitivity requires ___; resistance must be described by ___.”

One answer: “a particular damage-response job; an attributed dependency; its mechanism.”

## Takeaway

**Name the repair state and the interrupted job before interpreting a DDR drug result.**

## Related concepts

- [Chemical probes and target engagement](/wiki/education/concepts/therapeutics/how-drugs-work/chemical-probe-vs-drug-and-target-engagement).
- [Preclinical evidence](/wiki/education/concepts/evidence-and-statistics/study-design/preclinical-evidence).

## Sources

Source check: October 9, 2026. Mechanism education and selected model evidence; the exercise is fictional. Expert and learner review pending.

- [NCI: ceralasertib and ATR signaling](https://www.cancer.gov/publications/dictionaries/cancer-drug/def/ceralasertib).
- [NCI: adavosertib and WEE1 checkpoint control](https://www.cancer.gov/publications/dictionaries/cancer-drug/def/adavosertib).
- [Zatreanu et al., 2021: POLθ polymerase inhibition and defined resistance models](https://pubmed.ncbi.nlm.nih.gov/34140467/).
- [Zhou et al., 2021: novobiocin, POLθ, and the BRCA2-reversion boundary](https://pmc.ncbi.nlm.nih.gov/articles/PMC8224818/).

<!-- BEGIN GENERATED USED IN -->
## Used in

Browse the [concept index](/wiki/education/concepts/index) for related learning paths.
<!-- END GENERATED USED IN -->
