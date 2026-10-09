---
title: "Natural killer cells and missing-self recognition"
type: "concept"
domain: "immunology/innate-and-unconventional-cells"
summary: "Natural killer cells integrate activating and inhibitory signals, and reduced normal self-display can remove part of the inhibition that restrains them."
glossary_anchor: "nk-cell-and-missing-self"
aliases: ["NK", "NK cell", "missing-self"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/immunology/the-immune-system/innate-vs-adaptive-immunity]]", "[[wiki/education/concepts/immunology/antigen-presentation/hla]]"]
used_by: ["[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/oncology-101/4-escape-mechanisms]]","[[wiki/education/oncology-101/index]]"]
sensitive: false
tags: ["education", "immunology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Natural killer cells and missing-self recognition

## In one sentence

Natural killer cells integrate activating and inhibitory signals, and reduced normal self-display can remove part of the inhibition that restrains them.

## The intuition

A security check can ask both “Is something suspicious present?” and “Is a reassuring credential missing?” Natural killer cells use both kinds of information. Missing a credential raises concern, but the final response still depends on other signals. There is no automatic kill command attached to an empty badge holder.

## How it works

**Natural killer (NK)** cells are lymphocytes with innate recognition systems. Unlike conventional T cells, they do not rely on a rearranged antigen-specific [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor). Their surface receptors instead integrate signals from several partners.

Some inhibitory receptors recognize particular [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) class I molecules. When those expected self signals are reduced, inhibition can weaken. This is called **missing-self recognition**. The original experiments used mouse lymphoma cells missing mouse display molecules; they established a principle, not a guarantee for all human tumors. [Kärre and colleagues’ primary study](https://pubmed.ncbi.nlm.nih.gov/3951539/) makes that context explicit.

Activating inputs also matter. They can include stress-associated molecules on a target cell and signals from antibody-coated targets. The NK cell’s previous education, local environment and capacity to act affect the result. Human experiments show that receptor context and cytokine stimulation can change responsiveness. [Juelke et al.](https://pubmed.ncbi.nlm.nih.gov/19701893/) studied this under defined laboratory conditions.

NK cells can release molecules that damage target cells and can produce signaling proteins. They can also become inhibited in a tumor environment. Losing HLA may help a cancer evade some T cells while exposing a possible NK vulnerability. The word “possible” matters: these are interacting systems, not a guaranteed biological trade.

## Why it matters in cancer

NK recognition helps explain why different immune cells can notice different vulnerabilities. It also motivates engineered NK therapies. A missing-self mechanism does not establish that such a therapy reaches a solid tumor, persists or benefits a patient.

## Worked example

A fictional tumor loses one HLA allele. A TCR restricted to that allele may lose its display route. It does not follow that every NK cell now attacks: other inhibitory signals may remain, and activating signals may be inadequate. A functional assay must test the actual cell–target pair.

## Common confusions

- NK cells and natural killer T cells are different cell families.
- Loss of one HLA allele is not loss of all class I expression.
- “Innate” does not mean unregulated or always active.
- Missing self is a recognition principle, not a treatment-selection test.

## Related concepts

- [Immune-cell roster](/wiki/education/concepts/immunology/the-immune-system/immune-cell-roster)
- [Antibody structure](/wiki/education/concepts/immunology/antibodies-and-b-cells/antibody-structure)
- [Immune escape](/wiki/education/concepts/immunology/tumor-immunology/immune-escape)

## Sources and scope

Source check: October 9, 2026. General NK recognition, with animal and human experiments distinguished. Expert and learner review remain pending.

- [Kärre et al., 1986: rejection of display-deficient mouse lymphoma variants](https://pubmed.ncbi.nlm.nih.gov/3951539/).
- [Juelke et al., 2009: education of hyporesponsive human NK cells by cytokines](https://pubmed.ncbi.nlm.nih.gov/19701893/).
- [NCBI Bookshelf: natural killer cell function](https://www.ncbi.nlm.nih.gov/books/NBK565844/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Understand how the immune system recognizes cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Find the step an immune response can lose](/wiki/education/oncology-101/4-escape-mechanisms)
- [Oncology 101: immune foundations](/wiki/education/oncology-101/index)
<!-- END GENERATED USED IN -->
