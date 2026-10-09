---
title: "Immune checkpoints"
type: "concept"
domain: "immunology/immune-regulation"
summary: "Immune checkpoints are regulatory interactions that adjust immune-cell responses, including inhibitory pathways that help protect healthy tissue."
glossary_anchor: "immune-checkpoint"
aliases: ["checkpoint", "PD-1", "PD-L1", "CTLA-4"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/biology-basics/signaling/ligand-and-receptor]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-priming-three-signals]]"]
used_by: ["[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/guides/start-here/02-follow-immune-recognition]]","[[wiki/education/modeling-tumor-response/index]]","[[wiki/education/oncology-101/1-ligands]]","[[wiki/education/oncology-101/3-t-cell-states]]","[[wiki/education/oncology-101/4-escape-mechanisms]]","[[wiki/education/oncology-101/index]]"]
sensitive: false
tags: ["education", "immunology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Immune checkpoints

## In one sentence

Immune checkpoints are regulatory interactions that adjust immune-cell responses, including inhibitory pathways that help protect healthy tissue.

## The intuition

A useful response needs controls as well as an accelerator. The familiar “brake” analogy describes inhibition, but there are several brakes with different wiring. Releasing one does not supply a missing target, build a road into the tumor or repair every dysfunctional cell.

## How it works

Immune cells integrate stimulatory and inhibitory signals. **Programmed cell death protein 1 (PD-1)** is an inhibitory receptor on activated immune cells. Its partners include **programmed death-ligand 1 (PD-L1)** and PD-L2. Their interaction can reduce signals supporting a T-cell response. PD-L1 can be present on cancer cells and on noncancer cells. It is not a label reserved for tumors. [NCI’s checkpoint explanation](https://www.cancer.gov/about-cancer/treatment/types/immunotherapy/checkpoint-inhibitors) describes how drugs interrupt these interactions.

**Cytotoxic T-lymphocyte-associated protein 4 (CTLA-4)** regulates access to supporting activation signals. It shares binding partners, CD80 and CD86, with the stimulatory receptor CD28. Competition and removal of these partners can limit costimulation. [Primary experiments](https://pubmed.ncbi.nlm.nih.gov/21474713/) demonstrated one removal mechanism. CTLA-4 and PD-1 are often introduced as acting during priming and in peripheral responses, respectively. These are useful emphases, not strict anatomical boundaries.

A checkpoint-blocking antibody interrupts a particular pathway. It does not teach every T cell a new target. Useful activity still depends on recognition, access and cell function. Blocking normal immune regulation can also cause inflammation in healthy organs. More inhibition removed can mean more harmful activity, not simply more benefit.

## Why it matters in cancer

Checkpoint pathways can restrain cancer-reactive responses. They explain one treatment mechanism and one source of immune toxicity. Whether a drug helps in a particular cancer setting requires clinical evidence, separate from the mechanism.

## Worked example

A fictional sample has many PD-1-positive T cells. That is evidence about a measured protein. It does not establish that every cell is exhausted, recognizes cancer or will respond to PD-1 blockade. Some recently activated cells also express PD-1. [T-cell states](/wiki/education/concepts/immunology/t-cells/t-cell-states) need several features and functional context.

## Common confusions

- A checkpoint is a normal regulatory system that a tumor may exploit.
- PD-1 and PD-L1 are different proteins on potentially different cells.
- Blocking one pathway is not equivalent to blocking another.
- PD-1 expression alone does not diagnose exhaustion or predict benefit.

## How it is measured

Protein staining can measure selected checkpoint components. Gene-expression and functional studies add different information. A staining cutoff is assay- and disease-specific; it is not a universal definition of an immune brake being “on.”

## Related concepts

- [T-cell priming](/wiki/education/concepts/immunology/t-cells/t-cell-priming-three-signals)
- [Immune escape](/wiki/education/concepts/immunology/tumor-immunology/immune-escape)

## Sources and scope

Source check: October 9, 2026. Mechanisms of inhibitory checkpoints; approved uses and individual safety decisions belong in treatment and care pages. Expert and learner review remain pending.

- [NCI: immune checkpoint inhibitors](https://www.cancer.gov/about-cancer/treatment/types/immunotherapy/checkpoint-inhibitors).
- [Qureshi et al., 2011: CTLA-4-mediated removal of CD80/CD86](https://pubmed.ncbi.nlm.nih.gov/21474713/) — cell and animal mechanistic experiments.
- [Hui et al., 2017: CD28 as a target of PD-1-mediated inhibition](https://pubmed.ncbi.nlm.nih.gov/28280247/) — mechanistic experiments.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Understand how the immune system recognizes cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Follow the route to immune recognition](/wiki/education/guides/start-here/02-follow-immune-recognition)
- [Choose a tumor model for the question](/wiki/education/modeling-tumor-response/index)
- [Ask what happens after binding](/wiki/education/oncology-101/1-ligands)
- [Why a T-cell count does not tell the whole story](/wiki/education/oncology-101/3-t-cell-states)
- [Find the step an immune response can lose](/wiki/education/oncology-101/4-escape-mechanisms)
- [Oncology 101: immune foundations](/wiki/education/oncology-101/index)
<!-- END GENERATED USED IN -->
