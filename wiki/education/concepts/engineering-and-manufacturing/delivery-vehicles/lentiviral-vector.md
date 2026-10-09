---
title: "Lentiviral vector"
type: "concept"
domain: "engineering-and-manufacturing/delivery-vehicles"
summary: "A lentiviral vector is an engineered viral delivery system that carries genetic instructions into cells."
glossary_anchor: "lentiviral-vector"
aliases: ["lentiviral vector", "lentivirus vector"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]"]
used_by: ["[[wiki/education/cellular-therapies/06-in-vivo-delivery]]","[[wiki/education/guides/engineered-cell-therapy/07-reading-the-safety-plan]]","[[wiki/education/guides/engineered-cell-therapy/index]]"]
sensitive: false
tags: ["education", "engineering-and-manufacturing"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Lentiviral vector

## In one sentence

A lentiviral vector is an engineered viral delivery system that carries genetic instructions into cells.

## The intuition

A delivery vehicle carries instructions; the vehicle's address and the instructions' job are separate choices. A vector that enters a T cell may carry instructions for recognizing a cancer antigen. Entering the intended cell is only the start of that chain.

The vehicle analogy has a limit: genetic delivery can change a cell for a long time, and the change may be inherited when that cell divides.

## How it works

Common therapeutic lentiviral designs deliver an RNA genome. Reverse transcription makes a DNA copy, which can integrate into the recipient cell's genome. The cell then uses the added instruction cassette to make RNA and protein. See the [central dogma](/wiki/education/concepts/biology-basics/genetics/central-dogma) for those steps.

Manufacturing systems separate delivery instructions from proteins needed to produce the particles. Clinical vectors are designed to avoid a self-propagating infection. That design goal still requires appropriate testing for replication-competent virus; the word “engineered” is not the test result.

Integration-deficient designs also exist. Always identify the actual vector rather than assigning one persistence rule to every viral carrier. Integration can support durable expression, but it does not guarantee that the engineered cell survives, keeps expressing the payload or controls a tumor.

## Why it matters in cancer

A vector can install a [chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy) or another receptor in collected cells. Targeted in vivo delivery aims to do this inside the body. These locations change manufacturing and monitoring questions, while cancer recognition remains a separate job.

Integration can alter nearby gene regulation. Long-term risk assessment therefore considers integration, cell populations, persistence and the specific product. A short animal study cannot establish the absence of uncommon late harms in people.

## How it is measured

Vector measurements include identity, physical or functional particle dose, infectivity under a defined assay and replication-competent-virus testing. Cell measurements include vector copies, expression, integration patterns where relevant and functional activity. One positive measurement does not substitute for the rest.

A label such as “one million particles” also needs the assay definition. Physical particle counts and units of functional gene transfer answer different questions.

## Worked example

A fictional targeted vector reaches T cells in a mouse. Receptor-positive cells appear in blood. That supports delivery and expression in the measured setting. Investigators still need to assess which other cells received it, receptor function, tumor access and safety. A human benefit claim would require human evidence.

## Common confusions

- Viral delivery and infection by the original disease-causing virus are different entities.
- Delivery targeting is different from the engineered receptor's cancer target.
- Stable genetic insertion does not mean permanent treatment benefit.

## Related concepts

- [Ex vivo versus in vivo engineering](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/ex-vivo-vs-in-vivo-engineering)
- [Lipid nanoparticle](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/lipid-nanoparticle)

## Sources and scope

Source check: October 9, 2026. This page explains a method or mechanism. Expert and learner review remain pending.

- [Primary study of a modified, transient lentiviral delivery design](https://pubmed.ncbi.nlm.nih.gov/33553484/) — illustrates why vector architecture must be named.
- [FDA long-term follow-up guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/long-term-follow-after-administration-human-gene-therapy-products).
- [FDA testing guidance for retroviral-vector products](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/testing-retroviral-vector-based-human-gene-therapy-products-replication-competent-retrovirus-during).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [How to engineer T cells inside the body](/wiki/education/cellular-therapies/06-in-vivo-delivery)
- [Read the safety plan for engineered cells](/wiki/education/guides/engineered-cell-therapy/07-reading-the-safety-plan)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
<!-- END GENERATED USED IN -->
