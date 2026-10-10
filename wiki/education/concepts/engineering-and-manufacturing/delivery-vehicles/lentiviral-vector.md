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
updated: "2026-10-10"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Lentiviral vector

## In one sentence

A lentiviral vector is an engineered viral delivery system that carries genetic instructions into cells.

## The intuition

Think of a carrier bringing instructions to a cell's workshop. The carrier, instructions and resulting protein are different objects. The analogy misses an important property: many lentiviral designs insert a DNA copy of those instructions into a chromosome.

**Before you start:** [DNA → RNA → protein](/wiki/education/concepts/biology-basics/genetics/central-dogma) explains expression. [Ex vivo versus in vivo engineering](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/ex-vivo-vs-in-vivo-engineering) describes where delivery occurs.

## How it works

Common lentiviral vectors package an RNA genome. After entry, **reverse transcription** makes DNA from the RNA. In an integrating design, the enzyme **integrase** helps insert vector DNA into the cell's chromosomes. An internal **promoter**, a sequence that controls transcription, can drive new RNA production from the inserted cassette; translation makes the encoded protein. This gene delivery is called **transduction**.

The carrier's surface proteins influence entry. Changing the envelope, sometimes called **pseudotyping**, changes a delivery property; it does not change which antigen an encoded [chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy) recognizes. Cell identity, receptor expression and function each need measurement.

Several design features are easy to confuse:

- **Replication-defective:** The delivered vector lacks the complete machinery needed to propagate as an ordinary virus. Manufacturing commonly supplies packaging and envelope functions separately. This design does not replace testing for replication-competent lentivirus.
- **Self-inactivating (SIN):** Regulatory sequences in the long terminal repeats are disabled to reduce their promoter/enhancer activity. An internal promoter can still express the cargo. SIN does **not** mean that an inserted cassette removes itself or cannot integrate.
- **Integration-deficient:** Integrase or other vector features are altered to reduce integration. A primary study demonstrated expression in specified cell cultures and mouse brain, with residual integration and expression loss in dividing cells. The name does not guarantee zero integration or durable expression in dividing T cells.

## Why it matters in cancer

An integrated receptor cassette can be inherited when an engineered cell divides. That can support continued expression, but does not guarantee survival, stable expression, tumor entry or useful killing. Integration sites, copy number and clonal behavior contribute to [insertional-mutagenesis assessment](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/insertional-mutagenesis). The risk depends on the complete product and cells, rather than a universal viral-versus-nonviral ranking.

## How it is measured

**Measurement card — a lentiviral delivery claim**

- **Input and consumption:** Vector-lot aliquots and recipient-cell samples; follow-up blood or tissue for in vivo questions. Destructive tests use finite material.
- **How and output:** Physical measures report particles or genome copies per volume. A functional titer reports transducing units per volume in a named test system. Cell assays can report vector copies per cell, receptor-positive percentage, insertion sites and antigen-dependent activity.
- **Thresholds and failures:** Methods, cell substrates and product specifications must be stated. A physical particle can be nonfunctional. An average copy number does not reveal every cell's copy number or insertion location.
- **Limits and validation:** Detecting vector DNA alone does not establish integration, surface protein or function. Replication-competent-virus testing and functional testing answer different questions. Laboratory transduction is not evidence of clinical tumor benefit.

## Worked example

A fictional targeted vector creates receptor-positive blood T cells in a mouse. That supports expression in the sampled cells. Unintended-cell exposure, insertion patterns, tumor access and antitumor function remain separate experiments; human benefit remains a further evidence question.

## Common confusions

- **Lentiviral vector equals ordinary viral infection:** A manufactured vector has an engineered design and requires its own quality tests.
- **SIN equals nonintegrating:** Reduced repeat-promoter activity and reduced integration are different modifications.
- **More copies equals better therapy:** Copy number does not settle expression, cell state, safety or efficacy.

## Try it

A fictional lot has many vector genomes per milliliter, but low functional titer on the specified test cells. A summary calls the assays contradictory. Are they?

**Answer:** Not necessarily. They measure different things: counted sequences versus successful transduction under defined conditions. Investigate particle function and assay suitability before interpreting biological activity.

## Explain it back

“Entry, integration, expression and target-cell killing are four ___.” One answer: “distinct claims, requiring appropriate measurements.”

## Takeaway

**Read the actual vector design and its measured activity; a carrier label or DNA count is not a clinical-effect result.**

## Related concepts

- [AAV vector](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/aav-vector)
- [Transposon insertion system](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/transposon)

## Sources and scope

Source check: October 10, 2026; expert and learner review pending. Historical design experiments establish mechanisms in their systems; FDA guidance supports product-specific safety assessment.

- [Naldini et al., 1996](https://pubmed.ncbi.nlm.nih.gov/8602510/) — foundational lentiviral gene transfer in defined cells and rat neurons.
- [Miyoshi et al., 1998](https://journals.asm.org/doi/10.1128/jvi.72.10.8150-8157.1998) — self-inactivating repeat design, with expression from an internal promoter.
- [Philippe et al., 2006](https://pubmed.ncbi.nlm.nih.gov/17095605/) — integration-deficient expression, division-related loss and residual integration in defined models.
- [FDA, January 2020: replication-competent retrovirus testing](https://www.fda.gov/media/113790/download) — vector manufacture and follow-up testing.
- [FDA, January 2020: long-term follow-up](https://www.fda.gov/media/113768/download) — integration-related risks and product-specific assessment.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [How to engineer T cells inside the body](/wiki/education/cellular-therapies/06-in-vivo-delivery)
- [Read the safety plan for engineered cells](/wiki/education/guides/engineered-cell-therapy/07-reading-the-safety-plan)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
<!-- END GENERATED USED IN -->
