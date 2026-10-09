---
title: "On-target, off-tumor toxicity"
type: "concept"
domain: "therapeutics/toxicities-and-supportive-care"
summary: "On-target, off-tumor toxicity occurs when a treatment recognizes its intended target on healthy tissue and harms that tissue."
glossary_anchor: "on-target-off-tumor-toxicity"
aliases: ["on-target off-tumor toxicity"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/therapeutics/cell-therapies/car-anatomy]]"]
used_by: ["[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]","[[wiki/education/guides/engineered-cell-therapy/02-choosing-a-target]]","[[wiki/education/guides/engineered-cell-therapy/07-reading-the-safety-plan]]","[[wiki/education/guides/engineered-cell-therapy/index]]","[[wiki/education/targeted-therapy-modalities/01-mechanism]]","[[wiki/education/targeted-therapy-modalities/06-comparisons]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# On-target, off-tumor toxicity

## In one sentence

On-target, off-tumor toxicity occurs when a treatment recognizes its intended target on healthy tissue and harms that tissue.

## The intuition

An address can be correct and still be unsafe to use. If the intended target appears on both cancer cells and an important healthy tissue, accurate recognition can harm both. Calling a receptor “specific” answers only part of the safety question.

## How it works

Many candidate cancer targets are normal proteins expressed at different levels or locations. A [chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy) or another targeted treatment may recognize its chosen molecular feature wherever it is accessible. Tissue location, target density, receptor properties and treatment exposure all affect the outcome.

This differs from off-target cross-reactivity, where the receptor recognizes an unintended molecular target. Both need investigation. It also differs from [cytokine release syndrome](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/cytokine-release-syndrome), which concerns systemic inflammatory activation. These categories can occur together rather than forming mutually exclusive boxes.

Developers assess target distribution and function in relevant healthy cells, using complementary methods. A stained tissue section is useful evidence but does not fully reproduce the living tissue's accessibility and treatment response. Animal models may not express the human target in the same places.

## Why it matters in cancer

Solid-tumor target selection asks two connected questions: does the tumor offer enough accessible target, and do important healthy tissues offer it too? A highly expressed tumor target can still have an unacceptable safety profile. A poorly expressed healthy-tissue target can still matter if the receptor responds at low density.

Affinity tuning, recognition logic and control switches may help particular designs. They need their own evidence. A switch that stops one receptor signal may leave engineered cells, other signals or existing tissue injury in place.

## Worked example

A fictional surface protein is abundant on a tumor and also present on normal airway cells. The tumor stain supports availability; it cannot settle safe recognition. Controlled healthy-cell testing and evidence about tissue accessibility are needed before a therapeutic claim can be assessed.

Compare a second fictional target with no signal in one normal-tissue assay. Ask whether the relevant organs, preparation methods and sensitivity were covered. An undetected signal is a result under named conditions, not proof of absence everywhere.

## Common confusions

- Tumor-associated does not mean tumor-exclusive.
- Binding specificity does not establish tissue selectivity.
- A safe antibody experience does not automatically establish the safety of a living cell with a different recognition and signaling system.
- An early study can miss uncommon harms or effects outside its model.

## How it is measured

Read the target distribution, tissue panel, receptor cross-reactivity studies and controlled functional tests. Clinical reports then add the actual organ effects, severity, timing and outcomes. No single “high expression” cutoff serves as a universal safety threshold.

## Related concepts

- [CAR anatomy](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy)
- [Ex vivo versus in vivo engineering](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/ex-vivo-vs-in-vivo-engineering)

## Sources and scope

Source check: October 9, 2026. This page explains a method or mechanism. Expert and learner review remain pending.

- [Primary ERBB2 CAR T-cell case report](https://pubmed.ncbi.nlm.nih.gov/20179677/) — a specific serious event, not an incidence estimate for all CAR therapies.
- [Primary claudin18.2 CAR study in preclinical models](https://www.nature.com/articles/s41467-025-61858-z).
- [FDA CAR T-cell preclinical and clinical-development guidance](https://www.fda.gov/media/156896/download).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
- [Choose a target with a usable safety window](/wiki/education/guides/engineered-cell-therapy/02-choosing-a-target)
- [Read the safety plan for engineered cells](/wiki/education/guides/engineered-cell-therapy/07-reading-the-safety-plan)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
- [Separate the address from the killing mechanism](/wiki/education/targeted-therapy-modalities/01-mechanism)
- [Compare formats with evidence and normal-tissue risk](/wiki/education/targeted-therapy-modalities/06-comparisons)
<!-- END GENERATED USED IN -->
